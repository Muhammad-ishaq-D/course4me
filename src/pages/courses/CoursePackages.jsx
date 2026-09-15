import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShieldCheck,
  Check,
  X as XIcon,
  Briefcase,
  Zap,
} from "lucide-react";
import courseService from "../../api/services/courseService";
import courseLocationService from "../../api/services/courseLocationService";

const CoursePackages = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  // Derive course details dynamically
  const courseId = searchParams.get("courseId");
  const scheduleId = searchParams.get("scheduleId");

  const [course, setCourse] = useState(null);
  const [schedulePrice, setSchedulePrice] = useState(null);
  const [error, setError] = useState("");

  const [showSaverWarning, setShowSaverWarning] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!courseId) {
          setIsLoading(false);
          return;
        }

        const [courseRes, locRes] = await Promise.all([
          courseService.getCourseById(courseId),
          courseLocationService
            .getByCourse(courseId)
            .catch(() => ({ data: { data: [] } })),
        ]);

        setCourse(courseRes.data.data);

        if (scheduleId) {
          const links = locRes.data.data || [];
          let foundPrice = null;
          for (const link of links) {
            const date = (link.dates || []).find(
              (d) => d._id?.toString() === scheduleId.toString(),
            );
            if (date && link.price) {
              foundPrice = link.price;
              break;
            }
          }
          if (foundPrice) setSchedulePrice(foundPrice);
        }
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError("Course not found");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    window.scrollTo(0, 0);
  }, [courseId, scheduleId]);

  const features = {
    saver: [
      "Full classroom-based training by experienced instructors",
      "Comprehensive e-notes and study material",
      "Guidance & support throughout the training",
      "E-certificate upon passing",
    ],
    flexi: [
      "Everything included in Saver",
      "3 Free Retakes",
      "Free rescheduling (up to 3 times)",
      "Full refund if you cancel up to 72 hrs before course start",
      "Free name change before issuing certificate",
    ],
    premium: [
      "Everything included in Flexi",
      "Fast track results (receive results faster instead of waiting 14 days)",
      "Help with SIA application",
      "Job advice",
    ],
  };

  const featureRows = [
    {
      name: "Full classroom-based training",
      saver: <Check className="text-[#00B67A] mx-auto" size={20} />,
      flexi: <Check className="text-[#00B67A] mx-auto" size={20} />,
      prem: <Check className="text-[#00B67A] mx-auto" size={20} />,
    },
    {
      name: "Experienced instructors",
      saver: <Check className="text-[#00B67A] mx-auto" size={20} />,
      flexi: <Check className="text-[#00B67A] mx-auto" size={20} />,
      prem: <Check className="text-[#00B67A] mx-auto" size={20} />,
    },
    {
      name: "E-notes & study materials",
      saver: <Check className="text-[#00B67A] mx-auto" size={20} />,
      flexi: <Check className="text-[#00B67A] mx-auto" size={20} />,
      prem: <Check className="text-[#00B67A] mx-auto" size={20} />,
    },
    {
      name: "Guidance & support",
      saver: <Check className="text-[#00B67A] mx-auto" size={20} />,
      flexi: <Check className="text-[#00B67A] mx-auto" size={20} />,
      prem: <Check className="text-[#00B67A] mx-auto" size={20} />,
    },
    {
      name: "E-certificate upon passing",
      saver: <Check className="text-[#00B67A] mx-auto" size={20} />,
      flexi: <Check className="text-[#00B67A] mx-auto" size={20} />,
      prem: <Check className="text-[#00B67A] mx-auto" size={20} />,
    },
    {
      name: "Free exam retakes",
      saver: <XIcon className="text-red-400 mx-auto" size={16} />,
      flexi: <span className="font-bold text-[#1C1C1C]">3 Free Retakes</span>,
      prem: <span className="font-bold text-[#1C1C1C]">3 Free Retakes</span>,
    },
    {
      name: "Exam resit cost",
      saver: <span className="font-bold text-[#1C1C1C]">£100 per resit</span>,
      flexi: <span className="font-medium text-gray-700">Included</span>,
      prem: <span className="font-medium text-gray-700">Included</span>,
    },
    {
      name: "Free course rescheduling",
      saver: <XIcon className="text-red-400 mx-auto" size={16} />,
      flexi: <span className="font-bold text-[#1C1C1C]">Up to 3 times</span>,
      prem: <span className="font-bold text-[#1C1C1C]">Up to 3 times</span>,
    },
    {
      name: "Course date change fee",
      saver: <span className="font-bold text-[#1C1C1C]">£150</span>,
      flexi: <span className="font-medium text-gray-700">Free</span>,
      prem: <span className="font-medium text-gray-700">Free</span>,
    },
    {
      name: "Refund for cancellation",
      saver: <XIcon className="text-red-400 mx-auto" size={16} />,
      flexi: (
        <span className="font-bold text-[#1C1C1C]">
          Full refund up to 72 hours before the course
        </span>
      ),
      prem: (
        <span className="font-bold text-[#1C1C1C]">
          Full refund up to 72 hours before the course
        </span>
      ),
    },
    {
      name: "Free name change before certificate",
      saver: <XIcon className="text-red-400 mx-auto" size={16} />,
      flexi: <Check className="text-[#00B67A] mx-auto" size={20} />,
      prem: <Check className="text-[#00B67A] mx-auto" size={20} />,
    },
    {
      name: "Fast-track results",
      saver: <XIcon className="text-red-400 mx-auto" size={16} />,
      flexi: <XIcon className="text-red-400 mx-auto" size={16} />,
      prem: (
        <span className="inline-flex items-center gap-1 font-bold text-[#7344ff]">
          <Zap size={16} className="fill-[#7344ff]" /> Yes
        </span>
      ),
    },
    {
      name: "Help with SIA application",
      saver: <XIcon className="text-red-400 mx-auto" size={16} />,
      flexi: <XIcon className="text-red-400 mx-auto" size={16} />,
      prem: <Check className="text-[#00B67A] mx-auto" size={20} />,
    },
    {
      name: "Job advice",
      saver: <XIcon className="text-red-400 mx-auto" size={16} />,
      flexi: <XIcon className="text-red-400 mx-auto" size={16} />,
      prem: (
        <span className="inline-flex items-center gap-1.5 font-bold text-[#1C1C1C]">
          <Briefcase size={16} className="text-[#7344ff]" /> Included
        </span>
      ),
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F4F4F4] pt-[120px] font-sans overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex justify-between items-start mb-12">
            <div className="space-y-4 w-full max-w-[600px]">
              <div className="h-6 bg-gray-200 rounded w-24 mb-4" />
              <div className="h-10 bg-gray-200 rounded w-[80%]" />
              <div className="h-10 bg-gray-200 rounded w-[60%]" />
              <div className="h-4 bg-gray-200 rounded w-48 mt-4" />
              <div className="h-4 bg-gray-200 rounded w-32 mt-2" />
            </div>
            <div className="hidden md:block w-full max-w-[320px] bg-white rounded p-4 space-y-4">
              <div className="h-3 bg-gray-100 rounded w-16" />
              <div className="h-4 bg-gray-100 rounded w-[90%]" />
              <div className="h-4 bg-gray-100 rounded w-[90%]" />
              <div className="h-4 bg-gray-100 rounded w-[90%]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 min-h-[400px]"
              >
                <div className="h-8 bg-gray-100 rounded w-32 mb-6" />
                <div className="h-4 bg-gray-100 rounded w-full mb-3" />
                <div className="h-4 bg-gray-100 rounded w-24 mb-10" />

                <div className="h-12 bg-gray-100 rounded w-full mb-8" />

                <div className="h-4 bg-gray-100 rounded w-full mb-4" />
                <div className="h-4 bg-gray-100 rounded w-[80%] mb-12" />

                <div className="h-4 bg-gray-100 rounded w-32 mb-4" />
                <div className="h-10 bg-gray-50 rounded w-full mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!course && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Course not found
      </div>
    );
  }

  const baseTitle = course?.title || "Course";
  const basePriceValue =
    schedulePrice ||
    course?.pricing?.salePrice ||
    course?.pricing?.basePrice ||
    139.99;
  const saverPrice = (basePriceValue - 40).toFixed(2);
  const flexiPrice = basePriceValue.toFixed(2);
  const premiumPrice = (basePriceValue + 120).toFixed(2);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Dark Header */}
      <div className="bg-[#1C1C1C] pt-8 pb-40 relative px-4 md:px-0">
        <div className="max-w-[1200px] mx-auto px-4 pt-2">
          <button
            onClick={() => navigate(-1)}
            className="hidden md:flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-6"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-[700px]">
              <h1 className="text-3xl md:text-[42px] leading-tight font-extrabold text-white mb-6">
                The #1 Choice for {baseTitle} in the UK
              </h1>
            </div>

            <div className="relative hidden lg:block overflow-hidden rounded-2xl border border-[#F15A24]/15 bg-gradient-to-br from-[#FFF8F5] to-white p-5 shadow-lg shadow-[#F15A24]/5 hover:shadow-xl hover:shadow-[#F15A24]/10 transition-all duration-300 group">
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#F15A24]/5 rounded-full"></div>

              <div className="relative flex items-center gap-2 justify-between">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#F15A24] flex items-center justify-center shadow-lg shadow-[#F15A24]/20">
                    <ShieldCheck size={28} className="text-white" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#F15A24]/10 text-[#F15A24] text-[11px] font-bold uppercase tracking-wider mb-3">
                    Trusted Protection
                  </div>

                  <h4 className="text-[#1C1C1C] text-base font-extrabold leading-tight">
                    Training Guarantee
                  </h4>

                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Book with confidence and enjoy complete peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 -mt-[120px] relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Saver Card */}
          <div className="relative bg-white rounded-3xl border-2 border-transparent shadow-lg shadow-black/5 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#F15A24] hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F15A24]/15 group">
            <div className="p-4 lg:p-8 pb-6 flex-1">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[12px] font-black uppercase tracking-widest rounded mb-4">
                Standard
              </span>
              <h2 className="text-3xl font-black text-[#1C1C1C] mb-1 transition-colors duration-300 group-hover:text-[#F15A24]">
                Saver
              </h2>
              <p className="text-sm text-gray-400 font-medium mb-6">
                Basic training package for direct certification
              </p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#1C1C1C]">
                  £{saverPrice}
                </span>
                <span className="text-sm text-gray-400 font-medium ml-1">
                  / Inc VAT
                </span>
              </div>

              <p className="text-[13px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                What's included
              </p>
              <ul className="space-y-4">
                {features.saver.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="text-[#F15A24] shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-[15px] text-gray-600 leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 lg:p-8 pt-0 mt-auto border-t border-gray-50/50">
              <div
                className={`${
                  showSaverWarning ? "block" : "hidden"
                } md:block bg-red-50 text-red-600 rounded-xl p-4 text-[12px] leading-relaxed mb-6 border border-red-100 font-medium space-y-2.5`}
              >
                <div className="flex gap-2 items-start">
                  <XIcon size={16} className="shrink-0 mt-0.5 text-red-500" />
                  <p className="text-[14px]">
                    No free resits in exam —{" "}
                    <b className="font-bold border-b border-red-600">
                      resits will cost £100
                    </b>
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <XIcon size={16} className="shrink-0 mt-0.5 text-red-500" />
                  <p className="text-[14px]">
                    <b className="font-bold">No refund</b> if you fail the
                    course
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <XIcon size={16} className="shrink-0 mt-0.5 text-red-500" />
                  <p className="text-[14px]">
                    Changing or rearranging course date will{" "}
                    <b className="font-bold border-b border-red-600">
                      cost £150
                    </b>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowSaverWarning(!showSaverWarning)}
                className="md:hidden mb-4 text-[#F15A24] font-bold text-sm"
              >
                {showSaverWarning ? "See Less" : "See More"}
              </button>

              <button
                onClick={() =>
                  navigate(
                    `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Saver`,
                  )
                }
                className="w-full py-4 cursor-pointer rounded-xl border-2 border-gray-200 text-[#1C1C1C] font-black text-md hover:border-[#F15A24] hover:text-[#F15A24] active:scale-95 transition-all"
              >
                Select Saver
              </button>
            </div>
          </div>

          {/* Flexi Card */}
          <div className="relative bg-white rounded-3xl border-[3px] border-[#F15A24] shadow-lg shadow-black/5 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#F15A24] hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F15A24]/15 group">
            <div className="absolute top-0 w-full bg-[#F15A24] text-white text-[14px] font-black uppercase tracking-widest py-1.5 text-center">
              Our Most Popular Plan
            </div>
            <div className="p-4 lg:p-8 pb-6 flex-1 mt-3">
              <span className="inline-block px-3 py-1 bg-[#FFF5F1] text-[#F15A24] text-[12px] font-black uppercase tracking-widest rounded mb-4">
                Recommended
              </span>
              <h2 className="text-3xl font-black text-[#1C1C1C] mb-1">Flexi</h2>
              <p className="text-sm text-gray-400 font-medium mb-4">
                Flexible booking with free retakes
              </p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#1C1C1C]">
                  £{flexiPrice}
                </span>
                <span className="text-sm text-gray-400 font-medium ml-1">
                  / Inc VAT
                </span>
              </div>

              <p className="text-[14px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                What's included
              </p>
              <ul className="space-y-3">
                {features.flexi.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="text-[#F15A24] shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-[15px] text-gray-600 leading-snug">
                      {idx === 0 ? (
                        <b className="font-bold text-[#1C1C1C]">{feature}</b>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 lg:p-8 pt-0 mt-auto border-t border-gray-50/50">
              <button
                onClick={() =>
                  navigate(
                    `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Flexi`,
                  )
                }
                className="w-full py-4 rounded-xl cursor-pointer bg-[#F15A24] text-white font-black text-md hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#F15A24]/20"
              >
                Select Flexi
              </button>
            </div>
          </div>

          {/* Premium Card */}
          <div className="relative bg-white rounded-3xl border-2 border-transparent shadow-lg shadow-black/5 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#F15A24] hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F15A24]/15 group">
            <div className="p-4 lg:p-8 pb-6 flex-1">
              <span className="inline-block px-3 py-1 bg-purple-50 text-[#7344ff] text-[12px] font-black uppercase tracking-widest rounded mb-4">
                Best Service
              </span>
              <h2 className="text-3xl font-black text-[#1C1C1C] mb-1 transition-colors duration-300 group-hover:text-[#F15A24]">
                Premium
              </h2>
              <p className="text-sm text-gray-400 font-medium mb-6">
                VIP treatment & exclusive support
              </p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#1C1C1C]">
                  £{premiumPrice}
                </span>
                <span className="text-sm text-gray-400 font-medium ml-1">
                  / Inc VAT
                </span>
              </div>

              <p className="text-[13px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                What's included
              </p>
              <ul className="space-y-4">
                {features.premium.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check
                      className="text-[#F15A24] shrink-0 mt-0.5"
                      size={18}
                    />
                    <span className="text-[15px] text-gray-600 leading-snug">
                      {idx === 0 ? (
                        <b className="font-bold text-[#1C1C1C]">{feature}</b>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 lg:p-8 pt-0 mt-auto border-t border-gray-50/50">
              <button
                onClick={() =>
                  navigate(
                    `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Premium`,
                  )
                }
                className="w-full cursor-pointer py-4 rounded-xl bg-[#7344ff] text-white font-black text-md hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#7344ff]/20"
              >
                Select Premium
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFF5F1] text-[#F15A24] text-xs font-bold uppercase tracking-[0.2em]">
              Compare Packages
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-black text-[#1C1C1C]">
              Compare All Plans
            </h2>

            <p className="mt-3 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
              Choose the package that best suits your training needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[13px] border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50">
                  <th className="p-5 text-left text-sm lg:text-base font-black text-[#1C1C1C] w-[40%]">
                    FEATURES
                  </th>

                  <th className="p-5 text-center text-sm lg:text-base font-black text-[#1C1C1C]">
                    SAVER
                  </th>

                  <th className="p-5 text-center bg-[#FFF5F1] text-sm lg:text-base font-black text-[#F15A24] relative">
                    FLEXI
                    <span className="absolute top-2 right-2 bg-[#F15A24] text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase">
                      Popular
                    </span>
                  </th>

                  <th className="p-5 text-center text-sm lg:text-base font-black text-[#7344ff]">
                    PREMIUM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-5 text-gray-700 font-bold text-sm lg:text-base border-t border-gray-100">
                    Total Price
                  </td>

                  <td className="p-5 text-center font-black text-lg border-t border-gray-100">
                    £{saverPrice}
                  </td>

                  <td className="p-5 text-center font-black text-xl text-[#F15A24] bg-[#FFF5F1] border-t border-gray-100">
                    £{flexiPrice}
                  </td>

                  <td className="p-5 text-center font-black text-xl text-[#7344ff] border-t border-gray-100">
                    £{premiumPrice}
                  </td>
                </tr>

                <tr className="bg-slate-50">
                  <td className="p-4 text-[#F15A24] font-bold text-sm uppercase tracking-widest">
                    Service Summary
                  </td>

                  <td className="p-4 text-center text-gray-500 text-base font-medium">
                    Essential
                  </td>

                  <td className="p-4 text-center text-[#F15A24] text-base font-bold bg-[#FFF5F1]">
                    Most Popular
                  </td>

                  <td className="p-4 text-center text-[#7344ff] text-base font-bold">
                    Premium Experience
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={4}
                    className="bg-slate-50 p-4 text-sm md:text-base font-black text-[#1C1C1C]"
                  >
                    General Features
                  </td>
                </tr>

                {featureRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#FFF5F1]/40 transition-colors"
                  >
                    <td className="p-5 text-sm md:text-base text-gray-700 font-medium leading-relaxed border-t border-gray-100">
                      {row.name}
                    </td>

                    <td className="p-5 text-center border-t border-gray-100">
                      {row.saver}
                    </td>

                    <td className="p-5 text-center bg-[#FFF5F1] border-t border-gray-100">
                      {row.flexi}
                    </td>

                    <td className="p-5 text-center border-t border-gray-100">
                      {row.prem}
                    </td>
                  </tr>
                ))}

                <tr>
                  <td className="p-6 bg-slate-50"></td>

                  <td className="p-3 md:p-6 text-center">
                    <button
                      onClick={() =>
                        navigate(
                          `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Saver`,
                        )
                      }
                      className="px-6 py-3 rounded-xl cursor-pointer border border-gray-300 md:font-bold text-sm hover:border-[#F15A24] hover:text-[#F15A24] transition-all"
                    >
                      Select Saver
                    </button>
                  </td>

                  <td className="p-3 md:p-6 text-center bg-[#FFF5F1]">
                    <button
                      onClick={() =>
                        navigate(
                          `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Flexi`,
                        )
                      }
                      className="px-6 py-3 rounded-xl cursor-pointer bg-[#F15A24] text-white md:font-bold text-sm shadow-lg shadow-[#F15A24]/20 hover:scale-105 transition-all"
                    >
                      Select Flexi
                    </button>
                  </td>

                  <td className="p-3 md:p-6 text-center bg-purple-50">
                    <button
                      onClick={() =>
                        navigate(
                          `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Premium`,
                        )
                      }
                      className="px-6 py-3 rounded-xl cursor-pointer bg-[#7344ff] text-white md:font-bold text-sm shadow-lg shadow-[#7344ff]/20 hover:scale-105 transition-all"
                    >
                      Select Premium
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePackages;
