import React from "react";

export default props => (
    <table className="table border-bottom">
        <thead className="thead-dark">
        <tr>
            <th onClick={props.onSort.bind(null, 'id')} scope="col">
                ID {props.sortField === 'id'
                ? props.sort === 'asc'
                    ?<i className="fa fa-caret-down" aria-hidden="true"></i>
                    :<i className="fa fa-caret-up" aria-hidden="true"></i>
                : null}
            </th>
            <th onClick={props.onSort.bind(null, 'firstName')} scope="col">
                Имя {props.sortField === 'firstName'
                ? props.sort === 'asc'
                    ?<i className="fa fa-caret-down" aria-hidden="true"></i>
                    :<i className="fa fa-caret-up" aria-hidden="true"></i>
                : null}
            </th>
            <th onClick={props.onSort.bind(null, 'lastName')} scope="col">
                Фамилия {props.sortField === 'lastName'
                ? props.sort === 'asc'
                    ?<i className="fa fa-caret-down" aria-hidden="true"></i>
                    :<i className="fa fa-caret-up" aria-hidden="true"></i>
                : null}
            </th>
            <th onClick={props.onSort.bind(null, 'email')} scope="col">
                E-mail {props.sortField === 'email'
                ? props.sort === 'asc'
                    ?<i className="fa fa-caret-down" aria-hidden="true"></i>
                    :<i className="fa fa-caret-up" aria-hidden="true"></i>
                : null}
            </th>
            <th onClick={props.onSort.bind(null, 'phone')} scope="col">
                Телефон {props.sortField === 'phone'
                ? props.sort === 'asc'
                    ?<i className="fa fa-caret-down" aria-hidden="true"></i>
                    :<i className="fa fa-caret-up" aria-hidden="true"></i>
                : null}
            </th>
        </tr>
        </thead>
        <tbody>
            { props.data.map(item=>(
                <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
        </tbody>
    </table>
)