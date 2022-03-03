import React, { useState } from "react";
import { Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from './components/Expenses/Expenses';
import Demo from "./components/demo/Demo";
import ClassBasedComp from "./components/ClassBased/ClassBased";
import UseEffect from "./components/Hooks/UseEffect";
import UseReducer from "./components/Hooks/UseReducer";
import UseRef from "./components/Hooks/UseRef";
import Todos from "./pages/Todos/Todos";
import Header from "./components/Header/Header";
import AddTodo from "./pages/Todos/AddTodo/AddTodo";

function App() {
  return (
    <div>
      <Header />
      <p>Hello World of React!</p>
      <Route path="/expenses">
        <Expenses />
      </Route>
      <Route path="/use-effect">
        <UseEffect />
      </Route>
      <Route path="/use-reducer">
        <UseReducer />
      </Route>
      <Route path="/use-ref">
        <UseRef />
      </Route>
      <Route path="/todos">
        <Todos />
      </Route>
      <Route path="/add-todo">
        <AddTodo />
      </Route>
    </div>
  )
  
  // React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("p", {}, "Hello World from React")
  // );
}

export default App;
