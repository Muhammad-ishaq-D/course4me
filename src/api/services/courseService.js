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

    // Get user's enrolled courses
    getUserCourses: async () => {
        const response = await axiosInstance.get('/courses/user/enrolled');
        return response.data;
    }
};

export default courseService;
