import React from "react";
import { useRef } from "react";
import ChildImperativeHandleA from "./PropAndStateLift/ChildImperativeHandleA";

function UseImperativeHandleTest() {
  const childRef = useRef();

  function triggerChildIncrease() {
    // we can call child component function using ref
    childRef.current.increaseVal();
  }

  return (
    <>
      <h2>UseImperativeHandleTest</h2>

      <button onClick={() => childRef.current.callHello()}>
        Trigger Child Hello
      </button>

      <button onClick={triggerChildIncrease}>Trigger Child Increase</button>
      <ChildImperativeHandleA ref={childRef}></ChildImperativeHandleA>
    </>
  );
}

export default UseImperativeHandleTest;
