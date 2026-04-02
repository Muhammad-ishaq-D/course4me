import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle2, ChevronDown, ChevronUp, Star, Phone, ArrowLeft, ShieldCheck, Check, X as XIcon, Users } from "lucide-react";
import { courses } from "../data/courseData";

const CoursePackages = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const courseParam = searchParams.get("course_name");

  const [isLoading, setIsLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  // Derive course details dynamically, fallback to door-supervisor
  const courseId = courseParam ? courseParam.replace(/\+/g, '-') : "door-supervisor";
  const course = courses[courseId] || courses["door-supervisor"];
  const baseTitle = course.title;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const features = {
    saver: [
      "Online self-study top-up training",
      "Action Counter Terrorism (ACT) online course e-Learning"
    ],
    flexi: [
      "Everything included in Saver",
      "Unlimited Free Retakes (worth £49 per retake) - Popular",
      "Free Rescheduling (up to 3 times)",
      "Free Name Change (Up to 72 hours before the start of the course)",
      "Full refund up to 72 Hrs before Course",
      "14 days access to highly rated mock exam App (completed online prior to attending course) - worth £14.99",
      "Zero Risk Guarantee - If you fail, fail, fail the exam, we will refund you 100% of the course fee - worth £25"
    ],
    premium: [
      "Everything included in Flexi Plus Package",
      "Same day results - We will fast track your Results (Instead of waiting for up to 14 days, you will receive your Results the same day) - worth £49"
    ]
  };

  const faqs = [
    { question: "What is the best package for me?", answer: "This depends on your learning needs. Flexi+ offers peace of mind with free retakes and guarantees." },
    { question: "Can I pay for the course in instalments?", answer: "Yes, we offer flexible payment plans allowing you to split the cost without hidden charges." },
    { question: "Can I upgrade my course package after I book?", answer: "Yes, you can upgrade your package by contacting our customer support team." },
    { question: "Can I buy the workbook standalone later?", answer: "Yes, the workbook is available for separate purchase." },
    { question: "Will the mock exams ensure I definitely pass my exams?", answer: "While no resource guarantees a pass, our mock exams heavily boost the likelihood of passing the first time." },
    { question: "What happens after I book my course?", answer: "You will receive an immediate confirmation email containing instructions and access links to your materials." },
    { question: "Can I fail if I buy the Zero Risk Guarantee?", answer: "You can fail, but the guarantee minimizes your financial risk by giving you peace of mind and refunds per terms." }
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
              <div key={card} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 min-h-[400px]">
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

  return (
    <div className="font-sans min-h-screen bg-[#F8FAFC]">
      {/* Dark Header */}
      <div className="bg-[#1C1C1C] pt-[90px] pb-[160px] relative px-4 md:px-0">
        <div className="max-w-[1200px] mx-auto pt-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-6"
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-[700px]">
              <h1 className="text-3xl md:text-[42px] leading-tight font-extrabold text-white mb-6">
                The #1 Choice for {baseTitle} in the UK
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#1C1C1C] bg-[#00b67a] flex items-center justify-center text-white"><Star size={16} /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#1C1C1C] bg-[#7344ff] flex items-center justify-center text-white"><Users size={16} /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#1C1C1C] bg-white text-[#F15A24] flex items-center justify-center font-black text-xs">95%</div>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Excellent 4.9/5</p>
                  <p className="text-gray-400 text-xs">Over 35,000+ Reviews</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 flex items-start gap-4">
              <div>
                <p className="text-[#1C1C1C] font-extrabold text-sm mb-1">Zero Risk With<br />Training Guarantee</p>
                <p className="text-xs text-gray-500 font-bold hover:underline cursor-pointer">More details</p>
              </div>
              <ShieldCheck className="text-[#00b67a]" size={36} />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 -mt-[120px] relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Saver Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col overflow-hidden">
            <div className="p-8 pb-6 flex-1">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded mb-4">Standard</span>
              <h2 className="text-2xl font-black text-[#1C1C1C] mb-1">Saver</h2>
              <p className="text-xs text-gray-400 font-medium mb-6">If you strictly need to complete the course</p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#1C1C1C]">£99.99</span>
                <span className="text-xs text-gray-400 font-medium ml-1">/ Inc VAT</span>
              </div>

              <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-4 flex gap-3 items-start mb-8 text-[13px] text-gray-600">
                <CheckCircle2 className="text-gray-400 shrink-0 mt-0.5" size={16} />
                <p>Only permit changing booking dates to <b>within 2 weeks' notice before the course start date.</b></p>
              </div>

              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-4">What's included</p>
              <ul className="space-y-4">
                {features.saver.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-[#00b67a] shrink-0 mt-0.5" size={16} />
                    <span className="text-[13px] text-gray-600 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-0 mt-auto border-t border-gray-50/50">
              <div className="bg-red-50 text-red-600 rounded-xl p-4 text-[12px] leading-relaxed mb-6 border border-red-100 font-medium space-y-2">
                <div className="flex gap-2 items-start"><XIcon size={14} className="shrink-0 mt-0.5" /> <p>You will have to <b className="font-bold border-b border-red-600">pay up to £49</b> for unlimited resits if you fail the exam</p></div>
                <div className="flex gap-2 items-start"><XIcon size={14} className="shrink-0 mt-0.5" /> <p>You are missing out on the <b className="font-bold border-b border-red-600">Free Name Change Guarantee and Zero Risk Refund Guarantee</b></p></div>
              </div>
              <button 
                onClick={() => navigate('/booking/checkout?e_q=TmpNeU5UZz0%3D&ex_e_q=TmpBM01EVT0%3D&plan_id=TVRFPQ%3D%3D&from=TDJKdmIydHBibWN2Y0dGamEyRm5aWE09&active_step=CheckoutStep1')}
                className="w-full py-4 rounded-xl border-2 border-gray-200 text-[#1C1C1C] font-black text-sm hover:border-[#F15A24] hover:text-[#F15A24] active:scale-95 transition-all">
                Select Saver
              </button>
            </div>
          </div>

          {/* Flexi+ Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border-[3px] border-[#F15A24] flex flex-col overflow-hidden relative transform md:-translate-y-4">
            <div className="absolute top-0 w-full bg-[#F15A24] text-white text-[10px] font-black uppercase tracking-widest py-1.5 text-center">
              Our Most Popular Plan
            </div>
            <div className="p-8 pb-6 flex-1 mt-6">
              <span className="inline-block px-3 py-1 bg-[#FFF5F1] text-[#F15A24] text-[10px] font-black uppercase tracking-widest rounded mb-4">Recommended</span>
              <h2 className="text-2xl font-black text-[#1C1C1C] mb-1">Flexi+</h2>
              <p className="text-xs text-gray-400 font-medium mb-6">Guaranteed pass or your money back</p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#1C1C1C]">£139.99</span>
                <span className="text-xs text-gray-400 font-medium ml-1">/ Inc VAT</span>
              </div>

              <div className="bg-[#FFF5F1] border border-[#F15A24]/20 rounded-xl p-4 flex gap-3 items-start mb-8 text-[13px] text-[#F15A24] font-medium leading-relaxed">
                <CheckCircle2 className="shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="font-bold mb-1">Passing guaranteed or your money back. 100% of course fee completely refunded</p>
                  <p className="text-[11px] opacity-80">(After attending, studying & failing the exam up to 3 times)</p>
                </div>
              </div>

              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-4">What's included</p>
              <ul className="space-y-4">
                {features.flexi.map((feature, idx) => {
                  // Highlighting specific words for exact match
                  const isZeroRisk = feature.includes("Zero Risk Guarantee");
                  const isRetakes = feature.includes("Unlimited Free Retakes");

                  return (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-[#00b67a] shrink-0 mt-0.5" size={16} />
                      <span className="text-[13px] text-gray-600 leading-snug">
                        {isZeroRisk ? (
                          <><b className="text-[#F15A24] underline">Zero Risk Guarantee</b> - If you fail, fail, pass... we will refund you 100% of the course fee - <span className="italic text-gray-400">worth £25</span></>
                        ) : isRetakes ? (
                          <>Unlimited Free Retakes <span className="italic text-gray-400">(worth £49 per retake)</span> - <span className="bg-[#FFF5F1] text-[#F15A24] text-[9px] font-black uppercase px-1.5 py-0.5 rounded">Popular</span></>
                        ) : (
                          feature
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="p-8 pt-0 mt-auto border-t border-gray-50/50">
              <button 
                onClick={() => navigate('/booking/checkout?e_q=TmpNeU5UZz0%3D&ex_e_q=TmpBM01EVT0%3D&plan_id=TVRFPQ%3D%3D&from=TDJKdmIydHBibWN2Y0dGamEyRm5aWE09&active_step=CheckoutStep1')}
                className="w-full py-4 rounded-xl bg-[#F15A24] text-white font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#F15A24]/20">
                Select Flexi+
              </button>
            </div>
          </div>

          {/* Premium Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 border border-gray-100 flex flex-col overflow-hidden">
            <div className="p-8 pb-6 flex-1">
              <span className="inline-block px-3 py-1 bg-purple-50 text-[#7344ff] text-[10px] font-black uppercase tracking-widest rounded mb-4">Best Service</span>
              <h2 className="text-2xl font-black text-[#1C1C1C] mb-1">Premium</h2>
              <p className="text-xs text-gray-400 font-medium mb-6">VIP treatment & exclusive privileges</p>

              <div className="mb-6">
                <span className="text-3xl font-black text-[#1C1C1C]">£259.99</span>
                <span className="text-xs text-gray-400 font-medium ml-1">/ Inc VAT</span>
              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 flex gap-3 items-start mb-8 text-[13px] text-gray-600">
                <CheckCircle2 className="text-[#7344ff] shrink-0 mt-0.5" size={16} />
                <p>Same day results - We will fast track your results! <br /><span className="text-[11px] text-gray-400">(Instead of waiting for up to 14 days)</span></p>
              </div>

              <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-4">What's included</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="text-[#00b67a] shrink-0 mt-0.5" size={16} />
                  <span className="text-[13px] text-gray-600 font-bold">Everything included in Flexi+</span>
                </li>
                {features.premium.slice(1).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-[#00b67a] shrink-0 mt-0.5" size={16} />
                    <span className="text-[13px] text-gray-600 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-0 mt-auto border-t border-gray-50/50">
              <button 
                onClick={() => navigate('/booking/checkout?e_q=TmpNeU5UZz0%3D&ex_e_q=TmpBM01EVT0%3D&plan_id=TVRFPQ%3D%3D&from=TDJKdmIydHBibWN2Y0dGamEyRm5aWE09&active_step=CheckoutStep1')}
                className="w-full py-4 rounded-xl bg-[#7344ff] text-white font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#7344ff]/20">
                Select Premium
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post Packages info grid */}
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 mb-24 hidden md:flex items-center justify-between text-center gap-4">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center mb-3">
            <CheckCircle2 className="text-[#1C1C1C]" size={20} />
          </div>
          <p className="text-xs font-black uppercase tracking-widest text-[#1C1C1C]">Get better shift patterns</p>
          <p className="text-[10px] text-gray-500 mt-1 max-w-[150px]">Door supervisors are needed round the clock.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center mb-3">
            <CheckCircle2 className="text-[#1C1C1C]" size={20} />
          </div>
          <p className="text-xs font-black uppercase tracking-widest text-[#1C1C1C]">Same day results</p>
          <p className="text-[10px] text-gray-500 mt-1 max-w-[150px]">You don't need to wait 14 days, get your results the same day.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center mb-3">
            <CheckCircle2 className="text-[#1C1C1C]" size={20} />
          </div>
          <p className="text-xs font-black uppercase tracking-widest text-[#1C1C1C]">Top-rated instructors</p>
          <p className="text-[10px] text-gray-500 mt-1 max-w-[150px]">Industry-leading trainers verified by student reviews.</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-white rounded-full shadow border border-gray-100 flex items-center justify-center mb-3">
            <CheckCircle2 className="text-[#1C1C1C]" size={20} />
          </div>
          <p className="text-xs font-black uppercase tracking-widest text-[#1C1C1C]">Premium learning tools</p>
          <p className="text-[10px] text-gray-500 mt-1 max-w-[150px]">Access mock exams on mobile to pass the first time.</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16 border-t border-b border-gray-100 mb-16">
        <div className="max-w-[700px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-[#1C1C1C] mb-8">See What Our Customers Say</h2>
          <p className="text-lg text-gray-600 leading-relaxed italic mb-8 font-serif">
            I was very nervous taking this course especially with the exams. But the trainer, Adam, was super friendly and <span className="text-[#F15A24] font-bold">really gave me the confidence I needed.</span> The mock exams on the App and course book <span className="text-[#F15A24] font-bold">helped me pass the first time!</span>
          </p>
          <p className="text-sm font-black text-[#1C1C1C] mb-8 uppercase tracking-widest">- Jy Pall</p>

          <div className="flex justify-center gap-1.5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#1C1C1C]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1.5 mb-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-[10px] font-black uppercase tracking-tighter">Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl font-black text-[#1C1C1C]">4.9</span>
              <div className="flex text-[#ffb800]">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">9,511 reviews</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-[700px] mx-auto px-4 mb-20">
        <h2 className="text-2xl font-black text-[#1C1C1C] text-center mb-8">Got Questions? We Have Answers</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 transition-colors shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between font-bold text-[#1C1C1C] text-[13px] text-left"
              >
                {faq.question}
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-5 text-gray-500 text-[13px] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-[900px] mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">View Compare Summary</span>
            <h2 className="text-2xl font-black text-[#1C1C1C]">Compare All Plans</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[13px] border-collapse min-w-[700px]">
              <thead>
                <tr>
                  <th className="p-4 text-left font-black text-[#1C1C1C] border border-gray-100 w-[40%] bg-gray-50 rounded-tl-xl">Features</th>
                  <th className="p-4 text-center font-black text-[#1C1C1C] border border-gray-100 w-[20%]">Saver</th>
                  <th className="p-4 text-center font-black text-[#1C1C1C] border border-gray-100 w-[20%]">Flexi+</th>
                  <th className="p-4 text-center font-black text-[#1C1C1C] border border-gray-100 w-[20%] rounded-tr-xl">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 text-gray-600 font-bold border border-gray-100">Total Price</td>
                  <td className="p-4 text-center text-[#1C1C1C] font-black border border-gray-100">£99.99</td>
                  <td className="p-4 text-center text-[#F15A24] font-black border border-gray-100">£139.99</td>
                  <td className="p-4 text-center text-[#7344ff] font-black border border-gray-100">£259.99</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="p-4 text-[#F15A24] font-bold border border-gray-100 text-[11px] uppercase tracking-wider">Top features rating summary</td>
                  <td className="p-4 text-center text-gray-400 font-medium text-[11px] border border-gray-100">Meeting Needs</td>
                  <td className="p-4 text-center text-[#F15A24] font-bold text-[11px] border border-gray-100">Outstanding</td>
                  <td className="p-4 text-center text-gray-400 font-medium text-[11px] border border-gray-100">100% Guaranteed</td>
                </tr>
                <tr>
                  <td className="p-4 text-left font-black text-[#1C1C1C] border border-gray-100 bg-gray-50" colSpan={4}>General Features</td>
                </tr>
                {[
                  { name: "Digital course handbook PC/Mac", saver: true, flexi: true, prem: true },
                  { name: "The Premium Guarantee App 📱", saver: true, flexi: true, prem: true },
                  { name: "Unlimited free retakes (worth £49 each)", saver: false, flexi: true, prem: true },
                  { name: "Zero risk guarantee", saver: false, flexi: true, prem: true },
                  { name: "Free reschedules (worth £15) and free name changes (worth £5)", saver: false, flexi: true, prem: true },
                  { name: "Full refund Policy up to 72 hours", saver: false, flexi: true, prem: true },
                  { name: "Passing strategy assessment (an easy and simple step guide to studying in your exam - exclusive)", saver: false, flexi: true, prem: true },
                  { name: "Premium learning material - Presentation, time assessment mock exam marking review - worth £149", saver: false, flexi: true, prem: true },
                  { name: "Job Board Access 💼", saver: false, flexi: false, prem: true },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/30 transition-colors">
                    <td className="p-4 text-gray-600 font-medium border border-gray-100">{row.name}</td>
                    <td className="p-4 text-center border border-gray-100">
                      {row.saver ? <Check className="text-[#00b67a] mx-auto" size={18} /> : <XIcon className="text-red-400 mx-auto" size={14} />}
                    </td>
                    <td className="p-4 text-center border border-gray-100">
                      {row.flexi ? <Check className="text-[#00b67a] mx-auto" size={18} /> : <XIcon className="text-red-400 mx-auto" size={14} />}
                    </td>
                    <td className="p-4 text-center border border-gray-100">
                      {row.prem ? <Check className="text-[#00b67a] mx-auto" size={18} /> : <XIcon className="text-red-400 mx-auto" size={14} />}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-4 border border-gray-100 rounded-bl-xl bg-gray-50"></td>
                  <td className="p-4 text-center border border-gray-100 bg-gray-50">
                    <button onClick={() => navigate('/booking/checkout?e_q=TmpNeU5UZz0%3D&ex_e_q=TmpBM01EVT0%3D&plan_id=TVRFPQ%3D%3D&from=TDJKdmIydHBibWN2Y0dGamEyRm5aWE09&active_step=CheckoutStep1')} className="px-4 py-2 bg-white text-[#1C1C1C] border border-gray-200 rounded font-black text-xs hover:border-[#F15A24] transition-colors">Select</button>
                  </td>
                  <td className="p-4 text-center border border-gray-100 bg-[#FFF5F1]">
                    <button onClick={() => navigate('/booking/checkout?e_q=TmpNeU5UZz0%3D&ex_e_q=TmpBM01EVT0%3D&plan_id=TVRFPQ%3D%3D&from=TDJKdmIydHBibWN2Y0dGamEyRm5aWE09&active_step=CheckoutStep1')} className="px-4 py-2 bg-[#F15A24] text-white rounded font-black text-xs hover:brightness-110 transition-colors">Select</button>
                  </td>
                  <td className="p-4 text-center border border-gray-100 bg-purple-50 rounded-br-xl">
                    <button onClick={() => navigate('/booking/checkout?e_q=TmpNeU5UZz0%3D&ex_e_q=TmpBM01EVT0%3D&plan_id=TVRFPQ%3D%3D&from=TDJKdmIydHBibWN2Y0dGamEyRm5aWE09&active_step=CheckoutStep1')} className="px-4 py-2 bg-[#7344ff] text-white rounded font-black text-xs hover:brightness-110 transition-colors">Select</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="bg-[#1C1C1C] py-8 border-t border-white/10 relative z-20">
        <div className="max-w-[700px] mx-auto px-4 text-center flex flex-col items-center">
          <h2 className="text-2xl font-black text-white mb-2">Still unsure? Talk to our experts</h2>
          <p className="text-[12px] text-gray-400 font-medium mb-6">Our teams are available Monday-Friday 9am to 6pm, helping you choose the right course.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="bg-[#F15A24] text-white px-8 py-3 rounded-xl font-black text-sm flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all w-full sm:w-auto">
              <Phone size={16} className="fill-current" /> Call 0204 572 5828
            </button>
            <button className="bg-white text-[#1C1C1C] px-8 py-3 rounded-xl font-black text-sm hover:bg-gray-100 active:scale-95 transition-all w-full sm:w-auto">
              Chat with us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePackages;
