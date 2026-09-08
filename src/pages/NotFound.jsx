import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50/50 px-4 py-12 dark:bg-gray-900">
      <div className="flex flex-col items-center text-center">
        {/* Large Gradient 404 Text */}
        <h1 className="select-none bg-gradient-to-r from-[#F15A24] via-amber-500 to-[#F15A24] bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        {/* Small Code Subtitle */}
        <span className="mt-2 text-xl font-bold text-slate-800 dark:text-white">
          404
        </span>

        {/* Clear Main Heading */}
        <h2 className="mt-2 text-2xl font-semibold text-slate-700 dark:text-slate-200 sm:text-3xl">
          Oops! Page not found
        </h2>

        {/* Current Broken Route Path */}
        <p className="mt-3 font-mono text-sm text-slate-400 dark:text-slate-500">
          {location.pathname}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Primary Action: Return to Home */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F15A24] px-5 py-2.5 text-sm font-medium text-white shadow-xs transition hover:bg-[#d84e1b] focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <Home size={16} />
            Return to Home
          </Link>

          {/* Secondary Action: Go Back */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ArrowLeft size={16} />
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
