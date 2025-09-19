import { useState } from "react";
import ReactMemoChild from "./ReactMemoChild";

function ReactMemoParent() {
    console.log("Parent component is re-rendered");
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('');
    
    return (
        <div className="container">
            <ReactMemoChild count={count} />
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <input 
                type="text"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                placeholder="Type something..."
            />
        </div>
    );
}
export default ReactMemoParent;