import React from "react";
import { useLocation } from "react-router-dom";

const SocialLogin = ({ className = "" }) => {
  const location = useLocation();

  const handleSocialLogin = (platform) => {
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
    
    // Pass current path as redirect so user comes back here
    const currentPath = location.pathname + location.search;
    const redirectParam = encodeURIComponent(currentPath);
    
    window.location.href = `${apiUrl}/auth/${platform.toLowerCase()}?redirect=${redirectParam}`;
  };

  return (
    <div className={`grid grid-cols-2 gap-4 ${className}`}>
      <button
        onClick={() => handleSocialLogin("Google")}
        className="group relative flex items-center justify-center gap-3 py-3.5 px-4 border border-gray-200 rounded-2xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-bold text-sm text-gray-700 active:scale-[0.98] bg-white shadow-sm hover:shadow-md"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
          alt="Google"
        />
        <span>Google</span>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none"></div>
      </button>

      <button
        onClick={() => handleSocialLogin("Facebook")}
        className="group relative flex items-center justify-center gap-3 py-3.5 px-4 bg-[#F0F5FF] text-[#1877F2] border border-[#E1EAFF] rounded-2xl hover:bg-[#E1EAFF] hover:border-[#D1DFFF] transition-all duration-300 font-bold text-sm active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        <img
          src="https://www.svgrepo.com/show/475647/facebook-color.svg"
          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
          alt="Facebook"
        />
        <span>Facebook</span>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#1877F2]/10 pointer-events-none"></div>
      </button>
    </div>
  );
};

export default SocialLogin;
