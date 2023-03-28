import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICategory {
  _id: string;
  name: string;
  description: string;
  state: boolean;
  categoryType: string;
  products: any[];
}

export interface CategoriesState {
  categorias: ICategory[];
  categoria?: ICategory;
  loading: boolean;
  error: string;
}

const initialState: CategoriesState = {
  categorias: [],
  categoria: undefined,
  error: "",
  loading: false,
};

export const categoriesSlice = createSlice({
  name: "categorias",
  initialState,
  reducers: {
    getCategories: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, action: PayloadAction<ICategory[]>) => {
      state.categorias = action.payload;
      state.loading = false;
    },
    getCategoriesError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    postCategory: (state) => {
      state.loading = true;
    },
    postCategorySuccess: (state) => {
      state.loading = false;
    },
    postCategoryError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesError,
  postCategory,
  postCategorySuccess,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
