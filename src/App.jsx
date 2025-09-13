import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import PortalTurnosSection from './sections/PortalTurnosSection';
import ContactoSection from './sections/ContactoSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Portal de Turnos Section */}
        <PortalTurnosSection />
        
        {/* Contacto Section */}
        <ContactoSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
}

export default App;