'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SOCIALS = [
  {
    href: 'https://www.facebook.com/homerepairproo', label: 'Facebook', bg: '#1877F2',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    href: 'https://www.instagram.com/home.repairpro/', label: 'Instagram', gradient: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    href: 'https://www.youtube.com/channel/UCfSX0UYEKPPyYudOq8Wpx4A', label: 'YouTube', bg: '#FF0000',
    path: 'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z',
  },
  {
    href: 'https://www.linkedin.com/in/homerepair-pro-4b253b418', label: 'LinkedIn', bg: '#0A66C2',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    href: 'https://wa.me/918889539174', label: 'WhatsApp', bg: '#25D366',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  },
];

export default function TopHeader({ visible, onClose }) {
  const pathname = usePathname();
  const isLp = pathname?.startsWith('/lp/');

  return (
    <div
      data-topbar
      className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#0c2340] via-[#153f70] to-[#1a4f8a] border-b border-sky-800/60 shadow-lg"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5">
        <div className="flex items-center justify-between h-10 gap-2">

          {/* LEFT — service badges */}
          <div className="flex items-center gap-2 shrink-0">

            {/* Emergency badge — compact on mobile, full on sm+ */}
            <span className="inline-flex sm:hidden items-center gap-1 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wide shadow shadow-red-700/40 whitespace-nowrap">
              🚨 Emergency Repair
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide shadow shadow-red-700/40">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M15.5 2.1L13.88 0H10.12L8.5 2.1 6 1.03 5.03 3.53 2.53 2.56 2.5 5.19 0 6.22 1.03 8.72 0 11.22l2.5 1.03.03 2.63 2.5-.97L6 16.97l2.5-1.07 1.62 2.1h3.76l1.62-2.1 2.5 1.07 1-2.5 2.5.97.03-2.63L24 11.22l-1.03-2.5L24 6.22l-2.5-1.03-.03-2.63-2.5.97L17.5 1.03l-2-.93zM12 15a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/>
              </svg>
              Emergency Home Repair
            </span>

            {/* 24x7 badge */}
            <span className="hidden md:inline-flex items-center gap-1.5 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide shadow shadow-amber-600/40">
              <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
              Service Available 24x7
            </span>

            {/* Hiring badge — hidden on LP pages to keep focus on lead CTA */}
            {!isLp && (
              <Link href="/careers" className="hidden lg:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide shadow shadow-green-700/40 transition-colors">
                🛠️ We&apos;re Hiring Technicians
              </Link>
            )}
          </div>

          {/* RIGHT — contact + socials + close */}
          {/* pr-8 on mobile makes room for the absolute close button */}
          <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] ml-auto pr-8 sm:pr-0">

            {/* Email */}
            <a
              href="mailto:bhopalservice998@gmail.com"
              className="hidden lg:flex items-center gap-1.5 font-bold text-white hover:text-red-400 transition-colors duration-200"
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 shadow shadow-red-700/50 shrink-0">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </span>
              bhopalservice998@gmail.com
            </a>

            <span className="hidden lg:block h-4 w-px bg-white/15" />

            {/* Phone */}
            <a
              href="tel:+918889539174"
              className="flex items-center gap-1.5 font-bold text-white hover:text-red-400 transition-colors duration-200"
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 shadow shadow-red-700/50 shrink-0">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </span>
              {/* Show phone number text on all screen sizes */}
              <span className="tracking-wide text-[10px] sm:text-[11px]">+91 88895 39174</span>
            </a>

            <span className="h-4 w-px bg-white/15" />

            {/* Social icons — on mobile show only WhatsApp, full set on sm+ */}
            <div className="flex items-center gap-1">
              {SOCIALS.map(({ href, label, bg, gradient, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className={`w-6 h-6 flex items-center justify-center rounded-full text-white transition-all duration-200 hover:scale-110 hover:brightness-125 ${label === 'WhatsApp' ? 'flex' : 'hidden sm:flex'}`}
                  style={{ background: gradient ?? bg }}
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Close button — absolute far right */}
      <button
        onClick={onClose}
        aria-label="Close announcement bar"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full border border-white text-white hover:bg-red-600 hover:border-red-500 transition-all duration-200"
      >
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
      </button>

      {/* Bottom accent line — absolute so it doesn't add to TopHeader height */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600 via-amber-500 to-red-600 opacity-70" />
    </div>
  );
}
