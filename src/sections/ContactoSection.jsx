import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Calendar,
  User,
  MessageSquare,
  CheckCircle
} from 'lucide-react';

const ContactoSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    especialidad: '',
    mensaje: '',
    tipoConsulta: 'consulta'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const especialidades = [
    'Cardiología',
    'Neurología',
    'Pediatría',
    'Ortopedia',
    'Ginecología',
    'Oftalmología',
    'Medicina Interna',
    'Endocrinología',
    'Psiquiatría',
    'Dermatología',
    'Otra'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        especialidad: '',
        mensaje: '',
        tipoConsulta: 'consulta'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Teléfono',
      info: '(123) 456-7890',
      subtitle: 'Línea directa 24/7'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      info: 'info@centromedico.com',
      subtitle: 'Respuesta en 24 horas'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Dirección',
      info: 'Av. Principal 123, Centro',
      subtitle: 'Ciudad, País 12345'
    },
    {
      icon: <Clock size={24} />,
      title: 'Horarios',
      info: 'Lun - Vie: 8:00 - 20:00',
      subtitle: 'Sáb: 8:00 - 14:00'
    }
  ];

  return (
    <section id="contacto" className="section-padding bg-gray-50">
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
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para agendar tu cita, 
            resolver dudas o solicitar información sobre nuestros servicios.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-azul-oscuro mb-6">
                Información de Contacto
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Puedes contactarnos de múltiples formas. Estamos disponibles 
                para atenderte cuando lo necesites.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-azul-claro/10 rounded-full flex items-center justify-center text-azul-oscuro">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-azul-oscuro text-lg">{item.title}</h4>
                      <p className="text-verde font-semibold">{item.info}</p>
                      <p className="text-gray-600 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Emergency Contact */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-red-50 border border-red-200 rounded-xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-red-800 text-lg">Emergencias</h4>
                  <p className="text-red-600 font-semibold text-xl">911</p>
                  <p className="text-red-600 text-sm">
                    Para emergencias médicas, llama inmediatamente al 911
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-azul-oscuro mb-4">
                Agendar Cita
              </h3>
              <p className="text-gray-600">
                Completa el formulario y nos pondremos en contacto contigo 
                para confirmar tu cita.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-verde mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-azul-oscuro mb-2">
                  ¡Mensaje enviado!
                </h4>
                <p className="text-gray-600">
                  Te contactaremos pronto para confirmar tu cita.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tipo de Consulta */}
                <div>
                  <label className="block text-sm font-semibold text-azul-oscuro mb-2">
                    Tipo de Consulta
                  </label>
                  <select
                    name="tipoConsulta"
                    value={formData.tipoConsulta}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-claro focus:border-transparent"
                    required
                  >
                    <option value="consulta">Consulta General</option>
                    <option value="especialidad">Especialidad</option>
                    <option value="emergencia">Emergencia</option>
                    <option value="seguimiento">Seguimiento</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold text-azul-oscuro mb-2">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-claro focus:border-transparent"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-azul-oscuro mb-2">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-claro focus:border-transparent"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <label className="block text-sm font-semibold text-azul-oscuro mb-2">
                    Teléfono *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-claro focus:border-transparent"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                </div>

                {/* Especialidad */}
                <div>
                  <label className="block text-sm font-semibold text-azul-oscuro mb-2">
                    Especialidad de Interés
                  </label>
                  <select
                    name="especialidad"
                    value={formData.especialidad}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-claro focus:border-transparent"
                  >
                    <option value="">Selecciona una especialidad</option>
                    {especialidades.map((esp, index) => (
                      <option key={index} value={esp}>{esp}</option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-semibold text-azul-oscuro mb-2">
                    Mensaje
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={20} />
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-claro focus:border-transparent resize-none"
                      placeholder="Cuéntanos sobre tu consulta o necesidades específicas..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4"
                >
                  <Calendar size={20} />
                  <span>Enviar Solicitud</span>
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestros términos y condiciones.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-azul-oscuro mb-4">
                Nuestra Ubicación
              </h3>
              <p className="text-gray-600 mb-6">
                Encuéntranos en el corazón de la ciudad, con fácil acceso 
                y estacionamiento disponible.
              </p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-semibold">Mapa de Google</p>
                <p className="text-sm">Av. Principal 123, Centro</p>
                <p className="text-sm">Ciudad, País 12345</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactoSection;
