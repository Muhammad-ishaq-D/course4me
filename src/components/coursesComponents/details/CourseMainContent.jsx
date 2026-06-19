import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Users,
  AlertCircle,
  HelpCircle,
  Phone,
  ArrowRight,
  Calendar,
  Zap,
  RotateCcw,
  Trophy,
  MapPin,
} from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
const CourseMainContent = ({ course }) => {
  const navigate = useNavigate();

  const [bookingStatus, setBookingStatus] = React.useState(null);
  const [bookingId, setBookingId] = React.useState(null);
  const { user } = useAuth();

  React.useEffect(() => {
    if (user && course?._id) {
      import("../../../api/services/bookingService").then((module) => {
        module.default
          .getMyBookingStatus(course._id)
          .then((res) => {
            if (res.data?.success) {
              setBookingStatus(res.data.status);
              if (res.data.bookingId) setBookingId(res.data.bookingId);
            }
          })
          .catch(console.error);
      });
    }
  }, [user, course]);

  const handleActionClick = () => {
    if (bookingStatus === "PAID") {
      navigate("/dashboard"); // Go to student portal/dashboard
    } else if (bookingStatus === "PENDING" && bookingId) {
      // Direct them to checkout but pass bookingId to bypass creation
      navigate(
        `/booking/checkout?courseId=${course._id}&bookingId=${bookingId}`,
      );
    } else {
      navigate(`/course/${course._id}/book`);
    }
  };

  const getButtonContent = () => {
    if (bookingStatus === "PAID") return "Already Enrolled / View Course";
    if (bookingStatus === "PENDING") return "Complete Your Payment";
    return (
      <>
        Book Now{" "}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </>
    );
  };

  if (!course) return null;
  // Formatting backend data
  const displayPrice = course.pricing?.basePrice
    ? `£${course.pricing.basePrice}`
    : "N/A";
  const displayLearn = course.learningPoints || [];
  const displayWhoFor = course.targetAudience || [];
  const displayRequirements = course.requirements || [];

  return (
    <section className="py-16 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="w-full lg:w-2/3 space-y-16">
            {/* About This Course */}
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B] mb-6">
                About This Course
              </h2>
              <div
                className="text-[#64748B] text-base md:text-lg leading-relaxed mb-6 prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: course.fullDescription }}
              />
            </div>

            {/* What You'll Learn */}
            {displayLearn.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayLearn.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#F8510C] shrink-0" />
                      <span className="text-[#475569] font-medium text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Who Is This Course For? */}
            {displayWhoFor.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-[#1E293B] mb-8">
                  Who Is This Course For?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayWhoFor.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
                    >
                      <div className="text-[#F15A24] bg-[#F15A24]/10 p-2 rounded-lg">
                        <Users />
                      </div>
                      <span className="text-[#475569] font-medium text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Entry Requirements */}
            {displayRequirements.length > 0 && (
              <div className="bg-[#FEF3C7]/40 border border-[#F59E0B]/20 p-8 rounded-3xl">
                <h2 className="text-2xl font-bold text-[#92400E] mb-6 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6" /> Entry Requirements
                </h2>
                <p className="text-[#B45309] font-medium mb-6">
                  Before you book, please check:
                </p>
                <ul className="space-y-4">
                  {displayRequirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F59E0B] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-[#92400E] text-base font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-6">
              {/* Price Card */}
              <div className="bg-white rounded-4xl border border-gray-100 shadow-xl overflow-hidden">
                <div className="p-8">
                  <div className="flex gap-3 items-center justify-between mb-8">
                    <div className="text-[#64748B] text-lg font-medium ">
                      Price
                    </div>
                    <div className="flex items-baseline gap-2 ">
                      <span className="text-5xl font-extrabold text-[#1E293B]">
                        {displayPrice}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-5 border-t border-gray-50 pt-8">
                    {[
                      {
                        icon: <Zap className="text-[#F59E0B]" />,
                        text: "Immediate results",
                      },
                      {
                        icon: <RotateCcw className="text-[#3B82F6]" />,
                        text: "Free exam retakes",
                      },
                      {
                        icon: <Trophy className="text-[#34C759]" />,
                        text: "98% pass rate",
                      },
                      {
                        icon: <MapPin className="text-[#EF4444]" />,
                        text: "85+ UK locations",
                      },
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <span className="text-[#475569] font-semibold text-base">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mt-8">
                    <button
                      onClick={handleActionClick}
                      className="w-full bg-[#F15A24] cursor-pointer text-white font-bold py-4 rounded-2xl shadow-lg shadow-[#F15A24]/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
                    >
                      {getButtonContent()}
                    </button>
                    {/* <button
                      onClick={() => {
                        const element = document.getElementById("dates");
                        if (element)
                          element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full bg-[#1E293B] cursor-pointer text-white font-bold py-4 rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" /> View All Dates
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Need Help Card */}
        <div className="bg-[#00A3F4]/10 border border-[#00A3F4]/20 rounded-[32px] p-6 md:p-8 mt-5 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* LEFT */}
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full border-2 border-[#00A3F4] flex items-center justify-center bg-white">
                <Phone className="w-9 h-9 text-[#00A3F4]" />
              </div>

              <div>
                <p className="text-[#00A3F4] text-sm font-bold uppercase tracking-wide">
                  Need Help?
                </p>

                <a
                  href="tel:08006894621"
                  className="block text-2xl font-black text-[#0F172A] hover:text-[#00A3F4] transition"
                >
                  08006894621
                </a>

                <a
                  href="mailto:info@courses4me.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64748B] hover:text-[#00A3F4] transition font-medium"
                >
                  info@courses4me.co.uk
                </a>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="hidden lg:block w-px h-24 bg-[#00A3F4]/20" />

            {/* CENTER TEXT */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                Speak with our Course Advisors
              </h3>

              <p className="text-[#64748B] text-base leading-relaxed">
                Our team is available Monday to Friday to help you find the
                right course, training provider, and qualification for your
                career goals.
              </p>
            </div>

            {/* BUTTON */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@courses4me.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="
        px-8 py-4
        rounded-2xl
        bg-orange-600
        text-white
        font-bold
        whitespace-nowrap
        hover:bg-[#EF4444]/90
        transition-all duration-300
      "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseMainContent;
