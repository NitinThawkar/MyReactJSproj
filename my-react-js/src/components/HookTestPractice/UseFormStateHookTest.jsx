import React from 'react'
import FormActionTest from './Common/FormActionTest';
const UseFormStateHookTest = () => {
  return (
    <>
      <h2> useFormState Hook UseFormStateHookTest student information</h2>
      <form method="post" action={FormActionTest}>
        <input type="text" name="name" placeholder="Enter Name" /> <br />
        <input type="text" name="age" placeholder="Enter Age" /> <br />
        <input type="text" name="email" placeholder="Enter Email" /> <br />
        <button type="submit" name="save" value="SAVE">
          Submit
        </button>
      </form>
    </>
  );
}

export default UseFormStateHookTest