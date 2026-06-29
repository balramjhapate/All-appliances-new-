import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/utils/data';
import { FadeUp, StaggerList, StaggerItem } from '@/components/common/AnimateIn';

export default function ServiceGrid() {
  return (
    <section className="py-8 sm:py-14 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <FadeUp className="text-center mb-6 sm:mb-10">
          <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mb-2">
            Home Appliance Repair — All Brands
          </h2>
          <div className="w-14 h-1 bg-[#F97316] rounded-full mx-auto mb-3" />
          <p className="text-gray-500 text-xs sm:text-sm max-w-md mx-auto">
            AC • Fridge • Washing Machine • Geyser — Same day, starting ₹350
          </p>
        </FadeUp>

        {/* 2-col on mobile, 2 on md, 3 on lg */}
        <StaggerList className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {services.map((s) => (
            <StaggerItem
              key={s.slug}
              className="group bg-white rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-md sm:shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image → service page */}
              <Link href={`/${s.slug}`} className="block">
                <div className="relative h-28 sm:h-60 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.name} repair service — same-day home visit, all brands covered by HomeRepairPro`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                    <span className="bg-[#F97316] text-white px-2 py-0.5 sm:px-4 sm:py-2 rounded-full font-bold shadow-lg text-[10px] sm:text-sm">
                      ₹{s.price}+
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              </Link>

              <div className="p-2.5 sm:p-6">
                {/* Title → service page */}
                <Link href={`/${s.slug}`}>
                  <h3 className="text-xs sm:text-2xl font-black text-[#0F172A] mb-1 sm:mb-3 group-hover:text-[#F97316] transition-colors leading-tight">
                    {s.name}
                  </h3>
                </Link>

                {/* Description — hidden on mobile */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 hidden sm:block">{s.desc}</p>

                {/* Badge pills — hidden on mobile */}
                <div className="hidden sm:flex flex-wrap gap-2 mb-6">
                  <span className="bg-orange-50 text-[#F97316] px-3 py-1 rounded-full text-xs font-semibold">
                    Same Day Service
                  </span>
                  <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Warranty
                  </span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Expert Technician
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base sm:text-3xl font-black text-[#0F172A] leading-none">₹{s.price}</p>
                    <span className="text-[10px] sm:text-xs text-gray-400">Starting</span>
                  </div>

                  {/* Book Now → directly to booking form on service page */}
                  <Link
                    href={`/${s.slug}#book`}
                    className="bg-[#F97316] text-white px-2.5 py-1.5 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl font-bold flex items-center gap-1 sm:gap-2 shadow-md sm:shadow-lg hover:bg-orange-500 transition-all text-[10px] sm:text-sm"
                  >
                    <span>Book</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </section>
  );
}
