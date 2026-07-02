import axiosInstance from "../axiosInstance";

const locationService = {
    // Search training centers — only returns centers matching keyword / city filters
    searchLocations: async ({ search = '', location = '', query = '' } = {}) => {
        const params = {};
        const keyword = (search || query || '').trim();
        if (keyword) params.search = keyword;
        if (location?.trim()) params.location = location.trim();

        const response = await axiosInstance.get('/locations/search', { params });
        return response.data;
    },

    // Get all locations (portal only shows active ones — disabled locations are hidden)
    getAllLocations: async () => {
        const response = await axiosInstance.get('/locations', { params: { status: 'Active' } });
        return response.data;
    },

    // Get courses for a specific location by ID
    getLocationCourses: async (locationId) => {
        const response = await axiosInstance.get(`/locations/${locationId}/courses`);
        return response.data;
    },

    // Get courses by center name (useful for hardcoded location fallbacks)
    getCoursesByCenterName: async (centerName) => {
        const response = await axiosInstance.get(`/locations/courses/by-center?centerName=${encodeURIComponent(centerName)}`);
        return response.data;
    }
};

export default locationService;
