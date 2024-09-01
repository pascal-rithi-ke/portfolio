import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './report/reportWebVitals';

import App from './container/App';
import Projects from './component/Projects';
import ErrorPage from './component/ErrorPage';
import NavBar from './component/NavBar';

import './style/App.css';

ReactDOM.render(
  <BrowserRouter basename="/portfolio">
    <NavBar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="projects" element={<Projects />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
