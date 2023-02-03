import React from "react";
import './TodoCounter.css';

/*
otra forma para styles en linea
const styles = {
    color: 'red',
    backgroundColor: 'yellow',
};
<h2 style={styles}>
*/

function TodoCounter({total, completed}){

    return(
        <h2 className="TodoCounter"> Has completado {completed} de {total} ToDos</h2>
    )
}

export {TodoCounter};