import axiosInstance from "../axiosInstance";

const courseService = {
    // Get all courses with pagination/filters
    getAllCourses: async (params = {}) => {
        return await axiosInstance.get('/courses', { params });
    },

    // Get a single course by ID (with fallback to license for unified booking integration)
    getCourseById: async (id) => {
        try {
            const response = await axiosInstance.get(`/courses/${id}`);
            if (response.data && response.data.success) {
                return response;
            }
            throw new Error("Course not found");
        } catch (error) {
            console.log("Course fetch failed or not found, attempting license fallback for ID:", id);
            try {
                const licenseResponse = await axiosInstance.get(`/licenses/${id}`);
                return licenseResponse;
            } catch (licenseError) {
                // If both fail, throw the original course error so calling code handles it normally
                throw error;
            }
        }
    },

    // Get user's enrolled courses
    getUserCourses: async () => {
        const response = await axiosInstance.get('/courses/user/enrolled');
        return response.data;
    },

    // Get course count by category
    getCategoryStats: async () => {
        return await axiosInstance.get('/courses/stats/categories');
    }
};

export default courseService;
