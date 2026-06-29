'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { services, cities } from '@/utils/data';
import { insertLead, getTrackingData } from '@/services/supabase';
import { IMG_HERO_ALL, IMG_HERO_AC, IMG_HERO_WM, IMG_HERO_FRIDGE, IMG_ABOUT_RIGHT } from '@/utils/cdn';

const slides = [
  {
    badge: '⚡ Same Day Service · Starting ₹350',
    headline: 'Ghar Ki Har Repair',
    accent: 'Ek Call Mein!',
    sub: 'AC · Fridge · Washing Machine · Geyser · Microwave — Verified Technician, GST Invoice, 30-Day Warranty.',
    stats: [['Same Day', 'Service'], ['₹350', 'Starting Price'], ['30-Day', 'Warranty']],
    image: IMG_HERO_ALL,
    imageAlt: 'HomeRepairPro — AC, Fridge, Washing Machine, Geyser Repair Service at Doorstep',
    objectFit: 'object-contain',
  },
  {
    badge: '🏆 Verified Technicians · All Brands',
    headline: 'AC Nahi Chal Raha?',
    accent: 'Hum Fix Karenge!',
    sub: 'Gas refill, PCB repair, deep clean — 20+ brands. 30–60 min mein expert aapke ghar.',
    stats: [['30 Min', 'Response'], ['All Brands', 'Covered'], ['30-Day', 'Warranty']],
    image: IMG_HERO_AC,
    imageAlt: 'AC Repair Technician fixing split AC unit at home — HomeRepairPro same-day service',
  },
  {
    badge: '🔧 Front Load · Top Load · All Brands',
    headline: 'Washing Machine Kharab Hai?',
    accent: 'Door Step Fix!',
    sub: 'Drum issue, spin problem, drain block — Certified technician same day.',
    stats: [['Same Day', 'Service'], ['All Models', 'Covered'], ['30-Day', 'Warranty']],
    image: IMG_HERO_WM,
    imageAlt: 'Washing Machine Repair Technician fixing drum and motor at home — HomeRepairPro doorstep service',
  },
  {
    badge: '🛠️ Expert Technicians · Home & Kitchen',
    headline: 'Fridge Band Ho Gaya?',
    accent: 'Turant Repair!',
    sub: 'Cooling problem, compressor, gas leak — sab theek. All brands, same day service aapke city mein.',
    stats: [['Same Day', 'Service'], ['All Models', 'Covered'], ['30-Day', 'Warranty']],
    image: IMG_HERO_FRIDGE,
    imageAlt: 'Fridge Repair Technician fixing refrigerator cooling problem at home — HomeRepairPro',
  },
  {
    badge: '⭐ Trusted Local Service · Bhopal & Indore',
    headline: 'Professional Repair',
    accent: 'Doorstep Par!',
    sub: 'Trained technicians, genuine parts, GST invoice. AC, fridge, washing machine — sab ek jagah.',
    stats: [['Same Day', 'Service'], ['GST', 'Invoice'], ['30-Day', 'Warranty']],
    image: IMG_ABOUT_RIGHT,
    imageAlt: 'HomeRepairPro professional technician providing home appliance repair service at customer doorstep',
  },
];

