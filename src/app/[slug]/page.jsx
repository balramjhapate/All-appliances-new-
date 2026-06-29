import { notFound } from 'next/navigation';
import { services, cities } from '@/utils/data';
import { SEO_CITIES } from '@/utils/seoData';
import ServiceCityPage from '@/components/ServiceCityPage/ServiceCityPage';
import ServicePage from '@/components/ServicePage/ServicePage';
import BrandServicePage from '@/components/BrandServicePage/BrandServicePage';
import CityLandingPage from '@/components/CityLandingPage/CityLandingPage';

function toBrandSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function parseSlug(slug) {
  // 1. Try service + city combo
  for (const service of services) {
    for (const city of cities) {
      if (slug === `${service.slug}-${city.slug}`) {
        return { type: 'city', service, city };
      }
    }
  }
  // 2. Try service-only
  const service = services.find((s) => s.slug === slug);
  if (service) return { type: 'service', service };

  // 3. Try brand + service: slug = {brandSlug}-{serviceSlug}
  for (const svc of services) {
    if (slug.endsWith(`-${svc.slug}`)) {
      const brandPrefix = slug.slice(0, slug.length - svc.slug.length - 1);
      const brand = svc.brands?.find((b) => toBrandSlug(b) === brandPrefix);
      if (brand) return { type: 'brand', service: svc, brand };
    }
  }

  // 4. Try city-only: /indore, /bhopal, etc.
  const city = cities.find((c) => c.slug === slug);
  if (city) return { type: 'city-landing', city };

  return null;
}

export async function generateStaticParams() {
  const params = [];
  // City landing pages: /indore, /bhopal, etc.
  for (const city of cities) {
    params.push({ slug: city.slug });
  }
  for (const service of services) {
    params.push({ slug: service.slug });
    for (const city of cities) {
      params.push({ slug: `${service.slug}-${city.slug}` });
    }
    for (const brand of service.brands ?? []) {
      params.push({ slug: `${toBrandSlug(brand)}-${service.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) return {};

  if (parsed.type === 'city') {
    const { service, city } = parsed;
    return {
      title: `${service.name} in ${city.name} — Same Day Service | HomeRepairPro`,
      // GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam
      // description: `Best ${service.name} in ${city.name}. Call +91 88895 39174. Same day, verified technicians, starting ₹${service.price}. GST invoice, 30-day warranty.`,
      description: `Best ${service.name} in ${city.name}. Call +91 88895 39174. Same day, verified technicians, starting ₹${service.price}. 30-day warranty.`,
      keywords: `${service.name} ${city.name}, ${service.slug} ${city.slug}, ${service.slug} near me ${city.name}, home appliance repair ${city.name}`,
      alternates: { canonical: `https://homerepairpro.in/${slug}` },
      openGraph: {
        title: `${service.name} in ${city.name} — HomeRepairPro`,
        description: `Same day ${service.name} in ${city.name}. Verified technicians, starting ₹${service.price}.`,
      },
    };
  }

  if (parsed.type === 'city-landing') {
    const { city } = parsed;
    const isServed = SEO_CITIES[city.slug]?.served === true;
    return {
      title: `Home Appliance Repair in ${city.name} — Same Day Service | HomeRepairPro`,
      // GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam
      // description: `AC repair, washing machine repair, refrigerator repair, geyser & more in ${city.name}. Same day service, starting ₹350. Verified technicians, GST invoice, 30-day warranty. Call +91 88895 39174.`,
      description: `AC repair, washing machine repair, refrigerator repair, geyser & more in ${city.name}. Same day service, starting ₹350. Verified technicians, 30-day warranty. Call +91 88895 39174.`,
      keywords: `appliance repair ${city.name}, AC repair ${city.name}, washing machine repair ${city.name}, refrigerator repair ${city.name}, home repair ${city.name}`,
      alternates: { canonical: `https://homerepairpro.in/${city.slug}` },
      ...(isServed ? {} : { robots: { index: false, follow: true } }),
      openGraph: {
        title: `Home Appliance Repair in ${city.name} — HomeRepairPro`,
        description: `Same day AC, washing machine, fridge, geyser repair in ${city.name}. Starting ₹350.`,
      },
    };
  }

  if (parsed.type === 'brand') {
    const { service, brand } = parsed;
    const cityNames = 'Bhopal, Indore, Ujjain, Jabalpur';
    return {
      title: `${brand} ${service.name} in Bhopal, Indore — Same Day | HomeRepairPro`,
      description: `Expert ${brand} ${service.name} in ${cityNames} & all MP cities. Certified technicians, genuine parts, 30-day warranty. Starting ₹${service.price}. Call +91 88895 39174.`,
      keywords: `${brand} ${service.name}, ${brand} repair near me, ${brand} ${service.slug} Bhopal, ${brand} ${service.slug} Indore, ${brand} technician MP, home appliance repair ${brand}`,
      alternates: { canonical: `https://homerepairpro.in/${toBrandSlug(brand)}-${service.slug}` },
      openGraph: {
        title: `${brand} ${service.name} — HomeRepairPro`,
        description: `Expert ${brand} ${service.name} starting ₹${service.price}. Same day service in ${cityNames}.`,
      },
    };
  }

  const { service } = parsed;
  const cityNames = ['Bhopal', 'Indore', 'Ujjain', 'Jabalpur'].join(', ');
  return {
    title: `${service.name} — Same Day Service, Starting ₹${service.price} | HomeRepairPro`,
    // GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam
    // description: `Expert ${service.name} starting ₹${service.price}. Same day service in ${cityNames} & all MP cities. Verified technicians, GST invoice, 30-day warranty. Call +91 88895 39174.`,
    description: `Expert ${service.name} starting ₹${service.price}. Same day service in ${cityNames} & all MP cities. Verified technicians, 30-day warranty. Call +91 88895 39174.`,
    keywords: `${service.name}, ${service.slug} near me, ${service.slug} Bhopal, ${service.slug} Indore, home appliance repair MP`,
    alternates: { canonical: `https://homerepairpro.in/${service.slug}` },
    openGraph: {
      title: `${service.name} — HomeRepairPro`,
      description: `Expert ${service.name} starting ₹${service.price}. Available in ${cityNames}.`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const parsed = parseSlug(slug);
  if (!parsed) notFound();

  if (parsed.type === 'city') {
    return <ServiceCityPage service={parsed.service} city={parsed.city} />;
  }
  if (parsed.type === 'city-landing') {
    return <CityLandingPage city={parsed.city} />;
  }
  if (parsed.type === 'brand') {
    return <BrandServicePage service={parsed.service} brand={parsed.brand} />;
  }
  return <ServicePage service={parsed.service} />;
}
