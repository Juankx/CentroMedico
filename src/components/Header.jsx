import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

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
    { name: 'Especialidades', href: '#especialidades', hasDropdown: true },
    { name: 'Turnos Online', href: '#turnos', hasDropdown: true },
    { name: 'Cirugías Ambulatorias', href: '#cirugias' },
    { name: 'Área Pacientes', href: '#pacientes', hasDropdown: true },
    { name: 'Contacto', href: '#contacto' },
  ];

  const redesSociales = [
    { icon: <Instagram size={20} />, href: 'https://instagram.com/neurovida' },
    { icon: <Facebook size={20} />, href: 'https://facebook.com/neurovida' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/neurovida' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/company/neurovida' },
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

      {/* Navegación Principal */}
      <div className="bg-azul-oscuro py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              {/* Logo con árbol */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-azul-oscuro">
                  <path d="M12 2L8 8H16L12 2Z" fill="currentColor"/>
                  <path d="M8 8L6 12H18L16 8H8Z" fill="currentColor"/>
                  <path d="M6 12L4 16H20L18 12H6Z" fill="currentColor"/>
                  <path d="M4 16L2 20H22L20 16H4Z" fill="currentColor"/>
                  <circle cx="12" cy="6" r="2" fill="#e53e3e"/>
                </svg>
              </div>
              <div className="text-white">
                <h1 className="font-bold text-xl lg:text-2xl">NeuroVida</h1>
                <p className="text-sm text-gray-200">Centro de Especialidades Médicas</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative group"
                >
                  <motion.a
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white hover:text-azul-claro transition-colors duration-300 font-medium flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown size={16} />}
                  </motion.a>
                  
                  {/* Dropdown placeholder */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Opción 1</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Opción 2</a>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Redes Sociales */}
            <div className="hidden lg:flex items-center space-x-2 ml-6">
              {redesSociales.map((red, index) => (
                <motion.a
                  key={index}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-azul-oscuro hover:bg-azul-claro transition-colors duration-300"
                >
                  {red.icon}
                </motion.a>
              ))}
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
        </div>
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
              className="block text-white hover:text-azul-claro transition-colors duration-300 font-medium py-2 flex items-center space-x-2"
            >
              <span>{item.name}</span>
              {item.hasDropdown && <ChevronDown size={16} />}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
