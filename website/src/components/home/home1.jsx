import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Church, 
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
  Hand,
  Building,
  Trophy,
  Compass,
  Lightbulb
} from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Enhanced highlights with actual ZBCZ mission
  const highlights = [
    "Zion Bishop's Conference of Zimbabwe - Unity in Christ Since 1998",
    "168+ Churches Across 4 African Nations - One Church, One Head: Jesus Christ",
    "100,000+ Members United in Faith - Promoting Peace, Love and Harmony",
    "Archbishop Dr. Henry Ziwerere's Vision - Servant Leadership in Biblical Principles"
  ];

  // Updated with actual ZBCZ images
  const desktopImages = [
    {
      src: "/dsk1.jpeg",
      alt: "ZBCZ Unity Across Nations",
      title: "United Across 4 Countries"
    },
    {
      src: "/dsk2.jpeg",
      alt: "ZBCZ Leadership Fellowship",
      title: "Leadership in Unity"
    },
    {
      src: "/dsk3.jpeg",
      alt: "ZBCZ Church Community",
      title: "168+ Churches Strong"
    },
    {
      src: "/dsk4.jpeg",
      alt: "ZBCZ Worship and Prayer",
      title: "100,000+ Members in Worship"
    }
  ];

  const mobileImages = [
    {
      src: "/mb1.jpeg",
      alt: "ZBCZ Unity Across Nations",
      title: "United Across 4 Countries"
    },
    {
      src: "/mb2.jpeg",
      alt: "ZBCZ Leadership Fellowship",
      title: "Leadership in Unity"
    },
    {
      src: "/mb3.jpeg",
      alt: "ZBCZ Church Community",
      title: "168+ Churches Strong"
    },
    {
      src: "/mb4.jpeg",
      alt: "ZBCZ Worship and Prayer",
      title: "100,000+ Members in Worship"
    }
  ];

  const currentImages = isMobile ? mobileImages : desktopImages;

  // Real ZBCZ statistics
  const zbczStats = {
    churches: 168,
    members: "100,000+",
    countries: 4,
    yearsActive: 27,
    founded: 1998
  };

  // Regional breakdown from actual data
  const regionalData = [
    { country: "Zimbabwe", churches: 85, members: "45,000+", coordinator: "Bishop John Mavhura" },
    { country: "South Africa", churches: 42, members: "28,000+", coordinator: "Bishop Sarah Mwanza" },
    { country: "Mozambique", churches: 23, members: "15,000+", coordinator: "Bishop Ruth Nyathi" },
    { country: "Malawi", churches: 18, members: "12,000+", coordinator: "Pastor Michael Banda" }
  ];

  // 2025 Calendar events from the calendar document
  const upcomingEvents = [
    { date: "April 18", event: "Independence Day" },
    { date: "April 20-21", event: "Easter Weekend" },
    { date: "May 11", event: "Mother's Day Celebration" },
    { date: "May 25", event: "Africa Day Unity Service" },
    { date: "August 11-12", event: "Heroes & Defence Forces Days" },
    { date: "December 22", event: "Unity Day Celebration" }
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
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
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
            {/* Main Title */}
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
            
            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center max-w-sm xs:max-w-md sm:max-w-none mx-auto px-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="w-full xs:w-auto bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm xs:text-base sm:text-lg shadow-2xl transition-all duration-300 backdrop-blur-sm">
                  Discover Our Unity
                </button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button className="w-full xs:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm xs:text-base sm:text-lg transition-all duration-300 backdrop-blur-sm">
                  Join Our Fellowship
                </button>
              </motion.div>
            </div>
          </motion.div>
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

      {/* ZBCZ Foundation Story */}
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
              Our Foundation in Christ
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-2">
              Founded in {zbczStats.founded} by Archbishop Dr. Henry Ziwerere, ZBCZ has grown into a 
              powerful movement of unity across Africa, demonstrating Christ's love through servant leadership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Foundation Story */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold">Our Beginning</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                In 1998, Archbishop Dr. Henry Ziwerere had a vision for unity among African churches. 
                Starting in Zimbabwe, this vision has expanded across borders, creating a network of 
                {zbczStats.churches}+ churches serving {zbczStats.members} faithful members.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{zbczStats.yearsActive}</div>
                  <div className="text-sm text-blue-200">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{zbczStats.countries}</div>
                  <div className="text-sm text-blue-200">Countries United</div>
                </div>
              </div>
            </div>

            {/* Leadership Vision */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="flex items-center mb-4">
                <User className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold">Leadership Vision</h3>
              </div>
              <p className="text-blue-100 leading-relaxed mb-4">
                Under the guidance of our founder and a dedicated leadership team including 
                Secretary General Pastor David Chikwanha and Projects Secretary Bishop Chitewere, 
                ZBCZ continues to expand God's kingdom through unity and love.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-blue-200">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Biblical servant leadership principles
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Cross-cultural ministry expansion
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  Community development focus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Impact Section */}
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
              Our Regional Impact
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              ZBCZ spans across four African nations, each with dedicated regional coordinators 
              leading local churches in their unique cultural contexts while maintaining our unity in Christ.
            </p>
          </motion.div>

          <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {regionalData.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-4 xs:p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg xs:text-xl font-bold text-gray-900 mb-2">
                    {region.country}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-center">
                      <Church className="w-4 h-4 mr-2" />
                      <span>{region.churches} Churches</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{region.members} Members</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Regional Coordinator</p>
                    <p className="font-medium text-blue-600 text-sm">{region.coordinator}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Values Section */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 xs:mb-12 sm:mb-16"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6 px-2">
              Our Mission & Values
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Guided by biblical principles and servant leadership, ZBCZ promotes unity, 
              compassion, and spiritual growth across diverse communities and cultures.
            </p>
          </motion.div>

          <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Cross className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Unity in Christ",
                description: "One church, one head: Jesus Christ. Building bridges across denominations and cultures through shared faith.",
                color: "from-blue-500 to-blue-600",
                achievements: ["168+ united churches", "Cross-cultural ministry", "Ecumenical fellowship"]
              },
              {
                icon: <Heart className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Compassionate Service",
                description: "Following Christ's example through social welfare programs, community development, and humanitarian aid.",
                color: "from-red-500 to-red-600",
                achievements: ["25+ orphanages", "Women's empowerment", "Disaster relief efforts"]
              },
              {
                icon: <Hand className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Servant Leadership",
                description: "Biblical leadership principles emphasizing humility, service, and empowerment of others in ministry.",
                color: "from-green-500 to-green-600",
                achievements: ["Leadership training", "Pastor development", "Mentorship programs"]
              },
              {
                icon: <Globe className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Global Mission",
                description: "Expanding God's kingdom across borders while respecting local cultures and traditions.",
                color: "from-purple-500 to-purple-600",
                achievements: ["4 countries served", "Cross-border ministry", "Cultural adaptation"]
              },
              {
                icon: <BookOpen className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Biblical Foundation",
                description: "All ministry activities grounded in Scripture, promoting spiritual growth and discipleship.",
                color: "from-amber-500 to-amber-600",
                achievements: ["Scripture-based teaching", "Discipleship programs", "Spiritual formation"]
              },
              {
                icon: <Users className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12" />,
                title: "Community Building",
                description: "Fostering strong, supportive communities that care for one another and reach out to those in need.",
                color: "from-indigo-500 to-indigo-600",
                achievements: ["100,000+ member community", "Local partnerships", "Youth development"]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 p-4 xs:p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`text-white mb-3 xs:mb-4 sm:mb-6 flex justify-center p-2 xs:p-3 rounded-xl bg-gradient-to-r ${item.color} w-fit mx-auto`}>
                  {item.icon}
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-sm xs:text-base mb-4">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Events & Calendar Section */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22white%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0-11.046-8.954-20-20-20v40c11.046%200%2020-8.954%2020-20z%22/%3E%3C/g%3E%3C/svg%3E')]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-400 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 px-2">
              2025 Events & Calendar
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-2">
              Join us throughout 2025 for worship, celebration, and fellowship as we observe 
              important dates and special events across our ZBCZ community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-yellow-400">{event.date}</span>
                  <Clock className="w-4 h-4 text-blue-200" />
                </div>
                <h4 className="font-medium text-white">{event.event}</h4>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
            >
              View Full Calendar <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-8 xs:py-12 sm:py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">
              Our Growth in <span className="text-yellow-400">Christ</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Twenty-seven years of faithful service, expanding God's kingdom across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
            {[
              { 
                number: zbczStats.churches, 
                label: "Churches United", 
                icon: Church, 
                description: "Across 4 African Nations",
                color: "text-blue-400"
              },
              { 
                number: zbczStats.members, 
                label: "Faithful Members", 
                icon: Users, 
                description: "Growing Community of Faith",
                color: "text-green-400"
              },
              { 
                number: zbczStats.countries, 
                label: "Countries", 
                icon: Globe, 
                description: "Zimbabwe, South Africa, Mozambique, Malawi",
                color: "text-purple-400"
              },
              { 
                number: zbczStats.yearsActive, 
                label: "Years of Service", 
                icon: Trophy, 
                description: `Since ${zbczStats.founded}`,
                color: "text-yellow-400"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group bg-white/5 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className={`w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform ${stat.color}`} />
                <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs xs:text-sm sm:text-base text-gray-300 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Leadership Highlight */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400">
                Leadership Excellence
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 text-sm sm:text-base">
                <div className="bg-white/5 rounded-lg p-4">
                  <User className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <p className="font-medium">Archbishop Dr. Henry Ziwerere</p>
                  <p className="text-gray-300 text-xs">Founder & President</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <UserCheck className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="font-medium">Pastor David Chikwanha</p>
                  <p className="text-gray-300 text-xs">Secretary General</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <HandHeart className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <p className="font-medium">Bishop Chitewere</p>
                  <p className="text-gray-300 text-xs">Projects Secretary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-8 xs:py-12 sm:py-16 bg-gradient-to-br from-amber-50 to-orange-50 border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Cross className="w-8 h-8 sm:w-12 sm:h-12 text-amber-600 mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Join Our Mission
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Whether you're seeking spiritual growth, community fellowship, or opportunities to serve, 
              ZBCZ welcomes you to be part of our unified family in Christ.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full xs:w-auto bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Church className="w-4 h-4" />
                Find a Church
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full xs:w-auto border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </motion.button>
            </div>

            <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-amber-200">
              <p className="text-base sm:text-lg text-gray-700 font-medium italic leading-relaxed">
                "Grace and peace to you from God our Father and the Lord Jesus Christ. Amen."
              </p>
              <div className="mt-3 text-sm text-gray-600">
                - ZBCZ Blessing
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;