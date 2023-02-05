import React from "react";

import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from "../TodoCounter/index.js"; 
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal/index.js";

function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
    } = React.useContext(TodoContext);
    
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Error...</p>}
                {loading && <p>Cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Cree su primer ToDo...</p>}

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
             </TodoList>
             <Modal>
                <p>Test modal</p>
             </Modal>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };