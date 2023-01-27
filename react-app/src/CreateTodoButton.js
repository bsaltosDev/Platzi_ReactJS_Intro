import react from "react";
import './CreateTodoButton.css';

function CreateTodoButton(){
    const onClickButton = (msg) => {
        alert (msg);
    }
    
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton("TODO: Abrir modal")}
        >
            +
        </button>
    );
}

export { CreateTodoButton};