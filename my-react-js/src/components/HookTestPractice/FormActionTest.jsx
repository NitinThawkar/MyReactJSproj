import React from "react";

const formAction = (formData) => {
  console.log("form data", formData);
  const name = formData.get("name");
  const age = formData.get("age");
  const email = formData.get("email");
  const save = formData.get("save");
  console.log("name", name, "age", age, "email", email, "save", save);
  alert(`name: ${name} age: ${age} email: ${email} save: ${save}`);
};

const FormActionTest = () => {
  return (
    <>
      <h2>Form ActionTest student information</h2>
      <form method="post" action={formAction}>
        <input type="text" name="name" placeholder="Enter Name" /> <br />
        <input type="text" name="age" placeholder="Enter Age" /> <br />
        <input type="text" name="email" placeholder="Enter Email" /> <br />
        <button type="submit" name="save" value="SAVE">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormActionTest;

