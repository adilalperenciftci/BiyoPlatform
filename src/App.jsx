import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Dosya adının doğru olduğundan emin ol
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import ArticlesPage from './components/ArticlesPage/ArticlesPage';
import EducationPage from './components/EducationPage/EducationPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/makaleler" element={<ArticlesPage />} />
        <Route path="/egitim" element={<EducationPage />} />
        {/* Daha fazla Route eklenebilir */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
