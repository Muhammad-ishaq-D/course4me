import { useState, useEffect } from "react";
import { NavLink, useLocation, useParams, useNavigate } from "react-router-dom";
import {
  Clock3,
  CheckCircle2,
  BookOpen,
  Heart,
  CalendarDays,
  MapPin,
  Car,
  Train,
  Users,
  PoundSterling,
  Tag,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import CourseCard from "../ui/CourseCard";
import CenterDetails from "./CenterDetails";
import Loader from "../ui/Loader";
import locationService from "../../api/services/locationService";
import courseLocationService from "../../api/services/courseLocationService";

const FACILITY_LABELS = {
  wifi: "Wi-Fi",
  projector: "Projector",
  whiteboard: "Whiteboard",
  catering: "Catering",
  toilets: "Toilets",
  disabled_access: "Disabled Access",
  prayer_room: "Prayer Room",
  air_conditioning: "Air Con",
};

const fmtDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "—";

const fmtTime = (t) => {
  if (!t) return "";
  const [h, m] = t.split(":");
  const hour = Number(h);
  return `${hour % 12 || 12}:${m} ${hour < 12 ? "AM" : "PM"}`;
};

/* ─── new-API location detail view ──────────────────────────────── */
const CourseLocationView = ({ link }) => {
  const navigate = useNavigate();
  const loc = link.locationId || {};
  const course = link.courseId || {};
  const dates = (link.dates || []).sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate),
  );
  const upcomingDates = dates.filter(
    (d) => d.startDate && new Date(d.startDate) >= new Date(),
  );
  const [showAllDates, setShowAllDates] = useState(false);
  const visibleDates = showAllDates ? upcomingDates : upcomingDates.slice(0, 4);

  const fullAddress = [
    loc.addressLine1,
    loc.addressLine2,
    loc.city,
    loc.postcode,
    loc.country,
  ]
    .filter(Boolean)
    .join(", ");

  const mapSrc = loc.mapsUrl
    ? `https://www.google.com/maps?q=${encodeURIComponent(loc.mapsUrl)}&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(`${loc.postcode || ""} ${loc.city || ""} ${loc.country || "UK"}`.trim())}&output=embed`;

  const whatsIncludedList = (link.whatsIncluded || "")
    .split("\n")
    .filter(Boolean);

  return (
    <div className="bg-[#F4F7FB] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#0B1120] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-blue-600/20 blur-[130px]" />
          <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-orange-500/20 blur-[130px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-500/10 blur-[170px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 w-full pt-6 pb-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 text-sm text-white/50 mb-3">
            <NavLink to="/" className="hover:text-white transition">
              Home
            </NavLink>
            <span>/</span>
            <NavLink to="/locations" className="hover:text-white transition">
              Locations
            </NavLink>
            <span>›</span>
            <span className="text-white font-medium">
              {loc.name || course.title}
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_370px] gap-10 items-center">
            {/* Left */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-green-300 text-sm font-medium">
                    In-Person Training
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span className="text-white/80 text-sm font-medium">
                    Certified Centre
                  </span>
                </div>
                {link.status === "Active" && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                    <span className="text-orange-300 text-sm font-medium">
                      Available Now
                    </span>
                  </div>
                )}
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.05] max-w-3xl">
                {loc.name || "Training Centre"}
              </h1>

              {loc.city && (
                <div className="flex items-center gap-2 mt-4">
                  <MapPin size={18} className=" text-orange-400 shrink-0" />
                  <p className="text-base text-white/60">{fullAddress}</p>
                </div>
              )}

              {course.title && (
                <p className="text-base md:text-lg text-white/60 leading-relaxed mt-4 max-w-2xl">
                  Delivering{" "}
                  <strong className="text-white/80">{course.title}</strong> —
                  industry-recognised qualification with expert trainers.
                </p>
              )}

              {(loc.facilities || []).length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {loc.facilities.slice(0, 5).map((f) => (
                    <span
                      key={f}
                      className="text-sm font-semibold px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/70"
                    >
                      {FACILITY_LABELS[f] || f}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <button
                  onClick={() =>
                    document
                      .getElementById("dates-section")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="py-4 px-8 cursor-pointer rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base transition-all duration-300 shadow-[0_15px_35px_rgba(249,115,22,0.35)]"
                >
                  View Available Dates
                </button>
              </div>
            </div>

            {/* Right card */}
            <div className="relative">
              <div className="bg-[#2A1A16]/90 backdrop-blur-2xl border border-white/10 rounded-[28px] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.40)]">
                <div className="mt-2 space-y-1">
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                    <div className="flex items-center gap-3 text-white/60">
                      <PoundSterling className="w-4 h-4 text-orange-400" />
                      <span className="text-base">Course Price</span>
                    </div>
                    <div className="text-right">
                      <span className="text-white text-base font-bold">
                        £{link.price}
                      </span>
                      {link.vatIncluded && (
                        <span className="text-white/40 text-sm ml-1">
                          inc. VAT
                        </span>
                      )}
                    </div>
                  </div>

                  {link.depositRequired && (
                    <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                      <div className="flex items-center gap-3 text-white/60">
                        <Tag className="w-4 h-4 text-orange-400" />
                        <span className="text-base">Deposit</span>
                      </div>
                      <span className="text-white text-base font-semibold">
                        £{link.depositAmount}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                    <div className="flex items-center gap-3 text-white/60">
                      <CalendarDays className="w-4 h-4 text-orange-400" />
                      <span className="text-base">Next Date</span>
                    </div>
                    <span className="text-white text-base font-semibold">
                      {upcomingDates[0]
                        ? fmtDate(upcomingDates[0].startDate)
                        : "TBC"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                    <div className="flex items-center gap-3 text-white/60">
                      <Users className="w-4 h-4 text-orange-400" />
                      <span className="text-base">Seats Available</span>
                    </div>
                    <span className="text-white text-base font-semibold">
                      {upcomingDates[0]
                        ? Math.max(
                            0,
                            (upcomingDates[0].availableSeats || 0) -
                              (upcomingDates[0].bookedSeats || 0),
                          )
                        : "—"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                    <div className="flex items-center gap-3 text-white/60">
                      <Clock3 className="w-4 h-4 text-orange-400" />
                      <span className="text-base">Opening Hours</span>
                    </div>
                    <span className="text-white text-base font-semibold">
                      Mon – Sat
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {course._id && (
                    <button
                      onClick={() =>
                        navigate(`/booking/course?courseid=${course._id}`)
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-md cursor-pointer transition-all shadow-lg shadow-orange-500/30"
                    >
                      Book This Course
                    </button>
                  )}
                  {course._id && (
                    <button
                      onClick={() => navigate(`/course/${course._id}`)}
                      className="w-full px-5 py-4 cursor-pointer rounded-2xl border border-white/10 hover:bg-white/5 text-white/70 font-semibold text-sm transition-all flex items-center justify-center gap-2"
                    >
                      Course Details <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-14">
        {/* ── Available Dates ── */}
        <div id="dates-section">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[3px] text-orange-500 font-semibold">
                Schedule
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
                Available Dates
              </h2>
            </div>
            <div className="flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-2xl px-5 py-4">
              <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[2px] text-orange-500 font-medium">
                  Upcoming
                </p>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {upcomingDates.length}
                </h3>
              </div>
            </div>
          </div>

          {upcomingDates.length === 0 ? (
            <div className="bg-white rounded-3xl border border-gray-200 p-12 text-center">
              <CalendarDays className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-lg font-semibold text-gray-700">
                No upcoming dates
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Check back soon or contact us for updates
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {visibleDates.map((slot, i) => {
                const remaining = Math.max(
                  0,
                  (slot.availableSeats || 0) - (slot.bookedSeats || 0),
                );
                const statusColor =
                  remaining === 0
                    ? "bg-red-50 text-red-600 border-red-100"
                    : remaining <= 3
                      ? "bg-amber-50 text-amber-600 border-amber-100"
                      : "bg-emerald-50 text-emerald-600 border-emerald-100";
                const statusLabel =
                  remaining === 0
                    ? "Sold Out"
                    : remaining <= 3
                      ? "Selling Fast"
                      : "Available";

                return (
                  <div
                    key={i}
                    className="bg-white rounded-3xl border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-orange-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex flex-col items-center justify-center shrink-0 text-orange-600 font-bold">
                      <span className="text-xs uppercase">
                        {fmtDate(slot.startDate).split(" ")[1]}
                      </span>
                      <span className="text-xl leading-none">
                        {new Date(slot.startDate).getDate()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-lg text-gray-900">
                        {fmtDate(slot.startDate)}
                        {slot.endDate &&
                          slot.endDate !== slot.startDate &&
                          ` – ${fmtDate(slot.endDate)}`}
                      </p>
                      <p className="text-base text-gray-500 mt-0.5">
                        {fmtTime(slot.startTime)} – {fmtTime(slot.endTime)}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-md text-gray-500">
                        <Users size={18} className=" text-gray-400" />
                        <span>
                          {remaining} seat{remaining !== 1 ? "s" : ""} left
                        </span>
                      </div>
                      <span
                        className={`text-sm font-bold px-3 py-1.5 rounded-full border ${statusColor}`}
                      >
                        {statusLabel}
                      </span>
                      {course._id && remaining > 0 && (
                        <button
                          onClick={() =>
                            navigate(`/booking/course?courseid=${course._id}`)
                          }
                          className="py-3 px-6 rounded-xl cursor-pointer bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-all shadow-md shadow-orange-200 whitespace-nowrap"
                        >
                          Book
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              {upcomingDates.length > 4 && (
                <button
                  onClick={() => setShowAllDates((v) => !v)}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-3xl border-2 border-dashed border-gray-200 hover:border-orange-200 text-gray-500 hover:text-orange-500 font-semibold text-md transition-all"
                >
                  {showAllDates ? (
                    <>
                      <ChevronUp className="w-4 h-4" /> Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" /> Show All{" "}
                      {upcomingDates.length} Dates
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        {/* ── Two-column: What's Included + Facilities ── */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* What's included */}
          {whatsIncludedList.length > 0 && (
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[3px] text-orange-500 font-semibold mb-2">
                Package
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                What&apos;s Included
              </h2>
              <div className="space-y-3">
                {whatsIncludedList.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={18} className=" text-orange-500" />
                    </div>
                    <span className="text-base text-gray-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Facilities */}
          {(loc.facilities || []).length > 0 && (
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[3px] text-orange-500 font-semibold mb-2">
                Venue
              </p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Facilities
              </h2>
              <div className="flex flex-wrap gap-2">
                {loc.facilities.map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-1.5 text-base font-semibold bg-orange-50 text-orange-700 px-4 py-2.5 rounded-xl border border-orange-100"
                  >
                    <CheckCircle2 size={16} className="" />{" "}
                    {FACILITY_LABELS[f] || f}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Getting There ── */}
        {(loc.parkingNotes || loc.transport || loc.accessibility) && (
          <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[3px] text-orange-500 font-semibold mb-2">
              Travel
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Getting There
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {(loc.parking !== undefined || loc.parkingNotes) && (
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                    <Car size={24} className=" text-orange-500" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">Parking</p>
                    <p className="text-base text-gray-500 mt-0.5 leading-relaxed">
                      {loc.parking ? "Parking available" : "No on-site parking"}
                      {loc.parkingNotes ? ` — ${loc.parkingNotes}` : ""}
                    </p>
                  </div>
                </div>
              )}
              {loc.transport && (
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                    <Train size={24} className=" text-orange-500" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">
                      Transport Links
                    </p>
                    <p className="text-base text-gray-500 mt-1 leading-relaxed">
                      {loc.transport}
                    </p>
                  </div>
                </div>
              )}
              {loc.accessibility && (
                <div className="flex items-start gap-4 sm:col-span-2">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">
                      Accessibility
                    </p>
                    <p className="text-base text-gray-500 mt-1 leading-relaxed">
                      {loc.accessibility}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Map ── */}
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
            <div>
              <p className="text-sm uppercase tracking-[3px] text-orange-500 font-semibold mb-1">
                Location
              </p>
              <h2 className="text-2xl font-semibold text-gray-900">Find Us</h2>
            </div>
            {loc.mapsUrl && (
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-base font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Open in Maps <ExternalLink size={18} />
              </a>
            )}
          </div>
          <div className="h-95 bg-gray-100">
            <iframe
              title="Location Map"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapSrc}
            />
          </div>
          {loc.addressLine1 && (
            <div className="px-8 py-5 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} className="text-orange-500 shrink-0" />
                <span className="text-base font-medium">{fullAddress}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

/* ─── legacy center-based view (backward compat) ─────────────────── */
const LegacyCenterView = ({ center, courses }) => (
  <div className="bg-[#F4F7FB] min-h-screen">
    <section className="relative min-h-screen overflow-hidden bg-[#0B1120] flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-blue-600/20 blur-[130px]" />
        <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-orange-500/20 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-500/10 blur-[170px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 w-full pt-6 pb-8">
        <div className="flex items-center gap-3 text-sm text-white/50 mb-7">
          <NavLink to="/" className="hover:text-white transition">
            Home
          </NavLink>
          <span>/</span>
          <NavLink to="/locations" className="hover:text-white transition">
            Locations
          </NavLink>
          <span>›</span>
          <span className="text-white font-medium">{center.name}</span>
        </div>
        <div className="grid lg:grid-cols-[1fr_370px] gap-10 items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-green-300 text-sm font-medium">
                  In-Person Training
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-orange-400" />
                <span className="text-white/80 text-sm font-medium">
                  Certified Center
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.05] max-w-3xl">
              {center.name}
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mt-5 max-w-2xl">
              Professional training center delivering certified courses,
              practical workshops, and industry-recognized qualifications.
            </p>
            <div className="mt-8">
              <button
                onClick={() =>
                  document
                    .getElementById("courses-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="h-13 px-8 cursor-pointer rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base transition-all duration-300 shadow-[0_15px_35px_rgba(249,115,22,0.35)]"
              >
                Explore Courses at This Center
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#2A1A16]/90 backdrop-blur-2xl border border-white/10 rounded-[28px] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.40)]">
              <div className="relative rounded-[22px] overflow-hidden">
                <img
                  src={center.image}
                  alt={center.name}
                  className="w-full h-[190px] object-cover"
                />
                <button className="absolute top-4 left-4 w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                  <Heart className="w-4 h-4 text-white" />
                </button>
              </div>
              <div className="mt-5 space-y-1">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                  <div className="flex items-center gap-3 text-white/60">
                    <BookOpen className="w-4 h-4 text-orange-400" />
                    <span className="text-sm">Available Courses</span>
                  </div>
                  <span className="text-white text-sm font-semibold">
                    {courses.length}+
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                  <div className="flex items-center gap-3 text-white/60">
                    <Clock3 className="w-4 h-4 text-orange-400" />
                    <span className="text-sm">Opening Hours</span>
                  </div>
                  <span className="text-white text-sm font-semibold">
                    Mon - Sat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-7xl mx-auto px-4 py-20">
      <CenterDetails center={center} />
      <div id="courses-section" className="mt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[3px] text-orange-500 font-semibold">
              Courses
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2">
              Available Courses
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-2xl px-5 py-4">
            <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[2px] text-orange-500 font-medium">
                Total Courses
              </p>
              <h3 className="text-2xl font-semibold text-gray-900">
                {courses.length}
              </h3>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course._id || course.id}
              id={course._id || course.id}
              image={course.thumbnail || course.image}
              title={course.title}
              description={course.shortDescription || course.description}
              badge={course.badge || "Popular"}
              price={course.pricing?.basePrice || course.price}
              date={course.date || "Multiple Dates"}
              category={course.category}
              duration={course.duration}
              isPopular={course.isPopular}
              isOnline={course.isOnline || false}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
);

/* ─── main component ──────────────────────────────────────────────── */
const LocationDetails = () => {
  const { state } = useLocation();
  const { courseLocationId } = useParams();
  const [loading, setLoading] = useState(true);
  const [courseLink, setCourseLink] = useState(null);
  const [error, setError] = useState(null);

  // Legacy path — center passed via router state
  const center = state?.center;
  const [legacyCourses, setLegacyCourses] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (courseLocationId) {
      // New path: fetch from course-locations API
      const tryById = courseLocationService
        .getById(courseLocationId)
        .then((res) => {
          const data = res.data?.data;
          if (data) {
            setCourseLink(data);
            return true;
          }
          return false;
        })
        .catch(() => false);

      tryById
        .then((found) => {
          if (!found) {
            // Param might be a courseId — get first course-location
            return courseLocationService
              .getByCourse(courseLocationId)
              .then((res) => {
                const list = res.data?.data || [];
                if (list.length > 0) setCourseLink(list[0]);
                else setError("No location details found for this course.");
              })
              .catch(() => setError("Could not load location details."));
          }
        })
        .finally(() => setLoading(false));
    } else if (center) {
      // Legacy path — fetch courses for the center
      const fetchCourses = async () => {
        try {
          let allCourses = [];
          if (center?.locationId) {
            const data = await locationService.getLocationCourses(
              center.locationId,
            );
            if (data.success) {
              const centerId = center._id || center.id;
              allCourses = centerId
                ? data.data.filter(
                    (c) =>
                      !c.centerId ||
                      String(c.centerId) === String(centerId) ||
                      c.centerName === center.name,
                  )
                : data.data;
            }
          } else if (center?.name) {
            const data = await locationService.getCoursesByCenterName(
              center.name,
            );
            if (data.success) allCourses = data.data;
          }
          setLegacyCourses(allCourses);
        } catch {
          // silently fail
        } finally {
          setLoading(false);
        }
      };
      fetchCourses();
    } else {
      setLoading(false);
    }
  }, [courseLocationId, center]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4F7FB] flex items-center justify-center">
        <Loader text="Preparing location details..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F4F7FB] flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-orange-300 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-gray-700">{error}</h2>
          <NavLink
            to="/locations"
            className="mt-4 inline-block text-orange-500 font-semibold hover:underline"
          >
            ← Back to Locations
          </NavLink>
        </div>
      </div>
    );
  }

  if (courseLink) {
    return <CourseLocationView link={courseLink} />;
  }

  if (center) {
    return <LegacyCenterView center={center} courses={legacyCourses} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F7FB]">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">No Location Found</h1>
        <NavLink
          to="/locations"
          className="mt-4 inline-block text-orange-500 font-semibold hover:underline"
        >
          ← Back to Locations
        </NavLink>
      </div>
    </div>
  );
};

export default LocationDetails;
