import Image from 'next/image';
import Link from 'next/link';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import LeadForm from '@/components/LeadForm/LeadForm';
import FAQ from '@/components/FAQ/FAQ';
import { services, cities, pricingPlans } from '@/utils/data';

function toBrandSlug(brandName) {
  return brandName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function getProblems(serviceSlug) {
  const problemMap = {
    'ac-repair': [
      { icon: '❄️', title: 'Cooling Nahi', desc: 'AC chal raha hai par thanda nahi kar raha — gas ya compressor issue ho sakta hai.' },
      { icon: '💨', title: 'Gas Leak', desc: 'Hissing sound ya ice freezing on coils — refrigerant gas leak ka sign hai.' },
      { icon: '⚙️', title: 'Compressor Problem', desc: 'Outdoor unit start nahi ho raha ya bahut noise aa raha hai — compressor check karwao.' },
      { icon: '🔌', title: 'PCB Fault', desc: 'AC on/off nahi ho raha ya remote pe koi response nahi — PCB repair zaroori hai.' },
      { icon: '📱', title: 'Remote Not Working', desc: 'Remote se AC control nahi ho raha — sensor ya PCB issue ho sakta hai.' },
      { icon: '🔊', title: 'Unusual Noise', desc: 'AC chalne pe chattering ya grinding sound — loose parts ya fan blade problem.' },
    ],
    'washing-machine-repair': [
      { icon: '🔄', title: 'Drum Not Spinning', desc: 'Kapde wash nahi ho rahe, drum band ho gaya — belt ya motor issue.' },
      { icon: '💧', title: 'Water Not Draining', desc: 'Paani nahi nikal raha — pump ya drain hose block ho gayi.' },
      { icon: '⚠️', title: 'Error Code', desc: 'Display pe error code aa raha hai — technician se diagnose karwao.' },
      { icon: '🚪', title: 'Door Lock Problem', desc: 'Machine start nahi ho rahi, door lock nahi ho raha — latch kharab.' },
      { icon: '🔊', title: 'Noise & Vibration', desc: 'Machine bahut shake karti hai ya loud sound — drum bearings worn out.' },
      { icon: '🌊', title: 'Water Leakage', desc: 'Machine ke neeche paani aa raha hai — door seal ya pump issue.' },
    ],
    'refrigerator-repair': [
      { icon: '🧊', title: 'Not Cooling', desc: 'Fridge thanda nahi kar raha — compressor ya gas issue ho sakta hai.' },
      { icon: '⚙️', title: 'Compressor Issue', desc: 'Fridge running hai par cooling zero — compressor check karo.' },
      { icon: '❄️', title: 'Ice Maker Problem', desc: 'Ice maker kaam nahi kar raha ya jam ho gaya hai — repair karwao.' },
      { icon: '🌡️', title: 'Thermostat Fault', desc: 'Temperature regulate nahi ho rahi — bahut thanda ya bilkul nahi.' },
      { icon: '💨', title: 'Gas Leak', desc: 'Fridge cooling slow hai aur motor hamesha chalta hai — gas refill needed.' },
      { icon: '🚪', title: 'Door Seal Damaged', desc: 'Door se thandi hawa leak ho rahi — gasket replace karna padega.' },
    ],
    'geyser-repair': [
      { icon: '🔥', title: 'Not Heating', desc: 'Geyser on hai par paani thanda — heating element ya thermostat faulty.' },
      { icon: '💧', title: 'Water Leakage', desc: 'Geyser body ya connections se paani drip — immediately fix karwao.' },
      { icon: '🌡️', title: 'Thermostat Fault', desc: 'Paani kabhi bahut garam kabhi thanda — thermostat replace karna padega.' },
      { icon: '⚡', title: 'Heating Element', desc: 'Electric geyser mein heating element burn out — replacement needed.' },
      { icon: '🔆', title: 'Pilot Light', desc: 'Gas geyser ka pilot light band ho jaata hai baar baar — valve issue.' },
      { icon: '⚠️', title: 'Pressure Problem', desc: 'PRV se continuously paani drip ho raha — pressure relief valve faulty.' },
    ],
    'microwave-repair': [
      { icon: '🔥', title: 'Not Heating', desc: 'Microwave chalta hai par khaana garam nahi hota — magnetron kharab.' },
      { icon: '🔄', title: 'Turntable Problem', desc: 'Plate nahi ghoom rahi — motor ya ring kharab ho gayi.' },
      { icon: '🚪', title: 'Door Issue', desc: 'Door theek se band nahi ho raha — safety latch repair needed.' },
      { icon: '⚡', title: 'Sparking Inside', desc: 'Microwave ke andar sparks — waveguide cover ya mica plate kharab.' },
      { icon: '📟', title: 'Display Problem', desc: 'Display dim ya blank — control board ya fuse issue.' },
      { icon: '🔊', title: 'Unusual Noise', desc: 'Chalne pe loud humming ya buzzing — fan ya magnetron issue.' },
    ],
    'chimney-cleaning': [
      { icon: '💨', title: 'Not Sucking Smoke', desc: 'Chimney suction weak hai — motor ya filter problem.' },
      { icon: '🔊', title: 'Loud Noise', desc: 'Chimney chalne pe bahut noise — motor bearing ya fan blade loose.' },
      { icon: '🧹', title: 'Filter Clogged', desc: 'Oil filter grease se jam ho gaya — deep cleaning required.' },
      { icon: '⚙️', title: 'Motor Issue', desc: 'Chimney start nahi ho rahi — motor faulty ya capacitor dead.' },
      { icon: '💡', title: 'Lights Not Working', desc: 'Chimney ki LED lights nahi aa rahi — bulb ya wiring problem.' },
      { icon: '🛢️', title: 'Oil Drip', desc: 'Chimney se oil drip ho raha hai — baffle filter full ho gaya.' },
    ],
    'ro-repair': [
      { icon: '💧', title: 'Paani Kam Aa Raha Hai', desc: 'RO se flow rate bahut slow — membrane ya pre-filter clog ho gayi.' },
      { icon: '🔬', title: 'TDS High Hai', desc: 'Paani ka taste change ya TDS meter high — RO membrane replace karni padegi.' },
      { icon: '🚰', title: 'Water Leakage', desc: 'RO unit ya connections se paani leak — fitting ya O-ring issue.' },
      { icon: '💡', title: 'UV Lamp Problem', desc: 'UV indicator off ya blinking — UV lamp burn out, replace karna padega.' },
      { icon: '⚙️', title: 'Pump/Motor Issue', desc: 'Pump noise aa raha hai ya pressure low — motor ya booster pump replace.' },
      { icon: '🔴', title: 'Filter Change Alert', desc: 'Filter change indicator on — filters service time aa gaya, maintenance needed.' },
    ],
  };
  return problemMap[serviceSlug] || problemMap['ac-repair'];
}

const whyUs = [
  { icon: '⚡', title: '30-60 Min Response', desc: 'Call karo — same day technician aapke ghar pe.' },
  { icon: '🛡️', title: 'Background Verified', desc: 'Trained, experienced technicians. 100% safe.' },
  { icon: '💰', title: 'Pehle Price, Phir Kaam', desc: 'Repair se pehle full estimate. Koi surprise nahi.' },
  { icon: '✅', title: '30-Day Warranty', desc: 'Same issue dobara aaye toh free repair — guaranteed.' },
];

export default function BrandServicePage({ service, brand }) {
  const brandSlug = toBrandSlug(brand);
  const activePlans = service.plans ?? pricingPlans;
  const problems = getProblems(service.slug);
  const otherBrands = service.brands.filter((b) => b !== brand);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  // All services where this brand also appears (cross-service brand links)
  const brandOtherServices = services.filter(
    (s) => s.slug !== service.slug && s.brands?.includes(brand)
  );

  const faqs = [
    {
      q: `${brand} ${service.name} ke liye kitna charge hota hai?`,
      a: `${brand} ${service.name} starting ₹${service.price} se hoti hai. Visiting charge ₹99 hai jo service pe adjust ho jaata hai. Parts alag se charge hote hain — service shuru karne se pehle complete estimate dete hain. Call karo: +91 88895 39174.`,
    },
    {
      q: `${brand} ka technician certified hai ya generic technician aata hai?`,
      a: `HomeRepairPro ke sab technicians multi-brand trained hain aur ${brand} appliances mein experienced hain. Hamare technicians ne ${brand} ki training li hai aur genuine parts use karte hain. Background-verified bhi hain.`,
    },
    {
      q: `${brand} ${service.name} same day ho sakti hai?`,
      a: `Haan! Bhopal, Indore, Ujjain, Jabalpur aur sabhi covered cities mein same day service available hai. Subah call karo — 30-60 minutes mein technician pahunch jaata hai. Emergency service bhi available hai.`,
    },
    {
      q: `${brand} ke parts genuine milte hain?`,
      a: `Haan, hum quality-assured parts use karte hain jo ${brand} appliances ke liye compatible hain. Kisi bhi part replacement ke liye pehle aapko inform kiya jaata hai aur approval ke baad hi kaam shuru hota hai.`,
    },
    {
      q: `${brand} ${service.name} ke baad warranty milti hai?`,
      a: `Haan! Har ${service.name} pe 30-day service warranty milti hai. Same problem dobara aaye toh free service milegi — koi extra charge nahi. GST invoice bhi milti hai har service pe.`,
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[460px] md:min-h-[540px] flex items-end overflow-hidden">
        <Image
          src={service.image}
          alt={`${brand} ${service.name} by certified technician — same-day repair service by HomeRepairPro`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-12 pt-24">
          <p className="text-white/50 text-xs mb-4 font-medium tracking-wide">
            Home &rsaquo; Services &rsaquo; {service.name} &rsaquo; {brand}
          </p>

          <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse inline-block" />
            Same Day Service — Bhopal, Indore &amp; All MP
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            {brand} {service.name}<br />
            <span className="text-[#F97316]">Same Day Service!</span>
          </h1>

          <p className="text-white/70 text-sm md:text-base mb-6 max-w-xl leading-relaxed">
            Expert {brand} {service.name} in Bhopal, Indore &amp; all MP cities. Certified technicians, genuine parts, GST invoice &amp; 30-day warranty. Starting ₹{service.price}.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { val: `₹${service.price}`, label: 'Starting Price' },
              { val: '30 Min',            label: 'Avg Response'   },
              { val: 'Same Day',          label: 'Service'        },
              { val: '30-Day',            label: 'Warranty'       },
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
            <a
              href={`https://wa.me/918889539174?text=Hi%2C%20I%20need%20${encodeURIComponent(brand)}%20${encodeURIComponent(service.name)}%20service`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-green-500 active:scale-95 text-white font-black py-4 px-8 rounded-2xl text-base transition-all shadow-xl shadow-green-500/40"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              <span>
                <span className="block text-xs font-semibold opacity-80 leading-none mb-0.5">WhatsApp Karo</span>
                <span className="block leading-none">Instant Reply</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-[#1B4FD8] py-3 sm:py-4">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="flex flex-wrap justify-center md:justify-between gap-2 sm:gap-3">
            {[
              { val: 'Same Day',           label: 'Service Guaranteed' },
              { val: 'Verified',           label: 'Technicians Only'   },
              { val: `₹${service.price}`, label: 'Starting Price'     },
              { val: 'GST',               label: 'Invoice Included'    },
              { val: '30 Days',           label: 'Repair Warranty'     },
            ].map(({ val, label }) => (
              <div key={label} className="bg-white/10 border border-white/20 rounded-xl px-3 py-2 sm:px-5 sm:py-2.5 text-center min-w-[75px] sm:min-w-[100px]">
                <p className="text-white font-black text-sm sm:text-base leading-tight">✓ {val}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Problems ── */}
      <section className="py-8 sm:py-14 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-5 sm:mb-10">
            <span className="inline-block bg-orange-50 text-[#F97316] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Common Issues
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Common {brand} {service.name} Problems
            </h2>
            <p className="text-gray-500 text-sm hidden sm:block">Yeh issues aapke {brand} appliance mein aa sakte hain — hum sab fix karte hain</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-gray-100 hover:border-[#F97316] hover:shadow-md transition-all group"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{problem.icon}</div>
                <h3 className="font-black text-gray-900 text-sm sm:text-base mb-1 group-hover:text-[#F97316] transition-colors">
                  {problem.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed hidden sm:block">{problem.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="tel:+918889539174"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-black py-3.5 px-8 rounded-2xl text-sm transition-all shadow-lg shadow-orange-200"
            >
              📞 Abhi Call Karo — Free Diagnosis
            </a>
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
              {brand} {service.name} — Kyon Choose Karein Hume?
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
          <div className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 space-y-3 text-gray-700 text-sm leading-relaxed">
            <p>
              HomeRepairPro MP mein {brand} {service.name} ka sabse trusted naam hai. Hamare technicians {brand} appliances mein specially trained hain aur genuine-quality parts use karte hain.
            </p>
            <p>
              2019 se hum Bhopal, Indore, Ujjain, Jabalpur aur aur bhi cities mein hazaron {brand} appliances fix kar chuke hain. Same day service guarantee — subah call karo, dopahar tak technician ghar pe.
            </p>
            <p>
              Transparent pricing — service shuru karne se pehle poora estimate de dete hain. Koi hidden charges nahi. Har kaam pe GST invoice aur 30-day warranty milti hai.
            </p>
          </div>
        </div>
      </section>

      {/* ── Same Brand — Other Services ── */}
      {brandOtherServices.length > 0 && (
        <section className="py-7 sm:py-10 bg-blue-50 border-b border-blue-100">
          <div className="max-w-5xl mx-auto px-3 sm:px-4">
            <div className="mb-4 sm:mb-5">
              <span className="inline-block bg-[#1B4FD8] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
                {brand} — Aur Appliances
              </span>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900">
                {brand} ke Aur Appliances Bhi Repair Karte Hain
              </h2>
              <p className="text-gray-500 text-sm mt-1 hidden sm:block">
                {brand} ka koi bhi appliance kharab ho — hum sab fix karte hain
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              {brandOtherServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${toBrandSlug(brand)}-${s.slug}`}
                  className="group flex items-center gap-2 sm:gap-3 bg-white rounded-xl border-2 border-blue-100 hover:border-[#1B4FD8] hover:shadow-md transition-all p-3 sm:p-4"
                >
                  <span className="text-2xl flex-shrink-0">{s.emoji}</span>
                  <div>
                    <p className="font-black text-gray-900 text-sm group-hover:text-[#1B4FD8] transition-colors leading-tight">
                      {brand} {s.name}
                    </p>
                    <p className="text-[#F97316] text-xs font-bold mt-0.5">Starting ₹{s.price} →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other Brands ── */}
      {otherBrands.length > 0 && (
        <section className="py-10 bg-white border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-5">
              <span className="inline-block bg-blue-50 text-[#1B4FD8] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
                Other Brands
              </span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900">
                {service.name} — Aur Bhi Brands
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {otherBrands.map((b) => (
                <Link
                  key={b}
                  href={`/${toBrandSlug(b)}-${service.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:border-[#1B4FD8] hover:text-[#1B4FD8] hover:bg-blue-50 transition-all"
                >
                  {b} {service.name} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Cities ── */}
      <section className="py-8 sm:py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-5 sm:mb-8">
            <span className="inline-block bg-blue-50 text-[#1B4FD8] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2">
              Service Coverage
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
              {brand} {service.name} — Apni City Choose Karo
            </h2>
            <p className="text-gray-500 text-sm">Same day service — {cities.length} cities covered</p>
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

      {/* ── Pricing ── */}
      <section className="py-8 sm:py-14 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-10">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Pricing
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-1">
              {brand} {service.name} — Price List
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
      <section className="py-12 bg-orange-50 border-b border-orange-100" id="book">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-6">
            <span className="inline-block bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              Free Estimate
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">
              {brand} {service.name} Book Karo
            </h2>
            <p className="text-orange-700 text-sm">30 minute mein callback — No spam</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md border border-orange-100">
            <LeadForm defaultService={`${brand} ${service.name}`} />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ items={faqs} title={`${brand} ${service.name} — Aksar Pooche Jaate Sawaal`} />

      {/* ── Other Services ── */}
      <section className="py-8 sm:py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-3 sm:px-4">
          <div className="mb-5">
            <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
              More Services
            </span>
            <h2 className="text-xl md:text-2xl font-black text-gray-900">
              Aur Bhi Services — Sab Ghar Pe
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#F97316] hover:text-[#F97316] hover:shadow-sm transition-all"
              >
                <span>{s.emoji}</span>
                {s.name}
                <span className="text-gray-400 text-xs">₹{s.price}+</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
