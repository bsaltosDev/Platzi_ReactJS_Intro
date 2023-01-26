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

function TodoCounter(){
    return(
        <h2 className="TodoCounter"> Has completado 2 de 3 ToDos</h2>
    )
}

export {TodoCounter};