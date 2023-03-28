import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../../store/slices/products/productsSlice";
import { apiUrl } from "../../../utils/environments";

interface IProductoItem {
  key: string;
  product: IProduct;
}

export const ProductoItem = ({ product }: IProductoItem) => {
  const defaultImageUrl =
    "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

  return (
    <Link
      to={`/productos/${product._id}`}
      className="flex flex-nowrap justify-between items-center first:rounded-t-lg last:rounded-b-lg first:border-t-2 border-b-2 border-x-2 border-solid border-gray-900 overflow-hidden"
    >
      <div className="px-3 w-full">
        <h2 className="text-base text-center">{product.name}</h2>
        <div className="w-full flex flex-nowrap justify-center">
          <p className="text-xs mx-2 leading-none font-light">
            Stock: <span className="text-sm font-normal">{product.stock}</span>
          </p>
          <p className="text-xs mx-2 leading-none font-light">
            Precio:{" "}
            {/* <span className="text-sm font-normal">{`$${product?.currentPrice?.amount}`}</span> */}
            <span className="text-sm font-normal">{`$0`}</span>
          </p>
        </div>
      </div>
      <div className="">
        {/* <img
          className="h-16 w-32 object-cover object-center"
          src={
            product.img === "uploads/default.jpg" || product.img === ""
              ? defaultImageUrl
              : `${apiUrl}/${product.img}`
          }
          alt="producto"
        /> */}
      </div>
    </Link>
  );
};
