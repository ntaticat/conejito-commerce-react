import React from 'react';
import { PageLayout } from '../../layouts/PageLayout/PageLayout';
import { Link } from 'react-router-dom';

export const StartSellingPage = () => {
  return (
    <PageLayout>
      <div className="relative w-full h-full flex flex-nowrap flex-col justify-between">
        {/* Categorias */}
        <div className="w-full p-3">
          <p>Jornada Laboral</p>
          <p>Aquí habrán parámetros para iniciar la chamba jejeje</p>
        </div>

        {/* Panel bottom */}
        <div className="sticky bottom-0 left-0 z-20 w-full h-auto bg-pink-200 p-3 text-center shadow-lg shadow-gray-500/50">
          <Link to="/selling">
            <button className="py-2 px-3 w-full rounded-lg bg-pink-300 text-white">
              Iniciar jornada
            </button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};
