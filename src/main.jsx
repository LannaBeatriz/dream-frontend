import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// Supondo que você tenha um componente para a página de metas
import MetasPage from './components/MetasPage.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/metas" element={<MetasPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)