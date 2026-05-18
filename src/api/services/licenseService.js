import axiosInstance from "../axiosInstance";

const licenseService = {
    // Get all licenses with pagination/filters
    getAllLicenses: async (params = {}) => {
        return await axiosInstance.get('/licenses', { params });
    },

    // Get a single license by ID
    getLicenseById: async (id) => {
        return await axiosInstance.get(`/licenses/${id}`);
    }
};

export default licenseService;
