import { useState } from "react";
import Hello from "./components/HelloAndEvent";
import MyProps from "./components/myProps";
import MyPropsAsObjectDataPass from "./components/MyPropsAsObject";
import RenderingArraysLists from "./components/RenderingArraysLists";
import ConditionalRendering from "./components/ConditionalRendering";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const seatNumbers = [3, 5, 7];
  const myObj = {
    name: "Rama",
    message: "getwell soon",
    age: 2305,
    seat: seatNumbers,
  };

  return (
    <>
      <hr></hr>
      <Hello></Hello>
      <hr></hr>
      <MyProps
        name="sachin"
        message="Take care"
        age="25"
        seat={seatNumbers}
      ></MyProps>
      <hr></hr>
      <MyPropsAsObjectDataPass person={myObj}></MyPropsAsObjectDataPass>
      <hr></hr>
      <RenderingArraysLists></RenderingArraysLists>
      <hr></hr>
      <ConditionalRendering></ConditionalRendering>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
