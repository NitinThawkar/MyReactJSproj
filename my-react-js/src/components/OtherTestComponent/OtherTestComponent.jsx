import MuiCard from "../../MuiComponents/MuiCard";
import MuiModal from "../../MuiComponents/MuiModal";
import MuiParentModal from "../../MuiComponents/MuiModalNestedChild";
import Hello from "./HelloAndEvent";
import MyProps from "./MyProps";
import MyPropsAsObjectDataPass from "./MyPropsAsObject";
import RenderingArraysLists from "./RenderingArraysLists";
import ConditionalRendering from "./ConditionalRenderingAndStyle";
import MyState from "./MyState";
import MyFormInput from "./FormInputAndEvent";

function OtherTestComponent() {
  const seatNumbers = [3, 5, 7];
  const myObj = {
    name: "Rama",
    message: "getwell soon",
    age: 2305,
    seat: seatNumbers,
  };
  return (
    <>
      <h1>Other Test Component Practice</h1>
      <MuiCard />
      <MuiModal />
      <MuiParentModal />
      <hr />
      <Hello />
      <hr />
      <MyProps
        name="sachin"
        message="Take care"
        age="25"
        seat={seatNumbers}
      />
      <hr />
      <MyPropsAsObjectDataPass person={myObj} />
      <hr />
      <RenderingArraysLists />
      <hr />
      <ConditionalRendering />
      <hr />
      <MyState />
      <hr />
      <MyFormInput />
    </>
  );
}

export default OtherTestComponent;