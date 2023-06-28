import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CategoriasPage } from "./Pages/CategoriasPage/CategoriasPage";
import { ManagementPage } from "./Pages/ManagementPage/ManagementPage";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { ProductosPage } from "./Pages/ProductosPage/ProductosPage";
import { MainPage } from "./Pages/MainPage/MainPage";
import { StartSellingPage } from "./Pages/StartSellingPage/StartSellingPage";
import { SellingPage } from "./Pages/SellingPage/SellingPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/categories" element={<CategoriasPage />} />
        <Route path="/products" element={<ProductosPage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/start-selling" element={<StartSellingPage />} />
        <Route path="/selling" element={<SellingPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
