'use client';
import { useState } from 'react';
import { services, cities } from '@/utils/data';
import { insertLead, getTrackingData } from '@/services/supabase';

export default function QuickBookForm() {
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [city, setCity] = useState('');

  const [error, setError] = useState('');

  const handleBook = async () => {
    if (!phone) {
      setError('Phone number daalna zaroori hai');
      return;
    }
    setError('');
    const svc = service || 'home appliance repair';
    const cty = city || '';

    try {
      await insertLead({
        name: '',
        phone,
        city: cty,
        service: svc,
        message: '',
        source_component: 'quick_book_form',
        ...getTrackingData(),
      });
    } catch (err) {
      console.error('[HRP] QuickBook insertLead exception:', err);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_submit', service: svc, city: cty, source_component: 'quick_book_form', page_url: window.location.pathname });

    const msg = `Hi HomeRepairPro! Mujhe ${svc} chahiye${cty ? ` ${cty} mein` : ''}. Mera number: ${phone}. Please call/WhatsApp karo.`;
    window.open(`https://wa.me/918889539174?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="bg-[#1B4FD8] py-4 md:py-3.5 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">
          <span className="hidden md:flex items-center text-white font-bold text-sm whitespace-nowrap bg-white/15 px-4 py-2.5 rounded-xl border border-white/20">
            🔧 Free Estimate:
          </span>

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="flex-1 bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm appearance-none cursor-pointer"
          >
            <option value="" className="text-gray-900 bg-white">— Select Service —</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name} className="text-gray-900 bg-white">
                {s.emoji} {s.name}
              </option>
            ))}
          </select>

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 bg-white/10 border border-white/20 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm appearance-none cursor-pointer"
          >
            <option value="" className="text-gray-900 bg-white">— Select City —</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name} className="text-gray-900 bg-white">
                {c.name}
              </option>
            ))}
          </select>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
            placeholder="Mobile Number"
            className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/55 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 backdrop-blur-sm"
          />

          <button
            onClick={handleBook}
            className="w-full md:w-auto bg-[#F97316] hover:bg-orange-500 active:scale-95 text-white font-black px-8 py-2.5 rounded-xl text-sm transition-all shadow-lg shadow-orange-600/30 whitespace-nowrap"
          >
            Get Free Estimate →
          </button>
        </div>
        {error && <p className="text-yellow-300 text-xs text-center mt-1 font-semibold">{error}</p>}
      </div>
    </section>
  );
}
