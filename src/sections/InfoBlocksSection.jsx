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
    <section className="relative bg-white py-16">
      {/* Triángulo decorativo */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-green-500"></div>
      </div>
      
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {infoBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-teal-700 text-white p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">{block.title}</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">{block.description}</p>
              <motion.a
                href={block.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-teal-700 transition-all duration-300"
              >
                {block.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBlocksSection;
