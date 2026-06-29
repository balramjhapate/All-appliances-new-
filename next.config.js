/** @type {import('next').NextConfig} */

// Mapping: data.js flat slug → seoData.js silo slug (only chimney differs)
const SERVICE_MAP = [
  { flat: 'ac-repair',              silo: 'ac-repair' },
  { flat: 'washing-machine-repair', silo: 'washing-machine-repair' },
  { flat: 'refrigerator-repair',    silo: 'refrigerator-repair' },
  { flat: 'chimney-cleaning',       silo: 'chimney-repair' },
  { flat: 'geyser-repair',          silo: 'geyser-repair' },
  { flat: 'microwave-repair',       silo: 'microwave-repair' },
  { flat: 'ro-repair',              silo: 'ro-repair' },
];

const CITY_SLUGS = [
  'indore', 'bhopal', 'ujjain', 'mhow', 'dewas',
  'sehore', 'jabalpur', 'jaipur', 'pritampur', 'mumbai',
];

const nextConfig = {
  allowedDevOrigins: ['192.168.29.52'],

  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: '*.supabase.co' },
    ],
  },

  async redirects() {
    const redirects = [
      { source: '/join-as-technician', destination: '/careers', permanent: true },
    ];
    for (const { flat, silo } of SERVICE_MAP) {
      for (const city of CITY_SLUGS) {
        redirects.push({
          source: `/${flat}-${city}`,
          destination: `/${city}/${silo}`,
          permanent: true,
        });
      }
    }
    return redirects;
  },
};

module.exports = nextConfig;
