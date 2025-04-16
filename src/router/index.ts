import AdminLayout from "@/layouts/AdminLayout.vue";
import LoginView from "@/views/auth/LoginView.vue";
import CategoriesView from "@/views/categories/CategoriesView.vue";
import ProductsView from "@/views/products/ProductsView.vue";
import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/admin",
            name: "admin",
            component: AdminLayout,
            children: [
                {
                    path: "categories",
                    name: "categories",
                    component: () => import("@/views/categories/CategoriesView.vue")
                },
                {
                    path: "categories/new",
                    name: "new-category",
                    component: () => import("@/views/categories/NewCategoryView.vue")
                },
                {
                    path: "products",
                    name: "products",
                    component: () => import("@/views/products/ProductsView.vue")
                }
            ]
        },
        {
            path: "/auth/login",
            name: "login",
            component: () => import("@/views/auth/LoginView.vue")
            // component: LoginView
        }
    ],
});


export default router;