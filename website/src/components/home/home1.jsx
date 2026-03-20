import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Cross, CaretDown, CaretLeft, CaretRight, Church, Globe, Users, Heart,
  HandHeart, BookOpen, ArrowRight, Buildings, Trophy, UserCircle, CheckCircle,
  Leaf, Handshake, Lightning
} from '@phosphor-icons/react';
import { fadeUp, staggerContainer, cardHover } from '../../lib/motion';

const HomePage = () => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const highlights = [
    "Unity in Christ Since 1998",
    "168+ Churches Across 4 Nations",
    "100,000+ Members United in Faith",
    "Servant Leadership in Biblical Principles"
  ];

  const desktopImages = [
    { src: "/dsk1.jpeg", alt: "ZBCZ Unity" },
    { src: "/dsk2.jpeg", alt: "ZBCZ Leadership" },
    { src: "/dsk3.jpeg", alt: "ZBCZ Community" },
    { src: "/dsk4.jpeg", alt: "ZBCZ Worship" }
  ];
  const mobileImages = [
    { src: "/mb1.jpeg", alt: "ZBCZ Unity" },
    { src: "/mb2.jpeg", alt: "ZBCZ Leadership" },
    { src: "/mb3.jpeg", alt: "ZBCZ Community" },
    { src: "/mb4.jpeg", alt: "ZBCZ Worship" }
  ];
  const currentImages = isMobile ? mobileImages : desktopImages;

  useEffect(() => { const c = () => setIsMobile(window.innerWidth < 768); c(); window.addEventListener('resize', c); return () => window.removeEventListener('resize', c); }, []);
  useEffect(() => { const t = setInterval(() => setCurrentSlide(p => (p + 1) % highlights.length), 4000); return () => clearInterval(t); }, []);
  useEffect(() => { const t = setInterval(() => setCurrentImageSlide(p => (p + 1) % currentImages.length), 6000); return () => clearInterval(t); }, [currentImages.length]);

  return (
    <div id="main-content" className="min-h-screen">

      {/* ===== HERO - CINEMATIC FULLSCREEN ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG Image - NO WHITE FLASH: both images rendered, opacity controlled */}
        <div className="absolute inset-0">
          {currentImages.map((img, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${i === currentImageSlide ? 'opacity-100' : 'opacity-0'}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover scale-105" loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-900/90 via-maroon-900/60 to-maroon-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-transparent to-maroon-900/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="glass-dark rounded-3xl p-6 sm:p-10 lg:p-12">
                <motion.img src="/logo.png" alt="ZBCZ" className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-2xl mb-6 ring-2 ring-gold-400/30 object-cover"
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} />

                <h1 className="font-heading text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-2 leading-[0.95]">
                  Zion <span className="text-gold-400">Bishops</span>
                </h1>
                <p className="font-heading text-2xl sm:text-3xl text-cream-200/80 mb-6">Conference of Zimbabwe</p>

                <div className="h-8 mb-8 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p key={currentSlide} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35 }}
                      className="text-gold-300/90 text-sm sm:text-base font-medium tracking-wide">
                      {highlights[currentSlide]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                <div className="flex flex-col xs:flex-row gap-3">
                  <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/about')}
                    className="bg-gold-400 hover:bg-gold-300 text-maroon-900 px-6 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                    Discover Our Unity <ArrowRight size={16} weight="bold" />
                  </motion.button>
                  <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/contact')}
                    className="glass text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-white/20">
                    Join Our Fellowship
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Right - Floating Glass Stats */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:block relative">
              <div className="relative h-[500px]">
                {/* Floating glassmorphism cards */}
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-8 glass rounded-3xl p-6 shadow-glass w-56">
                  <Church size={32} weight="duotone" className="text-gold-400 mb-2" />
                  <div className="text-3xl font-bold text-white">168+</div>
                  <div className="text-cream-300/70 text-sm">Churches United</div>
                </motion.div>

                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-32 left-0 glass rounded-3xl p-6 shadow-glass w-52">
                  <Users size={32} weight="duotone" className="text-forest-300 mb-2" />
                  <div className="text-3xl font-bold text-white">100K+</div>
                  <div className="text-cream-300/70 text-sm">Faithful Members</div>
                </motion.div>

                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-20 right-0 glass rounded-3xl p-6 shadow-glass w-48">
                  <Globe size={32} weight="duotone" className="text-cream-200 mb-2" />
                  <div className="text-3xl font-bold text-white">4</div>
                  <div className="text-cream-300/70 text-sm">African Nations</div>
                </motion.div>

                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-0 left-8 glass rounded-3xl p-6 shadow-glass w-52">
                  <Trophy size={32} weight="duotone" className="text-gold-300 mb-2" />
                  <div className="text-3xl font-bold text-white">27</div>
                  <div className="text-cream-300/70 text-sm">Years of Service</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 lg:hidden z-20">
          <div className="glass-dark mx-4 mb-4 rounded-2xl p-4">
            <div className="grid grid-cols-4 gap-2 text-center text-white">
              {[
                { n: "168+", l: "Churches", icon: Church },
                { n: "100K+", l: "Members", icon: Users },
                { n: "4", l: "Nations", icon: Globe },
                { n: "27", l: "Years", icon: Trophy }
              ].map((s, i) => (
                <div key={i}>
                  <s.icon size={18} weight="duotone" className="mx-auto mb-1 text-gold-400" />
                  <div className="text-sm font-bold">{s.n}</div>
                  <div className="text-[10px] text-cream-300/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Dots - positioned above mobile stats bar, below on desktop */}
        <div className="absolute bottom-[90px] sm:bottom-[100px] lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {currentImages.map((_, i) => (
            <button key={i} onClick={() => setCurrentImageSlide(i)}
              className={`rounded-full transition-all duration-500 ${i === currentImageSlide ? 'bg-gold-400 w-8 h-2' : 'bg-white/30 w-2 h-2 hover:bg-white/50'}`}
              aria-label={`Slide ${i + 1}`} />
          ))}
        </div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gold-400/50 z-20 hidden lg:block">
          <CaretDown size={24} weight="bold" />
        </motion.div>
      </section>

      {/* ===== FOUNDATION - ASYMMETRIC LAYOUT WITH BLENDED IMAGES ===== */}
      <section className="py-20 sm:py-28 lg:py-36 bg-cream-50 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-maroon-100/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gold-100/40 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            {/* Left - Creative Image Composition */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative">
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-premium">
                  <img src="/dsk7.jpeg" alt="ZBCZ Community" className="w-full h-72 sm:h-96 object-cover" loading="lazy" />
                </div>
                {/* Overlapping glass card */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-4 sm:-right-8 glass-cream rounded-2xl p-5 shadow-premium max-w-[200px]">
                  <Cross size={28} weight="duotone" className="text-maroon-500 mb-2" />
                  <div className="text-2xl font-bold text-maroon-700">1998</div>
                  <div className="text-xs text-gray-600">Year Founded</div>
                </motion.div>
                {/* Small floating image */}
                <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-xl ring-4 ring-cream-50">
                  <img src="/logo.png" alt="ZBCZ Logo" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3 block">Our Foundation</span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-700 mb-6 leading-tight">
                Building Unity<br />Across <span className="text-gold-500">Africa</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                Founded by Archbishop Dr. Henry Ziwerere, ZBCZ has grown from a single vision into a powerful movement
                of unity spanning four African nations - all under the headship of Jesus Christ.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Buildings, title: "Our Beginning", desc: "Starting in Zimbabwe, expanding across borders to serve 168+ churches" },
                  { icon: UserCircle, title: "Servant Leadership", desc: "Biblical principles guiding every decision and ministry effort" },
                  { icon: Leaf, title: "Growing Impact", desc: "100,000+ members united in faith, peace, love, and harmony" },
                  { icon: Handshake, title: "Cross-Cultural", desc: "Respecting local cultures while maintaining unity in Christ" }
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-cream rounded-2xl p-4 hover:shadow-lg transition-all duration-300 group">
                    <item.icon size={24} weight="duotone" className="text-maroon-400 mb-2 group-hover:text-gold-500 transition-colors" />
                    <h4 className="font-bold text-maroon-700 text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/about')}
                className="bg-maroon-500 hover:bg-maroon-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg flex items-center gap-2 w-fit">
                Read Our Full Story <ArrowRight size={16} weight="bold" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== MISSION CARDS - GLASSMORPHISM ===== */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Full bleed background image */}
        <div className="absolute inset-0">
          <img src="/cong.jpeg" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-maroon-900/85 backdrop-blur-sm" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3 block">What We Stand For</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Our Mission & Values</motion.h2>
            <motion.p variants={fadeUp} className="text-cream-200/70 max-w-2xl mx-auto text-base sm:text-lg">
              Guided by biblical principles and servant leadership
            </motion.p>
          </motion.div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Cross, title: "Unity in Christ", desc: "One church, one head: Jesus Christ. Building bridges across denominations.", color: "text-gold-400" },
              { icon: Heart, title: "Compassionate Service", desc: "Following Christ's example through social welfare and humanitarian aid.", color: "text-forest-300" },
              { icon: HandHeart, title: "Servant Leadership", desc: "Biblical leadership emphasizing humility, service, and empowerment.", color: "text-cream-200" },
              { icon: Globe, title: "Global Mission", desc: "Expanding God's kingdom across borders while honoring local cultures.", color: "text-gold-300" },
              { icon: BookOpen, title: "Biblical Foundation", desc: "All ministry grounded in Scripture, promoting spiritual growth.", color: "text-forest-200" },
              { icon: Users, title: "Community Building", desc: "Fostering communities that care for one another and reach the vulnerable.", color: "text-cream-300" }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.08, 0.4) }}
                className="glass rounded-3xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-500 group cursor-default">
                <item.icon size={40} weight="duotone" className={`${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-heading text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-cream-200/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REGIONAL IMPACT - CREATIVE CARDS ===== */}
      <section className="py-20 sm:py-28 bg-cream-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-forest-100/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-forest-500 font-semibold text-sm uppercase tracking-widest mb-3 block">Across The Continent</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-700 mb-4">Our Regional Impact</motion.h2>
          </motion.div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { country: "Zimbabwe", churches: 85, members: "45,000+", coordinator: "Bishop John Mavhura", img: "/dsk1.jpeg" },
              { country: "South Africa", churches: 42, members: "28,000+", coordinator: "Bishop Sarah Mwanza", img: "/dsk2.jpeg" },
              { country: "Mozambique", churches: 23, members: "15,000+", coordinator: "Bishop Ruth Nyathi", img: "/dsk3.jpeg" },
              { country: "Malawi", churches: 18, members: "12,000+", coordinator: "Pastor Michael Banda", img: "/dsk4.jpeg" }
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 bg-white border border-cream-200">
                {/* Image top with overlay */}
                <div className="relative h-40 overflow-hidden">
                  <img src={r.img} alt={r.country} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 via-maroon-900/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <h3 className="font-heading text-xl font-bold text-white">{r.country}</h3>
                  </div>
                  {/* Floating glass badge */}
                  <div className="absolute top-3 right-3 glass rounded-full px-3 py-1">
                    <span className="text-white text-xs font-bold">{r.churches} churches</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={16} weight="duotone" className="text-forest-400" />
                    <span className="text-sm text-gray-600">{r.members} Members</span>
                  </div>
                  <div className="pt-3 border-t border-cream-200">
                    <p className="text-xs text-gray-400 mb-0.5">Regional Coordinator</p>
                    <p className="font-semibold text-maroon-600 text-sm">{r.coordinator}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA - SPLIT DESIGN ===== */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Left - Image */}
          <div className="relative h-64 lg:h-auto">
            <img src="/cong2.jpeg" alt="ZBCZ Community" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-maroon-900/30" />
          </div>
          {/* Right - Content */}
          <div className="bg-maroon-700 flex items-center p-8 sm:p-12 lg:p-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,168,67,0.12),transparent_60%)]" />
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
              <Cross size={40} weight="duotone" className="text-gold-400 mb-5" />
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Join Our Mission</h2>
              <p className="text-cream-200/70 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Whether you're seeking spiritual growth, fellowship, or opportunities to serve,
                ZBCZ welcomes you to our unified family in Christ.
              </p>
              <div className="flex flex-col xs:flex-row gap-3">
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/about')}
                  className="bg-gold-400 hover:bg-gold-300 text-maroon-900 px-6 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2">
                  <Church size={18} weight="fill" /> Find a Church
                </motion.button>
                <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => navigate('/contact')}
                  className="glass text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/20 flex items-center justify-center gap-2">
                  <ArrowRight size={16} weight="bold" /> Contact Us
                </motion.button>
              </div>

              <div className="mt-10 glass rounded-2xl p-5">
                <p className="text-cream-200/80 text-sm italic font-heading leading-relaxed">
                  "Grace and peace to you from God our Father and the Lord Jesus Christ. Amen."
                </p>
                <p className="text-gold-400/70 text-xs mt-2 font-semibold">- ZBCZ Blessing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
