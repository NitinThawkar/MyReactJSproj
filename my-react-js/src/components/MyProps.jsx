// we can call props in 3 differt ways

export default MyProps;
//****************************************************//

// 1st way  pass all properties in function parameter in {} braces
function MyProps({ name, message, age }) {
  return (
    <div>
      <h3>
        I am from MyProp component # this is prop example test<br></br>
        Full Name# {name}
        <br></br>
        meaasge # {message}
        <br></br>
        Age # {age}
      </h3>
    </div>
  );
}
//****************************************************//**************************************************** *//
// 2nd way  pass all properties in const Object

function _MyProps(props) {
  console.log(props);
  console.log(JSON.stringify(props));
  const { name, message, age } = props; // props is object

  return (
    <div>
      <h3>
        I am from MyProp component # this is prop example test<br></br>
        Full Name# {name}
        <br></br>
        meaasge # {message}
        <br></br>
        Age # {age}
      </h3>
    </div>
  );
}

//****************************************************//**************************************************** *//
// 3rd way  prop as a function parameter
function __MyProps(props) {
  console.log(props);
  console.log(JSON.stringify(props));
  return (
    <div>
      <h3>
        I am from MyProp component # this is prop example test {props.name}
        <br></br>
        {props.message} working
        <br></br>
        {props.age}
      </h3>
    </div>
  );
}
//****************************************************//**************************************************** *//
