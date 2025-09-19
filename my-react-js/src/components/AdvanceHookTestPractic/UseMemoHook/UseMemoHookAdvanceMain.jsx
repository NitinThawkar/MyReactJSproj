import { useState } from "react";
import UseMemoHookAdvanceTest from "./UseMemoHookAdvanceTest";


function UseMemoHookAdvanceMain() {
  const [loopcount, setLoopCount] = useState(50000000);

  function increase() {
    setLoopCount(loopcount + 1);
  }
  return (
    <>
      <h3>Use Advance MemoHook Main</h3>
      <UseMemoHookAdvanceTest ExpLogicCount={loopcount} />
      <button onClick={increase} >Increase Loop Count</button>
    </>
  );
}

export default UseMemoHookAdvanceMain;
