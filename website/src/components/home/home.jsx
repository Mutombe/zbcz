import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Heart, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Church,
  HandHeart,
  Globe,
  BookOpen,
  Star,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle,
  Quote
} from 'lucide-react';

const ZBCZ_Website = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const menuItems = Object.entries(pages);

  
  const HomePage = () => (
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
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('about')}
                className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
              >
                Learn About Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('events')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Upcoming Events
              </motion.button>
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('events')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300 inline-flex items-center gap-2"
              >
                Learn More <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-20 min-h-screen">
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About ZBCZ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our rich heritage, mission, and the spiritual journey that unites 
              indigenous Zion Churches across Africa.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Heritage</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Zion Bishops Conference of Zimbabwe (ZBCZ) stands as a beacon of indigenous 
                Christian faith, uniting Zion Churches across multiple nations. We are more than 
                just a religious organization; we are a family bound by shared beliefs, traditions, 
                and a commitment to serving our communities.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our umbrella organization encompasses churches from Zimbabwe, South Africa, 
                Mozambique, and Malawi, with more joining our growing spiritual family. 
                We honor our African heritage while embracing the universal message of Christ.
              </p>
              <div className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Indigenous African Christian tradition</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Multi-national church network</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-700">Community-centered ministry</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-3xl shadow-2xl"
            >
              <Quote className="w-12 h-12 text-blue-600 mb-4" />
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "We do not operate in a vacuum, but interact with the world at large, 
                bringing the light of Christ to every corner of our communities."
              </blockquote>
              <footer className="text-gray-600">
                <strong>Rev. Adonija Muzondiona</strong><br />
                Secretary General, ZBCZ
              </footer>
            </motion.div>
          </div>

          {/* Vision & Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <Star className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading indigenous church organization in Africa, fostering 
                spiritual growth, unity, and compassionate service across all communities 
                we serve.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Unity in diversity</li>
                <li>• Compassionate service</li>
                <li>• Indigenous heritage</li>
                <li>• Community empowerment</li>
                <li>• Spiritual excellence</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );

  const MinistriesPage = () => (
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
            >
              Get Involved
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );

    const EventsPage = () => (
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
                Upcoming Events
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us for our upcoming events and be part of our vibrant community. 
                Experience powerful worship, fellowship, and service.
                </p>
            </motion.div>
    
            {/* Event Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                {
                    date: "May 31 - June 1, 2025",
                    title: "Inaugural Convention Conference",
                    location: "Lookeron High School, Southlea Park, Harare",
                    description: "Join us for our historic inaugural convention. Experience powerful worship, fellowship, and witness our compassionate services ministry in action.",
                    imageUrl: "/images/events/convention.jpg"
                },
                {
                    date: "July 15, 2025",
                    title: "Annual Charity Walk",
                    location: "Harare Central Park",
                    description: "Participate in our annual charity walk to raise funds for our Compassionate Services Ministry. Together we can make a difference!",
                    imageUrl: "/images/events/charity_walk.jpg"
                },
                {
                    date: "August 20, 2025",
                    title: "Youth Empowerment Summit",
                    location: "ZBCZ Headquarters, Harare",
                    description: "A day of inspiration and empowerment for the youth. Workshops, mentorship sessions, and networking opportunities await!",
                    imageUrl: "/images/events/youth_summit.jpg"
                }
                ].map((event, index) => (
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
                    <CalendarDays className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {event.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {event.description}
                    </p>
                    <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{event.location}</span>
                    </div>
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
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
                >
                Get Involved
                </motion.button>
            </motion.div>
            </div>
        </section>
        </div>
    );
}

    const LeadershipPage = () => (
        <div className="pt-20 min-h-screen">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Leadership
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the dedicated leaders guiding ZBCZ with vision, integrity, and a commitment to service.
                </p>
            </motion.div>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                {
                    name: "Rev. Adonija Muzondiona",
                    title: "Secretary General",
                    imageUrl: "/images/leadership/adonija.jpg",
                    bio: "A visionary leader with over 20 years of experience in church administration and community service."
                },
                {
                    name: "Bishop Tendai Chikomo",
                    title: "Chairman of the Council of Bishops",
                    imageUrl: "/images/leadership/tendai.jpg",
                    bio: "A respected bishop known for his pastoral care and commitment to unity among Zion Churches."
                },
                {
                    name: "Elder Nyasha Moyo",
                    title: "Director of Compassionate Services",
                    imageUrl: "/images/leadership/nyasha.jpg",
                    bio: "Passionate about social justice and dedicated to empowering vulnerable communities through compassionate service."
                }
                ].map((leader, index) => (
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
                    <User className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {leader.name}
                    </h3>
                    <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {leader.bio}
                    </p>
                    <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{leader.title}</span>
                    </div>
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
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
                >
                Get Involved
                </motion.button>
            </motion.div>
            </div>
        </section>
        </div>
    );  
    const GalleryPage = () => (
        <div className="bg-gray-50">
        <section className="py-16">
            <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Gallery
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our vibrant community through photos capturing worship, service, and fellowship.
                </p>
            </motion.div>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                "/images/gallery/1.jpg",
                "/images/gallery/2.jpg",
                "/images/gallery/3.jpg",
                "/images/gallery/4.jpg",
                "/images/gallery/5.jpg",
                "/images/gallery/6.jpg",
                "/images/gallery/7.jpg",
                "/images/gallery/8.jpg",
                "/images/gallery/9.jpg",
                "/images/gallery/10.jpg",
                "/images/gallery/11.jpg",
                "/images/gallery/12.jpg",
                "/images/gallery/13.jpg",
                "/images/gallery/14.jpg",
                "/images/gallery/15.jpg",
                "/images/gallery/16.jpg",
                "/images/gallery/17.jpg",
                "/images/gallery/18.jpg",
                "/images/gallery/19.jpg",
                "/images/gallery/20.jpg",
                ].map((image, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                    <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover" />
                </motion.div>
                ))}
            </div>
            </div>
        </section>
        </div>
    );

