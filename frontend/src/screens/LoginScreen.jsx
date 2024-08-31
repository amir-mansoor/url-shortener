import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

const RegisterScreen = () => {
  return (
    <div className="container mx-auto h-[80vh]">
      <div className="flex justify-center items-center mt-10">
        <SignIn signUpUrl="/register" />
      </div>
    </div>
  );
};

export default RegisterScreen;
