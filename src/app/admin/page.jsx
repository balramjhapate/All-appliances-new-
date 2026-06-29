'use client';
import { useState, useEffect, useCallback } from 'react';

const QUICK_LINKS = [
  { label: 'Search Console', url: 'https://search.google.com/search-console', icon: '🔍', color: 'bg-blue-900' },
  { label: 'Google Ads', url: 'https://ads.google.com', icon: '📢', color: 'bg-green-900' },
  { label: 'Tag Manager', url: 'https://tagmanager.google.com', icon: '🏷️', color: 'bg-yellow-900' },
  { label: 'GA4 Analytics', url: 'https://analytics.google.com', icon: '📊', color: 'bg-purple-900' },
  { label: 'Supabase', url: 'https://supabase.com/dashboard', icon: '🗄️', color: 'bg-teal-900' },
  { label: 'Google My Business', url: 'https://business.google.com', icon: '📍', color: 'bg-red-900' },
  { label: 'Vercel Dashboard', url: 'https://vercel.com/dashboard', icon: '▲', color: 'bg-gray-700' },
  { label: 'Keyword Planner', url: 'https://ads.google.com/home/tools/keyword-planner', icon: '🔑', color: 'bg-orange-900' },
];

const SEO_TOOLS = [
  { label: 'Competitor Check', url: 'https://www.ubersuggest.com/traffic-analyzer/trueservicecenter.in', icon: '🕵️', note: 'TrueService ka traffic dekho' },
  { label: 'Your Rankings', url: 'https://search.google.com/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fwww.homerepairpro.in%2F', icon: '📈', note: 'Kaunse keywords rank kar rahe hain' },
  { label: 'Indexing Status', url: 'https://search.google.com/search-console/index?resource_id=https%3A%2F%2Fwww.homerepairpro.in%2F', icon: '✅', note: 'Kitne pages indexed hain' },
  { label: 'Page Speed', url: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.homerepairpro.in', icon: '⚡', note: 'Website speed score' },
  { label: 'Ahrefs Free', url: 'https://ahrefs.com/backlink-checker?input=homerepairpro.in', icon: '🔗', note: 'Backlinks check karo' },
  { label: 'SERP Checker', url: 'https://www.google.com/search?q=ac+repair+indore', icon: '🏆', note: 'AC Repair Indore mein kahan ho' },
];

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [search, setSearch] = useState('');
  const [techSearch, setTechSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedLead, setSelectedLead] = useState(null);
  const [detailTab, setDetailTab] = useState('info');
  const [customFrom, setCustomFrom] = useState('');
  const [customTo, setCustomTo] = useState('');

  const fetchLeads = useCallback(async (pwd) => {
    setLoading(true);
    setError('');
    const [leadsRes, techRes] = await Promise.all([
      fetch('/api/admin/leads', { headers: { 'x-admin-password': pwd } }),
      fetch('/api/admin/technicians', { headers: { 'x-admin-password': pwd } }),
    ]);
    if (leadsRes.ok) {
      const data = await leadsRes.json();
      setLeads(data.leads || []);
      setAuthed(true);
      localStorage.setItem('hrp_admin', pwd);
    } else {
      setError('Wrong password! Dobara try karo.');
      localStorage.removeItem('hrp_admin');
    }
    if (techRes.ok) {
      const data = await techRes.json();
      setTechnicians(data.technicians || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('hrp_admin');
    if (saved) fetchLeads(saved);
  }, [fetchLeads]);

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
        <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-2">🔒</div>
            <h1 className="text-white font-black text-xl">HomeRepairPro Admin</h1>
            <p className="text-gray-500 text-sm mt-1">Private Dashboard</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password dalein..."
            className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 mb-3 outline-none border border-gray-700 focus:border-blue-500"
            onKeyDown={(e) => e.key === 'Enter' && fetchLeads(password)}
            autoFocus
          />
          {error && <p className="text-red-400 text-sm mb-3 text-center">{error}</p>}
          <button
            onClick={() => fetchLeads(password)}
            disabled={loading || !password}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-3 rounded-xl font-bold transition-colors"
          >
            {loading ? '⏳ Checking...' : 'Enter Dashboard →'}
          </button>
        </div>
      </div>
    );
  }

  const now = new Date();
  const lastMonthDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  const total = leads.length;
  const todayLeads = leads.filter((l) => new Date(l.created_at).toDateString() === now.toDateString()).length;
  const weekLeads = leads.filter((l) => (Date.now() - new Date(l.created_at).getTime()) / 86400000 <= 7).length;
  const monthLeads = leads.filter((l) => (Date.now() - new Date(l.created_at).getTime()) / 86400000 <= 30).length;
  const thisMonthLeads = leads.filter((l) => {
    const d = new Date(l.created_at);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;
  const lastMonthLeads = leads.filter((l) => {
    const d = new Date(l.created_at);
    return d.getMonth() === lastMonthDate.getMonth() && d.getFullYear() === lastMonthDate.getFullYear();
  }).length;
  const googleAdsLeads = leads.filter((l) => l.gclid).length;
  const mobileLeads = leads.filter((l) => l.device === 'mobile').length;

  const SOURCE_LABELS = {
    quick_book_form:  '⚡ Quick Book',
    lead_form:        '📋 Lead Form',
    hero_form:        '🏠 Hero Form',
    service_page:     '🔧 Service Page',
    city_page:        '📍 City Page',
    lp_fridge_form:   '🧊 Fridge LP',
    lp_wm_form:       '🫧 WM LP',
    lp_form:          '📋 LP Form',
    whatsapp_click:   '💬 WA Click',
    call_click:       '📞 Call Click',
    whatsapp_float:   '💬 WA Float',
    sticky_bottom:    '📌 Sticky',
    call_button:      '📞 Call Btn',
  };

  const countBy = (key) => {
    const map = {};
    leads.forEach((l) => {
      let val = l[key] || 'Unknown';
      if (key === 'utm_source' && l.gclid) val = 'Google Ads';
      if (key === 'source_component') val = SOURCE_LABELS[val] || val;
      map[val] = (map[val] || 0) + 1;
    });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  };

  const filteredLeads = leads
    .filter((l) => {
      const d = new Date(l.created_at);
      if (filter === 'today')      return d.toDateString() === now.toDateString();
      if (filter === 'week')       return (Date.now() - d.getTime()) / 86400000 <= 7;
      if (filter === 'paid')       return !!l.gclid;
      if (filter === 'this_month') return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      if (filter === 'last_month') return d.getMonth() === lastMonthDate.getMonth() && d.getFullYear() === lastMonthDate.getFullYear();
      if (filter === 'custom' && customFrom && customTo) {
        const to = new Date(customTo); to.setHours(23, 59, 59, 999);
        return d >= new Date(customFrom) && d <= to;
      }
      return true;
    })
    .filter((l) =>
      search === '' ||
      (l.name || '').toLowerCase().includes(search.toLowerCase()) ||
      l.phone?.includes(search) ||
      l.city?.toLowerCase().includes(search.toLowerCase()) ||
      l.service?.toLowerCase().includes(search.toLowerCase())
    );

  const downloadCSV = () => {
    const headers = ['Date', 'Time', 'Name', 'Phone', 'Service', 'City', 'Message', 'Form/Source', 'Traffic', 'Campaign', 'Keyword', 'Device', 'Landing Page', 'GCLID'];
    const rows = filteredLeads.map((l) => {
      const d = new Date(l.created_at);
      return [
        d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
        l.name || '',
        l.phone || '',
        l.service || '',
        l.city || '',
        l.message || '',
        SOURCE_LABELS[l.source_component] || l.source_component || '',
        l.gclid ? 'Google Ads (Paid)' : (l.utm_source || 'direct'),
        l.utm_campaign || '',
        l.utm_keyword || '',
        l.device || '',
        l.landing_page || '',
        l.gclid || '',
      ].map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',');
    });
    const csv = '﻿' + [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const label = filter === 'this_month' ? 'this-month' : filter === 'last_month' ? 'last-month' : filter === 'custom' ? `${customFrom}-to-${customTo}` : filter;
    a.download = `hrp-leads-${label}-${now.toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <span className="text-lg font-black">🔧 HRP Admin</span>
          <span className="bg-green-900 text-green-400 text-xs px-2 py-0.5 rounded-full font-bold">LIVE</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => fetchLeads(localStorage.getItem('hrp_admin') || '')} className="text-gray-400 hover:text-white text-sm">
            🔄 Refresh
          </button>
          <button
            onClick={() => { setAuthed(false); localStorage.removeItem('hrp_admin'); }}
            className="text-gray-500 hover:text-red-400 text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="bg-gray-900 border-b border-gray-800 px-4 flex gap-1 overflow-x-auto">
        {['overview', 'leads', 'technicians', 'seo'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 px-4 text-sm font-semibold whitespace-nowrap capitalize transition-colors ${
              activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab === 'overview' ? '📊 Overview' : tab === 'leads' ? '📋 All Leads' : tab === 'technicians' ? `🔧 Technicians (${technicians.length})` : '🔍 SEO Tools'}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">

        {activeTab === 'overview' && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
              {[
                { label: 'Total Leads', value: total, color: 'text-blue-400', bg: 'bg-blue-950' },
                { label: 'Aaj', value: todayLeads, color: 'text-green-400', bg: 'bg-green-950' },
                { label: 'Is Hafte', value: weekLeads, color: 'text-purple-400', bg: 'bg-purple-950' },
                { label: 'Is Mahine', value: monthLeads, color: 'text-yellow-400', bg: 'bg-yellow-950' },
                { label: 'Google Ads', value: googleAdsLeads, color: 'text-orange-400', bg: 'bg-orange-950' },
                { label: 'Mobile %', value: total ? `${Math.round((mobileLeads / total) * 100)}%` : '0%', color: 'text-pink-400', bg: 'bg-pink-950' },
              ].map((s) => (
                <div key={s.label} className={`${s.bg} rounded-xl p-4 border border-gray-800`}>
                  <p className="text-gray-500 text-xs mb-1">{s.label}</p>
                  <p className={`text-2xl font-black ${s.color}`}>{s.value}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-5 mb-6">
              {[
                { title: '📍 By City', data: countBy('city'), color: 'bg-blue-500' },
                { title: '🔧 By Service', data: countBy('service'), color: 'bg-orange-500' },
                { title: '📡 By Traffic Source', data: countBy('utm_source'), color: 'bg-green-500' },
                { title: '📋 By Form', data: countBy('source_component'), color: 'bg-purple-500' },
              ].map((chart) => (
                <div key={chart.title} className="bg-gray-900 rounded-xl p-5 border border-gray-800">
                  <h3 className="font-bold text-gray-300 mb-4">{chart.title}</h3>
                  {chart.data.length === 0 ? (
                    <p className="text-gray-600 text-sm">No data yet</p>
                  ) : (
                    chart.data.map(([label, count]) => (
                      <div key={label} className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-400 w-28 truncate">{label || '—'}</span>
                        <div className="flex-1 bg-gray-800 rounded-full h-2">
                          <div
                            className={`${chart.color} h-2 rounded-full transition-all`}
                            style={{ width: `${total ? (count / total) * 100 : 0}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-white w-5 text-right">{count}</span>
                      </div>
                    ))
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-xl border border-gray-800 mb-6 overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
                <h3 className="font-bold text-white text-base">🕐 Latest Leads</h3>
                <button onClick={() => setActiveTab('leads')} className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors">
                  Sab dekho →
                </button>
              </div>
              {leads.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-8">Koi lead nahi aaya abhi</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-800/70 text-gray-400 text-xs uppercase tracking-wider">
                        <th className="text-left px-4 py-3 font-semibold">#</th>
                        <th className="text-left px-4 py-3 font-semibold">Date & Time</th>
                        <th className="text-left px-4 py-3 font-semibold">Name</th>
                        <th className="text-left px-4 py-3 font-semibold">Phone</th>
                        <th className="hidden sm:table-cell text-left px-4 py-3 font-semibold">Service</th>
                        <th className="hidden sm:table-cell text-left px-4 py-3 font-semibold">City</th>
                        <th className="text-left px-4 py-3 font-semibold">Source</th>
                        <th className="px-4 py-3"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.slice(0, 5).map((lead, idx) => (
                        <tr
                          key={lead.id}
                          onClick={() => { setSelectedLead(lead); setActiveTab('leads'); }}
                          className="border-t border-gray-800 hover:bg-gray-800/60 cursor-pointer transition-colors group"
                        >
                          <td className="px-4 py-3 text-gray-400 font-mono text-xs">{idx + 1}</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <p className="text-white font-semibold text-xs">
                              {new Date(lead.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                            </p>
                            <p className="text-gray-400 text-xs mt-0.5">
                              {new Date(lead.created_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-blue-300 font-bold text-xs flex-shrink-0">
                                {(lead.name || 'N')[0].toUpperCase()}
                              </div>
                              <span className={`font-semibold ${!lead.name ? 'text-gray-400 italic' : 'text-white'}`}>
                                {lead.name || 'No Name'}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <a
                              href={`tel:${lead.phone}`}
                              onClick={(e) => e.stopPropagation()}
                              className="text-blue-300 hover:text-blue-200 font-bold font-mono text-sm hover:underline"
                            >
                              {lead.phone}
                            </a>
                          </td>
                          <td className="hidden sm:table-cell px-4 py-3 text-gray-200 text-xs max-w-[130px] truncate font-medium">{lead.service || '—'}</td>
                          <td className="hidden sm:table-cell px-4 py-3 text-gray-200 text-xs font-medium">{lead.city || '—'}</td>
                          <td className="px-4 py-3">
                            {lead.gclid ? (
                              <span className="bg-green-900 border border-green-700 text-green-300 text-xs px-2 py-0.5 rounded font-bold">⭐ ADS</span>
                            ) : lead.source_component ? (
                              <span className="bg-gray-800 border border-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded font-medium">
                                {SOURCE_LABELS[lead.source_component] || lead.source_component}
                              </span>
                            ) : (
                              <span className="text-gray-600 text-xs">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-gray-500 group-hover:text-gray-300 text-xs transition-colors">→</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h3 className="font-bold text-gray-300 mb-4">⚡ Quick Links</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {QUICK_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} hover:opacity-80 rounded-xl p-3 flex items-center gap-3 transition-opacity border border-gray-700`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-sm font-semibold">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'leads' && (
          <>
            {selectedLead ? (
              /* ── LEAD DETAIL VIEW ── */
              <div className="pb-24 md:pb-0">
                <button
                  onClick={() => setSelectedLead(null)}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 hover:text-white text-sm px-4 py-3 rounded-xl mb-4 transition-all font-semibold w-full md:w-auto"
                >
                  ← Back to Leads
                </button>

                {/* Header card */}
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-blue-900 border-2 border-blue-700 flex items-center justify-center text-blue-300 font-black text-xl flex-shrink-0">
                      {(selectedLead.name || 'U')[0].toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h2 className="text-lg font-black text-white">
                          {selectedLead.name || <span className="text-gray-400 italic font-medium">Unknown</span>}
                        </h2>
                        {selectedLead.gclid && (
                          <span className="bg-green-900 text-green-400 text-xs px-2 py-0.5 rounded-full font-bold">⭐ ADS</span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm font-medium">{selectedLead.service || '—'}</p>
                      <p className="text-gray-500 text-xs">{selectedLead.city || '—'} · {new Date(selectedLead.created_at).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                  </div>
                  {/* Phone number — big tap target on mobile */}
                  <div className="md:hidden mb-1">
                    <a href={`tel:${selectedLead.phone}`} className="text-blue-300 font-bold font-mono text-xl">📞 {selectedLead.phone}</a>
                  </div>
                  {/* CTA buttons — desktop only in header */}
                  <div className="hidden md:flex gap-3 flex-wrap">
                    <a href={`tel:${selectedLead.phone}`} className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
                      📞 {selectedLead.phone}
                    </a>
                    <a
                      href={`https://wa.me/91${(selectedLead.phone || '').replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${selectedLead.name || ''}, HomeRepairPro se bol rahe hain. Aapne ${selectedLead.service || 'repair'} ke liye request diya tha ${selectedLead.city ? `${selectedLead.city} mein` : ''}. Kya hum abhi baat kar sakte hain?`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                {/* Mobile tab switcher */}
                <div className="flex md:hidden bg-gray-900 border border-gray-800 rounded-xl mb-4 p-1 gap-1">
                  {[['info', '👤 Lead Info'], ['tracking', '📡 Tracking']].map(([key, label]) => (
                    <button key={key} onClick={() => setDetailTab(key)}
                      className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${detailTab === key ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                      {label}
                    </button>
                  ))}
                </div>

                {/* Desktop: 2-col grid */}
                <div className="hidden md:grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Lead Info</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Name',    value: selectedLead.name || 'Unknown', icon: '👤' },
                        { label: 'Phone',   value: selectedLead.phone,             icon: '📱' },
                        { label: 'Service', value: selectedLead.service,           icon: '🔧' },
                        { label: 'City',    value: selectedLead.city,              icon: '📍' },
                        { label: 'Message', value: selectedLead.message || '(no message)', icon: '💬' },
                      ].map((row) => (
                        <div key={row.label} className="flex gap-3">
                          <span className="text-base w-5 flex-shrink-0 mt-0.5">{row.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-500 text-xs mb-0.5">{row.label}</p>
                            <p className={`text-sm font-semibold break-words ${!selectedLead[row.label.toLowerCase()] && row.label === 'Name' ? 'text-gray-400 italic' : 'text-white'}`}>
                              {row.value || '—'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Tracking & Source</h3>
                    <div className="space-y-4">
                      {[
                        { label: 'Form / Source',  value: SOURCE_LABELS[selectedLead.source_component] || selectedLead.source_component, icon: '📋' },
                        { label: 'Traffic Source', value: selectedLead.gclid ? 'Google Ads (Paid)' : (selectedLead.utm_source || 'Direct / Organic'), icon: '📡' },
                        { label: 'Campaign',       value: selectedLead.utm_campaign, icon: '🎯' },
                        { label: 'Keyword',        value: selectedLead.utm_keyword,  icon: '🔑' },
                        { label: 'GCLID',          value: selectedLead.gclid ? `${selectedLead.gclid.substring(0, 24)}…` : null, icon: '⭐' },
                        { label: 'Landing Page',   value: selectedLead.landing_page, icon: '🌐' },
                        { label: 'Device',         value: selectedLead.device,       icon: '📱' },
                      ].map((row) => (
                        <div key={row.label} className="flex gap-3">
                          <span className="text-base w-5 flex-shrink-0 mt-0.5">{row.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-500 text-xs mb-0.5">{row.label}</p>
                            <p className="text-white text-sm font-semibold truncate" title={row.value || ''}>
                              {row.value || <span className="text-gray-600">—</span>}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                  <p className="text-gray-500 text-xs mb-0.5">Lead received on</p>
                  <p className="text-white font-bold text-sm">
                    {new Date(selectedLead.created_at).toLocaleString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {/* Mobile: tab-controlled single card */}
                {detailTab === 'info' && (
                  <div className="md:hidden bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-4">
                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Lead Info</h3>
                    <div className="space-y-5">
                      {[
                        { label: 'Name',    value: selectedLead.name || 'Unknown', icon: '👤' },
                        { label: 'Phone',   value: selectedLead.phone,             icon: '📱' },
                        { label: 'Service', value: selectedLead.service,           icon: '🔧' },
                        { label: 'City',    value: selectedLead.city,              icon: '📍' },
                        { label: 'Message', value: selectedLead.message || '(no message)', icon: '💬' },
                      ].map((row) => (
                        <div key={row.label} className="flex gap-3">
                          <span className="text-base w-5 flex-shrink-0 mt-0.5">{row.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-500 text-xs mb-1">{row.label}</p>
                            <p className={`text-base font-bold break-words ${!selectedLead[row.label.toLowerCase()] && row.label === 'Name' ? 'text-gray-400 italic' : 'text-white'}`}>
                              {row.value || '—'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {detailTab === 'tracking' && (
                  <div className="md:hidden bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-4">
                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">Tracking & Source</h3>
                    <div className="space-y-5">
                      {[
                        { label: 'Form / Source',  value: SOURCE_LABELS[selectedLead.source_component] || selectedLead.source_component, icon: '📋' },
                        { label: 'Traffic Source', value: selectedLead.gclid ? 'Google Ads (Paid)' : (selectedLead.utm_source || 'Direct / Organic'), icon: '📡' },
                        { label: 'Campaign',       value: selectedLead.utm_campaign, icon: '🎯' },
                        { label: 'Keyword',        value: selectedLead.utm_keyword,  icon: '🔑' },
                        { label: 'GCLID',          value: selectedLead.gclid ? `${selectedLead.gclid.substring(0, 24)}…` : null, icon: '⭐' },
                        { label: 'Landing Page',   value: selectedLead.landing_page, icon: '🌐' },
                        { label: 'Device',         value: selectedLead.device,       icon: '📱' },
                      ].map((row) => (
                        <div key={row.label} className="flex gap-3">
                          <span className="text-base w-5 flex-shrink-0 mt-0.5">{row.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-500 text-xs mb-1">{row.label}</p>
                            <p className="text-white text-base font-bold truncate" title={row.value || ''}>
                              {row.value || <span className="text-gray-600">—</span>}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sticky bottom CTA — mobile only */}
                <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-950/95 backdrop-blur-sm border-t border-gray-800 p-3 flex gap-3 z-50">
                  <a href={`tel:${selectedLead.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#F97316] active:bg-orange-700 text-white font-bold py-4 rounded-xl text-base">
                    📞 Call Now
                  </a>
                  <a href={`https://wa.me/91${(selectedLead.phone || '').replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${selectedLead.name || ''}, HomeRepairPro se bol rahe hain. Aapne ${selectedLead.service || 'repair'} ke liye request diya tha ${selectedLead.city ? `${selectedLead.city} mein` : ''}. Kya hum abhi baat kar sakte hain?`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] active:bg-green-700 text-white font-bold py-4 rounded-xl text-base">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              /* ── LEADS LIST ── */
              <div className="bg-gray-900 rounded-xl border border-gray-800">
                <div className="p-4 border-b border-gray-800 space-y-3">
                  {/* Row 1: title + search + download */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-gray-200">Leads ({filteredLeads.length})</h3>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Name, phone, city, service..."
                      className="ml-auto bg-gray-800 text-white rounded-lg px-3 py-2 text-sm outline-none border border-gray-700 focus:border-blue-500 w-full sm:w-56"
                    />
                    <button
                      onClick={downloadCSV}
                      disabled={filteredLeads.length === 0}
                      className="flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                    >
                      ⬇ CSV ({filteredLeads.length})
                    </button>
                  </div>

                  {/* Row 2: filter buttons */}
                  <div className="flex gap-2 flex-wrap">
                    {[
                      { key: 'all',        label: `All  ${leads.length}` },
                      { key: 'today',      label: `Today  ${todayLeads}` },
                      { key: 'week',       label: `This Week  ${weekLeads}` },
                      { key: 'this_month', label: `This Month  ${thisMonthLeads}` },
                      { key: 'last_month', label: `Last Month  ${lastMonthLeads}` },
                      { key: 'paid',       label: `Paid Ads  ${googleAdsLeads}` },
                      { key: 'custom',     label: '📅 Custom' },
                    ].map((f) => (
                      <button
                        key={f.key}
                        onClick={() => setFilter(f.key)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                          filter === f.key
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>

                  {/* Row 3: custom date inputs — only when custom is selected */}
                  {filter === 'custom' && (
                    <div className="flex items-center gap-2 flex-wrap pt-1">
                      <span className="text-gray-500 text-xs font-semibold">From</span>
                      <input
                        type="date"
                        value={customFrom}
                        onChange={(e) => setCustomFrom(e.target.value)}
                        className="bg-gray-800 text-white text-xs rounded-lg px-3 py-2 border border-gray-700 focus:border-blue-500 outline-none"
                      />
                      <span className="text-gray-500 text-xs font-semibold">To</span>
                      <input
                        type="date"
                        value={customTo}
                        onChange={(e) => setCustomTo(e.target.value)}
                        className="bg-gray-800 text-white text-xs rounded-lg px-3 py-2 border border-gray-700 focus:border-blue-500 outline-none"
                      />
                      {customFrom && customTo && (
                        <span className="text-blue-400 text-xs font-semibold">{filteredLeads.length} leads</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Mobile card list */}
                <div className="md:hidden divide-y divide-gray-800">
                  {filteredLeads.length === 0 ? (
                    <p className="text-gray-600 text-sm text-center py-10">
                      {search || filter !== 'all' ? '🔍 Koi lead nahi mili is filter mein' : '📋 Abhi tak koi lead nahi aaya'}
                    </p>
                  ) : filteredLeads.map((lead, idx) => (
                    <div key={lead.id} onClick={() => setSelectedLead(lead)}
                      className="flex items-start gap-3 p-4 active:bg-gray-800/60 cursor-pointer transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-blue-300 font-black text-sm flex-shrink-0 mt-0.5">
                        {(lead.name || 'N')[0].toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <p className={`font-bold text-sm ${!lead.name ? 'text-gray-400 italic' : 'text-white'}`}>
                              {lead.name || 'Unknown'}
                            </p>
                            <p className="text-gray-400 text-xs mt-0.5 truncate">{lead.service || '—'} · {lead.city || '—'}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            {lead.gclid && <span className="bg-green-900 text-green-300 text-xs px-1.5 py-0.5 rounded font-bold block mb-1">⭐ ADS</span>}
                            <p className="text-gray-400 text-xs whitespace-nowrap">
                              {new Date(lead.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                            </p>
                            <p className="text-gray-500 text-xs">
                              {new Date(lead.created_at).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <a href={`tel:${lead.phone}`} onClick={(e) => e.stopPropagation()}
                            className="text-blue-300 font-bold font-mono text-base">
                            {lead.phone}
                          </a>
                          <span className="text-gray-600 text-sm">→</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 text-xs border-b border-gray-800 bg-gray-900/60">
                        <th className="text-left px-4 py-3 w-10">S.No</th>
                        <th className="text-left px-4 py-3">Name</th>
                        <th className="text-left px-4 py-3">Phone</th>
                        <th className="text-left px-4 py-3">City</th>
                        <th className="text-left px-4 py-3">Service</th>
                        <th className="text-left px-4 py-3">Source</th>
                        <th className="text-left px-4 py-3">Traffic</th>
                        <th className="text-left px-4 py-3">Device</th>
                        <th className="text-left px-4 py-3">Time</th>
                        <th className="text-left px-4 py-3 w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead, idx) => (
                        <tr key={lead.id} onClick={() => setSelectedLead(lead)}
                          className="border-b border-gray-800/50 hover:bg-gray-800/60 cursor-pointer transition-colors group">
                          <td className="px-4 py-3 text-gray-600 text-xs font-mono">{idx + 1}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 font-bold text-xs flex-shrink-0">
                                {(lead.name || 'U')[0].toUpperCase()}
                              </div>
                              <span className={`font-medium text-sm ${!lead.name ? 'text-gray-500 italic' : 'text-white'}`}>
                                {lead.name || 'Unknown'}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <a href={`tel:${lead.phone}`} onClick={(e) => e.stopPropagation()}
                              className="text-blue-400 hover:underline font-mono text-xs">{lead.phone}</a>
                          </td>
                          <td className="px-4 py-3 text-gray-300 text-xs">{lead.city || '—'}</td>
                          <td className="px-4 py-3 text-gray-300 text-xs max-w-[130px] truncate">{lead.service || '—'}</td>
                          <td className="px-4 py-3">
                            {lead.source_component ? (
                              <span className={`px-2 py-0.5 rounded text-xs font-bold whitespace-nowrap ${
                                (lead.source_component || '').startsWith('lp_') ? 'bg-purple-900 text-purple-300' :
                                lead.source_component === 'quick_book_form' ? 'bg-orange-900 text-orange-400' :
                                'bg-blue-900 text-blue-400'
                              }`}>{SOURCE_LABELS[lead.source_component] || lead.source_component}</span>
                            ) : <span className="text-gray-700">—</span>}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                              lead.gclid ? 'bg-green-900 text-green-400' :
                              !lead.utm_source || lead.utm_source === 'direct' ? 'bg-gray-800 text-gray-500' :
                              'bg-blue-900 text-blue-400'
                            }`}>{lead.gclid ? '⭐ Ads' : (lead.utm_source || 'direct')}</span>
                          </td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{lead.device || '—'}</td>
                          <td className="px-4 py-3 text-gray-600 text-xs whitespace-nowrap">
                            {new Date(lead.created_at).toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                          </td>
                          <td className="px-4 py-3 text-gray-700 group-hover:text-gray-400 text-xs transition-colors">→</td>
                        </tr>
                      ))}
                      {filteredLeads.length === 0 && (
                        <tr>
                          <td colSpan={10} className="px-4 py-12 text-center text-gray-600">
                            {search || filter !== 'all' ? '🔍 Koi lead nahi mili is filter mein' : '📋 Abhi tak koi lead nahi aaya'}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {activeTab === 'seo' && (
          <>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {SEO_TOOLS.map((tool) => (
                <a
                  key={tool.label}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 border border-gray-800 hover:border-blue-700 rounded-xl p-5 flex items-start gap-4 transition-colors group"
                >
                  <span className="text-3xl">{tool.icon}</span>
                  <div>
                    <p className="font-bold text-white group-hover:text-blue-400 transition-colors">{tool.label}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{tool.note}</p>
                  </div>
                  <span className="ml-auto text-gray-600 group-hover:text-blue-400">→</span>
                </a>
              ))}
            </div>

            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800 mb-5">
              <h3 className="font-bold text-gray-300 mb-5">🎯 Target Keywords — All Services + Cities</h3>

              {[
                {
                  service: '❄️ AC Repair',
                  color: 'text-blue-400',
                  season: '🔴 Off Season',
                  keywords: [
                    { kw: 'ac repair indore', vol: '10K-100K', diff: 'High', cpc: '₹20-40' },
                    { kw: 'ac service indore', vol: '10K-100K', diff: 'High', cpc: '₹18-35' },
                    { kw: 'ac repair near me', vol: '10K-100K', diff: 'High', cpc: '₹25-50' },
                    { kw: 'ac technician near me', vol: '1K-10K', diff: 'Medium', cpc: '₹15-30' },
                    { kw: 'ac repair bhopal', vol: '1K-10K', diff: 'Medium', cpc: '₹15-28' },
                    { kw: 'ac service center indore', vol: '1K-10K', diff: 'Medium', cpc: '₹12-25' },
                    { kw: 'ac gas filling indore', vol: '1K-10K', diff: 'Medium', cpc: '₹12-22' },
                    { kw: 'ac not cooling indore', vol: '1K-10K', diff: 'Low', cpc: '₹10-18' },
                    { kw: 'split ac repair indore', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'voltas ac service indore', vol: '500-1K', diff: 'Low', cpc: '₹8-14' },
                    { kw: 'daikin ac service indore', vol: '500-1K', diff: 'Low', cpc: '₹8-14' },
                    { kw: 'lg ac repair indore', vol: '500-1K', diff: 'Low', cpc: '₹8-14' },
                    { kw: 'samsung ac repair indore', vol: '500-1K', diff: 'Low', cpc: '₹8-14' },
                    { kw: 'carrier ac repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'ac repair ujjain', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                    { kw: 'ac repair dewas', vol: '100-500', diff: 'Very Low', cpc: '₹3-7' },
                    { kw: 'ac repair mhow', vol: '100', diff: 'Very Low', cpc: '₹3-6' },
                    { kw: 'ac repair jabalpur', vol: '500-1K', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'ac repair sehore', vol: '100', diff: 'Very Low', cpc: '₹3-6' },
                    { kw: 'window ac repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                  ],
                },
                {
                  service: '🫧 Washing Machine Repair',
                  color: 'text-cyan-400',
                  season: '🟢 All Season',
                  keywords: [
                    { kw: 'washing machine repair indore', vol: '1K-10K', diff: 'Medium', cpc: '₹12-22' },
                    { kw: 'washing machine repair near me', vol: '10K-100K', diff: 'High', cpc: '₹20-40' },
                    { kw: 'washing machine repair bhopal', vol: '1K-10K', diff: 'Medium', cpc: '₹10-20' },
                    { kw: 'washing machine service indore', vol: '1K-10K', diff: 'Medium', cpc: '₹10-18' },
                    { kw: 'washing machine not working indore', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'washing machine not draining indore', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'front load washing machine repair indore', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'fully automatic washing machine repair indore', vol: '500-1K', diff: 'Low', cpc: '₹8-14' },
                    { kw: 'semi automatic washing machine repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'lg washing machine repair indore', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'samsung washing machine repair indore', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'whirlpool washing machine repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'bosch washing machine repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'ifb washing machine repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'washing machine drum not rotating indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'washing machine repair ujjain', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                    { kw: 'washing machine repair dewas', vol: '100', diff: 'Very Low', cpc: '₹3-7' },
                    { kw: 'washing machine repair jabalpur', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                  ],
                },
                {
                  service: '🧊 Refrigerator Repair',
                  color: 'text-teal-400',
                  season: '🟢 All Season',
                  keywords: [
                    { kw: 'refrigerator repair indore', vol: '1K-10K', diff: 'Medium', cpc: '₹12-22' },
                    { kw: 'fridge repair indore', vol: '1K-10K', diff: 'Medium', cpc: '₹10-20' },
                    { kw: 'fridge repair near me', vol: '10K-100K', diff: 'High', cpc: '₹18-35' },
                    { kw: 'refrigerator repair bhopal', vol: '500-1K', diff: 'Low', cpc: '₹8-16' },
                    { kw: 'fridge not cooling indore', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'fridge compressor repair indore', vol: '500-1K', diff: 'Low', cpc: '₹10-18' },
                    { kw: 'refrigerator gas filling indore', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'double door fridge repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹6-12' },
                    { kw: 'single door fridge repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'lg fridge repair indore', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'samsung fridge repair indore', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'whirlpool fridge repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'godrej fridge repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'haier fridge repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'refrigerator repair ujjain', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                    { kw: 'fridge repair jabalpur', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                    { kw: 'fridge making noise indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'fridge water leaking indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                  ],
                },
                {
                  service: '🚿 Geyser Repair',
                  color: 'text-orange-400',
                  season: '🟢 Peak Season (Oct-Feb)',
                  keywords: [
                    { kw: 'geyser repair indore', vol: '1K-10K', diff: 'Medium', cpc: '₹10-20' },
                    { kw: 'water heater repair indore', vol: '1K-10K', diff: 'Medium', cpc: '₹10-18' },
                    { kw: 'geyser repair near me', vol: '1K-10K', diff: 'Medium', cpc: '₹12-22' },
                    { kw: 'geyser repair bhopal', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'geyser not heating water indore', vol: '500-1K', diff: 'Low', cpc: '₹8-14' },
                    { kw: 'geyser service indore', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'geyser installation indore', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'instant geyser repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'storage geyser repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'bajaj geyser repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'havells geyser repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'racold geyser repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'ao smith geyser repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'geyser leaking repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'geyser tripping indore', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                    { kw: 'geyser repair ujjain', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                    { kw: 'geyser repair dewas', vol: '100', diff: 'Very Low', cpc: '₹3-7' },
                    { kw: 'geyser repair jabalpur', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                  ],
                },
                {
                  service: '🍳 Chimney Cleaning',
                  color: 'text-yellow-400',
                  season: '🟢 All Season',
                  keywords: [
                    { kw: 'chimney cleaning indore', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'kitchen chimney repair indore', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'chimney cleaning near me', vol: '1K-10K', diff: 'Medium', cpc: '₹10-20' },
                    { kw: 'chimney cleaning bhopal', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'chimney repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹6-12' },
                    { kw: 'chimney suction not working indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'chimney service indore', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'elica chimney repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'faber chimney repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'glen chimney repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'hindware chimney repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'prestige chimney repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'chimney filter cleaning indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'auto clean chimney service indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'chimney cleaning ujjain', vol: '100', diff: 'Very Low', cpc: '₹3-7' },
                    { kw: 'chimney repair bhopal', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                  ],
                },
                {
                  service: '📡 Microwave Repair',
                  color: 'text-pink-400',
                  season: '🟢 All Season',
                  keywords: [
                    { kw: 'microwave repair indore', vol: '500-1K', diff: 'Low', cpc: '₹8-15' },
                    { kw: 'microwave oven repair near me', vol: '1K-10K', diff: 'Medium', cpc: '₹10-20' },
                    { kw: 'microwave repair bhopal', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'microwave not heating indore', vol: '500-1K', diff: 'Low', cpc: '₹7-13' },
                    { kw: 'microwave oven repair indore', vol: '500-1K', diff: 'Low', cpc: '₹8-14' },
                    { kw: 'lg microwave repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'samsung microwave repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'ifb microwave repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                    { kw: 'convection microwave repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-9' },
                    { kw: 'solo microwave repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                    { kw: 'microwave door not opening indore', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                    { kw: 'microwave sparking repair indore', vol: '100-500', diff: 'Very Low', cpc: '₹4-8' },
                    { kw: 'microwave repair ujjain', vol: '100', diff: 'Very Low', cpc: '₹3-7' },
                    { kw: 'microwave service center indore', vol: '100-500', diff: 'Very Low', cpc: '₹5-10' },
                  ],
                },
              ].map((group) => (
                <div key={group.service} className="mb-7">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className={`font-bold text-sm ${group.color}`}>{group.service}</h4>
                    <span className="text-xs bg-gray-800 px-2 py-0.5 rounded-full text-gray-400">{group.season}</span>
                    <span className="text-xs text-gray-600 ml-auto">{group.keywords.length} keywords</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {group.keywords.map((row) => (
                      <div key={row.kw} className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
                        row.diff === 'High' ? 'bg-red-950 border border-red-900/40' :
                        row.diff === 'Medium' ? 'bg-yellow-950 border border-yellow-900/40' :
                        'bg-gray-800 border border-gray-700/40'
                      }`}>
                        <span className="text-xs flex-shrink-0">{
                          row.diff === 'High' ? '🔴' :
                          row.diff === 'Medium' ? '🟡' : '🟢'
                        }</span>
                        <span className="text-xs font-mono text-gray-200 flex-1 min-w-0 truncate">{row.kw}</span>
                        <span className="text-xs text-gray-500 whitespace-nowrap flex-shrink-0">{row.vol}</span>
                        <span className="text-xs text-green-400 whitespace-nowrap flex-shrink-0 font-mono">{row.cpc}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded font-bold whitespace-nowrap flex-shrink-0 ${
                          row.diff === 'High' ? 'bg-red-900 text-red-400' :
                          row.diff === 'Medium' ? 'bg-yellow-900 text-yellow-400' :
                          row.diff === 'Low' ? 'bg-teal-900 text-teal-400' :
                          'bg-green-900 text-green-400'
                        }`}>{row.diff}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-xl p-5 border border-gray-800">
              <h3 className="font-bold text-gray-300 mb-4">🏆 Competitors Monitor Karo</h3>
              <div className="space-y-3">
                {[
                  { name: 'TrueService Center', url: 'https://trueservicecenter.in', threat: 'High', note: 'Bhopal mein strongest — Hinglish content' },
                  { name: 'Shikha Refrigeration', url: 'https://shikharefrigeration.online', threat: 'Low', note: '2010-era design, not mobile friendly' },
                  { name: 'RB Refrigeration', url: 'https://rbrefrigeration.in', threat: 'None', note: 'Placeholder website — no competition' },
                ].map((comp) => (
                  <div key={comp.name} className="flex items-center gap-4 bg-gray-800 rounded-xl p-4">
                    <div className="flex-1">
                      <p className="font-bold text-sm">{comp.name}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{comp.note}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded font-bold ${
                      comp.threat === 'High' ? 'bg-red-900 text-red-400' :
                      comp.threat === 'Low' ? 'bg-yellow-900 text-yellow-400' :
                      'bg-gray-700 text-gray-500'
                    }`}>{comp.threat}</span>
                    <a href={comp.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xs hover:underline">
                      Visit →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'technicians' && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-lg font-bold text-white">🔧 Technician Applications</h2>
                <p className="text-gray-500 text-sm mt-0.5">{technicians.length} total applications</p>
              </div>
              <input
                type="text"
                value={techSearch}
                onChange={(e) => setTechSearch(e.target.value)}
                placeholder="Name, phone, city se search karo..."
                className="bg-gray-800 text-white text-sm rounded-xl px-4 py-2.5 border border-gray-700 focus:border-blue-500 outline-none w-full sm:w-72"
              />
            </div>

            {technicians.length === 0 ? (
              <div className="text-center py-16 text-gray-600">
                <div className="text-5xl mb-3">🔧</div>
                <p className="font-semibold">Abhi koi application nahi hai</p>
                <p className="text-sm mt-1">Jab koi technician apply karega, yahan dikhega.</p>
                <a href="/join-as-technician" target="_blank" className="inline-block mt-4 text-blue-400 text-sm hover:underline">
                  Apply page dekho →
                </a>
              </div>
            ) : (
              <div className="space-y-3">
                {technicians
                  .filter((t) =>
                    techSearch === '' ||
                    t.name?.toLowerCase().includes(techSearch.toLowerCase()) ||
                    t.phone?.includes(techSearch) ||
                    t.city?.toLowerCase().includes(techSearch.toLowerCase())
                  )
                  .map((t) => (
                    <div key={t.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-2">
                            <span className="font-bold text-white">{t.name}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                              t.status === 'hired' ? 'bg-green-900 text-green-400' :
                              t.status === 'contacted' ? 'bg-blue-900 text-blue-400' :
                              t.status === 'rejected' ? 'bg-red-900 text-red-400' :
                              'bg-yellow-900 text-yellow-400'
                            }`}>
                              {t.status || 'pending'}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 text-sm text-gray-400">
                            <span>📱 {t.phone}</span>
                            <span>🏙️ {t.city}</span>
                            <span>⏱️ {t.experience_years}</span>
                            <span>🧰 Tools: {t.has_own_tools ? 'Yes ✅' : 'No ❌'}</span>
                            <span>⏰ {t.availability}</span>
                            {t.address && <span>📍 {t.address}</span>}
                          </div>
                          {t.specialization?.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              {t.specialization.map((s) => (
                                <span key={s} className="bg-gray-800 border border-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full">{s}</span>
                              ))}
                            </div>
                          )}
                          {t.message && (
                            <p className="text-gray-500 text-xs mt-2 italic">&quot;{t.message}&quot;</p>
                          )}
                          <p className="text-gray-700 text-xs mt-2">
                            {new Date(t.created_at).toLocaleString('en-IN')}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <a
                            href={`https://wa.me/91${t.phone}?text=${encodeURIComponent(`Namaste ${t.name}! HomeRepairPro se bol rahe hain. Aapki technician application receive hui hai. Hum aapke saath kaam karne mein interested hain. Kya aap available hain ek short call ke liye?`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-green-600 text-white text-xs px-3 py-2 rounded-lg font-semibold transition-colors"
                          >
                            WhatsApp
                          </a>
                          <a
                            href={`tel:+91${t.phone}`}
                            className="bg-blue-700 hover:bg-blue-600 text-white text-xs px-3 py-2 rounded-lg font-semibold transition-colors"
                          >
                            Call
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
