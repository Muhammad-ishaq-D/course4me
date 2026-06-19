import React, { useState, useEffect } from "react";
import { User, Lock, Save, KeyRound, Loader2, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import authService from "../../../api/services/authService";

const SettingsTab = () => {
  const { user, updateProfile } = useAuth();
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [showPass, setShowPass] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [loading, setLoading] = useState({
    personal: false,
    password: false,
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (user) {
      setPersonalInfo({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      });
    }
  }, [user]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, personal: true });
    setErrors({});
    let newErrors = {};

    if (!personalInfo.name.trim()) newErrors.name = "Full name is required";
    if (!personalInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(personalInfo.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!personalInfo.phone.trim())
      newErrors.phone = "Phone number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading({ ...loading, personal: false });
      return;
    }

    try {
      await updateProfile(personalInfo);
      setSuccess("Personal information updated successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("Update profile error:", err);
      setErrors({
        api: err.response?.data?.message || "Failed to update profile",
      });
    } finally {
      setLoading({ ...loading, personal: false });
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setLoading({ ...loading, password: true });
    setErrors({});
    let newErrors = {};

    if (!passwords.current) newErrors.current = "Current password is required";
    if (!passwords.new) {
      newErrors.new = "New password is required";
    } else if (passwords.new.length < 8) {
      newErrors.new = "Password must be at least 8 characters";
    }
    if (passwords.confirm !== passwords.new) {
      newErrors.confirm = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading({ ...loading, password: false });
      return;
    }

    try {
      await authService.updatePassword({
        currentPassword: passwords.current,
        newPassword: passwords.new,
      });
      setSuccess("Password updated successfully!");
      setPasswords({ current: "", new: "", confirm: "" });
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("Update password error:", err);
      setErrors({
        passApi: err.response?.data?.message || "Failed to update password",
      });
    } finally {
      setLoading({ ...loading, password: false });
    }
  };

  const inputClasses = (error) => `
    w-full px-4 py-3 rounded-xl border transition-all duration-200 outline-none
    ${
      error
        ? "border-red-300 bg-red-50 focus:border-red-500 focus:ring-4 focus:ring-red-100"
        : "border-gray-200 bg-gray-50 focus:border-[#F15A24] focus:ring-4 focus:ring-orange-50 focus:bg-white"
    }
  `;

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Account Settings
        </h2>
        {success && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium animate-bounce shadow-sm">
            {success}
          </div>
        )}
      </div>

      {/* Personal Information Form */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50 overflow-hidden">
        <div className="p-8 border-b border-gray-50 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#F15A24] rounded-xl text-white shadow-lg shadow-orange-200">
              <User size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Personal Information
              </h3>
              <p className="text-gray-500 text-sm mt-0.5">
                Update your contact details and profile info
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handlePersonalInfoSubmit} className="p-8 space-y-8">
          {errors.api && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
              {errors.api}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
              Full Name
            </label>
            <input
              type="text"
              value={personalInfo.name}
              onChange={(e) =>
                setPersonalInfo({ ...personalInfo, name: e.target.value })
              }
              className={inputClasses(errors.name)}
              placeholder="James Mitchell"
            />
            {errors.name && (
              <p className="text-red-500 text-xs font-semibold ml-1">
                {errors.name}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <input
                type="email"
                value={personalInfo.email}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, email: e.target.value })
                }
                className={inputClasses(errors.email)}
                placeholder="james.mitchell@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs font-semibold ml-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={personalInfo.phone}
                onChange={(e) =>
                  setPersonalInfo({ ...personalInfo, phone: e.target.value })
                }
                className={inputClasses(errors.phone)}
                placeholder="07911 234 567"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs font-semibold ml-1">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading.personal}
              className="bg-[#F15A24] hover:bg-[#D94E1F] cursor-pointer disabled:bg-orange-300 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-orange-100 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              {loading.personal ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Save size={20} />
              )}
              {loading.personal ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>

      {/* Change Password Form */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50 overflow-hidden">
        <div className="p-8 border-b border-gray-50 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#F15A24] rounded-xl text-white shadow-lg shadow-gray-200">
              <Lock size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Change Password
              </h3>
              <p className="text-gray-500 text-sm mt-0.5">
                Ensure your account is using a long, random password
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handlePasswordSubmit} className="p-8 space-y-6">
          {errors.passApi && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
              {errors.passApi}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
              Current Password
            </label>
            <div className="relative">
              <input
                type={showPass.current ? "text" : "password"}
                value={passwords.current}
                onChange={(e) =>
                  setPasswords({ ...passwords, current: e.target.value })
                }
                className={inputClasses(errors.current)}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPass({ ...showPass, current: !showPass.current })
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPass.current ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.current && (
              <p className="text-red-500 text-xs font-semibold ml-1">
                {errors.current}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPass.new ? "text" : "password"}
                value={passwords.new}
                onChange={(e) =>
                  setPasswords({ ...passwords, new: e.target.value })
                }
                className={inputClasses(errors.new)}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPass({ ...showPass, new: !showPass.new })}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPass.new ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.new && (
              <p className="text-red-500 text-xs font-semibold ml-1">
                {errors.new}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showPass.confirm ? "text" : "password"}
                value={passwords.confirm}
                onChange={(e) =>
                  setPasswords({ ...passwords, confirm: e.target.value })
                }
                className={inputClasses(errors.confirm)}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() =>
                  setShowPass({ ...showPass, confirm: !showPass.confirm })
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPass.confirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.confirm && (
              <p className="text-red-500 text-xs font-semibold ml-1">
                {errors.confirm}
              </p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading.password}
              className="bg-[#F15A24] hover:bg-[#e36132] cursor-pointer disabled:bg-gray-400 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-gray-100 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              {loading.password ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <KeyRound size={20} />
              )}
              {loading.password ? "Updating..." : "Update Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsTab;
