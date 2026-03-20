import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Users, Heart, HandHeart, BookOpen, CheckCircle, ArrowRight } from '@phosphor-icons/react';
import { fadeUp, staggerContainer } from '../../lib/motion';

const MinistriesPage = () => {
  const navigate = useNavigate();
  const ministries = [
    { icon: Users, title: "Orphan Care Ministry", desc: "Providing shelter, education, healthcare, and spiritual guidance to orphaned children.", services: ["Educational support", "Healthcare provision", "Spiritual mentorship", "Skills development"], image: "/mb5.jpeg" },
    { icon: Heart, title: "Widow Support Program", desc: "Empowering widows through economic opportunities and community integration.", services: ["Economic empowerment", "Counseling services", "Community support", "Skills training"], image: "/dsk2.jpeg" },
    { icon: HandHeart, title: "Disability Support Services", desc: "Creating inclusive communities and specialized care for people with disabilities.", services: ["Accessibility programs", "Specialized care", "Community inclusion", "Advocacy work"], image: "/church.jpeg" },
    { icon: BookOpen, title: "Girl-Child Support Initiative", desc: "Supporting girl-child headed families with education and mentorship.", services: ["Educational scholarships", "Leadership training", "Life skills programs", "Resource provision"], image: "/dsk3.jpeg" }
  ];

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0"><img src="/mb5.jpeg" alt="" className="w-full h-full object-cover" loading="eager" /><div className="absolute inset-0 bg-maroon-900/80 backdrop-blur-sm" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Compassionate Services</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">Our <span className="text-gold-400">Ministries</span></motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-cream-200/70 text-base sm:text-lg leading-relaxed">
              Reaching out to the most vulnerable with love and practical support.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {ministries.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden bg-white shadow-card hover:shadow-premium transition-all duration-500 border border-cream-200">
                <div className="relative h-52 overflow-hidden">
                  <img src={m.image} alt={m.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="glass rounded-xl p-2.5"><m.icon size={28} weight="duotone" className="text-white" /></div>
                    <h3 className="font-heading text-xl font-bold text-white">{m.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">{m.desc}</p>
                  <div className="space-y-2.5">
                    {m.services.map((s, j) => (
                      <div key={j} className="flex items-center gap-2.5"><CheckCircle size={16} weight="fill" className="text-forest-400 flex-shrink-0" /><span className="text-gray-600 text-sm">{s}</span></div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[400px]">
          <div className="relative h-52 lg:h-auto"><img src="/cong.jpeg" alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-maroon-900/20" /></div>
          <div className="bg-maroon-600 flex items-center p-8 sm:p-12 lg:p-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,168,67,0.12),transparent_60%)]" />
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Join Our Mission</h2>
              <p className="text-cream-200/70 text-base leading-relaxed mb-8 max-w-md">Partner with us to transform lives through volunteering, donations, or partnerships.</p>
              <div className="flex flex-col xs:flex-row gap-3">
                <motion.button whileHover={{ y: -2 }} onClick={() => navigate('/contact')} className="bg-gold-400 hover:bg-gold-300 text-maroon-900 px-6 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2">Get Involved <ArrowRight size={16} weight="bold" /></motion.button>
                <motion.button whileHover={{ y: -2 }} onClick={() => navigate('/about')} className="glass text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/20">Learn More</motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinistriesPage;
