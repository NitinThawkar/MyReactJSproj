import React from 'react'
import { useFormStatus } from 'react-dom';
function UseFormStatusHookTest() {

  const { pending, formData } = useFormStatus();

  console.log("is app pending", pending);
  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 2000));
    console.log("submit");
}

const CustomerForm = () => {
    return (
        <form>
            <input type="text" placeholder="Enter Name" /><br />
            <input type="password" placeholder="Enter Password" /><br />
            <button type="submit" disabled={pending}>Submit</button>
        </form>
    );
};
  return (
   <>
    <div>useFormStatusHookTest</div>
       <h2>useFormStatus Hook in React js 19</h2>
        <form action={handleSubmit}>
		    <CustomerForm/>
		</form>
   </>
  )
}

export default UseFormStatusHookTest




//useFormState has been renamed to React.useActionState. 
// Please update UseFormStateHookTest to use React.useActionState.

// useFormState + useFormStatus = useActionState
// useFormState and  useFormStatus depricated in react 19 use useActionState
// use useActionState is the new combined hook for form state and status.
// useFormState has been renamed to React.useActionState.
// useFormStatus has been renamed to React.useActionStatus.

// UseFormStateHookTest and useFormStatusHookTest component commented