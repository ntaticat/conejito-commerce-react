import React from "react";
import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <PageLayout>
      <div className="p-3">
        <h2 className="text-xl text-center p-3">Menú</h2>
        <hr className="px-3 border-3 border-solid border-gray-400" />
      </div>
      <div className="flex flex-wrap p-3">
        <p className="w-full">
          <Link to="/management">Administración</Link>
        </p>
        <p className="w-full">
          <Link to="/start-selling">Ventas</Link>
        </p>
        <p className="w-full">
          <Link to="/dashboard">Dashboard</Link>
        </p>
      </div>
    </PageLayout>
  );
};
