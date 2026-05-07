// Loader.jsx
import React from "react";

const Loader = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-62.5 w-full">
      {/* Dots */}
      <div className="flex items-end gap-3 h-16">
        <span
          className="loader-dot bg-[#F8510C]"
          style={{ animationDelay: "0s" }}
        ></span>

        <span
          className="loader-dot bg-[#F8510C]/90"
          style={{ animationDelay: "0.2s" }}
        ></span>

        <span
          className="loader-dot bg-[#F8510C]/80"
          style={{ animationDelay: "0.4s" }}
        ></span>

        <span
          className="loader-dot bg-[#F8510C]/70"
          style={{ animationDelay: "0.6s" }}
        ></span>
      </div>

      {/* Text */}
      <div className="mt-6 text-center">
        <h3 className="text-lg font-semibold text-slate-700">{text}</h3>
      </div>

      {/* Animation */}
      <style>
        {`
          .loader-dot {
            width: 16px;
            height: 16px;
            border-radius: 9999px;
            animation: dotJump 1s infinite;
          }

          @keyframes dotJump {
            0%, 100% {
              transform: translateY(0);
              opacity: 0.7;
            }

            50% {
              transform: translateY(-30px) scale(1.2);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
