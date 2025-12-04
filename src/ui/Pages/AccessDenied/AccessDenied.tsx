import { useKeycloakAuth } from '@/application/contexts/KeycloakContext';

export const AccessDenied = () => {
  const { keycloak } = useKeycloakAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-sm w-full text-center">
        {/* Icono visual simple */}
        <div className="mb-4 text-4xl">🔒</div>

        {/* Título y descripción atractivos */}
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Acceso Requerido</h2>
        <p className="text-gray-600 mb-6">
          Inicia sesión para acceder al contenido de la aplicación.
        </p>

        {/* Botón estilizado */}
        <button
          onClick={() => keycloak?.login()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-xl"
        >
          Iniciar sesión con Keycloak
        </button>
      </div>
    </div>
  );
};
