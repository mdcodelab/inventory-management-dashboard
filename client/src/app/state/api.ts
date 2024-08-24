import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath: "api", 
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    tagTypes: [], // tags for cache
    endpoints: (builder) => ({
    
        getExampleData: builder.query({
            query: () => `/example-endpoint`,
        }),
    }),
});

export const { useGetExampleDataQuery } = api;
export default api;
