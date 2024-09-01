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
    expenseSummarId: string;
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
    email: String;
}

const api = createApi({
    reducerPath: "api", 
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    tagTypes: ["DashboardMetrics", "Products", "Users", "Expenses"],
    endpoints: (builder) => ({
        // Endpoint for getting dashboard elements
        getDashboardElements: builder.query<DashboardElements, void>({
            query: () => ({
                url: `/dashboard`,
            }),
            providesTags: ["DashboardElements"],
        }),

        // Example endpoint for getting all products with pagination and keyword
        getAllProducts: builder.query<Product[], { pageNumber: number; keyword?: string }>({
            query: ({ pageNumber, keyword }) => ({
                url: `/products`,
                params: { pageNumber, keyword },
            }),
            providesTags: ["Products"],
        }),
    }),
});

export const { useGetDashboardElementsQuery, useGetAllProductsQuery } = api;
export default api;
