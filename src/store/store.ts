import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { conejitoCommerceApi } from "./apis/conejitoCommerceApi";
import { categoriesSlice } from "./slices/categories/categoriesSlice";
import { productsSlice } from "./slices/products/productsSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice.reducer,
    products: productsSlice.reducer,
    [conejitoCommerceApi.reducerPath]: conejitoCommerceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(conejitoCommerceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
