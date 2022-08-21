import { Route, Routes } from 'react-router-dom'
import './App.css'
import { CategoriasPage } from './Pages/CategoriasPage/CategoriasPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/categorias" element={<CategoriasPage />} />
      </Routes>
    </div>
  )
}

export default App
