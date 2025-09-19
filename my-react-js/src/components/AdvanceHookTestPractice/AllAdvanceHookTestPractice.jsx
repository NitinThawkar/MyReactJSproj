import React from 'react'
import UseMemoHookAdvanceMain from './UseMemoHook/UseMemoHookAdvanceMain'
import ReactMemoAdvanceMain from './React.Memo/ReactMemoAdvanceMain'
import UseCallbackHookAdvanceMain from './UseCallbackHook/UseCallbackHookAdvanceMain' 
function AllAdvanceHookTestPractice() {
  return (
    <>
      <h1>All Advance Hook Test Practice</h1>
      <ReactMemoAdvanceMain></ReactMemoAdvanceMain>
      <hr/>
      <UseMemoHookAdvanceMain></UseMemoHookAdvanceMain>
      <hr/>
      <UseCallbackHookAdvanceMain></UseCallbackHookAdvanceMain>
    </>
  )
}

export default AllAdvanceHookTestPractice