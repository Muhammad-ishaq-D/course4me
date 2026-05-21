import React from "react";
import { Icon, Eye, EyeOff } from "lucide-react";

const FieldInput = ({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  type = "text",
  icon: Icon,
  error,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div>
      <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        {Icon && !isPassword && (
          <Icon
            size={14}
            className={`absolute left-3 top-1/2 -translate-y-1/2 ${error ? "text-red-400" : "text-gray-400"}`}
          />
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`w-full border rounded-lg py-3 text-[14px] text-[#1C1C1C] outline-none focus:ring-2 transition-all placeholder:text-gray-300 ${Icon && !isPassword ? "pl-10 pr-4" : "px-4"} ${
            error
              ? "border-red-400 focus:ring-red-400/40 focus:border-red-400 bg-red-50/30"
              : "border-gray-200 focus:ring-[#F15A24]/40 focus:border-[#F15A24]"
          }`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-[11px] font-semibold mt-1 ml-0.5">
          {error}
        </p>
      )}
    </div>
  );
};

export default FieldInput;
