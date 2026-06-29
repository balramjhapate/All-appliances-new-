'use client';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import TrackableCallLink from '@/components/common/TrackableCallLink';
import TrackableWhatsAppLink from '@/components/common/TrackableWhatsAppLink';

const WA_HREF = `https://wa.me/918889539174?text=${encodeURIComponent('Hi HomeRepairPro! Mujhe repair service chahiye. Please contact karo.')}`;

export default function StickyBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
      <TrackableCallLink
        sourceComponent="sticky_bottom_cta"
        className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] text-white py-4 text-base font-bold"
      >
        📞 Call Now
      </TrackableCallLink>

      <TrackableWhatsAppLink
        href={WA_HREF}
        sourceComponent="sticky_bottom_cta"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 text-base font-bold"
      >
        <WhatsAppIcon className="w-5 h-5" /> WhatsApp
      </TrackableWhatsAppLink>
    </div>
  );
}
