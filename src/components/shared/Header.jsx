import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { ChevronDown, UserCircle, LogOut, Settings } from "lucide-react";
// import BrowseCoursesModal from "./BrowseCoursesModal";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  // const [isCoursesModalOpen, setIsCoursesModalOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileProfileOpen, setMobileProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "text-[#F15A24] font-semibold"
      : "text-[#2f3a47] font-medium hover:text-[#F15A24] transition-colors duration-200";

  const mobileNavLinkClasses = ({ isActive }) =>
    isActive
      ? "text-[#F15A24] font-semibold"
      : "text-[#2f3a47] hover:text-[#F15A24] transition-colors";

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* LOGO */}
          <Link to="/">
            <img src={Logo} alt="courses4me" className="w-36 md:w-44" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>

            <NavLink
              to="/courses"
              // onClick={() => setIsCoursesModalOpen(true)}
              className={navLinkClasses}
            >
              Courses
              {/* <ChevronDown className="w-4 h-4 mt-1" /> */}
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
            <NavLink to="/blog" className={navLinkClasses}>
              Blog & News
            </NavLink>
          </nav>

          {/* DESKTOP RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-5">
            {/* FIND COURSE BUTTON */}
            <Link
              to="/courses"
              className="bg-[#F15A24] text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:brightness-95 transition"
            >
              Quick Search
            </Link>

            {user ? (
              <div className="relative">
                {/* PROFILE BUTTON */}
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="group flex items-center gap-2 pl-1 pr-2 py-1 rounded-full border border-[#edf1f5] bg-white hover:border-[#F15A24]/20 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  {/* IMAGE */}
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#F15A24]/20 shrink-0">
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* ARROW */}
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-all duration-300 ${
                      profileOpen ? "rotate-180 text-[#F15A24]" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN */}
                <div
                  className={`absolute right-0 top-15 w-57.5 bg-white border border-[#edf1f5] rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 origin-top-right z-50 ${
                    profileOpen
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  {/* TOP INFO */}
                  <div className="px-5 py-4 border-b border-[#edf1f5]">
                    <div className="flex items-center gap-3">
                      <div>
                        <h4 className="text-[14px] font-bold text-[#243443]">
                          {user.name || "John Doe"}
                        </h4>

                        <p className="text-[12px] text-gray-400 mt-0.5">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* MENU */}
                  <div className="p-2">
                    {/* OVERVIEW */}
                    <Link
                      to="/dashboard?tab=overview"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f8fafc] transition-all text-[#243443] font-medium"
                    >
                      <UserCircle size={18} />
                      Overview
                    </Link>

                    {/* SETTINGS */}
                    <Link
                      to="/dashboard?tab=settings"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f8fafc] transition-all text-[#243443] font-medium"
                    >
                      <Settings size={18} />
                      Settings
                    </Link>

                    {/* LOGOUT */}
                    <button
                      onClick={() => {
                        logout();
                        navigate("/");
                        setProfileOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-all text-red-500 font-medium"
                    >
                      <LogOut size={18} />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/signin"
                className="text-[#00A3F4] text-[18px] font-medium hover:text-black transition"
              >
                Sign In
              </Link>
            )}
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
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto">
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
              // onClick={() => {
              //   setOpen(false);
              //   setIsCoursesModalOpen(true);
              // }}
              className={navLinkClasses}
            >
              Courses
              {/* <ChevronDown className="w-4 h-4" /> */}
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
            <NavLink
              to="/blog"
              onClick={() => setOpen(false)}
              className={mobileNavLinkClasses}
            >
              Blog & News
            </NavLink>

            <div className="pt-5 border-t border-[#edf1f5] flex flex-col gap-4">
              {/* FIND COURSE BUTTON */}
              <Link
                to="/courses"
                onClick={() => setOpen(false)}
                className="bg-[#F15A24] text-white font-semibold py-3 rounded-full shadow-md hover:brightness-95 transition text-center"
              >
                Quick Search
              </Link>

              {user ? (
                <>
                  {/* PROFILE BUTTON */}
                  <button
                    onClick={() => setMobileProfileOpen(!mobileProfileOpen)}
                    className="flex items-center justify-between gap-3 bg-[#f8fafc] border border-[#edf1f5] rounded-2xl p-3 transition-all duration-300"
                  >
                    {/* LEFT */}
                    <div className="flex items-center gap-3">
                      {/* IMAGE */}
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-[#F15A24]/20 shrink-0">
                        <img
                          src={user.profileImage}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* INFO */}
                      <div className="text-left">
                        <h4 className="text-[14px] font-bold text-[#243443] leading-none">
                          {user.name || "John Doe"}
                        </h4>

                        <p className="text-[12px] text-gray-400 mt-1">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    {/* ARROW */}
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition duration-300 ${
                        mobileProfileOpen ? "rotate-180 text-[#F15A24]" : ""
                      }`}
                    />
                  </button>

                  {/* PROFILE DROPDOWN */}
                  <div
                    className={`overflow-y-scroll transition-all duration-300 ${
                      mobileProfileOpen ? " opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-white border border-[#edf1f5] rounded-2xl p-2 flex flex-col">
                      {/* OVERVIEW */}
                      <Link
                        to="/dashboard?tab=overview"
                        onClick={() => {
                          setOpen(false);
                          setMobileProfileOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f8fafc] transition-all"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#f3f4f6] flex items-center justify-center">
                          <UserCircle size={18} className="text-[#243443]" />
                        </div>

                        <p className="text-[14px] font-semibold text-[#243443]">
                          Overview
                        </p>
                      </Link>

                      {/* SETTINGS */}
                      <Link
                        to="/dashboard?tab=settings"
                        onClick={() => {
                          setOpen(false);
                          setMobileProfileOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f8fafc] transition-all"
                      >
                        <div className="w-9 h-9 rounded-xl bg-[#f3f4f6] flex items-center justify-center">
                          <Settings size={18} className="text-[#243443]" />
                        </div>

                        <p className="text-[14px] font-semibold text-[#243443]">
                          Settings
                        </p>
                      </Link>

                      {/* DIVIDER */}
                      <div className="my-2 border-t border-[#edf1f5]" />

                      {/* LOGOUT */}
                      <button
                        onClick={() => {
                          logout();
                          navigate("/");
                          setOpen(false);
                          setMobileProfileOpen(false);
                        }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 transition-all text-left"
                      >
                        <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center">
                          <LogOut size={18} className="text-red-500" />
                        </div>

                        <p className="text-[14px] font-semibold text-red-500">
                          Sign Out
                        </p>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to="/signin"
                  onClick={() => setOpen(false)}
                  className="text-left text-[#00A3F4] hover:text-[#43bcf8] transition"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <BrowseCoursesModal
        isOpen={isCoursesModalOpen}
        onClose={() => setIsCoursesModalOpen(false)}
      /> */}
    </header>
  );
};

export default Header;
