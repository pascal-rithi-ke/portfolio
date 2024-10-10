import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Separator } from "@/components/ui/separator"
import Navbar from './components/navbar/navbar.jsx';

import HomePage from './components/pages/homePage/HomePage.jsx';
import Allprojects from './components/pages/allProjects/Allprojects.jsx';

import './style/App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Separator />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Allprojects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
