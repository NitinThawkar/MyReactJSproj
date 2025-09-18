// useDeferredValue is used to defer the value update to improve performance and avoid lag in UI experience

import React from "react";

import ChildSerchData from "./PropAndStateLift/ChildSerchData";

function UseDeferredValueTest() {
  const [value, setValue] = React.useState("");

  function changeHandler(event) {
    setValue(event.target.value);
  } 

  return (
    <>
      <h2>UseDeferredValueTest</h2>
      <input type="text" value={value} onChange={changeHandler} />
      <ChildSerchData value={value}></ChildSerchData>
    </>
  );
}

export default UseDeferredValueTest;
