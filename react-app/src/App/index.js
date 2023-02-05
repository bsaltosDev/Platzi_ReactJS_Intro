//import logo from './logo.svg';
//import './App.css';

import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>  
  );
}

export default App;
