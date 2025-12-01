import {
  faArrowLeft,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-2xl p-10 text-center border border-gray-200">
        <div className="flex justify-center mb-6">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="text-red-500 w-16 h-16"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Página no encontrada
        </h2>

        <p className="text-gray-500 max-w-md mx-auto mb-8">
          La página que estás buscando no existe o fue movida. Esto podría
          significar que intentaste acceder a una jornada, reporte o factura que
          ya no está disponible.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                     bg-blue-600 hover:bg-blue-700 text-white font-medium
                     transition-all shadow"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};
