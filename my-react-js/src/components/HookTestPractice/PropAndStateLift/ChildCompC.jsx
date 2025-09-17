import React from 'react'
// this is example of state lifting from child component to parent component using increment function passed as prop from parent to child component
function ChildCompC({myname,Age,increment}) {
 
  return (
    <>
      <p>Hi I am getting value from parent as prop as prop destructuring in component function in curly braces <h3>{myname}</h3></p>
      <button id="increment-5" onClick={() => increment(5)}>Increment Parent Count</button>
      <button id="increment-1" onClick={() => increment((prevCount) => prevCount + 1)}>Increment Parent Count</button>

    </>
  )
}
export default ChildCompC