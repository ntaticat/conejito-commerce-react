import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../store/apis/conejitoCommerceApi";
import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import { ProductoItem } from "./ProductoItem/ProductoItem";
import { ProductoForm } from "./ProductoForm/ProductoForm";

export const ProductosPage = () => {
  const {
    data: productsData,
    isError,
    isLoading,
    error,
  } = useGetProductsQuery();

  const [modal, toggleModal] = useState<boolean>(false);

  return (
    <PageLayout>
      {/* Productos */}
      <div className="w-full p-3">
        {productsData?.map((producto) => (
          <ProductoItem key={producto._id} product={producto} />
        ))}
      </div>

      {/* Panel bottom */}
      <div className="sticky left-0 bottom-0 bg-white w-full h-auto border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
        <button
          className="py-2 px-3 w-full rounded-lg bg-gray-900 text-white"
          onClick={() => toggleModal(!modal)}
        >
          Añadir producto
        </button>
      </div>

      {/* Form */}
      <ProductoForm showForm={modal} setShowForm={toggleModal} />
    </PageLayout>
  );
};
