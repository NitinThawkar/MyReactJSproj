import React from "react";

const FormActionTest = (prevState, formData) => {
  console.log("form data", formData);
  const name = formData.get("name");
  const age = formData.get("age");
  const email = formData.get("email");
  const save = formData.get("save");

  console.log("name", name, "age", age, "email", email, "save", save);
  alert(`name: ${name} age: ${age} email: ${email} save: ${save}`);

  if (name) {
    return { message: "Student Name=" + name };
  } else {
    return { message: "Student name is not inserted" };
  }
};

export default FormActionTest;
