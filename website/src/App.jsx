import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
const pages = {
  home: 'Home',
  about: 'About Us',
  ministries: 'Our Ministries',
  events: 'Events',
  leadership: 'Leadership',
  gallery: 'Gallery',
  contact: 'Contact'
};

// Enhanced Navigation Component
const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = Object.entries(pages);
  const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md shadow-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                <Church className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg lg:text-xl text-gray-800">ZBCZ</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Zion Bishops Conference</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map(([key, label]) => (
              <motion.div key={key}>
                <Link
                  to={key === 'home' ? '/' : `/${key}`}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    currentPath === key 
                      ? 'text-blue-600' 
                      : scrollY > 50 ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.span>
                  {currentPath === key && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrollY > 50 
                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:text-blue-200 hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {menuItems.map(([key, label]) => (
                <Link
                  key={key}
                  to={key === 'home' ? '/' : `/${key}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPath === key
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Home Page Component
const HomePage = () => {
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
              <motion.div whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300 inline-block"
                >
                  Learn About Us
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/events"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
                >
                  Upcoming Events
                </Link>
              </motion.div>
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
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/events"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// About Page Component
const AboutPage = () => (
  <div className="pt-20 min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">About ZBCZ</h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          The Zion Bishops Conference of Zimbabwe stands as a beacon of unity for Indigenous Churches 
          across Africa. Our mission extends beyond Zimbabwe to embrace Zion Churches in South Africa, 
          Mozambique, and Malawi, creating a powerful network of faith and compassionate service.
        </p>
      </motion.div>
    </div>
  </div>
);

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
