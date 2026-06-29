'use client';
import { insertInteraction } from '@/services/supabase';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function TrackableWhatsAppLink({ href, service, city, sourceComponent, children, className }) {
  const handleClick = () => {
    insertInteraction('whatsapp_click', sourceComponent, { service: service || null, city: city || null });
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'whatsapp_click', source_component: sourceComponent, service: service || undefined, city: city || undefined, page_url: window.location.pathname });
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
