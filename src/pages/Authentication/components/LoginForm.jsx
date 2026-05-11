import React, { useState } from "react";
import { Mail, Lock, LogIn, User, Eye, EyeOff, Loader2 } from "lucide-react";
import ForgotPassword from "./ForgotPassword";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const [error, setError] = useState("");
  const [socialHint, setSocialHint] = useState(null); // 'google' | 'facebook' | null
  const [errors, setErrors] = useState({});
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  if (showForgotPassword) {
    return <ForgotPassword onBack={() => setShowForgotPassword(false)} />;
  }

  const validateForm = () => {
    let newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least  8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSocialHint(null);

    // frontend validation first
    if (!validateForm()) return;

    setLoading(true);

    try {
      await login(formData);
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Login error:", err);

      const data = err.response?.data;
      const message = data?.message;
      const provider = data?.socialProvider; // 'google' | 'facebook' | null

      if (provider) {
        setSocialHint(provider);
        setError(message);
      } else if (message === "Invalid credentials") {
        setError("Email or password is incorrect");
      } else {
        setError(message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };


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

          {/* Standard error */}
          {error && !socialHint && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-sm font-medium animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          {/* Social provider hint */}
          {error && socialHint && (
            <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-2xl text-sm animate-in fade-in slide-in-from-top-2">
              <p className="font-bold text-orange-700 mb-3">{error}</p>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
                    window.location.href = `${apiUrl}/auth/${socialHint}`;
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-orange-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-orange-50 transition-all"
                >
                  <img
                    src={socialHint === "google"
                      ? "https://www.svgrepo.com/show/355037/google.svg"
                      : "https://www.svgrepo.com/show/475647/facebook-color.svg"}
                    className="w-4 h-4"
                    alt={socialHint}
                  />
                  Sign in with {socialHint.charAt(0).toUpperCase() + socialHint.slice(1)}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-orange-600 font-bold text-xs hover:underline"
                >
                  Or use &quot;Forgot Password&quot; to set an email password
                </button>
              </div>
            </div>
          )}


          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@email.com"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs ml-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs ml-1">{errors.password}</p>
              )}
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

            <button
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-200 active:scale-95"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <User size={18} />
              )}
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase text-gray-400">
              <span className="bg-white px-4">or continue with</span>
            </div>
          </div>

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
