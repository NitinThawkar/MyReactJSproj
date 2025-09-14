import { useReducer } from "react";

const ACTION_TYPES = {
  DECREMENT: "decrement",
};

function MyReducerBasic(state) {
  return { counter: state.counter + 1 };
}

function MyReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case ACTION_TYPES.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ReducerHookTest() {
  const [state, dispatch] = useReducer(MyReducerBasic, { counter: 0 });
  const [mystate, mydispatch] = useReducer(MyReducer, { count: 0 });

  function increment() {
    dispatch();
  }

  function decrement() {
    mydispatch({ type: "decrement" });
  }

  return (
    <>
      {" "}
      <div>ReducerHookTest</div>
      <h5>{state.counter}</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={() => mydispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => mydispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button onClick={() => mydispatch({ type: ACTION_TYPES.DECREMENT })}>
        Decrement
      </button>
      <button onClick={decrement}>Decrement</button>
      <h5>{mystate.count}</h5>
    </>
  );
}

export default ReducerHookTest;
