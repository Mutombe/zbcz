import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Envelope, Globe, FacebookLogo, XLogo, InstagramLogo, YoutubeLogo, Church, Users, Heart, ArrowRight, Code } from '@phosphor-icons/react';

const ZBCZFooter = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { name: "About ZBCZ", to: "/about" }, { name: "Leadership", to: "/leadership" }, { name: "Ministries", to: "/ministries" },
    { name: "Events", to: "/events" }, { name: "Gallery", to: "/gallery" }, { name: "Contact Us", to: "/contact" }
  ];

  return (
    <footer className="bg-maroon-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(212,168,67,0.06),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1 - Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="ZBCZ" className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover ring-2 ring-gold-400/20 shadow-lg" />
              <div><h3 className="font-heading text-lg sm:text-xl font-bold text-gold-400">ZBCZ</h3><p className="text-[10px] sm:text-xs text-cream-300/50">Est. 1998</p></div>
            </div>
            <p className="text-xs sm:text-sm text-cream-300/60 leading-relaxed mb-5">Uniting believers across Africa. Building God's kingdom through unity, love, and faithful service.</p>
            <div className="glass rounded-2xl p-3.5 sm:p-4 mb-5">
              <div className="space-y-2">
                {[{ icon: Church, label: "Churches", val: "168+", c: "text-gold-400" }, { icon: Users, label: "Members", val: "100,000+", c: "text-forest-300" }, { icon: Globe, label: "Countries", val: "4", c: "text-cream-300" }].map((s, i) => (
                  <div key={i} className="flex items-center justify-between"><span className="text-xs sm:text-sm text-cream-300/50 flex items-center gap-2"><s.icon size={13} weight="duotone" />{s.label}</span><span className={`font-bold text-xs sm:text-sm ${s.c}`}>{s.val}</span></div>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              {[{ icon: FacebookLogo, label: "Facebook" }, { icon: XLogo, label: "X" }, { icon: InstagramLogo, label: "Instagram" }, { icon: YoutubeLogo, label: "YouTube" }].map((s, i) => (
                <a key={i} href="#" aria-label={s.label} className="glass rounded-xl p-2 sm:p-2.5 hover:bg-gold-400 hover:text-maroon-900 transition-all duration-300 text-cream-300/60"><s.icon size={16} weight="fill" /></a>
              ))}
            </div>
          </div>

          {/* Col 2 - Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-400 text-xs sm:text-sm flex items-center gap-2"><ArrowRight size={12} weight="bold" />Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l, i) => (<li key={i}><Link to={l.to} className="text-cream-300/50 hover:text-gold-400 transition-colors text-xs sm:text-sm flex items-center gap-2 group"><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-maroon-400 rounded-full group-hover:bg-gold-400 transition-colors" />{l.name}</Link></li>))}
            </ul>
            <h4 className="font-semibold mt-6 mb-4 text-gold-400 text-xs sm:text-sm flex items-center gap-2"><Heart size={12} weight="fill" />Programs</h4>
            <ul className="space-y-2">
              {["Youth Ministry", "Women's Empowerment", "Compassionate Services", "Church Planting", "Leadership Training"].map((p, i) => (
                <li key={i}><span className="text-cream-300/50 text-xs sm:text-sm flex items-center gap-2"><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-forest-500 rounded-full" />{p}</span></li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Regional */}
          <div className="hidden sm:block">
            <h4 className="font-semibold mb-4 text-gold-400 text-xs sm:text-sm flex items-center gap-2"><MapPin size={12} weight="fill" />Regional Offices</h4>
            <div className="space-y-2">
              {[{ c: "Zimbabwe", n: 85 }, { c: "South Africa", n: 42 }, { c: "Mozambique", n: 23 }, { c: "Malawi", n: 18 }].map((o, i) => (
                <div key={i} className="glass rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 hover:bg-white/10 transition-all"><div className="flex items-center justify-between"><span className="text-cream-200/80 text-xs sm:text-sm font-medium">{o.c}</span><span className="text-[10px] sm:text-xs text-gold-400/70">{o.n}</span></div></div>
              ))}
            </div>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-400 text-xs sm:text-sm flex items-center gap-2"><Phone size={12} weight="fill" />Headquarters</h4>
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5"><MapPin size={14} className="text-cream-400/50 mt-0.5 flex-shrink-0" /><span className="text-cream-300/60">ZBCZ Headquarters<br/>Harare, Zimbabwe</span></div>
              <div className="flex items-center gap-2.5"><Phone size={14} className="text-cream-400/50 flex-shrink-0" /><a href="tel:+263712391456" className="text-cream-300/60 hover:text-gold-400 transition-colors">+263 71 239 1456</a></div>
              <div className="flex items-center gap-2.5"><Envelope size={14} className="text-cream-400/50 flex-shrink-0" /><a href="mailto:info@zbcz.org" className="text-cream-300/60 hover:text-gold-400 transition-colors">info@zbcz.org</a></div>
              <div className="flex items-center gap-2.5"><Globe size={14} className="text-cream-400/50 flex-shrink-0" /><a href="#" className="text-cream-300/60 hover:text-gold-400 transition-colors">www.zbcz.org</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[10px] sm:text-xs text-cream-300/40 text-center sm:text-left">&copy; {currentYear} Zion Bishop's Conference of Zimbabwe. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-5 text-[10px] sm:text-xs">
              <a href="#" className="text-cream-300/40 hover:text-gold-400 transition-colors">Privacy</a>
              <a href="#" className="text-cream-300/40 hover:text-gold-400 transition-colors">Terms</a>
              <a href="#" className="bg-gold-400 hover:bg-gold-300 text-maroon-900 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold transition-all flex items-center gap-1.5 shadow-lg text-[10px] sm:text-xs"><Heart size={10} weight="fill" />Donate</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scripture */}
      <div className="bg-maroon-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <p className="text-center text-[10px] sm:text-xs text-cream-400/30 italic font-heading">"But ye are a chosen generation, a royal priesthood, an holy nation" - 1 Peter 2:9</p>
        </div>
      </div>

      {/* Credit */}
      <div className="bg-maroon-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-2.5">
          <p className="text-center text-[10px] sm:text-xs text-cream-400/25 flex items-center justify-center gap-1.5">
            <Code size={12} weight="bold" />
            Designed by <a href="https://bitstudio.co.zw" target="_blank" rel="noopener noreferrer" className="text-gold-400/50 hover:text-gold-400 transition-colors font-semibold">Bit Studio</a>
            <span className="text-cream-400/15">&middot;</span>
            <a href="https://bitstudio.co.zw" target="_blank" rel="noopener noreferrer" className="text-cream-400/35 hover:text-gold-400 transition-colors">bitstudio.co.zw</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ZBCZFooter;
