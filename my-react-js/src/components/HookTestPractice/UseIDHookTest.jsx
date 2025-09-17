import React from "react";
//we can not use same useid  referance variable in multiple places in html, create new for each html element
function UseIDHookTest() {
  const elecid = React.useId();
  const elecid2 = React.useId();


  const frute = ["mango", "banana", "apple"];
  console.log("id", elecid);
  return (
    <>
      <div>UseIDHookTest</div>
      {frute.map((item, idx) => {
        return <p id={`${elecid}-${idx}`}>{item}</p>;
      })}   

     <input id={elecid} />
     <input id={elecid2} />
      <input id={`${elecid}-input`} />
    </>
  );
}

export default UseIDHookTest;
