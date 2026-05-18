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
} from "lucide-react";
import { NavLink, useSearchParams } from "react-router-dom";
import HeroSection from "../components/licenseDetails/HeroSection";
import licenseService from "../api/services/licenseService";

const LicenseDetails = () => {
  const [searchParams] = useSearchParams();
  const licenseId = searchParams.get("id");

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
      : (license?.pricing?.basePrice ? [{ label: "Training course", price: `£${license.pricing.basePrice}` }] : []);
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
                  Course Details
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
                        <span className="font-semibold text-[14px] leading-none">
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

                      <span className="text-[15px]">Duration</span>
                    </div>

                    <span className="font-bold text-[#101828] text-[15px]">
                      {license?.duration || "6 days"}
                    </span>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-[#667085]">
                      <Shield size={18} />

                      <span className="text-[15px]">Validity</span>
                    </div>

                    <span className="font-bold text-[#101828] text-[15px]">
                      {license?.valid || "3 years"}
                    </span>
                  </div>

                  {/* ITEM */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-[#667085]">
                      <span className="text-[18px] font-semibold">£</span>

                      <span className="text-[15px]">From</span>
                    </div>

                    <span className="font-bold text-[#101828] text-[15px]">
                      {license?.pricing && typeof license.pricing === 'object' ? `£${license.pricing.salePrice || license.pricing.basePrice}` : "£219"}
                    </span>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="h-[1px] bg-[#EAECF0] my-2" />

                {/* APPLY BUTTON */}
                <button className="w-full cursor-pointer bg-[#F15A24] hover:bg-[#ae4c29] text-white py-4 rounded-2xl font-bold text-md transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  Apply now
                  <ChevronRight size={20} />
                </button>

                {/* ADVISOR BUTTON */}
                <button className="w-full mt-3 border cursor-pointer border-[#D0D5DD] hover:bg-black/90 hover:text-white text-[#1D2939] py-4 rounded-2xl font-semibold text-md transition-all duration-300 bg-white">
                  Talk to an advisor
                </button>
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
                    <p className="text-[#667085] leading-7 text-[15px]">
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
                          <div className="w-7 h-7 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center shrink-0">
                            <Check size={15} className="text-[#F15A24]" />
                          </div>

                          <p className="text-[#101828] text-sm font-medium">
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
                          <div className="flex-1 border border-[#E4E7EC] rounded-[24px] p-5 bg-[#FCFCFD]">
                            <h3 className="text-lg font-bold text-[#1D2939]">
                              {step.title}
                            </h3>

                            <p className="mt-2 text-sm text-[#667085] leading-6">
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
                        <Clock3 size={17} />

                        <p className="text-sm">
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

                            <p className="font-medium text-sm text-[#101828]">
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
                          <p className="text-xs font-bold text-[#667085] uppercase tracking-wider">
                            Item
                          </p>

                          <p className="text-xs font-bold text-right text-[#667085] uppercase tracking-wider">
                            Price
                          </p>
                        </div>

                        {/* ROWS */}
                        {section.pricing.map((item, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-2 px-5 py-5 border-b last:border-none border-[#E4E7EC]"
                          >
                            <p className="font-medium text-sm text-[#101828]">
                              {item.label}
                            </p>

                            <p className="text-right text-sm font-bold text-[#101828]">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default LicenseDetails;
