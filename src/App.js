import React from 'react';
import Home from './Homepage/Home';
import HomeBody from './Homepage/HomeBody';
import Navbar from './Homepage/Pages/Navbar';
import './App.css';

export default function MyApp() {
  return (
    <div>
    <Navbar />
    <div className="home-content">
      <Home />
      <HomeBody />
    </div>
    </div>
  );
}