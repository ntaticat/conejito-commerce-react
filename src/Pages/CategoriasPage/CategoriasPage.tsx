import { useEffect, useState } from "react";

import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import { useGetCategoriesQuery } from "../../store/apis/conejitoCommerceApi";
import { ICategory } from "../../store/slices/categories/categoriesSlice";
import { Categoria } from "./Categoria/Categoria";
import { CrearCategoriaModal } from "./CrearCategoriaModal/CrearCategoriaModal";

export const CategoriasPage = () => {
  // const {
  //   data: categoriesData,
  //   isError,
  //   isLoading,
  //   error,
  // } = useGetCategoriesQuery();

  const categoriesData: ICategory[] = [
    {
      _id: "1",
      categoryType: "CATEGORIA",
      description: "Esta es una categoria para mostrar",
      name: "Categoria #1",
      products: [],
      state: true,
    },
    {
      _id: "2",
      categoryType: "CATEGORIA",
      description: "Esta es una categoria para mostrar",
      name: "Categoria #2",
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
          {categoriesData?.map((category) => (
            <Categoria key={category._id} categoria={category} />
          ))}
          {categoriesData?.map((category) => (
            <Categoria key={category._id} categoria={category} />
          ))}
          {categoriesData?.map((category) => (
            <Categoria key={category._id} categoria={category} />
          ))}
          {categoriesData?.map((category) => (
            <Categoria key={category._id} categoria={category} />
          ))}
          {categoriesData?.map((category) => (
            <Categoria key={category._id} categoria={category} />
          ))}
        </div>

        {/* Panel bottom */}
        <div className="sticky bottom-0 left-0 z-20 w-full h-auto bg-blue-300 p-3 text-center shadow-lg shadow-gray-500/50">
          <button
            className="py-2 px-3 w-full rounded-lg bg-red-300 text-white"
            onClick={onToggleModal}
          >
            Añadir categoría
          </button>
        </div>
      </div>

      {/* Formulario */}
      <div className="fixed hidden top-10 p-3">
        <div className="bg-white p-3 border-2 border-solid border-gray-900 rounded-xl mb-2">
          <form>
            <label htmlFor="">Nombre</label>
            <input
              className="w-full mb-2"
              type="text"
              placeholder="Nombre..."
            />
            <label htmlFor="">Descripción</label>
            <textarea
              className="w-full mb-2"
              placeholder="Datos adicionales..."
              name=""
              id=""
              rows={4}
            ></textarea>
          </form>
        </div>
      </div>

      {/* Modal */}
      <CrearCategoriaModal showModal={modal} setShowModal={toggleModal} />
    </PageLayout>
  );
};
