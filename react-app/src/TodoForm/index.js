import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    //estado local del componente
    const [newTodoValue, setNewTodoValue] = React.useState(''); 
    
    const {
        addTodo, setOpenModal
    } = React.useContext(TodoContext)
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();//ayuda en el envio de form para la recarga de la pagina
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Todo task"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit" //evento de envío de formulario
                    className="TodoForm-button TodoForm-button-add"                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };