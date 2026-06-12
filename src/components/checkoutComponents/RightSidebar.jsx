import React from "react";
import { Check, ShieldCheck, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EASY_APPLY_FEE = 149.99;

const RightSidebar = ({
  courseName,
  plan,
  price,
  easyApply,
  date,
  courseId,
  scheduleId,
}) => {
  const navigate = useNavigate();
  const coursePrice = price || 0;
  const total = coursePrice + (easyApply ? EASY_APPLY_FEE : 0);

  return (
    <div className="w-full lg:w-[330px] space-y-4 lg:sticky lg:top-[100px]">
      {/* Order Summary */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-[#F15A24] px-5 py-3">
          <span className="text-white text-lg font-black">Order Summary</span>
        </div>
        <div className="p-5 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F15A24] flex items-center justify-center shrink-0">
              <ShieldCheck className="text-white" size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-black text-[#1C1C1C] leading-snug">
                {courseName || "Course"} – {plan || "Flexi+"}
              </p>
              {date && (
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  {date}
                </p>
              )}
            </div>
            <div className="text-right shrink-0">
              {courseId && scheduleId && (
                <p
                  onClick={() =>
                    navigate(
                      `/booking/packages?courseId=${courseId}&scheduleId=${scheduleId}`,
                    )
                  }
                  className="text-xs text-[#F15A24] font-bold cursor-pointer hover:underline"
                >
                  Change package
                </p>
              )}
              <p className="text-base font-black text-[#F15A24]">
                £{coursePrice.toFixed(2)}
              </p>
            </div>
          </div>

          {easyApply && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check size={13} className="text-[#F15A24]" />
                <span className="text-sm text-[#1C1C1C] font-bold">
                  EasyApply™
                </span>
              </div>
              <span className="text-[13px] font-black text-[#1C1C1C]">
                £{EASY_APPLY_FEE.toFixed(2)}
              </span>
            </div>
          )}

          <div className="h-px bg-gray-100" />
          <button className="text-[#F15A24] text-sm font-bold hover:underline">
            Apply promo or referral code
          </button>
          <div className="h-px bg-gray-100" />
          <div className="flex items-start justify-between">
            <span className="text-[14px] font-black text-[#1C1C1C]">
              Order Total
            </span>
            <div className="text-right">
              <p className="text-xl font-black text-[#F15A24]">
                £{total.toFixed(2)}
              </p>
              <p className="text-xs text-gray-400">(*Price Inclusive of VAT)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stars */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-3">
          Consistently rated 5-stars
        </p>
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-sm font-black text-[#1C1C1C]">Excellent</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 bg-[#F15A24] flex items-center justify-center"
              >
                <span className="text-white text-xs">★</span>
              </div>
            ))}
          </div>
          {/* <span className="text-sm font-black text-[#1C1C1C]">Trustpilot</span> */}
        </div>
        <div className="flex items-center justify-center gap-2 mb-1">
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-sm font-black text-[#1C1C1C]">
            Google Reviews
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-2xl font-black text-[#1C1C1C]">4.9</span>
          <div className="flex text-[#F15A24]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-400 font-bold">9,511 reviews</span>
      </div>
    </div>
  );
};

export default RightSidebar;
