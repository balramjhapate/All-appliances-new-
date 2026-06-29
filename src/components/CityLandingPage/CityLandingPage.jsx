import Image from 'next/image';
import Link from 'next/link';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import TrackableWhatsAppLink from '@/components/common/TrackableWhatsAppLink';
import LeadForm from '@/components/LeadForm/LeadForm';
import FAQ from '@/components/FAQ/FAQ';
import { services, cities } from '@/utils/data';
import { IMG_HERO_ALL } from '@/utils/cdn';

export default function CityLandingPage({ city }) {
  const otherCities = cities.filter((c) => c.slug !== city.slug);

  const faqs = [
    {
      q: `${city.name} mein kaunsi home appliance repair services available hain?`,
      a: `${city.name} mein hum AC repair, washing machine repair, refrigerator repair, geyser repair, microwave repair, chimney cleaning aur RO water purifier repair karte hain — sab same day service.`,
    },
    {
      q: `${city.name} mein technician kitne time mein aayega?`,
      a: `${city.name} mein hum same day service dete hain. Usually call ke 30–60 minutes mein technician pahunch jaata hai. Peak hours mein 2 ghante tak lag sakte hain.`,
    },
    {
      q: `${city.name} mein service starting price kya hai?`,
      a: `${city.name} mein sab services starting ₹350 se hain. Visiting charge ₹99 hai jo final bill mein adjust ho jaata hai. Repair shuru karne se pehle complete estimate dete hain.`,
    },
    {
      q: `Kya ${city.name} mein sab brands repair karte ho?`,
      a: `Haan! ${city.name} mein LG, Samsung, Whirlpool, Voltas, Daikin, Godrej, Haier, IFB, Bosch, Bajaj, Havells aur sab major brands repair karte hain.`,
    },
    // GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam
    // { q: `Kya ${city.name} mein GST invoice milti hai?`, a: `Haan, hum GST registered business hain. ${city.name} mein har service pe proper GST invoice milti hai. 30-day warranty bhi milti hai.` },
    {
      q: `Kya ${city.name} mein proper bill milta hai?`,
      a: `Haan, ${city.name} mein har service ke baad proper bill/receipt milti hai. 30-day warranty bhi milti hai.`,
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[440px] md:min-h-[520px] flex items-end overflow-hidden">
        <Image
          src={IMG_HERO_ALL}
          alt={`AC, Fridge and Washing Machine repair in ${city.name} — same-day doorstep service by HomeRepairPro`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-12 pt-24">
          <p className="text-white/50 text-xs mb-4 font-medium tracking-wide">
            Home &rsaquo; {city.name}
          </p>

          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse inline-block" />
            Same Day Service Available in {city.name}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            Home Appliance Repair<br />
            <span className="text-[#F97316]">in {city.name}</span>
          </h1>

          <p className="text-white/70 text-sm md:text-base mb-6 max-w-xl leading-relaxed">
            {/* GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam */}
            {/* AC • Washing Machine • Fridge • Geyser • Microwave • RO — sab ek jagah. Verified technicians, starting ₹350, GST invoice, 30-day warranty. */}
            AC • Washing Machine • Fridge • Geyser • Microwave • RO — sab ek jagah. Verified technicians, starting ₹350, 30-day warranty.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { val: '₹350',    label: 'Starting Price' },
              { val: '30 Min',  label: 'Avg Response'   },
              { val: 'Same Day', label: 'Service'        },
              { val: '30-Day',  label: 'Warranty'       },
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
              href={`https://wa.me/918889539174?text=Hi%2C%20I%20need%20appliance%20repair%20in%20${encodeURIComponent(city.name)}`}
              city={city.name}
              sourceComponent="city_page"
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
              { val: 'Same Day',  label: 'Service Guaranteed' },
              { val: 'Verified',  label: 'Technicians Only'   },
              { val: '₹350',     label: 'Starting Price'     },
              // GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam
              // { val: 'GST',      label: 'Invoice Included'    },
              { val: 'All Brands', label: 'Covered'             },
              { val: '30 Days',  label: 'Repair Warranty'     },
            ].map(({ val, label }) => (
              <div key={label} className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 sm:px-5 sm:py-2.5 text-center min-w-[75px] sm:min-w-[100px]">
                <p className="text-white font-black text-sm sm:text-base leading-tight">✓ {val}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Services grid ── */}
      <section className="py-8 sm:py-14 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-5 sm:mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Our Services
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">
              {city.name} Mein Available Services
            </h2>
            <p className="text-gray-500 text-sm hidden sm:block">Same day service · Starting ₹350 · All brands covered</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <Link href={`/${s.slug}-${city.slug}`} className="block">
                  <div className="relative h-28 sm:h-48 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={`${s.name} repair in ${city.name} — certified technician same-day service by HomeRepairPro`}
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
                </Link>

                <div className="p-2.5 sm:p-5">
                  <Link href={`/${s.slug}-${city.slug}`}>
                    <h3 className="text-xs sm:text-lg font-black text-gray-900 mb-1 group-hover:text-[#F97316] transition-colors leading-tight">
                      {s.name} in {city.name}
                    </h3>
                  </Link>
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
                    <Link
                      href={`/${s.slug}-${city.slug}#book`}
                      className="bg-[#F97316] text-white px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-sm flex items-center gap-1 sm:gap-1.5 shadow-md hover:bg-orange-500 transition-all"
                    >
                      Book
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
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
              {city.name} Mein Hume Kyun Choose Karein?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {[
              { icon: '⚡', title: '30–60 Min Response', desc: 'Call karo — same day technician aapke ghar pe.' },
              { icon: '🛡️', title: 'Background Verified', desc: 'Trained, experienced technicians. 100% safe.' },
              { icon: '💰', title: 'Pehle Price, Phir Kaam', desc: 'Repair se pehle full estimate. Koi surprise nahi.' },
              { icon: '✅', title: '30-Day Warranty', desc: 'Same issue dobara aaye toh free repair — guaranteed.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border border-gray-200 hover:border-[#1B4FD8] hover:shadow-md transition-all text-center">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 text-xs md:text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed hidden sm:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Cities ── */}
      <section className="py-7 sm:py-10 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          <div className="mb-5">
            <span className="inline-block bg-blue-50 text-[#1B4FD8] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
              Other Cities
            </span>
            <h2 className="text-xl md:text-2xl font-black text-gray-900">
              Aur Bhi Cities Mein Service
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-[#1B4FD8] hover:text-[#1B4FD8] hover:bg-blue-50 transition-all"
              >
                📍 {c.name} →
              </Link>
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1">
              {city.name} Mein Service Book Karo
            </h2>
            <p className="text-orange-700 text-sm">30 minute mein callback — No spam</p>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-orange-100">
            <LeadForm defaultCity={city.name} />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ items={faqs} title={`${city.name} Appliance Repair — Aksar Pooche Jaate Sawaal`} />
    </>
  );
}
