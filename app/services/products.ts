import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Products } from "@/models/Products";

interface ProductResponse {
  products: Products[];
}

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi", // The reducer path for this API
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL, // Base URL for the API
    headers: {
      "x-hasura-admin-secret": process.env.EXPO_PUBLIC_API_SECRET ?? "", // API secret for authentication
    },
  }),
  endpoints: (builder) => ({
    // Define an endpoint to get all products
    getProducts: builder.query<Products[], void>({
      transformResponse: (response: ProductResponse) => response?.products, // Transform response to extract products
      query: () => `/getProducts`, // API endpoint to fetch all products
    }),
    // Define an endpoint to get products by category name
    getProductsByCategoryName: builder.query<
      Products[],
      { categorie_name: string }
    >({
      transformResponse: (response: ProductResponse) => response?.products, // Transform response to extract products
      query: (body) => ({
        url: "/getProductsByCategorieName", // API endpoint to fetch products by category name
        method: "POST", // Use POST method for the request
        body: body, // Pass the category name in the body
      }),
    }),
    // Define an endpoint to get a product by its ID
    getProductsById: builder.query<Products[], { product_id: number }>({
      transformResponse: (response: ProductResponse) => response?.products, // Transform response to extract products
      query: (body) => ({
        url: "/getProductById", // API endpoint to fetch product by ID
        method: "POST", // Use POST method for the request
        body: body, // Pass the product ID in the body
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetProductsByCategoryNameQuery,
  useGetProductsByIdQuery,
} = productsApi;
