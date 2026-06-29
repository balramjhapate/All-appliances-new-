import { reviews } from '@/utils/data';
import { FadeUp, FadeIn, StaggerList, StaggerItem } from '@/components/common/AnimateIn';

function GoogleGIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.91 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function GoogleWordmark() {
  return (
    <span className="text-2xl font-bold tracking-tight leading-none">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

function Stars({ count = 5, size = 'md' }) {
  const cls = size === 'sm' ? 'text-base' : 'text-xl';
  return (
    <div className={`flex gap-0.5 ${cls}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'text-[#FBBC05]' : 'text-gray-200'}>★</span>
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className="py-8 sm:py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">

        {/* ── Header ── */}
        <FadeUp className="text-center mb-5 sm:mb-10">
          <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            Customer Reviews
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-gray-900 mb-3 leading-tight">
            Hamare Customers Ki <span className="text-[#F97316]">Rai</span>
          </h2>
          <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto" />
        </FadeUp>

        {/* ── Google Reviews CTA ── */}
        <FadeIn delay={0.1} className="bg-gray-50 border border-gray-200 rounded-2xl p-3 sm:p-5 md:p-6 mb-5 sm:mb-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-8">
          <div className="flex flex-col items-center sm:items-start gap-1 flex-1">
            <div className="flex items-center gap-2">
              <GoogleGIcon className="w-7 h-7" />
              <GoogleWordmark />
            </div>
            <p className="text-gray-500 text-xs mt-1 text-center sm:text-left">
              Real reviews from our customers across Indore, Bhopal &amp; 8 cities
            </p>
          </div>
          <a
            href="https://share.google/BE2ReHesatm7UhRpl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-400 text-gray-700 font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all whitespace-nowrap"
          >
            <GoogleGIcon className="w-4 h-4" />
            See All Reviews on Google
          </a>
        </FadeIn>

        {/* ── Review Cards — 2-col on mobile, 3-col on md+ ── */}
        <StaggerList className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {reviews.map((r) => (
            <StaggerItem key={r.name}>
            <a
              href="https://share.google/BE2ReHesatm7UhRpl"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all flex flex-col cursor-pointer h-full"
            >
              {/* Top row: avatar + name + Google G */}
              <div className="flex items-start justify-between mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#1B4FD8] text-white flex items-center justify-center font-black text-xs sm:text-base flex-shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xs sm:text-sm leading-tight">{r.name}</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">📍 {r.city}</p>
                  </div>
                </div>
                <GoogleGIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
              </div>

              {/* Stars */}
              <Stars count={r.rating} size="sm" />

              {/* Service badge */}
              {r.service && (
                <span className="inline-block mt-2 bg-orange-50 text-orange-700 text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-orange-100 self-start">
                  🔧 {r.service}
                </span>
              )}

              {/* Review text — 3 lines on mobile, full on sm+ */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3 flex-1 line-clamp-3 sm:line-clamp-none">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Verified badge */}
              <div className="flex items-center gap-1 sm:gap-1.5 mt-2 sm:mt-4 pt-2 sm:pt-4 border-t border-gray-100">
                <span className="text-[#34A853] text-[10px] sm:text-xs font-semibold">✓ Verified</span>
              </div>
            </a>
            </StaggerItem>
          ))}
        </StaggerList>

        {/* ── Bottom CTA ── */}
        <FadeUp delay={0.1} className="text-center mt-8">
          <a
            href="https://share.google/BE2ReHesatm7UhRpl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-400 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl shadow-sm transition-all"
          >
            <GoogleGIcon className="w-5 h-5" />
            Read All Google Reviews
          </a>
        </FadeUp>

      </div>
    </section>
  );
}
