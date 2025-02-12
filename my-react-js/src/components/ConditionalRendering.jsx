// Types of comment  support in  react ****************************************************//
// ConditionalRendering.jsx
/* Hello component  Start */
{
  /* This is only work in component  block in React */
}

const textStyleObj = { color: "blue", fontSize: "40px" };
export default function ConditionalRendering() {
  const isDisply = true; // change this value to false see the output

  if (isDisply) {
    return (
      <>
        <hr></hr>
        {/* This is inline style in React it must be inclosed double curly breses(fontSize use camel casing) */}
        <h3 style={{ color: "red" }}>
          {" "}
          this is conditional Rendering using frgment. it will display if
          isDisply is <b style={{ color: "red", fontSize: "25px" }}>True</b>
          {/* This is inline style using object */}
          <pre style={textStyleObj}>
            {" "}
            This text using inline style using object
          </pre>
        </h3>
      </>
    );
  } else {
    return (
      <>
        <h3>
          {" "}
          this is conditional Rendering using frgment. it will display if
          isDisply is <b>False</b>
        </h3>
      </>
    );
  }
}
