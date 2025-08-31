import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './components/home/home1';
import Navigation from './components/navbar/nav';
import AboutPage from './components/About/about';
import MinistriesPage from './components/ministries/ministries';
import EventsPage from './components/events/events';
import ContactPage from './components/contact/contact';
import LeadershipPage from './components/leadership/leadership';
import LeadershipComponent from './components/leadership';
import ZBCZFooter from './components/navbar/footer';
import GalleryPage from './components/gallery';
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
          {/*<Route path="/leadership" element={<LeadershipPage />} />*/}
          <Route path="/leadership" element={<LeadershipComponent />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <ZBCZFooter />
      </div>
    </Router>
  );
};

export default App;
