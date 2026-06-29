import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

export function getTrackingData() {
  if (typeof window === 'undefined') return {};
  return {
    gclid: localStorage.getItem('gclid') || null,
    utm_source: localStorage.getItem('utm_source') || 'direct',
    utm_campaign: localStorage.getItem('utm_campaign') || null,
    utm_keyword: localStorage.getItem('utm_keyword') || null,
    landing_page: localStorage.getItem('lp') || window.location.pathname,
    page_url: window.location.href,
    device: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
  };
}

export async function insertLead(lead) {
  if (!supabase) {
    console.error('[HRP] Supabase client is null — check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY env vars');
    return { data: null, error: null };
  }
  const { data, error } = await supabase.from('leads').insert([lead]);
  if (error) console.error('[HRP] Lead insert error:', error.message, error.details);
  return { data, error };
}

export async function insertInteraction(type, sourceComponent, extra = {}) {
  if (!supabase) return;
  const tracking = getTrackingData();
  await supabase.from('interactions').insert([{
    type,
    source_component: sourceComponent,
    page_url: tracking.page_url || null,
    device: tracking.device || null,
    utm_source: tracking.utm_source || null,
    utm_campaign: tracking.utm_campaign || null,
    ...extra,
  }]);
}

export async function insertTechnicianApplication(application) {
  if (!supabase) return { data: null, error: null };
  const { data, error } = await supabase.from('technician_applications').insert([application]);
  return { data, error };
}
