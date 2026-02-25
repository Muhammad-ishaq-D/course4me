import React from "react";
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1c2a38] via-[#243447] to-[#2b3e52] text-white font-sans pt-24">

      <div className="max-w-[1400px] mx-auto px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16">

          {/* Column 1 - About */}
          <div>
            <div className="mb-6 text-white font-semibold text-lg">
              <img src={Logo} alt="logo" />
            </div>

            <p className="text-gray-400 leading-relaxed mb-8">
              Training the UK's security professionals since 2010.
              Your pathway to a rewarding career.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#B9FF5A] hover:text-[#1c2a38] transition cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer">All Courses</li>
              <li className="hover:text-white cursor-pointer">All Licences</li>
              <li className="hover:text-white cursor-pointer">Training Locations</li>
              <li className="hover:text-white cursor-pointer">Career Paths</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
            </ul>
          </div>

          {/* Column 3 - Popular */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Popular</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer">Door Supervisor</li>
              <li className="hover:text-white cursor-pointer">First Aid at Work</li>
              <li className="hover:text-white cursor-pointer">SIA Top-Up</li>
              <li className="hover:text-white cursor-pointer">CCTV Operator</li>
              <li className="hover:text-white cursor-pointer">Close Protection</li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>

            <div className="space-y-6 mb-8">

              <div className="flex items-start gap-4">
                <Phone className="text-[#B9FF5A]" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Call Us</p>
                  <p className="font-semibold">01472 730 150</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#B9FF5A]" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Email Us</p>
                  <p className="font-semibold">info@courses4me.com</p>
                </div>
              </div>

            </div>

            <button className="bg-[#B9FF5A] text-[#1c2a38] font-semibold px-8 py-4 rounded-full hover:opacity-90 transition">
              Book a Course
            </button>

          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* BOTTOM ROW */}
      <div className="max-w-[1400px] mx-auto px-8 py-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center gap-6">

        <div>© 2026 Courses4Me. All rights reserved.</div>

        <div className="flex gap-8">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookie Policy</span>
        </div>

      </div>

      {/* Cookie Notice */}
      <div className="text-center text-gray-500 text-sm pb-8">
        We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
      </div>

    </footer>
  );
};

export default Footer;