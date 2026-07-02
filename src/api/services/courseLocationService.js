import axiosInstance from "../axiosInstance";

const courseLocationService = {
    getAll: () =>
        axiosInstance.get(`/course-locations`),

    getById: (courseLocationId) =>
        axiosInstance.get(`/course-locations/${courseLocationId}`),

    // Booking flow: activeOnly hides disabled locations entirely — inactive locations
    // can't be booked (and can't be added to a course), so they never appear here.
    getByCourse: (courseId) =>
        axiosInstance.get(`/course-locations/course/${courseId}?activeOnly=true`),
};

export default courseLocationService;
