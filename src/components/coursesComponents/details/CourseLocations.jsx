import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, CalendarDays, ArrowRight, Briefcase } from "lucide-react";
import courseLocationService from "../../../api/services/courseLocationService";
import { careersData } from "../../../data/careerData";
import { careerUrl, courseLocationUrl } from "../../../utils/seo";

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/*
 * Where the course runs, linking to each venue's page for this course, plus the
 * career guide the course leads to. These are the only links into the venue
 * pages from outside the location search.
 */
const CourseLocations = ({ course, courseId }) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    let active = true;
    courseLocationService
      .getByCourse(courseId)
      .then((res) => {
        if (active) setLinks(res.data?.data || []);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [courseId]);

  const title = course.title || "this course";
  const career = careersData.find((c) => title.toLowerCase().includes(c.title.toLowerCase()));
  const today = new Date(new Date().setHours(0, 0, 0, 0));

  if (!links.length && !career) return null;

  return (
    <section className="py-16 bg-[#F8FAFC] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {links.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-[#1E293B] mb-2">Where to take this course</h2>
            <p className="text-[#64748B] mb-8">
              {title} runs at {links.length} training centre{links.length === 1 ? "" : "s"}. Pick a venue to see dates, prices and directions.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {links.map((link) => {
                const loc = link.locationId || {};
                const next = (link.dates || [])
                  .filter((d) => d.startDate && new Date(d.startDate) >= today)
                  .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))[0];
                return (
                  <li key={link._id}>
                    <Link
                      to={courseLocationUrl(link._id, course.title, loc.city)}
                      className="group flex h-full flex-col justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:border-[#F15A24]/40 hover:shadow-md transition-all"
                    >
                      <div>
                        <p className="flex items-center gap-2 text-sm font-semibold text-[#C2410C]">
                          <MapPin size={15} aria-hidden="true" />
                          {loc.city || "UK"}
                        </p>
                        <h3 className="mt-2 text-lg font-bold text-[#0F172A] group-hover:text-[#C2410C] transition-colors">
                          {title} in {loc.city || loc.name}
                        </h3>
                        {loc.name && <p className="mt-1 text-sm text-gray-500">{loc.name}</p>}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-gray-600">
                          <CalendarDays size={15} aria-hidden="true" />
                          {next ? `Next start ${fmtDate(next.startDate)}` : "Dates on request"}
                        </span>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-[#C2410C] group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {career && (
          <Link
            to={careerUrl(career.id, career.title)}
            className={`group ${links.length ? "mt-8" : ""} flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 hover:border-[#F15A24]/40 hover:shadow-md transition-all`}
          >
            <Briefcase size={22} className="text-[#C2410C] shrink-0" aria-hidden="true" />
            <span className="text-[#0F172A]">
              <span className="font-bold group-hover:text-[#C2410C] transition-colors">
                {career.title} career guide
              </span>
              <span className="text-gray-500"> — salary, what the job involves and how this course gets you there</span>
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};

export default CourseLocations;
