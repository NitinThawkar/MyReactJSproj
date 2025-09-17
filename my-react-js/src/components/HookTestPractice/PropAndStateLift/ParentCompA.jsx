{
  /* This is example will use child component B and child component C */
}

import React from "react";
import { useState } from "react";
import ChildCompB from "./ChildCompB";
import ChildCompC from "./ChildCompC";
import ChildCompD from "./ChildCompD";
export default function ParentCompA() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>ParentCompA</div>
      <p>Parent Count: {count}</p>
      <ChildCompB name="sachin"></ChildCompB>
      <ChildCompC myname="Nitin" Age={30} increment={setCount}></ChildCompC>
      <ChildCompD name="Nitin" Age={30} isPerson={true}></ChildCompD>
    </>
  );
}
 