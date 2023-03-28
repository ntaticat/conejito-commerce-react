import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHomeAlt } from "@fortawesome/free-solid-svg-icons";

interface INavigationMenu {
  name: string;
  icon: string;
  dis: string;
}

export const Navigation = () => {
  const MENUS: INavigationMenu[] = [
    {
      name: "Productos",
      icon: "faHome",
      dis: "translate-x-0",
    },
    {
      name: "Categorias",
      icon: "",
      dis: "translate-x-16",
    },
    {
      name: "Ventas",
      icon: "",
      dis: "translate-x-32",
    },
    {
      name: "Clientes",
      icon: "",
      dis: "translate-x-48",
    },
    {
      name: "Inicio",
      icon: "",
      dis: "translate-x-48",
    },
  ];

  const [active, setActive] = useState<number>(0);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="sticky bottom-0 left-0 z-20 bg-gray-300 w-full h-auto box-border overflow-auto">
      <button
        className="w-full p-2 text-center bg-black text-white"
        onClick={() => setShowMenu(!showMenu)}
      >
        Menu
      </button>
      <ul
        className={`relative flex flex-nowrap p-2 ${
          showMenu
            ? "duration-700 translate-y-full"
            : "duration-700 translate-y-0"
        }`}
      >
        {MENUS.map((menu, menuIndex) => (
          <li key={menuIndex} className={`overflow-hidden flex justify-center`}>
            <a
              className={`w-8/12 flex flex-col text-center box-border cursor-pointer p-2 rounded-xl ${
                active === menuIndex
                  ? "duration-700 bg-gray-600"
                  : "duration-200"
              }`}
              onClick={() => setActive(menuIndex)}
            >
              <span className="">
                <FontAwesomeIcon icon={faHomeAlt} />
              </span>
              <span
                className={`text-xs px-1 ${
                  active === menuIndex
                    ? "translate-y-0 duration-700 opacity-100"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
