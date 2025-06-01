import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Church, 
  Users,
  Heart,
  Globe,
  Star,
  Cross,
  Mail,
  Phone,
  MapPin,
  Clock,
  Navigation,
  Send,
  User,
  MessageCircle,
  Award,
  Shield,
  BookOpen,
  Compass,
  Building,
  Calendar,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

const AboutPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Church images for the about page - blend these throughout the content
  const aboutImages = [
    {
      src: "/dsk7.jpeg",
      alt: "ZBCZ Church Leadership",
      title: "Our Leadership",
      description: "Dedicated bishops and pastors serving across Africa"
    },
    {
      src: "/mb5.jpeg", 
      alt: "Community Service",
      title: "Compassionate Service",
      description: "Supporting orphans, widows, and vulnerable families"
    },
    {
      src: "/cong.jpeg",
      alt: "Church Congregation",
      title: "United in Worship",
      description: "Churches across Zimbabwe, South Africa, Mozambique, and Malawi"
    },
    {
      src: "/cong2.jpeg",
      alt: "Youth Ministry",
      title: "Future Leaders",
      description: "Nurturing the next generation of faithful servants"
    },
    {/*
      src: "/about5.jpg",
      alt: "Prayer Fellowship",
      title: "Power of Prayer",
      description: "Connecting hearts and minds in spiritual unity"
    */}
  ];

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [aboutImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  return (
    <div className="pt-12 xs:pt-16 sm:pt-20 min-h-screen">
      {/* Enhanced Hero Section with Carousel */}
      <section className="relative py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
        </div>

        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6 lg:mb-8 px-2">
              About{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                ZBCZ
              </span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              The Zion Bishops Conference of Zimbabwe stands as a beacon of unity for Indigenous Churches 
              across Africa. Our mission extends beyond Zimbabwe to embrace Zion Churches in South Africa, 
              Mozambique, and Malawi, creating a powerful network of faith and compassionate service.
            </p>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto mb-8 xs:mb-12 sm:mb-16"
          >
            <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <img
                    src={aboutImages[currentImageIndex].src}
                    alt={aboutImages[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 xs:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 xs:p-3 rounded-full transition-all duration-300 group"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 xs:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 xs:p-3 rounded-full transition-all duration-300 group"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* Image Info Overlay */}
              <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 right-3 xs:right-4 sm:right-6 z-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl p-2 xs:p-3 sm:p-4 border border-white/20"
                  >
                    <h3 className="text-white font-semibold text-sm xs:text-base sm:text-lg mb-1">
                      {aboutImages[currentImageIndex].title}
                    </h3>
                    <p className="text-white/80 text-xs xs:text-sm">
                      {aboutImages[currentImageIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-3 xs:bottom-4 right-3 xs:right-4 z-20 flex space-x-1 xs:space-x-2">
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Story Section with Embedded Images */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center mb-12 xs:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
                Our Story
              </h2>
              <div className="space-y-3 xs:space-y-4 sm:space-y-6 text-gray-600 text-xs xs:text-sm sm:text-base leading-relaxed">
                <p>
                  Founded as an Indigenous Umbrella Church Body, ZBCZ represents the unity and strength 
                  of Zion Churches across multiple African nations. Our organization serves as a bridge 
                  connecting communities of faith while maintaining our rich cultural heritage.
                </p>
                <p>
                  Through our Compassionate Services Ministry, we have touched thousands of lives, 
                  providing hope and practical support to the most vulnerable members of our communities. 
                  Our work spans across borders, uniting believers in a common mission of love and service.
                </p>
                <p>
                  Today, ZBCZ continues to grow as a mammoth Zion Christian Organization, welcoming 
                  new churches and expanding our reach across the African continent while staying 
                  true to our indigenous roots and Christian values.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <img
                  src="/dsk3.jpeg"
                  alt="ZBCZ Church Community"
                  className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-2xl xs:rounded-3xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-700/20 rounded-2xl xs:rounded-3xl" />
                <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 right-3 xs:right-4 sm:right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg xs:rounded-xl p-2 xs:p-3 sm:p-4">
                    <h3 className="font-semibold text-gray-900 text-sm xs:text-base sm:text-lg mb-1">
                      United in Faith
                    </h3>
                    <p className="text-gray-600 text-xs xs:text-sm">
                      Churches across four nations working together
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core Values with Embedded Images */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 xs:mb-16 lg:mb-20"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 xs:mb-8 sm:mb-12 text-center">
              Our Core Values
            </h2>
            
            <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2">
              {[
                { 
                  icon: Cross, 
                  title: "Faith", 
                  desc: "Deep-rooted Christian beliefs that guide every aspect of our ministry",
                  image: "/mb5.jpeg",
                  color: "from-blue-500 to-blue-600"
                },
                { 
                  icon: Heart, 
                  title: "Compassion", 
                  desc: "Caring for orphans, widows, and the most vulnerable in our communities",
                  image: "/dsk2.jpeg",
                  color: "from-purple-500 to-purple-600"
                },
                { 
                  icon: Users, 
                  title: "Unity", 
                  desc: "Bringing diverse Zion Churches together under one spiritual umbrella",
                  image: "/church.jpeg",
                  color: "from-indigo-500 to-indigo-600"
                },
                { 
                  icon: Globe, 
                  title: "Growth", 
                  desc: "Expanding our reach across Africa while maintaining our indigenous roots",
                  image: "/growth.jpeg",
                  color: "from-green-500 to-green-600"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white rounded-2xl xs:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative h-32 xs:h-36 sm:h-40 md:h-44">
                    <img
                      src={value.image}
                      alt={value.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <value.icon className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                  </div>
                  <div className="p-3 xs:p-4 sm:p-6">
                    <h3 className="font-bold text-gray-900 text-base xs:text-lg sm:text-xl mb-1 xs:mb-2 sm:mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-xs xs:text-sm sm:text-base leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Vision & Mission with Images */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
              Vision & Mission
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Our guiding principles that shape everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 xs:gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl xs:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-32 xs:h-36 sm:h-40 md:h-44">
                <img
                  src="/dsk1.jpeg"
                  alt="Our Vision"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-blue-600/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Star className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
              <div className="p-4 xs:p-6 sm:p-8">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 text-center">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-center text-xs xs:text-sm sm:text-base leading-relaxed">
                  To be the leading Indigenous Umbrella Church Body that unites Zion Churches across Africa, 
                  fostering spiritual growth, community development, and compassionate service to all people.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl xs:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-32 xs:h-36 sm:h-40 md:h-44">
                <img
                  src="/logo.png"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-purple-600/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
              <div className="p-4 xs:p-6 sm:p-8">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 text-center">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-center text-xs xs:text-sm sm:text-base leading-relaxed">
                  To empower Zion Churches to grow spiritually, connect communities, and provide compassionate 
                  service to the most vulnerable members of our communities across Africa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section with Images */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
              Our Leadership
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Dedicated servants leading our churches across Africa
            </p>
          </motion.div>

          <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Bishop John Mavhura",
                title: "President & Founder",
                image: "/mb4.jpeg",
                description: "Leading ZBCZ with wisdom and compassion"
              },
              {
                name: "Bishop Sarah Mwanza",
                title: "Vice President",
                image: "/leader2.jpeg",
                description: "Overseeing compassionate services ministry"
              },
              {
                name: "Pastor David Chikwanha",
                title: "Secretary General",
                image: "/sg.jpeg",
                description: "Coordinating inter-church communications"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative mb-3 xs:mb-4 sm:mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 object-cover rounded-full mx-auto border-4 border-white shadow-lg"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-sm xs:text-base sm:text-lg mb-1 xs:mb-2 text-center">
                  {leader.name}
                </h3>
                <p className="text-blue-600 font-medium text-xs xs:text-sm sm:text-base mb-2 xs:mb-3 text-center">
                  {leader.title}
                </p>
                <p className="text-gray-600 text-xs xs:text-sm text-center leading-relaxed">
                  {leader.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;