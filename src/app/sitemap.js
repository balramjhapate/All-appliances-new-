import { services, cities, blogPosts } from '@/utils/data';
import { ALL_SERVICE_CITY_PARAMS, SEO_CITIES, SEO_SERVICES } from '@/utils/seoData';

function toBrandSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export default function sitemap() {
  const base = 'https://homerepairpro.in';

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/careers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/refund-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Only served cities in city-landing pages
  const cityLandingPages = cities
    .filter((city) => SEO_CITIES[city.slug]?.served === true)
    .map((city) => ({
      url: `${base}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }));

  // Service hub pages only — flat /{service}-{city} removed (they 301 to silo)
  const servicePages = services.map((service) => ({
    url: `${base}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.95,
  }));

  const brandPages = [];
  for (const service of services) {
    for (const brand of service.brands ?? []) {
      brandPages.push({
        url: `${base}/${toBrandSlug(brand)}-${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
      });
    }
  }

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Canonical silo pages — served cities only
  const serviceCityPages = ALL_SERVICE_CITY_PARAMS
    .filter(({ city }) => SEO_CITIES[city]?.served === true)
    .map(({ city, service }) => ({
      url: `${base}/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.95,
    }));

  // Area pages — only served cities, only areas with areaIntros content
  const areaPages = [];
  for (const [citySlug, cityData] of Object.entries(SEO_CITIES)) {
    if (!cityData.served) continue;
    for (const serviceSlug of Object.keys(SEO_SERVICES)) {
      for (const area of cityData.areas) {
        const areaSlug = area.toLowerCase().replace(/\s+/g, '-');
        if (!cityData.areaIntros?.[areaSlug]) continue;
        areaPages.push({
          url: `${base}/${citySlug}/${serviceSlug}/${areaSlug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      }
    }
  }

  return [...staticPages, ...cityLandingPages, ...servicePages, ...brandPages, ...blogPages, ...serviceCityPages, ...areaPages];
}
