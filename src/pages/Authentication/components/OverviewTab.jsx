import React, { useState, useEffect } from "react";
import {
  Bell,
  Award,
  CheckCircle,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  BookOpen,
  HelpCircle,
  MessageSquare,
  Phone,
  Download,
  Loader2,
  Activity,
  PlayCircle,
  AlertTriangle,
  XCircle,
  Briefcase,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import courseService from "../../../api/services/courseService";
import careerService from "../../../api/services/careerService";
import Loader from "../../../components/ui/Loader";
import { useAuth } from "../../../context/AuthContext";
import { downloadCertificate } from "../../../utils/certificateGenerator";

const OverviewTab = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(null); // ID of course being downloaded
  const [data, setData] = useState({
    upcoming: [],
    ongoing: [],
    completed: [],
    postponed: [],
    cancelled: [],
    pendingBookings: [],
    applications: [],
    stats: [
      { label: "Upcoming", value: "0", color: "text-orange-500" },
      { label: "Ongoing", value: "0", color: "text-blue-500" },
      { label: "Completed", value: "0", color: "text-green-500" },
      { label: "Certificates", value: "0", color: "text-purple-500" },
    ],
  });

  const PendingBanner = ({ booking }) => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
      const expirationTime =
        new Date(booking.createdAt).getTime() + 60 * 60 * 1000;

      const updateTimer = () => {
        const now = new Date().getTime();
        const diff = expirationTime - now;
        setTimeLeft(Math.max(0, Math.floor(diff / 1000)));
      };

      updateTimer();
      const id = setInterval(updateTimer, 1000);
      return () => clearInterval(id);
    }, [booking.createdAt]);

    if (timeLeft <= 0) return null;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-yellow-50 border-2 border-yellow-400 rounded-xl text-yellow-900 shadow-lg mb-4">
        <div className="flex items-center gap-3 mb-3 sm:mb-0">
          <AlertTriangle size={24} className="text-yellow-600 animate-pulse" />
          <div>
            <p className="font-bold text-lg">
              ⚠️ You have a pending booking for {booking.title}.
            </p>
            <p className="text-sm font-medium">
              Your spot is held for another{" "}
              <span className="text-red-600 font-black">
                {minutes}:{seconds < 10 ? "0" + seconds : seconds}
              </span>{" "}
              minutes.
            </p>
          </div>
        </div>
        <button
          onClick={() =>
            navigate(
              `/booking/checkout?courseId=${booking.courseId}&bookingId=${booking.id}`,
            )
          }
          className="bg-[#F15A24] hover:bg-[#D94E1F] text-white px-6 py-2.5 rounded-xl font-bold shadow-md transition-all active:scale-95 whitespace-nowrap"
        >
          Complete Payment Now
        </button>
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await courseService.getUserCourses();
        let apps = [];

        try {
          const appsResult = await careerService.getMyApplications();
          if (appsResult && appsResult.success) {
            apps = appsResult.applications || [];
          }
        } catch (appErr) {
          console.error("Failed to fetch job applications:", appErr);
        }

        if (result) {
          setData({
            upcoming: result.upcoming || [],
            ongoing: result.ongoing || [],
            completed: result.completed || [],
            postponed: result.postponed || [],
            cancelled: result.cancelled || [],
            pendingBookings: result.pendingBookings || [],
            applications: apps,
            stats: [
              {
                label: "Upcoming",
                value: result.stats?.upcomingCount || "0",
                color: "text-orange-500",
              },
              {
                label: "Ongoing",
                value: result.stats?.ongoingCount || "0",
                color: "text-blue-500",
              },
              {
                label: "Completed",
                value: result.stats?.completedCount || "0",
                color: "text-green-500",
              },
              {
                label: "Certificates",
                value: result.stats?.certificateCount || "0",
                color: "text-purple-500",
              },
            ],
          });
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownloadCertificate = async (course) => {
    try {
      setDownloading(course.id);
      await downloadCertificate({
        userName: user?.name || "Valued Student",
        courseTitle: course.title,
        completionDate: course.endDateFormatted || course.date,
        certificateId: `CERT-${course.id.substring(0, 8).toUpperCase()}-${Math.floor(Math.random() * 1000)}`,
      });
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setDownloading(null);
    }
  };

  if (loading) {
    return <Loader text="Loading your dashboard..." />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-8 space-y-6">
        {/* Pending Bookings Banner */}
        {data.pendingBookings && data.pendingBookings.length > 0 && (
          <div className="space-y-3">
            {data.pendingBookings.map((pb) => (
              <PendingBanner key={pb.id} booking={pb} />
            ))}
          </div>
        )}

        {/* Alerts */}
        <div className="space-y-3">
          {data.upcoming.length > 0 && (
            <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-xl text-blue-800 shadow-sm transition-all hover:shadow-md group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Bell size={18} className="text-blue-600" />
                </div>
                <p className="font-medium">
                  Your {data.upcoming[0].title} course starts soon
                </p>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <button className="text-blue-400 hover:text-blue-600">×</button>
            </div>
          )}

          {data.completed.length > 0 && (
            <div className="flex items-center justify-between p-4 bg-green-50 border border-green-100 rounded-xl text-green-800 shadow-sm transition-all hover:shadow-md group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
                  <Award size={18} className="text-green-600" />
                </div>
                <p className="font-medium">
                  New certificate is ready to download
                </p>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              </div>
              <button className="text-green-400 hover:text-green-600">×</button>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {data.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center"
            >
              <h3 className={`text-3xl font-extrabold ${stat.color} mb-1`}>
                {stat.value}
              </h3>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Ongoing Courses */}
        {(data.ongoing.length > 0 || data.postponed.length > 0) && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Activity className="text-blue-500" size={20} />
              <h2 className="text-xl font-bold text-gray-800">
                Ongoing & Active Training
              </h2>
            </div>
            <div className="space-y-4">
              {[...data.ongoing, ...data.postponed].map((course) => (
                <div
                  key={course.id}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-gray-900">
                          {course.title}
                        </h3>
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                            course.lifecycleStatus === "Extended"
                              ? "bg-purple-100 text-purple-700 animate-pulse"
                              : course.lifecycleStatus === "Postponed"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {course.lifecycleStatus}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} /> Ends {course.endDateFormatted}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} /> {course.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold text-gray-400 uppercase">
                          Progress
                        </p>
                        <p className="text-lg font-black text-gray-900">
                          {course.progress}%
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          navigate(`/dashboard/course/${course.id}`)
                        }
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
                      >
                        <PlayCircle size={16} /> Continue
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded-full bg-blue-50">
                      <div
                        style={{ width: `${course.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"
                      ></div>
                    </div>
                  </div>

                  {course.lifecycleStatus === "Extended" && (
                    <p className="text-[11px] font-bold text-purple-600 flex items-center gap-1">
                      <Activity size={12} /> This course has been extended by
                      the administrator.
                    </p>
                  )}
                  {course.lifecycleStatus === "Postponed" && (
                    <p className="text-[11px] font-bold text-yellow-600 flex items-center gap-1">
                      <AlertTriangle size={12} /> This course is currently
                      postponed. Check back for updates.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Upcoming Courses */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="text-[#F15A24]" size={20} />
            <h2 className="text-xl font-bold text-gray-800">
              Upcoming Courses
            </h2>
          </div>
          <div className="space-y-4">
            {data.upcoming.length > 0 ? (
              data.upcoming.map((course) => (
                <div
                  key={course.id}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-900">
                      {course.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {course.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} /> {course.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {course.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide ${course.bookingStatus === "Confirmed" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}
                    >
                      {course.bookingStatus}
                    </span>
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-gray-100 text-gray-600">
                      Upcoming
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center text-gray-500">
                <BookOpen className="mx-auto mb-4 text-gray-300" size={40} />
                No upcoming courses.{" "}
                <button
                  onClick={() => navigate("/courses")}
                  className="text-orange-600 font-bold hover:underline"
                >
                  Book a course
                </button>
              </div>
            )}
          </div>
        </section>

        {/* My Job Applications */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="text-[#F15A24]" size={20} />
            <h2 className="text-xl font-bold text-gray-800">
              My Job Applications
            </h2>
          </div>
          <div className="space-y-4">
            {data.applications.length > 0 ? (
              data.applications.map((app) => {
                const getStatusStyle = (status) => {
                  switch (status) {
                    case "Shortlisted":
                      return "bg-blue-50 text-blue-700 border-blue-200";
                    case "Interview":
                      return "bg-purple-50 text-purple-700 border-purple-200";
                    case "Accepted":
                      return "bg-green-50 text-green-700 border-green-200 animate-pulse";
                    case "Rejected":
                      return "bg-red-50 text-red-700 border-red-200";
                    default:
                      return "bg-orange-50 text-orange-700 border-orange-200";
                  }
                };

                return (
                  <div
                    key={app._id}
                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-gray-900">
                          {app.jobTitle}
                        </h3>
                        {app.jobId?.company && (
                          <span className="text-xs text-gray-400 font-bold">
                            at {app.jobId.company}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#667085]">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} /> Applied on{" "}
                          {new Date(app.createdAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        {app.jobId?.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={14} /> {app.jobId.location}
                          </span>
                        )}
                        {app.license && (
                          <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-0.5 rounded text-xs border border-gray-100 font-bold text-gray-500">
                            SIA: {app.license}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {app.cvFile && app.cvFile.startsWith("data:") && (
                        <button
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = app.cvFile;
                            let ext = "pdf";
                            if (app.cvFile.includes("msword")) ext = "doc";
                            else if (app.cvFile.includes("officedocument"))
                              ext = "docx";

                            const applicantName = `${app.firstName || ""}_${app.lastName || ""}`;
                            link.download = `${applicantName.replace(/\s+/g, "_")}_CV.${ext}`;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 rounded-xl text-xs font-bold transition-all active:scale-95"
                          title="Download Uploaded CV"
                        >
                          <Download size={13} />
                          CV
                        </button>
                      )}
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wide border ${getStatusStyle(app.status)}`}
                      >
                        {app.status}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center text-gray-500">
                <Briefcase className="mx-auto mb-4 text-gray-300" size={40} />
                You haven't applied for any jobs yet.{" "}
                <button
                  onClick={() => navigate("/careers")}
                  className="text-orange-600 font-bold hover:underline"
                >
                  Explore job opportunities
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Cancelled Courses */}
        {data.cancelled.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="text-red-500" size={20} />
              <h2 className="text-xl font-bold text-gray-800">
                Cancelled Bookings
              </h2>
            </div>
            <div className="space-y-4 opacity-75">
              {data.cancelled.map((course) => (
                <div
                  key={course.id}
                  className="bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 grayscale"
                >
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-gray-400 line-through">
                      {course.title}
                    </h3>
                    <p className="text-xs font-bold text-red-500 uppercase">
                      Booking Cancelled
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Completed Courses */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="text-[#F15A24]" size={20} />
            <h2 className="text-xl font-bold text-gray-800">
              Completed Courses
            </h2>
          </div>
          <div className="space-y-4">
            {data.completed.length > 0 ? (
              data.completed.map((course) => (
                <div
                  key={course.id}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg text-gray-900">
                        {course.title}
                      </h3>
                      <span className="text-[#F15A24] font-bold text-lg">
                        {course.score}%
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> {course.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {course.location}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDownloadCertificate(course)}
                      disabled={downloading === course.id}
                      className="mt-3 flex items-center gap-2 text-[#F15A24] font-semibold text-sm hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {downloading === course.id ? (
                        <Loader2 size={14} className="animate-spin" />
                      ) : (
                        <Download size={14} />
                      )}
                      {downloading === course.id
                        ? "Generating..."
                        : "Download Certificate"}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-10 rounded-2xl border border-dashed border-gray-200 text-center text-gray-500">
                <Award className="mx-auto mb-4 text-gray-300" size={40} />
                No completed courses yet.
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-4 space-y-6">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="text-[#F15A24]" size={20} />
            <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide">
              Quick Actions
            </h2>
          </div>
          <div className="space-y-2">
            {[
              {
                label: "Book New Course",
                icon: <Calendar size={18} />,
                action: () => navigate("/courses"),
              },
              { label: "Check Results", icon: <Award size={18} /> },
              { label: "FAQs", icon: <HelpCircle size={18} /> },
              { label: "Contact Support", icon: <MessageSquare size={18} /> },
            ].map((action, idx) => (
              <button
                key={idx}
                onClick={action.action}
                className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3 text-gray-700 font-medium group-hover:text-[#F15A24] transition-colors">
                  <span className="text-gray-400 group-hover:text-[#F15A24]">
                    {action.icon}
                  </span>
                  {action.label}
                </div>
                <ChevronRight
                  size={16}
                  className="text-gray-300 group-hover:translate-x-1 transition-transform"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Need Help Card */}
        <div className="bg-[#2D2D2D] p-8 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F15A24]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <h2 className="text-2xl font-bold mb-2">Need Help?</h2>
          <p className="text-gray-400 text-base mb-6 leading-relaxed">
            Our support team is available Mon-Fri 8am-6pm to assist you with any
            questions.
          </p>
          <button className="w-full bg-[#F15A24] cursor-pointer hover:bg-[#D94E1F] text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3">
            <Phone size={20} />
            Call 08006894621
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
