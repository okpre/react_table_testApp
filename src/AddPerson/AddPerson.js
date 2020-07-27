import React, {useState} from "react";

export default props => {

    const [id, setId] = useState('')
    const [firstName, setFName] = useState('')
    const [lastName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    let newPerson = {
        id,
        firstName,
        lastName,
        email,
        phone,
    }

    const ChangeSetId = event => {
        setId(event.target.value)
    }

    const ChangeSetFName = event => {
        setFName(event.target.value)
    }

    const ChangeSetLName = event => {
        setLName(event.target.value)
    }

    const ChangeSetEmail = event => {
        setEmail(event.target.value)
    }

    const ChangeSetPhone = event => {
        setPhone(event.target.value)
    }

    const addHandler = e => {
        setId('')
        setFName('')
        setLName('')
        setEmail('')
        setPhone('')
        props.addNewPerson(e)
    }

    return(
        <div className="d-flex m-2 flex-column">
            <form className="m-3">
                <div className="form-row d-flex justify-content-around">
                    <div className="col-2 mb-3">
                        <input type="number"
                               min="0"
                               className="form-control"
                               placeholder="ID"
                               value={id}
                               onChange={ChangeSetId}

                               />
                    </div>
                    <div className="col-2  mb-3">
                        <input type="text"
                               className="form-control"
                               placeholder="Имя"
                               value={firstName}
                               onChange={ChangeSetFName}
                               />
                    </div>
                    <div className="col-2  mb-3">
                        <input type="text"
                               className="form-control"
                               placeholder="Фамилия"
                               value={lastName}
                               onChange={ChangeSetLName}
                               />
                    </div>
                    <div className="col-2  mb-3">
                        <input type="email"
                               className="form-control"
                               placeholder="Email"
                               value={email}
                               onChange={ChangeSetEmail}
                               />
                    </div>
                    <div className="col-2  mb-3">
                        <input type="text"
                               className="form-control"
                               placeholder="Телефон"
                               value={phone}
                               onChange={ChangeSetPhone}
                               />
                    </div>
                </div>
            </form>
                <button className={"btn btn-dark w-75 mb-1"}
                        disabled={!(id && firstName && lastName && email && phone)}
                        type="submit"
                        onClick={() => addHandler(newPerson)}
                        style={{margin: '0 auto'}}>Добавить</button>

                <button className="btn btn-dark w-75 mt-1"
                        onClick={() => props.adderHandler(false)}
                        style={{margin: '0 auto'}}>Закрыть</button>
        </div>
)}