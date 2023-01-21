//import logo from './logo.svg';
//import './App.css';

import React from "react";

const todos = [
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Llorar con la llorona', completed: false}
]

function App() {
  return (
    <React.Fragment>
      {/*<TodoCounter />*/}
      <h2>Has completado 2 de 3 TODOS</h2>
      {/*<TodoSearch />*/}
      <input placeholder='Cebolla'/>
      {/*<TodoList>
        {todos.map(todo => (
          <TodoItem />
        ))}
      /*</TodoList>*/}
      {/*<CreateTodoButton />*/}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
