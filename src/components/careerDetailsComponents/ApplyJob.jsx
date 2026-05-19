import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  DollarSign,
  MapPin,
  Star,
  Upload,
} from "lucide-react";

import { jobs } from "../../data/jobsData";

import { applyModalSchema, validateAll } from "../../utils/validationSchemas";

const ApplyJob = () => {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  // ================= STATES =================
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
  });

  const [errors, setErrors] = useState({});

  const [successOpen, setSuccessOpen] = useState(false);

  // ================= NOT FOUND =================
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-black text-[#111827]">Job Not Found</h2>
      </div>
    );
  }

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

  // ================= VALIDATION =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = await validateAll(applyModalSchema, form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // SUCCESS
    setSuccessOpen(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ================= INPUT CLASS =================
  const inputClass = (field) =>
    `w-full border rounded-2xl px-4 py-3 outline-none transition-all ${
      errors[field]
        ? "border-red-400 bg-red-50/40 focus:ring-2 focus:ring-red-300"
        : "border-gray-200 focus:ring-2 focus:ring-[#F15A24]"
    }`;

  return (
    <div className="min-h-screen bg-[#F5F7FA] py-6 sm:py-8 lg:py-10 overflow-hidden">
      {/* Glow */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#F15A24]/5 blur-[120px] pointer-events-none" />

      {/* ================= SUCCESS ================= */}
      {successOpen ? (
        <div className="max-w-xl mx-auto px-4">
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
              Application Reference: #NW2PK54HU
            </div>

            <NavLink
              to="/jobs"
              className="mt-8 inline-flex items-center justify-center h-13 px-7 rounded-2xl bg-[#111827] hover:bg-[#F15A24] text-white font-bold transition-all duration-300"
            >
              Back To Jobs
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ================= BACK BUTTON ================= */}
          <NavLink
            to="/jobs"
            className="inline-flex items-center gap-2 mb-6 text-[#111827] hover:text-[#F15A24] font-semibold transition-all"
          >
            <ArrowLeft size={18} />
            Back To Jobs
          </NavLink>

          {/* ================= JOB HERO CARD ================= */}
          <div className="relative rounded-[32px] border border-[#F15A24]/20 bg-white p-5 sm:p-7 lg:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#F15A24]/5 blur-[100px]" />

            <div className="relative z-10">
              {/* TAGS */}
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-1 bg-[#F15A24] text-white text-[11px] font-bold px-4 py-2 rounded-full">
                  <Star size={11} fill="white" />
                  Featured
                </div>

                <div className="bg-[#EEF4FF] text-[#155DFC] text-[11px] font-semibold px-4 py-2 rounded-full">
                  {job.type}
                </div>

                <div className="bg-[#155DFC] text-white text-[11px] font-semibold px-4 py-2 rounded-full">
                  {job.role}
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
                    <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-bold">
                      Location
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-[#111111]">
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
                    <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-bold">
                      Salary
                    </p>

                    <p className="mt-1 text-[15px] font-bold text-[#00A63E]">
                      {job.salary}
                    </p>
                  </div>
                </div>

                {/* Posted */}
                <div className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#FAFBFC] p-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F4F6F8] flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gray-500" />
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.1em] text-gray-400 font-bold">
                      Posted
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-[#111111]">
                      {job.posted}
                    </p>
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
                  {job.requirements.map((req, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-full bg-[#F4F6F8] text-[#4B5563] text-[13px] font-semibold"
                    >
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM CARD ================= */}
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

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* ================= PERSONAL INFO ================= */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#111827]">
                    First Name *
                  </label>

                  <input
                    name="firstName"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                    className={inputClass("firstName")}
                  />

                  {errors.firstName && (
                    <p className="mt-1 text-[12px] font-medium text-red-500">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#111827]">
                    Last Name *
                  </label>

                  <input
                    name="lastName"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                    className={inputClass("lastName")}
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
                  <label className="block mb-2 text-sm font-semibold text-[#111827]">
                    Email Address *
                  </label>

                  <input
                    name="email"
                    placeholder="john@email.com"
                    onChange={handleChange}
                    className={inputClass("email")}
                  />

                  {errors.email && (
                    <p className="mt-1 text-[12px] font-medium text-red-500">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 text-sm font-semibold text-[#111827]">
                    Phone Number *
                  </label>

                  <input
                    name="phone"
                    placeholder="+44 7XXX XXX XXX"
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

              {/* ================= ADDRESS ================= */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-[#111827]">
                  Address *
                </label>

                <input
                  name="address"
                  placeholder="Enter your address"
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
                  <label className="block mb-2 text-sm font-semibold text-[#111827]">
                    City *
                  </label>

                  <input
                    name="city"
                    placeholder="London"
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
                  <label className="block mb-2 text-sm font-semibold text-[#111827]">
                    Postcode *
                  </label>

                  <input
                    name="postcode"
                    placeholder="SW1A 1AA"
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
                  <label className="block mb-2 text-sm font-semibold text-[#111827]">
                    SIA License Number *
                  </label>

                  <input
                    name="license"
                    placeholder="Enter your license number"
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
                  <label className="block mb-2 text-sm font-semibold text-[#111827]">
                    Years of Experience *
                  </label>

                  <input
                    name="experience"
                    placeholder="2 Years"
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
                <label className="block mb-2 text-sm font-semibold text-[#111827]">
                  Availability *
                </label>

                <input
                  name="availability"
                  placeholder="Immediate / 2 Weeks"
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
                <label className="block mb-2 text-sm font-semibold text-[#111827]">
                  Cover Letter *
                </label>

                <textarea
                  name="cover"
                  placeholder="Tell us why you're suitable for this role..."
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
                <label className="block mb-3 text-sm font-semibold text-[#111827]">
                  Upload CV / Resume
                </label>

                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-7 text-center hover:border-[#F15A24] transition-all cursor-pointer bg-[#FAFBFC]">
                  <Upload size={24} className="mx-auto text-gray-400" />

                  <p className="mt-3 text-sm font-medium text-gray-600">
                    Upload your CV
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    PDF, DOC, DOCX up to 5MB
                  </p>
                </div>
              </div>

              {/* ================= SUBMIT ================= */}
              <div className="pt-5 flex justify-center">
                <button
                  type="submit"
                  className="group min-w-[220px] h-14 px-8 rounded-2xl bg-[#111827] hover:bg-[#F15A24] text-white font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_12px_35px_rgba(17,24,39,0.12)] hover:shadow-[0_12px_35px_rgba(241,90,36,0.25)]"
                >
                  Submit Application
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyJob;
