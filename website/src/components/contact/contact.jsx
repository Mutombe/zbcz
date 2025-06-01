import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageCircle,
  CheckCircle,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Church,
  Heart,
  Users,
  Building,
  Calendar,
  Navigation
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    churchAffiliation: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize Leaflet map
  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Add CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
      document.head.appendChild(cssLink);

      // Add JS
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.onload = () => {
        if (mapRef.current && window.L && !mapInstanceRef.current) {
          // Initialize map centered on Harare, Zimbabwe
          const map = window.L.map(mapRef.current).setView([-17.8252, 31.0335], 12);
          
          // Add tile layer
          window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(map);

          // Add markers for ZBCZ locations
          const locations = [
            {
              lat: -17.8252,
              lng: 31.0335,
              title: 'ZBCZ Headquarters',
              description: 'Main office and headquarters'
            },
            {
              lat: -17.8400,
              lng: 31.0500,
              title: 'ZBCZ Community Center',
              description: 'Community outreach center'
            },
            {
              lat: -17.8100,
              lng: 31.0200,
              title: 'ZBCZ Youth Center',
              description: 'Youth ministry and programs'
            }
          ];

          locations.forEach(location => {
            const marker = window.L.marker([location.lat, location.lng]).addTo(map);
            marker.bindPopup(`<b>${location.title}</b><br>${location.description}`);
          });

          mapInstanceRef.current = map;
        }
      };
      document.head.appendChild(script);
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        churchAffiliation: '',
        inquiryType: 'general'
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      content: "info@zbcz.org",
      subContent: "secretary@zbcz.org",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "+263 242 123456",
      subContent: "+263 772 123456",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Physical Address",
      content: "123 Unity Street",
      subContent: "Harare, Zimbabwe",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Fri: 8:00 AM - 5:00 PM",
      subContent: "Sat: 9:00 AM - 1:00 PM",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
    { icon: Youtube, href: "#", color: "hover:text-red-600" }
  ];

  const ministryContacts = [
    {
      icon: Heart,
      title: "Compassionate Services",
      contact: "compassion@zbcz.org",
      description: "Support for orphans, widows, and vulnerable families"
    },
    {
      icon: Users,
      title: "Church Fellowship",
      contact: "fellowship@zbcz.org",
      description: "Inter-church relationships and partnerships"
    },
    {
      icon: Building,
      title: "Church Registration",
      contact: "registration@zbcz.org",
      description: "New church membership and affiliation"
    },
    {
      icon: Calendar,
      title: "Events & Conferences",
      contact: "events@zbcz.org",
      description: "Upcoming conferences and special events"
    }
  ];

  return (
    <div className="pt-12 xs:pt-16 sm:pt-20 min-h-screen">
      {/* Enhanced Hero Section */}
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
              Contact{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                ZBCZ
              </span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 mb-6 xs:mb-8">
              Connect with us to learn more about our ministries, join our community, 
              or discover how we can serve together across Africa.
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 max-w-5xl mx-auto">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${info.color} rounded-lg xs:rounded-xl flex items-center justify-center mx-auto mb-2 xs:mb-3`}>
                    <info.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-xs xs:text-sm sm:text-base mb-1 xs:mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-xs xs:text-sm font-medium">
                    {info.content}
                  </p>
                  {info.subContent && (
                    <p className="text-gray-500 text-xs">
                      {info.subContent}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-8 xs:py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-xl"
            >
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+263 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="membership">Church Membership</option>
                      <option value="events">Events & Conferences</option>
                      <option value="compassion">Compassionate Services</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                    Church Affiliation
                  </label>
                  <input
                    type="text"
                    name="churchAffiliation"
                    value={formData.churchAffiliation}
                    onChange={handleInputChange}
                    className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your church name (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 xs:px-4 py-2 xs:py-3 text-sm xs:text-base border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 xs:py-4 px-4 xs:px-6 rounded-lg xs:rounded-xl font-semibold text-sm xs:text-base hover:from-blue-700 hover:to-purple-800 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 xs:w-5 xs:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 xs:w-5 xs:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 xs:mt-6 bg-green-50 border border-green-200 rounded-lg xs:rounded-xl p-3 xs:p-4 flex items-center space-x-2 xs:space-x-3"
                  >
                    <CheckCircle className="w-4 h-4 xs:w-5 xs:h-5 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 text-sm xs:text-base">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl xs:rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="p-4 xs:p-6 sm:p-8 border-b border-gray-100">
                <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-2 xs:mb-3">
                  Find Us
                </h2>
                <p className="text-gray-600 text-sm xs:text-base">
                  Visit our headquarters and community centers in Harare
                </p>
              </div>
              
              {/* Map Container */}
              <div 
                ref={mapRef} 
                className="h-64 xs:h-72 sm:h-80 md:h-96 w-full bg-gray-100 flex items-center justify-center"
              >
                <div className="text-gray-500 text-sm xs:text-base">
                  <Navigation className="w-6 h-6 xs:w-8 xs:h-8 mx-auto mb-2" />
                  Loading map...
                </div>
              </div>

              {/* Location Details */}
              <div className="p-4 xs:p-6 sm:p-8 bg-gray-50">
                <div className="grid gap-3 xs:gap-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 xs:w-5 xs:h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm xs:text-base">Headquarters</h4>
                      <p className="text-gray-600 text-xs xs:text-sm">123 Unity Street, Harare, Zimbabwe</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm xs:text-base">Office Hours</h4>
                      <p className="text-gray-600 text-xs xs:text-sm">Mon-Fri: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ministry Contacts Section */}
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
              Ministry Contacts
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Connect directly with our specialized ministries
            </p>
          </motion.div>

          <div className="grid gap-4 xs:gap-6 sm:gap-8 md:grid-cols-2">
            {ministryContacts.map((ministry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 xs:p-3 rounded-lg xs:rounded-xl flex-shrink-0">
                    <ministry.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm xs:text-base sm:text-lg mb-1 xs:mb-2">
                      {ministry.title}
                    </h3>
                    <p className="text-blue-600 font-medium text-xs xs:text-sm sm:text-base mb-2 xs:mb-3">
                      {ministry.contact}
                    </p>
                    <p className="text-gray-600 text-xs xs:text-sm leading-relaxed">
                      {ministry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media and Additional Info */}
      <section className="py-8 xs:py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
              Connect With Us
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-6 xs:mb-8 max-w-2xl mx-auto px-2">
              Follow us on social media for updates, inspiration, and community news
            </p>
            
            <div className="flex justify-center space-x-3 xs:space-x-4 sm:space-x-6 mb-6 xs:mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gray-100 hover:bg-gray-200 p-2 xs:p-3 sm:p-4 rounded-xl xs:rounded-2xl transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                </motion.a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 max-w-4xl mx-auto">
              <Church className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-blue-600 mx-auto mb-3 xs:mb-4" />
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3">
                Ready to Join Our Community?
              </h3>
              <p className="text-gray-600 text-sm xs:text-base mb-4 xs:mb-6">
                Whether you're an individual seeking spiritual growth or a church looking to join our network, 
                we welcome you with open arms.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-2 xs:py-3 px-4 xs:px-6 sm:px-8 rounded-lg xs:rounded-xl font-semibold text-sm xs:text-base hover:from-blue-700 hover:to-purple-800 transition-all duration-300"
              >
                Learn More About Membership
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;