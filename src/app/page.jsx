import Link from 'next/link';
import HeroSlider from '@/components/Hero/HeroSlider';
import AboutSection from '@/components/AboutSection/AboutSection';
import TrustBadges from '@/components/common/TrustBadges';
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid';
import BrandLogos from '@/components/BrandLogos/BrandLogos';
import CityPills from '@/components/CityPills/CityPills';
import FAQ from '@/components/FAQ/FAQ';
import LeadForm from '@/components/LeadForm/LeadForm';
import ServiceCoverage from '@/components/ServiceCoverage/ServiceCoverage';
import CustomerReviews from '@/components/CustomerReviews/CustomerReviews';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import WhatsAppGroupCTA from '@/components/common/WhatsAppGroupCTA';
import { FadeUp, SlideInLeft, SlideInRight, StaggerList, StaggerItem } from '@/components/common/AnimateIn';
import { faqs } from '@/utils/data';
import { localBusinessSchema, faqSchema } from '@/utils/schema';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* ══ HERO SLIDER ══ */}
      <HeroSlider />

      {/* ══ TRUST STATS BAR ══ */}
      <TrustBadges />

      {/* ══ ABOUT SECTION ══ */}
      <AboutSection />

      {/* ══ SERVICES GRID ══ */}
      <ServiceGrid />

      <section className="py-8 sm:py-14 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <FadeUp className="text-center mb-6 sm:mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              Simple Process
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Repair Book Karna Hai? — 3 Simple Steps
            </h2>
            <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto mb-3" />
            <p className="text-gray-500 text-xs sm:text-sm">Pehle price batayenge, phir kaam — koi surprise nahi</p>
          </FadeUp>

          <div className="relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-0.5 bg-gradient-to-r from-[#1B4FD8] via-[#F97316] to-[#25D366]" />

            <StaggerList className="grid grid-cols-3 gap-2 sm:gap-6">
              {[
                {
                  step: '01', icon: '📞',
                  iconBg: 'bg-[#1B4FD8]', shadow: 'shadow-blue-200',
                  title: 'Call / WhatsApp',
                  titleFull: 'Call Ya WhatsApp Karo',
                  desc: 'Ek call ya message — 2 minute mein expert aapki problem sunega aur estimated cost batayega.',
                },
                {
                  step: '02', icon: '🔧',
                  iconBg: 'bg-[#F97316]', shadow: 'shadow-orange-200',
                  title: 'Technician Aayega',
                  titleFull: '30-60 Min Mein Technician',
                  desc: 'Background-verified, trained technician directly aapke ghar aayega — same day service.',
                },
                {
                  step: '03', icon: '✅',
                  iconBg: 'bg-[#25D366]', shadow: 'shadow-green-200',
                  title: 'Repair + Warranty',
                  // GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam
                  // titleFull: 'Repair + GST Invoice',
                  // desc: 'Problem fix, GST invoice milegi. 30-day warranty — same issue aaye toh free repair.',
                  titleFull: 'Repair + Warranty',
                  desc: 'Problem fix, proper bill milegi. 30-day warranty — same issue aaye toh free repair.',
                },
              ].map((item) => (
                <StaggerItem key={item.step} className="relative flex flex-col items-center text-center">
                  <div className={`relative z-10 w-12 h-12 sm:w-20 sm:h-20 ${item.iconBg} rounded-xl sm:rounded-2xl flex flex-col items-center justify-center mb-2 sm:mb-4 shadow-md sm:shadow-xl ${item.shadow}`}>
                    <span className="text-xl sm:text-3xl">{item.icon}</span>
                    <span className="text-white/70 text-[9px] sm:text-[10px] font-bold mt-0.5">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-[11px] sm:hidden leading-tight mb-1 px-0.5">{item.title}</h3>
                  <h3 className="hidden sm:block font-bold text-gray-900 text-base mb-2">{item.titleFull}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs hidden sm:block">{item.desc}</p>
                </StaggerItem>
              ))}
            </StaggerList>
          </div>

          <FadeUp delay={0.2} className="mt-6 sm:mt-10 text-center">
            <a
              href="tel:+918889539174"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-xl text-sm transition-all shadow-lg shadow-orange-900/30"
            >
              📞 Abhi Book Karein — Free Estimate
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ══ CITIES ══ */}
      <CityPills />

      {/* ══ SERVICE COVERAGE ══ */}
      <ServiceCoverage />

      {/* ══ BRAND LOGOS ══ */}
      <BrandLogos />

      <section className="py-8 sm:py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <FadeUp className="text-center mb-5 sm:mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
              Why Us
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Hume Kyun Choose Karein?
            </h2>
            <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto mb-3" />
            <p className="text-gray-500 text-xs sm:text-sm">Fast, affordable aur local — koi middleman nahi</p>
          </FadeUp>

          <StaggerList className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

            {/* 30 Min Response — Watch SVG */}
            <StaggerItem>
              <Link href="/#book" className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center card-lift hover:border-[#1B4FD8] hover:shadow-md transition-all group cursor-pointer block h-full">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-7 sm:h-7">
                      <rect x="9" y="1" width="6" height="3.5" rx="1" fill="#1B4FD8" opacity="0.35"/>
                      <rect x="9" y="19.5" width="6" height="3.5" rx="1" fill="#1B4FD8" opacity="0.35"/>
                      <circle cx="12" cy="12" r="7.5" stroke="#1B4FD8" strokeWidth="1.6"/>
                      <line x1="12" y1="12" x2="12" y2="7.5" stroke="#1B4FD8" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="12" y1="12" x2="15" y2="13.8" stroke="#1B4FD8" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="12" cy="12" r="1" fill="#1B4FD8"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm md:text-base">30 Min Response</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed hidden sm:block">Call karo — 30-60 min mein technician ghar. Koi wait nahi.</p>
              </Link>
            </StaggerItem>

            {/* Verified Technicians */}
            <StaggerItem>
              <Link href="/#book" className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center card-lift hover:border-[#16A34A] hover:shadow-md transition-all group cursor-pointer block h-full">
                <div className="flex justify-center mb-2 sm:mb-3">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-7 sm:h-7">
                      <path d="M12 2L4.5 5.8v5.2C4.5 15.5 7.8 19.7 12 21.4c4.2-1.7 7.5-5.9 7.5-10.4V5.8L12 2z"
                            fill="#16A34A" fillOpacity="0.15" stroke="#16A34A" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M9 12l2 2 4-4" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm md:text-base">Verified Technicians</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed hidden sm:block">Trained, experienced technicians. Ghar mein safe service.</p>
              </Link>
            </StaggerItem>

            {/* Pehle Price Phir Kaam */}
            <StaggerItem>
              <Link href="/#book" className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center card-lift hover:border-gray-900 hover:shadow-md transition-all cursor-pointer block h-full">
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">💰</div>
                <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm md:text-base">Pehle Price, Phir Kaam</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed hidden sm:block">Starting ₹350 — repair se pehle full estimate. No surprise.</p>
              </Link>
            </StaggerItem>

            {/* 30-Day Warranty */}
            <StaggerItem>
              <Link href="/#book" className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center card-lift hover:border-gray-900 hover:shadow-md transition-all cursor-pointer block h-full">
                <div className="text-2xl sm:text-4xl mb-2 sm:mb-3">🛡️</div>
                <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm md:text-base">30-Day Warranty</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed hidden sm:block">Same problem dobara aaye toh free repair — 100% guaranteed.</p>
              </Link>
            </StaggerItem>

          </StaggerList>
        </div>
      </section>

      {/* ══ CUSTOMER REVIEWS ══ */}
      <CustomerReviews />

      {/* ══ CERTIFIED PROJECTS ══ */}

      <section className="py-10 sm:py-16 bg-gradient-to-br from-[#1B4FD8] via-[#2563EB] to-[#1d40b0] relative overflow-hidden" id="book">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-3 sm:px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">

            {/* ── Left: SEO content — compact on mobile ── */}
            <SlideInLeft>
              <span className="inline-block bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 sm:mb-5 uppercase tracking-widest">
                Free Estimate — Zero Obligation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight">
                AC, Fridge &amp; Washing Machine<br />
                <span className="text-[#F97316]">Repair at Your Doorstep</span>
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm mb-4 sm:mb-7 leading-relaxed">
                Indore, Bhopal &amp; 8 cities mein same-day certified technicians. Pehle estimate batayenge — tab kaam karenge. Starting ₹350.
              </p>

              {/* Bullet points — first 2 always visible, last 2 hidden on mobile */}
              <div className="space-y-2.5 sm:space-y-4 mb-4 sm:mb-8">
                {[
                  { icon: '⚡', title: '30-60 Min Response Time', desc: 'Call karo — certified technician ghar aata hai', mobileShow: true },
                  { icon: '💰', title: 'Starting ₹350 — No Hidden Charges', desc: 'Transparent pricing, proper bill/receipt guarantee', mobileShow: true },
                  { icon: '🛡️', title: '30-Day Free Repair Warranty', desc: 'Same problem dobara aaye — free fix guaranteed', mobileShow: false },
                  { icon: '✅', title: 'Verified Technicians', desc: 'Trained, experienced professionals only', mobileShow: false },
                ].map((item) => (
                  <div key={item.title} className={`flex items-start gap-3 ${item.mobileShow ? '' : 'hidden sm:flex'}`}>
                    <span className="text-xl sm:text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-white font-bold text-xs sm:text-sm">{item.title}</p>
                      <p className="text-blue-200 text-[10px] sm:text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="https://share.google/BE2ReHesatm7UhRpl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.91 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                  <span className="text-blue-200 text-xs">Read Google Reviews</span>
                </a>
                <div className="text-blue-200 text-xs">Serving 10+ Cities</div>
              </div>
            </SlideInLeft>

            {/* ── Right: Form ── */}
            <SlideInRight>
              <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl">
                <div className="mb-5">
                  <h3 className="text-gray-900 font-black text-xl mb-1">Book Free Estimate</h3>
                  <p className="text-gray-500 text-sm">30 minute mein callback — koi spam nahi</p>
                </div>
                <LeadForm />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                {['✅ No Spam Calls', '🔒 Data Secure', '⚡ 30 Min Callback'].map((item) => (
                  <span key={item} className="text-blue-200 text-xs font-medium">{item}</span>
                ))}
              </div>
            </SlideInRight>

          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <FAQ items={faqs} />

      {/* ══ WHATSAPP COMMUNITY ══ */}
      <WhatsAppGroupCTA />

      <section className="bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FB923C] py-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 right-10 w-64 h-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-10 left-10 w-48 h-48 rounded-full bg-orange-900/20 blur-2xl" />
        </div>
        <FadeUp className="relative z-10 max-w-2xl mx-auto px-3 sm:px-4">
          <p className="text-white font-black text-xl sm:text-2xl md:text-3xl mb-1">Aaj Repair Book Karein</p>
          <p className="text-orange-100 text-xs sm:text-sm mb-4 sm:mb-5">
            {/* GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam */}
            {/* AC · Fridge · Washing Machine · Geyser · Starting ₹350 · GST Invoice · 30-Day Warranty */}
            AC · Fridge · Washing Machine · Geyser · Starting ₹350 · 30-Day Warranty
          </p>
          <div className="flex flex-row sm:flex-row items-center justify-center gap-2 sm:gap-3">
            <a
              href="tel:+918889539174"
              className="inline-flex items-center gap-2 bg-white text-[#F97316] font-black text-sm sm:text-lg px-5 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-orange-50 transition-all shadow-xl hover:scale-105"
            >
              📞 +91 88895 39174
            </a>
            <a
              href="https://wa.me/918889539174?text=Hi%2C%20I%20need%20home%20appliance%20repair%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:bg-green-500 transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" /> WhatsApp
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
