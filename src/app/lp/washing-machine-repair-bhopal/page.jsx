import Image from 'next/image';
import { faqSchema, servicePageSchema, breadcrumbSchema, lpLocalBusinessSchema } from '@/utils/schema';
import LpLeadForm from '@/components/lp/LpLeadForm';
import LpCTAButtons from '@/components/lp/LpCTAButtons';
import { IMG_LP_WM_HERO, IMG_LP_WM_TECH } from '@/utils/cdn';

export const metadata = {
  title: 'Washing Machine Repair in Bhopal – 60 Min | ₹350',
  description:
    'Washing machine not spinning or draining in Bhopal? Same-day doorstep repair at ₹350, 60-min response, 30-day warranty. All brands. Call +91 8889539174.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://homerepairpro.in/lp/washing-machine-repair-bhopal' },
  openGraph: {
    title: 'Washing Machine Repair in Bhopal – 60 Min | ₹350',
    description: 'Washing machine not spinning or draining in Bhopal? Same-day doorstep repair at ₹350, 60-min response, 30-day warranty. All brands. Call +91 8889539174.',
    url: 'https://homerepairpro.in/lp/washing-machine-repair-bhopal',
    siteName: 'HomeRepairPro',
    type: 'website',
    images: [{ url: 'https://homerepairpro.in/images/lp/lp-wm-hero.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Washing Machine Repair in Bhopal – 60 Min | ₹350',
    description: 'Washing machine not spinning or draining in Bhopal? Same-day doorstep repair at ₹350, 60-min response, 30-day warranty.',
    images: ['https://homerepairpro.in/images/lp/lp-wm-hero.png'],
  },
};

const SERVICE = 'Washing Machine Repair';
const CITY = 'Bhopal';
const LP_URL = 'https://homerepairpro.in/lp/washing-machine-repair-bhopal';
const WA_TEXT = 'Hi HomeRepairPro! Mujhe Bhopal mein washing machine repair chahiye. Please jaldi callback karo. 🙏';

const STATS = [
  { num: '₹350', label: 'Starting Price', sub: 'No hidden charges' },
  { num: '60 Min', label: 'Response', sub: 'Same day guaranteed' },
  { num: '30-Day', label: 'Warranty', sub: 'Free re-service' },
  { num: 'GST', label: 'Invoice', sub: 'Every repair' },
];

const PROBLEMS = [
  { icon: '🌀', title: 'Not spinning' },
  { icon: '💧', title: 'Water not draining' },
  { icon: '🥁', title: 'Drum / belt issue' },
  { icon: '🔊', title: 'Loud noise' },
  { icon: '🔌', title: 'Not starting' },
  { icon: '💦', title: 'Water leakage' },
  { icon: '⚙️', title: 'Motor / PCB fault' },
  { icon: '🚪', title: 'Door lock / error' },
];

const WHY_US = [
  { icon: '🏆', title: '15+ Years Experience', desc: 'Bhopal ka apna trusted technician, faceless company nahi' },
  { icon: '⚡', title: '60 Min Response', desc: 'Call karo, ghar pe technician same day' },
  { icon: '💰', title: '₹350 Transparent Pricing', desc: 'Pehle estimate, no hidden charge kabhi nahi' },
  { icon: '🛡️', title: '30-Day Warranty', desc: 'Same problem dobara aaye toh free fix' },
];

const PRICING = [
  { service: 'Inspection / Basic Visit', price: '₹350' },
  { service: 'Drum / Belt Repair', price: '₹500–₹1,200' },
  { service: 'Drain / Pump Repair', price: '₹600–₹1,500' },
  { service: 'Motor / PCB Repair', price: '₹1,200–₹2,800' },
];

const STEPS = [
  { title: 'Call / WhatsApp', desc: '2 min mein problem batao, free estimate lo' },
  { title: '60 Min Mein Technician', desc: 'Bhopal ke kisi bhi area mein same day' },
  { title: 'Repair + Warranty', desc: 'GST invoice + 30-day warranty guaranteed' },
];

const BRANDS = ['LG', 'Samsung', 'IFB', 'Whirlpool', 'Bosch', 'Godrej', 'Haier', 'Panasonic', 'Siemens'];

const REVIEWS = [
  {
    text: 'LG washing machine spin nahi ho rahi thi aur paani nahi nikal raha tha. Same day service mili, technician ne drum belt change kiya. Ab perfectly chal rahi hai. Pehle price bataya phir kaam — bahut honest.',
    name: 'Priya Verma',
    area: 'Kolar, Bhopal',
  },
  {
    text: 'IFB front load machine error de rahi thi. Bhopal mein 50 minute mein technician aaya, PCB issue fix kiya, ₹1400 fair price, warranty bhi mili. Highly recommend!',
    name: 'Rakesh Soni',
    area: 'MP Nagar, Bhopal',
  },
];

const FAQS = [
  { q: 'Bhopal mein washing machine repair ka charge kya hai?', a: 'Inspection ₹350 se shuru; repair fault ke hisaab se. Pehle free estimate — koi obligation nahi.' },
  { q: 'Same day repair milta hai?', a: 'Haan, call ke 60 minute mein Bhopal ke kisi bhi area mein technician aata hai.' },
  { q: 'Front load aur top load dono repair karte ho?', a: 'Haan — front load, top load, semi aur fully automatic sab types.' },
  { q: 'Kaunse brands repair karte ho?', a: 'LG, Samsung, IFB, Whirlpool, Bosch, Godrej, Haier — sab brands.' },
  { q: 'Warranty milti hai?', a: 'Haan, 30-day repair warranty. Same problem dobara aaye toh free service.' },
];

const TRUST_CHIPS = ['⚡ 60 Min Doorstep', '💰 ₹350 se Shuru', '🛡️ 30-Day Warranty', '🧾 GST Invoice'];

function ld(schema) {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function WashingMachineRepairBhopalLP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld(servicePageSchema(SERVICE, CITY, LP_URL)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld(faqSchema(FAQS.map(f => ({ q: f.q, a: f.a })))) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld(lpLocalBusinessSchema({ city: CITY, service: SERVICE, url: LP_URL })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld(breadcrumbSchema([{ name: 'Home', url: 'https://homerepairpro.in' }, { name: 'Washing Machine Repair Bhopal', url: LP_URL }])) }} />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="bg-[#071a4f]">
        <div>

          {/* ── MOBILE layout: image → form → info ── */}
          <div className="md:hidden">

            {/* 1. Hero image with H1 overlay */}
            <div className="relative h-60 overflow-hidden">
              <Image
                src={IMG_LP_WM_HERO}
                alt="Technician repairing a washing machine at a home in Bhopal"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a4f] via-[#071a4f]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-4">
                <h1 className="text-white text-[1.5rem] font-extrabold leading-tight drop-shadow">
                  Washing Machine Chalti Nahi?
                  <span className="block text-[#F97316]">60 Min Mein Fix — Bhopal</span>
                </h1>
              </div>
            </div>

            {/* 2. Form immediately below image */}
            <div className="px-4 pt-4">
              <div className="bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                  <p className="text-xs font-semibold text-green-700">Technician available aaj</p>
                </div>
                <LpLeadForm
                  sourceComponent="lp_wm_form"
                  waSourceComponent="lp_wm_whatsapp"
                  callSourceComponent="lp_wm_call"
                  defaultService={SERVICE}
                  defaultCity={CITY}
                />
              </div>
            </div>

            {/* 3. Subhead + chips + CTA below form */}
            <div className="px-5 pt-5 pb-6 text-white">
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Spin nahi ho raha, paani nahi nikal raha, ya drum/motor problem — Bhopal ka 15+ saal experienced technician same day.{' '}
                <strong className="text-white">Pehle price, phir kaam.</strong>
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {TRUST_CHIPS.map((chip) => (
                  <span key={chip} className="bg-white/15 border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {chip}
                  </span>
                ))}
              </div>
              <LpCTAButtons
                waSourceComponent="lp_wm_whatsapp"
                callSourceComponent="lp_wm_call"
                service={SERVICE}
                waText={WA_TEXT}
                size="sm"
              />
            </div>
          </div>

          {/* ── DESKTOP layout: main-site hero style ── */}
          <div className="hidden md:flex" style={{ minHeight: 'calc(100vh - 104px)' }}>

            {/* Left: full-bleed image with text at bottom */}
            <div className="relative flex-1 overflow-hidden bg-[#040d1f]">
              <Image
                src={IMG_LP_WM_HERO}
                alt="Technician repairing a washing machine at a home in Bhopal"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 z-10 px-8 xl:px-12 pb-10">
                <div className="inline-flex items-center gap-2 bg-[#F97316]/20 border border-[#F97316]/50 rounded-full px-3 py-1 mb-4 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                  <span className="text-orange-100 text-xs font-semibold tracking-wide">⚡ Same Day Service · ₹350 se Shuru · 30-Day Warranty</span>
                </div>

                <h1 className="text-4xl xl:text-5xl font-black text-white leading-tight mb-3 drop-shadow-lg">
                  Washing Machine Chalti Nahi?{' '}
                  <span className="bg-gradient-to-r from-[#F97316] via-[#fb923c] to-[#FBBF24] bg-clip-text text-transparent">
                    60 Min Mein Fix!
                  </span>
                </h1>

                <p className="text-white/75 text-sm mb-6 max-w-lg leading-relaxed">
                  Spin nahi ho raha, paani nahi nikal raha ya drum/motor problem — Bhopal ka 15+ saal experienced technician aapke ghar, same day. Pehle price, phir kaam.
                </p>

                <div className="flex items-center gap-8">
                  {[['₹350', 'Starting Price'], ['60 Min', 'Response'], ['30-Day', 'Warranty']].map(([val, lbl]) => (
                    <div key={lbl}>
                      <p className="text-white font-black text-xl leading-tight drop-shadow">{val}</p>
                      <p className="text-sky-300/80 text-xs font-medium">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form panel — same style as main site */}
            <div className="w-[360px] xl:w-[400px] flex-shrink-0 flex flex-col justify-center px-6 py-10 relative z-20
              bg-gradient-to-br from-white via-[#f4f8ff] to-[#e8f0fe]
              border-l-2 border-[#F97316]/30
              shadow-[-8px_0_40px_rgba(6,17,42,0.4)]">

              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F97316] via-[#fb923c] to-[#06112a]" />

              <div className="mb-5">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#06112a] to-[#1e3a6e] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wide shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" />
                  Free Estimate
                </span>
                <h2 className="text-xl font-black text-[#06112a] leading-snug">Washing Machine Repair Book Karein</h2>
                <p className="text-gray-500 text-sm mt-1">30 min mein callback — No spam</p>
              </div>

              <LpLeadForm
                sourceComponent="lp_wm_form"
                waSourceComponent="lp_wm_whatsapp"
                callSourceComponent="lp_wm_call"
                defaultService={SERVICE}
                defaultCity={CITY}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {STATS.map((s) => (
              <div key={s.label} className="text-center px-4 py-2">
                {s.label === 'Google Rating' ? (
                  <div className="flex items-center justify-center gap-1.5">
                    <GoogleIcon />
                    <p className="text-2xl md:text-3xl font-black text-[#1B4FD8]">{s.num}</p>
                  </div>
                ) : (
                  <p className="text-2xl md:text-3xl font-black text-[#1B4FD8]">{s.num}</p>
                )}
                <p className="font-bold text-gray-800 text-sm mt-0.5">{s.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Washing Machine Ki Kaunsi Problem Fix Karte Hain?</h2>
            <p className="text-gray-500 mt-2 text-sm">Bhopal mein in sabhi problems ke liye expert technician</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PROBLEMS.map((p) => (
              <div key={p.title} className="bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-3">{p.icon}</div>
                <p className="text-sm font-semibold text-gray-800 leading-tight">{p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">HomeRepairPro Kyun Chunein?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {WHY_US.map((w) => (
              <div key={w.title} className="flex items-start gap-4 bg-blue-50 rounded-xl p-5 border-l-4 border-[#1B4FD8]">
                <span className="text-3xl flex-shrink-0">{w.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{w.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICIAN ── */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 md:flex md:items-center md:gap-12">
          <div className="flex justify-center mb-8 md:mb-0 md:flex-shrink-0">
            <div className="relative">
              <Image
                src={IMG_LP_WM_TECH}
                alt="HomeRepairPro verified washing machine technician in Bhopal"
                width={224} height={224}
                className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-2xl ring-4 ring-white"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                ✓ Verified Technician
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3">Bhopal Ka Apna Trusted Technician</h2>
            <p className="text-gray-600 leading-relaxed mb-5 text-sm md:text-base">
              15+ saal se Bhopal mein ghar ghar jaake washing machine repair karte hain. LG, Samsung, IFB, Whirlpool — sab brands mein expert.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['GST invoice dete hain', '30-day warranty', 'Original spare parts', 'Transparent pricing'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-10 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Transparent Pricing</h2>
            <p className="text-gray-500 mt-2 text-sm">Pehle estimate, phir kaam — koi hidden charge nahi</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead><tr className="bg-[#1B4FD8] text-white"><th className="text-left px-5 py-3.5 font-semibold">Service</th><th className="text-right px-5 py-3.5 font-semibold">Price</th></tr></thead>
              <tbody className="divide-y divide-gray-100">
                {PRICING.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-5 py-4 text-gray-800">{row.service}</td>
                    <td className="px-5 py-4 text-right font-bold text-[#1B4FD8]">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">* Parts cost extra. Final price after inspection.</p>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">3 Steps Mein Repair</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 rounded-full bg-[#1B4FD8] text-white flex items-center justify-center text-2xl font-black mx-auto mb-4 shadow-lg">{i + 1}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-5">Sab Brands Repair Karte Hain</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {BRANDS.map((b) => (
              <span key={b} className="bg-blue-50 text-[#1B4FD8] text-sm font-bold px-4 py-2 rounded-full border border-blue-100">{b}</span>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">Front load · Top load · Semi automatic · Fully automatic</p>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-10 md:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Washing Machine Repair Customers Ka Kehna
            </h2>
            <a
              href="https://share.google/BE2ReHesatm7UhRpl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 bg-white border border-gray-200 hover:border-yellow-400 rounded-full px-4 py-1.5 shadow-sm transition-all"
            >
              <GoogleIcon />
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-sm font-semibold text-gray-700">Read Our Google Reviews</span>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-3 right-4 text-6xl text-gray-100 font-serif leading-none select-none">"</div>
                <div className="flex items-center gap-2 mb-3">
                  <GoogleIcon />
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                  <span className="text-xs text-gray-400 font-medium">Google</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 relative z-10">"{r.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B4FD8] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.area} · Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href="https://share.google/BE2ReHesatm7UhRpl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-400 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl shadow-sm transition-all"
            >
              <GoogleIcon />
              Saare Google Reviews Padho
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Aksar Puche Jane Wale Sawaal</h2>
          </div>
          <div className="rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100 shadow-sm">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-5 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#1B4FD8] text-white text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1.5 text-base">{faq.q}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#071a4f] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-3">Aaj hi book karo</p>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">Washing Machine Repair Chahiye?</h2>
          <p className="text-blue-200 text-base mb-7">Bhopal mein 60 minute mein technician — pehle price batate hain.</p>
          <LpCTAButtons waSourceComponent="lp_wm_whatsapp" callSourceComponent="lp_wm_call" service={SERVICE} waText={WA_TEXT} />
          <div className="mt-8 bg-white rounded-2xl p-6 max-w-md mx-auto text-gray-900 shadow-2xl">
            <LpLeadForm sourceComponent="lp_wm_form" waSourceComponent="lp_wm_whatsapp" callSourceComponent="lp_wm_call" defaultService={SERVICE} defaultCity={CITY} />
          </div>
        </div>
      </section>

      {/* ── AREA COVERAGE ── */}
      <section className="bg-gray-900 border-t border-gray-800 py-5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">Washing machine repair in Bhopal</strong> — Kolar, MP Nagar, Arera Colony, Awadhpuri, Bairagarh, Katara Hills, Karond, Piplani, Shahpura, Govindpura, Misrod, Bag Mugaliya.
            LG · Samsung · IFB · Whirlpool washing machine repair Bhopal. Front load · Fully automatic repair Bhopal.
          </p>
        </div>
      </section>
    </>
  );
}
