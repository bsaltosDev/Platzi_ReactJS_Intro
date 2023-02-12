import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = (msg) => {
       props.setOpenModal(prevState => !prevState);//uso una function q devuelve la negacion del estado anterior
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