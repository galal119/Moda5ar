import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
