import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import HomePage from './components/home/home1';
import Navigation from './components/navbar/nav';
import AboutPage from './components/About/about';
import MinistriesPage from './components/ministries/ministries';
import EventsPage from './components/events/events';
import ContactPage from './components/contact/contact';
import LeadershipComponent from './components/leadership';
import ZBCZFooter from './components/navbar/footer';
import GalleryPage from './components/gallery';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ministries" element={<MinistriesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/leadership" element={<LeadershipComponent />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50">
        <ScrollToTop />
        <Navigation />
        <AnimatedRoutes />
        <ZBCZFooter />
      </div>
    </Router>
  );
};

export default App;
