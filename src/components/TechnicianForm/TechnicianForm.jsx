'use client';
import { useState } from 'react';
import { cities, services } from '@/utils/data';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import { insertTechnicianApplication } from '@/services/supabase';

const EXPERIENCE_OPTIONS = [
  'Less than 1 year',
  '1–2 years',
  '2–5 years',
  '5–10 years',
  '10+ years',
];

const AVAILABILITY_OPTIONS = [
  'Full-time (Mon–Sun)',
  'Part-time (flexible hours)',
  'Weekends only',
  'Morning shift only',
  'Evening shift only',
];

export default function TechnicianForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    experience_years: '',
    specialization: [],
    has_own_tools: '',
    availability: '',
    address: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const toggleSpecialization = (serviceName) => {
    setForm((prev) => ({
      ...prev,
      specialization: prev.specialization.includes(serviceName)
        ? prev.specialization.filter((s) => s !== serviceName)
        : [...prev.specialization, serviceName],
    }));
    if (errors.specialization) setErrors({ ...errors, specialization: '' });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Naam zaroori hai';
    if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Valid 10-digit number daalo';
    if (!form.city) e.city = 'City select karo';
    if (!form.experience_years) e.experience_years = 'Experience select karo';
    if (form.specialization.length === 0) e.specialization = 'Kam se kam ek skill select karo';
    if (!form.has_own_tools) e.has_own_tools = 'Yeh batao';
    if (!form.availability) e.availability = 'Availability select karo';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);

    await insertTechnicianApplication({
      name: form.name.trim(),
      phone: form.phone.trim(),
      city: form.city,
      experience_years: form.experience_years,
      specialization: form.specialization,
      has_own_tools: form.has_own_tools === 'yes',
      availability: form.availability,
      address: form.address.trim() || null,
      message: form.message.trim() || null,
    });

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'technician_apply' });

    const wa = encodeURIComponent(
      `🔧 *New Technician Application!*\n` +
      `━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${form.name.trim()}\n` +
      `📱 *Phone:* ${form.phone.trim()}\n` +
      `🏙️ *City:* ${form.city}\n` +
      `⏱️ *Experience:* ${form.experience_years}\n` +
      `🔧 *Skills:* ${form.specialization.join(', ')}\n` +
      `🧰 *Own Tools:* ${form.has_own_tools === 'yes' ? 'Yes ✅' : 'No ❌'}\n` +
      `⏰ *Availability:* ${form.availability}\n` +
      `📍 *Address:* ${form.address.trim() || 'N/A'}\n` +
      `💬 *Message:* ${form.message.trim() || 'N/A'}`
    );
    window.open(`https://wa.me/918889539174?text=${wa}`, '_blank');

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-green-800 font-black text-xl mb-2">Application Bhej Di!</h3>
        <p className="text-green-700 text-sm mb-1">Hamari team 24 ghante mein contact karegi.</p>
        <p className="text-green-600 text-xs mb-5">WhatsApp pe bhi details bhej di gayi hain.</p>
        <a
          href="tel:+918889539174"
          className="inline-block bg-[#F97316] text-white px-6 py-3 rounded-xl font-bold text-sm"
        >
          📞 Direct Call Karo
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Name + Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Aapka Naam <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name likhein"
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
            placeholder="10-digit mobile number"
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* City + Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Aapka City <span className="text-red-500">*</span>
          </label>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] appearance-none bg-white ${errors.city ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          >
            <option value="">— City select karo —</option>
            {cities.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Kitne Saal Ka Experience? <span className="text-red-500">*</span>
          </label>
          <select
            name="experience_years"
            value={form.experience_years}
            onChange={handleChange}
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] appearance-none bg-white ${errors.experience_years ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          >
            <option value="">— Experience select karo —</option>
            {EXPERIENCE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.experience_years && <p className="text-red-500 text-xs mt-1">{errors.experience_years}</p>}
        </div>
      </div>

      {/* Specialization */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Aap Kaunse Appliances Repair Karte Ho? <span className="text-red-500">*</span>
          <span className="text-gray-400 font-normal ml-1">(multiple select kar sakte ho)</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {services.map((svc) => {
            const selected = form.specialization.includes(svc.name);
            return (
              <button
                key={svc.slug}
                type="button"
                onClick={() => toggleSpecialization(svc.name)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                  selected
                    ? 'bg-[#F97316] border-[#F97316] text-white shadow-md'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-[#F97316]/50'
                }`}
              >
                <span>{svc.emoji}</span>
                <span className="truncate">{svc.name.replace(' & Service', '').replace(' Repair', '')}</span>
                {selected && <span className="ml-auto text-white text-xs">✓</span>}
              </button>
            );
          })}
        </div>
        {errors.specialization && <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>}
      </div>

      {/* Own Tools + Availability */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Kya Aapke Paas Apne Tools Hain? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            {[{ value: 'yes', label: '✅ Haan, mere paas hain' }, { value: 'no', label: '❌ Nahi hain abhi' }].map((opt) => (
              <label
                key={opt.value}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl border cursor-pointer text-sm font-medium transition-all ${
                  form.has_own_tools === opt.value
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-gray-300 text-gray-700 hover:border-blue-400'
                }`}
              >
                <input
                  type="radio"
                  name="has_own_tools"
                  value={opt.value}
                  checked={form.has_own_tools === opt.value}
                  onChange={handleChange}
                  className="sr-only"
                />
                {opt.label}
              </label>
            ))}
          </div>
          {errors.has_own_tools && <p className="text-red-500 text-xs mt-1">{errors.has_own_tools}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Availability <span className="text-red-500">*</span>
          </label>
          <select
            name="availability"
            value={form.availability}
            onChange={handleChange}
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] appearance-none bg-white ${errors.availability ? 'border-red-400 bg-red-50' : 'border-gray-300'}`}
          >
            <option value="">— Select karo —</option>
            {AVAILABILITY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.availability && <p className="text-red-500 text-xs mt-1">{errors.availability}</p>}
        </div>
      </div>

      {/* Address + Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Aapka Area / Mohalla <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="e.g. Vijay Nagar, Indore"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Kuch Aur Batana Chahte Ho? <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. Maine pehle LG service center mein 3 saal kaam kiya hai..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#25D366] hover:bg-green-600 disabled:opacity-60 text-white font-black py-4 rounded-xl text-base transition-colors flex items-center justify-center gap-2 shadow-lg"
      >
        {loading ? (
          <><span className="animate-spin">⏳</span> Bhej rahe hain...</>
        ) : (
          <><WhatsAppIcon className="w-5 h-5" /> Application Submit Karo</>
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        📞 Direct baat karni ho toh:{' '}
        <a href="tel:+918889539174" className="text-gray-900 font-semibold underline">+91 88895 39174</a>
      </p>
    </form>
  );
}
