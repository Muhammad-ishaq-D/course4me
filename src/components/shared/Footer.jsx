import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import courseService from "../../api/services/courseService";
import licenseService from "../../api/services/licenseService";
import locationService from "../../api/services/locationService";
import { Phone, Mail, Facebook, Instagram, MapPin } from "lucide-react";
import Logo from "../../assets/Logo.svg";

// Custom TikTok Icon SVG
const TikTokIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  const [courses, setCourses] = useState([]);
  const [licenses, setLicenses] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesRes, licensesRes, locationsRes] = await Promise.all([
          courseService.getAllCourses({ status: "Published" }),
          licenseService.getAllLicenses(),
          locationService.getAllLocations(),
        ]);

        setCourses(coursesRes.data?.data?.slice(0, 5) || []);
        setLicenses(licensesRes.data?.data?.slice(0, 5) || []);

        const allLocs = locationsRes.data || [];
        const uniqueCities = [];
        const seen = new Set();

        const sortedLocs = [...allLocs].sort((a, b) => {
          const aActive = a.status === "Active";
          const bActive = b.status === "Active";
          if (aActive === bActive) return 0;
          return aActive ? -1 : 1;
        });

        sortedLocs.forEach((loc) => {
          if (loc.city && !seen.has(loc.city)) {
            seen.add(loc.city);
            uniqueCities.push({
              city: loc.city,
              isInactive: loc.status !== "Active",
            });
          }
        });

        const fallback = [
          { city: "Bradford", isInactive: false },
          { city: "Manchester", isInactive: false },
          { city: "Sheffield", isInactive: false },
          { city: "Leeds", isInactive: false },
        ];
        setLocations(
          uniqueCities.length > 0 ? uniqueCities.slice(0, 4) : fallback,
        );
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-[#0F0F0F] text-white py-16 border-t border-white/5">
      <div className="max-w-325 mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
          {/* ABOUT */}
          <div className="lg:pr-5 lg:border-r lg:border-white/10">
            <img src={Logo} alt="logo" className="w-40 md:w-44" />

            <p className="text-[#A1A1A1] text-base mt-4 leading-relaxed">
              courses4me helps you discover, compare, and book accredited
              courses across the UK, giving you the qualifications, licences,
              and confidence to achieve your career ambitions.
            </p>
          </div>

          {/* POPULAR LICENCES */}
          <div className="lg:pr-5 lg:border-r lg:border-white/10">
            <h4 className="font-bold text-white text-lg mb-8 uppercase tracking-wide">
              Popular Licences
            </h4>

            <ul className="space-y-2">
              {licenses.map((licence) => (
                <li key={licence._id}>
                  <Link
                    to={`/licences/licencesdetails?id=${licence._id}`}
                    className="text-[#A1A1A1] hover:text-white transition-colors line-clamp-1"
                  >
                    {licence.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* POPULAR COURSES */}
          <div className="lg:pr-5 lg:border-r lg:border-white/10">
            <h4 className="font-bold text-white text-lg mb-8 uppercase tracking-wide">
              Popular Courses
            </h4>

            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course._id}>
                  <Link
                    to={`/course/${course._id}`}
                    className="text-[#A1A1A1] hover:text-white transition-colors line-clamp-1"
                  >
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TRAINING LOCATIONS */}
          <div className="lg:pr-5 lg:border-r lg:border-white/10">
            <h4 className="font-bold text-white text-lg mb-8 uppercase">
              Training Locations
            </h4>

            <ul className="space-y-2">
              {locations.map((loc) => (
                <li
                  key={loc.city}
                  title={
                    loc.isInactive
                      ? "This location is temporarily inactive for this course from administration"
                      : undefined
                  }
                  className={`flex relative items-center gap-4 text-[#A1A1A1] transition-all duration-200 ${
                    loc.isInactive
                      ? "opacity-40 select-none cursor-not-allowed filter blur-[0.6px]"
                      : "hover:text-white"
                  }`}
                >
                  <MapPin
                    size={15}
                    className="text-[#00A3FF] md:absolute md:-left-5"
                  />
                  <span className="md:ml-3">{loc.city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT & BRAND-COLORED SOCIAL LINKS */}
          <div>
            <h4 className="font-bold text-white text-lg mb-8 tracking-wider uppercase">
              CONTACT US
            </h4>

            <div className="space-y-5 text-[#A1A1A1] text-[14px] font-medium">
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Phone className="text-[#00A3FF]" size={18} />
                  </div>
                  <a
                    href="tel:08006894621"
                    className="text-white font-bold text-base hover:text-[#00A3FF] transition-colors"
                  >
                    Call Us 08006894621
                  </a>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Mail className="text-[#00A3FF]" size={18} />
                  </div>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=info@courses4me.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A1A1A1] text-base hover:text-white transition-colors"
                  >
                    info@courses4me.co.uk
                  </a>
                </div>
              </div>

              {/* OFFICIAL BRAND-COLORED SOCIAL MEDIA ICONS */}
              <div className="pt-2">
                <p className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
                  Follow Us
                </p>
                <div className="flex items-center gap-3">
                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@courses4me0?_r=1&_t=ZN-9AgoaduDFEh"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-black hover:border-[#00F2FE] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all duration-300"
                  >
                    <TikTokIcon size={18} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/courses4me2?utm_source=qr&rpxt=dzZ3eTlhZGRobGcz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:shadow-[0_0_15px_rgba(220,39,67,0.3)] transition-all duration-300"
                  >
                    <Instagram size={18} />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/1JbpoYDkJu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.3)] transition-all duration-300"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10 lg:gap-28 text-base text-center">
            <span className="text-white">
              © 2026 courses4me, All rights reserved.
            </span>

            <div className="flex gap-2 md:ml-4 md:gap-6">
              <NavLink
                to="/privacy-policy"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F15A24]"
                    : "text-white hover:text-white transition-colors"
                }
              >
                Privacy Policy
              </NavLink>

              <NavLink
                to="/terms-of-services"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F15A24]"
                    : "text-white hover:text-white transition-colors"
                }
              >
                Terms of Service
              </NavLink>

              <NavLink
                to="/cookie-policy"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F15A24]"
                    : "text-white hover:text-white transition-colors"
                }
              >
                Cookie Policy
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
