import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { ICategory } from "../../../store/slices/categories/categoriesSlice";

interface ICrearCategoriaModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ICrearCategoriaFormik {
  name: string;
  description: string;
  state: boolean;
}

export const CrearCategoriaModal = ({
  showModal,
  setShowModal,
}: ICrearCategoriaModal) => {
  const initialValues: ICrearCategoriaFormik = {
    name: "",
    description: "",
    state: false,
  };

  const onClickToggleShowModal = () => {
    setShowModal(!showModal);
  };

  const onSubmitCategoria = (data: ICrearCategoriaFormik) => {};

  return (
    <div
      className={`${
        showModal ? "visible" : "invisible"
      } z-50 fixed inset-0 flex items-center justify-center bg-gray-700/75 p-3`}
    >
      <div className="max-w-sm bg-white rounded-lg overflow-hidden">
        <div className="flex items-stretch justify-between p-3 bg-red-300 text-white">
          <h3 className="text-2xl">Añadir Categoria</h3>
          <button onClick={onClickToggleShowModal}>
            <FontAwesomeIcon size="lg" icon={faTimesCircle} />
          </button>
        </div>
        <div className="p-3">
          <Formik initialValues={initialValues} onSubmit={onSubmitCategoria}>
            {({ errors, status, touched }) => (
              <Form>
                <div className="form-group">
                  <div className="mb-3">
                    <label htmlFor="name">Nombre</label>
                    <Field
                      placeholder="Categoria #1"
                      name="name"
                      type="text"
                      className={
                        "w-full px-3 py-2" +
                        (errors.name && touched.name ? " " : "")
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description">Descripción</label>
                    <Field
                      placeholder="Esta es una descripción corta"
                      name="description"
                      type="textarea"
                      className={
                        "w-full px-3 py-2" +
                        (errors.description && touched.description
                          ? " is-invalid"
                          : "")
                      }
                    />
                  </div>
                  <div className="mb-3">
                    <div>Estado</div>
                    <div role="group" aria-labelledby="state-radio">
                      <div className="w-full">
                        <Field
                          id="state-active"
                          name="state"
                          type="radio"
                          value="1"
                          checked
                        />
                        <label htmlFor="state-active">Activo</label>
                      </div>
                      <div className="">
                        <Field
                          id="state-inactive"
                          name="state"
                          type="radio"
                          value="0"
                        />
                        <label htmlFor="state-inactive">Inactivo</label>
                      </div>
                    </div>
                  </div>
                  <ErrorMessage name="name" component="div" className="mb-3" />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="px-4 py-2 mr-2 text-white bg-red-400 rounded"
                  >
                    Añadir
                  </button>
                  <button
                    type="reset"
                    className="px-4 py-2 text-white bg-gray-400 rounded"
                  >
                    Vaciar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
