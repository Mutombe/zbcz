import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, House, Info, HandHeart, CalendarBlank, UserCircleCheck, Images, ChatCircleDots, MagnifyingGlass } from '@phosphor-icons/react';

const pages = {
  home: { name: 'Home', icon: House },
  about: { name: 'About Us', icon: Info },
  ministries: { name: 'Ministries', icon: HandHeart },
  events: { name: 'Events', icon: CalendarBlank },
  leadership: { name: 'Leadership', icon: UserCircleCheck },
  gallery: { name: 'Gallery', icon: Images },
  contact: { name: 'Contact', icon: ChatCircleDots }
};

const searchablePages = [
  { name: 'Home', path: '/', keywords: ['home', 'main', 'welcome', 'zbcz', 'zion'] },
  { name: 'About Us', path: '/about', keywords: ['about', 'history', 'story', 'foundation', 'who', 'mission', 'vision', 'values', 'unity'] },
  { name: 'Ministries', path: '/ministries', keywords: ['ministries', 'orphan', 'widow', 'disability', 'girl', 'compassion', 'service', 'care', 'support'] },
  { name: 'Events', path: '/events', keywords: ['events', 'convention', 'conference', 'charity', 'walk', 'youth', 'summit', 'calendar'] },
  { name: 'Leadership', path: '/leadership', keywords: ['leadership', 'bishop', 'archbishop', 'pastor', 'ziwerere', 'founder', 'president', 'council', 'coordinator'] },
  { name: 'Gallery', path: '/gallery', keywords: ['gallery', 'photos', 'images', 'pictures', 'worship', 'community', 'ceremonies'] },
  { name: 'Contact', path: '/contact', keywords: ['contact', 'email', 'phone', 'address', 'message', 'reach', 'connect', 'find'] },
];

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); setSearchOpen(false); setSearchQuery(''); }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = (mobileMenuOpen || searchOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen, searchOpen]);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  const menuItems = Object.entries(pages);
  const currentPath = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  const isScrolled = scrollY > 20;
  const isHome = location.pathname === '/';
  const showTransparent = isHome && !isScrolled && !mobileMenuOpen;

  const searchResults = searchQuery.trim().length > 0
    ? searchablePages.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.keywords.some(k => k.includes(searchQuery.toLowerCase()))
      )
    : [];

  const handleSearchNavigate = (path) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold-400 focus:text-maroon-900 focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold">Skip to content</a>

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showTransparent ? 'bg-transparent' : 'glass-cream shadow-lg'
        }`}
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg ring-2 ring-gold-400/30 group-hover:ring-gold-400/60 transition-all duration-300">
                <img src="/logo.png" alt="ZBCZ Logo" className="w-full h-full object-cover" loading="eager" />
              </div>
              <div>
                <h1 className={`font-heading font-bold text-sm sm:text-lg lg:text-xl leading-tight transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-maroon-500'}`}>ZBCZ</h1>
                <p className={`text-[10px] sm:text-xs hidden xs:block leading-tight transition-colors duration-300 ${showTransparent ? 'text-white/70' : 'text-maroon-300'}`}>Zion Bishops Conference</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-3">
              <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full ${showTransparent ? 'glass' : 'bg-cream-100/80'}`}>
                {menuItems.map(([key, { name }]) => {
                  const isActive = currentPath === key;
                  return (
                    <Link key={key} to={key === 'home' ? '/' : `/${key}`}
                      className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        isActive
                          ? showTransparent ? 'bg-white/20 text-white' : 'bg-maroon-500 text-white shadow-md'
                          : showTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-maroon-600 hover:bg-cream-200/60'
                      }`}>
                      {name}
                    </Link>
                  );
                })}
              </div>
              {/* Desktop Search Button */}
              <button onClick={() => setSearchOpen(true)}
                className={`p-2.5 rounded-full transition-all duration-300 ${showTransparent ? 'text-white/80 hover:bg-white/10' : 'text-maroon-400 hover:bg-cream-100'}`}
                aria-label="Search">
                <MagnifyingGlass size={20} weight="bold" />
              </button>
            </div>

            {/* Mobile Right Actions */}
            <div className="flex items-center gap-1.5 lg:hidden">
              {/* Mobile Search Button */}
              <button onClick={() => setSearchOpen(true)}
                className={`p-2 rounded-xl transition-all duration-200 ${showTransparent ? 'text-white hover:bg-white/10' : 'text-maroon-500 hover:bg-cream-100'}`}
                aria-label="Search">
                <MagnifyingGlass size={22} weight="bold" />
              </button>
              {/* Mobile Menu Button */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-all duration-200 ${showTransparent ? 'text-white hover:bg-white/10' : 'text-maroon-600 hover:bg-cream-100'}`}
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
                {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ===== SEARCH OVERLAY ===== */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60]">
            <div className="absolute inset-0 bg-maroon-900/60 backdrop-blur-lg" onClick={() => { setSearchOpen(false); setSearchQuery(''); }} />
            <motion.div initial={{ opacity: 0, y: -20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
              className="relative max-w-xl mx-auto mt-20 sm:mt-28 px-4">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-premium overflow-hidden border border-cream-200">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-cream-200">
                  <MagnifyingGlass size={22} weight="bold" className="text-maroon-400 flex-shrink-0" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search pages, ministries, leadership..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-base text-maroon-800 placeholder-gray-400 outline-none"
                    autoComplete="off"
                  />
                  <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-maroon-600 hover:bg-cream-100 transition-colors">
                    <X size={18} weight="bold" />
                  </button>
                </div>

                {/* Search Results */}
                <div className="max-h-[50vh] overflow-y-auto">
                  {searchQuery.trim().length === 0 ? (
                    <div className="px-5 py-6">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-3 font-semibold">Quick Links</p>
                      <div className="grid grid-cols-2 gap-2">
                        {menuItems.map(([key, { name, icon: Icon }]) => (
                          <button key={key} onClick={() => handleSearchNavigate(key === 'home' ? '/' : `/${key}`)}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-600 hover:bg-cream-100 hover:text-maroon-600 transition-all text-left">
                            <Icon size={18} weight="duotone" className="text-maroon-300 flex-shrink-0" />
                            {name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : searchResults.length > 0 ? (
                    <div className="py-2">
                      {searchResults.map((result, i) => (
                        <button key={i} onClick={() => handleSearchNavigate(result.path)}
                          className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-cream-100 transition-colors text-left">
                          <div className="w-9 h-9 rounded-xl bg-maroon-50 flex items-center justify-center flex-shrink-0">
                            <MagnifyingGlass size={16} className="text-maroon-400" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-maroon-700">{result.name}</p>
                            <p className="text-xs text-gray-400">{result.path}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="px-5 py-8 text-center">
                      <MagnifyingGlass size={32} className="text-cream-300 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">No results for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-center text-xs text-white/40 mt-3">Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">Esc</kbd> to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-40 lg:hidden">
            <motion.div className="absolute inset-0 bg-maroon-900/50 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-cream-50/95 backdrop-blur-xl shadow-premium">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-cream-200/50">
                  <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="ZBCZ" className="w-9 h-9 rounded-xl object-cover shadow-md" />
                    <span className="font-heading font-bold text-maroon-500 text-lg">ZBCZ</span>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-xl text-maroon-400 hover:bg-maroon-50 transition-colors" aria-label="Close">
                    <X size={20} weight="bold" />
                  </button>
                </div>

                {/* Mobile Search Bar */}
                <div className="px-4 pt-4 pb-2">
                  <button onClick={() => { setMobileMenuOpen(false); setTimeout(() => setSearchOpen(true), 150); }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-cream-100 border border-cream-200 text-gray-400 text-sm transition-colors hover:border-maroon-200">
                    <MagnifyingGlass size={18} weight="bold" className="text-maroon-300" />
                    <span>Search pages...</span>
                  </button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-2 px-3">
                  <div className="space-y-1">
                    {menuItems.map(([key, { name, icon: Icon }], index) => {
                      const isActive = currentPath === key;
                      return (
                        <motion.div key={key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 + 0.08 }}>
                          <Link to={key === 'home' ? '/' : `/${key}`}
                            className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all duration-200 ${
                              isActive ? 'text-white bg-maroon-500 shadow-lg' : 'text-gray-700 hover:text-maroon-600 hover:bg-cream-200/60'
                            }`}>
                            <Icon size={20} weight={isActive ? 'fill' : 'regular'} />
                            <span className="text-[15px]">{name}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-cream-200/50 bg-cream-100/50">
                  <p className="text-[11px] text-maroon-400 text-center italic font-heading">"Grace and peace to you from God our Father"</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
