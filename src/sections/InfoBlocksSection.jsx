import React from 'react';
import { motion } from 'framer-motion';

const InfoBlocksSection = () => {
  const infoBlocks = [
    {
      title: 'TURNOS ONLINE',
      description: 'Ingrese desde su celular o computadora y reserve turno con un profesional.',
      buttonText: 'CLIC AQUÍ',
      href: '/turnos'
    },
    {
      title: 'COBERTURA MÉDICA',
      description: 'Listado de las coberturas médicas que atendemos en NeuroVida.',
      buttonText: 'CLIC AQUÍ',
      href: '#cobertura'
    },
    {
      title: 'AUTORIDADES',
      description: 'Ingrese aqui para visualizar el listado de nuestros profesionales.',
      buttonText: 'CLIC AQUÍ',
      href: '#profesionales'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Fondo con imagen */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
          }}
        ></div>
        <div className="w-full h-full bg-gradient-to-br from-teal-600/40 to-blue-800/40"></div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 container-custom">
        <div className="text-center text-white max-w-6xl mx-auto px-4">
          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
          >
            CENTRO DE ESPECIALIDADES MÉDICAS
          </motion.h1>

          {/* Logo del árbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-azul-oscuro">
                  <path d="M12 2L8 8H16L12 2Z" fill="currentColor"/>
                  <path d="M8 8L6 12H18L16 8H8Z" fill="currentColor"/>
                  <path d="M6 12L4 16H20L18 12H6Z" fill="currentColor"/>
                  <path d="M4 16L2 20H22L20 16H4Z" fill="currentColor"/>
                  <circle cx="12" cy="6" r="2" fill="#e53e3e"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Tarjetas de Información */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {infoBlocks.map((block, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-azul-oscuro text-white p-6 rounded-lg"
              >
                <h3 className="text-lg font-bold mb-3">{block.title}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed text-sm">
                  {block.description}
                </p>
                <motion.a
                  href={block.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-white text-white font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-azul-oscuro transition-all duration-300 text-sm"
                >
                  {block.buttonText}
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlocksSection;
