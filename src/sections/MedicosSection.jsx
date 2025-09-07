import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Award, Calendar } from 'lucide-react';

const MedicosSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const medicos = [
    {
      id: 1,
      name: 'Dr. María González',
      especialidad: 'Cardiología',
      experiencia: '15 años',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      descripcion: 'Especialista en cardiología intervencionista con amplia experiencia en cateterismos.',
      certificaciones: ['Cardiología Intervencionista', 'Ecocardiografía Avanzada']
    },
    {
      id: 2,
      name: 'Dr. Carlos Rodríguez',
      especialidad: 'Neurología',
      experiencia: '12 años',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      descripcion: 'Experto en trastornos del movimiento y enfermedades neurodegenerativas.',
      certificaciones: ['Neurología Clínica', 'Electroencefalografía']
    },
    {
      id: 3,
      name: 'Dra. Ana Martínez',
      especialidad: 'Pediatría',
      experiencia: '18 años',
      image: 'https://images.unsplash.com/photo-1594824388850-889f2b5a2b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      descripcion: 'Pediatra especializada en neonatología y cuidados intensivos pediátricos.',
      certificaciones: ['Neonatología', 'Cuidados Intensivos Pediátricos']
    },
    {
      id: 4,
      name: 'Dr. Luis Fernández',
      especialidad: 'Ortopedia',
      experiencia: '20 años',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.7,
      descripcion: 'Cirujano ortopédico especializado en cirugía de columna y articulaciones.',
      certificaciones: ['Cirugía de Columna', 'Artroscopia Avanzada']
    },
    {
      id: 5,
      name: 'Dra. Carmen López',
      especialidad: 'Ginecología',
      experiencia: '14 años',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.8,
      descripcion: 'Ginecóloga especializada en oncología ginecológica y cirugía mínimamente invasiva.',
      certificaciones: ['Oncología Ginecológica', 'Cirugía Laparoscópica']
    },
    {
      id: 6,
      name: 'Dr. Roberto Silva',
      especialidad: 'Oftalmología',
      experiencia: '16 años',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 4.9,
      descripcion: 'Oftalmólogo especializado en cirugía de cataratas y cirugía refractiva.',
      certificaciones: ['Cirugía de Cataratas', 'Cirugía Refractiva']
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % medicos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + medicos.length) % medicos.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="medicos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-azul-oscuro mb-6">
            Nuestros Médicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a nuestro equipo de profesionales médicos altamente capacitados 
            y comprometidos con tu salud y bienestar.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 text-azul-oscuro hover:bg-azul-claro hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 text-azul-oscuro hover:bg-azul-claro hover:text-white transition-all duration-300"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-azul-claro/10 to-azul-medio/20 p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Doctor Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative">
                      <img
                        src={medicos[currentIndex].image}
                        alt={medicos[currentIndex].name}
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-azul-oscuro/50 to-transparent rounded-2xl"></div>
                    </div>
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <span className="font-semibold text-azul-oscuro">
                        {medicos[currentIndex].rating}
                      </span>
                    </div>
                  </motion.div>

                  {/* Doctor Info */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-white space-y-6"
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">
                        {medicos[currentIndex].name}
                      </h3>
                      <p className="text-xl text-azul-claro font-semibold mb-4">
                        {medicos[currentIndex].especialidad}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Award size={16} />
                          <span>{medicos[currentIndex].experiencia} de experiencia</span>
                        </span>
                      </div>
                    </div>

                    <p className="text-lg text-gray-200 leading-relaxed">
                      {medicos[currentIndex].descripcion}
                    </p>

                    {/* Certifications */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Certificaciones:</h4>
                      <div className="flex flex-wrap gap-2">
                        {medicos[currentIndex].certificaciones.map((cert, index) => (
                          <span
                            key={index}
                            className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center justify-center space-x-2"
                      >
                        <Calendar size={20} />
                        <span>Agendar Cita</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white hover:bg-white hover:text-azul-oscuro font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                      >
                        Ver perfil completo
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {medicos.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-verde scale-125'
                    : 'bg-gray-300 hover:bg-azul-claro'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Doctors Grid (Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 lg:hidden"
        >
          <h3 className="text-2xl font-bold text-azul-oscuro text-center mb-8">
            Todo nuestro equipo
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {medicos.map((medico, index) => (
              <motion.div
                key={medico.id}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={medico.image}
                    alt={medico.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-azul-oscuro">{medico.name}</h4>
                    <p className="text-verde font-semibold text-sm">{medico.especialidad}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <span className="text-sm text-gray-600">{medico.rating}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MedicosSection;
