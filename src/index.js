import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import reportWebVitals from './report/reportWebVitals';

import App from './container/App';
import Projects from './component/Projects';
import ErrorPage from './component/ErrorPage';
import NavBar from './component/NavBar';

import './style/App.css';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      {/* Route d'accueil */}
      <Route path="/portfolio" element={<App />} />
      <Route path="projects" element={<Projects />} />
      
      {/* Redirection de la racine vers /portfolio */}
      <Route path="/" element={<Navigate to="/portfolio" />} />

      {/* Route pour les pages non trouvées */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
