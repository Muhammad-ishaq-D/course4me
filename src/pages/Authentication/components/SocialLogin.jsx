import React from "react";
import { useLocation } from "react-router-dom";

const SocialLogin = ({ className = "" }) => {
  const location = useLocation();

  const handleSocialLogin = (platform) => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

    // Use the 'from' path if redirected from ProtectedRoute, otherwise use current path
    const destination = location.state?.from?.pathname || location.pathname;
    const search = location.state?.from?.search || location.search;

    // Default to /dashboard if we are on the signin page
    let redirectPath = destination + search;
    if (redirectPath === "/signin" || redirectPath === "/login") {
      redirectPath = "/dashboard";
    }

    const redirectParam = encodeURIComponent(redirectPath);
    window.location.href = `${apiUrl}/auth/${platform.toLowerCase()}?redirect=${redirectParam}`;
  };

  return (
    <div className={` ${className} flex justify-center`}>
      <button
        onClick={() => handleSocialLogin("Google")}
        className="group relative flex items-center  justify-center gap-3 py-3.5 px-24 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-[#F15A24] cursor-pointer transition-all duration-300 font-bold text-sm text-gray-700 active:scale-[0.98] bg-white shadow-sm hover:shadow-md"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
          alt="Google"
        />
        <span>Google</span>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none"></div>
      </button>
    </div>
  );
};

export default SocialLogin;
