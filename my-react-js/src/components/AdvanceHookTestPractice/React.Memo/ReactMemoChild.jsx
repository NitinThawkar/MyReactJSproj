
import React  from "react";


function ReactMemoChild({ count }) {
    console.log("Child Counter component is re-rendered");
    return <h2>Count: {count}</h2>;
};

export default React.memo(ReactMemoChild);

//---or -----------------------------

// const ReactMemoChild = ({ count }) => {
//     console.log("Child Counter component is re-rendered");
//     return <h2>Count: {count}</h2>;
// };
// export default ReactMemoChild.React.memo(ReactMemoChild);


//--- -----------------------------

//old code
// const ReactMemoChild = ({ count }) => {
//     console.log("Child Counter component is re-rendered");
//     return <h2>Count: {count}</h2>;
// };