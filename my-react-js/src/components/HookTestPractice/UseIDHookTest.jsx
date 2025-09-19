import React from "react";
//we can not use same useid  referance variable in multiple places in html, create new for each html element
function UseIDHookTest() {
  const elecid = React.useId();
  const elecid2 = React.useId();


  const frute = ["mango", "banana", "apple"];
  console.log("id", elecid);
  return (
    <>
      <h2>UseIDHookTest</h2>
      {frute.map((item, idx) => {
        return <p key={idx} id={`${elecid}-${idx}`}>{item}</p>;
      })}   

     <input id={elecid} />
     <input id={elecid2} />
      <input id={`${elecid}-input`} />
    </>
  );
}

export default UseIDHookTest;
