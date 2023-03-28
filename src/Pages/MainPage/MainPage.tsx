import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <PageLayout>
      <div className="flex flex-wrap p-3">
        <div className="w-full mb-3 flex justify-center items-center">
          <Link
            to="/clientes"
            className="text-center bg-gray-900 text-white rounded-lg square-bottom"
          >
            <div className="absolute w-full h-full flex flex-wrap justify-center items-center">
              <span>Clientes</span>
            </div>
          </Link>
        </div>
        <div className="w-full mb-3 flex justify-center items-center">
          <Link
            to="/categorias"
            className="text-center bg-gray-900 text-white rounded-lg square-bottom"
          >
            <div className="absolute w-full h-full flex flex-wrap justify-center items-center">
              <span>Categorias</span>
            </div>
          </Link>
        </div>
        <div className="w-full mb-3 flex justify-center items-center">
          <Link
            to="/productos"
            className="text-center bg-gray-900 text-white rounded-lg square-bottom"
          >
            <div className="absolute w-full h-full flex flex-wrap justify-center items-center">
              <span>Productos</span>
            </div>
          </Link>
        </div>
        <div className="w-full mb-3 flex justify-center items-center">
          <Link
            to="/ventas"
            className="text-center bg-gray-900 text-white rounded-lg square-bottom"
          >
            <div className="absolute w-full h-full flex flex-wrap justify-center items-center">
              <span>Ventas</span>
            </div>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center">
          <Link
            to="/ventas/register"
            className="text-center bg-gray-900 text-white rounded-lg square-bottom"
          >
            <div className="absolute w-full h-full flex flex-wrap justify-center items-center">
              <span>Registrar Venta</span>
            </div>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};
