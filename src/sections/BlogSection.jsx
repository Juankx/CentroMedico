import React from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, Bell, Heart } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      type: 'video',
      title: 'PORTAL DE TURNOS',
      youtubeChannel: '@centromediconeurovida',
      description: 'Ya se encuentran disponibles los videos tutoriales en nuestro canal de Youtube. Suscribite!',
      buttonText: 'SUSCRIBITE',
      bottomText: 'Tutoriales para uso del portal de turnos!',
      logo: 'NeuroVida'
    },
    {
      type: 'news',
      title: 'Dr. Claudio Majul',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'El 15 de Diciembre de 2022 se llevó a cabo el acto donde el Dr. Claudio Majul (Director de NeuroVida) asumió como Presidente 2023 de la Sociedad Argentina de Cardiología (SAC) en el aula magna de la Academia Nacional de Medicina Argentina.',
      congratulations: '¡Felicitaciones Dr. Majul!',
      bottomText: '¡Felicitaciones Dr. Majul!',
      logo: 'NeuroVida'
    },
    {
      type: 'agenda',
      title: 'AGENDA 2023',
      doctor: 'Dra. Olga Paez',
      specialty: 'CARDIOLOGÍA',
      description: 'Es un placer para mi ser la Presidenta Científica del Congreso Argentino de Hipertensión Arterial 2023 Muchas gracias!',
      congratulations: '¡Felicitaciones Dra. Olga Paez!',
      bottomText: '¡Felicitaciones Dra. Olga Paez!',
      logo: 'NeuroVida'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-azul-oscuro mb-4">BLOG</h2>
          <div className="w-16 h-1 bg-rojo-cta mx-auto"></div>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {post.type === 'video' && (
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Youtube className="text-red-600 mr-2" size={24} />
                    <h3 className="text-xl font-bold text-azul-oscuro">{post.title}</h3>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="w-32 h-20 bg-gray-200 rounded-lg mx-auto flex items-center justify-center mb-4">
                      <Play className="text-gray-500" size={32} />
                    </div>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center text-sm font-medium">
                      {post.youtubeChannel}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-rojo-cta hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Bell size={20} />
                      <span>{post.buttonText}</span>
                    </motion.button>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-azul-oscuro rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">NV</span>
                      </div>
                      <span className="text-azul-oscuro font-bold">{post.logo}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-rojo-cta text-white text-center py-2 text-sm font-medium">
                    {post.bottomText}
                  </div>
                </div>
              )}

              {post.type === 'news' && (
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="text-red-600" size={24} />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-azul-oscuro text-center mb-4">
                    {post.congratulations}
                  </h4>
                  
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-azul-oscuro rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">NV</span>
                      </div>
                      <span className="text-azul-oscuro font-bold">{post.logo}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-rojo-cta text-white text-center py-2 text-sm font-medium">
                    {post.bottomText}
                  </div>
                </div>
              )}

              {post.type === 'agenda' && (
                <div className="p-6">
                  <div className="bg-pink-500 text-white px-4 py-2 rounded-lg text-center font-bold mb-4">
                    {post.title}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.description}</p>
                  
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-bold text-lg">H</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-pink-200 pt-4 mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <Heart className="text-pink-500" size={20} />
                      <div className="text-center">
                        <div className="font-bold text-azul-oscuro">{post.doctor}</div>
                        <div className="text-sm text-gray-600">{post.specialty}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-azul-oscuro rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">NV</span>
                      </div>
                      <span className="text-azul-oscuro font-bold">{post.logo}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-rojo-cta text-white text-center py-2 text-sm font-medium">
                    {post.bottomText}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Ver Blog Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-azul-oscuro hover:bg-azul-medio text-white font-bold px-8 py-4 rounded-lg transition-all duration-300"
          >
            VER BLOG
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
