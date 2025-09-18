//UseLayoutEffect use case: to avoid flickering of UI elements during rendering
//https://react.dev/learn/synchronizing-with-effects#uselayouteffect
//it is updated in dom before the browser paints the screen 
//whereas useEffect is run after the browser has painted the screen

import { useRef, useState, useEffect, useLayoutEffect } from "react";
function UseLayoutEffectTest() {
  const boxRef = useRef();
  const [textContent, setTextContent] = useState("Initial Text");

  useLayoutEffect(() => {
    if (boxRef.current.offsetWidth > 300) setTextContent("Updated Text");
  }, []);

  return (
    <>
    <h2>UseLayoutEffectTest</h2>
      <div ref={boxRef} style={{ border: "2px solid red", padding: "16px", width: "350px" }}>
        {textContent}
      </div>
    </>
  );
}

export default UseLayoutEffectTest;



//

// replaced useEffect with useLayoutEffect to avoid flickering of UI elements during rendering

//   useEffect(() => {
//     if (boxRef.current.offsetWidth > 300) setTextContent("Updated Text");
//   }, []);