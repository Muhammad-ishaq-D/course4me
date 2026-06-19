import React, { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  ArrowRight,
  Download,
  Loader2,
  Calendar,
  Copy,
  Check,
  Mail,
  Phone,
  Award,
  BookOpen,
  Smartphone,
  User,
  CheckCircle,
  Star,
} from "lucide-react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const BookingConfirmed = ({
  name,
  email,
  mobile,
  billing,
  courseName,
  plan,
  price,
  date,
  easyApply,
  bookingRef,
  navigate,
}) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const receiptRef = useRef(null);
  const ref = bookingRef || "GL-PENDING";
  const EASY_APPLY_FEE = 149.99;
  const courseOnlyPrice = easyApply
    ? (price || 0) - EASY_APPLY_FEE
    : price || 0;

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const container = document.getElementById("main-scroll-container");
      if (container) {
        container.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    scrollToTop();
    setTimeout(scrollToTop, 100);
    setTimeout(scrollToTop, 500);
  }, []);

  const handleDownloadReceipt = async () => {
    if (!receiptRef.current) return;
    try {
      setIsDownloading(true);

      const saveTextReceiptPdf = () => {
        const pdf = new jsPDF("p", "mm", "a4");
        const pageWidth = pdf.internal.pageSize.getWidth();
        const margin = 14;
        let y = 18;

        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(16);
        pdf.text("Receipt", margin, y);

        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        pdf.text(`Ref: ${ref}`, pageWidth - margin, y, { align: "right" });
        y += 10;

        pdf.setDrawColor(220);
        pdf.line(margin, y, pageWidth - margin, y);
        y += 8;

        pdf.setFont("helvetica", "bold");
        pdf.text("Billed To", margin, y);
        pdf.text("Total Paid", pageWidth - margin, y, { align: "right" });
        y += 6;

        pdf.setFont("helvetica", "normal");
        const billedLines = [
          name,
          email,
          mobile || null,
          billing?.addr1 || null,
          billing?.addr2 || null,
          [billing?.city, billing?.postcode].filter(Boolean).join(", ") || null,
        ].filter(Boolean);

        billedLines.forEach((line) => {
          pdf.text(String(line), margin, y);
          y += 5.2;
        });

        const totalText = `£${Number(price || 0).toFixed(2)}`;
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(14);
        pdf.text(totalText, pageWidth - margin, 42, { align: "right" });
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        pdf.text(`Date: ${date}`, pageWidth - margin, 48, { align: "right" });

        y += 4;
        pdf.setDrawColor(220);
        pdf.line(margin, y, pageWidth - margin, y);
        y += 10;

        pdf.setFont("helvetica", "bold");
        pdf.text("Item", margin, y);
        pdf.text("Amount", pageWidth - margin, y, { align: "right" });
        y += 6;

        pdf.setFont("helvetica", "normal");
        const itemLines = pdf.splitTextToSize(
          String(courseName || "Course"),
          pageWidth - margin * 2 - 40,
        );
        itemLines.forEach((line) => {
          pdf.text(line, margin, y);
          y += 5.2;
        });
        pdf.setFontSize(9);
        pdf.text(`${plan} Package`, margin, y);
        y += 5.2;
        if (easyApply) {
          pdf.setTextColor(0, 182, 122);
          pdf.setFont("helvetica", "bold");
          pdf.text("EasyApply™ included", margin, y);
          pdf.setTextColor(0, 0, 0);
        }

        pdf.setFontSize(10);
        pdf.setFont("helvetica", "bold");
        pdf.text(totalText, pageWidth - margin, y - (easyApply ? 5.2 : 10.4), {
          align: "right",
        });

        pdf.save(`Receipt_${ref}.pdf`);
      };

      try {
        const canvas = await html2canvas(receiptRef.current, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: "#ffffff",
        });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, pdfWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        pdf.save(`Receipt_${ref}.pdf`);
      } catch (canvasErr) {
        // Some browsers expose computed colors as `oklab(...)`, which html2canvas can't parse.
        console.warn(
          "Canvas receipt generation failed; falling back to text PDF.",
          canvasErr,
        );
        saveTextReceiptPdf();
      }
    } catch (err) {
      console.error("PDF generation failed", err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(ref);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Dark hero */}
      <div className="bg-[#1C1C1C] pt-12 pb-16 text-center px-4">
        <div className="w-16 h-16 rounded-full bg-[#F15A24] flex items-center justify-center mx-auto mb-5">
          <Check className="text-white" size={32} strokeWidth={3} />
        </div>
        <h1 className="text-4xl font-black text-white mb-2">
          Booking Confirmed!
        </h1>
        <p className="text-gray-400 text-base mb-6">
          Thank you, <span className="text-white font-bold">{name}</span>. Your
          place has been secured.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleCopy}
            className="inline-flex items-center cursor-pointer gap-2 bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-white/20 transition-all"
          >
            <span className="text-gray-400 text-base">Booking Reference</span>
            <span className="font-black">{ref}</span>
            {copied ? (
              <Check
                size={16}
                className="text-[#F15A24] transition-all duration-300"
              />
            ) : (
              <Copy
                size={16}
                className="text-gray-400 transition-all duration-300"
              />
            )}
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left col */}
          <div className="flex-1 space-y-6">
            {/* Receipt area (captured for PDF) */}
            <div
              ref={receiptRef}
              className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="bg-[#F15A24] px-5 py-3 flex items-center justify-between">
                <span className="text-white font-black text-lg">Receipt</span>
                <span className="text-white/70 text-base font-bold">
                  Ref: {ref}
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                      Billed To
                    </p>
                    <p className="text-base font-black text-[#1C1C1C] truncate">
                      {name}
                    </p>
                    <p className="text-base text-gray-600 break-all">{email}</p>
                    {mobile && (
                      <p className="text-base text-gray-600">{mobile}</p>
                    )}
                  </div>
                  <div className="text-left shrink-0">
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                      Total Paid
                    </p>
                    <p className="text-xl font-black text-[#F15A24]">
                      £{Number(price || 0).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">Date: {date}</p>
                  </div>
                </div>

                {billing &&
                  (billing.addr1 || billing.city || billing.postcode) && (
                    <div>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">
                        Billing Address
                      </p>
                      <div className="text-base text-gray-600 space-y-0.5">
                        {billing.addr1 && <p>{billing.addr1}</p>}
                        {billing.addr2 && <p>{billing.addr2}</p>}
                        {(billing.city || billing.postcode) && (
                          <p>
                            {[billing.city, billing.postcode]
                              .filter(Boolean)
                              .join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                <div className="h-px bg-gray-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                      Item
                    </p>
                    <p className="text-base font-black text-[#1C1C1C]">
                      {courseName}
                    </p>
                    <p className="text-sm text-gray-500">{plan} Package</p>
                    {easyApply && (
                      <p className="text-sm font-bold text-[#F15A24] mt-1">
                        + EasyApply™
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">
                      Amount
                    </p>
                    <p className="text-lg font-black text-[#1C1C1C]">
                      £{Number(courseOnlyPrice).toFixed(2)}
                    </p>
                    {easyApply && (
                      <p className="text-[13px] font-black text-[#1C1C1C]">
                        £{EASY_APPLY_FEE.toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#F15A24] px-5 py-3">
                <span className="text-white font-black text-lg">
                  Order Details
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#F15A24] rounded-lg flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="text-base font-black text-[#1C1C1C]">
                        {courseName}
                      </p>
                      <p className="text-sm text-gray-400">{plan} Package</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-black text-[#1C1C1C]">
                      £{Number(courseOnlyPrice).toFixed(2)}
                    </span>
                    {easyApply && (
                      <p className="text-sm text-gray-500 mt-0.5">
                        + £{EASY_APPLY_FEE.toFixed(2)} EasyApply™
                      </p>
                    )}
                  </div>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="flex items-center gap-3 text-base text-gray-500">
                  <Calendar size={18} className="text-gray-400" />{" "}
                  <span>
                    Course Date: <b className="text-[#1C1C1C]">{date}</b>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-base text-gray-500">
                  <Mail size={18} className="text-gray-400 hidden md:block " />{" "}
                  <span>
                    Confirmation sent to:{" "}
                    <b className="text-[#F15A24]">{email}</b>
                  </span>
                </div>
                {easyApply && (
                  <div className="flex items-center gap-3 text-sm text-[#F15A24] font-bold">
                    <Check size={14} /> EasyApply™ included — we'll handle your
                    licence application
                  </div>
                )}
              </div>
            </div>

            {/* What Happens Next */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-black text-[#1C1C1C] mb-6">
                What Happens Next
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Check Your Email",
                    badge: "Within 5 minutes",
                    badgeColor: "bg-gray-100 text-gray-600",
                    desc: "A confirmation email with your booking details, course materials access link, and venue information has been sent to your inbox.",
                  },
                  // {
                  //   icon: Smartphone,
                  //   label: "Download the GuardPass App",
                  //   badge: "Available Now",
                  //   badgeColor: "bg-[#F15A24] text-white",
                  //   desc: "Access your eLearning materials, mock exams, and revision content immediately through our 5-star rated app.",
                  // },
                  {
                    icon: BookOpen,
                    label: "Attend Your Course",
                    badge: date,
                    badgeColor: "bg-[#FFF5F1] text-[#F15A24]",
                    desc: "Arrive at the venue on your course date with valid photo ID. Our instructor will guide you through everything.",
                  },
                  // {
                  //   icon: Award,
                  //   label: "Get Your Results & Licence",
                  //   badge: "1 working day",
                  //   badgeColor: "bg-gray-100 text-gray-600",
                  //   desc: "Results available within 1 working day. Our team will handle your licence application.",
                  // },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-[#1C1C1C]" />
                    </div>
                    <div>
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <span className="text-base font-black text-[#1C1C1C]">
                          {item.label}
                        </span>
                        <span
                          className={`text-sm font-bold px-2 py-0.5 rounded ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-base text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadReceipt}
                disabled={isDownloading}
                className="flex items-center justify-center cursor-pointer gap-2 border-2 border-gray-200 text-[#1C1C1C] px-6 py-3 rounded-xl font-black text-md cursor-pointer hover:border-gray-300 transition-all"
              >
                {isDownloading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Download size={20} />
                )}
                {isDownloading ? "Generating..." : "Download Receipt"}
              </button>
              <button
                onClick={() => navigate("/courses")}
                className="flex items-center justify-center gap-2 cursor-pointer bg-[#F15A24] text-white px-6 py-3 rounded-xl font-black text-md cursor-pointer hover:brightness-110 transition-all"
              >
                Browse More Courses <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right col */}
          <div className="w-full lg:w-67.5 space-y-4 lg:sticky lg:top-16">
            {/* Stars */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-3">
                Consistently rated 5-stars
              </p>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="text-sm font-black text-[#1C1C1C]">
                  Excellent
                </span>
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
              <span className="text-sm text-gray-400 font-bold">
                9,511 reviews
              </span>
            </div>
            <div className="bg-[#1C1C1C] rounded-xl p-5">
              <p className="text-white font-black text-xl mb-1">Need Help?</p>
              <p className="text-gray-400 text-sm md:text-base mb-4">
                Our team is here to assist you with any questions about your
                booking.
              </p>
              <button className="w-full bg-[#F15A24] text-white px-4 py-2.5 rounded-lg font-black text-md flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                <Phone size={16} className="fill-current" /> Call 08006894621
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1C1C1C] py-4 mt-8">
        <p className="text-center text-md text-gray-500">
          Courses4Me is a registered trademark of Courses4Me Limited. Courses4Me
          is a training &amp; staffing platform — we help people book training
          courses with approved providers and help them find work.
        </p>
      </div>
    </div>
  );
};
export default BookingConfirmed;
