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
  ChevronLeft,
  ChevronRight,
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
  Image,
  Bird,
  Hands
} from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const highlights = [
    "Ecumenical Board of Indigenous African Zionist Churches",
    "Unity in Christ - One Church, One Head: Jesus Christ",
    "Promoting Peace, Love and Harmony Among Churches",
    "Servant Leadership Following Biblical Principles"
  ];

  // Desktop images - Replace these URLs with your actual church images
  const desktopImages = [
    {
      src: "/dsk1.jpeg",
      alt: "ZBCZ Unity in Worship",
      title: "One Church Under Christ"
    },
    {
      src: "/dsk2.jpeg",
      alt: "Ecumenical Fellowship",
      title: "Indigenous Churches United"
    },
    {
      src: "dsk3.jpeg",
      alt: "Prayer and Unity",
      title: "Bound Together in Prayer"
    },
    {
      src: "dsk4.jpeg",
      alt: "Servant Leadership",
      title: "Humble Servants of Christ"
    }
  ];

  // Mobile optimized images - Replace these URLs with your mobile-optimized images
  const mobileImages = [
    {
      src: "/mb5.jpeg",
      alt: "ZBCZ Unity in Worship",
      title: "One Church Under Christ"
    },
    {
      src: "/mb2.jpeg",
      alt: "Ecumenical Fellowship",
      title: "Indigenous Churches United"
    },
    {
      src: "/mb3.jpeg",
      alt: "Prayer and Unity",
      title: "Bound Together in Prayer"
    },
    {
      src: "/mb4.jpeg",
      alt: "Servant Leadership",
      title: "Humble Servants of Christ"
    }
  ];

  const currentImages = isMobile ? mobileImages : desktopImages;

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate text highlights
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageSlide((prev) => (prev + 1) % currentImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentImages.length]);

  const nextImage = () => {
    setCurrentImageSlide((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageSlide((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  const goToSlide = (index) => {
    setCurrentImageSlide(index);
  };

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Image Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Carousel Background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={currentImages[currentImageSlide].src}
                alt={currentImages[currentImageSlide].alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Enhanced overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows - Hidden on very small screens */}
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hidden xs:block group"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hidden xs:block group"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
          {currentImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentImageSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Title Overlay */}
        <div className="absolute bottom-32 sm:bottom-36 left-4 sm:left-8 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageSlide}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 sm:px-4 sm:py-2 border border-white/20"
            >
              <p className="text-white text-sm sm:text-base font-medium">
                {currentImages[currentImageSlide].title}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Title - Ultra Responsive Typography */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                ZBCZ
              </span>
            </h1>
            
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-blue-100 drop-shadow-lg">
              Zion Bishop's Conference of Zimbabwe
            </p>
            
            {/* Rotating Highlight */}
            <div className="h-12 xs:h-16 sm:h-20 mb-6 sm:mb-8 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg px-2"
                >
                  {highlights[currentSlide]}
                </motion.p>
              </AnimatePresence>
            </div>
            
            {/* CTA Buttons - Ultra Mobile Optimized */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center max-w-sm xs:max-w-md sm:max-w-none mx-auto px-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/about"
                  className="w-full xs:w-auto bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm xs:text-base sm:text-lg shadow-2xl transition-all duration-300 inline-block text-center backdrop-blur-sm"
                >
                  Our Unity in Christ
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/events"
                  className="w-full xs:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm xs:text-base sm:text-lg transition-all duration-300 inline-block text-center backdrop-blur-sm"
                >
                  Join Our Fellowship
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(isMobile ? 8 : 15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white/30 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
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

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 z-20"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </section>

      {/* Biblical Foundation Section */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <Cross className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 px-2">
              Our Biblical Foundation
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-2">
              "According to the Bible the church is one and the Head of the church is Jesus Christ" - 
              Following the example of the early church in Acts 4:32 and learning from Paul's teachings on unity.
            </p>
          </motion.div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 xs:p-6 sm:p-8 border border-white/20 mb-8 sm:mb-12">
            <div className="text-center mb-6 sm:mb-8">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                Scripture Foundation
              </h3>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="bg-white/5 rounded-xl p-3 xs:p-4 sm:p-6">
                  <h4 className="font-semibold text-yellow-400 mb-2 text-sm xs:text-base">Acts 4:32</h4>
                  <p className="text-xs xs:text-sm sm:text-base text-blue-100 italic leading-relaxed">
                    "All the believers were one in heart and mind..."
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-3 xs:p-4 sm:p-6">
                  <h4 className="font-semibold text-yellow-400 mb-2 text-sm xs:text-base">1 Corinthians 1:10</h4>
                  <p className="text-xs xs:text-sm sm:text-base text-blue-100 italic leading-relaxed">
                    "I appeal to you... that all of you agree with one another in what you say and that there be no divisions among you..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section - Updated with Biblical Principles */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6 px-2">
              Our Ecumenical Mission
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              As an ecumenical board of indigenous African Zionist Churches, we promote unity, peace, 
              love and harmony among churches through biblical servant leadership and shared fellowship.
            </p>
          </motion.div>

          <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Bird className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Unity in Christ",
                description: "One church under Christ's headship, bringing together indigenous Zionist Churches in co-existence and fellowship.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Heart className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Peace & Harmony",
                description: "Promoting peace, love and harmony among churches, following Christ's example of servant leadership.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Users className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Inclusive Fellowship",
                description: "Advantages in information sharing that allows inclusivity, building bridges between diverse church communities.",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: <Hands className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Servant Leadership",
                description: "Following biblical principles of humility, unity, gospel centrality, and servant leadership as exemplified by Paul and Apollos.",
                color: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-4 xs:p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`text-white mb-3 xs:mb-4 sm:mb-6 flex justify-center p-2 xs:p-3 rounded-xl bg-gradient-to-r ${item.color} w-fit mx-auto`}>
                  {item.icon}
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm xs:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Event Highlight - Updated for Convention */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22white%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v40c11.046%200%2020-8.954%2020-20z%22/%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 mx-auto mb-3 xs:mb-4 sm:mb-6"
              >
                <Calendar className="w-full h-full text-yellow-400" />
              </motion.div>
              
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4 px-2">
                Inaugural Ecumenical Convention
              </h2>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 xs:gap-2 sm:gap-4 mb-3 xs:mb-4 sm:mb-6 text-sm xs:text-base sm:text-xl">
                <div className="flex items-center justify-center gap-1 xs:gap-2">
                  <Clock className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  <span>May 31st - June 1st, 2025</span>
                </div>
                <div className="hidden sm:block text-blue-200">•</div>
                <div className="flex items-center justify-center gap-1 xs:gap-2">
                  <MapPin className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                  <span>Lookeron High School, Harare</span>
                </div>
              </div>
              
              <p className="text-xs xs:text-sm sm:text-base lg:text-lg mb-4 xs:mb-6 sm:mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed px-2">
                Join us for our historic inaugural convention where indigenous Zionist Churches unite in worship, 
                fellowship, and witness to our shared commitment to Christ's church. Experience the power of 
                unity in diversity as we celebrate our ecumenical bond.
              </p>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/events"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-full font-semibold text-sm xs:text-base sm:text-lg shadow-2xl transition-all duration-300 inline-flex items-center gap-1 xs:gap-2"
                >
                  Join Our Unity <ArrowRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grace and Peace Blessing Section */}
      <section className="py-8 xs:py-12 sm:py-16 bg-gradient-to-br from-amber-50 to-orange-50 border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Cross className="w-8 h-8 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
              Blessing
            </h3>
            <p className="text-base xs:text-lg sm:text-xl text-gray-700 font-medium italic leading-relaxed">
              "Grace and peace to you from God our Father and the Lord Jesus Christ. Amen."
            </p>
            <div className="mt-4 sm:mt-6 text-sm xs:text-base text-gray-600">
              - ZBCZ Ecumenical Blessing
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ultra Mobile Responsive Stats Section - Updated */}
      <section className="py-8 xs:py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
            {[
              { number: "4", label: "Countries", icon: Globe, description: "Zimbabwe, South Africa, Mozambique, Malawi" },
              { number: "50+", label: "Member Churches", icon: Church, description: "Indigenous Zionist Churches United" },
              { number: "1000+", label: "Faithful Members", icon: Users, description: "Growing Ecumenical Community" },
              { number: "1", label: "Head: Jesus Christ", icon: Cross, description: "One Church, One Lord" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <stat.icon className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-blue-400 mx-auto mb-1 xs:mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs xs:text-sm sm:text-base text-gray-300 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;