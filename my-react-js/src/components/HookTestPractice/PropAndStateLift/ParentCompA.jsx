{/* This is example will use child component B and child component C */}


import React from "react";
import ChildCompB from "./ChildCompB";
import ChildCompC from "./ChildCompC";

export default function ParentCompA() {
  return (
    <>
      
      <div>ParentCompA</div>
      <ChildCompB name="sachin"></ChildCompB>
      <ChildCompC myname="Nitin" Age={30}></ChildCompC>
    </>
  );
}
