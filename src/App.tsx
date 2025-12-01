import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CategoriasPage } from './Pages/CategoriasPage/CategoriasPage';
import { ManagementPage } from './Pages/ManagementPage/ManagementPage';
import { PageNotFound } from './Pages/PageNotFound/PageNotFound';
import { ProductsPage } from './Pages/ProductsPage/ProductsPage';
import { MainPage } from './Pages/MainPage/MainPage';
import { StartSellingPage } from './Pages/StartSellingPage/StartSellingPage';
import { SellingPage } from './Pages/SellingPage/SellingPage';
import { useKeycloakAuth } from './contexts/KeycloakContext';
import { ShiftsPage } from './Pages/ShiftsPage/ShiftsPage';
import { NewProductPage } from 'Pages/NewProductPage/NewProductPage';
import { ProductPage } from 'Pages/ProductPage/ProductPage';
import { NewCategoryPage } from 'Pages/NewCategoryPage/NewCategoryPage';

function App() {
  const { keycloak, isAuthenticated, isLoading } = useKeycloakAuth();

  if (isLoading) {
    return <div>Cargando autenticación...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        <p>Inicia sesión para ver el contenido.</p>
        <button onClick={() => keycloak?.login()}>Login con Keycloak</button>
      </div>
    );
  }

  return (
    <div>
      <Routes>
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/management/categories" element={<CategoriasPage />} />
        <Route path="/management/categories/new-category" element={<NewCategoryPage />} />
        <Route path="/management/products" element={<ProductsPage />} />
        <Route path="/management/products/:id" element={<ProductPage />} />
        <Route path="/management/products/new-product" element={<NewProductPage />} />
        <Route path="/selling" element={<SellingPage />} />
        <Route path="/shifts" element={<ShiftsPage />} />
        <Route path="/start-selling" element={<StartSellingPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
