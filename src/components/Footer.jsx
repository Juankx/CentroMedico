import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageCircle,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Médicos', href: '#medicos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const especialidades = [
    'Cardiología',
    'Neurología',
    'Pediatría',
    'Ortopedia',
    'Ginecología',
    'Oftalmología',
    'Medicina Interna',
    'Endocrinología'
  ];

  const servicios = [
    'Consultas Médicas',
    'Laboratorio Clínico',
    'Exámenes de Diagnóstico',
    'Urgencias 24/7',
    'Cirugía Ambulatoria',
    'Medicina Preventiva'
  ];

  const redesSociales = [
    {
      icon: <Facebook size={20} />,
      name: 'Facebook',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Instagram size={20} />,
      name: 'Instagram',
      href: '#',
      color: 'hover:text-pink-600'
    },
    {
      icon: <MessageCircle size={20} />,
      name: 'WhatsApp',
      href: '#',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <footer className="bg-azul-oscuro text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-verde rounded-lg flex items-center justify-center">
                <Heart size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Centro Médico</h3>
                <p className="text-azul-claro text-sm">Tu salud, nuestra prioridad</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Más de 15 años brindando atención médica de calidad con un equipo 
              de profesionales altamente capacitados y tecnología de vanguardia.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-azul-claro" />
                <span className="text-sm">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-azul-claro" />
                <span className="text-sm">info@centromedico.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-azul-claro" />
                <span className="text-sm">Av. Principal 123, Centro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-azul-claro" />
                <span className="text-sm">Lun-Vie: 8:00-20:00</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-azul-claro">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-azul-claro transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Especialidades */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-azul-claro">Especialidades</h4>
            <ul className="space-y-2">
              {especialidades.map((especialidad, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{especialidad}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Servicios y Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-azul-claro">Servicios</h4>
            <ul className="space-y-2 mb-6">
              {servicios.map((servicio, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{servicio}</span>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-xl font-bold text-azul-claro mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                {redesSociales.map((red, index) => (
                  <motion.a
                    key={index}
                    href={red.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 bg-azul-medio rounded-full flex items-center justify-center text-gray-300 ${red.color} transition-colors duration-300`}
                    title={red.name}
                  >
                    {red.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Emergency Contact Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-red-600 py-4"
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <Phone size={24} />
              <div>
                <p className="font-bold text-lg">Emergencias 24/7</p>
                <p className="text-sm">Línea directa para emergencias médicas</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a 
                href="tel:911" 
                className="bg-white text-red-600 font-bold px-6 py-2 rounded-lg hover:bg-red-50 transition-colors duration-300"
              >
                Llamar 911
              </a>
              <a 
                href="tel:+1234567890" 
                className="border-2 border-white text-white font-bold px-6 py-2 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Centro Médico
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-azul-medio py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2024 Centro Médico. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Diseñado con ❤️ para tu salud y bienestar
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-300 hover:text-azul-claro text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-azul-claro text-sm transition-colors duration-300">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-verde hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
