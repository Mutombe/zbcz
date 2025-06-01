import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './components/home/home1';
import Navigation from './components/navbar/nav';
import AboutPage from './components/About/about';
import MinistriesPage from './components/ministries/ministries';
import EventsPage from './components/events/events';
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
