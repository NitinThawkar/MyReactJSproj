
import { useMemo, useState } from "react";
import PropTypes from "prop-types";

//React.memo (use for stop rerendaring  and useMemo is different it is use for cache output or keep output in memory)
//React.memo → prevents re-rendering of components.
//useMemo → prevents re-computation of values.
//React.memo is a higher-order component that wraps a component to prevent unnecessary re-renders. It only re-renders the component if its props change. Use it for functional components to optimize rendering.

//useMemo is a React hook that memoizes the result of a calculation (a value) between renders, recomputing only when its dependencies change. Use it to cache expensive computations or derived data inside a component.

function UseMemoHookTest({ ExpLogicCount }) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  // way one we can warp expensive logic in useMemo to avoid re-computation on every render
  const ExpensiveLogic = useMemo(() => {
    let tempNum = 0;
    console.log("Expensive Logic called");
    for (let i = 0; i < ExpLogicCount; i++) {
      tempNum++;
    }
    return tempNum;
  }, [ExpLogicCount]); // dependency array

  // 2 cleaner way we  assign function to variable and call that variable in jsx
  const VeryExpensiveLogic = () => {
    let tempNum = 0;
    console.log("very Expensive Logic called");
    for (let i = 0; i < ExpLogicCount; i++) {
      tempNum++;
    }
    return tempNum;
  };

  const VeryExpensiveLogic2 = useMemo(VeryExpensiveLogic, [ExpLogicCount]);

  return (
    <>
      <h2>UseMemoHookTest</h2>
      <div>
        <div>Count is {count}</div>
        <div>Expensive Logic Result is {ExpensiveLogic}</div>
        <div>Very Expensive Logic Result is {VeryExpensiveLogic2}</div>
        <button onClick={increase}>Increment</button>
      </div>
    </>
  );
}

UseMemoHookTest.propTypes = {
  ExpLogicCount: PropTypes.number.isRequired,
};

export default UseMemoHookTest;