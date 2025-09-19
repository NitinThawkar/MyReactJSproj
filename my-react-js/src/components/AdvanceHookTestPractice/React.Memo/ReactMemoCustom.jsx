import { useState } from 'react';
import ReactMemoPerson from './ReactMemoPerson';

function ReactMemoCustom() {
    const [person, setPerson] = useState({ name: "Harry", age: 15 });

    return (
        <div className="container">
            <ReactMemoPerson name={person.name} age={person.age} />
            <button onClick={() => setPerson({ ...person, age: person.age + 1 })}>
                Increment Age
            </button>
            <button onClick={() => setPerson({ ...person, name: 'Ron' })}>
                Update Name
            </button>
        </div>
    );
}

export default ReactMemoCustom;