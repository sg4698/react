// src/App.js
import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registration from './components/Registration';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';


  const App = () => {
    const [currentView, setCurrentView] = useState('home');
  
    const renderView = () => {
      switch (currentView) {
        case 'home':
          return <Home />;
        case 'registration':
          return <Registration />;
        case 'contact':
          return <ContactUs />;
        default:
          return <Home />;
      }
    };
  
    return (
      <div>
        <Navbar setCurrentView={setCurrentView} />
        {renderView()}
        <Footer />
      </div>
    );
  };

export default App


