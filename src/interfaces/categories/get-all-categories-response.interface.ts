import type { PaginatedResponse } from "../pagination-response.interface";
import type { Category } from "./category.interface";


export type GetAllCategoriesResponse = PaginatedResponse<Category, "categories">;