import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    productId: string;
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
}

export interface NewProduct {
    name: string;
    price: number;
    rating?: number;
    stockQuantity: number;
}

export interface SalesSummary {
    salesSummaryId: string;
    totalValue: number;
    changePercentage?: number;
    date: string;
}

export interface PurchaseSummary {
    purchaseSummaryId: string;
    totalPurchased: number;
    changePercentage?: number;
    date: string;
}

export interface ExpenseSummary {
    expenseSummaryId: string;
    totalExpenses: number;
    date: string;
}

export interface ExpenseByCategorySummary {
    expenseByCategorySummaryId: string;
    category: string;
    amount: string;
    date: string;
}


export interface DashboardElements {
    popularProducts: Product[];
    salesSummary: SalesSummary[];
    purchaseSummary: PurchaseSummary[];
    expenseSummary: ExpenseSummary[];
    expenseByCategorySummary: ExpenseByCategorySummary[];
}

export interface User {
    userId: string;
    name: string;
    email: string;
}

const api = createApi({
    reducerPath: "api", 
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    tagTypes: ["DashboardElements", "Products", "Users", "Expenses"],
    endpoints: (builder) => ({
        // Endpoint for getting dashboard elements
        getDashboardElements: builder.query<DashboardElements, void>({
            query: () => ({
                url: `/dashboard`,
            }),
            providesTags: ["DashboardElements", "Products"],
        }),

        // Example endpoint for getting all products with pagination and keyword
        getAllProducts: builder.query<Product[], string | void>({
            query: (search) => ({
                url: `/products`,
                params: search ? { search } : {},
            }),
            providesTags: ["Products"],
        }),

        //POST request - mutation
        createProduct: builder.mutation<Product, NewProduct>({
            query: (newProduct) => ({
                url: `/products`,
                method: "POST",
                body: newProduct
            }),
            invalidatesTags: ["Products"],
        }),

        getAllUsers: builder.query<User[], string | void>({
            query: () => ({
                url: `/users`,
            }),
            providesTags: ["Users"],
        }),

    }),
});

export const { useGetDashboardElementsQuery, useGetAllProductsQuery, useCreateProductMutation, 
    useGetAllUsersQuery} = api;
export default api;
