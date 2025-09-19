
import { useMemo, useState } from "react";
import PropTypes from "prop-types";

function UseMemoHookAdvanceTest({ ExpLogicCount }) {
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

UseMemoHookAdvanceTest.propTypes = {
  ExpLogicCount: PropTypes.number.isRequired,
};


export default UseMemoHookAdvanceTest

// this code without useMemo will call expensive logic on every render
//   const ExpensiveLogic = () => {
//     let tempNum = 0;
//     console.log("Expensive Logic called");
//     for (let i = 0; i < ExpLogicCount; i++) {
//       tempNum++;
//     }
//     return tempNum;
//   };

//   return (
//     <>
//       <h2>UseMemoHookTest</h2>
//       <div>
//         <div >Count is {count}</div>
//          <div >Expensive Logic Result is {ExpensiveLogic()}</div>
//         <button onClick={increase}>Increment</button>
//       </div>
//     </>
//   );