import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const CustomDropdown = ({
  value,
  onChange,
  options = [],
  placeholder = "Select",
  width = "w-full",
}) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((item) => item.value === value);

  return (
    <div ref={dropdownRef} className={`relative ${width} z-40`}>
      {/* BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className=" w-full h-[60px] rounded-2xl border  border-gray-200 bg-[#FAFAFC] px-5 flex items-center justify-between text-[#111827] transition-all hover:border-[#F15A24] focus:border-[#F15A24] focus:ring-4 focus:ring-[#F15A24]/10
        "
      >
        <span>{selectedOption?.label || placeholder}</span>

        <ChevronDown
          size={18}
          className={`transition-all duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className=" absolute top-[68px] left-0 w-full  bg-white rounded-2xl border  border-gray-200 shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden z-[999999] animate-in fade-in zoom-in-95 duration-200
          "
        >
          {options.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => {
                onChange(item.value);
                setOpen(false);
              }}
              className={` w-full px-5 py-4 flex items-center justify-between text-left text-base font-medium  transition-all ${
                value === item.value
                  ? "bg-[#F15A24] text-white"
                  : "text-[#111827] hover:bg-[#FFF3EE]"
              }
              `}
            >
              {item.label}

              {value === item.value && <Check size={16} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
