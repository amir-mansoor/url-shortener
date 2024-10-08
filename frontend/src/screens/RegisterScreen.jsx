import React from "react";
import { SignUp } from "@clerk/clerk-react";

const RegisterScreen = () => {
  return (
    <div className="container mx-auto h-[80vh]">
      <div className="flex justify-center items-center mt-10">
        <SignUp signInUrl="/login" />
      </div>
    </div>
  );
};

export default RegisterScreen;
