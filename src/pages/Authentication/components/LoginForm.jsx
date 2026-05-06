import React, { useState } from "react";
import { Mail, Lock, LogIn, User } from "lucide-react";
import ForgotPassword from "./ForgotPassword";

const LoginForm = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
  }

  return (
    <div className="flex justify-center lg:justify-end">
      <div className="w-full max-w-120">
        <div className="bg-white rounded-[2.5rem] p-4 md:p-8 shadow-2xl border border-gray-100">
          <div className="flex items-center gap-5 mb-10">
            <div className="bg-orange-50 p-4 rounded-2xl">
              <User className="text-orange-600 w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                Welcome Back
              </h2>
              <p className="text-gray-400 text-sm">
                Sign in to your student account
              </p>
            </div>
          </div>

          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-500 font-medium">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-orange-600 font-bold hover:underline"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot password?
              </button>
            </div>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-200 active:scale-95">
              <User size={18} />
              Sign In
            </button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300"></span>
            </div>
            <div className="relative flex justify-center text-xs  uppercase text-gray-400">
              <span className="bg-white px-4">or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-sm">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-5 h-5"
                alt="G"
              />{" "}
              Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 bg-[#F0F5FF] text-[#1877F2] rounded-2xl hover:bg-[#E1EAFF] transition-all font-semibold text-sm">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                className="w-5 h-5"
                alt="F"
              />{" "}
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
