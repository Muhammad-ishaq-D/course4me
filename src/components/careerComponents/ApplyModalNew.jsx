import { useState } from "react";
import { X } from "lucide-react";

const ApplyModal = ({ job, onClose }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postcode: "",
    experience: "",
    availability: "",
    cover: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.firstName) newErrors.firstName = "Required";
    if (!form.lastName) newErrors.lastName = "Required";
    if (!form.email) newErrors.email = "Required";
    if (!form.phone) newErrors.phone = "Required";
    if (!form.city) newErrors.city = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert("Application Submitted ✅");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white w-[95%] max-w-6xl rounded-3xl p-8 relative shadow-2xl">

        {/* Close */}
        <button onClick={onClose} className="absolute right-6 top-6">
          <X />
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold">Apply for Position</h2>
        <p className="text-gray-500 mt-1">
          {job.title} at {job.company}
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-8">

          {/* LEFT */}
          <div>
            <div className="bg-gradient-to-br from-[#2f3a47] to-[#1e293b] text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="mt-2">{job.company}</p>
              <p className="mt-2">{job.location}</p>
              <p className="mt-2 text-[#F8510C]">{job.salary}</p>
              <p className="mt-2">{job.type}</p>
            </div>

            <div className="mt-6 bg-[#F3F4F6] p-5 rounded-xl">
              <p className="font-semibold mb-3">Application Tips</p>
              <ul className="text-sm space-y-2">
                <li>✔ Fill all required fields</li>
                <li>✔ Provide accurate info</li>
                <li>✔ Highlight experience</li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              <input name="firstName" placeholder="First Name" onChange={handleChange}
                className="input" />
              <input name="lastName" placeholder="Last Name" onChange={handleChange}
                className="input" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input name="email" placeholder="Email" onChange={handleChange}
                className="input" />
              <input name="phone" placeholder="Phone" onChange={handleChange}
                className="input" />
            </div>

            <input name="address" placeholder="Address" onChange={handleChange}
              className="input w-full" />

            <div className="grid grid-cols-2 gap-4">
              <input name="city" placeholder="City" onChange={handleChange}
                className="input" />
              <input name="postcode" placeholder="Postcode" onChange={handleChange}
                className="input" />
            </div>

            <textarea name="cover" placeholder="Why are you suitable?"
              onChange={handleChange}
              className="input w-full h-24" />

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button onClick={onClose}
                className="px-6 py-3 rounded-full bg-gray-200">
                Cancel
              </button>

              <button onClick={handleSubmit}
                className="px-6 py-3 rounded-full bg-[#1E1E1E] text-white">
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