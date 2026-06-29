import Image from 'next/image';
import Link from 'next/link';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import TrackableWhatsAppLink from '@/components/common/TrackableWhatsAppLink';
import LeadForm from '@/components/LeadForm/LeadForm';
import FAQ from '@/components/FAQ/FAQ';
import { services, cities, pricingPlans } from '@/utils/data';
import { localBusinessSchema, faqSchema } from '@/utils/schema';

function toBrandSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const whyUs = [
  { icon: '⚡', title: '30–60 Min Response', desc: 'Call karo — same day technician aapke ghar pe.' },
  { icon: '🛡️', title: 'Background Verified', desc: 'Trained, experienced technicians. 100% safe.' },
  { icon: '💰', title: 'Pehle Price, Phir Kaam', desc: 'Repair se pehle full estimate. Koi surprise nahi.' },
  { icon: '✅', title: '30-Day Warranty', desc: 'Same issue dobara aaye toh free repair — guaranteed.' },
];

export default function ServicePage({ service }) {
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const activePlans   = service.plans ?? pricingPlans;

  const faqs = [
    {
      q: `${service.name} ki starting price kya hai?`,
      a: `${service.name} starting ₹${service.price} se hoti hai. Visiting charge ₹99 hai jo final bill mein adjust ho jaata hai. Parts alag se charge hote hain — service se pehle poora estimate de dete hain.`,
    },
    {
      q: `Kya same day ${service.name} milti hai?`,
      a: `Haan! Bhopal, Indore, Ujjain, Jabalpur aur sabhi covered cities mein same day service available hai. Usually 30–60 minutes mein technician pahunch jaata hai.`,
    },
    {
      q: `${service.name} ke baad warranty milti hai?`,
      a: `Haan, ${service.name} pe 30-day warranty milti hai. Same problem dobara aaye toh free service milegi — koi extra charge nahi.`,
    },
    {
      q: `Aap kaunse brands ki ${service.name} karte ho?`,
      a: `Hum ${service.brands?.slice(0, 6).join(', ')} aur sabhi major brands ki ${service.name} karte hain. Koi bhi brand ho, hum fix kar sakte hain.`,
    },
    {
      q: `${service.name} ke liye appointment kaise lein?`,
      a: `Call ya WhatsApp karo +91 88895 39174 pe — ya neeche form fill karo. 30 minute mein callback guaranteed.`,
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      {/* ── Hero ── */}
      <section className="relative min-h-[440px] md:min-h-[520px] flex items-end overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.name} — certified technician at your doorstep, same-day service by HomeRepairPro`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-12 pt-24">
          <p className="text-white/50 text-xs mb-4 font-medium tracking-wide">
            Home &rsaquo; Services &rsaquo; {service.name}
          </p>

          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse inline-block" />
            Same Day Service — All MP Cities
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight mb-3">
            {service.name}<br />
            <span className="text-[#F97316]">Ghar Pe, Same Day!</span>
          </h1>

          <p className="text-white/70 text-sm md:text-base mb-6 max-w-xl leading-relaxed">
            {service.desc} — Starting ₹{service.price}. Verified technicians, GST invoice, 30-day warranty.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { val: `₹${service.price}`, label: 'Starting Price' },
              { val: '30 Min',            label: 'Avg Response' },
              { val: 'Same Day',          label: 'Service' },
              { val: '30-Day',           label: 'Warranty' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-center">
                <p className="text-white font-black text-base leading-tight">{val}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+918889539174"
              className="flex items-center justify-center gap-2.5 bg-[#F97316] hover:bg-orange-500 active:scale-95 text-white font-black py-4 px-8 rounded-2xl text-base transition-all shadow-xl shadow-orange-500/40"
            >
              <span className="text-xl">📞</span>
              <span>
                <span className="block text-xs font-semibold opacity-80 leading-none mb-0.5">Call for Free Estimate</span>
                <span className="block leading-none">88895 39174</span>
              </span>
            </a>
            <TrackableWhatsAppLink
              href={`https://wa.me/918889539174?text=Hi%2C%20I%20need%20${encodeURIComponent(service.name)}%20service`}
              service={service.name}
              sourceComponent="service_page"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-green-500 active:scale-95 text-white font-black py-4 px-8 rounded-2xl text-base transition-all shadow-xl shadow-green-500/40"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              <span>
                <span className="block text-xs font-semibold opacity-80 leading-none mb-0.5">WhatsApp Karo</span>
                <span className="block leading-none">Instant Reply</span>
              </span>
            </TrackableWhatsAppLink>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-[#1B4FD8] py-3 sm:py-4">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-2 sm:gap-3">
            {[
              { val: 'Same Day',        label: 'Service Guaranteed' },
              { val: 'Verified',        label: 'Technicians Only'   },
              { val: `₹${service.price}`, label: 'Starting Price'  },
              { val: 'GST',             label: 'Invoice Included'   },
              { val: '30 Days',         label: 'Repair Warranty'    },
            ].map(({ val, label }) => (
              <div key={label} className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 sm:px-5 sm:py-2.5 text-center min-w-[75px] sm:min-w-[100px]">
                <p className="text-white font-black text-sm sm:text-base leading-tight">✓ {val}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Services image grid ── */}
      <section className="py-8 sm:py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-5 sm:mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              More Services
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Aur Bhi Services — Sab Ghar Pe
            </h2>
            <p className="text-gray-500 text-sm hidden sm:block">Same day service · Starting ₹350 · All cities covered</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group block bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-28 sm:h-48 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.name} repair service — same-day home visit by HomeRepairPro`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                    <span className="bg-[#F97316] text-white text-[10px] sm:text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">
                      ₹{s.price}+
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-xl sm:text-2xl">{s.emoji}</span>
                </div>

                <div className="p-2.5 sm:p-5">
                  <h3 className="text-xs sm:text-lg font-black text-gray-900 mb-1 group-hover:text-[#F97316] transition-colors leading-tight">
                    {s.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-2 sm:mb-4 hidden sm:block">{s.desc}</p>

                  <div className="hidden sm:flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-50 text-[#F97316] px-2.5 py-1 rounded-full text-xs font-semibold">Same Day</span>
                    <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-full text-xs font-semibold">30-Day Warranty</span>
                    <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full text-xs font-semibold">All Brands</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base sm:text-2xl font-black text-gray-900">₹{s.price}</p>
                      <p className="text-[10px] sm:text-xs text-gray-400">Starting</p>
                    </div>
                    <div className="bg-[#F97316] text-white px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-sm flex items-center gap-1 sm:gap-1.5 shadow-md group-hover:gap-2.5 transition-all">
                      Book
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cities Grid ── */}
      <section className="py-8 sm:py-14 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-5 sm:mb-8">
            <span className="inline-block bg-blue-50 text-[#1B4FD8] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
              Service Available In
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
              {service.name} — Apni City Choose Karo
            </h2>
            <p className="text-gray-500 text-sm">Same day service — {cities.length} cities covered across MP & beyond</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${service.slug}-${city.slug}`}
                className="group bg-white rounded-xl border-2 border-gray-100 hover:border-[#1B4FD8] hover:shadow-lg transition-all p-4 text-center"
              >
                <p className="text-2xl mb-2">📍</p>
                <p className="font-black text-gray-900 text-sm group-hover:text-[#1B4FD8] transition-colors leading-tight">{city.name}</p>
                <p className="text-[#F97316] text-xs font-bold mt-1.5">₹{service.price}+ →</p>
                <p className="text-gray-400 text-[10px] mt-0.5">Same Day</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-8 sm:py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-5 sm:mb-8">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Why HomeRepairPro
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900">
              {service.name} — Kyon Choose Karein Hume?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-gray-200 hover:border-[#1B4FD8] hover:shadow-md transition-all text-center">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-xs md:text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 md:p-6 space-y-3 text-gray-700 text-sm leading-relaxed">
            <p>
              HomeRepairPro MP ka sabse trusted {service.name} provider hai. 2019 se hum Bhopal, Indore, Ujjain, Jabalpur aur doosre shehar mein hazaron ghar mein service de rahe hain.
            </p>
            <p className="hidden sm:block">
              Hamare sab technicians trained aur background-verified hain. Same day service guarantee — subah call karo, dopahar tak technician ghar pe. Emergency service bhi available hai.
            </p>
            <p>
              Transparent pricing — service shuru karne se pehle poora estimate de dete hain. Koi hidden charges nahi. Har kaam pe proper GST invoice aur 30-day warranty milti hai.
            </p>
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      {service.brands && (
        <section className="py-8 sm:py-12 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-3 sm:px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
              <div>
                <span className="inline-block bg-orange-50 text-[#F97316] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
                  All Brands
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  Brands We Repair
                </h2>
              </div>
              <p className="text-gray-400 text-sm">{service.brands.length} brands supported</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.brands.map((brand) => (
                <Link
                  key={brand}
                  href={`/${toBrandSlug(brand)}-${service.slug}`}
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-gray-700 rounded-full text-xs md:text-sm border border-gray-200 font-medium hover:border-[#F97316] hover:text-[#F97316] transition-colors"
                >
                  ✓ {brand}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Pricing ── */}
      <section className="py-8 sm:py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Pricing
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1">
              {service.name} — Price List
            </h2>
            <p className="text-gray-500 text-sm">Transparent pricing — koi hidden charges nahi</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 items-start">
            {activePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 transition-all ${
                  plan.popular
                    ? 'bg-[#1B4FD8] text-white shadow-xl shadow-blue-200 pt-9 scale-[1.02]'
                    : 'bg-white border border-gray-200 text-gray-900 hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#F97316] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`font-bold text-base mb-3 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                  {plan.name}
                </h3>
                <p className={`text-4xl font-black mb-0.5 ${plan.popular ? 'text-white' : 'text-[#1B4FD8]'}`}>
                  ₹{plan.price}
                </p>
                <p className={`text-xs mb-5 ${plan.popular ? 'text-blue-200' : 'text-gray-400'}`}>onwards</p>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className={`text-sm flex gap-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      <span className={`font-bold flex-shrink-0 ${plan.popular ? 'text-[#F97316]' : 'text-[#16A34A]'}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+918889539174"
                  className={`block text-center w-full py-3 rounded-xl font-bold text-sm transition-all ${
                    plan.popular
                      ? 'bg-white text-[#1B4FD8] hover:bg-blue-50'
                      : 'bg-[#1B4FD8] text-white hover:bg-blue-700'
                  }`}
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Form ── */}
      <section className="py-8 sm:py-12 bg-orange-50 border-b border-orange-100" id="book">
        <div className="max-w-xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-5 sm:mb-6">
            <span className="inline-block bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Free Estimate
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
              {service.name} Book Karo
            </h2>
            <p className="text-orange-700 text-sm">30 minute mein callback — No spam</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
            <LeadForm defaultService={service.name} />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ items={faqs} title={`${service.name} — Aksar Pooche Jaate Sawaal`} />

      {/* ── Technician Recruitment Strip ── */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-white text-center sm:text-left">
            <p className="font-black text-base">🛠️ Kya Aap {service.name.replace(' Repair', '').replace(' & Service', '')} Technician Hain?</p>
            <p className="text-blue-300 text-sm mt-0.5">HomeRepairPro ke saath kaam karo — flexible hours, regular income, apne city mein.</p>
          </div>
          <a
            href="/join-as-technician"
            className="flex-shrink-0 bg-white text-blue-800 font-black px-6 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors shadow-lg"
          >
            Join Our Team →
          </a>
        </div>
      </section>
    </>
  );
}
