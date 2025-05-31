import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, HandHeart, BookOpen, CheckCircle } from 'lucide-react';

const MinistriesPage = ({ setCurrentPage }) => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Ministries
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Through our Compassionate Services Ministry, we reach out to the most 
              vulnerable members of our communities with love and practical support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Users className="w-16 h-16" />,
                title: "Orphan Care Ministry",
                description: "Providing shelter, education, healthcare, and spiritual guidance to orphaned children across our communities.",
                services: ["Educational support", "Healthcare provision", "Spiritual mentorship", "Skills development"]
              },
              {
                icon: <Heart className="w-16 h-16" />,
                title: "Widow Support Program",
                description: "Empowering widows through economic opportunities, emotional support, and community integration.",
                services: ["Economic empowerment", "Counseling services", "Community support", "Skills training"]
              },
              {
                icon: <HandHeart className="w-16 h-16" />,
                title: "Disability Support Services",
                description: "Creating inclusive communities and providing specialized care for people with disabilities.",
                services: ["Accessibility programs", "Specialized care", "Community inclusion", "Advocacy work"]
              },
              {
                icon: <BookOpen className="w-16 h-16" />,
                title: "Girl-Child Support Initiative",
                description: "Supporting girl-child headed families with education, mentorship, and essential resources.",
                services: ["Educational scholarships", "Leadership training", "Life skills programs", "Resource provision"]
              }
            ].map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-6 flex justify-center">
                  {ministry.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {ministry.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {ministry.description}
                </p>
                <div className="space-y-2">
                  {ministry.services.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Partner with us in making a difference. Whether through volunteering, 
              donations, or corporate partnerships, your support transforms lives.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MinistriesPage;