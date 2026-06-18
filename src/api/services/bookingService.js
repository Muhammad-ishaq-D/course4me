import axiosInstance from "../axiosInstance";

const bookingService = {
    // Create a new booking
    createBooking: async (bookingData) => {
        return await axiosInstance.post('/bookings', bookingData);
    },

    // Get booking by reference (public)
    getBookingByReference: async (ref) => {
        return await axiosInstance.get(`/bookings/reference/${ref}`);
    },

    // Create Stripe PaymentIntent for embedded stripe Elements flow
    createPaymentIntent: async (bookingId) => {
        return await axiosInstance.post(`/stripe/create-payment-intent/${bookingId}`);
    },

    // Get my booking status for a specific course
    getMyBookingStatus: async (courseId) => {
        return await axiosInstance.get(`/bookings/my-status/${courseId}`);
    },

    // Get all active schedules for the current user
    getMySchedules: async () => {
        return await axiosInstance.get('/bookings/my-schedules');
    },
};

export default bookingService;
