import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Star,
  Upload,
  User as UserIcon,
  Lock,
  Mail,
  Phone as PhoneIcon,
  Loader2,
  Calendar,
  AlertTriangle,
} from "lucide-react";

import careerService from "../../api/services/careerService";
import { useAuth } from "../../context/AuthContext";
import SocialLogin from "../../pages/Authentication/components/SocialLogin";
import * as yup from "yup";
import Loader from "../ui/Loader";
import toast from "react-hot-toast";

const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = React.useRef(null);
  const { user, login: authLogin } = useAuth();

  // ================= STATES =================
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [refNumber, setRefNumber] = useState("");
  const [cvName, setCvName] = useState("");
  const [cvBase64, setCvBase64] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [hasApplied, setHasApplied] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    license: "",
    experience: "",
    availability: "",
    cover: "",
    password: "",
    confirmPassword: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Sync user details if logged in
  useEffect(() => {
    if (user) {
      setForm((prev) => ({
        ...prev,
        firstName: prev.firstName || user.name?.split(" ")[0] || "",
        lastName:
          prev.lastName || user.name?.split(" ").slice(1).join(" ") || "",
        email: user.email || prev.email,
        phone: prev.phone || user.phone || "",
      }));
    }
  }, [user]);

  // Check if already applied
  useEffect(() => {
    const checkApplicationStatus = async () => {
      if (user && id) {
        setCheckingStatus(true);
        try {
          const appsResult = await careerService.getMyApplications();
          if (appsResult && appsResult.success) {
            const apps = appsResult.applications || [];
            const applied = apps.some((app) => {
              const appJobId = app.jobId?._id || app.jobId?.id || app.jobId;
              return String(appJobId) === String(id);
            });
            setHasApplied(applied);
          }
        } catch (error) {
          console.error("Failed to check application status:", error);
        } finally {
          setCheckingStatus(false);
        }
      }
    };
    checkApplicationStatus();
  }, [user, id]);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await careerService.getJobDetails(id);
        setJob(response.data?.listing || response.data?.data);
      } catch (error) {
        console.error("Failed to load job listing details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [id]);

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    // Remove error while typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds 5MB limit.");
        return;
      }
      setCvName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setCvBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // ================= INLINE LOGIN =================
  const handleInlineLogin = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!loginForm.email.trim() || !loginForm.password) {
      setErrors({
        login: "Please fill in all credentials.",
      });
      return;
    }

    try {
      setSubmitting(true);
      const res = await authLogin(loginForm);
      if (res.success) {
        setIsLoggingIn(false);
      }
    } catch (err) {
      setErrors({
        login: err.response?.data?.message || "Invalid email or password",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // ================= VALIDATION & SUBMISSION =================
  const validateForm = async () => {
    const schema = yup.object().shape({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address"),
      phone: yup.string().required("Phone number is required"),
      address: yup.string().required("Address is required"),
      city: yup.string().required("City is required"),
      postcode: yup
        .string()
        .required("Postcode is required")
        .matches(
          /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
          "Please enter a valid UK postcode",
        ),
      license: yup.string().required("SIA license number is required"),
      experience: yup.string().required("Years of experience is required"),
      availability: yup.string().required("Availability is required"),
      cover: yup.string().required("Cover letter is required"),
      ...(!user && !isLoggingIn
        ? {
            password: yup
              .string()
              .required("Password is required")
              .min(8, "Password must be at least 8 characters"),
            confirmPassword: yup
              .string()
              .required("Confirm password is required")
              .oneOf([yup.ref("password")], "Passwords do not match"),
          }
        : {}),
    });

    try {
      await schema.validate(form, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      const validationErrors = {};
      if (err.inner) {
        err.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
      }
      setErrors(validationErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (!isValid) {
      return;
    }

    try {
      setSubmitting(true);
      const payload = {
        ...form,
        cvFile: cvBase64 || "cv_resume.pdf",
      };

      // Submit application
      const res = await careerService.submitApplication(id, payload);

      // If registered guest account, log them in automatically in the background
      if (!user && form.password) {
        try {
          await authLogin({
            email: form.email,
            password: form.password,
          });
        } catch (loginErr) {
          console.error("Auto login after registration failed:", loginErr);
        }
      }

      // Retrieve reference number from backend response
      const finalRef =
        res.refNumber ||
        res.data?.refNumber ||
        res.data?.data?.applicationReference ||
        "REF-" + Math.random().toString(36).substring(2, 9).toUpperCase();
      setRefNumber(finalRef);
      setSuccessOpen(true);
      setTimeout(() => {
        const scrollContainer = document.getElementById(
          "main-scroll-container",
        );

        if (scrollContainer) {
          scrollContainer.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
      }, 50);
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to submit application. Please try again later.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ================= INPUT CLASS =================
  const inputClass = (field) =>
    `w-full border rounded-2xl px-4 py-3 outline-none transition-all duration-200 ${
      errors[field]
        ? "border-red-400 bg-red-50/40 focus:ring-2 focus:ring-red-300"
        : "border-gray-200 bg-gray-50/50 focus:border-[#F15A24] focus:bg-white focus:ring-4 focus:ring-orange-50"
    }`;

  // ================= LOADING STATE =================
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F7FA]">
        <Loader text="Loading job description..." />
      </div>
    );
  }

  // ================= NOT FOUND =================
  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F7FA]">
        <h2 className="text-3xl font-black text-[#111827] mb-4">
          Job Opening Not Found
        </h2>
        <NavLink
          to="/careers"
          className="px-6 py-3 bg-[#F15A24] text-white rounded-2xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all"
        >
          Return to Careers
        </NavLink>
      </div>
    );
  }

  const roleTag = job.category || job.role || "Security";

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-6 sm:py-8 lg:py-10 overflow-hidden">
      {/* Glow */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#F15A24]/5 blur-[120px] pointer-events-none" />

      {/* ================= SUCCESS ================= */}
      {successOpen ? (
        <div className="max-w-xl mx-auto px-4 mt-8">
          <div className="bg-white rounded-[32px] p-8 sm:p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#DCFCE7] flex items-center justify-center">
              <CheckCircle size={55} className="text-[#16A34A]" />
            </div>

            <h2 className="mt-7 text-[32px] font-black text-[#111827]">
              Application Submitted!
            </h2>

            <p className="mt-4 text-[#667085] leading-[1.9]">
              Thank you for applying for the{" "}
              <span className="font-bold text-[#111827]">{job.title}</span> role
              at <span className="font-bold text-[#111827]">{job.company}</span>
              .
            </p>

            <div className="mt-7 rounded-2xl border border-[#F15A24]/20 bg-[#FFF7F3] px-6 py-4 text-sm font-bold text-[#F15A24]">
              Application Reference: {refNumber}
            </div>

            <p className="mt-4 text-sm text-gray-500">
              You can track your application status anytime inside your Student
              Dashboard.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <NavLink
                to="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center h-13 px-7 rounded-2xl bg-[#F15A24] hover:bg-orange-600 text-white font-bold transition-all duration-300 shadow-md shadow-orange-200"
              >
                Go to Dashboard
              </NavLink>
              <NavLink
                to="/careers"
                className="w-full sm:w-auto inline-flex items-center justify-center h-13 px-7 rounded-2xl bg-[#111827] hover:bg-black text-white font-bold transition-all duration-300"
              >
                Explore More Careers
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ================= BACK BUTTON ================= */}
          <NavLink
            to="/careers"
            className="inline-flex items-center gap-2 mb-6 text-[#111827] hover:text-[#F15A24] font-semibold transition-all"
          >
            <ArrowLeft size={18} />
            Back To Careers
          </NavLink>

          {/* ================= JOB HERO CARD ================= */}
          <div className="relative rounded-[32px] border border-[#F15A24]/20 bg-white p-5 sm:p-7 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#F15A24]/5 blur-[100px]" />

            <div className="relative z-10">
              {/* TAGS */}
              <div className="flex flex-wrap items-center gap-2">
                {job.isFeatured && (
                  <div className="flex items-center gap-1 bg-[#F15A24] text-white text-[11px] font-bold px-4 py-2 rounded-full">
                    <Star size={11} fill="white" />
                    Featured
                  </div>
                )}

                <div className="bg-[#EEF4FF] text-[#155DFC] text-sm font-semibold px-4 py-2 rounded-full">
                  {job.type}
                </div>

                <div className="bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-full">
                  {roleTag}
                </div>
              </div>

              {/* TITLE */}
              <div className="mt-7">
                <h1 className="text-[34px] sm:text-[42px] leading-[1.05] font-black tracking-tight text-[#111111]">
                  {job.title}
                </h1>

                <p className="mt-3 text-[16px] text-gray-500 font-medium">
                  {job.company}
                </p>
              </div>

              {/* META */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Location */}
                <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FFF1EB] flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#F15A24]" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.1em] text-gray-400 font-bold">
                      Location
                    </p>

                    <p className="mt-1 text-base font-semibold text-[#111111]">
                      {job.location}
                    </p>
                  </div>
                </div>

                {/* Salary */}
                <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#ECFDF3] flex items-center justify-center shrink-0">
                    <DollarSign size={18} className="text-[#00A63E]" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.1em] text-gray-400 font-bold">
                      Salary
                    </p>

                    <p className="mt-1 text-base font-bold text-[#00A63E]">
                      {job.salary}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F4F6F8] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gray-500" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.1em] text-gray-400 font-bold">
                      Hiring Status
                    </p>

                    {job.status === "Closed" ? (
                      <p className="mt-1 text-base font-semibold text-[#F15A24]">
                        Closed
                      </p>
                    ) : job.status === "Paused" ? (
                      <p className="mt-1 text-base font-semibold text-[#F59E0B]">
                        Paused
                      </p>
                    ) : (
                      <p className="mt-1 text-base font-semibold text-[#00A63E]">
                        Active / Recruiting
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-8">
                <h3 className="text-[15px] uppercase tracking-[0.12em] font-black text-gray-400">
                  Job Description
                </h3>

                <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.9] text-[#4B5563] max-w-4xl">
                  {job.description}
                </p>
              </div>

              {/* REQUIREMENTS */}
              <div className="mt-8">
                <h3 className="text-[15px] uppercase tracking-[0.12em] font-black text-gray-400">
                  Key Requirements
                </h3>

                <div className="flex flex-wrap gap-3 mt-4">
                  {job.requirements && Array.isArray(job.requirements) ? (
                    job.requirements.map((req, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 rounded-full bg-[#F4F6F8] text-[#4B5563] text-sm font-semibold"
                      >
                        {req}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 rounded-full bg-[#F4F6F8] text-[#4B5563] text-[13px] font-semibold">
                      SIA License Required
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM CARD ================= */}
          {checkingStatus ? (
            <div className="mt-5 bg-white rounded-[32px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 flex flex-col items-center justify-center">
              <Loader2 className="animate-spin w-10 h-10 text-[#F15A24] mb-4" />
              <p className="text-gray-500 font-medium">
                Checking application status...
              </p>
            </div>
          ) : job.status === "Closed" || job.status === "Paused" ? (
            <div className="mt-5 bg-white rounded-[32px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 text-center">
              <AlertTriangle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-black text-[#111827]">
                {job.status === "Closed"
                  ? "Applications Closed"
                  : "Applications Paused"}
              </h2>
              <p className="mt-3 text-gray-500">
                We are no longer accepting new applications for this position at
                the moment. Please explore our other active career
                opportunities!
              </p>
              <NavLink
                to="/careers"
                className="mt-6 inline-flex items-center justify-center h-13 px-7 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] text-white font-bold transition-all duration-300"
              >
                Browse Other Jobs
              </NavLink>
            </div>
          ) : hasApplied ? (
            <div className="mt-5 bg-white rounded-[32px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#DCFCE7] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-[#16A34A]" />
              </div>
              <h2 className="text-2xl font-black text-[#111827]">
                Already Applied
              </h2>
              <p className="mt-3 text-gray-500">
                You have already submitted an application for this position. You
                can track its status in your Student Dashboard.
              </p>
              <NavLink
                to="/dashboard"
                className="mt-6 inline-flex items-center justify-center h-13 px-7 rounded-2xl bg-[#F8510C] hover:bg-[#E04809] text-white font-bold transition-all duration-300"
              >
                Go to Dashboard
              </NavLink>
            </div>
          ) : (
            <div className="mt-5 bg-white rounded-[32px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-5 sm:p-7 lg:p-8">
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF7F3] border border-[#FFE2D6] text-[#F15A24] text-xs font-black uppercase tracking-[0.12em]">
                  Candidate Information
                </div>

                <h2 className="mt-4 text-[30px] sm:text-[36px] leading-tight font-black text-[#111827]">
                  Complete Your Application
                </h2>
              </div>

              {/* AUTH STATE HANDLING */}
              {user ? (
                <div className="bg-orange-50/50 border border-orange-200/50 p-4 rounded-2xl mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F15A24] text-white flex items-center justify-center font-black">
                    {user.name ? user.name[0].toUpperCase() : "S"}
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">
                      Logged in as {user.name || "Student"}
                    </p>
                    <p className="text-sm text-gray-500">
                      We'll link this application to your verified student
                      profile.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  {/* Tabs */}
                  <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-6 max-w-md">
                    <button
                      type="button"
                      onClick={() => {
                        setIsLoggingIn(false);
                        setErrors({});
                      }}
                      className={`flex-1 py-3 text-center text-sm font-black rounded-xl transition-all ${
                        !isLoggingIn
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      Register & Apply
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsLoggingIn(true);
                        setErrors({});
                      }}
                      className={`flex-1 py-3 text-center text-sm font-black rounded-xl transition-all ${
                        isLoggingIn
                          ? "bg-white text-[#F15A24] shadow-sm"
                          : "text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      Sign In & Apply
                    </button>
                  </div>
                </div>
              )}

              {/* FORM CONTAINER */}
              {isLoggingIn ? (
                /* ================= INLINE SIGN IN FORM ================= */
                <form
                  onSubmit={handleInlineLogin}
                  className="space-y-5 max-w-lg"
                >
                  <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl mb-4">
                    <p className="text-sm text-blue-700 font-semibold">
                      Sign in to link this application to your existing student
                      profile.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-[13px] text-gray-500 font-bold mb-4 text-center uppercase tracking-wider">
                      Quick sign-in with
                    </p>
                    <SocialLogin />
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-gray-100"></span>
                      </div>
                      <div className="relative flex justify-center text-sm uppercase text-gray-400 font-bold">
                        <span className="bg-white px-4 tracking-widest">
                          or use email
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-base font-semibold text-[#111827]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@email.com"
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      className={inputClass("email")}
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-base font-semibold text-[#111827]">
                      Password *
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      className={inputClass("password")}
                    />
                  </div>

                  {errors.login && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2">
                      <AlertTriangle size={16} />
                      {errors.login}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-14 px-8 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_12px_35px_rgba(17,24,39,0.12)] disabled:opacity-50"
                    >
                      {submitting ? "Signing in..." : "Sign In & Prefill Form"}
                    </button>
                  </div>
                </form>
              ) : (
                /* ================= MAIN APPLICATION FORM ================= */
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* ================= PERSONAL INFO ================= */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div>
                      <label className="block mb-2 text-base font-semibold text-[#111827]">
                        First Name *
                      </label>
                      <input
                        name="firstName"
                        placeholder="Enter your first name"
                        value={form.firstName}
                        onChange={handleChange}
                        disabled={!!user}
                        className={`${inputClass("firstName")} ${user ? "bg-gray-100/70 border-gray-100 cursor-not-allowed" : ""}`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-[12px] font-medium text-red-500">
                          {errors.firstName}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block mb-2 text-base font-semibold text-[#111827]">
                        Last Name *
                      </label>
                      <input
                        name="lastName"
                        placeholder="Enter your last name"
                        value={form.lastName}
                        onChange={handleChange}
                        disabled={!!user}
                        className={`${inputClass("lastName")} ${user ? "bg-gray-100/70 border-gray-100 cursor-not-allowed" : ""}`}
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-[12px] font-medium text-red-500">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ================= EMAIL + PHONE ================= */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block mb-2 text-base font-semibold text-[#111827]">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        placeholder="john@email.com"
                        value={form.email}
                        onChange={handleChange}
                        disabled={!!user}
                        className={`${inputClass("email")} ${user ? "bg-gray-100/70 border-gray-100 cursor-not-allowed" : ""}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[12px] font-medium text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block mb-2 text-base font-semibold text-[#111827]">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        placeholder="+44 7XXX XXX XXX"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass("phone")}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[12px] font-medium text-red-500">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ================= ACCOUNT PASSWORD FOR GUESTS ================= */}
                  {!user && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-orange-50/20 p-5 rounded-2xl border border-dashed border-orange-200/50">
                      <div className="sm:col-span-2">
                        <h4 className="text-base font-bold text-gray-800">
                          Create Candidate Account
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          Register a secure password to automatically build your
                          student profile and track application statuses.
                        </p>
                      </div>

                      <div>
                        <label className="block mb-2 text-base font-semibold text-gray-700">
                          Password *
                        </label>
                        <input
                          type="password"
                          name="password"
                          placeholder="••••••••"
                          value={form.password}
                          onChange={handleChange}
                          className={inputClass("password")}
                        />
                        {errors.password && (
                          <p className="mt-1 text-[12px] font-medium text-red-500">
                            {errors.password}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block mb-2 text-base font-semibold text-gray-700">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          placeholder="••••••••"
                          value={form.confirmPassword}
                          onChange={handleChange}
                          className={inputClass("confirmPassword")}
                        />
                        {errors.confirmPassword && (
                          <p className="mt-1 text-[12px] font-medium text-red-500">
                            {errors.confirmPassword}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* ================= ADDRESS ================= */}
                  <div>
                    <label className="block mb-2 text-base font-semibold text-[#111827]">
                      Address *
                    </label>
                    <input
                      name="address"
                      placeholder="Enter your address"
                      value={form.address}
                      onChange={handleChange}
                      className={inputClass("address")}
                    />
                    {errors.address && (
                      <p className="mt-1 text-[12px] font-medium text-red-500">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  {/* ================= CITY + POSTCODE ================= */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* City */}
                    <div>
                      <label className="block mb-2 text-base font-semibold text-[#111827]">
                        City *
                      </label>
                      <input
                        name="city"
                        placeholder="London"
                        value={form.city}
                        onChange={handleChange}
                        className={inputClass("city")}
                      />
                      {errors.city && (
                        <p className="mt-1 text-[12px] font-medium text-red-500">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    {/* Postcode */}
                    <div>
                      <label className="block mb-2 text-base font-semibold text-[#111827]">
                        Postcode *
                      </label>
                      <input
                        name="postcode"
                        placeholder="SW1A 1AA"
                        value={form.postcode}
                        onChange={handleChange}
                        className={inputClass("postcode")}
                      />
                      {errors.postcode && (
                        <p className="mt-1 text-[12px] font-medium text-red-500">
                          {errors.postcode}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ================= LICENSE + EXPERIENCE ================= */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* License */}
                    <div>
                      <label className="block mb-2 text-base font-semibold text-[#111827]">
                        SIA License Number *
                      </label>
                      <input
                        name="license"
                        placeholder="Enter your license number"
                        value={form.license}
                        onChange={handleChange}
                        className={inputClass("license")}
                      />
                      {errors.license && (
                        <p className="mt-1 text-[12px] font-medium text-red-500">
                          {errors.license}
                        </p>
                      )}
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block mb-2 text-base font-semibold text-[#111827]">
                        Years of Experience *
                      </label>
                      <input
                        name="experience"
                        placeholder="2 Years"
                        value={form.experience}
                        onChange={handleChange}
                        className={inputClass("experience")}
                      />
                      {errors.experience && (
                        <p className="mt-1 text-[12px] font-medium text-red-500">
                          {errors.experience}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ================= AVAILABILITY ================= */}
                  <div>
                    <label className="block mb-2 text-base font-semibold text-[#111827]">
                      Availability *
                    </label>
                    <input
                      name="availability"
                      placeholder="Immediate / 2 Weeks"
                      value={form.availability}
                      onChange={handleChange}
                      className={inputClass("availability")}
                    />
                    {errors.availability && (
                      <p className="mt-1 text-[12px] font-medium text-red-500">
                        {errors.availability}
                      </p>
                    )}
                  </div>

                  {/* ================= COVER LETTER ================= */}
                  <div>
                    <label className="block mb-2 text-base font-semibold text-[#111827]">
                      Cover Letter *
                    </label>
                    <textarea
                      name="cover"
                      placeholder="Tell us why you're suitable for this role..."
                      value={form.cover}
                      onChange={handleChange}
                      className={`${inputClass("cover")} h-32`}
                    />
                    {errors.cover && (
                      <p className="mt-1 text-[12px] font-medium text-red-500">
                        {errors.cover}
                      </p>
                    )}
                  </div>

                  {/* ================= UPLOAD ================= */}
                  <div>
                    <label className="block mb-3 text-base font-semibold text-[#111827]">
                      Upload CV / Resume
                    </label>

                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />

                    <div
                      onClick={() => fileInputRef.current.click()}
                      className="border-2 border-dashed border-gray-300 rounded-2xl p-7 text-center hover:border-[#F15A24] transition-all cursor-pointer bg-[#FAFBFC] hover:bg-orange-50/10"
                    >
                      <Upload size={24} className="mx-auto text-gray-400" />

                      <p className="mt-3 text-sm font-bold text-gray-700">
                        {cvName
                          ? `Selected File: ${cvName}`
                          : "Click to select and upload your CV"}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        {cvName
                          ? "Ready for submission"
                          : "PDF, DOC, DOCX up to 5MB"}
                      </p>
                    </div>
                  </div>

                  {/* ================= SUBMIT ================= */}
                  <div className="pt-5 flex justify-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group min-w-[240px] h-14 px-8 rounded-2xl bg-[#ea6230] hover:bg-[#F15A24] text-white font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_12px_35px_rgba(17,24,39,0.12)] hover:shadow-[0_12px_35px_rgba(241,90,36,0.25)] disabled:opacity-50"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="animate-spin" size={16} />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <span className="group-hover:translate-x-1 transition">
                            →
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ApplyJob;
