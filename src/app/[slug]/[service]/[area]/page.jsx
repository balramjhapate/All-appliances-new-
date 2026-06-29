import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SEO_SERVICES, SEO_CITIES, getAreaFaqs } from '@/utils/seoData';

export async function generateStaticParams() {
  const params = [];
  for (const [citySlug, cityData] of Object.entries(SEO_CITIES)) {
    for (const serviceSlug of Object.keys(SEO_SERVICES)) {
      for (const area of cityData.areas) {
        params.push({
          slug: citySlug,
          service: serviceSlug,
          area: area.toLowerCase().replace(/\s+/g, '-'),
        });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug: citySlug, service: serviceSlug, area: areaSlug } = await params;
  const cityData = SEO_CITIES[citySlug];
  const serviceData = SEO_SERVICES[serviceSlug];
  if (!cityData || !serviceData) return {};
  const areaName = areaSlug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const isServed = cityData.served === true;
  const hasContent = !!cityData.areaIntros?.[areaSlug];
  const shouldIndex = isServed && hasContent;
  return {
    title: `${serviceData.name} in ${areaName}, ${cityData.name} – 60 Min Service | HomeRepairPro`,
    description: `${serviceData.mainProblem} in ${areaName}? Same-day ${serviceData.name} at ₹350, 60-min response, 30-day warranty. Call +91 8889539174.`,
    alternates: { canonical: `https://homerepairpro.in/${citySlug}/${serviceSlug}/${areaSlug}` },
    ...(shouldIndex ? {} : { robots: { index: false, follow: true } }),
  };
}

export default async function AreaPage({ params }) {
  const { slug: citySlug, service: serviceSlug, area: areaSlug } = await params;
  const cityData = SEO_CITIES[citySlug];
  const serviceData = SEO_SERVICES[serviceSlug];
  if (!cityData || !serviceData) notFound();

  const areaName = areaSlug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const waMsg = encodeURIComponent(`Hi, I need ${serviceData.name} in ${areaName}, ${cityData.name}.`);
  const nearbyAreas = cityData.areas
    .filter((a) => a.toLowerCase().replace(/\s+/g, '-') !== areaSlug)
    .slice(0, 6);

  const areaIntro = cityData.areaIntros?.[areaSlug] ?? null;
  const faqs = getAreaFaqs(citySlug, areaSlug, serviceSlug);
  const reviews = cityData.reviews ?? [];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://homerepairpro.in' },
      { '@type': 'ListItem', position: 2, name: cityData.name, item: `https://homerepairpro.in/${citySlug}` },
      { '@type': 'ListItem', position: 3, name: serviceData.name, item: `https://homerepairpro.in/${citySlug}/${serviceSlug}` },
      { '@type': 'ListItem', position: 4, name: areaName, item: `https://homerepairpro.in/${citySlug}/${serviceSlug}/${areaSlug}` },
    ],
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]).replace(/</g, '\\u003c') }}
      />

      <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <ol className="flex items-center gap-1.5 text-xs text-gray-500 flex-wrap">
            <li><Link href="/" className="hover:text-[#1B4FD8] transition-colors">Home</Link></li>
            <li className="text-gray-300">›</li>
            <li><Link href={`/${citySlug}`} className="hover:text-[#1B4FD8] transition-colors">{cityData.name}</Link></li>
            <li className="text-gray-300">›</li>
            <li><Link href={`/${citySlug}/${serviceSlug}`} className="hover:text-[#1B4FD8] transition-colors">{serviceData.name}</Link></li>
            <li className="text-gray-300">›</li>
            <li className="text-gray-700 font-medium">{areaName}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-[#1B4FD8] via-[#2563EB] to-[#1d40b0] py-10 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-blue-200 text-sm mb-2">{serviceData.emoji} {areaName}, {cityData.name}</p>
          <h1 className="text-2xl sm:text-3xl font-black mb-3 leading-tight">
            {serviceData.name} in {areaName}, {cityData.name}
          </h1>
          <p className="text-blue-100 text-base mb-5">
            {/* GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam */}
            {/* Technician reaches {areaName} in 60 minutes. ₹350 se shuru, 30-day warranty, GST invoice. */}
            Technician reaches {areaName} in 60 minutes. ₹350 se shuru, 30-day warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:8889539174"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1B4FD8] font-bold px-6 py-3 rounded-xl text-sm shadow-lg hover:bg-blue-50 transition-colors">
              📞 Call — 8889539174
            </a>
            <a href={`https://wa.me/918889539174?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-lg hover:bg-green-600 transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">

        {/* Area-specific intro */}
        {areaIntro && (
          <section className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Quick Answer</p>
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>{serviceData.name} in {areaName}, {cityData.name}</strong> starts at <strong>₹350</strong>.
              {/* GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam */}
              {/* Technician arrives in <strong>60 minutes</strong>. <strong>30-day warranty</strong> and GST invoice on every repair. */}
              Technician arrives in <strong>60 minutes</strong>. <strong>30-day warranty</strong> on every repair.
              Call or WhatsApp: <strong>+91 8889539174</strong>.
            </p>
          </section>
        )}

        {areaIntro && (
          <section>
            <h2 className="text-lg font-black text-gray-900 mb-2">{serviceData.name} in {areaName} — Local Info</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{areaIntro}</p>
          </section>
        )}

        <section className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h2 className="text-lg font-black text-gray-900 mb-3">Why HomeRepairPro in {areaName}?</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✅ Technician reaches {areaName} in under 60 minutes</li>
            <li>✅ Trained, verified technicians</li>
            <li>✅ ₹350 starting price — transparent, no hidden charges</li>
            {/* GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam */}
            {/* <li>✅ 30-day repair warranty + GST invoice</li> */}
            <li>✅ 30-day repair warranty + proper bill/receipt</li>
            <li>✅ All brands: {serviceData.brands.slice(0,5).join(', ')} & more</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-black text-gray-900 mb-3">Problems We Fix</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {serviceData.problems.map((p) => (
              <div key={p.title} className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                <div className="text-xl mb-1">{p.icon}</div>
                <div className="font-semibold text-gray-800 text-xs">{p.title}</div>
              </div>
            ))}
          </div>
        </section>

        {nearbyAreas.length > 0 && (
          <section>
            <h2 className="text-lg font-black text-gray-900 mb-3">Nearby Areas We Also Serve</h2>
            <div className="flex flex-wrap gap-2">
              {nearbyAreas.map((a) => (
                <Link key={a}
                  href={`/${citySlug}/${serviceSlug}/${a.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
                  {a}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* City reviews */}
        {reviews.length > 0 && (
          <section>
            <h2 className="text-lg font-black text-gray-900 mb-4">Customer Reviews — {cityData.name}</h2>
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

        {/* Area×Service FAQ */}
        {faqs.length > 0 && (
          <section>
            <h2 className="text-lg font-black text-gray-900 mb-4">
              FAQ — {serviceData.name} in {areaName}
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
        )}

        <section>
          <Link href={`/${citySlug}/${serviceSlug}`}
            className="inline-flex items-center gap-1 text-[#1B4FD8] text-sm font-semibold hover:underline">
            ← Back to {serviceData.name} in {cityData.name}
          </Link>
        </section>
      </div>
    </>
  );
}
