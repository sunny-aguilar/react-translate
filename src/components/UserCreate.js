import React from "react";      // load react library
import Field from "./Field";    // load Field component
import Button from "./Button";  // load Button component

const UserCreate = () => {
  return (
    <div className="ui form">
      <Field />
      <Button />
    </div>
  );
};

export default UserCreate;