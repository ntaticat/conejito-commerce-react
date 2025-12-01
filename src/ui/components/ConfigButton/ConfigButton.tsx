import { faBars, faGear, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useConfig } from '../../../application/contexts/ConfigContext';

export const ConfigButton = () => {
  const { toggle } = useConfig();

  return (
    <button
      className="p-2 rounded-full box-border inline-flex items-center justify-center bg-gray-100 active:bg-gray-200 transition"
      onClick={toggle}
    >
      <FontAwesomeIcon className="w-5 h-5 text-gray-700" icon={faBars} />
    </button>
  );
};
