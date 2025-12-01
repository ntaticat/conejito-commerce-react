import React from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../../layouts/PageLayout/PageLayout";
import "./ManagementPage.css";

interface IManagementPageMenu {
  title: string;
  link: string;
  img: string;
  imgAlt: string;
  order: number;
  text: string;
}

export const ManagementPage = () => {
  const MENU_LIST: IManagementPageMenu[] = [
    {
      title: "Productos",
      text: "Aquí se pueden visualizar los productos registrados",
      link: "products",
      img: "https://static-bebeautiful-in.unileverservices.com/how-to-choose-the-right-skincare-products-for-your-skin-typemobilehome.jpg",
      imgAlt: "",
      order: 1,
    },
    {
      title: "Categorias",
      text: "Aquí se pueden visualizar las categorias de los productos",
      link: "categories",
      img: "https://cdn.thewirecutter.com/wp-content/uploads/2018/08/kidslabels-2x1-1070.jpg?auto=webp&quality=75&crop=2:1&width=1024",
      imgAlt: "",
      order: 2,
    },
    {
      title: "Ventas",
      text: "Aquí se pueden visualizar las ventas",
      link: "sellings",
      img: "https://d1ih8jugeo2m5m.cloudfront.net/2022/07/el-ecommerce-que-es.jpg",
      imgAlt: "",
      order: 3,
    },
    {
      title: "Clientes",
      text: "Aquí se pueden visualizar los clientes",
      link: "customers",
      img: "https://www.constantcontact.com/blog/wp-content/uploads/2019/04/Social-Interacting-with-Customers.jpg",
      imgAlt: "",
      order: 4,
    },
  ];

  return (
    <PageLayout>
      <div className="p-3">
        <h2 className="text-xl text-center p-3">Página de administración</h2>
        <hr className="px-3 border-3 border-solid border-gray-400" />
      </div>
      <div className="flex flex-wrap p-3">
        {MENU_LIST?.map((menu, menuIndex) => (
          <Link
            to={menu.link}
            className="w-full h-auto mb-3 rounded-xl overflow-hidden shadow-md shadow-gray-500/25"
          >
            <div
              key={menuIndex}
              className="relative w-full aspect-[3/2] last:mb-0"
            >
              <div className="absolute top-0 left-0 z-10 w-full h-full">
                <img
                  src={menu.img}
                  alt={menu.imgAlt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full z-20 flex justify-center items-center p-5 bg-gray-500/75 shadow-inner shadow-gray-500/25">
                <div className="w-full h-full flex flex-wrap content-center rounded-lg text-white border-2 border-solid border-white">
                  <p className="w-full text-center text-lg font-semibold px-3 py-2">
                    {menu.title}
                  </p>
                  <p className="w-full text-center text-lg font-medium px-3 py-2 leading-4">
                    {menu.text}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
};
