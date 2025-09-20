import React from 'react'

function useFormStatusHookTest() {
  return (
    <div>useFormStatusHookTest</div>
  )
}

export default useFormStatusHookTest

//useFormState has been renamed to React.useActionState. 
// Please update UseFormStateHookTest to use React.useActionState.

// useFormState + useFormStatus = useActionState
// useFormState and  useFormStatus depricated in react 19 use useActionState
// use useActionState is the new combined hook for form state and status.
// useFormState has been renamed to React.useActionState.
// useFormStatus has been renamed to React.useActionStatus.

// UseFormStateHookTest and useFormStatusHookTest component commented