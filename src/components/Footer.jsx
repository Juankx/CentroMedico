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
    <footer className="bg-azul-medio text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="flex items-center space-x-4">
              {/* Logo con árbol */}
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-azul-oscuro">
                  <path d="M12 2L8 8H16L12 2Z" fill="currentColor"/>
                  <path d="M8 8L6 12H18L16 8H8Z" fill="currentColor"/>
                  <path d="M6 12L4 16H20L18 12H6Z" fill="currentColor"/>
                  <path d="M4 16L2 20H22L20 16H4Z" fill="currentColor"/>
                  <circle cx="12" cy="6" r="2" fill="#e53e3e"/>
                  <path d="M9 4L12 7L15 4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold">NeuroVida</h3>
                <p className="text-azul-claro">Centro de Especialidades Médicas</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold">SOLICITÁ TU TURNO ONLINE</h4>
              <motion.a
                href="/turnos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-rojo-cta hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
              >
                HACE CLIC AQUÍ
              </motion.a>
            </div>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-azul-claro" />
                <div>
                  <div className="font-semibold">Tel (011) 2060-7695</div>
                  <div className="text-sm text-gray-300">recepcion@neurovida.com.ar</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-azul-claro" />
                <div>
                  <div className="font-semibold">Cnel. Ramón L. Falcón 5206</div>
                  <div className="text-sm text-gray-300">VILLA LURO | CABA | ARGENTINA</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold">Síguenos</h4>
            <div className="flex space-x-4">
              {redesSociales.map((red, index) => (
                <motion.a
                  key={index}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-azul-oscuro hover:bg-azul-claro transition-colors duration-300"
                >
                  {red.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
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
