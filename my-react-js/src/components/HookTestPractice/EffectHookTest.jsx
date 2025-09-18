import { useEffect, useState } from "react";

function EffectHookTest() {
  const [myName, setMyName] = useState("nitin");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("EffectHookTest every time on page load called ..");
  });

  useEffect(() => {
    console.log("Effect with empty dependency array one time called!");
    // This code runs only once after the initial render

    return () => {
      console.log("Cleanup function called!");
      // This code runs when the component unmounts // cleanup function
    };
  }, []); // Empty dependency array

  useEffect(() => {
    console.log("Effect when there is any change in dependacy array called!");
  }, [count]); // Empty dependency array

  function testClick() {
    //console.log("Button clicked!");
  }

   function StateChange() {
   setCount(count + 1);
   setMyName("Rama");
  }


  return (
    <>
      <h2>useEffect HookTest</h2>
      <button onClick={testClick}>Test Click</button>

      <button onClick={StateChange}>StateChange</button>

      <div>
        <p>Count: {count}</p>
        {/* <button onClick={() => setCount(count + 1)}>one time </button> */}
      </div>
    </>
  );
}

export default EffectHookTest;
