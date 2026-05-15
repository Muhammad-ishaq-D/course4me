import React from "react";
import { Flame } from "lucide-react";

const EmptyState = ({ text }) => {
  return (
    /* EMPTY STATE */
    <div className="bg-white rounded-[30px] border border-dashed border-gray-200 py-24 px-6 text-center shadow-sm">
      <div className="w-24 h-24 mx-auto rounded-full bg-[#F15A24]/10 flex items-center justify-center mb-6">
        <Flame className="text-[#F15A24]" size={34} />
      </div>

      <h2 className="text-2xl font-bold text-[#141414] mb-3">
        No {text} Available
      </h2>

      <p className="text-gray-500 max-w-md mx-auto mb-8">
        Currently there are no {text} available in this category. Please try
        another category.
      </p>
    </div>
  );
};

export default EmptyState;
