import { useEffect, useState } from "react";
import { Cookie, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-5 z-9999 w-[calc(100%-32px)] sm:w-90 md:w-112.5">
      <div className="relative overflow-hidden rounded-3xl bg-white border border-orange-400 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        {/* ORANGE GLOW */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#F15A24]/10 blur-[50px] rounded-full" />

        <div className="relative p-5">
          {/* HEADER */}
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-[#FFF4EE] flex items-center justify-center shrink-0">
              <Cookie size={20} className="text-[#F15A24]" />
            </div>

            <div className="flex-1">
              <h3 className="text-[16px] font-bold text-[#111827]">
                Cookie Preferences
              </h3>

              <p className="mt-1 text-xs md:text-sm text-gray-600 leading-6">
                We use cookies to improve your experience and analyze website
                performance.
              </p>

              <NavLink
                to="/cookie-policy"
                className="inline-block cursor-pointer mt-2 text-xs md:text-sm font-semibold text-[#F15A24] hover:text-[#df4c18]"
              >
                Learn More
              </NavLink>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-2 mt-2 md:mt-5">
            <button
              onClick={rejectCookies}
              className="flex-1 px-4 py-2 rounded-xl cursor-pointer border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
            >
              Reject
            </button>

            <button
              onClick={acceptCookies}
              className="flex-1 px-4 py-2 rounded-xl cursor-pointer bg-[#F15A24] hover:bg-[#df4c18] text-white font-medium shadow-[0_8px_20px_rgba(241,90,36,0.25)] transition"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
