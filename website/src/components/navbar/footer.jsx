import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Church,
  Users,
  Heart,
  Calendar,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const ZBCZFooter = () => {
  const currentYear = new Date().getFullYear();

  const regionalOffices = [
    {
      country: "Zimbabwe",
      coordinator: "Bishop John Mavhura",
      churches: 85,
      members: "45,000+",
      phone: "+263712391456",
      email: "zimbabwe@zbcz.org"
    },
    {
      country: "South Africa",
      coordinator: "Bishop Sarah Mwanza",
      churches: 42,
      members: "28,000+",
      phone: "+263712391456",
      email: "southafrica@zbcz.org"
    },
    {
      country: "Mozambique",
      coordinator: "Bishop Ruth Nyathi",
      churches: 23,
      members: "15,000+",
      phone: "+263712391456",
      email: "mozambique@zbcz.org"
    },
    {
      country: "Malawi",
      coordinator: "Pastor Michael Banda",
      churches: 18,
      members: "12,000+",
      phone: "+263712391456",
      email: "malawi@zbcz.org"
    }
  ];

  const quickLinks = [
    { name: "About ZBCZ", href: "#about" },
    { name: "Leadership", href: "#leadership" },
    { name: "Our Churches", href: "#churches" },
    { name: "Ministries", href: "#ministries" },
    { name: "Events", href: "#events" },
    { name: "Contact Us", href: "#contact" }
  ];

  const ministryPrograms = [
    { name: "Youth Ministry", href: "#youth" },
    { name: "Women's Empowerment", href: "#women" },
    { name: "Compassionate Services", href: "#compassion" },
    { name: "Church Planting", href: "#planting" },
    { name: "Leadership Training", href: "#training" },
    { name: "Community Outreach", href: "#outreach" }
  ];

  const upcomingHolidays = [
    { date: "April 18", event: "Independence Day" },
    { date: "April 20", event: "Good Friday" },
    { date: "April 21", event: "Easter Sunday" },
    { date: "May 01", event: "Labour Day" },
    { date: "May 11", event: "Mother's Day" },
    { date: "May 25", event: "Africa Day" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ZBCZ
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Zion Bishop's Conference of Zimbabwe - Uniting believers across Africa since 1998. 
                Building God's kingdom through unity, love, and faithful service.
              </p>
            </div>

            {/* Organization Stats */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-3 text-yellow-400">Our Impact</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 flex items-center">
                    <Church className="w-4 h-4 mr-2" />
                    Churches
                  </span>
                  <span className="font-bold text-blue-400">168+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Members
                  </span>
                  <span className="font-bold text-green-400">100,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Countries
                  </span>
                  <span className="font-bold text-purple-400">4</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3 text-yellow-400">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                  { icon: Twitter, href: "#", color: "hover:text-sky-400" },
                  { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                  { icon: Youtube, href: "#", color: "hover:text-red-400" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links & Programs */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-yellow-400 flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-200"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-yellow-400 flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Ministry Programs
              </h4>
              <ul className="space-y-2">
                {ministryPrograms.map((program, index) => (
                  <li key={index}>
                    <a
                      href={program.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-yellow-400 transition-colors duration-200"></span>
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Regional Offices */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-yellow-400 flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Regional Offices
            </h4>
            <div className="space-y-4">
              {regionalOffices.map((office, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-blue-300">{office.country}</h5>
                    <span className="text-xs text-gray-400">{office.churches} churches</span>
                  </div>
                  <p className="text-xs text-gray-300 mb-2">{office.coordinator}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{office.members} members</span>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Calendar */}
          <div className="lg:col-span-1">
            {/* Headquarters Contact */}
            <div className="mb-8">
              <h4 className="font-semibold mb-4 text-yellow-400 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Headquarters
              </h4>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      ZBCZ Headquarters<br />
                      Harare, Zimbabwe
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                    <a href="tel:+263712391456" className="text-gray-300 hover:text-white transition-colors duration-200">
                      +263 71 239 1456
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                    <a href="mailto:info@zbcz.org" className="text-gray-300 hover:text-white transition-colors duration-200">
                      info@zbcz.org
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-gray-400 flex-shrink-0" />
                    <a href="https://www.zbcz.org" className="text-gray-300 hover:text-white transition-colors duration-200">
                      www.zbcz.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h4 className="font-semibold mb-4 text-yellow-400 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                2025 Calendar
              </h4>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                <div className="space-y-2">
                  {upcomingHolidays.slice(0, 4).map((holiday, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-gray-300">{holiday.event}</span>
                      <span className="text-blue-300 font-medium">{holiday.date}</span>
                    </div>
                  ))}
                  <a href="#calendar" className="block text-center text-yellow-400 hover:text-yellow-300 text-xs mt-3 flex items-center justify-center transition-colors duration-200">
                    View Full Calendar
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-gray-300">
                © {currentYear} Zion Bishop's Conference of Zimbabwe (ZBCZ). All rights reserved.
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Founded in 1998 by Archbishop Dr Henry Ziwerere
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#donate" className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scripture Reference */}
      <div className="bg-black/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <p className="text-center text-xs text-gray-400 italic">
            "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people" - 1 Peter 2:9
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ZBCZFooter;