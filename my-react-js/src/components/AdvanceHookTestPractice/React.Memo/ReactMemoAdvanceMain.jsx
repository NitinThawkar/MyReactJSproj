import React from "react";
import ReactMemoParent from "./ReactMemoParent";
import ReactMemoParentAA from "./ReactMemoParentAA";
import ReactMemoCustom from "./ReactMemoCustom";  

function ReactMemoAdvanceMain() {
  return (
    <>
      <div>
        <h2>React.Memo Advanced Example</h2>
        <ReactMemoParent />
        <hr />
        <ReactMemoParentAA />
        <hr />
        {/* if certain prop not change then only component will not re-render
           use prevProps and nextProps to compare specific props for re-rendering */}
        <ReactMemoCustom />
      </div>
    </>
  );
}

export default ReactMemoAdvanceMain;