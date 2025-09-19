import {useState} from 'react'
import ReactMemoChildAA from './ReactMemoChildAA';

function ReactMemoParentAA() {
    const [firstCount, setFirstCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    const person = { name: 'John', age: 30 };

    console.log("ParentAA component is re-rendered");

    return (
        <div>
            <ReactMemoChildAA firstCount={firstCount} person={person} />
            <button className="large" onClick={() => setFirstCount(firstCount + 1)}>Increment First Count</button>
            <button className="large" onClick={() => setSecondCount(secondCount + 1)}>Increment Second Count</button>
        </div>
    );
}

export default ReactMemoParentAA;