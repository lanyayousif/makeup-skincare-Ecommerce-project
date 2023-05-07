import { api } from "./api.js";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/user/signup",
        method: "POST",
        body: body,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => "/user/currentuser",
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {useSignupMutation,useGetCurrentUserQuery,useLoginMutation}=authApi