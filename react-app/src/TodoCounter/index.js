import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";

/*
otra forma para styles en linea
const styles = {
    color: 'red',
    backgroundColor: 'yellow',
};
<h2 style={styles}>
*/

function TodoCounter(){
    const {
        totalTodos, 
        completedTodos,
    } = React.useContext(TodoContext);

    return(
        <h2 className="TodoCounter"> Has completado {completedTodos} de {totalTodos} ToDos</h2>
    )
}

export {TodoCounter};