import React from "react";
import { Mail, X } from "lucide-react";

const ForgotPassword = ({ onBack }) => {
  return (
    <div className="flex justify-center lg:justify-end animate-in fade-in zoom-in duration-300">
      <div className="w-full max-w-120">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-gray-100 relative">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reset Password
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </p>
          </div>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#344054] ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#FF5722] hover:bg-orange-700 text-white font-bold py-4 rounded-full flex items-center justify-center transition-all shadow-lg shadow-orange-200 active:scale-95 mt-4"
            >
              Send Reset Link
            </button>

            {/* Back to Login Link */}
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={onBack}
                className="text-gray-500 text-sm font-semibold hover:text-orange-600 transition-colors"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
