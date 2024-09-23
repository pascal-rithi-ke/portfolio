import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Separator } from "@/components/ui/separator"
import Navbar from './components/navbar/navbar.jsx';
import HomePage from './components/HomePage.jsx';
import Allprojects from './components/Allprojects.jsx';
import Contacts from './components/contacts.jsx';
import Footer from './components/footer.jsx';
import './App.css';

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Separator />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Allprojects />} />
        </Routes>
        <Contacts />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