export default function HeroSlider() {
  const [active, setActive]   = useState(0);
  const [paused, setPaused]   = useState(false);
  const [phone, setPhone]     = useState('');
  const [service, setService] = useState('');
  const [city, setCity]       = useState('');
  const dragStartX  = useRef(null);
  const isDragging  = useRef(false);

  const goTo = useCallback((idx) => setActive(idx), []);
  const next = useCallback(() => goTo((active + 1) % slides.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + slides.length) % slides.length), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3000);
    return () => clearInterval(t);
  }, [next, paused]);

  const SKIP_TAGS = new Set(['INPUT', 'SELECT', 'BUTTON', 'A', 'TEXTAREA', 'LABEL']);

  const onPointerDown = useCallback((e) => {
    if (SKIP_TAGS.has(e.target.tagName)) return;
    dragStartX.current = e.clientX;
    isDragging.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 8) isDragging.current = true;
  }, []);

  const onPointerUp = useCallback((e) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); }
    dragStartX.current = null;
    isDragging.current = false;
  }, [next, prev]);

  const [bookError, setBookError] = useState('');

  const handleBook = async () => {
    if (!phone) { setBookError('Phone number daalna zaroori hai'); return; }
    setBookError('');
    const svc = service || 'home appliance repair';
    const cty = city    || '';

    try {
      await insertLead({
        name: '', phone, city: cty, service: svc, message: '',
        source_component: 'hero_form',
        ...getTrackingData(),
      });
    } catch (err) { console.error('[HRP] hero insertLead:', err); }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_submit', service: svc, city: cty, source_component: 'hero_form', page_url: window.location.pathname });

    const msg = `Hi HomeRepairPro! Mujhe ${svc} chahiye${cty ? ` ${cty} mein` : ''}. Mera number: ${phone}. Please call/WhatsApp karo.`;
    window.open(`https://wa.me/918889539174?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section
      className="relative flex flex-col lg:flex-row overflow-hidden bg-[#040d1f] select-none"
      style={{ minHeight: 'calc(100vh - 104px)', touchAction: 'pan-y' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      {/* ══ LEFT — FULL-BLEED IMAGE SLIDER (reference style) ══ */}
      <div
        className="relative flex-1 overflow-hidden min-h-[300px] lg:min-h-0 cursor-grab active:cursor-grabbing"
      >

        {/* Background images — all stacked, crossfade via opacity */}
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={slide.image}
              alt={slide.imageAlt}
              fill
              priority={i === 0}
              quality={78}
              className={`${slide.objectFit ?? 'object-cover'} object-center`}
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
          </div>
        ))}

        {/* Only a light gradient at bottom for text — image stays bright like reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* ── LEFT ARROW — hidden on mobile, swipe gesture works instead ── */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 items-center justify-center text-white text-xl font-bold transition-all duration-200 hover:scale-110 shadow-lg"
        >
          ‹
        </button>

        {/* ── RIGHT ARROW — hidden on mobile ── */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm border border-white/30 items-center justify-center text-white text-xl font-bold transition-all duration-200 hover:scale-110 shadow-lg"
        >
          ›
        </button>

        {/* ── BOTTOM CONTENT — all slides stacked, crossfade ── */}
        {slides.map((slide, i) => (
          <div
            key={slide.image + '-txt'}
            className="absolute inset-x-0 bottom-0 z-10 px-4 sm:px-8 lg:px-10 pb-4 sm:pb-6 transition-all duration-[900ms] ease-in-out"
            style={{
              opacity: i === active ? 1 : 0,
              transform: i === active ? 'translateX(0)' : 'translateX(-20px)',
              pointerEvents: i === active ? 'auto' : 'none',
            }}
          >
            {/* Badge pill — hidden on mobile to reduce clutter, in DOM for SEO */}
            <div className="hidden sm:inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/50 rounded-full px-3 py-1 mb-3 backdrop-blur-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-orange-100 text-[11px] sm:text-xs font-semibold tracking-wide">{slide.badge}</span>
            </div>
            {/* SEO-only badge text, invisible on mobile */}
            <span className="sr-only">{slide.badge}</span>

            {/* Headline — smaller on mobile */}
            <h1 className="text-lg sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-1.5 sm:mb-2 drop-shadow-lg">
              {slide.headline}{' '}
              <span className="bg-gradient-to-r from-[#F97316] via-[#fb923c] to-[#FBBF24] bg-clip-text text-transparent">
                {slide.accent}
              </span>
            </h1>

            {/* Sub text — hidden on mobile */}
            <p className="text-white/75 text-xs sm:text-sm mb-4 max-w-md leading-relaxed hidden sm:block">
              {slide.sub}
            </p>
            {/* SEO-only sub text, invisible on mobile */}
            <span className="sr-only">{slide.sub}</span>

            {/* Stats + dots row */}
            <div className="flex items-center justify-end sm:justify-between flex-wrap gap-3 mb-0 sm:mb-0">
              {/* Stats — hidden on mobile to keep image visible */}
              <div className="hidden sm:flex items-center gap-5 sm:gap-8">
                {slide.stats.map(([val, lbl]) => (
                  <div key={lbl}>
                    <p className="text-white font-black text-lg sm:text-xl leading-tight drop-shadow">{val}</p>
                    <p className="text-sky-300/80 text-[10px] sm:text-xs font-medium">{lbl}</p>
                  </div>
                ))}
              </div>

              {/* Dot indicators — only render once on the active slide to avoid duplication */}
              {i === active && (
                <div className="flex items-center gap-2">
                  {slides.map((_, d) => (
                    <button
                      key={d}
                      onClick={() => goTo(d)}
                      aria-label={`Slide ${d + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        d === active
                          ? 'w-7 bg-[#F97316] shadow-[0_0_8px_rgba(249,115,22,0.8)]'
                          : 'w-2 bg-white/35 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTAs */}
            <div className="flex gap-2.5 mt-3 lg:hidden">
              <a
                href="tel:+918889539174"
                onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'call_click', source_component: 'hero_mobile_call', page_url: window.location.pathname }); }}
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#F97316] to-[#ea6a10] text-white font-bold py-2.5 rounded-xl text-sm shadow-[0_4px_16px_rgba(249,115,22,0.45)] active:scale-95 transition-all"
              >
                📞 Call Now
              </a>
              <a
                href="https://wa.me/918889539174?text=Hi%2C+I+need+appliance+repair+service"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'whatsapp_click', source_component: 'hero_mobile_wa', page_url: window.location.pathname }); }}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-2.5 rounded-xl text-sm shadow-[0_4px_14px_rgba(37,211,102,0.35)] active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ══ RIGHT — BOOKING FORM (unchanged) ══ */}
      <div className="w-full lg:w-[360px] xl:w-[400px] flex-shrink-0 flex flex-col justify-center px-5 sm:px-6 py-7 lg:py-10 relative z-20
        bg-gradient-to-br from-white via-[#f4f8ff] to-[#e8f0fe]
        border-t-2 lg:border-t-0 lg:border-l-2 border-[#F97316]/30
        shadow-[-8px_0_40px_rgba(6,17,42,0.4)]">

        {/* Decorative top accent */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F97316] via-[#fb923c] to-[#06112a] rounded-t" />

        {/* Form header */}
        <div className="mb-5">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#06112a] to-[#1e3a6e] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
            Free Estimate
          </span>
          <h2 className="text-xl font-black text-[#06112a] leading-snug">
            Repair Book Karein
          </h2>
          <p className="text-gray-500 text-sm mt-1">30 min mein callback — No spam</p>
        </div>

        {/* Form fields */}
        <div className="space-y-3">
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border-2 border-blue-100 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] bg-white appearance-none cursor-pointer transition-colors"
            >
              <option value="">— Select Service —</option>
              {services.map((svc) => (
                <option key={svc.slug} value={svc.name}>
                  {svc.emoji} {svc.name}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F97316] text-xs font-bold">▼</span>
          </div>

          <div className="relative">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border-2 border-blue-100 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] bg-white appearance-none cursor-pointer transition-colors"
            >
              <option value="">— Select City —</option>
              {cities.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F97316] text-xs font-bold">▼</span>
          </div>

          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              placeholder="📱 Mobile Number"
              className="w-full border-2 border-blue-100 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] bg-white transition-colors"
            />
            {bookError && <p className="text-red-400 text-xs mt-1 font-semibold">{bookError}</p>}
          </div>

          <button
            onClick={handleBook}
            className="w-full bg-gradient-to-r from-[#F97316] to-[#ea6a10] hover:from-[#fb923c] hover:to-[#F97316] active:scale-95 text-white font-black py-3.5 rounded-xl text-sm transition-all shadow-[0_4px_20px_rgba(249,115,22,0.45)] hover:shadow-[0_4px_28px_rgba(249,115,22,0.65)]"
          >
            Get Free Estimate →
          </button>

          <div className="flex gap-2">
            <a
              href="tel:+918889539174"
              onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'call_click', source_component: 'hero_form_call', page_url: window.location.pathname }); }}
              className="flex-1 flex items-center justify-center gap-1.5 border-2 border-[#06112a] text-[#06112a] hover:bg-[#06112a] hover:text-white font-bold py-2.5 rounded-xl text-xs transition-all duration-200"
            >
              📞 88895 39174
            </a>
            <a
              href="https://wa.me/918889539174?text=Hi%2C+I+need+appliance+repair+service"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'whatsapp_click', source_component: 'hero_form_wa', page_url: window.location.pathname }); }}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-green-500 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-[0_2px_10px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>
        </div>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5 pt-4 border-t border-blue-100">
          {['✅ No Spam', '🔒 Secure', '⚡ 30 Min Callback', '🛡️ 30-Day Warranty'].map((item) => (
            <span key={item} className="text-[#06112a]/50 text-[11px] font-medium">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
