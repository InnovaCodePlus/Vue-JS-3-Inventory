export interface Product {
    id:        string;
    name:      string;
    slug:      string;
    image:     string;
    stock:     number;
    price:     string;
    category:  ProductCategory;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductCategory {
    id:   number;
    name: string;
    slug: string;
}
