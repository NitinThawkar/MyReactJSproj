import React from 'react'
import FormActionTest from './Common/FormActionTest';
import { useFormState } from 'react-dom';
const UseFormStateHookTest = () => {

  const initialState = {  message:null, }

  const { formState, handleChange } = useFormState(FormActionTest,initialState);
  console.log("formState", formState);
  return (
    <>
      <h2> useFormState Hook UseFormStateHookTest student information</h2>
      <form method="post" action={handleChange}>
        <input type="text" name="name" placeholder="Enter Name" /> <br />
        <input type="text" name="age" placeholder="Enter Age" /> <br />
        <input type="text" name="email" placeholder="Enter Email" /> <br />
        <button type="submit" name="save" value="SAVE">
          Submit
        </button>
      </form>
  {formState && formState.message && <p>{formState.message}</p>}
    </>
  );
}

export default UseFormStateHookTest;

//useFormState has been renamed to React.useActionState. 
// Please update UseFormStateHookTest to use React.useActionState.

// useFormState + useFormStatus = useActionState
// useFormState and  useFormStatus depricated in react 19 use useActionState
// use useActionState is the new combined hook for form state and status.
// useFormState has been renamed to React.useActionState.
// useFormStatus has been renamed to React.useActionStatus.
