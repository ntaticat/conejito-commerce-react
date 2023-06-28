import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../store/apis/conejitoCommerceApi";
import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import { ProductoItem } from "./ProductoItem/ProductoItem";
import { ProductoForm } from "./ProductoForm/ProductoForm";
import { IProduct } from "../../store/slices/products/productsSlice";

export const ProductosPage = () => {
  // const {
  //   data: productsData,
  //   isError,
  //   isLoading,
  //   error,
  // } = useGetProductsQuery();

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

  const [modal, toggleModal] = useState<boolean>(false);

  return (
    <PageLayout>
      <div className="relative w-full h-full flex flex-nowrap flex-col justify-between">
        {/* Productos */}
        <div className="w-full p-3">
          {PRODUCTS_DATA?.map((producto) => (
            <ProductoItem key={producto._id} product={producto} />
          ))}
        </div>

        {/* Panel bottom */}
        <div className="sticky bottom-0 left-0 z-20 w-full h-auto bg-pink-200 p-3 text-center shadow-lg shadow-gray-500/50">
          <button
            className="py-2 px-3 w-full rounded-lg bg-pink-300 text-white"
            onClick={() => toggleModal(!modal)}
          >
            Añadir producto
          </button>
        </div>
      </div>

      {/* Form */}
      <ProductoForm showForm={modal} setShowForm={toggleModal} />
    </PageLayout>
  );
};
