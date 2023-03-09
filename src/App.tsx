import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { Navigation } from './components/Navigation';
import { ProductPage } from './pages/ProductsPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
