import ParentCompA from "./PropAndStateLift/ParentCompA";
import StateHookTest from "./StateHookTest";
import ReducerHookTest from "./ReducerHookTest";
import EffectHookTest from "./EffectHookTest";
import UseRefHookTest from "./UseRefHookTest";
import UseImperativeHandleTest from "./UseImperativeHandleTest";
import UseIDHookTest from "./UseIDHookTest";
import UseDebugValueTest from "./UseDebugValueTest";
import UseTransitionHookTest from "./UseTransitionHookTest";
import UseDeferredValueTest from "./UseDeferredValueTest";
import UseLayoutEffectTest from "./UseLayoutEffectTest";
import UseStorageCustomHook from "./UseStorageCustomHook";
import UseMemoHookTest from "./UseMemoHookTest";
import UseContextHookTest from "./UseContextHookTest";
import UseInsertionEffectHookTest from "./UseInsertionEffectHookTest";
import FormActionTest from "./FormACtionTest";

function AllReactHookTestPractice() {
  return (
    <>
      <h1>All React Hook Test Practice</h1>
      <StateHookTest />
      <hr />
      <ReducerHookTest />
      <hr />
      <EffectHookTest />
      <hr />
      <UseRefHookTest />
      <hr />
      <UseIDHookTest />
      <hr />
      <UseImperativeHandleTest />
      <hr />
      <UseDebugValueTest />
      <hr />
      <UseTransitionHookTest />
      <hr />
      <UseDeferredValueTest />
      <hr />
      <UseLayoutEffectTest />
      <hr />
      <UseStorageCustomHook />
      <hr />
      <UseMemoHookTest ExpLogicCount={1000000000} />
      <hr />
      <UseContextHookTest />
      <hr />
      <UseInsertionEffectHookTest></UseInsertionEffectHookTest>
      <hr />
      <FormActionTest />
      <hr />
      <ParentCompA />
    </>
  );
}

export default AllReactHookTestPractice;
