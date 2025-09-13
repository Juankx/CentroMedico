import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin } from 'lucide-react';

const HeroSection = () => {
  const quickActions = [
    {
      icon: <Calendar size={24} />,
      text: 'Turnos Online',
      href: '/turnos',
      color: 'bg-rojo-cta hover:bg-red-700'
    },
    {
      icon: <Phone size={24} />,
      text: 'Llamar',
      href: 'tel:+54123456789',
      color: 'bg-azul-medio hover:bg-blue-800'
    },
    {
      icon: <MapPin size={24} />,
      text: 'Ubicación',
      href: '#contacto',
      color: 'bg-verde hover:bg-green-600'
    },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-azul-oscuro/90 to-azul-medio/80"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80')`
          }}
        ></div>
      </div>

      <div className="relative z-10 container-custom py-20">
        <div className="text-center text-white space-y-8 max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Centro de Especialidades Médicas
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            Ingrese desde su celular o computadora y reserve turno con un profesional
          </motion.p>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-8"
          >
            <motion.a
              href="/turnos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-rojo-cta hover:bg-red-700 text-white font-bold text-xl px-12 py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar size={28} />
              <span>Turnos Online</span>
            </motion.a>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12"
          >
            <div className="flex flex-wrap justify-center gap-6">
              {quickActions.map((action, index) => (
                <motion.a
                  key={index}
                  href={action.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${action.color} text-white font-semibold px-6 py-4 rounded-lg transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl`}
                >
                  {action.icon}
                  <span>{action.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
