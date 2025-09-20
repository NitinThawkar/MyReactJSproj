import { useContext } from "react";
import MessageContext from "./Contex/MessageContext";

function LevelThree() {
   //const message = "This is the third level using Context API";
    //avoid prop drilling by using useContext hook
    const [message] = useContext(MessageContext);

    return (
        <>
            {message ? (
                <>
                    <p>Third Level</p>
                    <p>using context message from first level</p>
                    <div className="third context">{message}</div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default LevelThree;