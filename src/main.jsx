import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// Supondo que você tenha um componente para a página de metas
// import Metas from './pages/Metas.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/metas" element={<Metas />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)