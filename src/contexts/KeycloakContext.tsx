import Keycloak from "keycloak-js";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface KeycloakContextType {
  keycloak: Keycloak | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: (options?: Keycloak.KeycloakLogoutOptions) => void;
}

const KeycloakContext = createContext<KeycloakContextType | undefined>(
  undefined
);

const keycloakInstance = new Keycloak({
  url: "http://localhost:8080",
  realm: "ConejitoCommerce",
  clientId: "conejito-commerce-react",
});

export const KeycloakProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // La lógica de inicialización solo se ejecuta aquí, una vez, dentro del provider
    keycloakInstance
      .init({ onLoad: "check-sso" })
      .then((authenticated) => {
        setIsAuthenticated(authenticated);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Authentication Failed", error);
        setIsLoading(false);
      });
  }, []);

  const handleLogout = (options?: Keycloak.KeycloakLogoutOptions) => {
    if (keycloakInstance) {
      keycloakInstance.logout(options);
    }
  };

  return (
    <KeycloakContext.Provider
      value={{
        keycloak: keycloakInstance,
        isAuthenticated,
        isLoading,
        logout: handleLogout,
      }}
    >
      {children}
    </KeycloakContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
export const useKeycloakAuth = () => {
  const context = useContext(KeycloakContext);
  if (context === undefined) {
    throw new Error("useKeycloakAuth must be used within a KeycloakProvider");
  }
  return context;
};
