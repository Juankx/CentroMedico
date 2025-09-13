import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {

  return (
    <>
      {/* Hero Section Principal */}
      <section id="inicio" className="relative min-h-screen flex flex-col pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
            }}
          ></div>
          <div className="w-full h-full bg-gradient-to-br from-teal-600/85 to-blue-800/85"></div>
        </div>

        {/* Título Principal */}
        <div className="relative z-10 flex-1 flex items-center justify-center py-20">
          <div className="text-center text-white max-w-6xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-12"
            >
              CENTRO DE ESPECIALIDADES MÉDICAS
            </motion.h1>
            
            {/* Placeholder simple */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-azul-oscuro font-bold text-2xl">NV</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HeroSection;
