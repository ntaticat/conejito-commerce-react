import React from "react";
import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import { Link } from "react-router-dom";
import {
  faChartColumn,
  faClock,
  faDollar,
  faFileInvoice,
  faGear,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems = [
  { label: "Jornadas de venta", to: "/shifts", icon: faDollar },
  { label: "Administración", to: "/management", icon: faGear },
  { label: "Reportes", to: "/dashboard", icon: faChartColumn },
  { label: "Facturas", to: "/invoices", icon: faFileInvoice },
];

export const MainPage = () => {
  return (
    <PageLayout>
      <div className="px-4 pt-4 text-center">
        <h2 className="text-2xl font-bold">Menú</h2>
        <p className="text-gray-500 text-sm mt-1">
          Funcionalidades que el sistema te ofrece
        </p>
      </div>

      <div className="p-4 grid gap-4 sm:grid-cols-2">
        {menuItems.map(({ label, to, icon }) => (
          <Link
            key={to}
            to={to}
            className="group flex flex-col items-center p-6 
                       bg-white rounded-2xl shadow-sm 
                       border border-gray-200 
                       hover:shadow-lg hover:-translate-y-1 
                       transition-all cursor-pointer"
          >
            <div
              className="p-4 rounded-full bg-gray-50 mb-3 
                            group-hover:bg-gray-100 transition-all flex"
            >
              <FontAwesomeIcon icon={icon} className="text-pink-300 w-8 h-8" />
            </div>
            <span className="font-medium text-gray-800 text-center group-hover:text-blue-600">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};
