import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  ChevronDown,
  Star,
  ArrowLeft,
  ShieldCheck,
  Check,
  X as XIcon,
  Users,
} from "lucide-react";
import { courses as fallbackCourses } from "../../data/courseData";
import courseService from "../../api/services/courseService";
import courseLocationService from "../../api/services/courseLocationService";

const CoursePackages = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  // Derive course details dynamically
  const courseId = searchParams.get("courseId");
  const scheduleId = searchParams.get("scheduleId");

  const [course, setCourse] = useState(null);
  const [schedulePrice, setSchedulePrice] = useState(null);
  const [error, setError] = useState("");

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
      "Online self-study top-up training",
      "Action Counter Terrorism (ACT) online course e-Learning",
    ],
    flexi: [
      "Everything included in Saver",
      "Unlimited Free Retakes (worth £49 per retake) - Popular",
      "Free Rescheduling (up to 3 times)",
      "Free Name Change (Up to 72 hours before the start of the course)",
      "Full refund up to 72 Hrs before Course",
      "14 days access to highly rated mock exam App (completed online prior to attending course) - worth £14.99",
      "Zero Risk Guarantee - If you fail, fail, fail the exam, we will refund you 100% of the course fee - worth £25",
    ],
    premium: [
      "Everything included in Flexi Plus Package",
      "Same day results - We will fast track your Results (Instead of waiting for up to 14 days, you will receive your Results the same day) - worth £49",
    ],
  };

  const faqs = [
    {
      question: "What is the best package for me?",
      answer:
        "This depends on your learning needs. Flexi+ offers peace of mind with free retakes and guarantees.",
    },
    {
      question: "Can I pay for the course in instalments?",
      answer:
        "Yes, we offer flexible payment plans allowing you to split the cost without hidden charges.",
    },
    {
      question: "Can I upgrade my course package after I book?",
      answer:
        "Yes, you can upgrade your package by contacting our customer support team.",
    },
    {
      question: "Can I buy the workbook standalone later?",
      answer: "Yes, the workbook is available for separate purchase.",
    },
    {
      question: "Will the mock exams ensure I definitely pass my exams?",
      answer:
        "While no resource guarantees a pass, our mock exams heavily boost the likelihood of passing the first time.",
    },
    {
      question: "What happens after I book my course?",
      answer:
        "You will receive an immediate confirmation email containing instructions and access links to your materials.",
    },
    {
      question: "Can I fail if I buy the Zero Risk Guarantee?",
      answer:
        "You can fail, but the guarantee minimizes your financial risk by giving you peace of mind and refunds per terms.",
    },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F4F4F4] pt-[120px] font-sans overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Skeleton Header */}
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

          {/* Skeleton Cards */}
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
  const basePriceValue = schedulePrice || course?.pricing?.basePrice || 139.99;
  const saverPrice = (basePriceValue - 40).toFixed(2);
  const flexiPrice = basePriceValue.toFixed(2);
  const premiumPrice = (basePriceValue + 120).toFixed(2);

  return (
    <div className=" min-h-screen bg-[#F8FAFC]">
      {/* Dark Header */}
      <div className="bg-[#1C1C1C] pt-12 pb-40 relative px-4 md:px-0">
        <div className="max-w-[1200px] mx-auto px-4 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-6"
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
              {/* Decorative Circle */}
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
          <div className=" relative bg-white rounded-3xl border-2 border-transparent shadow-lg shadow-black/5 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#F15A24] hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F15A24]/15 group">
            <div className=" p-4 lg:p-8 pb-6 flex-1">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[12px] font-black uppercase tracking-widest rounded mb-4">
                Standard
              </span>
              <h2 className="text-3xl font-black text-[#1C1C1C] mb-1 transition-colors duration-300 group-hover:text-[#F15A24]">
                Saver
              </h2>
              <p className="text-sm text-gray-400 font-medium mb-6">
                If you strictly need to complete the course
              </p>

              <div className="mb-3">
                <span className="text-3xl font-black text-[#1C1C1C]">
                  £{saverPrice}
                </span>
                <span className="text-sm text-gray-400 font-medium ml-1">
                  / Inc VAT
                </span>
              </div>

              <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-2 flex gap-3 items-start mb-6 text-[14px] text-gray-600">
                <CheckCircle2
                  className="text-gray-400 shrink-0 mt-0.5"
                  size={16}
                />
                <p>
                  Only permit changing booking dates to{" "}
                  <b>within 2 weeks' notice before the course start date.</b>
                </p>
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
              <div className="bg-red-50 text-red-600 rounded-xl p-4 text-[12px] leading-relaxed mb-6 border border-red-100 font-medium space-y-2">
                <div className="flex gap-2 items-start">
                  <XIcon size={16} className="shrink-0 mt-0.5" />{" "}
                  <p className="text-[15px]">
                    You will have to{" "}
                    <b className="font-bold border-b border-red-600">
                      pay up to £49
                    </b>{" "}
                    for unlimited resits if you fail the exam
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <XIcon size={16} className="shrink-0 mt-0.5" />{" "}
                  <p className="text-[15px]">
                    You are missing out on the{" "}
                    <b className="font-bold border-b border-red-600">
                      Free Name Change Guarantee and Zero Risk Refund Guarantee
                    </b>
                  </p>
                </div>
              </div>
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

          {/* Flexi+ Card */}
          <div className=" relative bg-white rounded-3xl border-[3px] border-[#F15A24]  shadow-lg shadow-black/5 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#F15A24] hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F15A24]/15 group">
            <div className="absolute top-0 w-full bg-[#F15A24] text-white text-[14px] font-black uppercase tracking-widest py-1.5 text-center">
              Our Most Popular Plan
            </div>
            <div className="p-4 lg:p-8 pb-6 flex-1 mt-3">
              <span className="inline-block px-3 py-1 bg-[#FFF5F1] text-[#F15A24] text-[12px] font-black uppercase tracking-widest rounded mb-4">
                Recommended
              </span>
              <h2 className="text-3xl font-black text-[#1C1C1C] mb-1">
                Flexi+
              </h2>
              <p className="text-sm text-gray-400 font-medium mb-4">
                Guaranteed pass or your money back
              </p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#1C1C1C]">
                  £{flexiPrice}
                </span>
                <span className="text-sm text-gray-400 font-medium ml-1">
                  / Inc VAT
                </span>
              </div>

              <div className="bg-[#FFF5F1] border border-[#F15A24]/20 rounded-xl p-4 flex gap-3 items-start mb-5 text-[13px] text-[#F15A24] font-medium leading-relaxed">
                <CheckCircle2 className="shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="font-bold text-[14px] mb-1">
                    Passing guaranteed or your money back. 100% of course fee
                    completely refunded
                  </p>
                  <p className="text-[13px] opacity-80">
                    (After attending, studying & failing the exam up to 3 times)
                  </p>
                </div>
              </div>

              <p className="text-[14px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                What's included
              </p>
              <ul className="space-y-3">
                {features.flexi.map((feature, idx) => {
                  // Highlighting specific words for exact match
                  const isZeroRisk = feature.includes("Zero Risk Guarantee");
                  const isRetakes = feature.includes("Unlimited Free Retakes");

                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        className="text-[#F15A24] shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="text-[15px] text-gray-600 leading-snug">
                        {isZeroRisk ? (
                          <>
                            <b className="text-[#F15A24] underline">
                              Zero Risk Guarantee
                            </b>{" "}
                            - If you fail, fail, pass... we will refund you 100%
                            of the course fee -{" "}
                            <span className="italic text-gray-400">
                              worth £25
                            </span>
                          </>
                        ) : isRetakes ? (
                          <>
                            Unlimited Free Retakes{" "}
                            <span className="italic text-gray-400">
                              (worth £49 per retake)
                            </span>{" "}
                            -{" "}
                            <span className="bg-[#FFF5F1] text-[#F15A24] text-[12px] font-black uppercase px-1.5 py-0.5 rounded">
                              Popular
                            </span>
                          </>
                        ) : (
                          feature
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="p-4 lg:p-8 pt-0 mt-auto border-t border-gray-50/50">
              <button
                onClick={() =>
                  navigate(
                    `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Flexi+`,
                  )
                }
                className="w-full py-4 rounded-xl cursor-pointer bg-[#F15A24] text-white font-black text-md hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#F15A24]/20"
              >
                Select Flexi+
              </button>
            </div>
          </div>

          {/* Premium Card */}
          <div className=" relative bg-white rounded-3xl border-2 border-transparent shadow-lg shadow-black/5 flex flex-col overflow-hidden transition-all duration-500 hover:border-[#F15A24] hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F15A24]/15 group">
            <div className="p-4 lg:p-8 pb-6 flex-1">
              <span className="inline-block px-3 py-1 bg-purple-50 text-[#7344ff] text-[12px] font-black uppercase tracking-widest rounded mb-4">
                Best Service
              </span>
              <h2 className="text-3xl font-black text-[#1C1C1C] mb-1 transition-colors duration-300 group-hover:text-[#F15A24]">
                Premium
              </h2>
              <p className="text-sm text-gray-400 font-medium mb-6">
                VIP treatment & exclusive privileges
              </p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#1C1C1C]">
                  £{premiumPrice}
                </span>
                <span className="text-sm text-gray-400 font-medium ml-1">
                  / Inc VAT
                </span>
              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 flex gap-3 items-start mb-8 text-[13px] text-gray-600">
                <CheckCircle2
                  className="text-[#7344ff] shrink-0 mt-0.5"
                  size={18}
                />
                <p className="text-[14px]">
                  Same day results - We will fast track your results! <br />
                  <span className="text-[13px] text-gray-400">
                    (Instead of waiting for up to 14 days)
                  </span>
                </p>
              </div>

              <p className="text-[13px] text-gray-400 font-bold uppercase tracking-widest mb-4">
                What's included
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-[#F15A24] shrink-0 mt-0.5" size={16} />
                  <span className="text-[15px] text-gray-600 font-bold">
                    Everything included in Flexi+
                  </span>
                </li>
                {features.premium.slice(1).map((feature, idx) => (
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

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-4 lg:px-0 mb-24">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="mt-5 text-3xl md:text-4xl font-black text-[#1C1C1C]">
            Got Questions?
            <span className="block text-[#F15A24]">We Have Answers</span>
          </h2>

          <p className="mt-4 text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know before booking your training course.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={` group cursor-pointer bg-white rounded-2xl border overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-[#F15A24]/10
          ${
            openFaq === idx
              ? "border-[#F15A24] shadow-lg shadow-[#F15A24]/10"
              : "border-gray-100 hover:border-[#F15A24]/30"
          }
        `}
            >
              {/* Question */}
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex cursor-pointer  items-center justify-between px-2 md:px-8 py-5 text-left"
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div
                    className={`
                px-3.5 py-2 rounded-full flex items-center justify-center text-sm font-bold transition-all
                ${
                  openFaq === idx
                    ? "bg-[#F15A24] text-white"
                    : "bg-[#FFF5F1] text-[#F15A24]"
                }
              `}
                  >
                    ?
                  </div>

                  <h3
                    className={` text-base md:text-lg md:font-semibold transition-colors
                ${openFaq === idx ? "text-[#F15A24]" : "text-[#1C1C1C]"}
              `}
                  >
                    {faq.question}
                  </h3>
                </div>

                <ChevronDown
                  size={20}
                  className={`
              transition-all duration-300
              ${openFaq === idx ? "rotate-180 text-[#F15A24]" : "text-gray-400"}
            `}
                />
              </button>

              {/* Answer */}
              <div
                className={`
            transition-all duration-300 cursor-pointer overflow-hidden
            ${openFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
              >
                <div className="px-6 md:px-8 pb-6">
                  <div className="pl-6 md:pl-12 border-l-2 border-[#F15A24]/20">
                    <p className="text-base text-gray-600 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Header */}
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
                    Features
                  </th>

                  <th className="p-5 text-center text-sm lg:text-base font-black text-[#1C1C1C]">
                    Saver
                  </th>

                  <th className="p-5 text-center bg-[#FFF5F1] text-sm lg:text-base font-black text-[#F15A24] relative">
                    Flexi+
                    <span className="absolute top-2 right-2 bg-[#F15A24] text-white text-[10px] px-2 py-1 rounded-full font-bold uppercase">
                      Popular
                    </span>
                  </th>

                  <th className="p-5 text-center text-sm lg:text-base font-black text-[#7344ff]">
                    Premium
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
                {[
                  {
                    name: "Digital course handbook PC/Mac",
                    saver: true,
                    flexi: true,
                    prem: true,
                  },
                  {
                    name: "The Premium Guarantee App 📱",
                    saver: true,
                    flexi: true,
                    prem: true,
                  },
                  {
                    name: "Unlimited free retakes (worth £49 each)",
                    saver: false,
                    flexi: true,
                    prem: true,
                  },
                  {
                    name: "Zero risk guarantee",
                    saver: false,
                    flexi: true,
                    prem: true,
                  },
                  {
                    name: "Free reschedules (worth £15) and free name changes (worth £5)",
                    saver: false,
                    flexi: true,
                    prem: true,
                  },
                  {
                    name: "Full refund Policy up to 72 hours",
                    saver: false,
                    flexi: true,
                    prem: true,
                  },
                  {
                    name: "Passing strategy assessment (an easy and simple step guide to studying in your exam - exclusive)",
                    saver: false,
                    flexi: true,
                    prem: true,
                  },
                  {
                    name: "Premium learning material - Presentation, time assessment mock exam marking review - worth £149",
                    saver: false,
                    flexi: true,
                    prem: true,
                  },
                  {
                    name: "Job Board Access 💼",
                    saver: false,
                    flexi: false,
                    prem: true,
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#FFF5F1]/40 transition-colors"
                  >
                    <td className="p-5 text-sm md:text-base text-gray-700 font-medium leading-relaxed border-t border-gray-100">
                      {row.name}
                    </td>

                    <td className="p-5 text-center border-t border-gray-100">
                      {row.saver ? (
                        <Check className="text-[#00B67A] mx-auto" size={20} />
                      ) : (
                        <XIcon className="text-red-400 mx-auto" size={16} />
                      )}
                    </td>

                    <td className="p-5 text-center bg-[#FFF5F1] border-t border-gray-100">
                      {row.flexi ? (
                        <Check className="text-[#00B67A] mx-auto" size={20} />
                      ) : (
                        <XIcon className="text-red-400 mx-auto" size={16} />
                      )}
                    </td>

                    <td className="p-5 text-center border-t border-gray-100">
                      {row.prem ? (
                        <Check className="text-[#00B67A] mx-auto" size={20} />
                      ) : (
                        <XIcon className="text-red-400 mx-auto" size={16} />
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-6 bg-slate-50"></td>

                  <td className="p-3 md:p-6 text-cente">
                    <button
                      onClick={() =>
                        navigate(
                          `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Saver`,
                        )
                      }
                      className="px-9  py-3 rounded-xl cursor-pointer border border-gray-300 md:font-bold text-sm hover:border-[#F15A24] hover:text-[#F15A24] transition-all"
                    >
                      Select Saver
                    </button>
                  </td>

                  <td className="p-3 md:p-6 text-center bg-[#FFF5F1]">
                    <button
                      onClick={() =>
                        navigate(
                          `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Flexi+`,
                        )
                      }
                      className="px-9  py-3 rounded-xl cursor-pointer bg-[#F15A24] text-white md:font-bold text-sm shadow-lg shadow-[#F15A24]/20 hover:scale-105 transition-all"
                    >
                      Select Flexi+
                    </button>
                  </td>

                  <td className="p-3 md:p-6  bg-purple-50">
                    <button
                      onClick={() =>
                        navigate(
                          `/booking/checkout?courseId=${course._id}&scheduleId=${scheduleId}&plan=Premium`,
                        )
                      }
                      className="px-9 py-3 rounded-xl cursor-pointer bg-[#7344ff] text-white md:font-bold text-sm shadow-lg shadow-[#7344ff]/20 hover:scale-105 transition-all"
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
