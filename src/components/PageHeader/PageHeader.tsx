import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useKeycloakAuth } from "../../contexts/KeycloakContext";
import { ConfigButton } from "../ConfigButton/ConfigButton";
import { useConfig } from "../../contexts/ConfigContext";

export const PageHeader = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const segments = pathname.split("/").filter(Boolean);

    const rootModules = ["shifts", "management"];

    const rootSegment = segments[0];

    if (segments.length === 1) {
      navigate("/");
    } else if (rootModules.includes(rootSegment)) {
      navigate(`/${rootSegment}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="bg-pink-300 sticky z-40 top-0 w-full py-2 px-4 flex items-center justify-between box-border shadow-md shadow-gray-500/25">
      <p className="text-xl font-semibold text-white" onClick={handleClick}>
        ConejitoCommerce
      </p>

      <ConfigButton />
    </div>
  );
};
