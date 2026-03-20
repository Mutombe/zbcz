import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CaretLeft, CaretRight, Camera, Heart, Users, Church, Globe, Medal, CalendarBlank, MapPin, DownloadSimple, ShareNetwork, SquaresFour, ListBullets, MagnifyingGlass } from '@phosphor-icons/react';
import { fadeUp, staggerContainer } from '../lib/motion';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const images = [
    { id:1, src:"/dsk7.jpeg", title:"Leadership Conference 2024", category:"leadership", desc:"Annual gathering of bishops", date:"2024-03-15", location:"Harare" },
    { id:2, src:"/mb5.jpeg", title:"Community Outreach", category:"community", desc:"Supporting vulnerable families", date:"2024-02-28", location:"Bulawayo" },
    { id:3, src:"/cong.jpeg", title:"United in Worship", category:"worship", desc:"Sunday service congregation", date:"2024-04-07", location:"Johannesburg" },
    { id:4, src:"/cong2.jpeg", title:"Future Leaders", category:"youth", desc:"Youth empowerment gathering", date:"2024-01-20", location:"Maputo" },
    { id:5, src:"/dsk3.jpeg", title:"Inter-Church Fellowship", category:"community", desc:"Nations coming together", date:"2024-03-10", location:"Lilongwe" },
    { id:6, src:"/pic1.jpeg", title:"Regional Fellowship", category:"community", desc:"Regional church gathering", date:"2024-03-10", location:"Harare" },
    { id:7, src:"/pic2.jpeg", title:"Community Service Day", category:"community", desc:"Serving our communities", date:"2024-03-10", location:"Harare" },
    { id:8, src:"/pic3.jpeg", title:"Church Activities", category:"community", desc:"Community building", date:"2024-03-10", location:"Harare" },
    { id:9, src:"/pic4.jpeg", title:"Ministry Outreach", category:"community", desc:"Reaching communities", date:"2024-03-10", location:"Harare" },
    { id:10, src:"/pic5.jpeg", title:"Worship Moments", category:"worship", desc:"Powerful worship", date:"2024-03-10", location:"Harare" },
    { id:11, src:"/pic10.jpeg", title:"Special Event", category:"community", desc:"Community celebration", date:"2024-03-10", location:"Harare" },
    { id:12, src:"/pic11.jpeg", title:"Annual Conference", category:"leadership", desc:"Leadership conference", date:"2024-03-10", location:"Harare" },
    { id:13, src:"/pic12.jpeg", title:"Celebration", category:"community", desc:"Celebrating together", date:"2024-03-10", location:"Harare" },
    { id:14, src:"/pic13.jpeg", title:"Ministry in Action", category:"community", desc:"Active ministry", date:"2024-03-10", location:"Harare" },
    { id:15, src:"/pic14.jpeg", title:"Church Gathering", category:"worship", desc:"United in faith", date:"2024-03-10", location:"Harare" },
    { id:16, src:"/pic15.jpeg", title:"Prayer Mountain", category:"worship", desc:"Spiritual retreat", date:"2024-02-15", location:"Matopo Hills" },
    { id:17, src:"/church.jpeg", title:"Church Dedication", category:"ceremonies", desc:"New church dedication", date:"2024-04-01", location:"Cape Town" },
    { id:18, src:"/dsk1.jpeg", title:"Baptism by the River", category:"ceremonies", desc:"Mass baptism ceremony", date:"2024-03-25", location:"Zambezi River" },
    { id:19, src:"/mb4.jpeg", title:"Ordination Service", category:"ceremonies", desc:"Ordination of pastors", date:"2024-02-10", location:"Harare" },
    { id:20, src:"/sg.jpeg", title:"Administrative Council", category:"leadership", desc:"Planning meeting", date:"2024-01-15", location:"Harare" },
  ];

  const categories = [
    { id:'all', name:'All', icon: Camera },
    { id:'worship', name:'Worship', icon: Church },
    { id:'community', name:'Community', icon: Heart },
    { id:'leadership', name:'Leadership', icon: Users },
    { id:'youth', name:'Youth', icon: Globe },
    { id:'ceremonies', name:'Ceremonies', icon: Medal },
  ];

  const filtered = images.filter(img => {
    const matchCat = selectedCategory === 'all' || img.category === selectedCategory;
    const matchSearch = img.title.toLowerCase().includes(searchTerm.toLowerCase()) || img.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  const openLightbox = (img) => { setSelectedImage(img); setLightboxIdx(filtered.findIndex(i => i.id === img.id)); };
  const navLightbox = (dir) => { const n = dir === 'next' ? (lightboxIdx + 1) % filtered.length : (lightboxIdx - 1 + filtered.length) % filtered.length; setLightboxIdx(n); setSelectedImage(filtered[n]); };

  useEffect(() => { const h = (e) => { if (!selectedImage) return; if (e.key === 'Escape') setSelectedImage(null); if (e.key === 'ArrowLeft') navLightbox('prev'); if (e.key === 'ArrowRight') navLightbox('next'); }; window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h); }, [selectedImage, lightboxIdx]);
  useEffect(() => { document.body.style.overflow = selectedImage ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [selectedImage]);

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-cream-50">
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0"><img src="/cong.jpeg" alt="" className="w-full h-full object-cover" loading="eager" /><div className="absolute inset-0 bg-maroon-900/85 backdrop-blur-sm" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Moments of Faith</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">Photo <span className="text-gold-400">Gallery</span></motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="max-w-xl mx-auto mt-8">
            <div className="glass rounded-2xl p-3 flex items-center gap-3">
              <div className="relative flex-1"><MagnifyingGlass size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50" />
                <input type="text" placeholder="Search photos..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/10 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400/40 text-sm text-white placeholder-white/40" />
              </div>
              <div className="flex gap-1 bg-white/10 rounded-lg p-0.5">
                {[{ m:'grid', icon: SquaresFour }, { m:'list', icon: ListBullets }].map(({ m, icon: Icon }) => (
                  <button key={m} onClick={() => setViewMode(m)} className={`p-2 rounded-lg transition-all ${viewMode === m ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white/80'}`}><Icon size={16} weight="bold" /></button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-4 sm:py-5 bg-white border-b border-cream-200 sticky top-16 sm:top-18 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => {
              const count = cat.id === 'all' ? images.length : images.filter(i => i.category === cat.id).length;
              return (<button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium transition-all ${selectedCategory === cat.id ? 'bg-maroon-500 text-white shadow-lg' : 'bg-cream-100 text-gray-500 hover:bg-cream-200'}`}>
                <cat.icon size={14} weight={selectedCategory === cat.id ? 'fill' : 'regular'} />{cat.name}<span className={`px-1.5 py-0.5 rounded-full text-[10px] ${selectedCategory === cat.id ? 'bg-white/20' : 'bg-maroon-50 text-maroon-500'}`}>{count}</span>
              </button>);
            })}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div key={selectedCategory+viewMode} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
              className={viewMode === 'grid' ? 'grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' : 'space-y-3'}>
              {filtered.length > 0 ? filtered.map((img, i) => (
                <motion.div key={img.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(i*0.02, 0.2) }}
                  whileHover={{ y: -4 }} onClick={() => openLightbox(img)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 bg-white border border-cream-200 ${viewMode === 'list' ? 'flex p-3' : ''}`}>
                  {viewMode === 'grid' ? (
                    <>
                      <div className="relative aspect-square overflow-hidden"><img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"><h3 className="text-white font-bold text-sm truncate">{img.title}</h3><p className="text-white/60 text-xs">{img.location}</p></div>
                      </div>
                      <div className="p-3"><h3 className="font-semibold text-maroon-700 text-xs truncate">{img.title}</h3></div>
                    </>
                  ) : (
                    <><div className="w-16 h-16 flex-shrink-0 mr-3 rounded-xl overflow-hidden"><img src={img.src} alt={img.title} className="w-full h-full object-cover" loading="lazy" /></div>
                    <div className="flex-1 min-w-0"><h3 className="font-semibold text-maroon-700 text-sm truncate">{img.title}</h3><p className="text-gray-400 text-xs">{img.location} &middot; {new Date(img.date).toLocaleDateString()}</p></div></>
                  )}
                </motion.div>
              )) : (
                <div className="col-span-full text-center py-16"><Camera size={48} className="text-cream-300 mx-auto mb-4" /><h3 className="font-heading text-lg font-bold text-maroon-700">No photos found</h3></div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-maroon-900/90 backdrop-blur-md flex items-center justify-center p-3"
            onClick={() => setSelectedImage(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}>
              <button onClick={() => setSelectedImage(null)} className="absolute top-3 right-3 z-30 glass-dark rounded-full p-2 text-white hover:bg-white/20" aria-label="Close"><X size={18} weight="bold" /></button>
              {filtered.length > 1 && <>
                <button onClick={() => navLightbox('prev')} className="absolute left-3 top-1/2 -translate-y-1/2 z-30 glass-dark rounded-full p-2 text-white hover:bg-white/20"><CaretLeft size={18} weight="bold" /></button>
                <button onClick={() => navLightbox('next')} className="absolute right-3 top-1/2 -translate-y-1/2 z-30 glass-dark rounded-full p-2 text-white hover:bg-white/20"><CaretRight size={18} weight="bold" /></button>
              </>}
              <div className="grid md:grid-cols-3 h-full">
                <div className="md:col-span-2 bg-maroon-900"><img src={selectedImage.src} alt={selectedImage.title} className="w-full h-56 sm:h-72 md:h-full object-cover" /></div>
                <div className="p-6 sm:p-8 overflow-y-auto">
                  <h2 className="font-heading text-xl font-bold text-maroon-700 mb-2">{selectedImage.title}</h2>
                  <p className="text-gray-500 text-sm mb-5">{selectedImage.desc}</p>
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center text-sm text-gray-500"><CalendarBlank size={16} weight="fill" className="mr-2.5 text-maroon-400" />{new Date(selectedImage.date).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })}</div>
                    <div className="flex items-center text-sm text-gray-500"><MapPin size={16} weight="fill" className="mr-2.5 text-forest-400" />{selectedImage.location}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-2 bg-maroon-500 text-white rounded-lg text-xs font-medium"><DownloadSimple size={14} />Download</button>
                    <button className="flex items-center gap-1.5 px-3 py-2 bg-cream-100 text-gray-600 rounded-lg text-xs font-medium border border-cream-200"><ShareNetwork size={14} />Share</button>
                  </div>
                  {filtered.length > 1 && <div className="text-center text-xs text-gray-400 mt-5 pt-4 border-t border-cream-200">{lightboxIdx + 1} of {filtered.length}</div>}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[350px]">
          <div className="relative h-48 lg:h-auto"><img src="/dsk3.jpeg" alt="" className="w-full h-full object-cover" loading="lazy" /><div className="absolute inset-0 bg-maroon-900/20" /></div>
          <div className="bg-maroon-600 flex items-center p-8 sm:p-12 lg:p-16 relative">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl font-bold text-white mb-4">Share Your Moments</h2>
              <p className="text-cream-200/70 text-base mb-8 max-w-md">Have photos from ZBCZ events? We'd love to feature them.</p>
              <motion.button whileHover={{ y: -2 }} className="bg-gold-400 hover:bg-gold-300 text-maroon-900 px-6 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all flex items-center gap-2"><Camera size={18} weight="fill" />Submit Photos</motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
