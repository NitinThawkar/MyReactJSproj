const fullName = "Nitin";

{
  /* same function also defined in hellow component */
}
function greeting() {
  console.log("Good morning");
  return "Good morning";
}

function sum(a, b) {
  console.log("Sum of a and b is : ", a + b);
}

/* Hello component  Start */
function Hello() {
  /* same function greeting also defined abow */
  function greeting() {
    console.log("Good Afternoon");
    return "Good Afternoon";
  }

  return (
    <div>
      <h3>Hello world first component nitin ! </h3>
      <h3> variable calling Person Name : {fullName}</h3>
      <h3> fnction calling in expression : {greeting()}</h3>
      <br></br>
      ------------------Event Function nested function-------------------
      {/* This is a comment in React */}
      {/*<button onClick={alert(greeting())}>Click me 1</button>*/}
      <br></br>
      ------------------Event Function nested function-------------------
      <button onClick={greeting}>Click me 2</button>
      <br></br>
      ------------------Event Function call with arguments-------------------
      <br></br>
      <button onClick={() => sum(3, 5)}>Click me 3</button>
    </div>
  );
}

export default Hello;
