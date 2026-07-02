import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../api/services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            // Check for token in URL (from social auth redirect on the signin page only —
            // other pages, like /reset-password, use their own unrelated `token` param)
            const urlParams = new URLSearchParams(window.location.search);
            const tokenFromUrl = window.location.pathname === '/signin' ? urlParams.get('token') : null;
            let shouldRedirect = false;

            if (tokenFromUrl) {
                localStorage.setItem('token', tokenFromUrl);
                shouldRedirect = true;
                // Clean up only the token from URL to preserve other params (like courseId)
                urlParams.delete('token');
                const newSearch = urlParams.toString();
                const newPath = window.location.pathname + (newSearch ? `?${newSearch}` : '');
                window.history.replaceState({}, document.title, newPath);
            }

            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const data = await authService.getProfile();
                    setUser(data.data || data.user || data);
                    
                    // If we just got the token from URL (social login), redirect to dashboard if on signin page
                    if (shouldRedirect && window.location.pathname === '/signin') {
                        navigate('/dashboard', { replace: true });
                    }
                } catch (error) {
                    console.error('Failed to fetch profile', error);
                    localStorage.removeItem('token');
                    setUser(null);
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (credentials) => {
        const data = await authService.login(credentials);
        localStorage.setItem('token', data.token);
        setUser(data.data || data.user || data);
        return data;
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    const updateProfile = async (userData) => {
        const data = await authService.updateProfile(userData);
        setUser(data.data || data.user || data);
        return data;
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, updateProfile, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
