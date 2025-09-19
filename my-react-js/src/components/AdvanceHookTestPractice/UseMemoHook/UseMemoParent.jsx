import React, { useState,useMemo } from "react";
import UseMemoChild from "./UseMemoChild";
// Parent component that manages state and passes props to the memoized Child component.
// It demonstrates how React.memo prevents unnecessary re-renders of the Child component
// when the parent state changes but the props passed to Child remain the same.
function UseMemoParent() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Harry");

  // rerendaring before memoization of object
  //const user = { name: username };

  //Stop rerendaring after memoization of object
  const user = useMemo(() => ({ name: username }), [username]); // to avoid re-creation of object on every render

  return (
    <div>
      <button onClick={() => setUsername("Ron")}>Change Name</button>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>

      <UseMemoChild user={user} />
    </div>
  );
}

export default UseMemoParent;
