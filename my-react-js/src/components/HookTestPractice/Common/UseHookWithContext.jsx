import React, { useContext } from "react";
import { Context } from "../AllReactHookTestPractice";

function UseHookWithContext() {
  const contextValue = useContext(Context);

  return (
    <>
      <h2>UseHookWithContext</h2>
      <div>UseHookWithContext: {contextValue}</div>
    </>
  );
}

export default UseHookWithContext;