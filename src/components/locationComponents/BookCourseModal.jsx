import React, { useState } from "react";
import {
  X, MapPin, Clock, Calendar, Phone, Mail, CheckCircle
} from "lucide-react";
import { bookingModalSchema, validateAll } from "../../utils/validationSchemas";
import toast from 'react-hot-toast';

const BookCourseModal = ({ centre, onClose, showModal }) => {
  if (!centre || !showModal) return null;

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', course: '', date: '', additionalInfo: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async () => {
    const errs = await validateAll(bookingModalSchema, form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      toast.success("Booking submitted successfully!");
      onClose();
    }
  };

  const ic = (field) =>
    `border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:ring-red-400/40 bg-red-50/30"
        : "focus:ring-[#F15A24]"
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[1px] px-4">
      <div className="bg-white w-full max-w-[900px] h-fit max-h-[85vh] rounded-[32px] shadow-2xl relative flex flex-col p-6 md:p-8">

        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-black transition">
          <X size={22} />
        </button>

        <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-[#2f3a47]">Book Your Course</h2>
          <p className="text-gray-500 mt-1">{centre.name}</p>
        </div>

        <div className="flex-1 overflow-y-auto pr-4 custom-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* LEFT SIDE */}
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={centre.image} alt={centre.city} className="w-full h-[220px] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
                  <h3 className="text-xl font-semibold">{centre.city}</h3>
                </div>
              </div>

              <div className="mt-6 bg-[#f7f9fb] rounded-2xl p-5 space-y-5">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-[#F15A24]" />
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">LOCATION</div>
                    <div className="text-sm text-gray-700">{centre.address}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-[#F15A24]" />
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">OPENING HOURS</div>
                    <div className="text-sm text-gray-700">{centre.hours}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Calendar className="w-5 h-5 text-[#F15A24]" />
                  <div>
                    <div className="text-xs text-gray-400 font-semibold">AVAILABILITY</div>
                    <div className="text-sm text-[#0fa968] font-medium">Next available: {centre.next}</div>
                  </div>
                </div>
                <div className="pt-4 border-t space-y-2">
                  <div className="text-xs text-gray-400 font-semibold">NEED HELP?</div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Phone className="w-4 h-4 text-[#F15A24]" /> {centre.phone}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Mail className="w-4 h-4 text-[#F15A24]" /> {centre.email}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#2f3a47] mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input placeholder="First Name *" value={form.firstName}
                      onChange={e => handleChange('firstName', e.target.value)} className={ic('firstName')} />
                    {errors.firstName && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <input placeholder="Last Name *" value={form.lastName}
                      onChange={e => handleChange('lastName', e.target.value)} className={ic('lastName')} />
                    {errors.lastName && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <input placeholder="Email Address *" value={form.email}
                      onChange={e => handleChange('email', e.target.value)} className={ic('email')} />
                    {errors.email && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <input placeholder="Phone Number *" value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)} className={ic('phone')} />
                    {errors.phone && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#2f3a47] mb-4">Course Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <select value={form.course} onChange={e => handleChange('course', e.target.value)} className={ic('course')}>
                      <option value="">Select Course *</option>
                      {centre.courses.map((course, i) => (
                        <option key={i}>{course}</option>
                      ))}
                    </select>
                    {errors.course && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.course}</p>}
                  </div>
                  <div>
                    <input type="date" value={form.date}
                      onChange={e => handleChange('date', e.target.value)} className={ic('date')} />
                    {errors.date && <p className="text-red-500 text-[11px] font-semibold mt-1">{errors.date}</p>}
                  </div>
                </div>

                <textarea rows="4" placeholder="Additional Information (Optional)"
                  value={form.additionalInfo} onChange={e => handleChange('additionalInfo', e.target.value)}
                  className="mt-4 w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F15A24]" />
              </div>

              <div className="bg-[#f1f9ea] border border-[#d4f3b2] rounded-2xl p-5 text-sm text-gray-700">
                <div className="flex items-center gap-2 font-semibold mb-2">
                  <CheckCircle className="w-4 h-4 text-[#0fa968]" /> What happens next?
                </div>
                <ul className="space-y-1 ml-6 list-disc">
                  <li>We'll review your booking request</li>
                  <li>You'll receive confirmation within 24 hours</li>
                  <li>Payment details will be sent via email</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose}
            className="px-5 py-2 md:px-6 md:py-3 text-xs md:text-lg rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
            Cancel
          </button>
          <button onClick={handleSubmit}
            className="px-5 py-2 md:px-8 md:py-3 text-xs md:text-lg rounded-full bg-[#2f3a47] text-white hover:bg-black transition shadow-md">
            Submit Booking →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCourseModal;