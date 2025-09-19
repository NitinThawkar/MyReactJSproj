import React from 'react'

function ChildCompB(prop) {
console.log("ChildCompB props", prop);
  return (
    <div>ChildCompB {prop.name}</div>
  )
}

export default ChildCompB