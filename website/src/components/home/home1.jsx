import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Church,
  HandHeart,
  Globe,
  ArrowRight
} from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                ZBCZ
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Zion Bishops Conference of Zimbabwe - Uniting Indigenous Churches Across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('about')}
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
              >
                Learn About Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('events')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Upcoming Events
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Sacred Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As an Indigenous Umbrella Church Body, we unite Zion Churches across Zimbabwe, 
              South Africa, Mozambique, and Malawi in worship and compassionate service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Church className="w-12 h-12" />,
                title: "Unity in Faith",
                description: "Bringing together Zion Churches across Africa under one spiritual umbrella, fostering fellowship and shared worship."
              },
              {
                icon: <HandHeart className="w-12 h-12" />,
                title: "Compassionate Service",
                description: "Supporting orphans, widows, disabled individuals, and girl-child headed families through our dedicated ministry programs."
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Growing Community",
                description: "Expanding our reach across nations, welcoming more churches to join our mammoth Zion Christian Organization."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Event Highlight */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <Calendar className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Inaugural Convention Conference
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                May 31st - June 1st, 2025
              </p>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
                Join us at Lookeron High School, Southlea Park, Harare for our historic inaugural convention. 
                Experience powerful worship, fellowship, and witness our compassionate services ministry in action.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('events')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;