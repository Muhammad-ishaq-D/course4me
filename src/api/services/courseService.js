import axiosInstance from "../axiosInstance";

const courseService = {
    // Get all courses with pagination/filters
    getAllCourses: async (params = {}) => {
        return await axiosInstance.get('/courses', { params });
    },

    // Get a single course by ID
    getCourseById: async (id) => {
        return await axiosInstance.get(`/courses/${id}`);
    },

    // Get course count by category
    getCategoryStats: async () => {
        return await axiosInstance.get('/courses/stats/categories');
    }
};

export default courseService;
