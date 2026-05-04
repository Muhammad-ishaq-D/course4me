import axiosInstance from "../axiosInstance";

const bookingService = {
    // Create a new booking
    createBooking: async (bookingData) => {
        return await axiosInstance.post('/bookings', bookingData);
    },

    // Get booking by reference (public)
    getBookingByReference: async (ref) => {
        return await axiosInstance.get(`/bookings/reference/${ref}`);
    }
};

export default bookingService;
