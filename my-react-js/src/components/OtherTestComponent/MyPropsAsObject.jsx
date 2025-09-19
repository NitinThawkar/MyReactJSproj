function MyPropsAsObjectDataPass(props) {
  console.log(props);
  console.log(JSON.stringify(props));
  return (
    <div>
      <h3>
        I am from MyProp component # this is prop example test{" "}
        {props.person.name}
        <br></br>
        {props.person.age} working
        <br></br>
        {props.person.age}
        <br></br>
        Seat number # {props.person.seat}
      </h3>
    </div>
  );
}

export default MyPropsAsObjectDataPass;
