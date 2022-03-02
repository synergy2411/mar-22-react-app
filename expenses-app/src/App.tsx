import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from './components/Expenses/Expenses';
import Demo from "./components/demo/Demo";

function App() {
  return (
    <div>
      <p>Hello World of React!</p>
      <Expenses />
    </div>
  )
  
  // React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("p", {}, "Hello World from React")
  // );
}

export default App;
