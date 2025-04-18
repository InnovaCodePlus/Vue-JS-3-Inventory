import apiClient from "@/lib/api-client"
import type { GetAllProductsResponse } from "@/interfaces/products/get-all-products-response.interface"


const getAllProducts = async () => {
    try {
        
        const { data } = await apiClient.get<GetAllProductsResponse>("/products");
        return data;

    } catch (error) {
        console.log(error)
        throw error
    }
} 

export default {
    getAllProducts
}