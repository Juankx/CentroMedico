import React from 'react';
import { motion } from 'framer-motion';

const ServiciosSection = () => {
  const servicios = [
    {
      title: 'ESTUDIOS GASTROENTEROLÓGICOS',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Estudios especializados en gastroenterología'
    },
    {
      title: 'ESTUDIOS CARDIOLÓGICOS',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Estudios especializados en cardiología'
    },
    {
      title: 'ECOGRAFÍA GENERAL',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Ecografías generales y especializadas'
    },
    {
      title: 'CIRUGÍA AMBULATORIA',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Cirugías ambulatorias especializadas'
    }
  ];

  return (
    <section id="especialidades" className="py-20 bg-gradient-to-r from-teal-500 to-blue-700">
      <div className="container-custom">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">ESPECIALIDADES</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
            >
              {/* Hexágono contenedor */}
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                {/* Imagen hexagonal */}
                <div 
                  className="w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${servicio.image}')`,
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                  }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-azul-oscuro/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                </div>
                
                {/* Contenido */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div>
                    <h3 className="text-base md:text-lg font-bold leading-tight mb-3">
                      {servicio.title.split(' ').map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))}
                    </h3>
                  </div>
                  
                  <div className="text-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-rojo-cta hover:bg-red-700 text-white font-bold px-4 py-2 text-sm rounded-full transition-all duration-300"
                    >
                      LEER MÁS
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;