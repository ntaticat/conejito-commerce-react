
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory } from '../slices/categories/categoriesSlice';

export const conejitoCommerceApi = createApi({
  reducerPath: 'conejitoCommerceApi',
  baseQuery: fetchBaseQuery({baseUrl: `http://192.168.1.76:4000/api`}),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    getCategories: builder.query<ICategory[], string>({
      query: () => `/categorias`,
    }),
  }),
});

export const { useGetProductsQuery, useGetCategoriesQuery } = conejitoCommerceApi;