import React, {Component} from 'react';
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import DetailRowView from "./DetailRowView/DetailRowView";
import ModeSelector from "./ModeSelector/ModeSelector";
import TableSearch from "./TableSearch/TableSearch";
import Alert from "./Alert/Alert";
import AddPerson from "./AddPerson/AddPerson";
import AddButton from "./AddPerson/AddButton";
import _ from 'lodash';
import ReactPaginate from 'react-paginate';


class App extends Component{

    state = {
        isModeSelected: false,
        isLoading: false,
        isAdding: false,
        data: [],
        search:'',
        sort: 'asc',
        sortField: 'id',
        row: null,
        currentPage: 0,
        addMode: false,
    }

    alert = {
        isAlerted: false,
    }

    async fetchData(url) {
        const response = await fetch(url)
        const data = await response.json()
        this.setState({
            isLoading: false,
            data: _.orderBy(data, this.state.sortField, this.state.sort)
        })
    }

    onSort = sortField => {
        const cloneData = this.state.data.concat();
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(cloneData, sortField, sort);
        this.setState({data, sort, sortField});
    }

    onRowSelect = row => (
        this.setState({row})
    )

    modeSelectHandler = url => {
        this.setState({
            isModeSelected: true,
            isLoading: true,
        })
        this.fetchData(url)
    }

    pageChangeHandler = ({selected}) => {
        this.setState({currentPage: selected})
    }

    searchHandler = search => {
        this.setState({search, currentPage: 0})
    }

    getFilteredData(){
        const {data, search} = this.state

        if (!search) {
            return data
        }

        else if (data.filter(item => {
                return  item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
        }).length === 0){
            this.alert.isAlerted = true
            return data
        }

        else {this.alert.isAlerted = false
            return data.filter(item => {
            return item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
        })}
    }

    addHandler = newPerson => {
        let temp = this.state.data;
        if (temp.some(e => e.id === newPerson.id) && temp.some(e => e.phone === newPerson.phone)){
            alert('Уже в списке');
        }
        else{
        temp.unshift(newPerson);
        this.setState({data: temp})
    }}

    closeHandler = event => {
        this.setState({isAdding: event})
    }

    render() {

        const pageSize = 50;

        if(!this.state.isModeSelected){
            return (
                <div className="container">
                    <ModeSelector onSelect={this.modeSelectHandler} />
                </div>
            )
        }

        const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / pageSize)
        const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];

        return (
            <div className="container-fluid p-0">

                {
                    this.state.isLoading
                    ?<Loader />
                    :<React.Fragment>
                        {this.alert.isAlerted
                        ?<Alert />
                        :null}
                        <TableSearch onSearch={this.searchHandler} />
                        {!this.state.isAdding
                        ?<AddButton
                            adderHandler={this.closeHandler}
                        />
                        :null}
                        {this.state.isAdding
                        ?<AddPerson
                            addNewPerson={this.addHandler}
                            adderHandler={this.closeHandler}
                        />
                        :null}
                        <Table
                            data={displayData}
                            onSort={this.onSort}
                            sort={this.state.sort}
                            sortField={this.state.sortField}
                            onRowSelect={this.onRowSelect}
                        />
                        </React.Fragment>

                }

                {
                    this.state.data.length > pageSize
                    ? <div className="container-fluid d-flex justify-content-center">
                            <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.pageChangeHandler}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            nextClassName="page-item"
                            previousLinkClassName="page-link"
                            nextLinkClassName="page-link"
                            forcePage={this.state.currentPage}
                        />
                    </div>
                    : null
                }

                {
                    this.state.row ? <DetailRowView person={this.state.row} /> : null
                }

            </div>
        );
    }
}

export default App;
