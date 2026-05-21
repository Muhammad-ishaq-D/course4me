import React from "react";

const StepNumber = ({ n, active }) => (
  <div
    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-black transition-all
    ${active ? "bg-[#F15A24] border-[#F15A24] text-white" : "border-gray-300 text-gray-400"}`}
  >
    {n}
  </div>
);

export default StepNumber;
