'use client';
import Image from 'next/image';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { IMG_LOGO } from '@/utils/cdn';

export default function LpHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0 overflow-hidden" style={{ width: 160, height: 40 }}>
          <Image
            src={IMG_LOGO}
            alt="HomeRepairPro"
            width={200}
            height={50}
            style={{ objectFit: 'contain', objectPosition: 'left center', transform: 'scale(1.2) translate(-8px, 2px)' }}
            priority
          />
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+918889539174"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: 'call_click', source_component: 'lp_header_call', page_url: window.location.pathname });
              }
            }}
            className="flex items-center gap-1.5 bg-[#F97316] hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="hidden sm:inline">+91 88895 39174</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a
            href="https://wa.me/918889539174?text=Hi%20HomeRepairPro,%20mujhe%20repair%20chahiye"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({ event: 'whatsapp_click', source_component: 'lp_header_wa', page_url: window.location.pathname });
              }
            }}
            className="flex items-center gap-1.5 bg-[#25D366] hover:bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
