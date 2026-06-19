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
import courseLocationService from "../../api/services/courseLocationService";
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
  const { login: authLogin, user, loading: isAuthLoading } = useAuth();
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStep, setActiveStep] = useState(() =>
    searchParams.get("bookingId") ? 4 : 1,
  );
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  // New state for tracking booking status (PAID, PENDING, etc.)
  const [bookingStatus, setBookingStatus] = React.useState(null);
  const [pendingBookingLoading, setPendingBookingLoading] = useState(true);
  // Existing state for booking reference (used for success page)
  const [bookingRef, setBookingRef] = useState("");
  const [error, setError] = useState("");
  const [existingBookingId, setExistingBookingId] = useState(null);

  // Dynamic Data
  const courseId = searchParams.get("courseId");
  const scheduleId = searchParams.get("scheduleId");
  const plan = (searchParams.get("plan") || "Flexi+").trim();

  const [timeLeft, setTimeLeft] = useState(15 * 60);

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
  const [easyApply, setEasyApply] = useState("self"); // "get" | "self"
  const [payment, setPayment] = useState("card");
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [checkingEmail, setCheckingEmail] = useState(false);

  // Postcode suggestions
  const [showPostcodeSuggestions, setShowPostcodeSuggestions] = useState(false);
  const [postcodeSuggestions, setPostcodeSuggestions] = useState([]);
  const [loadingPostcode, setLoadingPostcode] = useState(false);
  const [selectedPostcode, setSelectedPostcode] = useState("");
  const postcodeRef = useRef(null);

  // Validation state
  const [detailsErrors, setDetailsErrors] = useState({});
  const [billingErrors, setBillingErrors] = useState({});

  // Removed broken loadPendingBooking since it called a non-existent API
  // and we now populate data correctly using getMyBookingStatus instead.

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

  // Postcode/address suggestions from course location data
  useEffect(() => {
    let cancelled = false;
    const term = billing.postcode.trim();

    if (!term || term === selectedPostcode) {
      setPostcodeSuggestions([]);
      setShowPostcodeSuggestions(false);
      setLoadingPostcode(false);
      return;
    }

    setLoadingPostcode(true);
    setShowPostcodeSuggestions(true);

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(term)}&format=json&addressdetails=1&limit=5`,
        );
        if (cancelled) return;
        const data = await res.json();

        const seen = new Set();
        const suggestions = [];

        (data || []).forEach((item) => {
          const label = item.display_name;
          if (label && !seen.has(label)) {
            seen.add(label);

            const addr = item.address || {};
            let postcode = addr.postcode || "";

            if (!postcode) {
              const ukPostcodeRegex =
                /\b([A-Z]{1,2}[0-9][A-Z0-9]? [0-9][ABD-HJLNP-UW-Z]{2})\b/i;
              const usZipRegex = /\b(\d{5}(?:-\d{4})?)\b/;
              const ukMatch = label.match(ukPostcodeRegex);
              const usMatch = label.match(usZipRegex);

              if (ukMatch) postcode = ukMatch[0];
              else if (usMatch) postcode = usMatch[0];
            }

            const city =
              addr.city || addr.town || addr.village || addr.county || "";

            const addr1Parts = [addr.house_number, addr.road].filter(Boolean);
            let address = "";
            if (addr1Parts.length > 0) {
              address = addr1Parts.join(", ");
              if (addr.suburb && !address.includes(addr.suburb)) {
                address += ", " + addr.suburb;
              }
            } else {
              // Fallback to splitting display_name
              const parts = item.display_name.split(",").map((p) => p.trim());
              // Find the first part that is NOT the postcode, city, county, country
              for (const p of parts) {
                if (
                  p !== postcode &&
                  p !== city &&
                  p !== addr.county &&
                  p !== addr.state &&
                  p !== addr.country
                ) {
                  address = p;
                  break;
                }
              }
            }

            // If we still couldn't find a good address line 1, leave it blank so user can type it
            if (address === postcode) address = "";

            suggestions.push({
              label,
              postcode: postcode || term,
              address,
              city,
            });
          }
        });

        setPostcodeSuggestions(suggestions);
        setShowPostcodeSuggestions(suggestions.length > 0);
      } catch {
        if (!cancelled) {
          setPostcodeSuggestions([]);
          setShowPostcodeSuggestions(false);
        }
      } finally {
        if (!cancelled) setLoadingPostcode(false);
      }
    }, 500);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [billing.postcode]);

  // Close postcode dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (postcodeRef.current && !postcodeRef.current.contains(e.target)) {
        setShowPostcodeSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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

        const [courseRes, locRes] = await Promise.all([
          courseService.getCourseById(courseId),
          courseLocationService
            .getByCourse(courseId)
            .catch(() => ({ data: { data: [] } })),
        ]);
        const course = courseRes.data.data;
        setCourseData(course);

        // Find selected schedule from CourseLocationDate records
        let foundSchedule = null;
        if (scheduleId) {
          const links = locRes.data.data || [];
          for (const link of links) {
            const date = (link.dates || []).find(
              (d) => d._id?.toString() === scheduleId.toString(),
            );
            if (date) {
              foundSchedule = {
                _id: date._id,
                startDate: date.startDate,
                endDate: date.endDate,
                price: link.price,
                locationName: link.locationId?.name || "",
              };
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
    const urlBookingId = searchParams.get("bookingId");
    if (urlBookingId) {
      // First check if this booking is already paid before reopening the modal
      bookingService
        .getMyBookingStatus(courseId)
        .then((statusRes) => {
          if (statusRes.data?.status === "PAID") {
            // Already paid — just reflect the PAID state, do NOT reopen modal
            setBookingStatus("PAID");
            setPaymentModalOpen(false);
            setIsSubmitting(false);
            return;
          }
          // Still pending — prepare payment details but do not auto-open modal
          bookingService
            .createPaymentIntent(urlBookingId)
            .then((piRes) => {
              if (piRes.data.success && piRes.data.clientSecret) {
                setClientSecret(piRes.data.clientSecret);
                setExistingBookingId(urlBookingId);

                // Populate billing address if available from status check
                if (statusRes.data?.bookedSchedules) {
                  const currentScheduleBooking =
                    statusRes.data.bookedSchedules.find(
                      (b) => b.bookingId === urlBookingId,
                    );
                  if (currentScheduleBooking?.billingAddress) {
                    setBilling({
                      postcode:
                        currentScheduleBooking.billingAddress.postcode || "",
                      addr1: currentScheduleBooking.billingAddress.line1 || "",
                      addr2: currentScheduleBooking.billingAddress.line2 || "",
                      city: currentScheduleBooking.billingAddress.city || "",
                    });
                    setSelectedPostcode(
                      currentScheduleBooking.billingAddress.postcode || "",
                    );
                  }
                }

                setBookingStatus("PENDING");
                setActiveStep(4);
                setIsSubmitting(false);
              } else {
                setError(
                  "Failed to initialize payment for existing booking. " +
                    (piRes.data?.message || ""),
                );
              }
            })
            .catch((err) => {
              setError(
                err.response?.data?.message ||
                  "Could not load payment session. You may have already completed this payment.",
              );
            });
        })
        .catch(() => {
          // Status check failed — fall through to prepare payment details anyway
          bookingService
            .createPaymentIntent(urlBookingId)
            .then((piRes) => {
              if (piRes.data.success && piRes.data.clientSecret) {
                setClientSecret(piRes.data.clientSecret);
                setExistingBookingId(urlBookingId);

                setBookingStatus("PENDING");
                setActiveStep(4);
                setIsSubmitting(false);
              } else {
                setError(
                  "Failed to initialize payment for existing booking. " +
                    (piRes.data?.message || ""),
                );
              }
            })
            .catch((err) => {
              setError(
                err.response?.data?.message ||
                  "Could not load payment session. You may have already completed this payment.",
              );
            });
        });
    }
  }, [searchParams]);

  // Close modal and reset state if booking is/becomes PAID
  useEffect(() => {
    if (bookingStatus === "PAID") {
      setPaymentModalOpen(false);
      setIsSubmitting(false);
      // Don't clear existingBookingId here — we still need it to show the PAID banner
    }
  }, [bookingStatus]);

  // Load current booking status for this course
  React.useEffect(() => {
    setPendingBookingLoading(true);

    if (user && courseData?._id) {
      bookingService
        .getMyBookingStatus(courseData._id)
        .then((res) => {
          if (res.data?.success) {
            setBookingStatus(res.data.status);
            // If there's already a pending booking for this specific schedule, set its ID so the
            // "Complete Pending Payment" button shows immediately on page load
            if (res.data.bookedSchedules) {
              const currentScheduleBooking = res.data.bookedSchedules.find(
                (b) => b.scheduleId === scheduleId && b.status === "PENDING",
              );
              if (currentScheduleBooking) {
                setExistingBookingId(currentScheduleBooking.bookingId);
                if (currentScheduleBooking.billingAddress) {
                  setBilling({
                    postcode:
                      currentScheduleBooking.billingAddress.postcode || "",
                    addr1: currentScheduleBooking.billingAddress.line1 || "",
                    addr2: currentScheduleBooking.billingAddress.line2 || "",
                    city: currentScheduleBooking.billingAddress.city || "",
                  });
                  setSelectedPostcode(
                    currentScheduleBooking.billingAddress.postcode || "",
                  );
                }
              }
            }
          }
        })
        .catch((err) => {
          console.error("Failed to fetch booking status", err);
        })
        .finally(() => {
          setPendingBookingLoading(false);
        });
    }
  }, [user, courseData?._id, scheduleId]);
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
    const id = setInterval(() => {
      setTimeLeft((p) => {
        if (p <= 1) {
          clearInterval(id);
          navigate(`/courses`);
          return 0;
        }
        return p - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [isLoading, isConfirmed, courseId, navigate]);

  const fmt = (s) =>
    `${Math.floor(s / 60)
      .toString()
      .padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const handlePayment = async () => {
    if (!existingBookingId && !agree2) {
      setError("Please agree to the Terms of Service before proceeding.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      if (existingBookingId) {
        // Resume payment for existing pending booking
        const piRes =
          await bookingService.createPaymentIntent(existingBookingId);
        if (piRes.data.success && piRes.data.clientSecret) {
          setClientSecret(piRes.data.clientSecret);
          if (piRes.data.bookingReference) {
            setBookingRef(piRes.data.bookingReference);
          }
          setPaymentModalOpen(true);
        } else {
          setError(
            "Failed to initialize payment for existing booking. " +
              (piRes.data?.message || ""),
          );
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
        setError(backendErrors.map((e) => e.message).join(" | "));
      } else {
        setError(
          err.response?.data?.message ||
            "An error occurred during booking. Please try again.",
        );
        if (
          err.response?.data?.existingBookingId &&
          err.response?.data?.existingBookingStatus === "PENDING"
        ) {
          setExistingBookingId(err.response.data.existingBookingId);
          setBookingStatus("PENDING");
          setError("");
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Create pending booking without initiating payment
  const createPendingBooking = async () => {
    setIsSubmitting(true);
    setError("");
    try {
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
      const response = await bookingService.createBooking(bookingPayload);
      if (response.data.success) {
        const bookingId = response.data.data._id;
        const bookingReference = response.data.data.bookingReference;
        setExistingBookingId(bookingId);
        setBookingRef(bookingReference);
        setBookingStatus("PENDING");
      } else {
        setError(response.data.message || "Failed to create booking.");
      }
    } catch (err) {
      console.error("Booking Error:", err);
      // If backend says a pending booking already exists, switch to "Complete Pending Payment" flow
      if (
        err.response?.data?.existingBookingId &&
        err.response?.data?.existingBookingStatus === "PENDING"
      ) {
        setExistingBookingId(err.response.data.existingBookingId);
        setBookingStatus("PENDING");
        setError(""); // clear error so UI is clean when button switches
      } else {
        setError(
          err.response?.data?.message || "An error occurred during booking.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  /* ── Skeleton ── */
  if (isLoading || isAuthLoading) {
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
  const CompletedStep = ({ title, summary, onEdit, loading = false }) => {
    if (loading) {
      return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 animate-pulse">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-6 h-6 rounded-full bg-gray-200" />

              <div className="flex-1 space-y-2">
                <div className="h-5 w-40 bg-gray-200 rounded" />
                <div className="h-4 w-64 bg-gray-100 rounded" />
                <div className="h-4 w-48 bg-gray-100 rounded" />
              </div>
            </div>

            <div className="w-12 h-5 bg-gray-200 rounded" />
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-2 py-4 md:px-5 md:py-5 flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <StepCheck />

          <div>
            <p className="text-lg font-bold text-[#1C1C1C]">{title}</p>

            {summary?.map((l, i) => (
              <p key={i} className=" text-sm md:text-base text-gray-500">
                {l}
              </p>
            ))}
          </div>
        </div>

        <button
          onClick={onEdit}
          className="flex items-center gap-1.5 text-[#F15A24] text-base cursor-pointer font-bold hover:underline shrink-0"
        >
          <Edit2 size={16} />
          Edit
        </button>
      </div>
    );
  };

  /* ── Collapsed step header ── */
  const CollapsedStep = ({ stepNum, title, badge }) => (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4">
      <StepNumber n={stepNum} active={false} />
      <span className="text-base md:text-lg font-bold text-gray-400">
        {title}
      </span>
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
              <h1 className="text-3xl font-extrabold text-[#1C1C1C]">
                Secure Checkout
              </h1>
              <Lock size={22} className="text-gray-400" />
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base text-gray-500">
              <span>Your seat is reserved. Complete your booking in</span>
              <span className="flex items-center gap-1.5 text-[#F15A24] font-black">
                <Clock size={18} /> {fmt(timeLeft)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* ══ LEFT COLUMN ══ */}
          <div className="flex-1 w-full space-y-3">
            {/* ── Step 1: Your Details ── */}
            {activeStep > 1 ? (
              <CompletedStep
                loading={pendingBookingLoading}
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
                  <span className="text-lg font-black text-[#1C1C1C]">
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
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2 mb-2">
                      <AlertCircle size={16} />
                      User already registered. Please login to proceed.
                    </div>
                  )}

                  {user ? (
                    <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl mb-4">
                        <p className="text-sm text-orange-600 font-semibold">
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
                        <p className="text-sm text-gray-500 font-bold mb-4 text-center uppercase tracking-wider">
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

                      {isLoggingIn ? (
                        /* ── Inline Login Fields ── */
                        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                          <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl mb-4">
                            <p className="text-sm text-[#F15A24] font-semibold">
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
                              className="text-sm text-gray-500 font-bold cursor-pointer hover:text-[#F15A24] transition-colors"
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
                            <p className="text-sm text-gray-500 font-medium">
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
                loading={pendingBookingLoading}
                stepNum={2}
                title="Billing Address"
                onEdit={() => setActiveStep(2)}
                summary={[
                  billing.postcode,
                  billing.addr1,
                  billing.addr2,
                  billing.city,
                ].filter(Boolean)}
              />
            ) : activeStep === 2 ? (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={2} active />
                  <span className="text-lg font-black text-[#1C1C1C]">
                    Billing Address
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm md:text-base text-gray-500">
                    Enter your postcode and select your address.
                  </p>
                  <div className="relative" ref={postcodeRef}>
                    <FieldInput
                      label="Post code"
                      placeholder="Post code"
                      value={billing.postcode}
                      onChange={(v) => updateBilling("postcode", v)}
                      onFocus={() =>
                        postcodeSuggestions.length > 0 &&
                        billing.postcode !== selectedPostcode &&
                        setShowPostcodeSuggestions(true)
                      }
                      icon={MapPin}
                      error={billingErrors.postcode}
                    />

                    {showPostcodeSuggestions && (
                      <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden z-50">
                        {loadingPostcode ? (
                          <div className="flex items-center gap-3 px-4 py-4">
                            <div className="w-4 h-4 rounded-full border-2 border-orange-200 border-t-[#F15A24] animate-spin shrink-0" />
                            <p className="text-sm text-gray-400 font-medium">
                              Searching locations...
                            </p>
                          </div>
                        ) : (
                          postcodeSuggestions.map((item, i) => (
                            <button
                              key={i}
                              type="button"
                              onMouseDown={() => {
                                updateBilling("postcode", item.postcode);
                                updateBilling("addr1", item.address);
                                updateBilling("city", item.city);
                                setSelectedPostcode(item.postcode);
                                setShowPostcodeSuggestions(false);
                              }}
                              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#FFF4EF] transition-all text-left border-b last:border-b-0 border-gray-100"
                            >
                              <div className="w-8 h-8 rounded-full bg-[#FFF1EB] flex items-center justify-center shrink-0">
                                <MapPin size={13} className="text-[#F15A24]" />
                              </div>
                              <p className="text-[13px] font-medium text-gray-700 line-clamp-2">
                                {item.label}
                              </p>
                            </button>
                          ))
                        )}
                      </div>
                    )}
                  </div>
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
                <div className="flex items-center  gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={3} active />
                  <span className="text-lg font-black text-[#1C1C1C]">
                    Zero-Hassle Application Service - EasyApply™
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm md:text-base text-gray-500">
                    The hassle-free way to get your licence. We'll prepare your
                    application and arrange all the requirements including your
                    DBS (criminality) check.
                  </p>

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
                      <span className="text-base font-black text-[#1C1C1C]">
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
                          className="flex items-start gap-2 text-base text-gray-500"
                        >
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#F15A24] shrink-0" />{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

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
                        <span className="text-base font-black text-[#1C1C1C]">
                          Get EasyApply
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-black text-[#1C1C1C]">
                          £149.99
                        </span>
                        {easyApply === "get" && (
                          <Check size={18} className="text-[#F15A24]" />
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
                          className="flex items-center gap-2 text-base text-gray-600"
                        >
                          <Check
                            size={16}
                            className="text-[#F15A24] shrink-0"
                          />{" "}
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

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
              />
            )}

            {/* ── Step 4: Payment ── */}
            {activeStep === 4 && (
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
                  <StepNumber n={4} active />
                  <span className="text-lg font-black text-[#1C1C1C]">
                    Payment
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm md:text-base text-gray-500">
                    Select your payment method.
                  </p>

                  {/* Pay with card — only payment method */}
                  <div className="rounded-2xl border-2 border-[#F15A24] bg-gradient-to-br from-orange-50/60 to-white overflow-hidden">
                    {/* Header bar */}
                    <div className="flex flex-col md:flex-row gap-4 lg:items-center justify-between px-5 py-4 border-b border-orange-100">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-[#F15A24] flex items-center justify-center shadow-sm shadow-orange-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-base font-black text-[#1C1C1C]">
                            Pay with Card
                          </p>
                          <p className="text-sm text-gray-400 font-medium">
                            Secure &amp; instant payment
                          </p>
                        </div>
                      </div>
                      {/* Card brand logos */}
                      <div className="flex items-center gap-1.5">
                        <div className="h-7 px-2 bg-blue-700 text-white text-[9px] font-black rounded-md flex items-center justify-center tracking-wider">
                          VISA
                        </div>
                        <div className="h-7 px-1.5 bg-white border border-gray-200 rounded-md flex items-center justify-center gap-0.5">
                          <div className="w-4 h-4 rounded-full bg-red-500 opacity-90" />
                          <div className="w-4 h-4 rounded-full bg-amber-400 opacity-90 -ml-2" />
                        </div>
                        <div className="h-7 px-2 bg-[#FF6600] text-white text-[9px] font-black rounded-md flex items-center justify-center tracking-wider">
                          DISC
                        </div>
                        <div className="h-7 px-2 bg-[#1A1F71] text-white text-[9px] font-black rounded-md flex items-center justify-center tracking-wider">
                          AMEX
                        </div>
                      </div>
                    </div>

                    {/* Security trust row */}
                    <div className="px-5 py-3.5 flex flex-wrap items-center gap-4">
                      {[
                        { icon: "🔒", text: "256-bit SSL encryption" },
                        { icon: "✅", text: "PCI DSS compliant" },
                        { icon: "⚡", text: "Instant confirmation" },
                      ].map((item) => (
                        <div
                          key={item.text}
                          className="flex items-center gap-1.5"
                        >
                          <span className="text-[12px]">{item.icon}</span>
                          <span className="text-sm font-semibold text-gray-500">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {!existingBookingId && (
                    <div className="space-y-3 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={agree1}
                          onChange={(e) => setAgree1(e.target.checked)}
                          className="mt-0.5 w-4 h-4 accent-[#F15A24]"
                        />
                        <span className="text-sm text-gray-600">
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
                        <span className="text-sm text-gray-600">
                          I agree to the Courses4Me{" "}
                          <a
                            href="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#F15A24] underline cursor-pointer"
                          >
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a
                            href="/terms-of-services"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#F15A24] underline cursor-pointer"
                          >
                            Terms of service
                          </a>
                        </span>
                      </label>
                    </div>
                  )}

                  {error && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-600 text-sm">
                      <AlertCircle size={18} className="shrink-0 mt-0.5" />
                      <p>{error}</p>
                    </div>
                  )}

                  {/* Info banner: booking created, awaiting payment */}
                  {existingBookingId &&
                    bookingStatus === "PENDING" &&
                    !error && (
                      <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-3 text-orange-700 text-sm">
                        <Check
                          size={18}
                          className="shrink-0 mt-0.5 text-orange-600"
                        />
                        <p>
                          <span className="font-bold">Booking created!</span>{" "}
                          Click{" "}
                          <span className="font-bold">
                            "Complete Pending Payment"
                          </span>{" "}
                          below to finalise your purchase.
                        </p>
                      </div>
                    )}

                  {/* Button to create a pending booking when none exists */}
                  {!existingBookingId && (
                    <SaveBtn
                      loading={isSubmitting}
                      onClick={createPendingBooking}
                      fullWidth
                      label={isSubmitting ? "Creating..." : "Create Booking"}
                      disabled={isSubmitting || !agree1 || !agree2}
                    />
                  )}

                  {/* Button to complete payment for an existing pending booking */}
                  {existingBookingId && (
                    <SaveBtn
                      loading={isSubmitting}
                      onClick={handlePayment}
                      fullWidth
                      label={
                        isSubmitting
                          ? "Processing..."
                          : "Complete Pending Payment"
                      }
                      disabled={isSubmitting}
                    />
                  )}
                </div>
              </div>
            )}

            {activeStep < 4 && <CollapsedStep stepNum={4} title="Payment" />}
          </div>

          {/* ══ RIGHT SIDEBAR ══ */}
          <RightSidebar
            courseName={courseData?.title}
            plan={plan}
            price={price}
            easyApply={easyApply === "get"}
            date={
              selectedSchedule?.startDate
                ? new Date(selectedSchedule.startDate).toLocaleDateString(
                    "en-GB",
                    {
                      weekday: "long",
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    },
                  )
                : null
            }
            courseId={courseId}
            scheduleId={scheduleId}
          />
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-[#F0F0F0] py-3 mt-8">
        <p className="text-center text-sm text-gray-500 px-4">
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
        onSuccess={() => {
          // Payment succeeded in-app — close modal and show confirmation
          setPaymentModalOpen(false);
          setIsSubmitting(false);
          setBookingStatus("PAID");
          setIsConfirmed(true);
        }}
      />
    </div>
  );
};

export default CourseCheckout;
