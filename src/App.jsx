import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import ServiciosSection from './sections/ServiciosSection';
import InfoBlocksSection from './sections/InfoBlocksSection';
import BlogSection from './sections/BlogSection';
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
        
        {/* Servicios Section */}
        <ServiciosSection />
        
        {/* Bloques de Información */}
        <InfoBlocksSection />
        
        {/* Blog Section */}
        <BlogSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
}

export default App;