//use ref act like instance variable , it will not cause re render of component
// , it will retain value between renders,wecan use it ti store dom element reference or data

import React, { useState, useRef, useEffect } from "react";

function UseRefHookTest() {
  const [myname, setMyName] = useState("sachin");
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);
  const elementRef = useRef();

  console.log("UseRefHook Rendered");

  useEffect(() => {
    counterRef.current = counterRef.current + 1;
  });

  //  useEffect(() => {
  //  setCounter((counter) => counter + 1);
  // });

  function focusInput() {
    console.log(elementRef.current);
    elementRef.current.focus();
    elementRef.current.value = "Hello";
  }
  return (
    <>
      <h2>UseRefHook</h2>
      <input
        type="text"
        value={myname}
        onChange={(e) => setMyName(e.target.value)}
      />
      <input
        type="text"
        value={myname}
        ref={elementRef}

        //onChange={focusInput}
      />
      <button onClick={focusInput}>Focus Input</button>

      <p>My name is {myname}</p>
      <p>Count Ref Value: {counterRef.current}</p>
    </>
  );
}

export default UseRefHookTest;
