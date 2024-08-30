import React from "react";
import { SignUp } from "@clerk/clerk-react";

const RegisterScreen = () => {
  return (
    <div>
      <h2>Register</h2>
      <SignUp />
    </div>
  );
};

export default RegisterScreen;
