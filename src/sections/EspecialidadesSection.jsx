import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Baby, 
  Brain, 
  Eye, 
  Bone, 
  Stethoscope,
  Activity,
  Shield,
  UserCheck,
  Zap
} from 'lucide-react';

const EspecialidadesSection = () => {
  const especialidades = [
    {
      icon: <Heart size={32} />,
      title: 'Cardiología',
      description: 'Cuidado integral del corazón y sistema cardiovascular con tecnología de vanguardia.',
      color: 'text-red-500'
    },
    {
      icon: <Baby size={32} />,
      title: 'Pediatría',
      description: 'Atención especializada para bebés, niños y adolescentes con enfoque integral.',
      color: 'text-pink-500'
    },
    {
      icon: <Brain size={32} />,
      title: 'Neurología',
      description: 'Diagnóstico y tratamiento de enfermedades del sistema nervioso central y periférico.',
      color: 'text-purple-500'
    },
    {
      icon: <Eye size={32} />,
      title: 'Oftalmología',
      description: 'Cuidado de la visión y salud ocular con equipos de última generación.',
      color: 'text-blue-500'
    },
    {
      icon: <Bone size={32} />,
      title: 'Ortopedia',
      description: 'Tratamiento de lesiones y enfermedades del sistema musculoesquelético.',
      color: 'text-orange-500'
    },
    {
      icon: <Stethoscope size={32} />,
      title: 'Medicina Interna',
      description: 'Atención integral de enfermedades en adultos con enfoque preventivo.',
      color: 'text-green-500'
    },
    {
      icon: <Activity size={32} />,
      title: 'Endocrinología',
      description: 'Tratamiento de trastornos hormonales y metabólicos como diabetes y tiroides.',
      color: 'text-yellow-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Ginecología',
      description: 'Cuidado integral de la salud femenina en todas las etapas de la vida.',
      color: 'text-rose-500'
    },
    {
      icon: <UserCheck size={32} />,
      title: 'Psiquiatría',
      description: 'Atención de salud mental con enfoque terapéutico y farmacológico.',
      color: 'text-indigo-500'
    },
    {
      icon: <Zap size={32} />,
      title: 'Dermatología',
      description: 'Cuidado de la piel, cabello y uñas con tratamientos estéticos y médicos.',
      color: 'text-amber-500'
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
    <section id="especialidades" className="section-padding bg-gray-50">
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
            Nuestras Especialidades
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos con un equipo de especialistas altamente capacitados en diversas 
            áreas médicas para brindarte la mejor atención según tus necesidades.
          </p>
        </motion.div>

        {/* Especialidades Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {especialidades.map((especialidad, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
            >
              <div className="text-center space-y-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-verde/10 transition-colors duration-300 ${especialidad.color}`}
                >
                  {especialidad.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-azul-oscuro group-hover:text-verde transition-colors duration-300">
                  {especialidad.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {especialidad.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-azul-claro/10 hover:bg-verde hover:text-white text-verde font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Ver más detalles
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-azul-oscuro rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿No encuentras tu especialidad?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contáctanos y te ayudaremos a encontrar el especialista adecuado 
              para tu caso específico.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Consultar especialidades
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EspecialidadesSection;
