import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-[#B9FF5A] font-semibold"
      : "text-[#2f3a47] font-medium hover:text-black transition";

  const mobileNavLinkClasses = ({ isActive }) =>
    isActive
      ? "text-[#B9FF5A] font-semibold"
      : "hover:text-black transition";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* LOGO */}
          <Link to="/">
            <img src={Logo} alt="courses4me" className="w-26 md:w-58" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>

            <NavLink to="/courses" className={navLinkClasses}>
              Courses
            </NavLink>

            <NavLink to="/licences" className={navLinkClasses}>
              Licences
            </NavLink>

            <NavLink to="/locations" className={navLinkClasses}>
              Locations
            </NavLink>

            <NavLink to="/careers" className={navLinkClasses}>
              Careers
            </NavLink>
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

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 space-y-5 text-[#2f3a47]">

          <NavLink
            to="/"
            end
            onClick={() => setOpen(false)}
            className={mobileNavLinkClasses}
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            onClick={() => setOpen(false)}
            className={mobileNavLinkClasses}
          >
            Courses
          </NavLink>

          <NavLink
            to="/licences"
            onClick={() => setOpen(false)}
            className={mobileNavLinkClasses}
          >
            Licences
          </NavLink>

          <NavLink
            to="/locations"
            onClick={() => setOpen(false)}
            className={mobileNavLinkClasses}
          >
            Locations
          </NavLink>

          <NavLink
            to="/careers"
            onClick={() => setOpen(false)}
            className={mobileNavLinkClasses}
          >
            Careers
          </NavLink>

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