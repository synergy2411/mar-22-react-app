import React, { useState } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
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
import TodoEdit from "./pages/Todos/TodoEdit/TodoEdit";
import Counter from "./pages/Counter/Counter";
import Product from "./components/Product/Product";

function App() {
  let config = [
    {
      id : "p001",
      path : "/expenses",
      component : Expenses
    }
  ]

  return (
    <div>
      <Header />
      <p>Hello World of React!</p>
      <Product />

      <Switch>
       {config.map(c => {
         return <Route path={c.path} key={c.id} component={c.component}>
         </Route>
       })}

        <Route path="/" exact>
          <Redirect to="todos"/>
        </Route>
      {/* <Route path="/expenses">
        <Expenses />
      </Route> */}
      <Route path="/use-effect">
        <UseEffect />
      </Route>
      <Route path="/use-reducer">
        <UseReducer />
      </Route>
      <Route path="/use-ref">
        <UseRef />
      </Route>
      <Route path="/todos" exact>
        <Todos />
      </Route>
      <Route path="/todos/:todoId">
        <TodoEdit />
      </Route>
      <Route path="/add-todo">
        <AddTodo />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
      </Switch>
    </div>
  )
  
  // React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("p", {}, "Hello World from React")
  // );
}

export default App;
