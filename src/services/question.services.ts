import { axiosInstance } from "./api.services";

export const questionService = {
    getQuestions: async (page: number) => {
        try {
            const response = await axiosInstance.get(`/questions?page=${page}&limit=9`);
            return response.data;
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    },
    getQuestionById: async (id: string) => {
        try {
            const response = await axiosInstance.get(`/questions/${id}`);
            return response.data;
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }
}