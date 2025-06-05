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
  Youtube,
  Crown,
  Target,
  HandHeart,
  UserCheck,
  MessageSquare,
  FileText
} from 'lucide-react';

// Leadership Page Component
const LeadershipPage = () => {
  const [activeLeader, setActiveLeader] = useState(0);
  const [currentPage, setCurrentPage] = useState('leadership');

  // Leadership data with comprehensive profiles
  const leadershipTeam = [
    {
      name: "Archbishop Dr Henry Ziwerere",
      title: "President & Founder",
      region: "Zimbabwe Headquarters",
      image: "/mb4.jpeg",
      bio: "Dr Henry Ziwerere is the founder and Inaugral President of the Zion Bishop's Conference of Zimbabwe [ZBCZ]",
      achievements: [
        "Founded ZBCZ in 1998",
        "Established 150+ member churches",
        "Led humanitarian efforts across 4 countries",
        "Author of 'Unity in Faith' ministry guide"
      ],
      specialization: "Church Planting & Unity",
      contact: "henry.ziwerere@zbcz.org"
    },
    {
      name: "Bishop Chitewere",
      title: "Vice President",
      region: "Zimbabwe",
      image: "/leader2.jpeg",
      bio: " Bishop Chitewere is the Vice President of ZBCZ responsible for gender mainstreaming, welfare & micro projects secretary [Board of Governors]",
      achievements: [
        "Director of Compassionate Services",
        "Established 25 orphanages",
        "Led women's empowerment programs",
        "Coordinated disaster relief efforts"
      ],
      specialization: "Social Welfare & Women's Ministry",
      contact: "henry.ziwerere@zbcz.org"
    },
    {
      name: "Pastor David Chikwanha",
      title: "Secretary General",
      region: "Inter-Church Communications",
      image: "/sg.jpeg",
      bio: "Pastor Chikwanha coordinates communication between all ZBCZ member churches, ensuring unity of purpose and effective collaboration across national borders. His organizational skills have strengthened our network.",
      achievements: [
        "Unified church communication systems",
        "Coordinated 50+ inter-church conferences",
        "Developed leadership training programs",
        "Established regional partnership networks"
      ],
      specialization: "Administration & Communications",
      contact: "david.chikwanha@zbcz.org"
    },
  ];

  const regionalStructure = [
    {
      region: "Zimbabwe",
      churches: 85,
      members: "45,000+",
      coordinator: "Bishop John Mavhura",
      established: "1998"
    },
    {
      region: "South Africa",
      churches: 42,
      members: "28,000+",
      coordinator: "Bishop Sarah Mwanza",
      established: "2003"
    },
    {
      region: "Mozambique",
      churches: 23,
      members: "15,000+",
      coordinator: "Bishop Ruth Nyathi",
      established: "2008"
    },
    {
      region: "Malawi",
      churches: 18,
      members: "12,000+",
      coordinator: "Pastor Michael Banda",
      established: "2010"
    }
  ];

  return (
    <div className="pt-12 xs:pt-16 sm:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-8 xs:py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-hidden">
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
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6 lg:mb-8">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
                Leadership
              </span>
            </h1>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
              Dedicated servants of God leading ZBCZ churches across Zimbabwe, South Africa, 
              Mozambique, and Malawi with wisdom, compassion, and unwavering faith.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 mb-8 xs:mb-12 sm:mb-16"
          >
            {[
              { number: "168+", label: "Churches", icon: Church },
              { number: "100K+", label: "Members", icon: Users },
              { number: "4", label: "Countries", icon: Globe },
              { number: "25+", label: "Years", icon: Clock }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-blue-600 mx-auto mb-2 xs:mb-3" />
                <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-xs xs:text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Executive Leadership Team
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide ZBCZ's mission across Africa
            </p>
          </motion.div>

          {/* Featured Leader */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 lg:p-12 mb-8 xs:mb-12 sm:mb-16 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <img
                  src={leadershipTeam[activeLeader].image}
                  alt={leadershipTeam[activeLeader].name}
                  className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-cover rounded-full mx-auto lg:mx-0 border-4 border-white shadow-2xl mb-4 xs:mb-6"
                />
                <div className="flex justify-center lg:justify-start space-x-2 xs:space-x-3">
                  {leadershipTeam.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveLeader(index)}
                      className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
                        index === activeLeader ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLeader}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-2 xs:mb-3 sm:mb-4">
                      <Crown className="w-5 h-5 xs:w-6 xs:h-6 text-blue-600 mr-2" />
                      <span className="text-xs xs:text-sm text-blue-600 font-medium">
                        {leadershipTeam[activeLeader].region}
                      </span>
                    </div>
                    <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 xs:mb-2">
                      {leadershipTeam[activeLeader].name}
                    </h3>
                    <p className="text-sm xs:text-base sm:text-lg text-blue-600 font-medium mb-3 xs:mb-4 sm:mb-6">
                      {leadershipTeam[activeLeader].title}
                    </p>
                    <p className="text-gray-600 text-xs xs:text-sm sm:text-base leading-relaxed mb-4 xs:mb-6">
                      {leadershipTeam[activeLeader].bio}
                    </p>
                    
                    <div className="space-y-3 xs:space-y-4 mb-4 xs:mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm xs:text-base mb-2">Key Achievements:</h4>
                        <ul className="space-y-1 xs:space-y-2">
                          {leadershipTeam[activeLeader].achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="w-3 h-3 xs:w-4 xs:h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-xs xs:text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 xs:gap-3">
                        <span className="bg-blue-100 text-blue-800 px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-medium">
                          {leadershipTeam[activeLeader].specialization}
                        </span>
                        <a
                          href={`mailto:${leadershipTeam[activeLeader].contact}`}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-medium transition-colors duration-200 flex items-center"
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          Contact
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Leadership Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setActiveLeader(index)}
                className={`bg-white rounded-2xl xs:rounded-3xl p-4 xs:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                  activeLeader === index ? 'border-blue-500' : 'border-transparent hover:border-gray-200'
                }`}
              >
                <div className="text-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className={`w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 object-cover rounded-full mx-auto mb-3 xs:mb-4 border-3 shadow-lg ${
                      activeLeader === index ? 'border-blue-500' : 'border-white'
                    }`}
                  />
                  <h3 className="font-bold text-gray-900 text-sm xs:text-base sm:text-lg mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-xs xs:text-sm mb-2">
                    {leader.title}
                  </p>
                  <p className="text-gray-500 text-xs mb-3">
                    {leader.region}
                  </p>
                  <div className="flex justify-center">
                    <span className="bg-gray-100 text-gray-700 px-2 xs:px-3 py-1 rounded-full text-xs font-medium">
                      {leader.specialization}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Overview */}
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
              Regional Structure
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our organized approach to ministry across four nations
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
            {regionalStructure.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl xs:rounded-3xl p-4 xs:p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 xs:w-16 xs:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
                    <Globe className="w-6 h-6 xs:w-8 xs:h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base xs:text-lg sm:text-xl mb-2 xs:mb-3">
                    {region.region}
                  </h3>
                  <div className="space-y-1 xs:space-y-2 text-xs xs:text-sm text-gray-600">
                    <p><span className="font-medium">Churches:</span> {region.churches}</p>
                    <p><span className="font-medium">Members:</span> {region.members}</p>
                    <p><span className="font-medium">Established:</span> {region.established}</p>
                  </div>
                  <div className="mt-3 xs:mt-4 pt-3 xs:pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Regional Coordinator</p>
                    <p className="font-medium text-blue-600 text-xs xs:text-sm">
                      {region.coordinator}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Contact */}
      <section className="py-8 xs:py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-3 xs:mb-4 sm:mb-6">
              Ready to Connect?
            </h2>
            <p className="text-blue-100 text-sm xs:text-base sm:text-lg mb-6 xs:mb-8">
              Contact our leadership team or visit our churches across Africa
            </p>
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 xs:px-8 py-3 xs:py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center mx-auto text-sm xs:text-base"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default LeadershipPage;