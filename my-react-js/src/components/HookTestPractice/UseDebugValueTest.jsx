//Check in React Dev Tool
//We can not see useDebugValue in console
//It is used to display a label for custom hooks in React Dev Tools

import React from 'react'
import { useDebugValue } from 'react';

function UseDebugValueTest() {
  const [value, setValue] = React.useState(0);
  useDebugValue(value > 0 ? 'Positive' : 'Negative');

  return (
    <>
    <h2>UseDebugValueTest</h2>

    <p>Check in React Dev Tool</p>
    <p>We can not see useDebugValue in console</p>
    <p>It is used to display a label for custom hooks in React Dev Tools</p>
    <p>Value: {value}</p>

    <button onClick={() => setValue(value + 1)}>Increment</button>
    <button onClick={() => setValue(value - 1)}>Decrement</button>
    </>
  )
}

export default UseDebugValueTest