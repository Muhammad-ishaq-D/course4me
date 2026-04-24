import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft, Lock, Clock, User, MapPin, Briefcase,
  CreditCard, ChevronDown, Check, ShieldCheck,
  Star, Phone, Mail, Calendar, Edit2, Copy,
  Download, ArrowRight, BookOpen, Smartphone,
  Award, CheckCircle
} from "lucide-react";

/* ─── helpers ─── */
const StepCheck = () => (
  <div className="w-7 h-7 rounded-full bg-[#00b67a] flex items-center justify-center shrink-0">
    <Check size={14} className="text-white" strokeWidth={3} />
  </div>
);

const StepNumber = ({ n, active }) => (
  <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-black transition-all
    ${active ? "bg-[#1C1C1C] border-[#1C1C1C] text-white" : "border-gray-300 text-gray-400"}`}>
    {n}
  </div>
);

const FieldInput = ({ label, placeholder, value, onChange, type = "text", icon: Icon }) => (
  <div>
    <label className="block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">{label}</label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-[#1C1C1C] outline-none focus:ring-2 focus:ring-[#F15A24]/40 focus:border-[#F15A24] transition-all placeholder:text-gray-300"
      />
      {Icon && <Icon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />}
    </div>
  </div>
);

const SaveBtn = ({ onClick, label = "Save & Continue" }) => (
  <button
    onClick={onClick}
    className="bg-[#1C1C1C] text-white px-8 py-3.5 rounded-lg font-black text-sm hover:bg-black active:scale-95 transition-all mt-2"
  >
    {label}
  </button>
);

/* ─── Right sidebar (shared) ─── */
const RightSidebar = () => (
  <div className="w-full lg:w-[330px] space-y-4 lg:sticky lg:top-[100px]">
    {/* Order Summary */}
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="bg-[#00b67a] px-5 py-3 flex items-center justify-between">
        <span className="text-white text-[13px] font-black">Order Summary</span>
        <span className="text-white text-[12px] font-bold bg-white/20 px-3 py-0.5 rounded-full">You're saving £112.00</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#1C1C1C] flex items-center justify-center shrink-0">
            <ShieldCheck className="text-white" size={18} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-black text-[#1C1C1C] leading-snug">Door Supervisor Training – Flexi+</p>
            <p className="text-[11px] text-gray-400 font-medium mt-0.5">Friday 3rd Apr 2026</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-[10px] text-[#F15A24] font-bold cursor-pointer hover:underline">Change package</p>
            <p className="text-[11px] text-gray-400 line-through">£251.99</p>
            <p className="text-[14px] font-black text-[#F15A24]">£139.99</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Check size={13} className="text-[#00b67a]" />
            <span className="text-[13px] text-[#1C1C1C] font-bold">EasyApply</span>
          </div>
          <span className="text-[13px] font-black text-[#1C1C1C]">£149.99</span>
        </div>
        <div className="h-px bg-gray-100" />
        <button className="text-[#F15A24] text-[12px] font-bold hover:underline">Apply promo or referral code</button>
        <div className="h-px bg-gray-100" />
        <div className="flex items-start justify-between">
          <span className="text-[14px] font-black text-[#1C1C1C]">Order Total</span>
          <div className="text-right">
            <p className="text-xl font-black text-[#F15A24]">£289.98</p>
            <p className="text-[10px] text-gray-400">(*Price Inclusive of VAT)</p>
          </div>
        </div>
      </div>
    </div>

    {/* Guarantee */}
    <div className="bg-[#00b67a] rounded-xl p-5 flex items-center justify-between gap-4">
      <div>
        <h3 className="text-white font-extrabold text-base leading-snug mb-3">Zero Risk With<br />Training Guarantee</h3>
        <button className="bg-white text-[#1C1C1C] text-[11px] font-black px-4 py-2 rounded-lg hover:bg-gray-50 transition-all active:scale-95">More details</button>
      </div>
      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shrink-0">
        <Check className="text-white" size={28} strokeWidth={3} />
      </div>
    </div>

    {/* Testimonial */}
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-black shrink-0">A</div>
        <p className="text-[12px] text-gray-600 leading-relaxed">
          I was very nervous before the course specially with the exam. But my trainer, Adam, was super friendly and{" "}
          <span className="text-[#F15A24] font-bold">really gave me the confidence I needed.</span>{" "}
          The mock exams on the app and course book{" "}
          <span className="text-[#F15A24] font-bold">helped me passed in the first attempt.</span>
        </p>
      </div>
      <p className="text-[11px] font-black text-[#1C1C1C] mb-3">- Arif Ali</p>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-gray-200" />
        <div className="w-2 h-2 rounded-full bg-gray-200" />
        <div className="w-2 h-2 rounded-full bg-[#1C1C1C]" />
      </div>
    </div>

    {/* Stars */}
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">Consistently rated 5-stars</p>
      <div className="flex justify-center items-center gap-2 mb-4">
        <span className="text-sm font-black text-[#1C1C1C]">Excellent</span>
        <div className="flex">{[...Array(5)].map((_, i) => <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center"><span className="text-white text-[10px]">★</span></div>)}</div>
        <span className="text-[10px] font-black text-[#1C1C1C]">Trustpilot</span>
      </div>
      <div className="flex items-center justify-center gap-2 mb-1">
        <svg viewBox="0 0 24 24" className="w-4 h-4">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        <span className="text-sm font-black text-[#1C1C1C]">Google Reviews</span>
      </div>
      <div className="flex items-center justify-center gap-2 mb-1">
        <span className="text-2xl font-black text-[#1C1C1C]">4.9</span>
        <div className="flex text-[#ffb800]">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
      </div>
      <span className="text-[10px] text-gray-400 font-bold">9,511 reviews</span>
    </div>
  </div>
);

/* ─── Booking Confirmed Page ─── */
const BookingConfirmed = ({ name, navigate }) => {
  const [copied, setCopied] = useState(false);
  const ref = "GL-LDSTL6";

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pt-[90px]">
      {/* Dark hero */}
      <div className="bg-[#1C1C1C] pt-12 pb-16 text-center px-4">
        <div className="w-16 h-16 rounded-full bg-[#00b67a] flex items-center justify-center mx-auto mb-5">
          <Check className="text-white" size={32} strokeWidth={3} />
        </div>
        <h1 className="text-3xl font-black text-white mb-2">Booking Confirmed!</h1>
        <p className="text-gray-400 text-sm mb-6">Thank you, <span className="text-white font-bold">{name || "a a"}</span>. Your place has been secured.</p>
        <button
          onClick={() => { navigator.clipboard.writeText(ref); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-white/20 transition-all"
        >
          <span className="text-gray-400 text-xs">Booking Reference</span>
          <span className="font-black">{ref}</span>
          <Copy size={14} className={copied ? "text-[#00b67a]" : "text-gray-400"} />
        </button>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Left col */}
          <div className="flex-1 space-y-6">
            {/* Order Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#F15A24] px-5 py-3">
                <span className="text-white font-black text-[13px]">Order Details</span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#1C1C1C] rounded-lg flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-[13px] font-black text-[#1C1C1C]">Security Guard Training</p>
                      <p className="text-[11px] text-gray-400">Flexi+ Package</p>
                    </div>
                  </div>
                  <span className="text-[14px] font-black text-[#1C1C1C]">£289.98</span>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="flex items-center gap-3 text-[12px] text-gray-500"><Calendar size={14} className="text-gray-400" /> <span>Course Date: <b className="text-[#1C1C1C]">Friday 3rd Apr 2026</b></span></div>
                <div className="flex items-center gap-3 text-[12px] text-gray-500"><Mail size={14} className="text-gray-400" /> <span>Confirmation sent to: <b className="text-[#F15A24]">a@gmail.com</b></span></div>
                <div className="flex items-center gap-3 text-[12px] text-[#00b67a] font-bold"><Check size={14} /> EasyApply™ included — we'll handle your licence application</div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-black text-[#1C1C1C] mb-6">What Happens Next</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Check Your Email", badge: "Within 5 minutes", badgeColor: "bg-gray-100 text-gray-600", desc: "A confirmation email with your booking details, course materials access link, and venue information has been sent to your inbox." },
                  { icon: Smartphone, label: "Download the GuardPass App", badge: "Available Now", badgeColor: "bg-[#E8F5E9] text-[#00b67a]", desc: "Access your eLearning materials, mock exams, and revision content immediately through our 5-star rated app." },
                  { icon: BookOpen, label: "Attend Your Course", badge: "Friday 3rd Apr 2026", badgeColor: "bg-[#FFF5F1] text-[#F15A24]", desc: "Arrive at the venue on your course date with valid photo ID. Our instructor will guide you through everything." },
                  { icon: Award, label: "Get Your Results & Licence", badge: "1 working day", badgeColor: "bg-gray-100 text-gray-600", desc: "Results available within 1 working day. Our team will handle your licence application." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-[#1C1C1C]" />
                    </div>
                    <div>
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <span className="text-[14px] font-black text-[#1C1C1C]">{item.label}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.badgeColor}`}>{item.badge}</span>
                      </div>
                      <p className="text-[12px] text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 border-2 border-gray-200 text-[#1C1C1C] px-6 py-3 rounded-xl font-black text-sm hover:border-gray-300 transition-all">
                <Download size={16} /> Download Receipt
              </button>
              <button onClick={() => navigate("/courses")} className="flex items-center justify-center gap-2 bg-[#F15A24] text-white px-6 py-3 rounded-xl font-black text-sm hover:brightness-110 transition-all">
                Browse More Courses <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right col */}
          <div className="w-full lg:w-[270px] space-y-4 lg:sticky lg:top-[100px]">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-[13px] font-black text-[#1C1C1C] mb-4">Quick Links</h3>
              <div className="space-y-3">
                {[{ icon: User, label: "Student Portal" }, { icon: CheckCircle, label: "FAQs" }, { icon: Mail, label: "Contact Us" }].map((item, i) => (
                  <button key={i} className="flex items-center gap-3 text-[13px] text-[#F15A24] font-bold hover:underline w-full">
                    <item.icon size={15} className="text-[#F15A24]" /> {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-xl p-5">
              <p className="text-white font-black text-sm mb-1">Need Help?</p>
              <p className="text-gray-400 text-[11px] mb-4">Our team is here to assist you with any questions about your booking.</p>
              <button className="w-full bg-[#F15A24] text-white px-4 py-2.5 rounded-lg font-black text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                <Phone size={14} className="fill-current" /> Call 0204 572 5828
              </button>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
              <p className="text-[10px] text-gray-400 mb-2">Trusted by 400,000+ students</p>
              <div className="flex justify-center items-center gap-1 mb-1">
                <span className="text-xs font-black">Excellent</span>
                <div className="flex">{[...Array(5)].map((_, i) => <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center"><span className="text-white text-[8px]">★</span></div>)}</div>
              </div>
              <p className="text-[10px] text-gray-400">9,511 reviews on Trustpilot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1C1C1C] py-4 mt-8">
        <p className="text-center text-[11px] text-gray-500">Get Licensed is a registered trademark of Get Licensed Limited. Get Licensed is a training &amp; staffing platform — we help people book training courses with approved providers and help them find work.</p>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════ */
/*                  MAIN CHECKOUT COMPONENT                */
/* ═══════════════════════════════════════════════════════ */
const CourseCheckout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 12);

  // Form state
  const [details, setDetails] = useState({ firstName: "", lastName: "", email: "", mobile: "", dob: "" });
  const [billing, setBilling] = useState({ postcode: "", addr1: "", addr2: "", city: "" });
  const [easyApply, setEasyApply] = useState("get"); // "get" | "self"
  const [boltOns, setBoltOns] = useState({ fire: false, leadership: false });
  const [payment, setPayment] = useState("card");
  const [agree1, setAgree1] = useState(true);
  const [agree2, setAgree2] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => { setIsLoading(false); window.scrollTo(0, 0); }, 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isLoading || isConfirmed) return;
    const id = setInterval(() => setTimeLeft(p => p > 0 ? p - 1 : 0), 1000);
    return () => clearInterval(id);
  }, [isLoading, isConfirmed]);

  const fmt = s => `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  /* ── Skeleton ── */
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F4F4F4] pt-[100px] font-sans">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-8">
          <div className="h-5 bg-gray-200 rounded w-36 mb-6 animate-pulse" />
          <div className="h-8 bg-gray-200 rounded w-56 mb-2 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-72 mb-10 animate-pulse" />
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="h-5 bg-gray-200 rounded w-32 mb-6 animate-pulse" />
                <div className="flex gap-4 mb-3">
                  <div className="h-12 bg-gray-100 rounded flex-1 animate-pulse" />
                  <div className="h-12 bg-gray-100 rounded flex-1 animate-pulse" />
                </div>
                <div className="h-12 bg-gray-100 rounded w-full mb-3 animate-pulse" />
                <div className="h-12 bg-gray-100 rounded w-full mb-3 animate-pulse" />
                <div className="h-12 bg-gray-100 rounded w-full mb-6 animate-pulse" />
                <div className="h-12 bg-gray-200 rounded w-40 animate-pulse" />
              </div>
              {[2, 3, 4, 5].map(i => (
                <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                  <div className="h-4 bg-gray-100 rounded w-40 animate-pulse" />
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[340px] space-y-4">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="h-10 bg-gray-200 w-full animate-pulse" />
                <div className="p-5 space-y-3">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded bg-gray-100 shrink-0 animate-pulse" />
                    <div className="flex-1 space-y-2"><div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse" /><div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse" /></div>
                    <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
                  </div>
                  {[1, 2, 3, 4].map(i => (<div key={i} className="flex justify-between items-center"><div className="h-3 bg-gray-100 rounded w-2/3 animate-pulse" /><div className="h-3 bg-gray-100 rounded w-14 animate-pulse" /></div>))}
                  <div className="h-px bg-gray-100 my-2" />
                  <div className="flex justify-between"><div className="h-4 bg-gray-200 rounded w-24 animate-pulse" /><div className="h-4 bg-gray-200 rounded w-20 animate-pulse" /></div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-3">
                <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
                {[1, 2, 3].map(i => <div key={i} className="h-3 bg-gray-100 rounded animate-pulse" />)}
              </div>
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm space-y-3">
                <div className="h-3 bg-gray-200 rounded w-40 animate-pulse" />
                {[1, 2].map(i => <div key={i} className="h-3 bg-gray-100 rounded animate-pulse" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isConfirmed) return <BookingConfirmed name={`${details.firstName} ${details.lastName}`} navigate={navigate} />;

  /* ── Completed step header ── */
  const CompletedStep = ({ stepNum, title, summary, onEdit }) => (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <StepCheck />
        <div>
          <p className="text-[14px] font-black text-[#1C1C1C]">{title}</p>
          {summary.map((l, i) => <p key={i} className="text-[13px] text-gray-500">{l}</p>)}
        </div>
      </div>
      <button onClick={onEdit} className="flex items-center gap-1.5 text-[#F15A24] text-[12px] font-bold hover:underline shrink-0">
        <Edit2 size={13} /> Edit
      </button>
    </div>
  );

  /* ── Collapsed step header ── */
  const CollapsedStep = ({ stepNum, title, badge }) => (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
      <StepNumber n={stepNum} active={false} />
      <span className="text-[14px] font-bold text-gray-400">{title}</span>
      {badge && <span className="inline-block px-2 py-0.5 bg-[#00b67a] text-white text-[9px] font-black uppercase tracking-widest rounded">{badge}</span>}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pt-[90px]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-[#1C1C1C] transition-colors text-sm font-bold mb-4">
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
                <Clock size={14} /> {fmt(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* ══ LEFT COLUMN ══ */}
          <div className="flex-1 space-y-3">

            {/* ── Step 1: Your Details ── */}
            {activeStep > 1 ? (
              <CompletedStep stepNum={1} title="Your Details" onEdit={() => setActiveStep(1)}
                summary={[`${details.firstName} ${details.lastName}`, details.email, details.mobile, details.dob]} />
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={1} active />
                  <span className="text-[14px] font-black text-[#1C1C1C]">Your Details</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex gap-4">
                    <FieldInput label="First name" placeholder="First name" value={details.firstName} onChange={v => setDetails(d => ({ ...d, firstName: v }))} icon={User} />
                    <FieldInput label="Last name" placeholder="Last name" value={details.lastName} onChange={v => setDetails(d => ({ ...d, lastName: v }))} icon={User} />
                  </div>
                  <FieldInput label="Email address" placeholder="Email address" type="email" value={details.email} onChange={v => setDetails(d => ({ ...d, email: v }))} icon={Mail} />
                  <FieldInput label="Mobile number" placeholder="Mobile number" type="tel" value={details.mobile} onChange={v => setDetails(d => ({ ...d, mobile: v }))} icon={Phone} />
                  <FieldInput label="Date of birth" placeholder="DD/MM/YYYY" value={details.dob} onChange={v => setDetails(d => ({ ...d, dob: v }))} icon={Calendar} />
                  <SaveBtn onClick={() => setActiveStep(2)} />
                </div>
              </div>
            )}

            {/* ── Step 2: Billing Address ── */}
            {activeStep > 2 ? (
              <CompletedStep stepNum={2} title="Billing Address" onEdit={() => setActiveStep(2)}
                summary={[billing.addr1, billing.addr2, billing.city].filter(Boolean)} />
            ) : activeStep === 2 ? (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={2} active />
                  <span className="text-[14px] font-black text-[#1C1C1C]">Billing Address</span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-[13px] text-gray-500">Enter your postcode and select your address.</p>
                  <FieldInput label="Post code" placeholder="Post code" value={billing.postcode} onChange={v => setBilling(b => ({ ...b, postcode: v }))} icon={MapPin} />
                  <FieldInput label="Address line 1" placeholder="Address line 1" value={billing.addr1} onChange={v => setBilling(b => ({ ...b, addr1: v }))} />
                  <FieldInput label="Address line 2" placeholder="Address line 2" value={billing.addr2} onChange={v => setBilling(b => ({ ...b, addr2: v }))} />
                  <FieldInput label="City / Town" placeholder="City / Town" value={billing.city} onChange={v => setBilling(b => ({ ...b, city: v }))} icon={MapPin} />
                  <SaveBtn onClick={() => setActiveStep(3)} />
                </div>
              </div>
            ) : (
              <CollapsedStep stepNum={2} title="Billing Address" />
            )}

            {/* ── Step 3: EasyApply ── */}
            {activeStep > 3 ? (
              <CompletedStep stepNum={3} title="Zero-Hassle Application Service - EasyApply™" onEdit={() => setActiveStep(3)}
                summary={[easyApply === "get" ? "Included EasyApply™" : "I will apply myself"]} />
            ) : activeStep === 3 ? (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center flex-wrap gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={3} active />
                  <span className="text-[14px] font-black text-[#1C1C1C]">Zero-Hassle Application Service - EasyApply™</span>
                  <span className="inline-block px-2 py-0.5 bg-[#00b67a] text-white text-[9px] font-black uppercase tracking-widest rounded">Recommended</span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-[13px] text-gray-500">The hassle-free way to get your licence. We'll prepare your application and arrange all the requirements including your DBS (criminality) check.</p>

                  {/* Get EasyApply option */}
                  <div
                    onClick={() => setEasyApply("get")}
                    className={`rounded-xl border-2 p-4 cursor-pointer transition-all ${easyApply === "get" ? "border-blue-500 bg-blue-50/30" : "border-gray-200 hover:border-gray-300"}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${easyApply === "get" ? "border-blue-500" : "border-gray-300"}`}>
                          {easyApply === "get" && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                        </div>
                        <span className="text-[14px] font-black text-[#1C1C1C]">Get EasyApply</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-black text-[#1C1C1C]">£149.99</span>
                        {easyApply === "get" && <Check size={16} className="text-[#00b67a]" />}
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {["Includes all fees including £37 licence fee and £36 DBS fees","100% money-back guarantee (No licence - No fee promise)","A dedicated licence manager will prepare your application","Avoids delays in processing time","Complete peace of mind - we take all the risks"].map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-[12px] text-gray-600"><Check size={12} className="text-[#00b67a] shrink-0" /> {f}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Self apply option */}
                  <div
                    onClick={() => setEasyApply("self")}
                    className={`rounded-xl border-2 p-4 cursor-pointer transition-all ${easyApply === "self" ? "border-gray-400" : "border-gray-200 hover:border-gray-300"}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${easyApply === "self" ? "border-gray-500" : "border-gray-300"}`}>
                        {easyApply === "self" && <div className="w-2.5 h-2.5 rounded-full bg-gray-500" />}
                      </div>
                      <span className="text-[14px] font-black text-[#1C1C1C]">I will apply myself</span>
                    </div>
                    <ul className="space-y-1.5">
                      {["You take all the risk of the application","You will have to arrange a valid DBS check","You will need a solicitor or a person of standing in the community to endorse your photographs","Your application is not checked by an expert before submission"].map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-[12px] text-gray-500"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> {f}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="flex items-center gap-2 text-[#F15A24] text-[12px] font-bold hover:underline">
                    <span className="text-base">💬</span> Not Sure? <span className="underline">Chat with us</span>
                  </button>
                  <SaveBtn onClick={() => setActiveStep(4)} />
                </div>
              </div>
            ) : (
              <CollapsedStep stepNum={3} title="Zero-Hassle Application Service - EasyApply™" badge="Recommended" />
            )}

            {/* ── Step 4: Bolt-On ── */}
            {activeStep > 4 ? (
              <CompletedStep stepNum={4} title="Bolt-On" onEdit={() => setActiveStep(4)}
                summary={[Object.values(boltOns).some(Boolean) ? Object.entries(boltOns).filter(([, v]) => v).map(([k]) => k === "fire" ? "Fire Marshal Course" : "Leadership Course").join(", ") : "No bolt-ons selected"]} />
            ) : activeStep === 4 ? (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={4} active />
                  <span className="text-[14px] font-black text-[#1C1C1C]">Bolt-On</span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-[13px] text-gray-500">Popular add-ons frequently bought together with your course.</p>
                  {[
                    { key: "fire", recommended: true, title: "Fire Marshal Course", desc: "Boost your safety credentials with our online CPD-approved Fire Marshal course—add it now for comprehensive fire safety training.", price: "£19" },
                    { key: "leadership", recommended: false, title: "Leadership Course", desc: "Enhance your CV and set yourself up to be an outstanding leader with this CPD-accredited course.", price: "£19" },
                  ].map(addon => (
                    <div key={addon.key} className="rounded-xl border border-gray-200 p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                          <Award size={16} className="text-[#1C1C1C]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          {addon.recommended && (
                            <div className="flex items-center gap-1.5 mb-1">
                              <Check size={11} className="text-[#F15A24]" />
                              <span className="text-[10px] text-[#F15A24] font-black uppercase tracking-wider">We recommend</span>
                            </div>
                          )}
                          <p className="text-[13px] font-black text-[#1C1C1C]">{addon.title}</p>
                          <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{addon.desc}</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[13px] font-black text-[#1C1C1C]">{addon.price}</span>
                          <input type="checkbox" checked={boltOns[addon.key]} onChange={e => setBoltOns(b => ({ ...b, [addon.key]: e.target.checked }))}
                            className="w-4 h-4 accent-[#F15A24] cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  ))}
                  <SaveBtn onClick={() => setActiveStep(5)} label="Continue To Payment" />
                </div>
              </div>
            ) : (
              <CollapsedStep stepNum={4} title="Bolt-On" />
            )}

            {/* ── Step 5: Payment ── */}
            {activeStep === 5 && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={5} active />
                  <span className="text-[14px] font-black text-[#1C1C1C]">Payment</span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-[13px] text-gray-500">Select your payment method.</p>

                  {[
                    {
                      id: "card", label: "Pay with card",
                      badge: (
                        <div className="flex items-center gap-1">
                          <div className="bg-blue-700 text-white text-[8px] font-black px-1.5 py-0.5 rounded">VISA</div>
                          <div className="bg-[#F15A24] w-6 h-4 rounded-full flex items-center justify-center"><div className="bg-red-600 w-2.5 h-2.5 rounded-full -ml-1" /></div>
                          <div className="bg-[#FF6600] text-white text-[8px] font-black px-1.5 py-0.5 rounded">DISC</div>
                        </div>
                      )
                    },
                    { id: "paypal", label: "Pay with PayPal", badge: <div className="bg-[#003087] text-white text-[9px] font-black px-2 py-0.5 rounded">Pay<span className="text-[#009cde]">Pal</span></div> },
                    { id: "instalments", label: "Pay in 3 monthly interest free instalments", badge: null },
                    { id: "klarna", label: "Pay in 30 days or in 3 interest free instalments. (Includes a soft credit check)", badge: <div className="bg-[#FFB3C7] text-[#1C1C1C] text-[9px] font-black px-2 py-1 rounded">klarna</div> },
                  ].map(opt => (
                    <div
                      key={opt.id}
                      onClick={() => setPayment(opt.id)}
                      className={`rounded-xl border-2 px-4 py-3.5 cursor-pointer transition-all flex items-center justify-between gap-3 ${payment === opt.id ? "border-blue-500 bg-blue-50/20" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${payment === opt.id ? "border-blue-500" : "border-gray-300"}`}>
                          {payment === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />}
                        </div>
                        <span className="text-[13px] font-bold text-[#1C1C1C]">{opt.label}</span>
                      </div>
                      {opt.badge}
                    </div>
                  ))}

                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={agree1} onChange={e => setAgree1(e.target.checked)} className="mt-0.5 w-4 h-4 accent-[#F15A24]" />
                      <span className="text-[12px] text-gray-600">Send me the latest job opportunities, industry changes and course advice</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={agree2} onChange={e => setAgree2(e.target.checked)} className="mt-0.5 w-4 h-4 accent-[#F15A24]" />
                      <span className="text-[12px] text-gray-600">I agree to the Get Licensed <span className="text-[#F15A24] underline cursor-pointer">Privacy Policy</span> and <span className="text-[#F15A24] underline cursor-pointer">Terms of service</span></span>
                    </label>
                  </div>

                  <button
                    onClick={() => { window.scrollTo(0, 0); setIsConfirmed(true); }}
                    className="w-full py-4 bg-[#F15A24] text-white rounded-xl font-black text-base hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#F15A24]/20 mt-2"
                  >
                    Submit Payment
                  </button>
                </div>
              </div>
            )}

            {activeStep < 5 && <CollapsedStep stepNum={5} title="Payment" />}
          </div>

          {/* ══ RIGHT SIDEBAR ══ */}
          <RightSidebar />
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#F0F0F0] py-3 mt-8">
        <p className="text-center text-[11px] text-gray-500 px-4">Get Licensed is a registered trademark of Get Licensed Limited. Get Licensed is a training &amp; staffing platform — we help people book training courses with approved providers and help them find work.</p>
      </div>
    </div>
  );
};

export default CourseCheckout;
