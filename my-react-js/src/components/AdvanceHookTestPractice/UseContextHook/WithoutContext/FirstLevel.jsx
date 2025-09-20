import { useState } from 'react';
import SecondLevel from './SecondLevel';
// This component demonstrates prop drilling without using context
// It passes the message state down to SecondLevel and ThirdLevel components
function FirstLevel() {
    const [mymessage, setMessage] = useState("Please subscribe and support");

    const update = () => {
        setMessage("Thank you so much!");
    };

    return (
        <div className="first">
            <div className="title">Second Level</div>
            <SecondLevel message={mymessage} />
            <button onClick={update}>Update</button>
        </div>
    );
}

export default FirstLevel;
