import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi", // The reducer path for this API
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_URL, // Base URL for the API
    headers: {
      "x-hasura-admin-secret": process.env.EXPO_PUBLIC_API_SECRET ?? "", // API secret for authentication
    },
  }),
  endpoints: (builder) => ({
    // Define an endpoint to get a product by its ID
    getUserById: builder.query<any[], { user_id: number }>({
      transformResponse: (response: any) => response?.users, // Transform response to extract products
      query: (body) => ({
        url: "/getuserbyid", // API endpoint to fetch product by ID
        method: "POST", // Use POST method for the request
        body: body, // Pass the product ID in the body
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetUserByIdQuery } = usersApi;
