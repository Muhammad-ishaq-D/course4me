import { useState } from "react";
import { Upload } from "lucide-react";
import {
  X,
  CheckCircle,
  Building2,
  MapPin,
  DollarSign,
  Check,
  User
} from "lucide-react";

const ApplyModal = ({ job, onClose }) => {
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
    cover: ""
  });

  const [errors, setErrors] = useState({});
  const [successOpen, setSuccessOpen] = useState(false); // ✅ HERE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.phone) newErrors.phone = "Required";
    if (!form.address) newErrors.address = "Required";
    if (!form.city) newErrors.city = "Required";
    if (!form.postcode) newErrors.postcode = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSuccessOpen(true); // ✅ HERE
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {successOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[60]">

          <div className="bg-white w-[90%] max-w-md rounded-3xl p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

            {/* Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-[#DCFCE7] flex items-center justify-center">
              <CheckCircle size={50} className="text-[#16A34A]" />
            </div>

            {/* Title */}
            <h2 className="text-[26px] font-bold text-[#2C3E50] mt-6">
              Application Submitted!
            </h2>

            {/* Description */}
            <p className="text-[#4A5565] mt-4 text-sm leading-relaxed">
              Thank you for applying to <span className="font-bold text-[#4A5565]">{job.title}</span> at {job.company}.
              We’ll review your application and contact you at <span className="font-bold text-[#4A5565]">your email</span> within 48 hours.
            </p>

            {/* Reference Box */}
            <div className="mt-6 border border-[#F8510C] bg-[#F15A2433] text-[#2C3E50] px-6 py-3 rounded-xl text-sm font-semibold">
              Application Reference: #NW2PK54HU
            </div>

            {/* Button */}
            {/* <button
              onClick={onClose}
              className="mt-6 px-8 py-3 bg-[#1E293B] text-white rounded-full"
            >
              Close
            </button> */}

          </div>
        </div>
      )}
      {/* Modal */}
      <div className="bg-white w-[95%] max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 font-bold text-[#364153] hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-[28px] font-bold text-[#1E293B]">
          Apply for Position
        </h2>
        <p className="text-gray-500 mt-1">
          {job.title} at {job.company}
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-8">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Job Card */}
            <div className="bg-gradient-to-br from-[#2f3a47] to-[#1e293b] text-white rounded-2xl p-6">

              <h3 className="text-lg font-semibold">{job.title}</h3>

              <div className="mt-5 space-y-4 text-sm">

                <div className="flex items-start gap-3">
                  <Building2 size={16} className="text-[#F8510C] mt-1" />
                  <div>
                    <p className="text-gray-300 text-xs">Company</p>
                    <p className="font-medium">{job.company}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#F8510C] mt-1" />
                  <div>
                    <p className="text-gray-300 text-xs">Location</p>
                    <p className="font-medium">{job.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign size={16} className="text-[#F8510C] mt-1" />
                  <div>
                    <p className="text-gray-300 text-xs">Salary</p>
                    <p className="font-medium">{job.salary}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check size={16} className="text-[#F8510C] mt-1" />
                  <div>
                    <p className="text-gray-300 text-xs">Type</p>
                    <p className="font-medium">{job.type}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Tips */}
            <div className="bg-[#F3F4F6] p-5 rounded-xl">
              <p className="font-semibold mb-4 text-[#1E293B]">
                Application Tips
              </p>

              <div className="space-y-3 text-sm text-[#4A5565]">
                <div className="flex items-center text-[#4A5565] gap-2">
                  <CheckCircle size={16} className="text-[#00C950]" />
                  Ensure all required fields are completed
                </div>
                <div className="flex items-center text-[#4A5565] gap-2">
                  <CheckCircle size={16} className="text-[#00C950]" />
                  Provide accurate SIA license details
                </div>
                <div className="flex items-center text-[#4A5565] gap-2">
                  <CheckCircle size={16} className="text-[#00C950]" />
                  Highlight relevant experience
                </div>
                <div className="flex items-center text-[#4A5565] gap-2">
                  <CheckCircle size={16} className="text-[#00C950]" />
                  Attach your CV for faster processing
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="space-y-5">

            <h3 className="font-bold text-[#2C3E50] flex items-center gap-2">
              <User size={18} className="text-[#F8510C]" />
              Personal Information
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-[#1E293B]">First Name *</label>
                <input name="firstName" placeholder="John"
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none" />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1E293B]">Last Name *</label>
                <input name="lastName" placeholder="Smith"
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-[#1E293B]">Email Address *</label>
                <input name="email" placeholder="john.smith@email.com"
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none" />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1E293B]">Phone Number *</label>
                <input name="phone" placeholder="07XXX XXX XXX"
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none" />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-[#1E293B]">Address *</label>
              <input name="address" placeholder="123 Main Street"
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 text-sm outline-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-[#1E293B]">City *</label>
                <input name="city" placeholder="London"
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none" />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1E293B]">Postcode *</label>
                <input name="postcode" placeholder="SW1A 1AA"
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none" />
              </div>
            </div>

            {/* SIA Section */}
            <h3 className="font-bold text-[#2C3E50] flex items-center gap-2">
              <CheckCircle size={18} className="text-[#F8510C]" />
              SIA License Information
            </h3>

            {/* License */}
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium text-[#2C3E50]">
                  Do you have a valid SIA License? *
                </label>
                <input
                  placeholder=""
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#2C3E50]">
                  SIA License Number (if applicable)
                </label>
                <input
                  name="license"
                  placeholder="Enter license number"
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none mt-1"
                />
              </div>

            </div>

            {/* Experience + Availability */}
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium text-[#2C3E50]">
                  Years of Experience *
                </label>
                <input
                  name="experience"
                  placeholder=""
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none mt-1"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#2C3E50]">
                  Availability *
                </label>
                <input
                  name="availability"
                  placeholder=""
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none mt-1"
                />
              </div>

            </div>

            {/* Cover Letter */}
            <div>
              <label className="text-sm font-medium text-[#2C3E50]">
                Cover Letter / Why are you suitable? *
              </label>
              <textarea
                name="cover"
                placeholder="Tell us why you're the perfect candidate for this role..."
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 text-sm outline-none h-28 mt-1"
              />
            </div>

            {/* Upload */}

            <div>
              <label className="text-sm font-medium text-[#2C3E50]">
                Upload CV (Optional)
              </label>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center mt-2 flex flex-col items-center justify-center gap-2">

                {/* Upload Icon */}
                <Upload size={22} className="text-gray-400" />

                {/* Text */}
                <p className="text-sm text-gray-500">
                  Click to upload or drag and drop
                </p>

                <p className="text-xs text-gray-400">
                  PDF, DOC, DOCX up to 5MB
                </p>

              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#F3F4F6] text-[#364153]"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                className="px-8 py-3 rounded-full bg-[#1E293B] text-white"
              >
                Submit Application →
              </button>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
};

export default ApplyModal;