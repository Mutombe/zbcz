import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Envelope, Phone, MapPin, Clock, PaperPlaneTilt, CheckCircle, Globe, FacebookLogo, XLogo, InstagramLogo, YoutubeLogo, Church, Heart, Users, Buildings, CalendarBlank } from '@phosphor-icons/react';
import { fadeUp, staggerContainer } from '../../lib/motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '', churchAffiliation: '', inquiryType: 'general' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const cssLink = document.createElement('link'); cssLink.rel = 'stylesheet'; cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'; document.head.appendChild(cssLink);
    const script = document.createElement('script'); script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    script.onload = () => { if (mapRef.current && window.L && !mapInstanceRef.current) { const m = window.L.map(mapRef.current).setView([-17.8252, 31.0335], 12); window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OSM' }).addTo(m); [[-17.8252,31.0335,'HQ'],[-17.84,31.05,'Community Center'],[-17.81,31.02,'Youth Center']].forEach(l => window.L.marker([l[0],l[1]]).addTo(m).bindPopup(`<b>ZBCZ ${l[2]}</b>`)); mapInstanceRef.current = m; } };
    document.head.appendChild(script);
    return () => { if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; } };
  }, []);

  const handleSubmit = (e) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setSubmitStatus('success'); setIsSubmitting(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '', churchAffiliation: '', inquiryType: 'general' }); setTimeout(() => setSubmitStatus(null), 5000); }, 2000); };

  const inputClass = "w-full px-4 py-3 text-sm border border-cream-300 rounded-xl focus:ring-2 focus:ring-gold-400/40 focus:border-gold-400 transition-all bg-white/80 backdrop-blur-sm";

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <section className="relative py-20 sm:py-28 bg-cream-50 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-maroon-100/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-500 font-semibold text-sm uppercase tracking-widest mb-3 block">Get In Touch</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon-700 mb-5">Contact <span className="text-gold-500">ZBCZ</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10">Connect with us to learn more about our ministries or join our community.</motion.p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { icon: Envelope, title: "Email", val: "info@zbcz.org" },
              { icon: Phone, title: "Phone", val: "+263 71 239 1456" },
              { icon: MapPin, title: "Address", val: "Harare, Zimbabwe" },
              { icon: Clock, title: "Hours", val: "Mon-Fri 8AM-5PM" }
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="glass-cream rounded-2xl p-4 hover:shadow-lg transition-all duration-300">
                <c.icon size={24} weight="duotone" className="text-maroon-400 mx-auto mb-2" />
                <div className="text-xs font-semibold text-maroon-700">{c.title}</div>
                <div className="text-xs text-gray-500">{c.val}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-cream rounded-3xl p-6 sm:p-8 shadow-card">
              <h2 className="font-heading text-2xl font-bold text-maroon-700 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-maroon-700 mb-1.5">Full Name *</label><input type="text" name="name" value={formData.name} onChange={e => setFormData(p => ({...p, [e.target.name]: e.target.value}))} required placeholder="Your name" className={inputClass} /></div>
                  <div><label className="block text-sm font-medium text-maroon-700 mb-1.5">Email *</label><input type="email" name="email" value={formData.email} onChange={e => setFormData(p => ({...p, [e.target.name]: e.target.value}))} required placeholder="email@example.com" className={inputClass} /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-maroon-700 mb-1.5">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={e => setFormData(p => ({...p, [e.target.name]: e.target.value}))} placeholder="+263 XX XXX XXXX" className={inputClass} /></div>
                  <div><label className="block text-sm font-medium text-maroon-700 mb-1.5">Inquiry Type</label><select name="inquiryType" value={formData.inquiryType} onChange={e => setFormData(p => ({...p, [e.target.name]: e.target.value}))} className={inputClass}><option value="general">General</option><option value="membership">Membership</option><option value="events">Events</option><option value="compassion">Compassionate Services</option><option value="partnership">Partnership</option></select></div>
                </div>
                <div><label className="block text-sm font-medium text-maroon-700 mb-1.5">Subject *</label><input type="text" name="subject" value={formData.subject} onChange={e => setFormData(p => ({...p, [e.target.name]: e.target.value}))} required placeholder="Brief subject" className={inputClass} /></div>
                <div><label className="block text-sm font-medium text-maroon-700 mb-1.5">Message *</label><textarea name="message" value={formData.message} onChange={e => setFormData(p => ({...p, [e.target.name]: e.target.value}))} required rows={5} placeholder="How can we help?" className={`${inputClass} resize-none`} /></div>
                <motion.button type="submit" disabled={isSubmitting} whileHover={{ y: -1 }} className="w-full bg-maroon-500 hover:bg-maroon-600 text-white py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg">
                  {isSubmitting ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</> : <><PaperPlaneTilt size={18} weight="fill" />Send Message</>}
                </motion.button>
              </form>
              <AnimatePresence>{submitStatus === 'success' && <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 bg-forest-50 border border-forest-200 rounded-xl p-4 flex items-center gap-3"><CheckCircle size={20} weight="fill" className="text-forest-500" /><p className="text-forest-700 text-sm">Message sent successfully!</p></motion.div>}</AnimatePresence>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="rounded-3xl overflow-hidden shadow-card border border-cream-200">
              <div className="p-6 bg-white border-b border-cream-200">
                <h2 className="font-heading text-2xl font-bold text-maroon-700 mb-1">Find Us</h2>
                <p className="text-gray-500 text-sm">Visit our headquarters in Harare</p>
              </div>
              <div ref={mapRef} className="h-72 sm:h-80 md:h-96 w-full bg-cream-100 flex items-center justify-center"><div className="text-gray-400 text-sm"><MapPin size={32} className="mx-auto mb-2 text-maroon-300" />Loading map...</div></div>
              <div className="p-6 bg-cream-50 space-y-3">
                <div className="flex items-start gap-3"><MapPin size={16} weight="fill" className="text-maroon-400 mt-0.5" /><div><div className="font-semibold text-maroon-700 text-sm">Headquarters</div><div className="text-gray-500 text-xs">123 Unity Street, Harare</div></div></div>
                <div className="flex items-start gap-3"><Clock size={16} weight="fill" className="text-forest-400 mt-0.5" /><div><div className="font-semibold text-maroon-700 text-sm">Office Hours</div><div className="text-gray-500 text-xs">Mon-Fri: 8AM - 5PM</div></div></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex justify-center gap-3 mb-8">
              {[FacebookLogo, XLogo, InstagramLogo, YoutubeLogo].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ y: -3 }} className="glass-cream rounded-xl p-3.5 hover:bg-maroon-500 hover:text-white transition-all text-maroon-400 border border-cream-200"><Icon size={22} weight="fill" /></motion.a>
              ))}
            </div>
            <div className="glass-cream rounded-3xl p-8 max-w-2xl mx-auto">
              <img src="/logo.png" alt="ZBCZ" className="w-14 h-14 mx-auto mb-4 rounded-xl object-cover shadow-lg" />
              <h3 className="font-heading text-2xl font-bold text-maroon-700 mb-2">Ready to Join?</h3>
              <p className="text-gray-600 text-sm mb-5">We welcome you with open arms.</p>
              <motion.button whileHover={{ y: -2 }} className="bg-maroon-500 hover:bg-maroon-600 text-white py-3 px-6 rounded-full font-semibold text-sm transition-all shadow-lg">Learn About Membership</motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
