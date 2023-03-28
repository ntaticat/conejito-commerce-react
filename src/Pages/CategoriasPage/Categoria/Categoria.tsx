import React from "react";
import { ICategory } from "../../../store/slices/categories/categoriesSlice";

interface ICategoriaComponent {
  categoria: ICategory;
}

export const Categoria = ({ categoria }: ICategoriaComponent) => {
  return (
    <div
      key={categoria._id}
      className="flex flex-nowrap justify-between items-center first:rounded-t-lg last:rounded-b-lg first:border-t-2 border-b-2 border-x-2 border-solid border-gray-900"
    >
      <h2 className="py-2 px-3">{categoria.name}</h2>
      <div className="py-2 px-3 text-center text-xs">
        <p className="text-sm">{categoria.products?.length || 0}</p>
        <p>productos</p>
      </div>
    </div>
  );
};
