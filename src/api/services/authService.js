import axiosInstance from '../axiosInstance';

const authService = {
    login: async (credentials) => {
        const response = await axiosInstance.post('/auth/login', credentials);
        return response.data;
    },
    register: async (userData) => {
        const response = await axiosInstance.post('/auth/register', userData);
        return response.data;
    },
    checkEmail: async (email) => {
        const response = await axiosInstance.post('/auth/check-email', { email });
        return response.data;
    },
    forgotPassword: async (email) => {
        const response = await axiosInstance.post('/portal/auth/forgot-password', { email });
        return response.data;
    },
    resetPassword: async (data) => {
        const response = await axiosInstance.post('/portal/auth/reset-password', data);
        return response.data;
    },
    getProfile: async () => {
        const response = await axiosInstance.get('/auth/profile');
        return response.data;
    },
    updateProfile: async (userData) => {
        const response = await axiosInstance.put('/auth/profile', userData);
        return response.data;
    },
    updatePassword: async (passwordData) => {
        const response = await axiosInstance.put('/auth/update-password', passwordData);
        return response.data;
    },
    googleLogin: async (token) => {
        const response = await axiosInstance.post('/auth/google', { token });
        return response.data;
    },
    facebookLogin: async (accessToken) => {
        const response = await axiosInstance.post('/auth/facebook', { accessToken });
        return response.data;
    }
};

export default authService;
