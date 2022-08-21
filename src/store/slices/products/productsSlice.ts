import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../categories/categoriesSlice"

export interface IProduct {
  _id: string,
  name: string,
  description: string,
  stock: number,
  state: boolean,
  categories: ICategory[]
}

export interface ProductsState {
  productos: IProduct[],
  producto?: IProduct,
  loading: boolean,
  error: string
}

const initialState: ProductsState = {
  productos: [],
  producto: undefined,
  loading: false,
  error: ""
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Query Productos
    getProducts: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.productos = action.payload;
      state.loading = false;
    },
    getProductsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Query Producto
    getProduct: (state) => {
      state.loading = true;
    },
    getProductSuccess: (state, action: PayloadAction<IProduct>) => {
      state.producto = action.payload;
      state.loading = false;
    },
    getProductError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Command Crear Producto
    postProduct: (state) => {
      state.loading = true;
    },
    postProductSuccess: (state) => {
      state.loading = false;
    },
    postProductError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Command Editar Producto
    putProduct: (state) => {
      state.loading = true;
    },
    putProductSuccess: (state) => {
      state.loading = false;
    },
    putProductError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Command Crear Precio
    postProductPrice: (state) => {
      state.loading = true;
    },
    postProductPriceSuccess: (state) => {
      state.loading = false;
    },
    postProductPriceError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  }
});

export const { getProduct, getProductError, getProductSuccess, getProducts, getProductsError, getProductsSuccess, postProduct, postProductError, postProductPrice, postProductPriceError, postProductPriceSuccess, postProductSuccess, putProduct, putProductError, putProductSuccess } = productsSlice.actions;
export default productsSlice;