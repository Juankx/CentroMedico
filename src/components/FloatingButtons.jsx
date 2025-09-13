import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Users, X, Menu } from 'lucide-react';

const FloatingButtons = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const quickActions = [
    {
      icon: <Calendar size={24} />,
      text: 'TURNOS',
      href: '/turnos',
      color: 'bg-rojo-cta hover:bg-red-700'
    },
    {
      icon: <Users size={24} />,
      text: 'ESPECIALIDAD',
      href: '#especialidades',
      color: 'bg-azul-oscuro hover:bg-blue-900'
    }
  ];

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/541112345678"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Toggle Button para mostrar/ocultar sidebar */}
      <motion.button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 bg-azul-oscuro hover:bg-blue-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Sidebar Vertical - Lado Derecho (Ocultable) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: isSidebarOpen ? 0 : 100, 
          opacity: isSidebarOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 space-y-2"
      >
        {quickActions.map((action, index) => (
          <motion.a
            key={index}
            href={action.href}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`${action.color} text-white p-4 rounded-l-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 min-w-[120px]`}
          >
            {action.icon}
            <span className="font-semibold text-sm">{action.text}</span>
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default FloatingButtons;
