import React, {useState} from "react";

export default props => {

    const [value, setValue] = useState('')

    const valueChangeHandler = event => {
        setValue(event.target.value)
    }

    return(
        <div className="d-flex text-center flex-column align-items-center">
            <div className="input-group w-50 p-2">
                <input
                    type="text"
                    className="form-control"
                    onChange={valueChangeHandler}
                    value={value}
                />
                <div className="input-group-prepend">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => props.onSearch(value)} >Поиск</button>
                </div>
            </div>
            <div className="m-2">
                <div>Для поиска введите Имя, Фамилию или email</div>
                <div>Для сортировки нажмите на название в шапке таблицы</div>
                <div>Чтобы получить подробную информанию нажмите на строку</div>
            </div>
        </div>
    )
}