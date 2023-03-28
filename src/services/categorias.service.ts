import { ICategory } from "../store/slices/categories/categoriesSlice";
import { httpCommon } from "./http-common";

export const getAllCategories = () => {
  return httpCommon.get("/categorias");
};

export const getGategory = (id: string) => {
  return httpCommon.get(`/categorias/${id}`);
};
export const createCategory = (data: ICategory) => {
  return httpCommon.post("/categorias", data);
};
export const updateCategory = (id: string, data: Partial<ICategory>) => {
  return httpCommon.put(`/categorias/${id}`, data);
};
export const deleteCategory = (id: string) => {
  return httpCommon.delete(`/categorias/${id}`);
};
// deleteAll() {
//   return httpCommon.delete(`/categorias`);
// }
// findByTitle(title) {
//   return httpCommon.get(`/categorias?title=${title}`);
// }
