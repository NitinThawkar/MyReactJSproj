import React from "react";
import { useSyncExternalStore } from "react";
let score = 19;
let emit = null;
function UseSyncExternalStoreTest() {
  function handleScoreIncrease() {
    score++;
    console.log(score);
    emit();
  }
  return (
    <>
      <h2>UseSyncExternalStoreTest</h2>
      <Score />
      <button onClick={handleScoreIncrease}>Increase Score</button>
    </>
  );
  function subscribe(notify) {
    emit = notify;
  }

  function getSnapshot() {
    return score;
  }

  function Score() {
    const updatedScore = useSyncExternalStore(subscribe, getSnapshot);

    return <h1>Score is {updatedScore}</h1>;
  }
}

export default UseSyncExternalStoreTest;
