import { useState } from "react";

export default function MyFormInput() {
  const [fullName, setFullName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setFullName(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Enter your name"
          value={fullName}
        />
      </form>
    </div>
  );
}
