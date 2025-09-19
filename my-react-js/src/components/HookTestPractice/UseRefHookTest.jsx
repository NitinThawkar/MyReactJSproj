// useRef acts like an instance variable; it will not cause re-render of the component
// It will retain value between renders, and can be used to store DOM element references or data

import { useState, useRef, useEffect } from "react";

function UseRefHookTest() {
  const [counter, setCounter] = useState(0);
  const [myname, setMyName] = useState("sachin");
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
    if (elementRef.current) {
      console.log(elementRef.current);
      elementRef.current.focus();
      elementRef.current.value = "Hello";
    }
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
        onChange={(e) => setMyName(e.target.value)}
        ref={elementRef}
      />
      <button onClick={focusInput}>Focus Input</button>
      <p>My name is {myname}</p>
      <p>Count Ref Value: {counterRef.current}</p>
    </>
  );
}

export default UseRefHookTest;