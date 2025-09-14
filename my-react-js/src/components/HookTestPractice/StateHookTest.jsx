import { useState } from "react";

function StateHookTest() {
  const [myStateHookcount, setCount] = useState(0);

  console.log("StateHookTest component called" + myStateHookcount);

  function increment() {
    setCount(myStateHookcount + 1);
  }

  return (
    <>
      <div>
        <h2>StateHookTest</h2>
        <h4>My count: {myStateHookcount}</h4>
      </div>
      <button onClick={increment}>Increment</button>

      <button onClick={() => setCount(myStateHookcount + 1)}>Increment 2 way</button>
    </>
  );
}

export default StateHookTest;
