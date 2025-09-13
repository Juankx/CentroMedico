import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Users, MapPin, X } from 'lucide-react';

const FloatingButtons = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const quickActions = [
    {
      icon: <Calendar size={24} />,
      text: 'Turnos Online',
      href: '/turnos',
      color: 'bg-rojo-cta hover:bg-red-700'
    },
    {
      icon: <Users size={24} />,
      text: 'Profesionales',
      href: '#profesionales',
      color: 'bg-azul-medio hover:bg-blue-800'
    },
    {
      icon: <MapPin size={24} />,
      text: 'Ubicación',
      href: '#contacto',
      color: 'bg-verde hover:bg-green-600'
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

      {/* Sidebar Toggle Button */}
      <motion.button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 bg-azul-oscuro hover:bg-azul-medio text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isSidebarOpen ? <X size={28} /> : <Calendar size={28} />}
      </motion.button>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ 
          x: isSidebarOpen ? 0 : -300, 
          opacity: isSidebarOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-40 overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-azul-oscuro">Accesos Rápidos</h3>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.href}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSidebarOpen(false)}
                className={`${action.color} text-white p-4 rounded-lg flex items-center space-x-4 transition-all duration-300 hover:shadow-lg`}
              >
                {action.icon}
                <span className="font-semibold">{action.text}</span>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-bold text-azul-oscuro mb-2">Contacto</h4>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Teléfono:</strong> (11) 1234-5678
            </p>
            <p className="text-sm text-gray-600">
              <strong>Email:</strong> info@neurovida.com.ar
            </p>
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
};

export default FloatingButtons;
