const SOCIAL_PROFILES = [
  'https://www.facebook.com/homerepairproo',
  'https://www.instagram.com/home.repairpro/',
  'https://www.youtube.com/channel/UCfSX0UYEKPPyYudOq8Wpx4A',
  'https://www.linkedin.com/in/homerepair-pro-4b253b418',
  'https://wa.me/918889539174',
];

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HomeRepairPro',
    url: 'https://homerepairpro.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://homerepairpro.in/images/logo.png',
    },
    telephone: '+918889539174',
    email: 'bhopalservice998@gmail.com',
    sameAs: SOCIAL_PROFILES,
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'HomeRepairPro',
    telephone: '+918889539174',
    email: 'bhopalservice998@gmail.com',
    url: 'https://homerepairpro.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://homerepairpro.in/images/logo-round.png',
    },
    description:
      'HomeRepairPro — Doorstep home appliance repair in Indore and Bhopal. AC, Washing Machine, Refrigerator, Chimney, Geyser, Microwave repair. Same-day, ₹350 starting, 30-day warranty.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Madhya Pradesh',
    },
    areaServed: ['Indore', 'Bhopal'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Appliance Repair Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Repair & Service' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Washing Machine Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Refrigerator Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chimney Cleaning & Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Geyser Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Microwave Repair' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'RO Water Purifier Repair' } },
      ],
    },
    priceRange: '₹₹',
    openingHours: 'Mo-Su 08:00-20:00',
    taxID: '23DNCPG4775E14H',
    identifier: 'UDYAM-MP-10-0042011',
    sameAs: SOCIAL_PROFILES,
  };
}

export function servicePageSchema(service, city, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service} in ${city}`,
    serviceType: service,
    provider: {
      '@type': 'LocalBusiness',
      name: 'HomeRepairPro',
      telephone: '+918889539174',
      url: 'https://homerepairpro.in',
    },
    areaServed: {
      '@type': 'City',
      name: city,
    },
    url,
    description: `Professional ${service} in ${city} by verified technicians. Same day service, starting ₹350. GST & MSME registered.`,
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

export function blogSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `https://homerepairpro.in/blog/${post.slug}`,
    author: {
      '@type': 'Organization',
      name: 'HomeRepairPro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HomeRepairPro',
      url: 'https://homerepairpro.in',
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function lpLocalBusinessSchema({ city, service, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'HomeRepairPro',
    telephone: '+918889539174',
    email: 'bhopalservice998@gmail.com',
    url,
    logo: { '@type': 'ImageObject', url: 'https://homerepairpro.in/images/logo.png' },
    priceRange: '₹₹',
    areaServed: { '@type': 'City', name: city },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service,
      itemListElement: [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: service } }],
    },
    openingHours: 'Mo-Su 08:00-20:00',
    taxID: '23DNCPG4775E14H',
    identifier: 'UDYAM-MP-10-0042011',
  };
}
