import { api } from "./api.js";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({ query: () => "/product" ,invalidatesTags: ["product"]}),
    getProductsById: builder.query({ query: (id) => `/product/${id}` ,invalidatesTags: ["product"]}),
  }),
});

export const { useGetAllProductsQuery, useGetProductsByIdQuery } = productsApi;
