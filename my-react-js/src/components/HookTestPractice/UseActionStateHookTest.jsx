import React, { useActionState } from "react";
import FormActionTest from "./Common/FormActionTest";

const UseActionStateHookTest = () => {
  const initialState = { message: null };
  const { formState, handleChange, isPending } = useActionState(
    FormActionTest,
    initialState
  );

  console.log("formState", formState);
  return (
    <>
      <h2>  useActionState Hook  UseActionStateHookTest student information</h2>
      <form  action={handleChange}>
        <input type="text" name="name" placeholder="Enter Name" /> <br />
        <input type="text" name="age" placeholder="Enter Age" /> <br />
        <input type="text" name="email" placeholder="Enter Email" /> <br />
        <button type="submit" name="save" value="SAVE" disabled={isPending}>
          Submit
        </button>
      </form>
      <p>{isPending ? "Submitting..." : formState?.message}</p>
    </>
  );
};

export default UseActionStateHookTest;

//useFormState has been renamed to React.useActionState.
// Please update UseFormStateHookTest to use React.useActionState.

// useFormState + useFormStatus = useActionState
// useFormState and  useFormStatus depricated in react 19 use useActionState
// use useActionState is the new combined hook for form state and status.
// useFormState has been renamed to React.useActionState.
// useFormStatus has been renamed to React.useActionStatus.
