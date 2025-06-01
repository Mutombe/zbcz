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
  Clock,
  Star,
  Award,
  Shield,
  Cross,
  User,
  Camera,
  Play,
  ChevronDown,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  FileText,
  Home,
  Info,
  Briefcase,
  UserCheck,
  Image as ImageIcon
} from 'lucide-react';

// Pages configuration
const pages = {
  home: { name: 'Home', icon: Home },
  about: { name: 'About Us', icon: Info },
  ministries: { name: 'Ministries', icon: HandHeart },
  events: { name: 'Events', icon: Calendar },
  leadership: { name: 'Leadership', icon: UserCheck },
  gallery: { name: 'Gallery', icon: ImageIcon },
  contact: { name: 'Contact', icon: MessageCircle }
};

// Enhanced Navigation Component with better mobile UX
const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const menuItems = Object.entries(pages);
  const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 20 ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' : 'bg-white/90 backdrop-blur-md shadow-lg'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-18">
            {/* Logo - Enhanced for mobile */}
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Church className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-sm sm:text-lg lg:text-xl text-gray-800 leading-tight">ZBCZ</h1>
                  <p className="text-xs text-gray-600 hidden sm:block leading-tight">Zion Bishops Conference</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {menuItems.map(([key, { name }]) => (
                <motion.div key={key}>
                  <Link
                    to={key === 'home' ? '/' : `/${key}`}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                      currentPath === key 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {name}
                    </motion.span>
                    {currentPath === key && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                        layoutId="activeTab"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl transition-all duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:scale-95"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t shadow-2xl"
            >
              <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {menuItems.map(([key, { name, icon: Icon }]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: menuItems.findIndex(([k]) => k === key) * 0.05 }}
                  >
                    <Link
                      to={key === 'home' ? '/' : `/${key}`}
                      className={`flex items-center space-x-3 w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                        currentPath === key
                          ? 'text-blue-600 bg-blue-50 shadow-sm'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 active:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;