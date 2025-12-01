import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/domain/entities/Product';

interface IProductoItem {
  key: string;
  product: Product;
}

export const ProductItem = ({ product }: IProductoItem) => {
  const defaultImageUrl =
    'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg';

  return (
    <div className="flex flex-nowrap justify-between items-center first:rounded-t-lg last:rounded-b-lg last:border-0 border-b-2 border-solid text-gray-700 border-gray-200 hover:bg-red-300 hover:text-white duration-100 p-3 overflow-hidden">
      <div className="flex-grow">
        <Link to={`${product.id}`}>
          <h2 className="inline-block py-2 px-3 underline text-lg">{product.name}</h2>
        </Link>
        <div className="">
          <div className="w-full flex flex-wrap justify-left px-3 pb-2">
            <p className="text-xs mr-2 leading-none font-light">
              Costo: <span className="text-sm font-normal">{`$${product.cost}`}</span>
            </p>
            <p className="text-xs leading-none font-light">
              Precio: <span className="text-sm font-normal">{`$${product.price}`}</span>
            </p>
          </div>
        </div>
      </div>
      <img className="h-32 w-32 object-cover object-center" src={defaultImageUrl} alt="producto" />
    </div>
  );
};
