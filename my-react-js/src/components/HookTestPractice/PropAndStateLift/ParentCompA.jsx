{
  /* This is example will use child component B and child component C */
}
//this example demonstrates prop ,passing data from parent to child component
//and state lifting, passing function from parent to child component to update parent state from child component
//here we pass setCount to achive state lifting
import React from "react";
import { useState } from "react";
import ChildCompB from "./ChildCompB";
import ChildCompC from "./ChildCompC";
import ChildCompD from "./ChildCompD";
export default function ParentCompA() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2> prop : passing data from parent to child and State lift</h2>
      <h2> State lift : passing data from child to parent </h2>
      <div>ParentCompA</div>
      <p>Parent Count: {count}</p>
      <ChildCompB name="sachin"></ChildCompB>
      <ChildCompC myname="Nitin" Age={30} increment={setCount}></ChildCompC>
      <ChildCompD name="Nitin" Age={30} isPerson={true}></ChildCompD>
      <hr></hr>
    </>
  );
}
