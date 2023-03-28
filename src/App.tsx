import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CategoriasPage } from "./Pages/CategoriasPage/CategoriasPage";
import { MainPage } from "./Pages/MainPage/MainPage";
import { PageNotFound } from "./Pages/PageNotFound/PageNotFound";
import { ProductosPage } from "./Pages/ProductosPage/ProductosPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/productos" element={<ProductosPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
