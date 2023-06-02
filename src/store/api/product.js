import { api } from "./api.js";
import queryString from 'query-string';


const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => {
      const query=queryString.stringify(params)
        console.log(query); 
         return(`/product?${query}`)
        //  return(`/product?search=${params?.search ? params.search : ""}&page=${params?.page ?params.page:1}`)
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
