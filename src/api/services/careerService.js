import axiosInstance from "../axiosInstance";

const careerService = {
    // Get all active job listings (with optional filters)
    getActiveJobs: async (params = {}) => {
        return await axiosInstance.get('/jobs', { params });
    },

    // Get details for a single job listing
    getJobDetails: async (id) => {
        return await axiosInstance.get(`/jobs/${id}`);
    },

    // Submit an application for a specific job listing
    submitApplication: async (id, applicationData) => {
        return await axiosInstance.post(`/jobs/apply/${id}`, applicationData);
    },

    // Get logged-in user's submitted job applications
    getMyApplications: async () => {
        const response = await axiosInstance.get('/jobs/my-applications');
        return response.data;
    }
};

export default careerService;
