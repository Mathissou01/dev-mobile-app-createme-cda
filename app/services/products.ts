// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {Products} from "@/models/Products";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://massive-moose-37.hasura.app/api/rest",
        headers: {
            "x-hasura-admin-secret":
                "APWcleCX00afy9YaQ51S5sRoE54tfgV50vcD03aHctLeOV0eNPy1svgsvmy2okL1",
        },
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<Products, void>({
            transformResponse: (response, meta, args) => response.products,
            query: () => `/getProducts`,
        }),
        getProductsByCategoryName: builder.query<Products, { categorie_name: string }>({
            transformResponse: (response, meta, args) => response.products,
            query: (body) => ({
                url: '/getProductsByCategorieName',
                method: 'POST',
                body: body,
            }),
        }),
        getProductsById: builder.query<Products, { product_id: number }>({
            transformResponse: (response, meta, args) => response.products,
            query: (body) => ({
                url: '/getProductById',
                method: 'POST',
                body: body,
            }),
        }),
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProductsQuery, useGetProductsByCategoryNameQuery, useGetProductsByIdQuery} = productsApi;
