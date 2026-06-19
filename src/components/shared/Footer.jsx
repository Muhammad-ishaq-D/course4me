import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import courseService from "../../api/services/courseService";
import licenseService from "../../api/services/licenseService";
import locationService from "../../api/services/locationService";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
} from "lucide-react";
import Logo from "../../assets/Logo.svg";

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

        const activeLocations = (locationsRes.data || []).filter(
          (loc) => loc.status === "Active"
        );
        const uniqueCities = [];
        const seen = new Set();
        activeLocations.forEach((loc) => {
          if (loc.city && !seen.has(loc.city)) {
            seen.add(loc.city);
            uniqueCities.push(loc.city);
          }
        });

        const fallback = ["Bradford", "Manchester", "Sheffield", "Leeds"];
        setLocations(uniqueCities.length > 0 ? uniqueCities.slice(0, 4) : fallback);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-[#0F0F0F] text-white  py-16 border-t border-white/5">
      <div className="max-w-325 mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
          {/* ABOUT */}
          <div className="lg:pr-8 lg:border-r lg:border-white/10">
            <img src={Logo} alt="logo" className="w-40 md:w-44" />

            <p className="text-[#A1A1A1] text-base mt-4 leading-relaxed">
              Courses4Me helps you discover, compare, and book accredited
              courses across the UK, giving you the qualifications, licences,
              and confidence to achieve your career ambitions.
            </p>
          </div>

          {/* POPULAR LICENCES */}
          <div className="lg:pr-5 lg:border-r lg:border-white/10">
            <h4 className="font-bold text-white text-lg mb-8 uppercase tracking-wide">
              Popular Licences
            </h4>

            <ul className="space-y-4">
              {licenses.map((licence) => (
                <li key={licence._id}>
                  <Link
                    to="/licences"
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

            <ul className="space-y-4">
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

          {/* TRAINING LOCATIONS + PAGES */}
          <div className="lg:pr-5 lg:border-r lg:border-white/10">
            <h4 className="font-bold  text-white text-lg mb-8 uppercase ">
              Training Locations
            </h4>

            <ul className="space-y-4">
              {locations.map((loc) => (
                <li
                  key={loc}
                  className="flex relative items-center gap-4 text-[#A1A1A1] hover:text-white transition-colors"
                >
                  <MapPin
                    size={15}
                    className="text-[#00A3FF] md:absolute md:-left-5 "
                  />
                  <span className="md:ml-3">{loc}</span>
                </li>
              ))}
            </ul>

            <div className="flex mt-4 md:ml-3 flex-col gap-4">
              <NavLink
                to="/privacy-policy"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F15A24] font-semibold"
                    : "text-[#A1A1A1] hover:text-white transition"
                }
              >
                Privacy Policy
              </NavLink>

              <NavLink
                to="/terms-of-services"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F15A24] font-semibold"
                    : "text-[#A1A1A1] hover:text-white transition"
                }
              >
                Terms of Service
              </NavLink>

              <NavLink
                to="/cookie-policy"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#F15A24] font-semibold"
                    : "text-[#A1A1A1] hover:text-white transition"
                }
              >
                Cookie Policy
              </NavLink>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-white text-lg mb-8 tracking-wider uppercase">
              CONTACT US
            </h4>
            <ul className="space-y-5 text-[#A1A1A1] text-[14px] font-medium">
              <div className="space-y-4 mb-8 ">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Phone className="text-[#00A3FF]" size={18} />
                  </div>
                  <span className="text-white font-bold text-base">
                    Call Us 08006894621
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Mail className="text-[#00A3FF]" size={18} />
                  </div>
                  <span className="text-[#A1A1A1] text-base">
                    info@courses4me.co.uk
                  </span>
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-10">
          {/* BOTTOM ROW */}

          <div className="text-white text-center text-sm">
            © 2026 Courses4Me. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
