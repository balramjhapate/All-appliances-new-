import Link from 'next/link';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import WhatsAppGroupCTA from '@/components/common/WhatsAppGroupCTA';
import TrackableCallLink from '@/components/common/TrackableCallLink';
import TrackableWhatsAppLink from '@/components/common/TrackableWhatsAppLink';
import Image from 'next/image';
import { services, cities } from '@/utils/data';

const popularSearches = [
  { label: 'AC Repair Indore',                href: '/indore/ac-repair' },
  { label: 'AC Repair Bhopal',                href: '/bhopal/ac-repair' },
  { label: 'Washing Machine Repair Indore',   href: '/indore/washing-machine-repair' },
  { label: 'Fridge Repair Indore',            href: '/indore/refrigerator-repair' },
  { label: 'Washing Machine Repair Bhopal',   href: '/bhopal/washing-machine-repair' },
  { label: 'Fridge Repair Bhopal',            href: '/bhopal/refrigerator-repair' },
  { label: 'Geyser Repair Indore',            href: '/indore/geyser-repair' },
  { label: 'Chimney Cleaning Indore',         href: '/indore/chimney-repair' },
  { label: 'RO Repair Indore',               href: '/indore/ro-repair' },
  { label: 'Microwave Repair Bhopal',         href: '/bhopal/microwave-repair' },
  { label: 'AC Repair Ujjain',               href: '/ujjain/ac-repair' },
  { label: 'AC Gas Refill Indore',            href: '/indore/ac-repair' },
  { label: 'Samsung Fridge Repair Bhopal',    href: '/bhopal/refrigerator-repair' },
  { label: 'IFB Washing Machine Repair',      href: '/indore/washing-machine-repair' },
  { label: 'Home Appliance Repair Near Me',   href: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white pt-4 sm:pt-6">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">

        {/* ── Mobile: Reach Us first, then Services+Cities, then About
            ── Desktop: About | Services | Cities | Reach Us (unchanged) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

          {/* ── REACH US — order-1 on mobile (top, full width), order-4 on desktop ── */}
          <div className="col-span-2 lg:col-span-1 order-1 lg:order-4">
            <h3 className="text-sm sm:text-base font-bold mb-1">Reach Us</h3>
            <div className="w-8 h-0.5 bg-white mb-2 sm:mb-3" />

            {/* Mobile: prominent call + WA buttons */}
            <div className="flex gap-2 mb-3 lg:hidden">
              <TrackableCallLink
                sourceComponent="footer_mobile_call"
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#F97316] hover:bg-orange-500 text-white font-bold text-xs py-2.5 rounded-xl transition-colors"
              >
                📞 Call Now
              </TrackableCallLink>
              <TrackableWhatsAppLink
                href="https://wa.me/918889539174"
                sourceComponent="footer_mobile_wa"
                className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-400 text-white font-bold text-xs py-2.5 rounded-xl transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
              </TrackableWhatsAppLink>
            </div>

            <div className="space-y-2 sm:space-y-3 text-xs">
              {/* Location */}
              <div className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z"/>
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white leading-tight text-[11px] sm:text-xs">Emergency Home Repair Service</p>
                  <p className="text-white/75 leading-tight text-[10px] sm:text-xs">Madhya Pradesh, India</p>
                </div>
              </div>

              {/* Phone — desktop only (mobile has button above) */}
              <TrackableCallLink sourceComponent="footer_desktop_call" className="hidden lg:flex items-center gap-2 group">
                <span className="shrink-0 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </span>
                <span className="text-white/90 group-hover:text-white group-hover:underline transition-colors">+91 88895 39174</span>
              </TrackableCallLink>

              {/* Email */}
              <div className="flex items-center gap-2">
                <span className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                <span className="text-white/90 break-all text-[10px] sm:text-xs">bhopalservice998@gmail.com</span>
              </div>

              {/* WhatsApp button — desktop only */}
              <TrackableWhatsAppLink
                href="https://wa.me/918889539174"
                sourceComponent="footer_desktop_wa"
                className="hidden lg:inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 active:bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded-full transition-colors shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Chat on WhatsApp
              </TrackableWhatsAppLink>
            </div>
          </div>

          {/* ── SERVICES — order-2 on mobile, order-2 on desktop ── */}
          <div className="order-2 lg:order-2">
            <h3 className="text-sm sm:text-base font-bold mb-1">Services</h3>
            <div className="w-8 h-0.5 bg-white mb-2 sm:mb-3" />
            <ul className="space-y-1 text-[11px] sm:text-xs">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/${service.slug}`} className="hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CITIES — order-3 on mobile, order-3 on desktop ── */}
          <div className="order-3 lg:order-3">
            <h3 className="text-sm sm:text-base font-bold mb-1">Cities</h3>
            <div className="w-8 h-0.5 bg-white mb-2 sm:mb-3" />
            <ul className="space-y-1 text-[11px] sm:text-xs">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link href={`/${city.slug}`} className="hover:underline">
                    {city.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1.5 border-t border-white/20 mt-1.5">
                <Link href="/join-as-technician" className="hover:underline font-semibold text-yellow-200">
                  🔧 Join as Technician
                </Link>
              </li>
            </ul>
          </div>

          {/* ── ABOUT — order-4 on mobile (bottom, full width), order-1 on desktop ── */}
          <div className="col-span-2 lg:col-span-1 order-4 lg:order-1">
            <h3 className="text-sm sm:text-base font-bold mb-1">About Us</h3>
            <div className="w-8 h-0.5 bg-white mb-2 sm:mb-3" />

            {/* Mobile: logo + description + socials in a compact row */}
            <div className="flex items-start gap-3 lg:block">
              <Link href="/" className="shrink-0">
                <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-2xl ring-2 ring-white/30 lg:mb-3">
                  <Image
                    src="/images/logo.jpg"
                    alt="HomeRepairPro — Home Appliance Repair Service Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              <div className="flex-1 min-w-0">
                <p className="text-[10px] sm:text-xs leading-4 sm:leading-5 text-white/90 mb-2 sm:mb-3">
                  {/* GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam */}
                  {/* Ghar Ki Har Repair — Ek Call Mein. Verified technicians, same day service, GST &amp; MSME registered. */}
                  Ghar Ki Har Repair — Ek Call Mein. Verified technicians, same day service.
                </p>
                <div className="flex gap-2">
                  <a href="https://www.facebook.com/homerepairproo" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" style={{ backgroundColor: '#1877F2' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/home.repairpro/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCfSX0UYEKPPyYudOq8Wpx4A" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" style={{ backgroundColor: '#FF0000' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/homerepair-pro-4b253b418" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" style={{ backgroundColor: '#0A66C2' }}>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Popular Searches */}
        <div className="border-t border-white/30 mt-3 sm:mt-4 pt-2 sm:pt-3 pb-3 text-[10px] sm:text-xs leading-relaxed">
          <span className="font-semibold">Popular Searches: </span>
          {popularSearches.map((link, i) => (
            <span key={link.label}>
              <Link href={link.href} className="hover:underline">{link.label}</Link>
              {i !== popularSearches.length - 1 && ' | '}
            </span>
          ))}
        </div>

      </div>

      {/* WhatsApp Group CTA strip */}
      <WhatsAppGroupCTA compact />

      {/* Independence disclaimer */}
      <div className="bg-blue-800 border-t border-white/20 py-3">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-white/70 text-[10px] sm:text-xs text-center leading-relaxed">
            HomeRepairPro is an independent multi-brand home appliance repair service. We are not affiliated with, authorized by, or endorsed by any appliance manufacturer. All brand names and trademarks are the property of their respective owners and are used only to describe the appliances we repair.
          </p>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-blue-900 py-2">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-1 text-xs">
          <p>© 2026 HomeRepairPro. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-2 text-white/80">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <span>·</span>
            <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
            <span>·</span>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
        {/* GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam */}
        {/* <div className="max-w-6xl mx-auto px-4 mt-1 text-center text-[10px] text-white/50">
          GST: 23DNCPG4775E14H · MSME: UDYAM-MP-10-0042011
        </div> */}
      </div>
    </footer>
  );
}
