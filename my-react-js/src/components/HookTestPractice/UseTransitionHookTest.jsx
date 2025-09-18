
import { useState, useTransition } from "react";
export default function UseTransitionHookTest() {

  // useTransition returns a stateful value for pending state and a function to start the transition.
  // It is used to mark some state updates as non-urgent.
  // This will make the app more responsive by avoiding blocking the UI during heavy rendering tasks.
  const [isPending, startTransition] = useTransition();
  const [val, setVal] = useState("");
  const [items, setItems] = useState([]);

  function changeHandler(event) {
    setVal(event.target.value);

    // Delaying time consuming operation put in transaction. this will make UI more responsive non blocking
    startTransition(() => {
      const arr = [];
      for (let i = 0; i < 20000; i++) {
        arr.push(event.target.value);
      }
      setItems(arr);
    });
  }

  return (
    <>
      <div>UseTransitionHookTest</div>
      <h2>React.js useTransition Hook</h2>

      <input type="text" value={val} onChange={changeHandler} />

      {isPending
        ? "Loading ... "
        : items.map((item, i) => <div key={i}>{item}</div>)}
    </>
  );
}
