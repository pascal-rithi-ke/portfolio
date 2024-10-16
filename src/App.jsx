import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';

import HomePage from './components/pages/homePage/HomePage.jsx';
import Allprojects from './components/pages/allProjects/Allprojects.jsx';
import NotFound404 from './components/pages/error/NotFound404.jsx';

import './style/App.css';

const App = () => {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Allprojects />} />
          {/* Route 404 */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
    </Router>
  );
};

export default App;
