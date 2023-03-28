import { useEffect, useState } from "react";

import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import { useGetCategoriesQuery } from "../../store/apis/conejitoCommerceApi";
import { Categoria } from "./Categoria/Categoria";
import { CrearCategoriaModal } from "./CrearCategoriaModal/CrearCategoriaModal";

export const CategoriasPage = () => {
  const {
    data: categoriesData,
    isError,
    isLoading,
    error,
  } = useGetCategoriesQuery();

  useEffect(() => {
    // OnInit
  }, []);

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
        </div>

        {/* Panel bottom */}
        <div className="sticky bottom-0 left-0 z-20 w-full h-auto bg-white border-y-2 border-solid border-gray-900 py-2 px-3 text-center">
          <button
            className="py-2 px-3 w-full rounded-lg bg-gray-900 text-white"
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
