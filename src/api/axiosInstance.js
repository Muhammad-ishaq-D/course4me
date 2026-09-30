import axios from 'axios';
import toast from 'react-hot-toast';

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

// Forms whose 401 means "wrong details", not "session expired": the page
// shows the message itself, so no logout or reload.
const AUTH_FORM_ENDPOINTS = ['/auth/login', '/auth/register', '/auth/google', '/auth/check-email', '/auth/update-password'];

// Response interceptor to handle auth errors (401, 403)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const url = error.config?.url || '';
        const isAuthForm = AUTH_FORM_ENDPOINTS.some((path) => url.includes(path));
        const hadToken = Boolean(error.config?.headers?.Authorization);

        if (!isAuthForm && hadToken && (error.response?.status === 401 || (error.response?.status === 403 && error.response?.data?.message?.includes('account has been')))) {
            // Log out user if suspended or token expired
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            // Show alert with reason if provided
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            }
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
