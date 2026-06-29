import TechnicianForm from '@/components/TechnicianForm/TechnicianForm';

export const metadata = {
  title: 'Technician Job — AC, Fridge, Washing Machine Repair | HomeRepairPro',
  description: 'AC repair technician job Indore, Bhopal. HomeRepairPro mein kaam karo — flexible hours, per-job payment, apne city mein. Abhi apply karo — free hai.',
  keywords: 'technician job indore, ac repair job, fridge repair technician vacancy, washing machine mechanic job, geyser repair work indore bhopal',
  alternates: { canonical: 'https://homerepairpro.in/join-as-technician' },
};

const jobPostingSchema = {
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: 'Home Appliance Repair Technician',
  description: 'AC, Refrigerator, Washing Machine, Geyser repair technicians chahiye. Flexible hours, per-job payment, work in your own city.',
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
  skills: 'AC Repair, Refrigerator Repair, Washing Machine Repair, Geyser Repair',
  qualifications: 'ITI or equivalent technical training preferred',
  jobBenefits: 'Flexible hours, Per-job payment, Work in your city, Regular leads provided',
};

const BENEFITS = [
  { icon: '💰', title: 'Achha Payment', desc: 'Per-job payment. Jitna kaam utna kamao — koi fixed salary nahi, earning unlimited.' },
  { icon: '📅', title: 'Flexible Hours', desc: 'Apni marzi ke time karo kaam. Full-time ya part-time — dono option available.' },
  { icon: '📍', title: 'Apne Area Mein Kaam', desc: 'Ghar ke paas hi milenge jobs. Door jaane ki zaroorat nahi — apne city mein karo.' },
  { icon: '⭐', title: 'Regular Work Milega', desc: '200+ customers already hain. Daily new leads aate hain — consistent work guaranteed.' },
  { icon: '🏆', title: 'Brand Ki Credibility', desc: 'HomeRepairPro ke naam se kaam karo — customers ka trust automatically milta hai.' },
  { icon: '🧰', title: 'Tools Support', desc: 'Agar tools nahi hain toh bhi apply karo — ham arrange karne mein help karenge.' },
];

const PROCESS = [
  { step: '1', title: 'Form Fill Karo', desc: 'Neeche diya form fill karo — 2 minute ka kaam.' },
  { step: '2', title: 'WhatsApp Pe Details Aayegi', desc: 'Aapki details hamari team ko WhatsApp pe milegi.' },
  { step: '3', title: 'Call / Interview', desc: '24 ghante mein hamari team call karengi — short conversation.' },
  { step: '4', title: 'Kaam Shuru', desc: 'Approve hone ke baad same week se kaam milna start ho jaata hai.' },
];

export default function JoinAsTechnicianPage() {
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
            HomeRepairPro Ke Saath<br />
            <span className="text-[#F97316]">Technician Ke Roop Mein Kaam Karo</span>
          </h1>
          <p className="text-blue-200 text-base mb-6 max-w-xl mx-auto">
            Indore, Bhopal, Ujjain, Jabalpur aur 6 aur cities mein AC · Fridge · Washing Machine · Geyser repair technicians chahiye. Flexible work, regular income.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {['✅ Flexible Hours', '💰 Per-Job Payment', '📍 Apne City Mein', '⭐ Regular Work'].map((b) => (
              <span key={b} className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full font-medium">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 text-center mb-5 sm:mb-8">
            Kyun Join Karo HomeRepairPro?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-2 sm:gap-4 p-3 sm:p-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl">
                <span className="text-2xl sm:text-3xl flex-shrink-0">{b.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm">{b.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed hidden sm:block">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-7 sm:py-10 bg-gray-50 border-y border-gray-200">
        <div className="max-w-3xl mx-auto px-3 sm:px-4">
          <h2 className="text-lg sm:text-xl font-black text-gray-900 text-center mb-5 sm:mb-8">Kaise Hoga Process?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {PROCESS.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#F97316] text-white font-black text-base sm:text-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg shadow-orange-300/40">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1">{p.title}</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs leading-relaxed hidden sm:block">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-white" id="apply">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Apply Karo — Free Hai!</h2>
            <p className="text-gray-500 text-sm">Form fill karo — hamari team 24 ghante mein contact karegi.</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <TechnicianForm />
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">Common Questions</h2>
          <div className="space-y-3">
            {[
              { q: 'Kya koi fees hai apply karne ki?', a: 'Bilkul nahi — apply karna aur join karna dono free hain.' },
              { q: 'Kya experience hona zaroori hai?', a: 'Haan, kam se kam basic appliance repair experience chahiye. Fresher agar certified course kiya ho toh apply kar sakte hain.' },
              { q: 'Payment kab milegi?', a: 'Har kaam ke baad same day ya weekly settlement — kaam ke hisaab se.' },
              { q: 'Kya mujhe khud customers dhundhne honge?', a: 'Nahi! Hum leads dete hain. Aapko sirf kaam karna hai — marketing ham karte hain.' },
              { q: 'Kya main part-time apply kar sakta hoon?', a: 'Haan bilkul. Part-time, full-time, ya weekend-only — sab options available hain.' },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">❓ {faq.q}</p>
                <p className="text-gray-600 text-sm">→ {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
