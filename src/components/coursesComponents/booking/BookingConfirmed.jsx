import React, { useState, useRef } from "react";
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
    await navigator.clipboard.writeText("Your Text");

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pt-10">
      {/* Dark hero */}
      <div className="bg-[#1C1C1C] pt-12 pb-16 text-center px-4">
        <div className="w-16 h-16 rounded-full bg-[#F15A24] flex items-center justify-center mx-auto mb-5">
          <Check className="text-white" size={32} strokeWidth={3} />
        </div>
        <h1 className="text-3xl font-black text-white mb-2">
          Booking Confirmed!
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Thank you, <span className="text-white font-bold">{name}</span>. Your
          place has been secured.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handleCopy}
            className="inline-flex items-center cursor-pointer gap-2 bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-white/20 transition-all"
          >
            <span className="text-gray-400 text-xs">Booking Reference</span>
            <span className="font-black">{ref}</span>
            {copied ? (
              <Check
                size={14}
                className="text-[#F15A24] transition-all duration-300"
              />
            ) : (
              <Copy
                size={14}
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
                <span className="text-white font-black text-[13px]">
                  Receipt
                </span>
                <span className="text-white/70 text-[11px] font-bold">
                  Ref: {ref}
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wider">
                      Billed To
                    </p>
                    <p className="text-[14px] font-black text-[#1C1C1C] truncate">
                      {name}
                    </p>
                    <p className="text-[12px] text-gray-600 break-all">
                      {email}
                    </p>
                    {mobile && (
                      <p className="text-[12px] text-gray-600">{mobile}</p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wider">
                      Total Paid
                    </p>
                    <p className="text-[18px] font-black text-[#F15A24]">
                      £{Number(price || 0).toFixed(2)}
                    </p>
                    <p className="text-[11px] text-gray-500">Date: {date}</p>
                  </div>
                </div>

                {billing &&
                  (billing.addr1 || billing.city || billing.postcode) && (
                    <div>
                      <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                        Billing Address
                      </p>
                      <div className="text-[12px] text-gray-600 space-y-0.5">
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
                    <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wider">
                      Item
                    </p>
                    <p className="text-[13px] font-black text-[#1C1C1C]">
                      {courseName}
                    </p>
                    <p className="text-[11px] text-gray-500">{plan} Package</p>
                    {easyApply && (
                      <p className="text-[11px] font-bold text-[#F15A24] mt-1">
                        EasyApply™ included
                      </p>
                    )}
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[12px] text-gray-400 font-bold uppercase tracking-wider">
                      Amount
                    </p>
                    <p className="text-[13px] font-black text-[#1C1C1C]">
                      £{Number(price || 0).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#F15A24] px-5 py-3">
                <span className="text-white font-black text-[13px]">
                  Order Details
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#F15A24] rounded-lg flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-white" size={16} />
                    </div>
                    <div>
                      <p className="text-[13px] font-black text-[#1C1C1C]">
                        {courseName}
                      </p>
                      <p className="text-[11px] text-gray-400">
                        {plan} Package
                      </p>
                    </div>
                  </div>
                  <span className="text-[14px] font-black text-[#1C1C1C]">
                    £{price?.toFixed(2)}
                  </span>
                </div>
                <div className="h-px bg-gray-100" />
                <div className="flex items-center gap-3 text-[12px] text-gray-500">
                  <Calendar size={14} className="text-gray-400" />{" "}
                  <span>
                    Course Date: <b className="text-[#1C1C1C]">{date}</b>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[12px] text-gray-500">
                  <Mail size={14} className="text-gray-400" />{" "}
                  <span>
                    Confirmation sent to:{" "}
                    <b className="text-[#F15A24]">{email}</b>
                  </span>
                </div>
                {easyApply && (
                  <div className="flex items-center gap-3 text-[12px] text-[#F15A24] font-bold">
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
                  {
                    icon: Smartphone,
                    label: "Download the GuardPass App",
                    badge: "Available Now",
                    badgeColor: "bg-[#F15A24] text-white",
                    desc: "Access your eLearning materials, mock exams, and revision content immediately through our 5-star rated app.",
                  },
                  {
                    icon: BookOpen,
                    label: "Attend Your Course",
                    badge: date,
                    badgeColor: "bg-[#FFF5F1] text-[#F15A24]",
                    desc: "Arrive at the venue on your course date with valid photo ID. Our instructor will guide you through everything.",
                  },
                  {
                    icon: Award,
                    label: "Get Your Results & Licence",
                    badge: "1 working day",
                    badgeColor: "bg-gray-100 text-gray-600",
                    desc: "Results available within 1 working day. Our team will handle your licence application.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-[#1C1C1C]" />
                    </div>
                    <div>
                      <div className="flex items-center flex-wrap gap-2 mb-1">
                        <span className="text-[14px] font-black text-[#1C1C1C]">
                          {item.label}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-500 leading-relaxed">
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
                className="flex items-center justify-center cursor-pointer gap-2 border-2 border-gray-200 text-[#1C1C1C] px-6 py-3 rounded-xl font-black text-sm hover:border-gray-300 transition-all"
              >
                {isDownloading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Download size={16} />
                )}
                {isDownloading ? "Generating..." : "Download Receipt"}
              </button>
              <button
                onClick={() => navigate("/courses")}
                className="flex items-center justify-center gap-2 cursor-pointer bg-[#F15A24] text-white px-6 py-3 rounded-xl font-black text-sm hover:brightness-110 transition-all"
              >
                Browse More Courses <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right col */}
          <div className="w-full lg:w-[270px] space-y-4 lg:sticky lg:top-[100px]">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-[13px] font-black text-[#1C1C1C] mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  { icon: User, label: "Student Portal" },
                  { icon: CheckCircle, label: "FAQs" },
                  { icon: Mail, label: "Contact Us" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-3 text-[13px] text-[#F15A24] font-bold hover:underline w-full"
                  >
                    <item.icon size={15} className="text-[#F15A24]" />{" "}
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-[#1C1C1C] rounded-xl p-5">
              <p className="text-white font-black text-sm mb-1">Need Help?</p>
              <p className="text-gray-400 text-[11px] mb-4">
                Our team is here to assist you with any questions about your
                booking.
              </p>
              <button className="w-full bg-[#F15A24] text-white px-4 py-2.5 rounded-lg font-black text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                <Phone size={14} className="fill-current" /> Call 08006894621
              </button>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-center">
              <p className="text-[10px] text-gray-400 mb-2">
                Trusted by 400,000+ students
              </p>
              <div className="flex justify-center items-center gap-1 mb-1">
                <span className="text-xs font-black">Excellent</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 bg-[#F15A24] flex items-center justify-center"
                    >
                      <span className="text-white text-[8px]">★</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-gray-400">
                9,511 reviews on Trustpilot
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1C1C1C] py-4 mt-8">
        <p className="text-center text-[11px] text-gray-500">
          Courses4Me is a registered trademark of Courses4Me Limited. Courses4Me
          is a training &amp; staffing platform — we help people book training
          courses with approved providers and help them find work.
        </p>
      </div>
    </div>
  );
};
export default BookingConfirmed;
