import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export const PageHeader = () => {
  return (
    <div className="bg-pink-300 sticky z-40 top-0 left-0 w-full py-2 px-3 text-center box-border shadow-md shadow-gray-500/25">
      <Link to="/">
        <p className="text-xl font-semibold text-white">ConejitoCommerce</p>
      </Link>
    </div>
  );
};
