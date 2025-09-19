import { useState } from "react";

export default function MyFormInput() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState({ firstName: "", lastName: "" });

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function fullNameChange(event) {
    setFullName(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Enter your name"
          value={name}
        />
        <hr></hr>
        FullName: {fullName.firstName} --{fullName.lastName} ---
        <input
          onChange={(e) =>
            setFullName({ ...fullName, firstName: e.target.value })
          }
          type="text"
          value={fullName.firstName}
        ></input>
        <input
          onChange={(e) =>
            setFullName({ ...fullName, lastName: e.target.value })
          }
          type="text"
          value={fullName.lastName}
        ></input>
      </form>
    </div>
  );
}
