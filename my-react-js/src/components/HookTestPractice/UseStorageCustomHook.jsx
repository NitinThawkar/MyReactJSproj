import { useRef } from "react";
import { useLocalStorageCustomHook } from "./CustomHooks/useLocalStorageCustomHook";


import { useState } from "react";

const UseStorageCustomHook = () => {
  const inputRef = useRef(null);
  const { saveData, getData } = useLocalStorageCustomHook("country");
  const [storedValue, setStoredValue] = useState("");

  const save = () => {
    if (inputRef.current) {
      saveData(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const handleGet = () => {
    const value = getData();
    setStoredValue(value || "");
  };

  return (
    <>
      <div>UseStorageCustomHook</div>
      <div className="home">
        <input type="text" ref={inputRef} />
        <button onClick={save}>Store</button>
        <button onClick={handleGet}>Get</button>
        <div>Stored Value: {storedValue}</div>
      </div>
    </>
  );
};

export default UseStorageCustomHook;