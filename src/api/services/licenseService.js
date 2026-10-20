import axiosInstance from "../axiosInstance";
import cachedGet from "../cachedGet";

const licenseService = {
    // Get all licenses with pagination/filters
    getAllLicenses: async (params = {}) => {
        return await cachedGet('/licenses', params);
    },

    // Get a single license by ID
    getLicenseById: async (id) => {
        return await axiosInstance.get(`/licenses/${id}`);
    }
};

export default licenseService;
