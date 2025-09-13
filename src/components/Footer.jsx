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
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Turnos Online', href: '#turnos' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const redesSociales = [
    {
      icon: <Instagram size={24} />,
      name: 'Instagram',
      href: 'https://instagram.com/neurovida',
      color: 'hover:text-pink-500'
    },
    {
      icon: <Facebook size={24} />,
      name: 'Facebook',
      href: 'https://facebook.com/neurovida',
      color: 'hover:text-blue-500'
    },
    {
      icon: <MessageCircle size={24} />,
      name: 'WhatsApp',
      href: 'https://wa.me/541112345678',
      color: 'hover:text-green-500'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/neurovida',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <footer className="bg-azul-oscuro text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-azul-oscuro font-bold text-xl">NV</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">NeuroVida</h3>
                <p className="text-azul-claro text-sm">Centro de Especialidades Médicas</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Brindamos atención médica especializada con un equipo de profesionales 
              altamente capacitados y tecnología de vanguardia.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-azul-claro" />
                <a href="tel:+541112345678" className="text-sm hover:text-azul-claro transition-colors">
                  (11) 1234-5678
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-azul-claro" />
                <a href="mailto:info@neurovida.com.ar" className="text-sm hover:text-azul-claro transition-colors">
                  info@neurovida.com.ar
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-azul-claro" />
                <span className="text-sm">Av. Corrientes 1234, CABA</span>
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

          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-azul-claro">Síguenos</h4>
            <p className="text-gray-300 text-sm">
              Mantente al día con nuestras noticias y consejos de salud
            </p>
            <div className="grid grid-cols-2 gap-4">
              {redesSociales.map((red, index) => (
                <motion.a
                  key={index}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full h-12 bg-azul-medio rounded-lg flex items-center justify-center space-x-2 text-gray-300 ${red.color} transition-all duration-300 hover:bg-azul-claro`}
                >
                  {red.icon}
                  <span className="text-sm font-medium">{red.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-azul-medio py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © 2024 NeuroVida. Todos los derechos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Centro de Especialidades Médicas
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
