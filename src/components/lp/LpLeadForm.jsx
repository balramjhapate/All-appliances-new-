'use client';
import { useState } from 'react';
import { services, cities } from '@/utils/data';
import { insertLead, insertInteraction, getTrackingData } from '@/services/supabase';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function LpLeadForm({
  sourceComponent = 'lp_form',
  waSourceComponent = 'lp_whatsapp',
  callSourceComponent = 'lp_call',
  defaultService = '',
  defaultCity = 'Bhopal',
}) {
  const [service, setService] = useState('');
  const [city, setCity]       = useState('');
  const [phone, setPhone]     = useState('');
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const svc = service || defaultService || 'home appliance repair';
  const cty = city   || defaultCity    || 'Bhopal';
  const waMsg = encodeURIComponent(
    `Hi HomeRepairPro! Mujhe ${svc} chahiye ${cty} mein. Please callback karo. 🙏`
  );

  const handleSubmit = async () => {
    if (!phone) {
      setError('Mobile number daalna zaroori hai');
      return;
    }
    setError('');
    setLoading(true);

    try {
      await insertLead({
        name: '', phone, city: cty, service: svc, message: '',
        source_component: sourceComponent,
        ...getTrackingData(),
      });
    } catch (err) {
      console.error('[HRP] LP insertLead:', err);
    }

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'lead_submit', service: svc, city: cty, source_component: sourceComponent, page_url: window.location.pathname });
    }

    const msg = `Hi HomeRepairPro! Mujhe ${svc} chahiye ${cty} mein. Mera number: ${phone}. Please callback karo. 🙏`;
    window.open(`https://wa.me/918889539174?text=${encodeURIComponent(msg)}`, '_blank');

    setSuccess(true);
    setLoading(false);
  };

  const handleCall = () => {
    insertInteraction('call_click', callSourceComponent, { service: svc, city: cty });
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'call_click', service: svc, city: cty, source_component: callSourceComponent, page_url: window.location.pathname });
    }
  };

  const handleWA = () => {
    insertInteraction('whatsapp_click', waSourceComponent, { service: svc, city: cty });
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'whatsapp_click', service: svc, city: cty, source_component: waSourceComponent, page_url: window.location.pathname });
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-green-800 font-bold text-lg mb-1">Request bhej diya!</h3>
        <p className="text-green-700 text-sm">Hum 30 minute mein call karenge. WhatsApp pe bhi message bheja gaya hai.</p>
        <a
          href="tel:+918889539174"
          className="mt-4 inline-block bg-[#F97316] text-white px-6 py-3 rounded-lg font-bold text-sm"
        >
          📞 Abhi Call Karo
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-3">

      {/* Service dropdown — pre-selected to LP service, user can change */}
      <div className="relative">
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full border-2 border-blue-100 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] bg-white appearance-none cursor-pointer transition-colors"
        >
          <option value="">— Select Service —</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>{s.emoji} {s.name}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F97316] text-xs font-bold">▼</span>
      </div>

      {/* City dropdown — pre-selected to Bhopal, user can change */}
      <div className="relative">
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border-2 border-blue-100 text-gray-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] bg-white appearance-none cursor-pointer transition-colors"
        >
          <option value="">— Select City —</option>
          {cities.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F97316] text-xs font-bold">▼</span>
      </div>

      {/* Phone number */}
      <div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
          placeholder="📱 Mobile Number"
          inputMode="numeric"
          className="w-full border-2 border-blue-100 text-gray-900 placeholder-gray-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/30 focus:border-[#F97316] bg-white transition-colors"
        />
        {error && <p className="text-red-400 text-xs mt-1 font-semibold">{error}</p>}
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-gradient-to-r from-[#F97316] to-[#ea6a10] hover:from-[#fb923c] hover:to-[#F97316] active:scale-95 disabled:opacity-60 text-white font-black py-3.5 rounded-xl text-sm transition-all shadow-[0_4px_20px_rgba(249,115,22,0.45)] hover:shadow-[0_4px_28px_rgba(249,115,22,0.65)]"
      >
        {loading ? '⏳ Bhej rahe hain...' : 'Get Free Estimate →'}
      </button>

      {/* Call + WhatsApp row */}
      <div className="flex gap-2">
        <a
          href="tel:+918889539174"
          onClick={handleCall}
          className="flex-1 flex items-center justify-center gap-1.5 border-2 border-[#06112a] text-[#06112a] hover:bg-[#06112a] hover:text-white font-bold py-2.5 rounded-xl text-xs transition-all duration-200"
        >
          📞 88895 39174
        </a>
        <a
          href={`https://wa.me/918889539174?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWA}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-green-500 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-[0_2px_10px_rgba(37,211,102,0.3)]"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp
        </a>
      </div>

      {/* Trust pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-blue-100">
        {['✅ No Spam', '🔒 Secure', '⚡ 30 Min Callback', '🛡️ 30-Day Warranty'].map((item) => (
          <span key={item} className="text-[#06112a]/50 text-[11px] font-medium">{item}</span>
        ))}
      </div>

    </div>
  );
}
