'use client';
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

function LpFooter() {
  return (
    <footer className="bg-gray-900 text-white py-5 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="font-semibold text-sm">HomeRepairPro · Bhopal, Madhya Pradesh</p>
        {/* GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam */}
        {/* <p className="text-gray-400 text-xs mt-1">
          GST: 23DNCPG4775E14H · MSME: UDYAM-MP-10-0042011
        </p> */}
        <div className="flex gap-3 justify-center mt-3">
          <a
            href="tel:+918889539174"
            onClick={() => { if (typeof window !== 'undefined') { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'call_click', source_component: 'lp_footer_call', page_url: window.location.pathname }); } }}
            className="flex items-center gap-1.5 bg-[#F97316] hover:bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/918889539174"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { if (typeof window !== 'undefined') { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'whatsapp_click', source_component: 'lp_footer_wa', page_url: window.location.pathname }); } }}
            className="flex items-center gap-1.5 bg-[#25D366] hover:bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
          </a>
        </div>
        <p className="text-gray-600 text-xs mt-4">© 2026 HomeRepairPro. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith('/lp/')) return <LpFooter />;
  return <Footer />;
}
