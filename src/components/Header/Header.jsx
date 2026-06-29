'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { services } from '@/utils/data';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import PhoneCaptureSheet from '@/components/common/PhoneCaptureSheet';
import { IMG_LOGO } from '@/utils/cdn';

const CALL_BTN = {
  ios: { x: -50, y: 0 },
  android: { x: -5, y: 0 },
};

const LOGO = {
  desktop: { x: -20, y: 4.3, scale: 1.30, w: 260, h: 60 },
  mobile:  { x: -50, y: 2,   scale: 1.4,  w: 215, h: 56 },
};

const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About',   href: '/about' },
  { label: 'Blog',    href: '/blog' },
  { label: 'Booking', href: '/contact' },
];

const MOBILE_LINKS = [
  { label: '🏠 Home',     href: '/' },
  { label: '🔧 Services', href: '/services' },
  { label: '👤 About Us', href: '/about' },
  { label: '📝 Blog',     href: '/blog' },
  { label: '📅 Booking',  href: '/contact' },
  { label: '🛠️ Join as Technician', href: '/careers', highlight: true },
];

export default function Header({ headerTop = 40, translateY = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isIos, setIsIos]       = useState(false);
  const [sheet, setSheet]       = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    setIsIos(/iP(hone|ad|od)/.test(navigator.userAgent));
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      data-site-header
      className={`fixed left-0 right-0 z-50 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-200' : 'bg-white'}`}
      style={{ top: headerTop, transform: `translateY(${translateY}px)`, transition: 'top 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)' }}
    >
      {/* Top orange accent line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-90" />

      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-2">

        {/* Desktop Logo */}
        <div
          className="hidden md:block flex-shrink-0"
          style={{ width: LOGO.desktop.w, height: LOGO.desktop.h }}
        >
          <Link
            href="/"
            onClick={close}
            className="flex items-center w-full h-full"
            style={{
              transform: `translate(${LOGO.desktop.x}px, ${LOGO.desktop.y}px) scale(${LOGO.desktop.scale})`,
              transformOrigin: 'left center',
              display: 'block',
            }}
          >
            <Image src={IMG_LOGO} alt="HomeRepairPro — Home Appliance Repair Services" width={300} height={100} className="h-full w-full object-contain" priority />
          </Link>
        </div>

        {/* Mobile Logo */}
        <div
          className="flex md:hidden flex-shrink-0"
          style={{ width: LOGO.mobile.w, height: LOGO.mobile.h, position: 'relative', zIndex: 1 }}
        >
          <Link
            href="/"
            onClick={close}
            className="flex items-center w-full h-full"
            style={{
              transform: `translate(${LOGO.mobile.x}px, ${LOGO.mobile.y}px) scale(${LOGO.mobile.scale})`,
              transformOrigin: 'left center',
              display: 'block',
            }}
          >
            <Image src={IMG_LOGO} alt="HomeRepairPro — Home Appliance Repair Services" width={300} height={100} className="h-full w-full object-contain" priority />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 mx-auto">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors duration-200 group rounded-lg hover:bg-gray-50"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-[#F97316] to-[#fb923c] rounded-full transition-all duration-300 group-hover:w-3/4" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <Link
            href="/careers"
            className="text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors duration-200"
          >
            Join as Technician
          </Link>
          <button
            onClick={() => setSheet('whatsapp')}
            className="flex items-center gap-1.5 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-1.5 rounded-xl text-sm font-bold transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </button>
          <button
            onClick={() => setSheet('call')}
            className="flex items-center gap-1.5 bg-gradient-to-r from-[#F97316] to-[#ea6a10] hover:from-[#fb923c] hover:to-[#F97316] border-2 border-[#F97316]/70 text-white px-4 py-1.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-[0_0_14px_rgba(249,115,22,0.35)] hover:shadow-[0_0_22px_rgba(249,115,22,0.6)]"
          >
            📞 88895 39174
          </button>
        </div>

        {/* Mobile right actions */}
        <div className="ml-auto flex items-center gap-2 md:hidden" style={{ position: 'relative', zIndex: 50 }}>
          <button
            onClick={() => setSheet('call')}
            className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-[#F97316] to-[#ea6a10] text-white rounded-xl text-lg flex-shrink-0 shadow-[0_0_12px_rgba(249,115,22,0.5)]"
            aria-label="Call us"
            style={{
              transform: `translate(${isIos ? CALL_BTN.ios.x : CALL_BTN.android.x}px, ${isIos ? CALL_BTN.ios.y : CALL_BTN.android.y}px)`,
            }}
          >
            📞
          </button>
          <a
            href="#"
            role="button"
            onClick={(e) => { e.preventDefault(); setMenuOpen((v) => !v); }}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl bg-gray-100 border border-gray-200 flex-shrink-0 cursor-pointer select-none hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-[2px] w-6 bg-gray-700 rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[2px] w-5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[2px] w-6 bg-gray-700 rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#F97316]/40 to-transparent" />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-xl border-t border-gray-100">

          {/* Nav links */}
          <div className="px-3 pt-2 pb-1">
            {MOBILE_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={`flex items-center justify-between py-3 px-4 rounded-xl font-semibold transition-colors mb-0.5 ${
                  item.highlight
                    ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
                    : 'text-gray-700 hover:bg-orange-50 hover:text-gray-900'
                }`}
              >
                <span>{item.label}</span>
                <span className={`text-lg ${item.highlight ? 'text-blue-500' : 'text-[#F97316]'}`}>›</span>
              </Link>
            ))}
          </div>

          {/* Services grid */}
          <div className="px-3 pb-3 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest px-1 pt-3 pb-2">Our Services</p>
            <div className="grid grid-cols-2 gap-1.5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}-indore`}
                  onClick={close}
                  className="flex items-center gap-2 py-2.5 px-3 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-[#F97316]/40 rounded-xl transition-all duration-200"
                >
                  <span className="text-base">{s.emoji}</span>
                  <span className="text-xs font-semibold text-gray-700 leading-tight">
                    {s.name.replace(' Repair', '').replace(' Cleaning', '')}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="px-3 pb-4 pt-1 flex gap-2 border-t border-gray-100">
            <button
              onClick={() => { close(); setSheet('call'); }}
              className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#F97316] to-[#ea6a10] text-white py-3.5 rounded-xl font-bold text-sm shadow-md"
            >
              📞 Call Now
            </button>
            <button
              onClick={() => { close(); setSheet('whatsapp'); }}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-sm shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </button>
          </div>
        </div>
      )}

      {sheet && (
        <PhoneCaptureSheet type={sheet} onClose={() => setSheet(null)} />
      )}
    </header>
  );
}
