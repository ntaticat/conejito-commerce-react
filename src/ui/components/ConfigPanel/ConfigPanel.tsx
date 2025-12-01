import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useKeycloakAuth } from '../../../application/contexts/KeycloakContext';
import { useConfig } from '../../../application/contexts/ConfigContext';

export const ConfigPanel = () => {
  const { open, close } = useConfig();
  const { logout } = useKeycloakAuth();

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-40 transition ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Fondo oscurecido */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel lateral */}
      <div
        className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl 
                    transition-transform p-4 
                    ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Configuración</h2>

          <button
            onClick={close}
            aria-label="Cerrar"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
          </button>
        </div>

        {/* contenido de config */}
        <div className="space-y-3">
          <p className="text-gray-600">Opciones...</p>
          <button onClick={() => logout({ redirectUri: window.location.origin })}>
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};
