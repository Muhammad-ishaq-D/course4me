import React from "react";
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin } from "lucide-react";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white font-sans py-16 border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">

          {/* Column 1 - About & Contact */}
          <div className="max-w-xs">
            <img src={Logo} alt="logo" className="w-[30%]" />
            <p className="text-[#A1A1A1] text-[14px] leading-relaxed mb-10">
              Courses4Me helps you get SIA trained, licensed, and ready for real security jobs — trusted by 400,000+ people across the UK.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Phone className="text-[#FF5421]" size={18} />
                </div>
                <span className="text-white font-bold text-[15px]">Call Us 01472 730 150</span>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <Mail className="text-[#00A3FF]" size={18} />
                </div>
                <span className="text-[#A1A1A1] text-[15px]">info@courses4me.co.uk</span>
              </div>
            </div>

            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer text-[#A1A1A1] hover:text-white"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Popular Licences */}
          <div>
            <h4 className="font-bold text-white text-[15px] mb-8 tracking-wider uppercase">POPULAR LICENCES</h4>
            <ul className="space-y-5 text-[#A1A1A1] text-[14px] font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">SIA Top-Up Door Supervisor</li>
              <li className="hover:text-white transition-colors cursor-pointer">SIA Top-Up Security Guard</li>
              <li className="hover:text-white transition-colors cursor-pointer">SIA Top-Up Close Protection</li>
              <li className="hover:text-white transition-colors cursor-pointer">Door Supervisor Licence</li>
              <li className="hover:text-white transition-colors cursor-pointer">CCTV Licence</li>
            </ul>
          </div>

          {/* Column 3 - Popular Courses */}
          <div>
            <h4 className="font-bold text-white text-[15px] mb-8 tracking-wider uppercase">POPULAR COURSES</h4>
            <ul className="space-y-5 text-[#A1A1A1] text-[14px] font-medium">
              <li className="hover:text-white transition-colors cursor-pointer">Door Supervisor Training</li>
              <li className="hover:text-white transition-colors cursor-pointer">CCTV Training</li>
              <li className="hover:text-white transition-colors cursor-pointer">Close Protection Training</li>
              <li className="hover:text-white transition-colors cursor-pointer">First Aid at Work</li>
              <li className="hover:text-white transition-colors cursor-pointer">Security Guard Training</li>
            </ul>
          </div>

          {/* Column 4 - Training Locations */}
          <div>
            <h4 className="font-bold text-white text-[15px] mb-8 tracking-wider uppercase">TRAINING LOCATIONS</h4>
            <ul className="space-y-5 text-[#A1A1A1] text-[14px] font-medium">
              {[
                "Bradford",
                "Manchester",
                "Sheffield",
                "Leeds"
              ].map((loc, i) => (
                <li key={i} className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                  <MapPin className="text-[#00A3FF] opacity-60 group-hover:opacity-100 transition-opacity" size={16} />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-12">
          {/* BOTTOM ROW */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[#666666] text-[12px]">
              © 2026 Courses4Me. All rights reserved.
            </div>

            <div className="flex gap-8 text-[#666666] text-[12px]">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Cookie Policy</span>
            </div>
          </div>

          {/* Cookie Notice */}
          <div className="mt-10 text-center text-[#666666] text-[12px] max-w-2xl mx-auto leading-relaxed">
            We use cookies to enhance your experience on our website. By continuing to use our website, you consent to the use of cookies. For more information, please see our <span className="underline cursor-pointer text-white">Cookie Policy</span>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;