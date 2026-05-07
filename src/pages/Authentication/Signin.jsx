import React from "react";
import LoginInfo from "./components/LoginInfo";
import LoginForm from "./components/LoginForm";

const Signin = () => {
  return (
    <div className="min-h-screen bg-[#121212]  relative overflow-hidden flex items-center justify-center p-6">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-orange-900/20 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center relative z-10">
        <LoginInfo />
        <LoginForm />
      </div>
    </div>
  );
};

export default Signin;
