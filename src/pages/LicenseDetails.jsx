import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  Shield,
  Clock3,
  ChevronRight,
  Check,
  BookOpen,
  Wallet,
  RefreshCw,
  ClipboardCheck,
  GraduationCap,
  MapPin,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";
import HeroSection from "../components/licenseDetails/HeroSection";
import licenseService from "../api/services/licenseService";
import Loader from "../components/ui/Loader";

const LicenseDetails = () => {
  const [searchParams] = useSearchParams();
  const licenseId = searchParams.get("id");
  const navigate = useNavigate();

  const [license, setLicense] = useState(null);
  const [loading, setLoading] = useState(true);

  // ======================================================
  // FETCH LICENSE DETAILS FROM BACKEND
  // ======================================================
  useEffect(() => {
    const fetchLicenseDetails = async () => {
      try {
        setLoading(true);
        if (licenseId) {
          const response = await licenseService.getLicenseById(licenseId);
          const responseData = response.data || response;
          setLicense(responseData.data || responseData);
        }
      } catch (error) {
        console.error("Error fetching license details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLicenseDetails();
  }, [licenseId]);

  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef({});

  // ======================================================
  // DYNAMIC SECTIONS WITH FALLBACKS
  // ======================================================
  const sections = useMemo(() => {
    const list = [];

    // 1. About
    if (license?.fullDescription) {
      list.push({
        id: "about",
        title: "About this licence",
        icon: Shield,
        content: license.fullDescription,
      });
    }

    // 2. Eligibility
    if (license?.requirements && license.requirements.length > 0) {
      list.push({
        id: "eligibility",
        title: "Eligibility",
        icon: ClipboardCheck,
        items: license.requirements,
      });
    }

    // 3. How to apply
    if (license?.applicationSteps && license.applicationSteps.length > 0) {
      list.push({
        id: "apply",
        title: "How to apply",
        icon: Check,
        steps: license.applicationSteps,
      });
    }

    // 4. Training & modules
    if (license?.learningPoints && license.learningPoints.length > 0) {
      list.push({
        id: "training",
        title: "Training & modules",
        icon: BookOpen,
        modules: license.learningPoints,
      });
    }

    // 5. Cost & renewal
    const breakdown = license?.pricingBreakdown?.length
      ? license.pricingBreakdown
      : license?.pricing?.basePrice
        ? [{ label: "Training course", price: `£${license.pricing.basePrice}` }]
        : [];
    if (breakdown.length > 0) {
      list.push({
        id: "cost",
        title: "Cost & renewal",
        icon: Wallet,
        pricing: breakdown,
      });
    }

    // 6. Renewal
    if (license?.renewalInfo) {
      list.push({
        id: "renewal",
        title: "Renewal",
        icon: RefreshCw,
        content: license.renewalInfo,
      });
    }

    return list;
  }, [license]);

  // ======================================================
  // SCROLL TO SECTION
  // ======================================================
  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ======================================================
  // ACTIVE SECTION
  // ======================================================
  useEffect(() => {
    const observers = [];
    const sectionIds = sections.map((s) => s.id);

    sectionIds.forEach((id) => {
      const element = sectionRefs.current[id];
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-15% 0px -80% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [loading, sections]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F6F8FB] flex items-center justify-center">
        <Loader text="Preparing your licence information..." />
      </div>
    );
  }

  return (
    <div className="bg-[#F6F8FB] ">
      {/* =====================HERO SECTION========================== */}
      <HeroSection license={license} />

      {/* ======================================================
          DETAILS SECTION
      ====================================================== */}
      <section className="py-14 lg:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[330px_minmax(0,1fr)] gap-6 items-start">
          {/* ===================SIDEBAR========================= */}
          <div className="hidden lg:block sticky top-0 self-start">
            <div className="space-y-2">
              {/* ===============NAVIGATION========================= */}
              <div className="bg-white border border-[#EEF2F6] rounded-[28px] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#98A2B3] font-bold mb-2 px-2">
                  Licence Details
                </h3>

                <div className="space-y-2">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;

                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`group w-full flex cursor-pointer items-center justify-between px-3 py-3 rounded-2xl transition-all duration-300 text-left border ${
                          isActive
                            ? "bg-[#F15A24] text-white border-[#F15A24] shadow-lg shadow-[#F15A24]/20 scale-[1.02]"
                            : "bg-[#FCFCFD] hover:bg-[#FFF4EF] border-transparent text-[#344054] hover:text-[#F15A24]"
                        }`}
                      >
                        <span className="font-semibold text-base leading-none">
                          {section.title}
                        </span>

                        <ChevronRight
                          size={16}
                          className={`transition-all duration-300 ${
                            isActive
                              ? "translate-x-1"
                              : "group-hover:translate-x-1"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =====================QUICK SUMMARY CARD=================== */}
              <div className="bg-white border border-[#EEF2F6] rounded-[28px] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
                {/* TITLE */}
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#98A2B3] font-bold mb-3 ">
                  Quick Summary
                </h3>

                {/* DETAILS */}
                <div className="space-y-2">
                  {/* ITEM */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-[#667085]">
                      <Clock3 size={18} />

                      <span className="text-base">Duration</span>
                    </div>

                    <span className="font-bold text-[#101828] text-base">
                      {license?.duration || "6 days"}
                    </span>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-[#667085]">
                      <Shield size={18} />

                      <span className="text-base">Validity</span>
                    </div>

                    <span className="font-bold text-[#101828] text-base">
                      {license?.valid || "3 years"}
                    </span>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-[#667085]">
                      <span className="text-[18px] font-semibold">£</span>

                      <span className="text-base">Training From</span>
                    </div>

                    <span className="font-bold text-[#101828] text-base">
                      {license?.pricing && typeof license.pricing === "object"
                        ? `£${license.pricing.salePrice || license.pricing.basePrice}`
                        : "£219"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===============CONTENT================= */}
          <div className="space-y-4">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <div
                  key={section.id}
                  id={section.id}
                  ref={(el) => (sectionRefs.current[section.id] = el)}
                  className="scroll-mt-28 bg-white border border-[#EEF2F6] rounded-[26px] p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  {/* =====================HEADER====================== */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#F4F7FB] flex items-center justify-center">
                      <Icon size={20} className="text-[#F15A24]" />
                    </div>

                    <h2 className="text-[24px] md:text-[28px] font-black tracking-tight text-[#101828]">
                      {section.title}
                    </h2>
                  </div>

                  {/* ==============ABOUT / DESCRIPTION=============== */}
                  {section.content && (
                    <p className="text-[#667085] leading-7 text-base">
                      {section.content}
                    </p>
                  )}

                  {/* ==============ELIGIBILITY=========== */}
                  {section.items && (
                    <div className="grid md:grid-cols-2 gap-3">
                      {section.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 border border-[#E4E7EC] rounded-2xl px-4 py-4 bg-[#FCFCFD]"
                        >
                          <div className="w-7 h-7 rounded-full bg-orange-50 border border-[#22C55E]/20 flex items-center justify-center shrink-0">
                            <Check size={15} className="text-[#F15A24]" />
                          </div>

                          <p className="text-[#101828] text-base font-medium">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* =================APPLY STEPS================== */}
                  {section.steps && (
                    <div className="space-y-2">
                      {section.steps.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          {/* LEFT */}
                          <div className="flex flex-col items-center">
                            <div className="w-9 h-9 rounded-full bg-[#F15A24] text-white flex items-center justify-center text-sm font-bold shadow-md">
                              {i + 1}
                            </div>

                            {i !== section.steps.length - 1 && (
                              <div className="w-[2px] flex-1 bg-[#E4E7EC] mt-2" />
                            )}
                          </div>

                          {/* CARD */}
                          <div className="flex-1 border border-[#E4E7EC] rounded-[24px] p-4 bg-[#FCFCFD]">
                            <h3 className="text-lg font-bold text-[#1D2939]">
                              {step.title}
                            </h3>

                            <p className="mt-2 text-base text-[#667085] leading-6">
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* =================MODULES===================== */}
                  {section.modules && (
                    <div className="border border-[#E4E7EC] rounded-[24px] p-5 bg-[#FCFCFD]">
                      {/* DURATION */}
                      <div className="flex items-center gap-2 text-[#667085] mb-5">
                        <Clock3 size={18} />

                        <p className="text-base">
                          Course duration:
                          <span className="font-bold text-[#101828] ml-2">
                            {license?.duration || "6 days (approx. 54 hours)"}
                          </span>
                        </p>
                      </div>

                      {/* MODULE GRID */}
                      <div className="grid md:grid-cols-2 gap-3">
                        {section.modules.map((module, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 border border-[#E4E7EC] rounded-2xl px-4 py-4 bg-white"
                          >
                            <div className="w-11 h-9 rounded-xl bg-[#EEF4FF] text-[#F15A24] text-sm font-bold flex items-center justify-center shrink-0">
                              0{i + 1}
                            </div>

                            <p className="font-medium text-base text-[#101828]">
                              {module}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* =================PRICING=================== */}
                  {section.pricing && (
                    <div className="space-y-4">
                      <div className="border border-[#E4E7EC] rounded-[24px] overflow-hidden bg-[#FCFCFD]">
                        {/* HEADER */}
                        <div className="grid grid-cols-2 px-5 py-4 border-b border-[#E4E7EC] bg-[#F9FAFB]">
                          <p className="text-sm font-bold text-[#667085] uppercase tracking-wider">
                            Item
                          </p>

                          <p className="text-sm font-bold text-right text-[#667085] uppercase tracking-wider">
                            Price
                          </p>
                        </div>

                        {/* ROWS */}
                        {section.pricing.map((item, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-2 px-5 py-5 border-b last:border-none border-[#E4E7EC]"
                          >
                            <p className="font-medium text-base text-[#101828]">
                              {item.label}
                            </p>

                            <p className="text-right text-base font-bold text-[#101828]">
                              {item.price}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* =====================REQUIRED TRAINING SECTION===================== */}
            {license?.relatedCourses && license.relatedCourses.length > 0 && (
              <div
                id="required-training"
                className="scroll-mt-28 bg-white border border-[#EEF2F6] rounded-[26px] p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              >
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F4F7FB] flex items-center justify-center">
                    <GraduationCap size={20} className="text-[#F15A24]" />
                  </div>
                  <div>
                    <h2 className="text-[24px] md:text-[28px] font-black tracking-tight text-[#101828]">
                      Required Training
                    </h2>
                    <p className="text-[#667085] text-sm mt-0.5">
                      Book one of the courses below to begin your journey
                      towards this licence
                    </p>
                  </div>
                </div>

                {/* CLARIFICATION BANNER */}
                <div className="flex items-start gap-3 bg-[#FFF9F6] border border-[#F15A24]/20 rounded-2xl px-4 py-3.5 mb-5">
                  <BookOpen
                    size={16}
                    className="text-[#F15A24] mt-0.5 shrink-0"
                  />
                  <p className="text-sm text-[#667085] leading-6">
                    <span className="font-semibold text-[#101828]">
                      You are booking training
                    </span>
                    , not purchasing an SIA government licence directly.
                    Complete the required courses below, then apply for your
                    licence through the SIA.
                  </p>
                </div>

                {/* COURSE CARDS */}
                <div className="space-y-3">
                  {license.relatedCourses.map((course, i) => (
                    <div
                      key={course._id || i}
                      className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#E4E7EC] rounded-2xl px-5 py-4 bg-[#FCFCFD] hover:border-[#F15A24]/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-[#101828] text-[15px] group-hover:text-[#F15A24] transition-colors duration-200">
                          {course.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          {course.duration && (
                            <span className="flex items-center gap-1.5 text-xs text-[#667085]">
                              <Clock3 size={13} />
                              {course.duration}
                            </span>
                          )}
                          {course.pricing?.basePrice && (
                            <span className="flex items-center gap-1 text-xs font-semibold text-[#101828]">
                              From £
                              {course.pricing.salePrice ||
                                course.pricing.basePrice}
                            </span>
                          )}
                          {course.location && (
                            <span className="flex items-center gap-1.5 text-xs text-[#667085]">
                              <MapPin size={13} />
                              {course.location}
                            </span>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          navigate(`/booking/course?courseid=${course._id}`)
                        }
                        className="shrink-0 flex items-center gap-2 bg-[#F15A24] hover:bg-[#db4c14] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Book Training
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* PROCESS FLOW */}
                <div className="mt-6 pt-5 border-t border-[#EEF2F6]">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#98A2B3] font-bold mb-3">
                    Your journey
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {[
                      "Book Training",
                      "Attend Course",
                      "Pass Assessment",
                      "Get Certificate",
                      "Apply for SIA Licence",
                      "Start Working",
                    ].map((step, i, arr) => (
                      <React.Fragment key={i}>
                        <span
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                            i === 0
                              ? "bg-[#F15A24] text-white"
                              : "bg-[#F4F7FB] text-[#667085]"
                          }`}
                        >
                          {step}
                        </span>
                        {i < arr.length - 1 && (
                          <ChevronRight size={14} className="text-[#D0D5DD]" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LicenseDetails;
