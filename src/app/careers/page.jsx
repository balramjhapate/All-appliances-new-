import TechnicianForm from '@/components/TechnicianForm/TechnicianForm';
import Link from 'next/link';

export const metadata = {
  title: 'Join as Technician – Appliance Repair Jobs in Indore & Bhopal | HomeRepairPro',
  description: 'AC, fridge & washing machine repair technician jobs in Indore & Bhopal. Steady work, fair pay, daily payouts. Apply in 2 minutes. Call +91 8889539174.',
  keywords: 'technician job indore, ac repair job, fridge repair technician vacancy, washing machine mechanic job, geyser repair work indore bhopal',
  alternates: { canonical: 'https://homerepairpro.in/careers' },
};

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Home Appliance Repair Technician',
  description: 'AC, Refrigerator, Washing Machine, Geyser repair technicians chahiye. Flexible hours, daily/weekly payment, work in your own city. Steady leads provided — no marketing tension.',
  datePosted: '2026-01-01',
  validThrough: '2027-01-01',
  employmentType: ['FULL_TIME', 'PART_TIME', 'CONTRACTOR'],
  hiringOrganization: {
    '@type': 'Organization',
    name: 'HomeRepairPro',
    sameAs: 'https://homerepairpro.in',
  },
  jobLocation: [
    { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Indore', addressRegion: 'MP', addressCountry: 'IN' } },
    { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Bhopal', addressRegion: 'MP', addressCountry: 'IN' } },
    { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Ujjain', addressRegion: 'MP', addressCountry: 'IN' } },
    { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Jabalpur', addressRegion: 'MP', addressCountry: 'IN' } },
  ],
  baseSalary: {
    '@type': 'MonetaryAmount',
    currency: 'INR',
    value: { '@type': 'QuantitativeValue', minValue: 15000, maxValue: 50000, unitText: 'MONTH' },
  },
  skills: 'AC Repair, Refrigerator Repair, Washing Machine Repair, Geyser Repair, Chimney Cleaning, RO Repair',
  qualifications: 'ITI or equivalent technical training preferred, 1+ year experience',
  jobBenefits: 'Daily/weekly payout, Flexible hours, Work in your city, Regular leads, Support team',
};

const WHY_JOIN = [
  { icon: '💰', title: 'Daily/Weekly Payout', desc: 'Kaam karo, usi din ya us hafte payment pao. Cash flow reliable rahega.' },
  { icon: '📍', title: 'Aapke Area Ke Kaam', desc: 'Door jaane ki zaroorat nahi — apne mohalle ya city mein hi kaam milega.' },
  { icon: '📈', title: 'Steady Leads, No Marketing', desc: 'Marketing hum karte hain. Aapko sirf kaam karna hai — customers ki kami nahi.' },
  { icon: '🛠️', title: 'Support & Spare Parts Help', desc: 'Technical support aur spare parts help milegi — akele nahi ho kaam mein.' },
  { icon: '🤝', title: 'Respect + Growth', desc: 'HomeRepairPro naam ka trust automatically aata hai. Aur kaam badhta jayega.' },
];

const WHO_WE_WANT = [
  { icon: '❄️', label: 'AC Technician' },
  { icon: '🧊', label: 'Fridge Technician' },
  { icon: '🫧', label: 'Washing Machine' },
  { icon: '🚿', label: 'Geyser Technician' },
  { icon: '🍳', label: 'Chimney / Kitchen' },
  { icon: '💧', label: 'RO / Water Purifier' },
  { icon: '📡', label: 'Microwave Repair' },
];

const FAQS = [
  { q: 'Payment kaise milega?', a: 'Har kaam ke baad same day ya weekly settlement — aapki choice ke hisaab se.' },
  { q: 'Kitna kaam milega?', a: 'Starting mein 3–5 jobs/week, baad mein demand ke hisaab se badh jaata hai. Festive season mein bahut zyada kaam hota hai.' },
  { q: 'Kaunse area mein kaam milega?', a: 'Aapke apne area mein — Indore, Bhopal, Ujjain, Jabalpur aur surrounding cities. Door nahi bheja jaayega.' },
  { q: 'Kya tools chahiye?', a: 'Basic tools hone chahiye. Agar nahi hain toh bhi apply karo — ham arrange karne mein help karenge.' },
  { q: 'Kya apply karna free hai?', a: 'Bilkul free — koi fee ya deposit nahi. Form bharo, call aayegi, kaam shuru.' },
];

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#06112a] via-[#1B4FD8] to-[#06112a] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-[#F97316] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            We Are Hiring
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
            Bano HomeRepairPro Technician —<br />
            <span className="text-[#F97316]">Steady Kaam, Acchi Kamai</span>
          </h1>
          <p className="text-blue-200 text-base mb-6 max-w-xl mx-auto">
            Indore &amp; Bhopal mein AC, fridge, washing machine repair technicians chahiye. Roz kaam, time pe payment, area aapke paas. 15+ saal se chal rahi trusted team ke saath jurro.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-6">
            {['💰 Daily/Weekly Payout', '📍 Apne Area Mein', '📈 Steady Leads', '🤝 Trusted Team'].map((b) => (
              <span key={b} className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full font-medium">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-orange-500 text-white font-black px-6 py-3 rounded-xl transition-colors shadow-lg"
            >
              Apply Now — Free Hai →
            </a>
            <a
              href="tel:+918889539174"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 rounded-xl transition-colors"
            >
              📞 Call: +91 88895 39174
            </a>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 text-center mb-5 sm:mb-8">
            Kyun Join Karo HomeRepairPro?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {WHY_JOIN.map((item) => (
              <div key={item.title} className="flex gap-2 sm:gap-4 p-3 sm:p-5 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed hidden sm:block">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Want */}
      <section className="py-7 sm:py-10 bg-gray-50 border-y border-gray-200">
        <div className="max-w-3xl mx-auto px-3 sm:px-4">
          <h2 className="text-lg sm:text-xl font-black text-gray-900 text-center mb-3 sm:mb-6">Kaun Apply Kar Sakta Hai?</h2>
          <p className="text-center text-gray-500 text-sm mb-5">
            1+ saal experience · Khud ke basic tools · Smartphone · Indore ya Bhopal based
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {WHO_WE_WANT.map(({ icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 font-semibold text-xs sm:text-sm px-3 py-2 rounded-full"
              >
                <span>{icon}</span> {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section className="py-12 bg-white" id="apply">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Apply Karo — Free Hai!</h2>
            <p className="text-gray-500 text-sm">
              Form bharo — hamari team 24 ghante mein contact karegi. Ya seedha call karo:{' '}
              <a href="tel:+918889539174" className="text-[#F97316] font-bold">+91 88895 39174</a>
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <TechnicianForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">Common Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">❓ {faq.q}</p>
                <p className="text-gray-600 text-sm">→ {faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-6">
            Aur koi sawaal hai?{' '}
            <a href="https://wa.me/918889539174" className="text-[#25D366] font-bold" target="_blank" rel="noopener noreferrer">
              WhatsApp karo
            </a>{' '}
            ya{' '}
            <a href="tel:+918889539174" className="text-[#F97316] font-bold">call karo</a>.
          </p>
        </div>
      </section>
    </>
  );
}
