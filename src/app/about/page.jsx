import Image from 'next/image';
import LeadForm from '@/components/LeadForm/LeadForm';
import WhatsAppGroupCTA from '@/components/common/WhatsAppGroupCTA';
import { cities, services } from '@/utils/data';
import { localBusinessSchema } from '@/utils/schema';
import { IMG_ABOUT_TECH } from '@/utils/cdn';

export const metadata = {
  title: 'About Us — HomeRepairPro | GST & MSME Registered',
  description: 'HomeRepairPro — 5+ years experience, 50+ verified technicians. GST & MSME registered independent appliance repair service in Indore, Bhopal & 8 cities.',
  alternates: { canonical: 'https://homerepairpro.in/about' },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      <section className="bg-[#1B4FD8] py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-3">
          About HomeRepairPro
        </h1>
        <p className="text-white/80 max-w-xl mx-auto">
          Central India&apos;s most trusted home appliance repair service — GST & MSME registered, serving since 2019.
        </p>
      </section>

      <section className="py-7 sm:py-10 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">

            {/* Years Experience */}
            <div className="border bg-gray-50 border-gray-200 rounded-xl p-3 sm:p-5 flex flex-col items-center">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#1B4FD8]/10 flex items-center justify-center mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#1B4FD8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
                </svg>
              </div>
              <p className="text-xl sm:text-3xl font-black text-gray-900">5+</p>
              <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Years Experience</p>
            </div>

            {/* Appliances Repaired */}
            <div className="border bg-gray-50 border-gray-200 rounded-xl p-3 sm:p-5 flex flex-col items-center">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#F97316]/10 flex items-center justify-center mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <p className="text-xl sm:text-3xl font-black text-gray-900">5+</p>
              <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Years Repairing</p>
            </div>

            {/* Verified Technicians */}
            <div className="border bg-blue-50 border-blue-200 rounded-xl p-3 sm:p-5 flex flex-col items-center">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#1B4FD8]/15 flex items-center justify-center mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#1B4FD8]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <p className="text-xl sm:text-3xl font-black text-gray-900">50+</p>
              <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Verified Technicians</p>
              <a href="/careers" className="inline-block mt-2 text-blue-600 text-xs font-bold hover:underline">
                + Join Our Team →
              </a>
            </div>

            {/* Cities Served */}
            <div className="border bg-gray-50 border-gray-200 rounded-xl p-3 sm:p-5 flex flex-col items-center">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center mb-2 sm:mb-3">
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <p className="text-xl sm:text-3xl font-black text-gray-900">10</p>
              <p className="text-gray-500 text-xs sm:text-sm font-medium mt-1">Cities Served</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-7 sm:py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <div className="grid md:grid-cols-2 gap-5 sm:gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hamare Baare Mein</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                HomeRepairPro ki shuruat 2019 mein Indore se hui thi ek simple idea ke saath — log appliance repair ke liye bahut wait karte hain aur overcharge hote hain. Humne same day, transparent pricing ke saath service dena shuru kiya.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Aaj hum Indore, Bhopal, Ujjain, Jabalpur, Jaipur aur 5 aur cities mein 50+ verified technicians ke saath service de rahe hain. Har technician background-verified aur trained hai.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hum GST registered business hain (GST No: 23DNCPG4775E14H) aur Udyam (MSME) registered hain (Udyam No: UDYAM-MP-10-0042011). Har repair ke baad proper GST invoice milti hai.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={IMG_ABOUT_TECH}
                alt="HomeRepairPro certified technician performing home appliance repair at customer home in Bhopal"
                width={600}
                height={450}
                className="w-full h-auto block"
                style={{ clipPath: 'inset(0 0 5% 0)' }}
                sizes="(max-width: 768px) 100vw, 400px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-7 sm:py-10 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Legal & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-5">
            {[
              { icon: '📋', title: 'GST Registered', detail: 'GST No: 23DNCPG4775E14H — Har service pe proper GST invoice milti hai.' },
              { icon: '🏛️', title: 'MSME Registered', detail: 'Udyam No: UDYAM-MP-10-0042011 — Government recognized small business.' },
              { icon: '✅', title: 'Verified Technicians', detail: 'Sab technicians background-verified aur professionally trained hain.' },
              { icon: '🛡️', title: '30-Day Warranty', detail: 'Har repair pe 30-day warranty — same problem dobara aaye toh free fix.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-2 sm:gap-4 p-3 sm:p-5 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-xs sm:text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm hidden sm:block">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppGroupCTA />

      <section className="py-10 bg-[#1B4FD8] border-b border-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Hamare Saath Kaam Karo</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            Skilled technicians chahiye Indore, Bhopal aur surrounding cities mein. Flexible kaam, daily/weekly payout, apne area mein leads — marketing hum karte hain.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-white text-[#1B4FD8] font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
          >
            🛠️ Technician Job Apply Karo →
          </a>
        </div>
      </section>

      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Corporate & B2B Clients</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            HomeRepairPro corporate offices aur institutional clients ko bhi AMC (Annual Maintenance Contract) aur bulk repair services provide karta hai. Humari team large-scale deployments handle kar sakti hai.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            B2B clients ke liye purchase order, work order, GST invoice sab properly maintained karte hain. Rate card ke liye contact karo.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors"
          >
            B2B Inquiry → Contact Us
          </a>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Hamare Service Areas</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map((c) => (
              <span key={c.slug} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium text-sm border border-gray-200">
                📍 {c.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-900">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Repair Book Karo</h2>
          <div className="bg-white rounded-2xl p-6">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
