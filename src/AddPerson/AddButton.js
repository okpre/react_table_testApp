import React from "react";

export default props => {
    return(
        <div className="d-flex justify-content-center">
            <button className="btn btn-dark w-75 mt-1 mb-2"
                    onClick={() => props.adderHandler(true)}>Добавить новую запись</button>
        </div>
    )
}