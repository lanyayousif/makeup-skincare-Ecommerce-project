import { api } from "./api.js";
import queryString from 'query-string';


const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => {
      const query=queryString.stringify(params)
        // console.log(query)
         return(`/product?${query}`)
        },
      invalidatesTags: ["product"],
    }),
    getAllProd: builder.query({
      query: () => {
         return(`/product/getAll`)
        },
      invalidatesTags: ["product"],
    }),
    getProductsById: builder.query({
      query: (id) => `/product/${id}`,
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductsByIdQuery,useGetAllProdQuery } = productsApi;
