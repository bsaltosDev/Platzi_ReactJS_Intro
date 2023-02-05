import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    //call custom hook
    const {
        item: todos, //renombrado por uso de objetos de react hook custom
        saveItem:saveTodos, 
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    /* El estado debe estar cerca de los componentes, evitar
        rerenderizado q afecta el perfornmace de la app */
    const [searchValue, setSearchValue] = React.useState('');//hooks de React empiezan por use en vez de Clases para manejar estado
    const completedTodos = todos.filter(todo => todo.completed == true).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    if (!searchValue.length >= 1){
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text == text);
        
        // cambio de estado de React
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true
        // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text == text);
        
        // cambio de estado de React
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        // Cada que el usuario interactúe con nuestra aplicación se guardarán los TODOs con nuestra nueva función
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }