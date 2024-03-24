import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Homepage/Pages/Navbar';
import Home from './Homepage/Home';
import HomeBody from './Homepage/HomeBody';
// Adjusted imports for the renamed components
import Portfolio from './Homepage/Pages/Portfolio'; // Assuming this is the correct path
import Contact from './Homepage/Pages/Contact'; // Assuming this is the correct path
import './App.css';

// If using the approach of wrapping Home and HomeBody in a single component
const HomePage = () => (
  <div className="home-content">
    <Home />
    <HomeBody />
  </div>
);

export default function MyApp() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
