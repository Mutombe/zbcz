import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Crown, Users, Globe, Church, Clock, CheckCircle, Envelope, ArrowRight, CaretDown, MapPin, Star, Medal, Buildings, UserCircleCheck } from '@phosphor-icons/react';
import { fadeUp, staggerContainer } from '../lib/motion';

const LeadershipComponent = () => {
  const [activeSection, setActiveSection] = useState('executive');
  const navigate = useNavigate();

  const zbczLeadership = {
    executiveCouncil: [{ name: "Archbishop Dr Henry Ziwerere", title: "President & Founder", region: "Zimbabwe Headquarters", image: "/mb4.jpeg", bio: "Dr Henry Ziwerere is the founder and Inaugural President of the Zion Bishop's Conference of Zimbabwe [ZBCZ]", achievements: ["Founded ZBCZ in 1998", "Established 168+ member churches", "Led humanitarian efforts across 4 countries", "Author of 'Unity in Faith' ministry guide"], specialization: "Church Planting & Unity", contact: "henry.ziwerere@zbcz.org", responsibilities: ["Overall strategic direction", "International relations", "Doctrinal oversight", "Executive decision making"] }],
    seniorLeadership: [
      { name: "Archbishop (Prof) David Mureri ZBCI Patron", title: "Vice President", region: "Inter-Church Communications", image: "/sg.jpeg", bio: "Responsible for inter-church coordination and communication between all ZBCZ member churches.", achievements: ["Unified communication systems", "Coordinated 50+ conferences", "Developed training programs", "Established partnership networks"], specialization: "Administration & Communications", contact: "david.chikwanha@zbcz.org", responsibilities: ["Inter-church coordination", "Administrative oversight", "Communication systems", "Conference organization"] },
      { name: "Rev Adonija Muzondiona", title: "Secretary General", region: "Zimbabwe", image: "/leader2.jpeg", bio: "Responsible for gender mainstreaming, welfare & micro projects.", achievements: ["Director of Compassionate Services", "Established 25 orphanages", "Led women's empowerment", "Coordinated disaster relief"], specialization: "Social Welfare & Women's Ministry", contact: "chitewere@zbcz.org", responsibilities: ["Project management", "Social welfare", "Gender mainstreaming", "Board governance"] }
    ],
    regionalCoordinators: [
      { name: "Bishop John Mavhura", title: "Zimbabwe", region: "Zimbabwe", churches: 85, members: "45,000+", established: "1998", image: "/user.png", bio: "Coordinates ZBCZ's largest regional operation.", achievements: ["Coordinated 85 churches", "45,000+ members", "Pioneered ZBCZ structure"], specialization: "National Development", contact: "john.mavhura@zbcz.org" },
      { name: "Bishop Sarah Mwanza", title: "South Africa", region: "South Africa", churches: 42, members: "28,000+", established: "2003", image: "/user.png", bio: "Leads South African operations.", achievements: ["42 churches established", "28,000+ members", "Cross-cultural ministry"], specialization: "Cross-Cultural Ministry", contact: "sarah.mwanza@zbcz.org" },
      { name: "Bishop Ruth Nyathi", title: "Mozambique", region: "Mozambique", churches: 23, members: "15,000+", established: "2008", image: "/user.png", bio: "Pioneered Mozambique expansion.", achievements: ["23 churches established", "Portuguese ministry", "Disaster relief"], specialization: "Cross-Border Ministry", contact: "ruth.nyathi@zbcz.org" },
      { name: "Pastor Michael Banda", title: "Malawi", region: "Malawi", churches: 18, members: "12,000+", established: "2010", image: "/user.png", bio: "Leads newest regional operation.", achievements: ["18 churches established", "Rural ministry", "Youth initiatives"], specialization: "Rural Ministry & Youth", contact: "michael.banda@zbcz.org" }
    ]
  };

  const sections = [
    { id: 'executive', label: 'Executive', icon: Crown },
    { id: 'senior', label: 'Senior', icon: Users },
    { id: 'regional', label: 'Regional', icon: Globe },
    { id: 'structure', label: 'Org Chart', icon: Buildings }
  ];

  const getData = () => activeSection === 'executive' ? zbczLeadership.executiveCouncil : activeSection === 'senior' ? zbczLeadership.seniorLeadership : activeSection === 'regional' ? zbczLeadership.regionalCoordinators : [];

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden pt-32 sm:pt-36">
        <div className="absolute inset-0"><img src="/dsk7.jpeg" alt="" className="w-full h-full object-cover" loading="eager" /><div className="absolute inset-0 bg-maroon-900/85 backdrop-blur-sm" /></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-5">ZBCZ <span className="text-gold-400">Leadership</span></h1>
          <p className="text-cream-200/70 text-lg max-w-2xl mx-auto mb-10">Dedicated servants leading across Africa</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[{ n: "168", l: "Churches", icon: Church }, { n: "100K+", l: "Members", icon: Users }, { n: "4", l: "Countries", icon: Globe }, { n: "25+", l: "Years", icon: Clock }].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-4 hover:bg-white/15 transition-all"><s.icon size={24} weight="duotone" className="mx-auto mb-1.5 text-gold-400" /><div className="text-xl font-bold text-white">{s.n}</div><div className="text-xs text-cream-300/60">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b border-cream-200 sticky top-16 sm:top-18 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1.5 overflow-x-auto py-3">
            {sections.map(s => (
              <button key={s.id} onClick={() => setActiveSection(s.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all ${activeSection === s.id ? 'bg-maroon-500 text-white shadow-lg' : 'text-gray-500 hover:bg-cream-100'}`}>
                <s.icon size={16} weight={activeSection === s.id ? 'fill' : 'regular'} /><span>{s.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeSection === 'structure' ? (
            <div className="bg-white rounded-3xl shadow-card p-8 sm:p-12 border border-cream-200 max-w-2xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-maroon-700 text-center mb-10">Organizational Structure</h2>
              <div className="space-y-5 text-center">
                <div className="inline-block bg-maroon-500 text-white px-6 py-3 rounded-xl shadow-lg font-bold text-sm"><Crown size={18} className="inline mr-2" />Executive Council</div>
                <div><CaretDown size={20} className="mx-auto text-cream-400" /></div>
                <div className="flex justify-center gap-3 flex-wrap">
                  {['Secretary General', 'Projects Secretary'].map((t, i) => <div key={i} className="bg-gold-400 text-maroon-900 px-5 py-2.5 rounded-xl shadow-md text-sm font-bold">{t}</div>)}
                </div>
                <div><CaretDown size={20} className="mx-auto text-cream-400" /></div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                  {zbczLeadership.regionalCoordinators.map((c, i) => <div key={i} className="bg-forest-500 text-white text-center px-3 py-2.5 rounded-xl text-xs font-bold shadow-md"><Globe size={14} className="mx-auto mb-1" />{c.region}<div className="opacity-70">{c.churches} churches</div></div>)}
                </div>
                <div><CaretDown size={20} className="mx-auto text-cream-400" /></div>
                <div className="inline-block bg-cream-200 text-maroon-700 px-6 py-3 rounded-xl text-sm font-bold"><Church size={18} className="inline mr-2" />Local Churches</div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {getData().map((l, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-3xl shadow-card hover:shadow-premium p-6 sm:p-8 transition-all duration-500 border border-cream-200 overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    {activeSection === 'regional' ? (
                      <div className="flex items-center mb-5">
                        <img src={l.image} alt={l.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-cream-200 mr-4 shadow-md" loading="lazy" />
                        <div><h3 className="font-heading text-lg font-bold text-maroon-700">{l.name}</h3><p className="text-gold-500 font-medium text-sm">{l.title}</p></div>
                      </div>
                    ) : (
                      <div className="text-center mb-6">
                        <img src={l.image} alt={l.name} className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-cream-100 shadow-xl mb-4" loading="lazy" />
                        <h3 className="font-heading text-xl font-bold text-maroon-700">{l.name}</h3>
                        <p className="text-gold-500 font-medium">{l.title}</p>
                      </div>
                    )}

                    {activeSection === 'regional' && (
                      <div className="grid grid-cols-3 gap-2 mb-5 p-3 bg-cream-50 rounded-2xl">
                        <div className="text-center"><div className="text-xl font-bold text-maroon-600">{l.churches}</div><div className="text-[10px] text-gray-500">Churches</div></div>
                        <div className="text-center"><div className="text-xl font-bold text-forest-500">{l.members}</div><div className="text-[10px] text-gray-500">Members</div></div>
                        <div className="text-center"><div className="text-xl font-bold text-gold-500">{l.established}</div><div className="text-[10px] text-gray-500">Est.</div></div>
                      </div>
                    )}

                    <p className="text-gray-500 text-sm mb-5">{l.bio}</p>
                    <div className="mb-4"><h4 className="font-semibold text-maroon-700 mb-2 text-sm flex items-center gap-1.5"><Star size={14} weight="fill" className="text-gold-500" />Achievements</h4>
                      <ul className="space-y-1.5">{l.achievements.map((a, j) => <li key={j} className="flex items-start text-xs text-gray-500"><CheckCircle size={14} weight="fill" className="text-forest-400 mr-2 mt-0.5 flex-shrink-0" />{a}</li>)}</ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-cream-200">
                      <span className="bg-cream-100 text-maroon-600 px-3 py-1 rounded-full text-xs font-medium">{l.specialization}</span>
                      <a href={`mailto:${l.contact}`} className="bg-cream-100 hover:bg-maroon-50 text-maroon-500 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 transition-colors"><Envelope size={12} />Contact</a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          <div className="relative h-52 lg:h-auto"><img src="/cong.jpeg" alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-maroon-900/20" /></div>
          <div className="bg-maroon-600 flex items-center p-8 sm:p-12 lg:p-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,168,67,0.12),transparent_60%)]" />
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
              <h2 className="font-heading text-3xl font-bold text-white mb-4">Connect With Our Leadership</h2>
              <p className="text-cream-200/70 text-base mb-8 max-w-md">Reach out for partnerships, church planting, or guidance.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button whileHover={{ y: -2 }} onClick={() => navigate('/contact')} className="bg-gold-400 hover:bg-gold-300 text-maroon-900 px-6 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2"><Envelope size={16} weight="fill" />Contact Leadership</motion.button>
                <motion.button whileHover={{ y: -2 }} className="glass text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/20 flex items-center justify-center gap-2"><Church size={16} weight="fill" />Find a Church</motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipComponent;
