import { useEffect, useState } from "react";

import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import { useGetCategoriesQuery } from "../../store/apis/conejitoCommerceApi";
import { ICategory } from "../../store/slices/categories/categoriesSlice";
import { CategoriaItem } from "./components/CategoriaItem";
import { CrearCategoriaModal } from "./components/CrearCategoriaModal";

export const CategoriasPage = () => {
  // const {
  //   data: CATEGORIES_DATA,
  //   isError,
  //   isLoading,
  //   error,
  // } = useGetCategoriesQuery();

  const CATEGORIES_DATA: ICategory[] = [
    {
      _id: "1",
      categoryType: "CATEGORIA",
      description: "Esta es una categoria para mostrar",
      name: "CategoriaItem #1",
      products: [],
      state: true,
    },
    {
      _id: "2",
      categoryType: "CATEGORIA",
      description: "Esta es una categoria para mostrar",
      name: "CategoriaItem #2",
      products: [],
      state: true,
    },
  ];

  const [modal, toggleModal] = useState(false);

  const onToggleModal = () => {
    modal ? toggleModal(false) : toggleModal(true);
  };

  return (
    <PageLayout>
      <div className="relative w-full h-full flex flex-nowrap flex-col justify-between">
        {/* Categorias */}
        <div className="w-full p-3">
          {CATEGORIES_DATA?.map((category) => (
            <CategoriaItem key={category._id} categoria={category} />
          ))}
        </div>

        {/* Panel bottom */}
        <div className="sticky bottom-0 left-0 z-20 w-full h-auto bg-pink-200 p-3 text-center shadow-lg shadow-gray-500/50">
          <button
            className="py-2 px-3 w-full rounded-lg bg-pink-300 text-white"
            onClick={onToggleModal}
          >
            Añadir categoría
          </button>
        </div>
      </div>

      {/* Modal */}
      <CrearCategoriaModal showModal={modal} setShowModal={toggleModal} />
    </PageLayout>
  );
};
