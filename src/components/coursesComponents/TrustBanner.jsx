import React from "react";
import { CheckCircle, Shield, Star, ExternalLink } from "lucide-react";

/**
 * TrustBanner Component
 * A pixel-perfect implementation of the trust indicators section.
 */
const TrustBanner = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-y-4 gap-x-8 text-[13px] md:text-sm text-[#4A5568]">

        {/* Customer Count */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E6F6FF]">
            <CheckCircle className="w-3.5 h-3.5 text-[#00A3FF]" />
          </div>
          <p>
            Over <span className="font-bold text-[#1A202C]">400,000</span> customers have booked their course using us
          </p>
        </div>

        {/* Divider for mobile (optional, but keeping it clean) */}
        <div className="hidden md:block w-px h-4 bg-gray-200" />

        {/* Trustpilot Rating */}
        <div className="flex items-center gap-2 font-medium">
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-[#00B67A] fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 9.125l-9.143-.013L12 0 9.143 9.112 0 9.125l7.408 5.378L4.625 24 12 18.675 19.375 24l-2.783-9.497L24 9.125z" />
            </svg>
          </div>
          <span className="text-[#1A202C]">Trustpilot</span>
          <span className="text-[#00B67A] font-bold">4.8</span>
        </div>

        <div className="hidden md:block w-px h-4 bg-gray-200" />

        {/* Google Rating */}
        <div className="flex items-center gap-2 font-medium">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.11c-.22-.67-.35-1.39-.35-2.11s.13-1.44.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.83c.87-2.6 3.3-4.51 6.16-4.51z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-[#1A202C]">Google</span>
          <span className="text-[#4285F4] font-bold">4.9</span>
        </div>

        <div className="hidden md:block w-px h-4 bg-gray-200" />

        {/* Safety Guarantee */}
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#1A202C]" />
          <p>
            Zero Risk With <span className="font-bold text-[#1A202C]">Training Guarantee</span>{" "}
            <a
              href="#"
              className="text-[#00A3FF] hover:underline font-medium inline-flex items-center gap-0.5"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
