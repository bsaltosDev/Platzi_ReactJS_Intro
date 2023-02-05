//import logo from './logo.svg';
//import './App.css';

import React from "react";
import { AppUI } from "./AppUI";
/*const defaultTodos = [
  {text: 'Lista compras', completed: true},
  {text: 'Tomar curso intro react', completed: false},
  {text: 'Pago Facturas servicios', completed: true}
]*/

function useLocalStorage(itemName) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
  //call custom hook
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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
    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
