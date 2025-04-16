import type { Category } from "./category.interface";

export interface CreateCategoryResponse {
    message:  string;
    category: Category;
}

