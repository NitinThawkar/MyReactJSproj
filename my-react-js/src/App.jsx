import { useState } from "react";
import Hello from "./components/HelloAndEvent";
import MyProps from "./components/myProps";
import MyPropsAsObjectDataPass from "./components/MyPropsAsObject";
import RenderingArraysLists from "./components/RenderingArraysLists";
import ConditionalRendering from "./components/ConditionalRenderingAndStyle";
import MyState from "./components/MyState";
import MyFormInput from "./components/FormInputAndEvent";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MuiCard from "./MuiComponents/MuiCard";
import MuiModal from "./MuiComponents/MuiModal";
import MuiParentModal from "./MuiComponents/MuiModalNestedChild";
import StateHookTest from "./components/HookTestPractice/StateHookTest";
import ReducerHookTest from "./components/HookTestPractice/ReducerHookTest";
import EffectHookTest from "./components/HookTestPractice/EffectHookTest";
import UseRefHookTest from "./components/HookTestPractice/UseRefHookTest";
import ParentCompA from "./components/HookTestPractice/PropAndStateLift/ParentCompA";
import UseImperativeHandleTest from "./components/HookTestPractice/useImperativeHandleTest";
import UseIDHookTest from "./components/HookTestPractice/UseIDHookTest";
import UseDebugValueTest from "./components/HookTestPractice/UseDebugValueTest";
import UseTransitionHookTest from "./components/HookTestPractice/UseTransitionHookTest";
import UseDeferredValueTest from "./components/HookTestPractice/UseDeferredValueTest";
import UseLayoutEffectTest from "./components/HookTestPractice/UseLayoutEffectTest";

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
      <MuiCard />
      <MuiModal />
      <MuiParentModal />

      <hr />
      <Hello />
      <hr />
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
      <MyState></MyState>
      <hr></hr>
      <MyFormInput></MyFormInput>
      <hr></hr>
      <StateHookTest></StateHookTest>
      <hr></hr>
      <ReducerHookTest></ReducerHookTest>
      <hr></hr>
      <EffectHookTest></EffectHookTest>
      <hr></hr>
      <UseRefHookTest></UseRefHookTest>
      <hr></hr>
      <UseIDHookTest></UseIDHookTest>
      <hr></hr>
      <UseImperativeHandleTest></UseImperativeHandleTest>
      <hr></hr>
      <UseDebugValueTest></UseDebugValueTest>
      <hr></hr> 
      <UseTransitionHookTest></UseTransitionHookTest>
      <hr></hr>
      <UseDeferredValueTest></UseDeferredValueTest>
      <hr></hr>
      <UseLayoutEffectTest></UseLayoutEffectTest>
      <hr></hr>
      {/* Vite + React boiler plate code */}
      <ParentCompA></ParentCompA>


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
