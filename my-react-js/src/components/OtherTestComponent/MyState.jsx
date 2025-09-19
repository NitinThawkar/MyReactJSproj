import { useState } from "react";
export default function MyState() {
  const [count, setCount] = useState(0);
  const [seedVal, setSeedVal] = useState(0);
  console.log("MyState component called " + count);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function SeedVAlIncrement() {
    setSeedVal(seedVal + count);
  }
  function SeedVAldecrement() {
    setSeedVal(seedVal - count);
  }

  return (
    <div>
      <h3>MyState count {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={increment}>Increment 2 way</button>
      <button onClick={decrement}>Decrement </button>

      <button onClick={SeedVAlIncrement}>Seed Val Iecrement </button>
      <button onClick={SeedVAldecrement}>Seed Val Decrement </button>
      <h3>MyState Seed val count {seedVal}</h3>
    </div>
  );
}
