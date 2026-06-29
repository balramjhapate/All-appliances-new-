/**
 * Central Cloudinary CDN image registry.
 * All images served from Cloudinary global CDN (200+ edge locations).
 * Next.js Image component still applies WebP/AVIF conversion on top.
 * To re-upload: node scripts/upload-cdn.js
 */

const C = 'https://res.cloudinary.com/dof9ntqar/image/upload';

// ── LOGO ──────────────────────────────────────────────────
export const IMG_LOGO        = `${C}/homerepairpro/logo.png`;
export const IMG_LOGO_ROUND  = `${C}/homerepairpro/logo-round.png`;

// ── HERO SLIDER ───────────────────────────────────────────
export const IMG_HERO_ALL        = `${C}/homerepairpro/hero/hero-all-appliances.png`;
export const IMG_HERO_AC         = `${C}/homerepairpro/hero/hero-ac-repair.png`;
export const IMG_HERO_WM         = `${C}/homerepairpro/hero/hero-wm-repair.png`;
export const IMG_HERO_FRIDGE     = `${C}/homerepairpro/hero/hero-fridge-repair.png`;
export const IMG_HERO_MAIN       = `${C}/homerepairpro/hero/hero-main.png`;
export const IMG_HERO_APPLIANCES = `${C}/homerepairpro/hero/hero-appliances.png`;

// ── ABOUT ─────────────────────────────────────────────────
export const IMG_ABOUT_RIGHT = `${C}/homerepairpro/about/about-right.png`;
export const IMG_ABOUT_TECH  = `${C}/homerepairpro/about/about-tech.png`;

// ── CERTIFICATES ──────────────────────────────────────────
export const IMG_CERT_NFSU   = `${C}/homerepairpro/certs/cert-nfsu.png`;
export const IMG_CERT_NIBAV  = `${C}/homerepairpro/certs/cert-nibav.png`;
export const IMG_CERT_POLICE = `${C}/homerepairpro/certs/cert-police.png`;

// ── SERVICES ──────────────────────────────────────────────
export const IMG_SVC_AC        = `${C}/homerepairpro/services/ac-repair.png`;
export const IMG_SVC_WM        = `${C}/homerepairpro/services/washing-machine.png`;
export const IMG_SVC_FRIDGE    = `${C}/homerepairpro/services/refrigerator.png`;
export const IMG_SVC_GEYSER    = `${C}/homerepairpro/services/geyser.png`;
export const IMG_SVC_CHIMNEY   = `${C}/homerepairpro/services/chimney.png`;
export const IMG_SVC_MICROWAVE = `${C}/homerepairpro/services/microwave.png`;

// ── BLOG ──────────────────────────────────────────────────
export const IMG_BLOG_AC_COOLING = `${C}/homerepairpro/blog/blog-ac-cooling.png`;
export const IMG_BLOG_AC_COST    = `${C}/homerepairpro/blog/blog-ac-cost.png`;
export const IMG_BLOG_FRIDGE     = `${C}/homerepairpro/blog/blog-fridge.png`;
export const IMG_BLOG_GEYSER     = `${C}/homerepairpro/blog/blog-geyser.png`;
export const IMG_BLOG_RO         = `${C}/homerepairpro/blog/blog-ro.png`;
export const IMG_BLOG_WASHING    = `${C}/homerepairpro/blog/blog-washing.png`;

// ── LANDING PAGES ─────────────────────────────────────────
export const IMG_LP_FRIDGE_HERO    = `${C}/homerepairpro/lp/lp-fridge-hero.png`;
export const IMG_LP_FRIDGE_PROBLEM = `${C}/homerepairpro/lp/lp-fridge-problem.png`;
export const IMG_LP_FRIDGE_TECH    = `${C}/homerepairpro/lp/lp-fridge-tech.png`;
export const IMG_LP_WM_HERO        = `${C}/homerepairpro/lp/lp-wm-hero.png`;
export const IMG_LP_WM_PROBLEM     = `${C}/homerepairpro/lp/lp-wm-problem.png`;
export const IMG_LP_WM_TECH        = `${C}/homerepairpro/lp/lp-wm-tech.png`;
