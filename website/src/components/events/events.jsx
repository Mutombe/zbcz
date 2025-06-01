import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Heart, 
  HandHeart, 
  BookOpen, 
  CheckCircle, 
  Calendar, 
  MapPin,
  Clock,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const EventsPage = () => {
  const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const events = [
    {
      date: "May 31 - June 1, 2025",
      title: "Inaugural Convention Conference",
      location: "Lookeron High School, Southlea Park, Harare",
      description: "Join us for our historic inaugural convention. Experience powerful worship, fellowship, and witness our compassionate services ministry in action.",
      featured: true,
      image: "/dsk7.jpeg",
      time: "9:00 AM - 6:00 PM",
      category: "Convention"
    },
    {
      date: "July 15, 2025",
      title: "Annual Charity Walk",
      location: "Harare Central Park",
      description: "Participate in our annual charity walk to raise funds for our Compassionate Services Ministry. Together we can make a difference!",
      featured: false,
      image: "/cong.jpeg",
      time: "6:00 AM - 12:00 PM",
      category: "Charity"
    },
    {
      date: "August 20, 2025",
      title: "Youth Empowerment Summit",
      location: "ZBCZ Headquarters, Harare",
      description: "A day of inspiration and empowerment for the youth. Workshops, mentorship sessions, and networking opportunities await!",
      featured: false,
      image: "/cong2.jpeg",
      time: "10:00 AM - 4:00 PM",
      category: "Youth"
    }
  ];

  return (
    <div className="pt-12 xs:pt-16 sm:pt-20 min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden">
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
              Upcoming{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Join us for our upcoming events and be part of our vibrant community. 
              Experience powerful worship, fellowship, and service.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto mb-8 xs:mb-12 sm:mb-16"
          >
            <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/dsk7.jpeg"
                alt="ZBCZ Community Events"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 right-3 xs:right-4 sm:right-6">
                <div className="bg-white/10 backdrop-blur-md rounded-lg xs:rounded-xl p-2 xs:p-3 sm:p-4 border border-white/20">
                  <h3 className="text-white font-semibold text-sm xs:text-base sm:text-lg mb-1">
                    Join Our Community Events
                  </h3>
                  <p className="text-white/80 text-xs xs:text-sm">
                    Experience worship, fellowship, and transformative gatherings
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Events Grid */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: isMobile ? 1 : 1.02, y: isMobile ? 0 : -5 }}
                className={`bg-white rounded-2xl xs:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 relative ${
                  event.featured ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {/* Featured Badge */}
                {event.featured && (
                  <div className="absolute -top-2 xs:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-3 xs:px-4 py-1 xs:py-1.5 rounded-full text-xs xs:text-sm font-semibold shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 xs:w-4 xs:h-4" />
                      Featured Event
                    </span>
                  </div>
                )}

                {/* Event Image Header */}
                <div className="relative h-32 xs:h-36 sm:h-40 md:h-44">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-purple-600/60" />
                  <div className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs xs:text-sm px-2 xs:px-3 py-1 rounded-full font-medium">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-white/80" />
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-4 xs:p-6 sm:p-8">
                  <div className="text-center mb-3 xs:mb-4">
                    <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 xs:px-4 py-1 xs:py-1.5 rounded-full text-xs xs:text-sm font-medium">
                      {event.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 text-center">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 xs:mb-6 text-center text-xs xs:text-sm sm:text-base leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Event Details */}
                  <div className="space-y-2 xs:space-y-3">
                    <div className="flex items-start gap-2 xs:gap-3">
                      <MapPin className="w-4 h-4 xs:w-5 xs:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs xs:text-sm sm:text-base">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 xs:gap-3">
                      <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700 text-xs xs:text-sm sm:text-base">{event.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 xs:p-8 sm:p-12 rounded-2xl xs:rounded-3xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23fff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0%205.5-4.5%2010-10%2010s-10-4.5-10-10%204.5-10%2010-10%2010%204.5%2010%2010z%22/%3E%3C/g%3E%3C/svg%3E')]" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">
                Don't Miss Out!
              </h2>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl mb-6 xs:mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
                Stay connected with our community events and be part of our mission. 
                Contact us for more information about upcoming events and how to participate.
              </p>
              
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="w-full xs:w-auto bg-white text-blue-600 hover:bg-blue-50 px-6 xs:px-8 py-3 xs:py-4 rounded-full font-semibold text-sm xs:text-base lg:text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: isMobile ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/ministries')}
                  className="w-full xs:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 xs:px-8 py-3 xs:py-4 rounded-full font-semibold text-sm xs:text-base lg:text-lg transition-all duration-300"
                >
                  Our Ministries
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;