import { api } from "./api.js";

const uploadsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // uploadProduct endpoints
    uploadProduct: builder.mutation({
        query: (body) => ({
        url: "/product",
        method: "POST",
        body: body,
      }),
    }),
    // UploadMulti
    UploadMulti: builder.mutation({
        query: (files) => {
        const formData = new FormData();

        if (Object.values(files)[0].length > 1) {
          for (let file of Object.values(files)[0]) {
            formData.append(Object.keys(files), file);
          }
          return {
            url: "/product/uploadFildes",
            method: "POST",
            headers: {
              "Content-Type": undefined,
            },
            body: formData,
          };
        
        } else {
          formData.append("photo", files[0]);
          return {
            url: "/product/upload",
            method: "POST",
            headers: {
              "Content-Type": undefined,
            },
            body: formData,
          };
        }
      },
    }),


  }),
});

export const { useUploadProductMutation, useUploadMultiMutation } = uploadsApi;
