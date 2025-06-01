import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './components/home/home1';
import Navigation from './components/navbar/nav';
import AboutPage from './components/About/about';
import { 
  Church, 
  Menu, 
  X, 
  Calendar, 
  HandHeart, 
  Globe, 
  ArrowRight,
  Users,
  Heart,
  BookOpen,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

// Pages configuration


// Ministries Page Component
const MinistriesPage = () => {
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300 inline-block"
              >
                Get Involved
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Events Page Component
const EventsPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Events</h1>
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-12 rounded-3xl max-w-4xl mx-auto">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-3xl font-bold mb-4">Inaugural Convention Conference</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-5 h-5" />
            <span className="text-xl">May 31st - June 1st, 2025</span>
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5" />
            <span>Lookeron High School, Southlea Park, Harare</span>
          </div>
          <p className="text-lg text-blue-100 leading-relaxed">
            Join us for this historic inaugural convention featuring powerful worship sessions, 
            fellowship opportunities, and witness presentations of our compassionate services ministry.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

// Leadership Page Component
const LeadershipPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Leadership</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Our leadership team consists of dedicated bishops and ministers from across Zimbabwe, 
          South Africa, Mozambique, and Malawi, united in their commitment to serving God and community.
        </p>
      </motion.div>
    </div>
  </div>
);

// Gallery Page Component
const GalleryPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Gallery</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Explore moments from our ministry work, church gatherings, and community outreach programs 
          across our member churches in Zimbabwe, South Africa, Mozambique, and Malawi.
        </p>
      </motion.div>
    </div>
  </div>
);

// Contact Page Component
const ContactPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Get in touch with us to learn more about our ministries, upcoming events, 
          or how you can be part of our growing community.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@zbcz.org</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+263 XX XXX XXXX</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">Harare, Zimbabwe</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
