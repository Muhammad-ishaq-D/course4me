import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Clock, User, MapPin, Briefcase, CreditCard, ChevronDown, Check, ShieldCheck, Star, Phone, Mail, Calendar, Hash } from "lucide-react";

const CourseCheckout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 12); // 14:12

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isLoading]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const steps = [
    { id: 1, label: "Your Details", icon: User },
    { id: 2, label: "Billing Address", icon: MapPin },
    { id: 3, label: "Zero-Hassle Application Service - EasyApply™", icon: Briefcase, badge: "Recommended" },
    { id: 4, label: "Bolt-On", icon: Hash },
    { id: 5, label: "Payment", icon: CreditCard },
  ];

  /* ─── SKELETON ─── */
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F4F4F4] pt-[100px] font-sans">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-8">
          {/* skeleton back + title */}
          <div className="h-5 bg-gray-200 rounded w-36 mb-6" />
          <div className="h-8 bg-gray-200 rounded w-56 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-72 mb-10" />

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left col skeleton */}
            <div className="flex-1 space-y-4">
              {/* expanded block */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="h-5 bg-gray-200 rounded w-32 mb-6" />
                <div className="h-4 bg-gray-100 rounded w-full mb-3" />
                <div className="flex gap-4 mb-3">
                  <div className="h-12 bg-gray-100 rounded flex-1" />
                  <div className="h-12 bg-gray-100 rounded flex-1" />
                </div>
                <div className="h-12 bg-gray-100 rounded w-full mb-3" />
                <div className="h-12 bg-gray-100 rounded w-full mb-3" />
                <div className="h-12 bg-gray-100 rounded w-full mb-6" />
                <div className="h-12 bg-gray-200 rounded w-40" />
              </div>
              {/* collapsed bars */}
              {[2, 3, 4, 5].map(i => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="h-4 bg-gray-100 rounded w-40" />
                </div>
              ))}
            </div>

            {/* Right col skeleton */}
            <div className="w-full lg:w-[340px] space-y-4">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-10 bg-gray-200 w-full" />
                <div className="p-5 space-y-3">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded bg-gray-100 shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-100 rounded w-1/2" />
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-16" />
                  </div>
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="h-3 bg-gray-100 rounded w-2/3" />
                      <div className="h-3 bg-gray-100 rounded w-14" />
                    </div>
                  ))}
                  <div className="h-px bg-gray-100 my-2" />
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-24" />
                    <div className="h-4 bg-gray-200 rounded w-20" />
                  </div>
                </div>
              </div>
              {/* lower boxes */}
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-3">
                <div className="h-4 bg-gray-200 rounded w-32" />
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-5/6" />
                <div className="h-3 bg-gray-100 rounded w-4/6" />
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-3">
                <div className="h-3 bg-gray-200 rounded w-40" />
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="h-3 bg-gray-100 rounded w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ─── MAIN PAGE ─── */
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pt-[90px]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-8">
        {/* Back + Title */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-[#1C1C1C] transition-colors text-sm font-bold mb-4"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-extrabold text-[#1C1C1C]">Secure Checkout</h1>
              <Lock size={18} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Your seat is reserved. Complete your booking in</span>
              <span className="flex items-center gap-1.5 text-[#F15A24] font-black">
                <Clock size={14} className="text-[#F15A24]" />
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 space-y-3">
            {steps.map((step) => {
              const Icon = step.icon;
              const isExpanded = activeStep === step.id;
              const isDone = activeStep > step.id;

              return (
                <div
                  key={step.id}
                  className={`bg-white rounded-xl border shadow-sm transition-all overflow-hidden ${
                    isExpanded ? "border-gray-200" : "border-gray-100"
                  }`}
                >
                  {/* Step Header */}
                  <button
                    onClick={() => !isExpanded && setActiveStep(step.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 text-left ${
                      isExpanded ? "cursor-default" : "cursor-pointer hover:bg-gray-50/50"
                    }`}
                  >
                    {/* Step number or check */}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-black border-2 transition-all ${
                        isDone
                          ? "bg-[#00b67a] border-[#00b67a] text-white"
                          : isExpanded
                          ? "bg-[#1C1C1C] border-[#1C1C1C] text-white"
                          : "border-gray-200 text-gray-400"
                      }`}
                    >
                      {isDone ? <Check size={14} /> : step.id}
                    </div>

                    <div className="flex-1 flex items-center gap-3">
                      <span
                        className={`text-[14px] font-bold ${
                          isExpanded ? "text-[#1C1C1C]" : isDone ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </span>
                      {step.badge && (
                        <span className="inline-block px-2 py-0.5 bg-[#00b67a] text-white text-[9px] font-black uppercase tracking-widest rounded">
                          {step.badge}
                        </span>
                      )}
                    </div>
                    {!isExpanded && (
                      <ChevronDown size={16} className="text-gray-300 shrink-0" />
                    )}
                  </button>

                  {/* Step 1: Your Details expanded */}
                  {isExpanded && step.id === 1 && (
                    <div className="px-6 pb-8 border-t border-gray-50">
                      <div className="pt-6 space-y-4">
                        {/* First + Last name */}
                        <div className="flex gap-4">
                          <div className="flex-1 relative">
                            <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">First name</label>
                            <div className="relative">
                              <input
                                type="text"
                                defaultValue="ali"
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#1C1C1C] outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all"
                              />
                              <User size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
                            </div>
                          </div>
                          <div className="flex-1 relative">
                            <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Last name</label>
                            <div className="relative">
                              <input
                                type="text"
                                defaultValue="a"
                                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#1C1C1C] outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all"
                              />
                              <User size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
                            </div>
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Email address</label>
                          <div className="relative">
                            <input
                              type="email"
                              defaultValue="a@gmail.com"
                              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#1C1C1C] outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all"
                            />
                            <Mail size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
                          </div>
                        </div>

                        {/* Mobile */}
                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Mobile number</label>
                          <div className="relative">
                            <input
                              type="tel"
                              defaultValue="032"
                              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#1C1C1C] outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all"
                            />
                            <Phone size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
                          </div>
                        </div>

                        {/* Date of Birth */}
                        <div>
                          <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Date of birth</label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="DD/MM/YYYY"
                              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#1C1C1C] outline-none focus:ring-2 focus:ring-[#F15A24] focus:border-transparent transition-all"
                            />
                            <Calendar size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
                          </div>
                        </div>

                        <button
                          onClick={() => setActiveStep(2)}
                          className="bg-[#1C1C1C] text-white px-8 py-3.5 rounded-lg font-black text-sm hover:bg-black active:scale-95 transition-all mt-2"
                        >
                          Save & Continue
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="w-full lg:w-[330px] space-y-4 lg:sticky lg:top-[100px]">
            {/* Order Summary */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#00b67a] px-5 py-3 flex items-center justify-between">
                <span className="text-white text-[13px] font-black">Order Summary</span>
                <span className="text-white text-[12px] font-bold bg-white/20 px-3 py-0.5 rounded-full">
                  You're saving £112.00
                </span>
              </div>
              <div className="p-5 space-y-4">
                {/* Course item */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-white" size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-black text-[#1C1C1C] leading-snug">Door Supervisor Training – Flexi+</p>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">Friday 3rd Apr 2026</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[11px] text-gray-400 line-through">£251.99</p>
                    <p className="text-[14px] font-black text-[#1C1C1C]">£139.99</p>
                  </div>
                </div>

                <div className="h-px bg-gray-100" />

                {/* EasyApply */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check size={14} className="text-[#00b67a]" />
                    <span className="text-[13px] text-[#1C1C1C] font-bold">EasyApply</span>
                  </div>
                  <span className="text-[13px] font-black text-[#1C1C1C]">£149.99</span>
                </div>

                <div className="h-px bg-gray-100" />

                {/* Promo */}
                <button className="text-[#F15A24] text-[12px] font-bold hover:underline">
                  Apply promo or referral code
                </button>

                <div className="h-px bg-gray-100" />

                {/* Total */}
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-black text-[#1C1C1C]">Order Total</span>
                  <div className="text-right">
                    <p className="text-xl font-black text-[#F15A24]">£289.98</p>
                    <p className="text-[10px] text-gray-400">(Price Inclusive of VAT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Guarantee */}
            <div className="bg-[#00b67a] rounded-xl p-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-extrabold text-base leading-snug mb-3">
                  Zero Risk With<br />Training Guarantee
                </h3>
                <button className="bg-white text-[#1C1C1C] text-[11px] font-black px-4 py-2 rounded-lg hover:bg-gray-50 transition-all active:scale-95">
                  More details
                </button>
              </div>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Check className="text-white" size={28} strokeWidth={3} />
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-black shrink-0">
                  A
                </div>
                <div>
                  <p className="text-[12px] text-gray-600 leading-relaxed italic">
                    I was very nervous before the course specially with the exam. But my trainer, Adam, was super friendly and{" "}
                    <span className="text-[#F15A24] font-bold not-italic">really gave me the confidence I needed.</span>{" "}
                    The mock exams on the app and course book{" "}
                    <span className="text-[#F15A24] font-bold not-italic">helped me passed in the first attempt.</span>
                  </p>
                  <p className="mt-2 text-[11px] font-black text-[#1C1C1C]">- Arif Ali</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#1C1C1C]" />
                <div className="w-2 h-2 rounded-full bg-gray-200" />
                <div className="w-2 h-2 rounded-full bg-gray-200" />
              </div>
            </div>

            {/* Stars */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center mb-4">Consistently rated 5-stars</p>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="text-sm font-black text-[#1C1C1C]">Excellent</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
                      <span className="text-white text-[10px]">★</span>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-black text-[#1C1C1C]">Trustpilot</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <svg viewBox="0 0 24 24" className="w-4 h-4">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span className="text-[11px] font-black text-[#1C1C1C]">Google Reviews</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl font-black text-[#1C1C1C]">4.9</span>
                  <div className="flex text-[#ffb800]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 font-bold">9,511 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCheckout;
