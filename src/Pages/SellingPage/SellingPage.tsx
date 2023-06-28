import React from "react";
import { IProduct } from "../../store/slices/products/productsSlice";
import { SwipeProduct } from "./components/SwipeProduct";

export const SellingPage = () => {
  const PRODUCTS_DATA: IProduct[] = [
    {
      name: "Product #1",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #2",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #3",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #4",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #5",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
    {
      name: "Product #6",
      _id: "1",
      categories: [],
      description: "",
      state: true,
      stock: 100,
    },
  ];

  return (
    <div className="relative h-screen w-screen overflow-auto">
      <div className="p-3">
        {/* Categoria */}
        <div className=""></div>
        {/* Productos */}
        <div className="">
          {PRODUCTS_DATA.map((product, productIndex) => (
            <div key={productIndex} className="">
              {product.name}
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <SwipeProduct />
      </div>
    </div>
  );
};
