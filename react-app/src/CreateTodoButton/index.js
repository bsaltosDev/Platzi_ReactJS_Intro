import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = (msg) => {
       props.setOpenModal(true);
    }
    
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton()}
        >
            +
        </button>
    );
}

export { CreateTodoButton};