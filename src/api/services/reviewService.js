import axiosInstance from "../axiosInstance";

const reviewService = {
    // Create or update the logged-in user's review for a paid booking
    submitReview: async (data) => {
        return await axiosInstance.post('/reviews', data);
    },

    // Get the logged-in user's own reviews
    getMyReviews: async () => {
        const response = await axiosInstance.get('/reviews/my');
        return response.data;
    },
};

export default reviewService;
