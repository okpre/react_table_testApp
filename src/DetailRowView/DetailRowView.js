import React from "react";

export default ({person}) => (
    person.description === undefined
    ?<div className="d-flex flex-column align-items-center m-3">
        <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>
        <p><b>Подробная информация отсутствует</b></p>
    </div>
    :<div className="d-flex flex-column align-items-center">
        <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>
        <p>
            Описание: <br />
            <textarea defaultValue={person.description} />
        </p>
        <p>
            Адрес проживания: <b>{person.address.streetAddress}</b>
        </p>
        <p>
            Город: <b>{person.address.city}</b>
        </p>
        <p>
            Провинция/штат: <b>{person.address.state}</b>
        </p>
        <p>
            Индекс: <b>{person.address.zip}</b>
        </p>
    </div>
)