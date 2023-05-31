import { api } from "./api.js";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => (`/product?search=${params ? params.search : ""}`),
      invalidatesTags: ["product"],
    }),
    getProductsById: builder.query({
      query: (id) => `/product/${id}`,
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductsByIdQuery } = productsApi;
