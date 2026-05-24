import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Star,
  Clock,
  Phone,
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop";

const CenterSearchCard = ({ item }) => {
  const c = item.center || {};
  const fullAddress = [c.address, c.postcode].filter(Boolean).join(", ");
  const hasRating = c.rating != null && c.rating !== "";
  const facilityCount = Array.isArray(c.facilities) ? c.facilities.length : 0;
  const courseCount = item.courseCount ?? 0;

  const metrics = [
    {
      key: "courses",
      icon: BookOpen,
      primary: String(courseCount),
      secondary: courseCount === 1 ? "Course" : "Courses",
      highlight: courseCount > 0,
    },
    {
      key: "rating",
      icon: Star,
      primary: hasRating ? Number(c.rating).toFixed(1) : "—",
      secondary:
        hasRating && c.reviews
          ? `${c.reviews} reviews`
          : hasRating
            ? "Rating"
            : "New center",
      highlight: hasRating,
    },
    {
      key: "facilities",
      icon: Sparkles,
      primary: facilityCount > 0 ? String(facilityCount) : "—",
      secondary:
        facilityCount > 0
          ? facilityCount === 1
            ? "Facility"
            : "Facilities"
          : "Amenities",
      highlight: facilityCount > 0,
    },
  ];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-gray-200/90 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:border-[#F15A24]/25 hover:shadow-[0_24px_50px_rgba(241,90,36,0.12)]">
      {/* Hero */}
      <div className="relative h-[200px] shrink-0 overflow-hidden">
        <img
          src={item.image || c.image || DEFAULT_IMAGE}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/90 via-[#0B1120]/35 to-[#0B1120]/10" />

        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center rounded-full bg-[#2563EB] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
            Training Center
          </span>
        </div>

        {c.next && (
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-[#F15A24] shadow-md backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F15A24] animate-pulse" />
              Next: {c.next}
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="text-[22px] font-black leading-tight text-white sm:text-[26px] line-clamp-2">
            {item.title}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white/85">
            <MapPin size={14} className="shrink-0 text-[#F15A24]" />
            {item.location}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        {fullAddress && (
          <p className="text-[14px] leading-relaxed text-[#667085] line-clamp-2">
            {fullAddress}
          </p>
        )}

        <ul className="mt-4 space-y-2.5">
          {c.hours && (
            <li className="flex items-start gap-2.5 text-[13px] text-[#475467]">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF4EF] text-[#F15A24]">
                <Clock size={15} />
              </span>
              <span className="pt-1 font-medium leading-snug">{c.hours}</span>
            </li>
          )}
          {c.phone && (
            <li className="flex items-center gap-2.5 text-[13px] text-[#475467]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F8FAFC] text-[#64748B]">
                <Phone size={15} />
              </span>
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="font-semibold text-[#111827] hover:text-[#F15A24] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                {c.phone}
              </a>
            </li>
          )}
        </ul>

        {facilityCount > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {c.facilities.slice(0, 3).map((f) => (
              <span
                key={f}
                className="rounded-lg border border-[#EDF1F5] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-semibold text-[#475467]"
              >
                {f}
              </span>
            ))}
            {facilityCount > 3 && (
              <span className="rounded-lg bg-[#FFF4EF] px-2.5 py-1 text-[11px] font-semibold text-[#F15A24]">
                +{facilityCount - 3} more
              </span>
            )}
          </div>
        )}

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {metrics.map(({ key, icon: Icon, primary, secondary, highlight }) => (
            <div
              key={key}
              className={`rounded-xl border px-2 py-3 text-center transition-colors ${
                highlight
                  ? "border-[#F15A24]/15 bg-[#FFF8F5]"
                  : "border-[#EDF1F5] bg-[#F8FAFC]"
              }`}
            >
              <Icon
                size={14}
                className={`mx-auto mb-1.5 ${
                  highlight ? "text-[#F15A24]" : "text-[#94A3B8]"
                }`}
              />
              <p
                className={`text-sm font-bold leading-tight ${
                  highlight ? "text-[#111827]" : "text-[#94A3B8]"
                }`}
              >
                {primary}
              </p>
              <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#94A3B8]">
                {secondary}
              </p>
            </div>
          ))}
        </div>

        <Link
          to="/locations/locationdetails"
          state={{ center: item.center }}
          className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#F15A24] text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-[#E14D17] hover:shadow-orange-500/35 active:scale-[0.98]"
        >
          Explore Center
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
};

export default CenterSearchCard;
