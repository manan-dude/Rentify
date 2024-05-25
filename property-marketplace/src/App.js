// App.js
import React from 'react';
import './App.css';
import PropertyList from './components/PropertyList';
import RegistrationPage from './components/RegisterationPage'; // Corrected spelling
import AddPropertyPage from './components/AddPropertyPage';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<RegistrationPage />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/add-property" element={<AddPropertyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
