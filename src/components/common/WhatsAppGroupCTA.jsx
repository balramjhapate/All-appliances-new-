'use client';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

const GROUP_LINK = 'https://chat.whatsapp.com/ISof1XkNwCw5yBOmW535wR';

function trackJoin() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'whatsapp_group_join', page_url: window.location.pathname });
  }
}

export default function WhatsAppGroupCTA({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-[#075E54] py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-white text-sm">
          <div className="flex items-center gap-2">
            <WhatsAppIcon className="w-5 h-5 text-[#25D366] flex-shrink-0" />
            <span className="font-semibold">
              Join our WhatsApp Community —{' '}
              <span className="text-green-300 font-bold">200+ Members</span>
              <span className="hidden sm:inline text-white/70"> · Exclusive repair discounts · Appliance tips</span>
            </span>
          </div>
          <a
            href={GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackJoin}
            className="flex-shrink-0 flex items-center gap-1.5 bg-[#25D366] hover:bg-green-400 text-white font-bold text-xs px-4 py-2 rounded-full transition-colors shadow"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Join Free Group
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gradient-to-br from-[#075E54] via-[#128C7E] to-[#075E54] relative overflow-hidden">
      {/* decorative circles */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] shadow-lg shadow-green-900/40 mb-4">
          <WhatsAppIcon className="w-9 h-9 text-white" />
        </div>

        {/* heading */}
        <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
          Hamare WhatsApp Community Group Mein Aao!
        </h2>
        <p className="text-green-200 text-sm md:text-base mb-1">
          200+ Customers Already Joined — Free Mein Milta Hai:
        </p>

        {/* benefits */}
        <div className="flex flex-wrap justify-center gap-3 my-5">
          {[
            { icon: '🎁', text: 'Exclusive Group-Only Discounts' },
            { icon: '🔧', text: 'Appliance Care Tips & Tricks' },
            { icon: '⚡', text: 'Priority Booking Slot' },
            { icon: '📢', text: 'Seasonal Offers Sabse Pehle' },
          ].map(({ icon, text }) => (
            <span
              key={text}
              className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
            >
              <span>{icon}</span> {text}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <a
          href={GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackJoin}
          className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-green-400 active:bg-green-600 text-white font-black text-lg px-8 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
        >
          <WhatsAppIcon className="w-6 h-6" />
          Group Join Karo — Free Hai!
        </a>

        <p className="text-green-300/70 text-xs mt-3">
          No spam · Sirf useful updates · Kabhi bhi leave kar sakte ho
        </p>
      </div>
    </section>
  );
}
