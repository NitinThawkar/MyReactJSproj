import React, { useState, useEffect,useCallback } from "react";
function UseCallBackNeed() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

//// without useCallback, increment function will be recreated on every render
//   const increment = () => {
//     setCount(count + 1);
//   };

////warpping increment function in useCallback to prevent its recreation on every render
//// now increment function will be created only once
//// and it will have referance to latest state value using functional update of setState
   const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    console.log("Increment function is getting recreated");
  }, [increment]);

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <h1>Other Count: {otherCount}</h1>

      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other Count
      </button>

      <button onClick={increment}>Increment Count</button>
    </div>
  );
}
export default UseCallBackNeed;
