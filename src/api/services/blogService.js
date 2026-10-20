import axiosInstance from "../axiosInstance";

const blogService = {
    // Published articles, newest first, with the feature at the top
    getBlogs: async (params = {}) => {
        return await axiosInstance.get('/blogs', { params });
    },

    // One article by its id or its slug, with its body
    getBlogById: async (idOrSlug) => {
        return await axiosInstance.get(`/blogs/${idOrSlug}`);
    }
};

export default blogService;
