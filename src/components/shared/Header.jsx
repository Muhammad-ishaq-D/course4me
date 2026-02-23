import React from 'react';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-white py-4">
      <nav className="container mx-auto ">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-200 transition-colors text-sm font-medium">
              Courses
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-200 transition-colors text-sm font-medium">
              Licences
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-200 transition-colors text-sm font-medium">
              Locations
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-200 transition-colors text-sm font-medium">
              Careers
            </a>
          </div>

          {/* Right Side - Sign In and Find Course */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 text-sm font-medium hover:text-gray-200 transition-colors">
              Sign In
            </button>
            <button className="bg-[#64f520] text-gray-800 px-6 py-2 rounded-3xl text-sm font-medium hover:bg-[#E6710A] transition-colors">
              Find Course
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;