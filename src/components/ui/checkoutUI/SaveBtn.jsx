import React from "react";
import { Loader2 } from "lucide-react";

const SaveBtn = ({
  onClick,
  label = "Save & Continue",
  loading,
  fullWidth,
  disabled,
}) => (
  <button
    onClick={onClick}
    disabled={loading || disabled}
    className={`${fullWidth ? "w-full" : "px-8"} bg-[#F15A24] cursor-pointer text-white py-3.5 rounded-lg font-black text-base hover:bg-[#be3a0a] active:scale-95 transition-all mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
  >
    {loading && <Loader2 size={16} className="animate-spin" />}
    {label}
  </button>
);

export default SaveBtn;
