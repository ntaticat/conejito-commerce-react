import React from "react";
import { Field, Form, Formik } from "formik";
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
      } z-20 fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50`}
    >
      <div className="max-w-sm bg-white">
        <div className="flex items-stretch justify-between p-3 bg-gray-900 text-white">
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
                  <label htmlFor="name">Nombre</label>
                  <Field
                    name="name"
                    type="text"
                    className={
                      "form-control" +
                      (errors.name && touched.name ? " is-invalid" : "")
                    }
                  />
                  <label htmlFor="description">Descripción</label>
                  <Field
                    name="description"
                    type="textarea"
                    className={
                      "form-control" +
                      (errors.description && touched.description
                        ? " is-invalid"
                        : "")
                    }
                  />

                  <div id="state-radio">Estado</div>
                  <div role="group" aria-labelledby="state-radio">
                    <label htmlFor="state">
                      Activo
                      <Field name="state" type="radio" value="1" />
                    </label>
                    <label htmlFor="state">
                      Inactivo
                      <Field name="state" type="radio" value="0" />
                    </label>
                  </div>

                  <div id="categoryType-group">Estado</div>
                  <div role="group" aria-labelledby="categoryType-group">
                    <label htmlFor="categoryType">
                      Producto
                      <Field
                        name="categoryType"
                        type="radio"
                        value="PRODUCT_CATEGORY"
                      />
                    </label>
                    <label htmlFor="categoryType">
                      Facilitador
                      <Field
                        name="categoryType"
                        type="radio"
                        value="EASY_CATEGORY"
                      />
                    </label>
                  </div>

                  {/* <ErrorMessage name="name" component="div" className="invalid-feedback" /> */}
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="px-4 py-2 mr-2 text-white bg-green-600 rounded"
                  >
                    Añadir
                  </button>
                  <button
                    type="reset"
                    className="px-4 py-2 mr-2 text-white bg-gray-600 rounded"
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
