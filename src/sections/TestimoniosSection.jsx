import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimoniosSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonios = [
    {
      id: 1,
      name: 'María Elena Rodríguez',
      age: 45,
      especialidad: 'Cardiología',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      testimonio: 'Excelente atención médica. El Dr. González me ayudó a controlar mi presión arterial y me explicó todo de manera muy clara. El personal es muy amable y profesional.',
      fecha: 'Hace 2 semanas'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      age: 38,
      especialidad: 'Ortopedia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      testimonio: 'Después de mi cirugía de rodilla, la recuperación ha sido excelente. El equipo de fisioterapia es increíble y el Dr. Fernández me guió en cada paso del proceso.',
      fecha: 'Hace 1 mes'
    },
    {
      id: 3,
      name: 'Ana Patricia López',
      age: 32,
      especialidad: 'Ginecología',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      testimonio: 'La Dra. Carmen es una excelente profesional. Me sentí muy cómoda durante toda la consulta y me resolvió todas mis dudas. Definitivamente la recomiendo.',
      fecha: 'Hace 3 semanas'
    },
    {
      id: 4,
      name: 'Roberto Silva',
      age: 55,
      especialidad: 'Neurología',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      testimonio: 'El Dr. Rodríguez es un excelente neurólogo. Su diagnóstico fue preciso y el tratamiento ha sido muy efectivo. El centro tiene tecnología de última generación.',
      fecha: 'Hace 2 meses'
    },
    {
      id: 5,
      name: 'Laura Martínez',
      age: 28,
      especialidad: 'Pediatría',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      testimonio: 'La Dra. Ana es maravillosa con mi hijo. Siempre está dispuesta a explicar todo y mi pequeño se siente cómodo con ella. El ambiente es muy acogedor para los niños.',
      fecha: 'Hace 1 semana'
    },
    {
      id: 6,
      name: 'Miguel Torres',
      age: 42,
      especialidad: 'Oftalmología',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      rating: 5,
      testimonio: 'Mi cirugía de cataratas fue un éxito total. El Dr. Silva es muy profesional y el proceso fue más rápido de lo esperado. Ahora veo perfectamente.',
      fecha: 'Hace 1 mes'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonios.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={`${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-white">
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
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa. 
            Conoce las experiencias de quienes han confiado en nosotros.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 text-azul-oscuro hover:bg-azul-claro hover:text-white transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 text-azul-oscuro hover:bg-azul-claro hover:text-white transition-all duration-300"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Testimonial Container */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-azul-claro/10 to-azul-medio/20 p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Patient Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative">
                      <img
                        src={testimonios[currentTestimonial].image}
                        alt={testimonios[currentTestimonial].name}
                        className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-azul-oscuro/50 to-transparent rounded-2xl"></div>
                    </div>
                    
                    {/* Quote Icon */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Quote className="text-azul-oscuro" size={24} />
                    </div>
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-white space-y-6"
                  >
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonios[currentTestimonial].rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-100 italic">
                      "{testimonios[currentTestimonial].testimonio}"
                    </blockquote>

                    {/* Patient Info */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">
                        {testimonios[currentTestimonial].name}
                      </h3>
                      <p className="text-azul-claro font-semibold">
                        {testimonios[currentTestimonial].age} años • {testimonios[currentTestimonial].especialidad}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {testimonios[currentTestimonial].fecha}
                      </p>
                    </div>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-verde hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Agendar mi consulta
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonios.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-verde scale-125'
                    : 'bg-gray-300 hover:bg-azul-claro'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-azul-oscuro rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-verde">
                  5000+
                </div>
                <p className="text-gray-200">Pacientes atendidos</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-verde">
                  98%
                </div>
                <p className="text-gray-200">Satisfacción</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-verde">
                  15+
                </div>
                <p className="text-gray-200">Años de experiencia</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold text-verde">
                  24/7
                </div>
                <p className="text-gray-200">Disponibilidad</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimoniosSection;
