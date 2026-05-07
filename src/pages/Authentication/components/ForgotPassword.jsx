import React, { useState } from "react";
import { Mail, X, Loader2, ArrowLeft, CheckCircle2 } from "lucide-react";
import authService from "../../../api/services/authService";

const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await authService.forgotPassword(email);
      setSuccess(true);
    } catch (err) {
      console.error("Forgot password error:", err);
      setError(err.response?.data?.message || "Failed to send reset link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex justify-center lg:justify-end animate-in fade-in zoom-in duration-300">
        <div className="w-full max-w-120">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-gray-100 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-50 p-4 rounded-full">
                <CheckCircle2 className="text-green-500 w-12 h-12" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Email</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We've sent a password reset link to <span className="font-bold text-gray-900">{email}</span>.
              Please check your inbox and follow the instructions.
            </p>
            <button
              onClick={onBack}
              className="w-full bg-[#FF5722] hover:bg-orange-700 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-orange-200 active:scale-95"
            >
              <ArrowLeft size={18} />
              Back to Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center lg:justify-end animate-in fade-in zoom-in duration-300">
      <div className="w-full max-w-120">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl border border-gray-100 relative">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reset Password
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-sm font-medium">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#344054] ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@email.com"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF5722] hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-4 rounded-full flex items-center justify-center transition-all shadow-lg shadow-orange-200 active:scale-95 mt-4"
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : "Send Reset Link"}
            </button>

            <div className="text-center mt-6">
              <button
                type="button"
                onClick={onBack}
                className="text-gray-500 text-sm font-semibold hover:text-orange-600 transition-colors flex items-center justify-center gap-2 mx-auto"
              >
                <ArrowLeft size={16} />
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
