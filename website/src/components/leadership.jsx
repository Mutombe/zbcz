import React, { useState } from 'react';
import { 
  Crown, 
  Users, 
  Globe, 
  Church, 
  Clock, 
  CheckCircle, 
  Mail, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  MapPin,
  Phone,
  Star,
  Award,
  Building,
  UserCheck
} from 'lucide-react';

const LeadershipComponent = () => {
  const [activeSection, setActiveSection] = useState('executive');
  const [activeLeader, setActiveLeader] = useState(0);
  const [expandedRegion, setExpandedRegion] = useState(null);

  // Complete ZBCZ Leadership Data
  const zbczLeadership = {
    // EXECUTIVE LEADERSHIP
    executiveCouncil: [
      {
        name: "Archbishop Dr Henry Ziwerere",
        title: "President & Founder",
        level: "Executive",
        region: "Zimbabwe Headquarters",
        image: "/mb4.jpeg",
        bio: "Dr Henry Ziwerere is the founder and Inaugural President of the Zion Bishop's Conference of Zimbabwe [ZBCZ]",
        achievements: [
          "Founded ZBCZ in 1998",
          "Established 168+ member churches",
          "Led humanitarian efforts across 4 countries",
          "Author of 'Unity in Faith' ministry guide"
        ],
        specialization: "Church Planting & Unity",
        contact: "henry.ziwerere@zbcz.org",
        responsibilities: [
          "Overall strategic direction",
          "International relations",
          "Doctrinal oversight",
          "Executive decision making"
        ]
      }
    ],

    // SENIOR LEADERSHIP COUNCIL
    seniorLeadership: [
      {
        name: "Archbishop (Prof) David Mureri ZBCI Patron",
        title: "Vice President",
        level: "Senior Leadership",
        region: "Inter-Church Communications",
        image: "/sg.jpeg",
        bio: "Archbishop (Prof) David Mureri ZBCI is responsible for inter-church & coordinates communication between all ZBCZ member churches, ensuring unity of purpose and effective collaboration across national borders.",
        achievements: [
          "Unified church communication systems",
          "Coordinated 50+ inter-church conferences",
          "Developed leadership training programs",
          "Established regional partnership networks"
        ],
        specialization: "Administration & Communications",
        contact: "david.chikwanha@zbcz.org",
        responsibilities: [
          "Inter-church coordination",
          "Administrative oversight",
          "Communication systems",
          "Conference organization"
        ]
      },
      {
        name: "Rev Adonija Muzondiona",
        title: "Secretary General",
        level: "Senior Leadership",
        region: "Zimbabwe",
        image: "/leader2.jpeg",
        bio: "Rev Adonija Muzondiona is responsible for gender mainstreaming, welfare & micro projects secretary [Board of Governors]",
        achievements: [
          "Director of Compassionate Services",
          "Established 25 orphanages",
          "Led women's empowerment programs",
          "Coordinated disaster relief efforts"
        ],
        specialization: "Social Welfare & Women's Ministry",
        contact: "chitewere@zbcz.org",
        responsibilities: [
          "Project management",
          "Social welfare programs",
          "Gender mainstreaming",
          "Board governance"
        ]
      }
    ],

    // REGIONAL COORDINATORS
    regionalCoordinators: [
      {
        name: "Bishop John Mavhura",
        title: "Regional Coordinator - Zimbabwe",
        level: "Regional",
        region: "Zimbabwe",
        churches: 85,
        members: "45,000+",
        established: "1998",
        image: "/user.png",
        bio: "Bishop Mavhura coordinates ZBCZ's largest regional operation in Zimbabwe, overseeing 85 churches and 45,000+ members since the organization's founding.",
        achievements: [
          "Coordinated establishment of 85 churches",
          "Led growth to 45,000+ active members",
          "Pioneered the original ZBCZ structure",
          "Coordinated national conferences and events"
        ],
        specialization: "National Church Development & Coordination",
        contact: "john.mavhura@zbcz.org"
      },
      {
        name: "Bishop Sarah Mwanza",
        title: "Regional Coordinator - South Africa",
        level: "Regional",
        region: "South Africa",
        churches: 42,
        members: "28,000+",
        established: "2003",
        image: "/user.png",
        bio: "Bishop Mwanza leads ZBCZ's South African operations, having established 42 churches and built a strong community of 28,000+ members since 2003.",
        achievements: [
          "Established 42 churches across South Africa",
          "Built membership to 28,000+ people",
          "Led cross-cultural ministry initiatives",
          "Coordinated urban and township ministries"
        ],
        specialization: "Cross-Cultural Ministry & Urban Development",
        contact: "sarah.mwanza@zbcz.org"
      },
      {
        name: "Bishop Ruth Nyathi",
        title: "Regional Coordinator - Mozambique",
        level: "Regional",
        region: "Mozambique",
        churches: 23,
        members: "15,000+",
        established: "2008",
        image: "/user.png",
        bio: "Bishop Nyathi pioneered ZBCZ's expansion into Mozambique in 2008, establishing 23 churches and fostering a thriving community of 15,000+ members.",
        achievements: [
          "Pioneered ZBCZ expansion into Mozambique",
          "Established 23 churches from ground up",
          "Led Portuguese-language ministry development",
          "Coordinated disaster relief efforts"
        ],
        specialization: "Cross-Border Ministry & Disaster Relief",
        contact: "ruth.nyathi@zbcz.org"
      },
      {
        name: "Pastor Michael Banda",
        title: "Regional Coordinator - Malawi",
        level: "Regional",
        region: "Malawi",
        churches: 18,
        members: "12,000+",
        established: "2010",
        image: "/user.png",
        bio: "Pastor Banda leads ZBCZ's newest regional operation in Malawi, having established 18 churches and nurtured 12,000+ members since 2010.",
        achievements: [
          "Established ZBCZ's newest regional operation",
          "Built 18 churches across Malawi",
          "Developed rural and urban ministry balance",
          "Led youth and education initiatives"
        ],
        specialization: "Rural Ministry & Youth Development",
        contact: "michael.banda@zbcz.org"
      }
    ]
  };

  const organizationalStats = {
    totalChurches: 168,
    totalMembers: "100,000+",
    countries: 4,
    yearsInOperation: "25+ Years"
  };

  const sections = [
    { id: 'executive', label: 'Executive Council', icon: Crown },
    { id: 'senior', label: 'Senior Leadership', icon: Users },
    { id: 'regional', label: 'Regional Coordinators', icon: Globe },
    { id: 'structure', label: 'Organizational Chart', icon: Building }
  ];

  const getCurrentSectionData = () => {
    switch(activeSection) {
      case 'executive': return zbczLeadership.executiveCouncil;
      case 'senior': return zbczLeadership.seniorLeadership;
      case 'regional': return zbczLeadership.regionalCoordinators;
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden pt-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            ZBCZ <span className="text-yellow-400">Leadership</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Dedicated servants leading the Zion Bishop's Conference of Zimbabwe across Africa
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: organizationalStats.totalChurches, label: "Churches", icon: Church },
              { number: organizationalStats.totalMembers, label: "Members", icon: Users },
              { number: organizationalStats.countries, label: "Countries", icon: Globe },
              { number: organizationalStats.yearsInOperation, label: "Experience", icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="text-2xl font-bold">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <section.icon className="w-5 h-5" />
                <span>{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {activeSection === 'structure' ? (
            // Organizational Chart
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-12">Organizational Structure</h2>
              
              <div className="space-y-8">
                {/* Executive Level */}
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl">
                    <Crown className="w-6 h-6 inline mr-2" />
                    <span className="font-bold">Executive Council</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">President & Founder</p>
                </div>

                {/* Arrow Down */}
                <div className="text-center">
                  <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
                </div>

                {/* Senior Leadership */}
                <div className="text-center">
                  <div className="flex justify-center space-x-4">
                    <div className="bg-blue-500 text-white px-6 py-3 rounded-lg">
                      <Users className="w-5 h-5 inline mr-2" />
                      <span className="text-sm font-semibold">Secretary General</span>
                    </div>
                    <div className="bg-blue-500 text-white px-6 py-3 rounded-lg">
                      <Award className="w-5 h-5 inline mr-2" />
                      <span className="text-sm font-semibold">Projects Secretary</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Senior Leadership Council</p>
                </div>

                {/* Arrow Down */}
                <div className="text-center">
                  <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
                </div>

                {/* Regional Coordinators */}
                <div>
                  <div className="grid md:grid-cols-4 gap-4">
                    {zbczLeadership.regionalCoordinators.map((coordinator, index) => (
                      <div key={index} className="bg-green-500 text-white text-center px-4 py-3 rounded-lg">
                        <Globe className="w-5 h-5 mx-auto mb-1" />
                        <div className="font-semibold text-sm">{coordinator.region}</div>
                        <div className="text-xs opacity-90">{coordinator.churches} Churches</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">Regional Coordinators</p>
                </div>

                {/* Arrow Down */}
                <div className="text-center">
                  <ChevronDown className="w-8 h-8 text-gray-400 mx-auto" />
                </div>

                {/* Local Churches */}
                <div className="text-center">
                  <div className="inline-block bg-orange-500 text-white px-8 py-4 rounded-xl">
                    <Church className="w-6 h-6 inline mr-2" />
                    <span className="font-bold">Local Churches</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Pastors, Elders & Deacons</p>
                </div>
              </div>
            </div>
          ) : (
            // Leadership Profiles
            <div>
              <h2 className="text-3xl font-bold text-center mb-12">
                {sections.find(s => s.id === activeSection)?.label}
              </h2>

              {activeSection === 'regional' ? (
                // Regional Coordinators with detailed stats
                <div className="grid md:grid-cols-2 gap-8">
                  {getCurrentSectionData().map((leader, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 mr-4"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                          <p className="text-blue-600 font-medium">{leader.title}</p>
                          <div className="flex items-center mt-2">
                            <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                            <span className="text-sm text-gray-600">{leader.region}</span>
                          </div>
                        </div>
                      </div>

                      {/* Regional Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{leader.churches}</div>
                          <div className="text-xs text-gray-600">Churches</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{leader.members}</div>
                          <div className="text-xs text-gray-600">Members</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{leader.established}</div>
                          <div className="text-xs text-gray-600">Established</div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {leader.achievements.slice(0, 3).map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-xs">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 pt-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {leader.specialization}
                          </span>
                          <a
                            href={`mailto:${leader.contact}`}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 flex items-center"
                          >
                            <Mail className="w-3 h-3 mr-1" />
                            Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Executive and Senior Leadership
                <div className="grid md:grid-cols-2 gap-8">
                  {getCurrentSectionData().map((leader, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
                      <div className="text-center mb-6">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-500 mb-4"
                        />
                        <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                        <p className="text-blue-600 font-medium text-lg">{leader.title}</p>
                        <div className="flex items-center justify-center mt-2">
                          <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600">{leader.region}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-6 text-center">{leader.bio}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {leader.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {leader.responsibilities && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <UserCheck className="w-4 h-4 text-blue-500 mr-2" />
                              Key Responsibilities
                            </h4>
                            <ul className="space-y-1">
                              {leader.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="text-gray-600 text-sm flex items-start">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {leader.specialization}
                          </span>
                          <a
                            href={`mailto:${leader.contact}`}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 flex items-center"
                          >
                            <Mail className="w-3 h-3 mr-1" />
                            Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Connect With Our Leadership</h2>
          <p className="text-xl mb-8 opacity-90">
            Reach out to our regional coordinators or headquarters for ministry partnerships, 
            church planting opportunities, or spiritual guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Leadership
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center">
              <Church className="w-5 h-5 mr-2" />
              Find a Church
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipComponent;