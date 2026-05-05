import axiosInstance from '../axiosInstance';

const authService = {
    login: async (credentials) => {
        return await axiosInstance.post('/auth/login', credentials);
    },
    register: async (userData) => {
        return await axiosInstance.post('/auth/register', userData);
    },
    checkEmail: async (email) => {
        return await axiosInstance.post('/auth/check-email', { email });
    }
};

export default authService;
