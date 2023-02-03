//import logo from './logo.svg';
//import './App.css';

import React from "react";
import { TodoCounter } from "./TodoCounter"; 
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const todos = [
  {text: 'Cortar Cebolla', completed: true},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Llorar con la llorona', completed: false}
]

function App() {
  /* El estado debe estar cerca de los componentes, evitar
     rerenderizado q afecta el perfornmace de la app */
  const [searchValue, setSearchValue] = React.useState('');//hooks de React empiezan por use en vez de Clases para manejar estado

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
