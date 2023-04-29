import {api} from "./api.js";

const cartsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCartProduct: builder.query({ query: () => "/cart" ,invalidatesTags: ["cart"]}),
    addProductToCart: builder.mutation({
      query: (cart) => ({
        url: "/cart",
        method: "POST",
        body: cart,
      }),
      invalidatesTags: ["cart"]
    }),
  }),
});

export const { useGetCartProductQuery, useAddProductToCartMutation } = cartsApi;
