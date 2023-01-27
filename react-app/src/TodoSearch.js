import React from "react";
import './TodoSearch.css';
/*
Antiguo manejo de estado por clases en react
uso de constructor y método state y setState
class Componente  extends React.Component {
    constructor(){
        this.state = {

        };
    }

    render(){
        return (
            <div onClick={() => this.setState('')}><div/>
        )
    }
}*/

function TodoSearch(){
    const [searchValue, setSearchValue] = React.useState('');//hooks de React empiezan por use en vez de Clases para manejar estado

    /*
    el useState devuelve un array:
    posición 0 valor
    posición 1 función de cambio de estado
    en el cambio de estado se vuelve a renderizar componente
    */

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };
    
    return[
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            value={searchValue} //valor de input igual a estado por req de react
            onChange={onSearchValueChange}
        />,
        <p>{searchValue}</p>
    ];
}
export {TodoSearch};