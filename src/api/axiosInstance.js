import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Add a request interceptor to add the auth token to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle auth errors (401, 403)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || (error.response?.status === 403 && error.response?.data?.message?.includes('account has been'))) {
            // Log out user if suspended or token expired
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            // Show alert with reason if provided
            if (error.response?.data?.message) {
                alert(error.response.data.message);
            }

            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
