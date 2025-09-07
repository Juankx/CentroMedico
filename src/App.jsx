import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import EspecialidadesSection from './sections/EspecialidadesSection';
import MedicosSection from './sections/MedicosSection';
import ServiciosSection from './sections/ServiciosSection';
import TestimoniosSection from './sections/TestimoniosSection';
import ContactoSection from './sections/ContactoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Especialidades Section */}
        <EspecialidadesSection />
        
        {/* Médicos Section */}
        <MedicosSection />
        
        {/* Servicios Section */}
        <ServiciosSection />
        
        {/* Testimonios Section */}
        <TestimoniosSection />
        
        {/* Contacto Section */}
        <ContactoSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;