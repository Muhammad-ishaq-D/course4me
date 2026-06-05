import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Lock,
  Clock,
  User,
  MapPin,
  Check,
  Phone,
  Mail,
  Calendar,
  Edit2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import bookingService from "../../api/services/bookingService";
import courseService from "../../api/services/courseService";
import { useSearchParams } from "react-router-dom";
import {
  checkoutDetailsSchema,
  checkoutBillingSchema,
  checkoutSocialDetailsSchema,
  validateAll,
  validateField,
} from "../../utils/validationSchemas";
import authService from "../../api/services/authService";
import { useAuth } from "../../context/AuthContext";
import CheckoutSkeleton from "../../components/ui/CheckoutSkeleton";
import RightSidebar from "../../components/checkoutComponents/RightSidebar";
import StripePaymentModal from "../../components/modals/StripePaymentModal";
import SocialLogin from "../Authentication/components/SocialLogin";
import BookingConfirmed from "../../components/coursesComponents/booking/BookingConfirmed";
import StepCheck from "../../components/ui/checkoutUI/StepCheck";
import StepNumber from "../../components/ui/checkoutUI/StepNumber";
import FieldInput from "../../components/ui/checkoutUI/FieldInput";
import SaveBtn from "../../components/ui/checkoutUI/SaveBtn";

