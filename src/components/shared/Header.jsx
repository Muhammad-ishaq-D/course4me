import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">YourLogo</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Courses
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Locations
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Success Stories
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Enroll Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg
            className="w-6 h-6 text-gray-700"
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
      </nav>
    </header>
  );
};

export default Header;