import type { PaginatedResponse } from "../pagination-response.interface";
import type { Product } from "./product.interface";


export type GetAllProductsResponse = PaginatedResponse<Product, "products">;