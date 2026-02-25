import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#f3f4f6] shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* LEFT - LOGO */}
          <div className="flex items-center">
            <Link to="/">
              <img src={Logo} alt="courses4me" className="w-26 md:w-58" />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
   <Link to="/" className="text-[#2f3a47] font-medium hover:text-black transition">
              Home
            </Link>

            <Link to="/courses" className="text-[#2f3a47] font-medium hover:text-black transition">
              Courses
            </Link>

            <Link to="/licences" className="text-[#2f3a47] font-medium hover:text-black transition">
              Licences
            </Link>

            <Link to="/locations" className="text-[#2f3a47] font-medium hover:text-black transition">
              Locations
            </Link>

            <Link to="/careers" className="text-[#2f3a47] font-medium hover:text-black transition">
              Careers
            </Link>
          </nav>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              to="/signin"
              className="text-[#2f3a47] text-[18px] font-medium hover:text-black transition"
            >
              Sign In
            </Link>

            <Link
              to="/courses"
              className="bg-[#B9FF5A] text-[#2f3a47] font-semibold px-6 py-2.5 rounded-full shadow-md hover:brightness-95 transition"
            >
              Find Course
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          >
            <span
              className={`h-0.5 w-6 bg-[#2f3a47] rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#2f3a47] rounded my-1 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-[#2f3a47] rounded transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-5 text-[#2f3a47]">

           <Link to="/" onClick={() => setOpen(false)} className="hover:text-black transition">
            Home
          </Link>

          <Link to="/courses" onClick={() => setOpen(false)} className="hover:text-black transition">
            Courses
          </Link>

          <Link to="/licences" onClick={() => setOpen(false)} className="hover:text-black transition">
            Licences
          </Link>

          <Link to="/locations" onClick={() => setOpen(false)} className="hover:text-black transition">
            Locations
          </Link>

          <Link to="/careers" onClick={() => setOpen(false)} className="hover:text-black transition">
            Careers
          </Link>

          <div className="pt-4 border-t border-gray-200 flex flex-col gap-4">
            <Link
              to="/signin"
              onClick={() => setOpen(false)}
              className="text-left hover:text-black transition"
            >
              Sign In
            </Link>

            <Link
              to="/courses"
              onClick={() => setOpen(false)}
              className="bg-[#B9FF5A] text-[#2f3a47] font-semibold py-3 rounded-full shadow-md hover:brightness-95 transition text-center"
            >
              Find Course
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;