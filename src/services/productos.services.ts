import { IProduct } from "../store/slices/products/productsSlice";
import { httpCommon } from "./http-common";

export const getAllProducts = () => {
  return httpCommon.get("productos");
};

export const getProduct = (id: string) => {
  return httpCommon.get(`productos/${id}`);
};
export const createProduct = (data: IProduct) => {
  return httpCommon.post("productos", data);
};
export const updateProduct = (id: string, data: IProduct) => {
  return httpCommon.put(`productos/${id}`, data);
};
export const deleteProduct = (id: string) => {
  return httpCommon.delete(`productos/${id}`);
};

export const addProductPrice = (productoId: string, priceInfo: any) => {
  return httpCommon.post(`productos/${productoId}/precios`, priceInfo);
};
export const removeProductPrice = (productoId: string, precioId: string) => {
  return httpCommon.delete(`productos/${productoId}/precios/${precioId}`);
};

// deleteAll() {
//   return httpCommon.delete(`/categorias`);
// }
// findByTitle(title) {
//   return httpCommon.get(`/categorias?title=${title}`);
// }
