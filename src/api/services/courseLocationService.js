import axiosInstance from "../axiosInstance";

const courseLocationService = {
    getAll: () =>
        axiosInstance.get(`/course-locations`),

    getById: (courseLocationId) =>
        axiosInstance.get(`/course-locations/${courseLocationId}`),

    getByCourse: (courseId) =>
        axiosInstance.get(`/course-locations/course/${courseId}`),
};

export default courseLocationService;
