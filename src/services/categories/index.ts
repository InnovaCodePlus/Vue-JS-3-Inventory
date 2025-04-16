import type { CreateCategoryResponse } from "@/interfaces/categories/create-category-response.interface";
import apiClient from "@/lib/api-client";


const createCategory = async (name: string) => {

    try {
        const { data } = await apiClient.post<CreateCategoryResponse>('/categories', { name });
        
        return data;
        
    } catch (error) {
        console.log(error)
        throw error;
    }

}

export default {
    createCategory
}