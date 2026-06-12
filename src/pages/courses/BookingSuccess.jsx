import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import bookingService from "../../api/services/bookingService";
import BookingConfirmed from "../../components/coursesComponents/booking/BookingConfirmed";
import { Loader2 } from "lucide-react";

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [bookingData, setBookingData] = useState(null);
  const [error, setError] = useState(null);

  const bookingRef = searchParams.get("bookingRef");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const fetchBooking = async () => {
      if (!bookingRef) {
        setError("Invalid booking reference.");
        setLoading(false);
        return;
      }
      try {
        const res = await bookingService.getBookingByReference(bookingRef);
        if (res.data && res.data.success) {
          setBookingData(res.data.data);
        } else {
          setError("Failed to retrieve booking information.");
        }
      } catch (err) {
        console.error("Fetch booking error:", err);
        setError("Failed to retrieve booking information.");
      } finally {
        setLoading(false);
      }
    };
    fetchBooking();
  }, [bookingRef]);

  useEffect(() => {
    if (!loading) {
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        const container = document.getElementById("main-scroll-container");
        if (container) {
          container.scrollTo({ top: 0, behavior: "smooth" });
        }
      };

      scrollToTop();
      setTimeout(scrollToTop, 100);
      setTimeout(scrollToTop, 500);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center">
        <Loader2 size={40} className="animate-spin text-[#F15A24] mb-4" />
        <p className="text-gray-500 font-bold">
          Verifying payment and retrieving booking...
        </p>
      </div>
    );
  }

  if (error || !bookingData) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-black text-red-500 mb-2">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600 mb-6">
          {error || "Could not find your booking details."}
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#F15A24] text-white px-6 py-3 rounded-lg font-black text-sm"
        >
          Return Home
        </button>
      </div>
    );
  }

  const formattedDate = bookingData.session?.startDate
    ? new Date(bookingData.session.startDate).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Pending Date";

  return (
    <BookingConfirmed
      name={`${bookingData.customerDetails?.firstName || ""} ${bookingData.customerDetails?.lastName || ""}`}
      email={bookingData.customerDetails?.email}
      mobile={bookingData.customerDetails?.phone}
      billing={bookingData.billingAddress}
      courseName={bookingData.course?.title || "Course"}
      plan={bookingData.packageName}
      price={bookingData.totalAmount}
      date={formattedDate}
      easyApply={bookingData.options?.easyApply}
      bookingRef={bookingData.bookingReference}
      navigate={navigate}
    />
  );
};

export default BookingSuccess;
