import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Clock } from 'lucide-react';

const HeroSection = () => {
  const features = [
    {
      icon: <Shield size={24} />,
      text: 'Atención especializada',
    },
    {
      icon: <Users size={24} />,
      text: 'Equipo profesional',
    },
    {
      icon: <Clock size={24} />,
      text: 'Horarios flexibles',
    },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-azul-claro/10 to-azul-medio/20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-azul-oscuro/80 to-azul-medio/60"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')`
          }}
        ></div>
      </div>

      <div className="relative z-10 container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Tu salud en manos de{' '}
              <span className="text-verde">especialistas</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 leading-relaxed"
            >
              Ofrecemos atención médica de calidad con tecnología avanzada 
              y un equipo de profesionales altamente capacitados para cuidar 
              de ti y tu familia.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2"
                >
                  <span className="text-verde">{feature.icon}</span>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
              >
                <span>Conoce nuestras especialidades</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-azul-oscuro font-semibold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Ver servicios
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-verde rounded-full mx-auto flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">24/7</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Atención de Emergencia</h3>
                <p className="text-gray-200">
                  Disponibles las 24 horas para emergencias médicas
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-verde rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-azul-claro rounded-full opacity-60"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
