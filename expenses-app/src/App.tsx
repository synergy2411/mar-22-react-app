import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from './components/Expenses/Expenses';
import Demo from "./components/demo/Demo";
import ClassBasedComp from "./components/ClassBased/ClassBased";
import UseEffect from "./components/Hooks/UseEffect";

function App() {
  const [showComp , setShowComp] = useState<boolean>(true);
  return (
    <div>
      <p>Hello World of React!</p>
      {/* <UseEffect /> */}
      {/* <Expenses /> */}
      <button onClick={() => setShowComp(!showComp)}>Toggle Comp</button>
      {showComp && <UseEffect />} 
      {/* {showComp && <ClassBasedComp />}  */}
    </div>
  )
  
  // React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("p", {}, "Hello World from React")
  // );
}

export default App;
