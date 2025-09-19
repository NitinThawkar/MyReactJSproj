import React from "react";
import { useState } from "react";
import { AppContext } from "./Common/AppContext";
import FunctionContextComponent from "./Common/FunctionContextComponent";
function UseContextHookTest() {
  const [theme, setTheme] = useState(true);

  function changeHandler() {
    setTheme((prevTheme) => !prevTheme);
  }

  return (
    <>
      <h2>UseContextHookTest</h2>
      <div className="container">
        <AppContext.Provider value={theme}>
          <button onClick={changeHandler}>Change Theme</button>
          <FunctionContextComponent />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default UseContextHookTest;
