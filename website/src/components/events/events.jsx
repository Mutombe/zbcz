import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CalendarBlank, MapPin, Clock, Star, ArrowRight } from '@phosphor-icons/react';
import { fadeUp, staggerContainer } from '../../lib/motion';

const EventsPage = () => {
  const navigate = useNavigate();
  const events = [
    { date: "May 31 - June 1, 2025", title: "Inaugural Convention Conference", location: "Lookeron High School, Southlea Park, Harare", desc: "Join us for our historic inaugural convention with powerful worship and fellowship.", featured: true, image: "/dsk7.jpeg", time: "9:00 AM - 6:00 PM", category: "Convention" },
    { date: "July 15, 2025", title: "Annual Charity Walk", location: "Harare Central Park", desc: "Participate in our charity walk to raise funds for Compassionate Services.", featured: false, image: "/cong.jpeg", time: "6:00 AM - 12:00 PM", category: "Charity" },
    { date: "August 20, 2025", title: "Youth Empowerment Summit", location: "ZBCZ Headquarters, Harare", desc: "A day of inspiration with workshops, mentorship, and networking.", featured: false, image: "/cong2.jpeg", time: "10:00 AM - 4:00 PM", category: "Youth" }
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0"><img src="/dsk7.jpeg" alt="" className="w-full h-full object-cover" loading="eager" /><div className="absolute inset-0 bg-maroon-900/80 backdrop-blur-sm" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-2xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Community Gatherings</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">Upcoming <span className="text-gold-400">Events</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-cream-200/70 text-base sm:text-lg leading-relaxed">Experience worship, fellowship, and transformative gatherings.</motion.p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
                className={`group rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-premium transition-all duration-500 border border-cream-200 ${e.featured ? 'ring-2 ring-gold-400' : ''}`}>
                {e.featured && <div className="bg-gold-400 text-maroon-900 text-center py-1.5 text-xs font-bold flex items-center justify-center gap-1"><Star size={12} weight="fill" />Featured Event</div>}
                <div className="relative h-48 overflow-hidden">
                  <img src={e.image} alt={e.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 glass rounded-full px-3 py-1"><span className="text-white text-xs font-bold">{e.category}</span></div>
                  <div className="absolute bottom-3 left-4"><CalendarBlank size={28} weight="duotone" className="text-white/60" /></div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-cream-100 text-maroon-600 px-4 py-1.5 rounded-full text-xs font-medium border border-cream-200 mb-3">{e.date}</span>
                  <h3 className="font-heading text-lg font-bold text-maroon-700 mb-2">{e.title}</h3>
                  <p className="text-gray-500 mb-4 text-sm leading-relaxed">{e.desc}</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2"><MapPin size={14} weight="fill" className="text-forest-400 mt-0.5 flex-shrink-0" /><span className="text-gray-600 text-sm">{e.location}</span></div>
                    <div className="flex items-center gap-2"><Clock size={14} weight="fill" className="text-gold-500" /><span className="text-gray-600 text-sm">{e.time}</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          <div className="relative h-52 lg:h-auto"><img src="/cong2.jpeg" alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-maroon-900/20" /></div>
          <div className="bg-maroon-600 flex items-center p-8 sm:p-12 lg:p-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,168,67,0.12),transparent_60%)]" />
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Don't Miss Out!</h2>
              <p className="text-cream-200/70 text-base leading-relaxed mb-8 max-w-md">Contact us for more about upcoming events and how to participate.</p>
              <div className="flex flex-col xs:flex-row gap-3">
                <motion.button whileHover={{ y: -2 }} onClick={() => navigate('/contact')} className="bg-gold-400 hover:bg-gold-300 text-maroon-900 px-6 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2">Contact Us <ArrowRight size={16} weight="bold" /></motion.button>
                <motion.button whileHover={{ y: -2 }} onClick={() => navigate('/ministries')} className="glass text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/20">Our Ministries</motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
