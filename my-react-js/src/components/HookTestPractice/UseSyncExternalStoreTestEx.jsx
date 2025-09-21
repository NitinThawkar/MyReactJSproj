import React from "react";
import { useSyncExternalStore } from "react";
function UseSyncExternalStoreTestEx() {
  function handleScoreIncrease() {
    // Function body is empty
  }
  return (
    <>
      <h2>UseSyncExternalStoreTestEx</h2>
      <h2>Please Resize window by dragging the corner</h2>
      <Score />
      <button onClick={handleScoreIncrease}>Increase Score</button>
    </>
  );

  function subscribe(notify) {
    window.addEventListener("resize", notify);

    return function () {
      window.removeEventListener("resize", notify);
    };
  }

  function getSnapshot() {
    console.log("asdasdas");
    return window.innerWidth;
  }

  function Score() {
    const width = useSyncExternalStore(subscribe, getSnapshot);

    return <h1>width is {width}</h1>;
  }
}

export default UseSyncExternalStoreTestEx;
