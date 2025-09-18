import React from 'react'
import { useRef } from 'react'
import ChildImperativeHandleA from './PropAndStateLift/ChildImperativeHandleA'

function UseImperativeHandleTest() {
    const childRef = useRef();

  
  return (
    <>
    <div>UseImperativeHandleTest</div>
    <button onClick={() => childRef.current.callHello()}>Trigger Child Function</button>
    <ChildImperativeHandleA ref={childRef}></ChildImperativeHandleA>
    </>
  )
}

export default UseImperativeHandleTest