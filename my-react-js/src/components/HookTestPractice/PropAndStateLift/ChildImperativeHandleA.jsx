import React, { forwardRef, useImperativeHandle } from "react";

//use or consume props and state from parent component to child component using useImperativeHandle and forwardRef
function ChildImperativeHandleA(props, ref) {

   let name = "Test";
  function sayHello() {

     name = "Nitin";
    
    console.log("Hello from ChildImperativeHandleA");

    //return "Hello from ChildImperativeHandleA";
  }

  useImperativeHandle(ref, () => {
    return {
      callHello: sayHello,

      // we can directly return function also instead of object like sayHello only if we have single function
      //  return sayHello or create object and add multiple functions
    };
  });
  return <>
  <div>ChildImperativeHandleA</div>
  <p>{name}</p>
  </>;
}
// we need to use forwardRef to forward ref from parent component to child component
export default forwardRef(ChildImperativeHandleA);
