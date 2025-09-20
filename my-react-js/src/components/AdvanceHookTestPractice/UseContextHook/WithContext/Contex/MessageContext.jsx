import { createContext, useState } from "react";

const MessageContext = createContext();

function Provider(props) {
  const [message, setMessage] = useState("Please subscribe and support");
  return (
    <MessageContext.Provider value={[message, setMessage]}>
      {props.children}
    </MessageContext.Provider>
  );
}

export { Provider };
export default MessageContext;
//--------------------------------------------------------------

// import { createContext, useState } from "react";

// const MessageContext = createContext();

// function MessageProvider({ children }) {
//   const [message, setMessage] = useState("Please subscribe and support");
//   return (
//     <MessageContext.Provider value={{ message, setMessage }}>
//       {children}
//     </MessageContext.Provider>
//   );
// }

// export { MessageProvider };
// export default MessageContext;


// Renamed Provider to MessageProvider for clarity and convention.
// Changed the context value from an array to an object { message, setMessage } for better readability and usage.
// Used destructuring for children in the provider props.