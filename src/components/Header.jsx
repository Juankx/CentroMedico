import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Turnos Online', href: '#turnos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-azul-oscuro shadow-lg' 
          : 'bg-azul-oscuro/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-azul-oscuro font-bold text-xl">NV</span>
            </div>
            <div className="text-white">
              <h1 className="font-bold text-xl lg:text-2xl">NeuroVida</h1>
              <p className="text-sm text-gray-200">Centro de Especialidades Médicas</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-azul-claro transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+54123456789"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white hover:text-azul-claro transition-colors duration-300"
            >
              <Phone size={20} />
              <span className="font-medium">(11) 1234-5678</span>
            </motion.a>
            <motion.a
              href="/turnos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rojo-cta hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Calendar size={20} />
              <span>Turnos Online</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-azul-oscuro/95 backdrop-blur-sm"
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-azul-claro transition-colors duration-300 font-medium py-2"
              >
                {item.name}
              </motion.a>
            ))}
            <div className="pt-4 space-y-3">
              <motion.a
                href="tel:+54123456789"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-white hover:text-azul-claro transition-colors duration-300 py-2"
              >
                <Phone size={20} />
                <span className="font-medium">(11) 1234-5678</span>
              </motion.a>
              <motion.a
                href="/turnos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rojo-cta hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Turnos Online</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
