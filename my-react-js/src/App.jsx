import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AllAdvanceHookTestPractic from "./components/AdvanceHookTestPractic/AllAdvanceHookTestPractic";
import OtherTestComponent from "./components/OtherTestComponent/OtherTestComponent";
import AllReactHookTestPractic from "./components/HookTestPractice/AllReactHookTestPractic"; 


function App() {
  return (
    <>
      <OtherTestComponent />
      <hr />
      {/* <AllReactHookTestPractic /> */}
      <hr />
      {/* <AllAdvanceHookTestPractic /> */}
      <hr />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;