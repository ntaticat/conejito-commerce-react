import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../utils/environments";
import { ICategory } from "../slices/categories/categoriesSlice";
import { IProduct } from "../slices/products/productsSlice";

export const conejitoCommerceApi = createApi({
  reducerPath: "conejitoCommerceApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiUrl}` }),
  tagTypes: ["Products", "Categories"],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => `/products`,
      providesTags: ["Products"],
    }),
    getProductById: builder.query<IProduct, string>({
      query: (productId: string) => `/products/${productId}`,
    }),
    getCategories: builder.query<ICategory[], void>({
      query: () => `/categories`,
      providesTags: ["Categories"],
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } =
  conejitoCommerceApi;
