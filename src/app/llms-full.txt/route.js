import { SEO_SERVICES, SEO_CITIES, getServiceCityFaqs } from '@/utils/seoData';
import { blogPosts } from '@/utils/data';

export const dynamic = 'force-static';

function buildContent() {
  const lines = [];

  lines.push('# HomeRepairPro — Full Reference');
  lines.push('');
  lines.push('> HomeRepairPro is a doorstep home-appliance repair company serving Indore and');
  lines.push('> Bhopal, Madhya Pradesh, India. Experienced technicians, 60-minute response,');
  lines.push('> ₹350 starting price, 30-day repair warranty, GST & MSME registered,');
  lines.push('> verified technicians. Phone: +91 8889539174.');
  lines.push('');
  lines.push('## Business details');
  lines.push('- Phone: +91 8889539174');
  lines.push('- Email: bhopalservice998@gmail.com');
  lines.push('- GSTIN: 23DNCPG4775E14H');
  lines.push('- MSME: UDYAM-MP-10-0042011');
  lines.push('- Location: Madhya Pradesh, India');
  lines.push('- Hours: Monday–Sunday, 8 AM – 8 PM');
  lines.push('');

  // Services
  lines.push('## Services');
  lines.push('');
  for (const [slug, svc] of Object.entries(SEO_SERVICES)) {
    lines.push(`### ${svc.fullName}`);
    lines.push(`URL: /${svc.dataSlug}`);
    lines.push(`Main problem solved: ${svc.mainProblem}`);
    lines.push('');
    lines.push('Pricing:');
    for (const row of svc.pricing) {
      lines.push(`- ${row.service}: ${row.price} (${row.note})`);
    }
    lines.push('');
    lines.push('Brands covered: ' + svc.brands.join(', '));
    lines.push('');
    lines.push('Common problems:');
    for (const p of svc.problems) {
      lines.push(`- ${p.title}: ${p.desc}`);
    }
    lines.push('');
  }

  // City pages for served cities
  lines.push('## Served cities');
  lines.push('');
  const servedCities = Object.entries(SEO_CITIES).filter(([, c]) => c.served === true);
  for (const [citySlug, cityData] of servedCities) {
    lines.push(`### ${cityData.name}, ${cityData.state}`);
    lines.push(`City hub: /${citySlug}`);
    lines.push(`Areas covered: ${cityData.areas.slice(0, 20).join(', ')}`);
    lines.push('');
    lines.push('Service pages:');
    for (const [svcSlug, svc] of Object.entries(SEO_SERVICES)) {
      lines.push(`- ${svc.fullName} in ${cityData.name}: /${citySlug}/${svcSlug}`);
    }
    lines.push('');
  }

  // FAQs for Indore (primary city, representative)
  lines.push('## Frequently asked questions (Indore — representative)');
  lines.push('');
  for (const [svcSlug, svc] of Object.entries(SEO_SERVICES)) {
    const faqs = getServiceCityFaqs('indore', svcSlug);
    if (!faqs.length) continue;
    lines.push(`### ${svc.fullName} FAQ`);
    for (const faq of faqs) {
      lines.push(`Q: ${faq.q}`);
      lines.push(`A: ${faq.a}`);
      lines.push('');
    }
  }

  // Blog
  lines.push('## Blog posts (repair guides)');
  lines.push('');
  for (const post of blogPosts) {
    lines.push(`### ${post.title}`);
    lines.push(`URL: /blog/${post.slug}`);
    lines.push(`Category: ${post.category}`);
    lines.push(post.excerpt);
    lines.push('');
  }

  return lines.join('\n');
}

export function GET() {
  return new Response(buildContent(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
