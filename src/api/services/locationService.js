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

    // Get all locations
    getAllLocations: async () => {
        const response = await axiosInstance.get('/locations');
        return response.data;
    },

    // Get courses for a specific location
    getLocationCourses: async (locationId) => {
        const response = await axiosInstance.get(`/locations/${locationId}/courses`);
        return response.data;
    }
};

export default locationService;
