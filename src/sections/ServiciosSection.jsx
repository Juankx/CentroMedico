import React from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, 
  Activity, 
  Shield, 
  Clock, 
  Phone, 
  MapPin,
  FileText,
  Camera,
  Zap,
  Heart,
  Brain,
  Eye
} from 'lucide-react';

const ServiciosSection = () => {
  const servicios = [
    {
      icon: <Microscope size={32} />,
      title: 'Laboratorio Clínico',
      description: 'Análisis clínicos completos con tecnología de última generación y resultados rápidos.',
      features: ['Hematología', 'Bioquímica', 'Microbiología', 'Inmunología'],
      color: 'text-blue-500'
    },
    {
      icon: <Activity size={32} />,
      title: 'Exámenes de Diagnóstico',
      description: 'Estudios de imagen y diagnóstico por laboratorio para un diagnóstico preciso.',
      features: ['Resonancia Magnética', 'Tomografía', 'Ultrasonido', 'Radiografía'],
      color: 'text-green-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Medicina Preventiva',
      description: 'Programas de prevención y detección temprana de enfermedades.',
      features: ['Chequeos Anuales', 'Vacunación', 'Medicina del Deporte', 'Salud Ocupacional'],
      color: 'text-purple-500'
    },
    {
      icon: <Clock size={32} />,
      title: 'Urgencias 24/7',
      description: 'Servicio de emergencias médicas disponible las 24 horas del día.',
      features: ['Atención Inmediata', 'Ambulancia', 'UCI', 'Traumatología'],
      color: 'text-red-500'
    },
    {
      icon: <FileText size={32} />,
      title: 'Consultas Especializadas',
      description: 'Consultas médicas con especialistas en diferentes áreas de la medicina.',
      features: ['Primera Vez', 'Control', 'Segunda Opinión', 'Telemedicina'],
      color: 'text-orange-500'
    },
    {
      icon: <Camera size={32} />,
      title: 'Cirugía Ambulatoria',
      description: 'Procedimientos quirúrgicos menores que no requieren hospitalización.',
      features: ['Cirugía Menor', 'Endoscopía', 'Biopsias', 'Procedimientos Estéticos'],
      color: 'text-pink-500'
    }
  ];

  const serviciosAdicionales = [
    {
      icon: <Phone size={24} />,
      title: 'Consulta Telefónica',
      description: 'Asesoría médica por teléfono para consultas no urgentes'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Domicilios',
      description: 'Servicio a domicilio para pacientes con movilidad reducida'
    },
    {
      icon: <Zap size={24} />,
      title: 'Resultados Online',
      description: 'Acceso a resultados de exámenes a través de nuestra plataforma'
    },
    {
      icon: <Heart size={24} />,
      title: 'Programa de Fidelidad',
      description: 'Descuentos especiales para pacientes frecuentes'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="servicios" className="section-padding bg-gray-50">
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
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios médicos y de salud para cubrir 
            todas tus necesidades de atención médica integral.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 group"
            >
              <div className="space-y-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-verde/10 transition-colors duration-300 ${servicio.color}`}
                >
                  {servicio.icon}
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-azul-oscuro group-hover:text-verde transition-colors duration-300 mb-3">
                    {servicio.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {servicio.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-azul-oscuro mb-3">Incluye:</h4>
                  <ul className="space-y-2">
                    {servicio.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-verde rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-azul-claro/10 hover:bg-verde hover:text-white text-verde font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                >
                  Más información
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-azul-oscuro mb-4">
              Servicios Adicionales
            </h3>
            <p className="text-lg text-gray-600">
              Complementamos nuestros servicios principales con opciones adicionales 
              para tu comodidad y bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviciosAdicionales.map((servicio, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-azul-claro/10 rounded-full flex items-center justify-center mx-auto text-azul-oscuro">
                  {servicio.icon}
                </div>
                <h4 className="font-bold text-azul-oscuro">{servicio.title}</h4>
                <p className="text-sm text-gray-600">{servicio.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Services Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Clock size={40} />
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Servicio de Emergencias 24/7
              </h3>
              <p className="text-xl text-red-100 mb-8">
                En caso de emergencia médica, estamos disponibles las 24 horas del día, 
                los 7 días de la semana para brindarte atención inmediata.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:911"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-red-50 transition-colors duration-300"
                >
                  Llamar Emergencias: 911
                </motion.a>
                
                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Centro Médico: (123) 456-7890
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiciosSection;
