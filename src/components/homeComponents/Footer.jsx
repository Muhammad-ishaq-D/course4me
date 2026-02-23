import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white font-sans">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top row - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1 - About and Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <p className="text-gray-400 text-sm mb-6">
              Training the UK's security professionals since 2010. Your pathway to a rewarding career.
            </p>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">All Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">All Licences</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Training Locations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Career Paths</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Column 2 - Popular Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Door Supervisor</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">First Aid at Work</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">SIA Top-Up</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">CCTV Operator</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Close Protection</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <div className="text-gray-400 text-sm">Call Us</div>
                <a href="tel:01472730150" className="text-white font-semibold hover:text-blue-400 transition-colors">
                  01472 730 150
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm">Email Us</div>
                <a href="mailto:info@courses4me.com" className="text-white font-semibold hover:text-blue-400 transition-colors">
                  info@courses4me.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 - Book a Course CTA */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-4">Ready to start?</h3>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors self-start">
              Book a Course
            </button>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom row - Copyright and Cookie notice */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>© 2026 Courses4Me. All rights reserved.</div>
          <div className="mt-4 md:mt-0">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;