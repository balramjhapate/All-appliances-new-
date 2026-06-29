'use client';
import { useState, useEffect } from 'react';
import { insertLead, getTrackingData } from '@/services/supabase';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';

export default function PhoneCaptureSheet({ type, service, city, onClose }) {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleGo = async () => {
    if (!phone) return;
    setLoading(true);

    try {
      await insertLead({
        name: '',
        phone,
        city: city || '',
        service: service || '',
        message: '',
        source_component: type === 'call' ? 'call_click' : 'whatsapp_click',
        ...getTrackingData(),
      });
    } catch (err) {
      console.error('[HRP] PhoneCaptureSheet save:', err);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: type === 'call' ? 'call_click' : 'whatsapp_click',
      source_component: 'phone_capture_sheet',
      city: city || undefined,
      service: service || undefined,
      page_url: window.location.pathname,
    });

    if (type === 'call') {
      window.location.href = 'tel:+918889539174';
    } else {
      const msg = `Hi HomeRepairPro!${service ? ` Mujhe ${service} chahiye` : ' Mujhe repair service chahiye'}${city ? ` ${city} mein` : ''}. Mera number: ${phone}. Please call/WhatsApp karo.`;
      window.open(`https://wa.me/918889539174?text=${encodeURIComponent(msg)}`, '_blank');
    }

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-sm bg-white rounded-t-2xl sm:rounded-2xl p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-black text-gray-900 text-lg">
              {type === 'call' ? '📞 Apna Number Dalein' : '💬 WhatsApp Karo'}
            </h3>
            <p className="text-gray-500 text-xs mt-0.5">
              {type === 'call'
                ? 'Hum aapko call karenge — 30 min mein'
                : 'Number save hoga, WhatsApp pe connect honge'}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center">✕</button>
        </div>

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
          placeholder="Mobile number dalein..."
          autoFocus
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-base font-semibold text-gray-900 focus:outline-none focus:border-[#F97316] mb-3"
          onKeyDown={(e) => e.key === 'Enter' && handleGo()}
        />

        <button
          onClick={handleGo}
          disabled={!phone || loading}
          className={`w-full font-black py-3.5 rounded-xl text-white text-base transition-all disabled:opacity-50 flex items-center justify-center gap-2 ${
            type === 'call'
              ? 'bg-[#F97316] hover:bg-orange-500'
              : 'bg-[#25D366] hover:bg-green-500'
          }`}
        >
          {loading ? '⏳ Please wait...' : type === 'call' ? '📞 Call Now' : <><WhatsAppIcon className="w-5 h-5" /> WhatsApp Karo</>}
        </button>

        <p className="text-center text-xs text-gray-400 mt-3">🔒 Number sirf callback ke liye use hoga</p>
      </div>
    </div>
  );
}
