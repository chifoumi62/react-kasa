import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/base.scss'
import App from './pages/home/App.jsx'
import Apropos from './pages/home/a_propos/a_propos.jsx'
import Header from './componenets/Header.jsx'
import Footer from './componenets/footer.jsx'
import FicheLogement from './pages/home/fiche_logement/fiche_logement.jsx'  
import Error from './componenets/Error.jsx' 
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'     



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/a_propos" element={<Apropos />} />
          <Route path="/fiche_logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      <Footer />
    </Router> 
  </StrictMode>,
)
