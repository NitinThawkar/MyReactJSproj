import React from "react";

const FormActionTest = (formData) => {
  console.log("form data", formData);
  const name = formData.get("name");
  const age = formData.get("age");
  const email = formData.get("email");
  const save = formData.get("save");
  console.log("name", name, "age", age, "email", email, "save", save);
  alert(`name: ${name} age: ${age} email: ${email} save: ${save}`);
};

export default FormActionTest;

