import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross, Crown, Heart, Users, BookOpen, CaretLeft, CaretRight, Handshake, Star, Bird, ArrowRight } from "@phosphor-icons/react";
import { fadeUp, staggerContainer, cardHover } from "../../lib/motion";

const AboutPage = () => {
  const [ci, setCi] = useState(0);
  const imgs = [
    { src: "/dsk7.jpeg", title: "Our Leadership", desc: "Bishops and pastors across Africa" },
    { src: "/mb5.jpeg", title: "Compassionate Service", desc: "Supporting vulnerable families" },
    { src: "/cong.jpeg", title: "United in Worship", desc: "Churches across four nations" },
    { src: "/cong2.jpeg", title: "Future Leaders", desc: "Nurturing the next generation" },
  ];
  useEffect(() => { const t = setInterval(() => setCi(p => (p + 1) % imgs.length), 5000); return () => clearInterval(t); }, []);

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      {/* Hero - Asymmetric with blended image */}
      <section className="relative py-20 sm:py-28 bg-cream-50 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-maroon-100/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3 block">Who We Are</span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon-700 mb-5 leading-tight">
                About <span className="text-gold-500">ZBCZ</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                An ecumenical board of indigenous African Zionist Churches united by the truth that the church is one and the Head is Jesus Christ.
              </p>
              <div className="glass-cream rounded-2xl p-5 max-w-md">
                <p className="text-maroon-600 text-sm italic font-heading">"Grace and peace to you from God our Father and the Lord Jesus Christ. Amen."</p>
              </div>
            </motion.div>

            {/* Creative image carousel */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="relative h-80 sm:h-[420px] rounded-[2rem] overflow-hidden shadow-premium">
                {imgs.map((img, i) => (
                  <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === ci ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-transparent to-transparent" />
                  </div>
                ))}
                <div className="absolute bottom-4 left-4 right-4 z-10 glass rounded-xl p-4">
                  <h3 className="text-white font-bold text-base">{imgs[ci].title}</h3>
                  <p className="text-white/70 text-xs">{imgs[ci].desc}</p>
                </div>
                <div className="absolute bottom-5 right-5 z-10 flex gap-1.5">
                  {imgs.map((_, i) => (<button key={i} onClick={() => setCi(i)} className={`rounded-full transition-all ${i === ci ? 'bg-gold-400 w-6 h-2' : 'bg-white/30 w-2 h-2'}`} aria-label={`Slide ${i+1}`} />))}
                </div>
                <button onClick={() => setCi(p => (p - 1 + imgs.length) % imgs.length)} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 text-white hover:bg-white/20" aria-label="Prev"><CaretLeft size={18} weight="bold" /></button>
                <button onClick={() => setCi(p => (p + 1) % imgs.length)} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 text-white hover:bg-white/20" aria-label="Next"><CaretRight size={18} weight="bold" /></button>
              </div>
              {/* Floating badge */}
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-5 -left-5 glass-cream rounded-2xl p-4 shadow-premium">
                <Users size={24} weight="duotone" className="text-maroon-500 mb-1" />
                <div className="text-xl font-bold text-maroon-700">100K+</div>
                <div className="text-[10px] text-gray-500">Members</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biblical Foundation - Glass cards over image */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0"><img src="/church.jpeg" alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-maroon-900/85 backdrop-blur-sm" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-gold-400 font-semibold text-sm uppercase tracking-widest block mb-3">Scripture Foundation</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Our Biblical Foundation</motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: BookOpen, title: "Acts 4:32", text: '"All the believers were one in heart and mind..."', sub: "Guiding our commitment to unity across all member churches.", color: "text-gold-400" },
              { icon: Crown, title: "Christ is Head", text: "The church is one and the Head is Jesus Christ. We reject divisions based on human personalities.", sub: "Unity from shared allegiance to Christ alone.", color: "text-cream-200" }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="glass rounded-3xl p-7 sm:p-9 hover:bg-white/15 transition-all duration-500">
                <c.icon size={40} weight="duotone" className={`${c.color} mb-4`} />
                <h3 className="font-heading text-2xl font-bold text-white mb-3">{c.title}</h3>
                <p className="text-cream-200/70 italic text-sm leading-relaxed mb-3">{c.text}</p>
                <p className="text-cream-200/50 text-sm">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story + Core Values */}
      <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gold-50/60 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3 block">Our Journey</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-maroon-700 mb-5">Our Story of Unity</h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>Founded as an Indigenous Umbrella Church Body, ZBCZ represents the practical application of biblical unity among Zion Churches.</p>
                <p>Our organization bridges communities while maintaining our rich African heritage, following Christ's prayer "that they may be one" (John 17:21).</p>
                <p>Through Compassionate Services, we've touched thousands of lives across Africa.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="order-1 lg:order-2 relative">
              <div className="rounded-[2rem] overflow-hidden shadow-premium"><img src="/dsk3.jpeg" alt="Community" className="w-full h-72 sm:h-96 object-cover" loading="lazy" /></div>
              <div className="absolute -bottom-5 -left-5 glass-cream rounded-2xl p-4 shadow-premium">
                <div className="text-xl font-bold text-maroon-700">4 Nations</div>
                <div className="text-xs text-gray-500">One Body in Christ</div>
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <motion.span variants={fadeUp} className="text-forest-500 font-semibold text-sm uppercase tracking-widest block mb-3">What We Believe</motion.span>
            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold text-maroon-700">Our Core Values</motion.h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { icon: Cross, title: "Christ-Centered Unity", desc: "Deep-rooted beliefs centered on Christ as the Head", img: "/mb5.jpeg" },
              { icon: Heart, title: "Compassionate Service", desc: "Caring for orphans, widows, and the vulnerable", img: "/dsk2.jpeg" },
              { icon: Handshake, title: "Inclusive Fellowship", desc: "Strengthening the body of Christ through inclusivity", img: "/church.jpeg" },
              { icon: Bird, title: "Peace & Harmony", desc: "Promoting unity, peace, love, and harmony", img: "/growth.jpeg" },
            ].map((v, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
                className="group rounded-3xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 bg-white border border-cream-200">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/70 via-maroon-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="glass rounded-xl p-2"><v.icon size={24} weight="duotone" className="text-white" /></div>
                    <h3 className="font-heading text-xl font-bold text-white">{v.title}</h3>
                  </div>
                </div>
                <div className="p-5"><p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision/Mission + Leadership */}
      <section className="py-20 sm:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {[
              { icon: Star, title: "Our Vision", img: "/dsk1.jpeg", text: "To be the leading Indigenous Umbrella Church Body uniting Zion Churches across Africa." },
              { icon: Heart, title: "Our Mission", img: "/logo.png", text: "To empower Zion Churches to grow spiritually and provide compassionate service." }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }} className="group rounded-3xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 bg-white border border-cream-200">
                <div className="relative h-52 overflow-hidden"><img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-maroon-500/60" /><div className="absolute inset-0 flex items-center justify-center"><c.icon size={48} weight="duotone" className="text-white" /></div></div>
                <div className="p-6 sm:p-8"><h3 className="font-heading text-2xl font-bold text-maroon-700 mb-3 text-center">{c.title}</h3><p className="text-gray-600 text-center text-sm leading-relaxed">{c.text}</p></div>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="font-heading text-3xl sm:text-4xl font-bold text-maroon-700">Our Leadership</motion.h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { name: "Archbishop Dr Henry Ziwerere", title: "President & Founder", image: "/mb4.jpeg" },
              { name: "Archbishop (Prof) David Mureri", title: "Vice President", image: "/user.png" },
              { name: "Rev Adonija Muzondiona", title: "Secretary General", image: "/user.png" },
            ].map((l, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -6 }}
                className="glass-cream rounded-3xl p-6 sm:p-8 hover:shadow-premium transition-all duration-500 text-center">
                <img src={l.image} alt={l.name} className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full mx-auto border-4 border-white shadow-xl mb-5" loading="lazy" />
                <h3 className="font-heading font-bold text-maroon-700 text-base sm:text-lg">{l.name}</h3>
                <p className="text-gold-600 font-medium text-sm">{l.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
