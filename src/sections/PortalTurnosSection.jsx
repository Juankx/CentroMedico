import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Clock, Users } from 'lucide-react';

const PortalTurnosSection = () => {
  return (
    <section id="turnos" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Tutorial Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-azul-oscuro to-azul-medio flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <Play size={32} className="ml-1" />
                </motion.button>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-azul-oscuro mb-2">
                  Cómo agendar tu turno online
                </h3>
                <p className="text-gray-600">
                  Tutorial paso a paso para reservar tu cita médica de forma rápida y segura
                </p>
              </div>
            </div>
          </motion.div>

          {/* Information Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-azul-oscuro mb-4">
                Portal de Turnos Online
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Reserve su turno de manera rápida y sencilla desde cualquier dispositivo. 
                Nuestro sistema le permite elegir el profesional, día y horario que mejor se adapte a sus necesidades.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-rojo-cta rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-azul-oscuro mb-1">Agenda 24/7</h3>
                  <p className="text-gray-600">Reserve su turno en cualquier momento del día</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-azul-medio rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-azul-oscuro mb-1">Horarios Flexibles</h3>
                  <p className="text-gray-600">Amplia variedad de horarios disponibles</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-verde rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-azul-oscuro mb-1">Profesionales Especializados</h3>
                  <p className="text-gray-600">Equipo médico altamente capacitado</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/turnos"
                className="inline-flex items-center space-x-3 bg-rojo-cta hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar size={24} />
                <span>Reservar Turno Ahora</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortalTurnosSection;
