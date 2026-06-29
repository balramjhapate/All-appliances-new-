'use client';
import { insertInteraction } from '@/services/supabase';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function LpCTAButtons({
  waSourceComponent,
  callSourceComponent,
  service = '',
  waText = '',
  size = 'lg',
}) {
  const waMsg = encodeURIComponent(
    waText || `Hi HomeRepairPro! Mujhe ${service} chahiye Bhopal mein. Please callback karo. 🙏`
  );

  const handleCall = () => {
    insertInteraction('call_click', callSourceComponent, { service, city: 'Bhopal' });
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'call_click', service, city: 'Bhopal', source_component: callSourceComponent, page_url: window.location.pathname });
    }
  };

  const handleWA = () => {
    insertInteraction('whatsapp_click', waSourceComponent, { service, city: 'Bhopal' });
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'whatsapp_click', service, city: 'Bhopal', source_component: waSourceComponent, page_url: window.location.pathname });
    }
  };

  const btnBase =
    size === 'lg'
      ? 'flex-1 min-w-[140px] flex items-center justify-center gap-2 font-bold py-4 px-5 rounded-xl text-base transition-colors shadow-lg'
      : 'flex-1 min-w-[120px] flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md';

  return (
    <div className="flex gap-3 flex-wrap">
      <a
        href="tel:+918889539174"
        onClick={handleCall}
        className={`${btnBase} bg-[#F97316] hover:bg-orange-600 text-white`}
      >
        📞 Call 8889539174
      </a>
      <a
        href={`https://wa.me/918889539174?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWA}
        className={`${btnBase} bg-[#25D366] hover:bg-green-600 text-white`}
      >
        <WhatsAppIcon className="w-5 h-5" /> WhatsApp
      </a>
    </div>
  );
}
