import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Home, LayoutDashboard } from "lucide-react";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const bookingRef = searchParams.get("bookingRef");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const container = document.getElementById("main-scroll-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50/50 px-4 py-12 dark:bg-gray-900">
      <div className="flex max-w-md flex-col items-center text-center">
        <CheckCircle2 size={64} className="text-emerald-500" strokeWidth={1.5} />

        <h1 className="mt-6 text-3xl font-black tracking-tight text-slate-800 dark:text-white">
          Payment Successful
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Thank you — we have received your rescheduling fee. Your course dates
          are being updated now, and a confirmation email with your new dates is
          on its way.
        </p>

        {bookingRef && (
          <p className="mt-4 font-mono text-sm text-slate-400 dark:text-slate-500">
            Booking reference: {bookingRef}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-[#F15A24] px-5 py-2.5 text-sm font-medium text-white shadow-xs transition hover:bg-[#d84e1b] focus:outline-none focus:ring-2 focus:ring-[#F15A24] focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            <LayoutDashboard size={16} />
            View My Bookings
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <Home size={16} />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