/* ═══════════════════════════════════════════════════════ */
/*                  MAIN CHECKOUT COMPONENT                */
/* ═══════════════════════════════════════════════════════ */
const CourseCheckout = () => {
  const navigate = useNavigate();
  const { login: authLogin, user } = useAuth();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  // New state for tracking booking status (PAID, PENDING, etc.)
  const [bookingStatus, setBookingStatus] = React.useState(null);
  // Existing state for booking reference (used for success page)
  const [bookingRef, setBookingRef] = useState("");
  const [error, setError] = useState("");
  const [existingBookingId, setExistingBookingId] = useState(null);
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 12);

  // Dynamic Data
  const courseId = searchParams.get("courseId");
  const scheduleId = searchParams.get("scheduleId");
  const plan = (searchParams.get("plan") || "Flexi+").trim();

  const [courseData, setCourseData] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [price, setPrice] = useState(0);

  // Form state
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });
  const [billing, setBilling] = useState({
    postcode: "",
    addr1: "",
    addr2: "",
    city: "",
  });
  const [easyApply, setEasyApply] = useState("get"); // "get" | "self"
  const [payment, setPayment] = useState("card");
  const [agree1, setAgree1] = useState(true);
  const [agree2, setAgree2] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);

  // Validation state
  const [detailsErrors, setDetailsErrors] = useState({});
  const [billingErrors, setBillingErrors] = useState({});


  // Clear individual detail error on change
  const updateDetail = (field, value) => {
    setDetails((d) => ({ ...d, [field]: value }));
    if (detailsErrors[field]) {
      setDetailsErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    // Also clear alreadyRegistered if email changes
    if (field === "email" && detailsErrors.alreadyRegistered) {
      setDetailsErrors((prev) => ({ ...prev, alreadyRegistered: undefined }));
    }
  };

  // Clear individual billing error on change
  const updateBilling = (field, value) => {
    setBilling((b) => ({ ...b, [field]: value }));
    if (billingErrors[field]) {
      setBillingErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Check email availability in real-time
  const checkEmailAvailability = async (email) => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email.trim())) return;
    try {
      console.log("Checking email availability for:", email.trim());
      const res = await authService.checkEmail(email.trim());
      console.log("Email check result:", res);
      if (res.exists) {
        setDetailsErrors((prev) => ({ ...prev, alreadyRegistered: true }));
      } else {
        setDetailsErrors((prev) => ({ ...prev, alreadyRegistered: undefined }));
      }
    } catch (e) {
      console.error("Email check failed:", e);
    }
  };

  // Handle Inline Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setDetailsErrors({});
    setLoading(true);
    try {
      const res = await authLogin(loginForm);
      if (res.success) {
        const { user } = res;
        const updatedDetails = {
          ...details,
          firstName: user.name?.split(" ")[0] || details.firstName,
          lastName:
            user.name?.split(" ").slice(1).join(" ") || details.lastName,
          email: user.email,
          mobile: user.phone || details.mobile,
          dob: user.dob || details.dob,
        };
        setDetails(updatedDetails);

        // If profile is incomplete, stay on step 1 to let them fill missing info
        if (!updatedDetails.mobile || !updatedDetails.dob) {
          setIsLoggingIn(false); // Switch back to details view but with fields populated
          setDetailsErrors({
            mobile: !updatedDetails.mobile
              ? "Mobile number is missing in your profile"
              : null,
            dob: !updatedDetails.dob
              ? "Date of birth is missing in your profile"
              : null,
          });
        } else {
          setActiveStep(2);
        }
      }
    } catch (err) {
      setDetailsErrors({
        login: err.response?.data?.message || "Invalid email or password",
      });
    } finally {
      setLoading(false);
    }
  };

  const validateStep = async (step) => {
    if (step === 1) {
      // If user is already logged in, only validate mobile & dob
      if (user) {
        const errs = await validateAll(checkoutSocialDetailsSchema, details);
        setDetailsErrors(errs);
        return Object.keys(errs).length === 0;
      }

      const errs = await validateAll(checkoutDetailsSchema, details);

      if (
        details.email &&
        /^\S+@\S+\.\S+$/.test(details.email.trim()) &&
        !localStorage.getItem("token")
      ) {
        setCheckingEmail(true);
        try {
          const res = await authService.checkEmail(details.email.trim());
          if (res.exists) {
            errs.alreadyRegistered = true;
            errs.email = "This email is already registered. Please login.";
          }
        } catch (e) {
          console.error("Check email error:", e);
        } finally {
          setCheckingEmail(false);
        }
      }

      setDetailsErrors(errs);
      return Object.keys(errs).length === 0;
    }
    if (step === 2) {
      const errs = await validateAll(checkoutBillingSchema, billing);
      setBillingErrors(errs);
      return Object.keys(errs).length === 0;
    }
    return true;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!courseId) {
          setIsLoading(false);
          return;
        }

        const response = await courseService.getCourseById(courseId);
        const course = response.data.data;
        setCourseData(course);

        // Find selected schedule
        let foundSchedule = null;
        if (scheduleId) {
          for (const loc of course.locations) {
            const sch = loc.schedules.find(
              (s) => s._id.toString() === scheduleId.toString(),
            );
            if (sch) {
              foundSchedule = { ...sch, locationName: loc.name };
              break;
            }
          }
        }
        setSelectedSchedule(foundSchedule);

        // Calculate Price
        let basePrice =
          foundSchedule?.price || course.pricing?.basePrice || 139.99;
        if (plan === "Saver") basePrice -= 40;
        if (plan === "Premium") basePrice += 120;
        setPrice(basePrice);
      } catch (err) {
        console.error("Error fetching course data:", err);
        setError("Could not load course details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [courseId, scheduleId, plan]);

  useEffect(() => {
    const existingBookingId = searchParams.get("bookingId");
    if (existingBookingId) {
      // User is returning to complete payment
      bookingService.createPaymentIntent(existingBookingId).then(piRes => {
        if (piRes.data.success && piRes.data.clientSecret) {
          setClientSecret(piRes.data.clientSecret);
          setIsSubmitting(false);
          setPaymentModalOpen(true);
        } else {
          setError("Failed to initialize payment for existing booking. " + (piRes.data?.message || ""));
        }
      }).catch(err => {
        setError(err.response?.data?.message || "Could not load payment session. You may have already completed this payment.");
      });
    }
  }, [searchParams]);

  // Close modal and reset submission state if booking becomes PAID (e.g., user navigated back after successful payment)
  useEffect(() => {
    if (bookingStatus === 'PAID' && isPaymentModalOpen) {
      setPaymentModalOpen(false);
      setIsSubmitting(false);
      setExistingBookingId(null);
    }
  }, [bookingStatus, isPaymentModalOpen]);

  // Load current booking status for this course
  React.useEffect(() => {
    if (user && courseData?._id) {
      bookingService.getMyBookingStatus(courseData._id).then(res => {
        if (res.data?.success) {
          setBookingStatus(res.data.status);
        }
      }).catch(err => {
        console.error('Failed to fetch booking status', err);
      });
    }
  }, [user, courseData?._id]);
  useEffect(() => {
    if (user) {
      const updatedDetails = {
        ...details,
        firstName: user.name?.split(" ")[0] || details.firstName,
        lastName: user.name?.split(" ").slice(1).join(" ") || details.lastName,
        email: user.email || details.email,
        mobile: user.phone || details.mobile,
        dob: user.dob || details.dob,
      };
      setDetails(updatedDetails);

      // If user has all required info, auto-advance to step 2 if we are on step 1
      if (
        activeStep === 1 &&
        updatedDetails.mobile &&
        updatedDetails.dob &&
        updatedDetails.firstName
      ) {
        setActiveStep(2);
      }
    }
  }, [user]);

  useEffect(() => {
    if (isLoading || isConfirmed) return;
    const id = setInterval(() => setTimeLeft((p) => (p > 0 ? p - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [isLoading, isConfirmed]);

  const fmt = (s) =>
    `${Math.floor(s / 60)
      .toString()
      .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const handlePayment = async () => {
    if (!agree2) {
      setError("Please agree to the Terms of Service before proceeding.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      if (existingBookingId) {
        // Resume payment for existing pending booking
        const piRes = await bookingService.createPaymentIntent(existingBookingId);
        if (piRes.data.success && piRes.data.clientSecret) {
          setClientSecret(piRes.data.clientSecret);
          if (piRes.data.bookingReference) {
            setBookingRef(piRes.data.bookingReference);
          }
          setPaymentModalOpen(true);
        } else {
          setError("Failed to initialize payment for existing booking. " + (piRes.data?.message || ""));
        }
        setIsSubmitting(false);
        return;
      }

      const bookingPayload = {
        courseId: courseData._id,
        session: {
          scheduleId: selectedSchedule?._id,
          location: selectedSchedule?.locationName || "Online",
          startDate: selectedSchedule?.startDate,
        },
        customerDetails: {
          firstName: details.firstName,
          lastName: details.lastName,
          email: details.email,
          phone: details.mobile,
          dob: details.dob,
          password: details.password,
        },
        billingAddress: {
          postcode: billing.postcode,
          line1: billing.addr1,
          line2: billing.addr2,
          city: billing.city,
        },
        packageName: plan,
        options: {
          easyApply: easyApply === "get",
        },
        paymentMethod: payment,
        totalAmount: price + (easyApply === "get" ? 149.99 : 0),
      };

      // Create booking first
      const response = await bookingService.createBooking(bookingPayload);
      if (response.data.success) {
        const bookingId = response.data.data._id;
        const bookingReference = response.data.data.bookingReference;
        setBookingRef(bookingReference);
        // Create PaymentIntent and get clientSecret
        const piRes = await bookingService.createPaymentIntent(bookingId);
        if (piRes.data.success && piRes.data.clientSecret) {
          setClientSecret(piRes.data.clientSecret);
          setIsSubmitting(false);
          setPaymentModalOpen(true);
        } else {
          setError("Failed to initialize payment.");
        }
      } else {
        setError(response.data.message || "Failed to create booking.");
      }
    } catch (err) {
      console.error("Booking Error:", err);
      // Show specific validation errors from backend if available
      const backendErrors = err.response?.data?.errors;
      if (backendErrors && backendErrors.length > 0) {
        setError(backendErrors.map(e => e.message).join(" | "));
      } else {
        setError(
          err.response?.data?.message ||
          "An error occurred during booking. Please try again.",
        );
        if (err.response?.data?.existingBookingId && err.response?.data?.existingBookingStatus === 'PENDING') {
          setExistingBookingId(err.response.data.existingBookingId);
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Skeleton ── */
  if (isLoading) {
    return <CheckoutSkeleton />;
  }

  if (isConfirmed) {
    const formattedDate = selectedSchedule?.startDate
      ? new Date(selectedSchedule.startDate).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      : "Pending Date";

    return (
      <BookingConfirmed
        name={`${details.firstName} ${details.lastName}`}
        email={details.email}
        mobile={details.mobile}
        billing={billing}
        courseName={courseData?.title || "Course Details Pending"}
        plan={plan}
        price={price + (easyApply === "get" ? 149.99 : 0)}
        date={formattedDate}
        easyApply={easyApply === "get"}
        bookingRef={bookingRef}
        navigate={navigate}
      />
    );
  }

  /* ── Completed step header ── */
  const CompletedStep = ({ stepNum, title, summary, onEdit }) => (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <StepCheck />
        <div>
          <p className="text-[14px] font-black text-[#1C1C1C]">{title}</p>
          {summary.map((l, i) => (
            <p key={i} className="text-[13px] text-gray-500">
              {l}
            </p>
          ))}
        </div>
      </div>
      <button
        onClick={onEdit}
        className="flex items-center gap-1.5 text-[#F15A24] text-[12px] font-bold hover:underline shrink-0"
      >
        <Edit2 size={13} /> Edit
      </button>
    </div>
  );

  /* ── Collapsed step header ── */
  const CollapsedStep = ({ stepNum, title, badge }) => (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
      <StepNumber n={stepNum} active={false} />
      <span className="text-[14px] font-bold text-gray-400">{title}</span>
      {badge && (
        <span className="inline-block px-2 py-0.5 bg-[#F15A24] text-white text-[9px] font-black uppercase tracking-widest rounded">
          {badge}
        </span>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC]  pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-[#1C1C1C] transition-colors text-sm font-bold mb-4"
        >
          <ArrowLeft size={16} /> Back
        </button>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-extrabold text-[#1C1C1C]">
                Secure Checkout
              </h1>
              <Lock size={18} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Your seat is reserved. Complete your booking in</span>
              <span className="flex items-center gap-1.5 text-[#F15A24] font-black">
                <Clock size={14} /> {fmt(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          {/* ══ LEFT COLUMN ══ */}
          <div className="flex-1 w-full space-y-3">
            {/* ── Step 1: Your Details ── */}
            {activeStep > 1 ? (
              <CompletedStep
                stepNum={1}
                title="Your Details"
                onEdit={() => setActiveStep(1)}
                summary={[
                  `${details.firstName} ${details.lastName}`,
                  details.email,
                  details.mobile,
                  details.dob,
                ]}
              />
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={1} active />
                  <span className="text-[14px] font-black text-[#1C1C1C]">
                    Your Details
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-[13px] font-medium flex items-center gap-2 mb-2">
                      <AlertCircle size={16} />
                      {error}
                    </div>
                  )}
                  {detailsErrors.alreadyRegistered && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-[13px] font-medium flex items-center gap-2 mb-2">
                      <AlertCircle size={16} />
                      User already registered. Please login to proceed.
                    </div>
                  )}

                  {user ? (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl mb-4">
                        <p className="text-[13px] text-blue-700 font-semibold">
                          Please complete your profile with your mobile number
                          and date of birth to proceed.
                        </p>
                      </div>
                      <FieldInput
                        label="Mobile number"
                        placeholder="Mobile number"
                        type="tel"
                        value={details.mobile}
                        onChange={(v) => updateDetail("mobile", v)}
                        icon={Phone}
                        error={detailsErrors.mobile}
                      />
                      <FieldInput
                        label="Date of birth"
                        type="date"
                        value={details.dob}
                        onChange={(v) => updateDetail("dob", v)}
                        icon={Calendar}
                        error={detailsErrors.dob}
                      />
                      <SaveBtn
                        loading={checkingEmail}
                        onClick={async () => {
                          if (await validateStep(1)) setActiveStep(2);
                        }}
                      />
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <p className="text-[13px] text-gray-500 font-bold mb-4 text-center uppercase tracking-wider">
                          Quick sign-in with
                        </p>
                        <SocialLogin />
                        <div className="relative my-6">
                          <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-100"></span>
                          </div>
                          <div className="relative flex justify-center text-xs uppercase text-gray-400 font-bold">
                            <span className="bg-white px-4 tracking-widest">
                              or use email
                            </span>
                          </div>
                        </div>
                      </div>

                      {isLoggingIn ? (
                        /* ── Inline Login Fields ── */
                        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl mb-4">
                            <p className="text-[13px] text-[#F15A24] font-semibold">
                              Login to your account to proceed with your
                              booking.
                            </p>
                          </div>
                          <FieldInput
                            label="Email address"
                            placeholder="john.smith@email.com"
                            type="email"
                            value={loginForm.email}
                            onChange={(v) =>
                              setLoginForm((prev) => ({ ...prev, email: v }))
                            }
                            icon={Mail}
                            error={detailsErrors.email}
                          />
                          <FieldInput
                            label="Password"
                            placeholder="••••••••"
                            type="password"
                            value={loginForm.password}
                            onChange={(v) =>
                              setLoginForm((prev) => ({ ...prev, password: v }))
                            }
                            icon={Lock}
                            error={detailsErrors.password}
                          />
                          <div className="flex flex-col gap-3 pt-2">
                            {detailsErrors.login && (
                              <p className="text-red-500 text-xs font-bold text-center">
                                {detailsErrors.login}
                              </p>
                            )}
                            <button
                              onClick={handleLogin}
                              disabled={loading}
                              className="bg-[#F15A24] cursor-pointer text-white px-8 py-3.5 rounded-lg font-black text-sm hover:bg-[#b53a0d] active:scale-95 transition-all mt-2 flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                              {loading && (
                                <Loader2 size={16} className="animate-spin" />
                              )}
                              Login & Continue
                            </button>
                            <button
                              onClick={() => setIsLoggingIn(false)}
                              className="text-[13px] text-gray-500 font-bold cursor-pointer hover:text-[#F15A24] transition-colors"
                            >
                              Don't have an account? Register here
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* ── Registration Fields ── */
                        <>
                          <div className="flex gap-4">
                            <FieldInput
                              label="First name"
                              placeholder="First name"
                              value={details.firstName}
                              onChange={(v) => updateDetail("firstName", v)}
                              icon={User}
                              error={detailsErrors.firstName}
                            />
                            <FieldInput
                              label="Last name"
                              placeholder="Last name"
                              value={details.lastName}
                              onChange={(v) => updateDetail("lastName", v)}
                              icon={User}
                              error={detailsErrors.lastName}
                            />
                          </div>
                          <FieldInput
                            label="Email address"
                            placeholder="Email address"
                            type="email"
                            value={details.email}
                            onChange={(v) => updateDetail("email", v)}
                            onBlur={() => checkEmailAvailability(details.email)}
                            icon={Mail}
                            error={detailsErrors.email}
                          />
                          <FieldInput
                            label="Mobile number"
                            placeholder="Mobile number"
                            type="tel"
                            value={details.mobile}
                            onChange={(v) => updateDetail("mobile", v)}
                            icon={Phone}
                            error={detailsErrors.mobile}
                          />
                          <FieldInput
                            label="Date of birth"
                            type="date"
                            value={details.dob}
                            onChange={(v) => updateDetail("dob", v)}
                            icon={Calendar}
                            error={detailsErrors.dob}
                          />

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FieldInput
                              label="Create Password"
                              placeholder="••••••••"
                              type="password"
                              value={details.password}
                              onChange={(v) => updateDetail("password", v)}
                              icon={Lock}
                              error={detailsErrors.password}
                            />
                            <FieldInput
                              label="Confirm Password"
                              placeholder="••••••••"
                              type="password"
                              value={details.confirmPassword}
                              onChange={(v) =>
                                updateDetail("confirmPassword", v)
                              }
                              icon={Lock}
                              error={detailsErrors.confirmPassword}
                            />
                          </div>

                          <SaveBtn
                            loading={checkingEmail}
                            onClick={async () => {
                              if (await validateStep(1)) setActiveStep(2);
                            }}
                          />

                          <div className="text-center pt-2">
                            <p className="text-[13px] text-gray-500 font-medium">
                              Already registered?{" "}
                              <button
                                onClick={() => setIsLoggingIn(true)}
                                className="text-[#F15A24] font-bold cursor-pointer hover:underline"
                              >
                                Please sign in
                              </button>
                            </p>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* ── Step 2: Billing Address ── */}
            {activeStep > 2 ? (
              <CompletedStep
                stepNum={2}
                title="Billing Address"
                onEdit={() => setActiveStep(2)}
                summary={[billing.addr1, billing.addr2, billing.city].filter(
                  Boolean,
                )}
              />
            ) : activeStep === 2 ? (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={2} active />
                  <span className="text-[14px] font-black text-[#1C1C1C]">
                    Billing Address
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-[13px] text-gray-500">
                    Enter your postcode and select your address.
                  </p>
                  <FieldInput
                    label="Post code"
                    placeholder="Post code"
                    value={billing.postcode}
                    onChange={(v) => updateBilling("postcode", v)}
                    icon={MapPin}
                    error={billingErrors.postcode}
                  />
                  <FieldInput
                    label="Address line 1"
                    placeholder="Address line 1"
                    value={billing.addr1}
                    onChange={(v) => updateBilling("addr1", v)}
                    error={billingErrors.addr1}
                  />
                  <FieldInput
                    label="Address line 2"
                    placeholder="Address line 2"
                    value={billing.addr2}
                    onChange={(v) => updateBilling("addr2", v)}
                  />
                  <FieldInput
                    label="City / Town"
                    placeholder="City / Town"
                    value={billing.city}
                    onChange={(v) => updateBilling("city", v)}
                    icon={MapPin}
                    error={billingErrors.city}
                  />
                  <SaveBtn
                    onClick={async () => {
                      if (await validateStep(2)) setActiveStep(3);
                    }}
                  />
                </div>
              </div>
            ) : (
              <CollapsedStep stepNum={2} title="Billing Address" />
            )}

            {/* ── Step 3: EasyApply ── */}
            {activeStep > 3 ? (
              <CompletedStep
                stepNum={3}
                title="Zero-Hassle Application Service - EasyApply™"
                onEdit={() => setActiveStep(3)}
                summary={[
                  easyApply === "get"
                    ? "Included EasyApply™"
                    : "I will apply myself",
                ]}
              />
            ) : activeStep === 3 ? (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center flex-wrap gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={3} active />
                  <span className="text-[14px] font-black text-[#1C1C1C]">
                    Zero-Hassle Application Service - EasyApply™
                  </span>
                  <span className="inline-block px-2 py-0.5 bg-[#F15A24] text-white text-[9px] font-black uppercase tracking-widest rounded">
                    Recommended
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-[13px] text-gray-500">
                    The hassle-free way to get your licence. We'll prepare your
                    application and arrange all the requirements including your
                    DBS (criminality) check.
                  </p>

                  {/* Get EasyApply option */}
                  <div
                    onClick={() => setEasyApply("get")}
                    className={`rounded-xl border-2 p-4 cursor-pointer transition-all ${easyApply === "get" ? "border-[#F15A24] bg-blue-50/30" : "border-gray-200 hover:border-[#ba532d]"}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${easyApply === "get" ? "border-[#F15A24]" : "border-gray-300"}`}
                        >
                          {easyApply === "get" && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#F15A24]" />
                          )}
                        </div>
                        <span className="text-[14px] font-black text-[#1C1C1C]">
                          Get EasyApply
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-black text-[#1C1C1C]">
                          £149.99
                        </span>
                        {easyApply === "get" && (
                          <Check size={16} className="text-[#F15A24]" />
                        )}
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {[
                        "Includes all fees including £37 licence fee and £36 DBS fees",
                        "100% money-back guarantee (No licence - No fee promise)",
                        "A dedicated licence manager will prepare your application",
                        "Avoids delays in processing time",
                        "Complete peace of mind - we take all the risks",
                      ].map((f, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-[12px] text-gray-600"
                        >
                          <Check
                            size={12}
                            className="text-[#F15A24] shrink-0"
                          />{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Self apply option */}
                  <div
                    onClick={() => setEasyApply("self")}
                    className={`rounded-xl border-2 p-4 cursor-pointer transition-all ${easyApply === "self" ? "border-[#F15A24]" : "border-gray-200 hover:border-[#d25e33]"}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${easyApply === "self" ? "border-[#F15A24]" : "border-gray-300"}`}
                      >
                        {easyApply === "self" && (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#F15A24]" />
                        )}
                      </div>
                      <span className="text-[14px] font-black text-[#1C1C1C]">
                        I will apply myself
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {[
                        "You take all the risk of the application",
                        "You will have to arrange a valid DBS check",
                        "You will need a solicitor or a person of standing in the community to endorse your photographs",
                        "Your application is not checked by an expert before submission",
                      ].map((f, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[12px] text-gray-500"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#F15A24] shrink-0" />{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="flex items-center gap-2 text-[#F15A24] text-[12px] font-bold hover:underline">
                    <span className="text-base">💬</span> Not Sure?{" "}
                    <span className="underline">Chat with us</span>
                  </button>
                  <SaveBtn
                    loading={isSubmitting}
                    onClick={() => setActiveStep(4)}
                  />
                </div>
              </div>
            ) : (
              <CollapsedStep
                stepNum={3}
                title="Zero-Hassle Application Service - EasyApply™"
                badge="Recommended"
              />
            )}

            {/* ── Step 4: Payment ── */}
            {activeStep === 4 && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={4} active />
                  <span className="text-[14px] font-black text-[#1C1C1C]">
                    Payment
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-[13px] text-gray-500">
                    Select your payment method.
                  </p>

                  {[
                    {
                      id: "card",
                      label: "Pay with card",
                      badge: (
                        <div className="flex items-center gap-1">
                          <div className="bg-blue-700 text-white text-[8px] font-black px-1.5 py-0.5 rounded">
                            VISA
                          </div>
                          <div className="bg-[#F15A24] w-6 h-4 rounded-full flex items-center justify-center">
                            <div className="bg-red-600 w-2.5 h-2.5 rounded-full -ml-1" />
                          </div>
                          <div className="bg-[#FF6600] text-white text-[8px] font-black px-1.5 py-0.5 rounded">
                            DISC
                          </div>
                        </div>
                      ),
                    },
                    {
                      id: "paypal",
                      label: "Pay with PayPal",
                      badge: (
                        <div className="bg-[#003087] text-white text-[9px] font-black px-2 py-0.5 rounded">
                          Pay<span className="text-[#009cde]">Pal</span>
                        </div>
                      ),
                    },
                    {
                      id: "instalments",
                      label: "Pay in 3 monthly interest free instalments",
                      badge: null,
                    },
                    {
                      id: "klarna",
                      label:
                        "Pay in 30 days or in 3 interest free instalments. (Includes a soft credit check)",
                      badge: (
                        <div className="bg-[#FFB3C7] text-[#1C1C1C] text-[9px] font-black px-2 py-1 rounded">
                          klarna
                        </div>
                      ),
                    },
                  ].map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => {
                        setPayment(opt.id);
                      }}
                      className={`rounded-xl border-2 px-4 py-3.5 cursor-pointer transition-all flex items-center justify-between gap-3 ${payment === opt.id ? "border-[#F15A24] bg-blue-50/20" : "border-gray-200 hover:border-gray-300"}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${payment === opt.id ? "border-[#F15A24]" : "border-gray-300"}`}
                        >
                          {payment === opt.id && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#F15A24]" />
                          )}
                        </div>
                        <span className="text-[13px] font-bold text-[#1C1C1C]">
                          {opt.label}
                        </span>
                      </div>
                      {opt.badge}
                    </div>
                  ))}

                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agree1}
                        onChange={(e) => setAgree1(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#F15A24]"
                      />
                      <span className="text-[12px] text-gray-600">
                        Send me the latest job opportunities, industry changes
                        and course advice
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agree2}
                        onChange={(e) => setAgree2(e.target.checked)}
                        className="mt-0.5 w-4 h-4 accent-[#F15A24]"
                      />
                      <span className="text-[12px] text-gray-600">
                        I agree to the Courses4Me{" "}
                        <span className="text-[#F15A24] underline cursor-pointer">
                          Privacy Policy
                        </span>{" "}
                        and{" "}
                        <span className="text-[#F15A24] underline cursor-pointer">
                          Terms of service
                        </span>
                      </span>
                    </label>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-600 text-sm">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <p>{error}</p>
                    </div>
                  )}

                  <SaveBtn
                    loading={isSubmitting}
                    onClick={handlePayment}
                    fullWidth
                    label={isSubmitting ? "Processing..." : existingBookingId ? "Complete Pending Payment" : "Submit Payment"}
                    disabled={isSubmitting || (bookingStatus === "PAID") || (error && error.includes("already enrolled")) || (error && error.includes("already been paid for"))}
                  />
                </div>
              </div>
            )}

            {activeStep < 4 && <CollapsedStep stepNum={4} title="Payment" />}
          </div>

          {/* ══ RIGHT SIDEBAR ══ */}
          <RightSidebar />
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#F0F0F0] py-3 mt-8">
        <p className="text-center text-[11px] text-gray-500 px-4">
          Courses4Me is a registered trademark of Courses4Me Limited. Courses4Me
          is a training &amp; staffing platform — we help people book training
          courses with approved providers and help them find work.
        </p>
      </div>

      <StripePaymentModal
        clientSecret={clientSecret}
        bookingRef={bookingRef}
        isOpen={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />


    </div>
  );
};

export default CourseCheckout;
