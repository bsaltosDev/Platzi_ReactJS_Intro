//import logo from './logo.svg';
//import './App.css';

import React from "react";
import { TodoCounter } from "./TodoCounter"; 
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const defaultTodos = [
  {text: 'Lista compras', completed: true},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Pago Facturas servicios', completed: true}
]

function App() {
  /* El estado debe estar cerca de los componentes, evitar
     rerenderizado q afecta el perfornmace de la app */
  const [searchValue, setSearchValue] = React.useState('');//hooks de React empiezan por use en vez de Clases para manejar estado
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => todo.completed == true).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
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
