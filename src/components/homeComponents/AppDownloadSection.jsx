import React from "react";
import { Download } from "lucide-react";
import GetLicensedApp from "../../assets/home/Get Licensed App.png";

const AppDownloadSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1c2a38] via-[#243447] to-[#2b3e52] py-28 overflow-hidden font-sans">

      {/* Green Glow */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#B9FF5A] opacity-30 blur-[80px] rounded-full"></div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src={GetLicensedApp}
              alt="Get Licensed App"
              className=""
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#B9FF5A] text-[#1c2a38] px-5 py-2 rounded-full font-semibold mb-8">
              📱 Available on iOS & Android
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Your Career in Your Pocket
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Find work, try mock tests, and book courses from the UK's #1
              security training app. Everything you need to launch and manage
              your security career.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-6 mb-12">

              <button className="bg-white text-[#1c2a38] px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow hover:shadow-lg transition">
                <Download className="w-5 h-5" />
                Download on App Store
              </button>

              <button className="bg-white text-[#1c2a38] px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow hover:shadow-lg transition">
                <Download className="w-5 h-5" />
                Get it on Google Play
              </button>

            </div>

            {/* Divider */}
            <div className="border-t border-white/20 mb-8"></div>

            {/* Green CTA */}
            <p className="text-[#B9FF5A] font-semibold text-lg cursor-pointer hover:underline">
              Enter your details to instantly download the career guide PDF →
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;