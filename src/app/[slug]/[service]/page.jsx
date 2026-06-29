import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SEO_SERVICES, SEO_CITIES, getServiceCityMeta, getServiceCityFaqs, ALL_SERVICE_CITY_PARAMS } from '@/utils/seoData';

export async function generateStaticParams() {
  return ALL_SERVICE_CITY_PARAMS.map(({ city, service }) => ({ slug: city, service }));
}

export async function generateMetadata({ params }) {
  const { slug: citySlug, service: serviceSlug } = await params;
  const meta = getServiceCityMeta(citySlug, serviceSlug);
  if (!meta) return {};
  const isServed = SEO_CITIES[citySlug]?.served === true;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    ...(isServed ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.canonical,
    },
  };
}

export default async function ServiceCityPage({ params }) {
  const { slug: citySlug, service: serviceSlug } = await params;

  const cityData = SEO_CITIES[citySlug];
  const serviceData = SEO_SERVICES[serviceSlug];
  if (!cityData || !serviceData) notFound();

  const meta = getServiceCityMeta(citySlug, serviceSlug);
  const faqs = getServiceCityFaqs(citySlug, serviceSlug);
  const intro = cityData.intros?.[serviceSlug] ?? `${cityData.name} mein ${serviceData.name} ke liye hum 60 minute mein certified technician bhejte hain. ₹350 se shuru, 30-day warranty, GST invoice guaranteed.`;
  const reviews = (cityData.reviews ?? []).filter(
    (r) => !r.service || r.service === serviceData.name || r.service === serviceData.fullName
  );
  const waMsg = encodeURIComponent(`Hi, I need ${serviceData.name} in ${cityData.name}. Please send a technician.`);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HomeRepairPro',
    telephone: '+918889539174',
    email: 'bhopalservice998@gmail.com',
    url: 'https://homerepairpro.in',
    logo: 'https://homerepairpro.in/images/logo.png',
    image: 'https://homerepairpro.in/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: cityData.name,
      addressRegion: cityData.state,
      addressCountry: 'IN',
    },
    areaServed: cityData.areas.map((a) => ({ '@type': 'Place', name: `${a}, ${cityData.name}` })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceData.fullName} in ${cityData.name}`,
    description: meta.description,
    provider: { '@type': 'LocalBusiness', name: 'HomeRepairPro', telephone: '+918889539174' },
    areaServed: { '@type': 'City', name: cityData.name },
    offers: {
      '@type': 'Offer',
      priceRange: '₹350 - ₹3000',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://homerepairpro.in' },
      { '@type': 'ListItem', position: 2, name: cityData.name, item: `https://homerepairpro.in/${citySlug}` },
      { '@type': 'ListItem', position: 3, name: serviceData.name, item: meta.canonical },
    ],
  };

  const jsonLd = [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <ol className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-[#1B4FD8] transition-colors">Home</Link></li>
            <li className="text-gray-300">›</li>
            <li><Link href={`/${citySlug}`} className="hover:text-[#1B4FD8] transition-colors">{cityData.name}</Link></li>
            <li className="text-gray-300">›</li>
            <li className="text-gray-700 font-medium">{serviceData.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1B4FD8] via-[#2563EB] to-[#1d40b0] py-12 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <p className="text-blue-200 text-sm font-medium mb-2 uppercase tracking-widest">
            {serviceData.emoji} {cityData.name}, {cityData.state}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-4">
            {meta.h1}
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            {intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:8889539174"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B4FD8] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg">
              📞 Call Now — 8889539174
            </a>
            <a href={`https://wa.me/918889539174?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors text-sm shadow-lg">
              💬 WhatsApp Karo
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-blue-200">
            <span>✅ 60 Min Doorstep</span>
            <span>✅ ₹350 se Shuru</span>
            <span>✅ 30-Day Warranty</span>
            <span>✅ GST Invoice</span>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">

        {/* Quick Answer — AI-extractable TL;DR */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Quick Answer</p>
          <p className="text-sm text-amber-900 leading-relaxed">
            <strong>{serviceData.fullName} in {cityData.name}</strong> starts at <strong>₹350</strong>.
            Technician arrives in <strong>60 minutes</strong>. <strong>30-day warranty</strong> and GST invoice on every repair.
            Call or WhatsApp: <strong>+91 8889539174</strong>.
          </p>
        </section>

        {/* Problems Grid */}
        <section>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">
            {serviceData.name} — Common Problems We Fix
          </h2>
          <p className="text-gray-500 text-sm mb-5">Inme se koi bhi problem? 60 minute mein technician.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {serviceData.problems.map((p) => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl mb-1">{p.icon}</div>
                <div className="font-semibold text-gray-800 text-sm leading-tight">{p.title}</div>
                <div className="text-gray-400 text-xs mt-0.5">{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h2 className="text-xl font-black text-gray-900 mb-4">HomeRepairPro Ko Kyun Choose Karein?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: '🏆', label: 'Experienced', sub: 'Technicians' },
              { icon: '✅', label: 'Verified', sub: 'Technicians' },
              { icon: '🧾', label: 'GST Invoice', sub: 'Har service pe' },
              { icon: '🛡️', label: '30-Day Warranty', sub: 'Repair guarantee' },
            ].map((u) => (
              <div key={u.label} className="text-center bg-white rounded-xl p-3 shadow-sm">
                <div className="text-2xl mb-1">{u.icon}</div>
                <div className="font-bold text-gray-800 text-xs">{u.label}</div>
                <div className="text-gray-400 text-[10px]">{u.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-1">
            {serviceData.name} Pricing in {cityData.name}
          </h2>
          <p className="text-gray-500 text-sm mb-5">Pehle free estimate — koi obligation nahi. Sab prices inclusive hain.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#1B4FD8] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Service</th>
                  <th className="text-left px-4 py-3 font-semibold">Price</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-xl hidden sm:table-cell">Note</th>
                </tr>
              </thead>
              <tbody>
                {serviceData.pricing.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{row.service}</td>
                    <td className="px-4 py-3 text-[#1B4FD8] font-bold whitespace-nowrap">{row.price}</td>
                    <td className="px-4 py-3 text-gray-400 hidden sm:table-cell text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-xs mt-2">* Parts cost extra. Final price confirmed after inspection — no surprise charges.</p>
        </section>

        {/* 3-Step Process */}
        <section>
          <h2 className="text-xl font-black text-gray-900 mb-5">3 Simple Steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: '1', title: 'Call / WhatsApp', desc: '8889539174 pe call karo ya WhatsApp karo — pehle cost batate hain.' },
              { step: '2', title: '60 Min Technician', desc: `${cityData.name} mein 60 minute mein certified technician aapke ghar pe.` },
              { step: '3', title: 'Repair + Warranty', desc: 'Problem fix — GST invoice + 30-day warranty saath mein.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 items-start bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#1B4FD8] text-white font-black text-base flex items-center justify-center flex-shrink-0">{s.step}</div>
                <div>
                  <div className="font-bold text-gray-800 text-sm">{s.title}</div>
                  <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brands */}
        <section>
          <h2 className="text-xl font-black text-gray-900 mb-3">
            Brands We Service in {cityData.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {serviceData.brands.map((b) => (
              <span key={b} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* Areas */}
        <section>
          <h2 className="text-xl font-black text-gray-900 mb-1">
            Areas We Serve in {cityData.name}
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            {cityData.name} ke in sab areas mein hum {serviceData.name} ke liye available hain:
          </p>
          <div className="flex flex-wrap gap-2">
            {cityData.areas.map((area) => (
              <Link
                key={area}
                href={`/${citySlug}/${serviceSlug}/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
              >
                {area}
              </Link>
            ))}
          </div>
        </section>

        {/* Reviews */}
        {reviews.length > 0 && (
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4">
              Customer Reviews — {cityData.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">"{r.text}"</p>
                  <div className="text-xs text-gray-500 font-semibold">{r.name} — {r.area}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-black text-gray-900 mb-4">
            FAQ — {serviceData.name} in {cityData.name}
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-semibold text-gray-800 text-sm hover:text-[#1B4FD8] transition-colors">
                  {faq.q}
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related services */}
        <section>
          <h2 className="text-xl font-black text-gray-900 mb-4">
            Other Repair Services in {cityData.name}
          </h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(SEO_SERVICES)
              .filter(([slug]) => slug !== serviceSlug)
              .map(([slug, svc]) => (
                <Link key={slug} href={`/${citySlug}/${slug}`}
                  className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-2 rounded-xl hover:border-[#1B4FD8] hover:text-[#1B4FD8] transition-colors shadow-sm">
                  {svc.emoji} {svc.name}
                </Link>
              ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-br from-[#1B4FD8] to-[#1d40b0] rounded-2xl p-7 text-white text-center">
          <h2 className="text-xl font-black mb-2">
            {serviceData.name} Chahiye {cityData.name} Mein?
          </h2>
          <p className="text-blue-100 text-sm mb-5">
            Call karo ya WhatsApp karo — 60 minute mein technician, pehle price batate hain.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:8889539174"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B4FD8] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
              📞 Call — 8889539174
            </a>
            <a href={`https://wa.me/918889539174?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors text-sm">
              💬 WhatsApp
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
