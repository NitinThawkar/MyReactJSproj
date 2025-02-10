const fullName = "Nitin";

function greeting() {
  return "Good morning";
}

function Hello() {
  return (
    <div>
      <h3>Hello world first component nitin ! </h3>
      <h3> variable calling Person Name : {fullName}</h3>
      <h3> fnction calling in expression : {greeting()}</h3>
    </div>
  );
}

export default Hello;
