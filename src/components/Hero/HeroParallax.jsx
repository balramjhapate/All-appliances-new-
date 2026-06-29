'use client';
import Image from 'next/image';
import { IMG_HERO_MAIN } from '@/utils/cdn';

export default function HeroParallax() {
  return (
    <>
      <style>{`
        @keyframes heroPan {
          0%   { transform: scale(1.12) translateX(0%); }
          100% { transform: scale(1.12) translateX(-5%); }
        }
        .hero-pan {
          animation: heroPan 18s ease-in-out infinite alternate;
          will-change: transform;
        }
      `}</style>
      <div className="hero-pan absolute inset-0">
        <Image
          src={IMG_HERO_MAIN}
          alt="HomeRepairPro certified technician repairing AC unit at home — same-day service"
          fill
          priority
          quality={100}
          className="object-cover object-[center_15%]"
          sizes="100vw"
        />
      </div>
    </>
  );
}
