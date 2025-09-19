import { useCallback, useState } from "react";
import UseCallBackChild from "./UseCallBackChild";

function UseCallBackParent() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // only rerender when  count changes
  // useCallback will return memoized version of increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div className="container">
      <h2>UseCallBackParent</h2>
      <h3>Count: {count}</h3>
      <h3>Other Count: {otherCount}</h3>
      <button onClick={() => setOtherCount(otherCount + 1)}>
        Increment Other Count
      </button>
      <UseCallBackChild increment={increment} />
    </div>
  );
}
export default UseCallBackParent;

{
  /*
    
  // only rerender once at page load

    const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  

   //  rerender every time 
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  });


//  rerender every time 
const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

 */
}
