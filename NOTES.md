# HomeRepairPro — Project Notes

> **URL:** https://homerepairpro.in | **Repo:** `home-repair-pro-main`
> **Stack:** Next.js App Router + Tailwind + Supabase + Cloudinary CDN

---

## Business Info

| Field | Value |
|---|---|
| Phone | `+91 88895 39174` |
| WhatsApp | `918889539174` |
| Email | `bhopalservice998@gmail.com` |
| GSTIN | `23DNCPG4775E14H` |
| MSME / Udyam | `UDYAM-MP-10-0042011` |
| USPs | 15+ yrs, 60-min doorstep, ₹350 start, 30-day warranty, police-verified techs, GST invoice |

---

## Services (7)

`ac-repair` · `washing-machine-repair` · `refrigerator-repair` · `chimney-cleaning` (silo slug: `chimney-repair`) · `geyser-repair` · `microwave-repair` · `ro-repair`

## Cities (10) — only Indore + Bhopal `served: true`

`indore` · `bhopal` ✅ indexed | `ujjain` `mhow` `dewas` `sehore` `jabalpur` `jaipur` `pritampur` `mumbai` ❌ noindex

> To activate a city: set `served: true` in `seoData.js` + add `areaIntros` for its areas.

---

## Integrations

### Supabase (Database)
- Dashboard: https://supabase.com/dashboard/project/nomzecuuzbdldkmedsgf
- Project ID: `nomzecuuzbdldkmedsgf` | Region: ap-south-1
- Tables: `leads` · `interactions` · `technician_applications`
- Code: `src/services/supabase.js` → `insertLead()` `insertInteraction()` `getTrackingData()`

### Google Tag Manager
- Container ID: `GTM-5STRL8HQ`
- Manages: GA4 + Google Ads + Clarity tags
- Code: `src/layouts/MainLayout.jsx` (strategy: afterInteractive)

### GA4
- Measurement ID: `G-DTY0JXELD8`
- Events tracked: `lead_submit` · `call_click` · `whatsapp_click` (via GTM dataLayer)

### Microsoft Clarity
- Project ID: `wa2qlbh4a6`
- Code: `src/layouts/MainLayout.jsx` (strategy: lazyOnload)

### Google Ads / GCLID
- GCLID captured in `GCLIDCapture.jsx` → localStorage → saved in Supabase leads
- localStorage keys: `gclid` · `utm_source` · `utm_campaign` · `utm_keyword` · `lp`

### Cloudinary CDN (images)
- Cloud: `dof9ntqar` | API Key: `927893867194825`
- 31 images uploaded to `homerepairpro/` folder
- All URLs in `src/utils/cdn.js` — edit only this file to update image paths
- Re-upload script: `node scripts/upload-cdn.js` (add api_secret to script first)

### Google Search Console
- Property: `https://www.homerepairpro.in/`
- Sitemap submitted: `/sitemap.xml`

---

## Key Files

| File | What it does |
|---|---|
| `src/utils/data.js` | `services[]` (7) · `cities[]` (10) · `blogPosts[]` (6) — source for most pages |
| `src/utils/seoData.js` | `SEO_SERVICES` · `SEO_CITIES` with `served`, `areas`, `areaIntros`, `reviews`, `faqs`, `intros`, `topAreas` |
| `src/utils/blogContent.js` | Full blog post body content |
| `src/utils/schema.js` | JSON-LD schema generators — `organizationSchema()` `localBusinessSchema()` `servicePageSchema()` `faqSchema()` `blogSchema()` |
| `src/utils/cdn.js` | All image CDN URLs (Cloudinary) — single source of truth |
| `src/services/supabase.js` | DB client + all insert functions |
| `src/layouts/MainLayout.jsx` | Root layout — fonts, GTM, Clarity, Header, Footer |
| `next.config.js` | 70 redirects (`/{service}-{city}` → `/{city}/{service}`) + image domains + compression |

---

## URL Architecture (~1,330 pages built, ~508 indexed)

```
/                              Home
/{service}                     7 service hubs (indexed)
/{city}                        10 city hubs (2 indexed: Indore + Bhopal)
/{city}/{service}              70 silo pages (14 indexed: Indore+Bhopal × 7)
/{city}/{service}/{area}       966 area pages (350 indexed: 25+25 areas × 7)
/{brand}-{service}             121 brand pages (all indexed)
/{service}-{city}              70 flat pages → 301 redirect to /{city}/{service}
/ld/{service}-{city}           70 paid-ads LP (noindex)
/lp/fridge-repair-bhopal       LP - fridge (noindex, Google Ads)
/lp/washing-machine-repair-bhopal  LP - WM (noindex, Google Ads)
/blog/{slug}                   6 posts (all indexed)
/llms.txt · /llms-full.txt     AI crawler info files
/admin                         Lead management dashboard
```

> `[slug]/page.jsx` handles 4 types via `parseSlug()`: `service` · `city-landing` · `brand` · `city` (flat, redirected)

---

## How to Expand

| Goal | What to change |
|---|---|
| Activate a new city | `seoData.js`: set `served: true`, add `areaIntros` for areas |
| Index more areas | Add area slug → intro text in `cityData.areaIntros` in `seoData.js` |
| Add a new service | `data.js → services[]` + `seoData.js → SEO_SERVICES` + `next.config.js → SERVICE_MAP` |
| Add a new blog post | `data.js → blogPosts[]` + `blogContent.js` + add image to Cloudinary + `cdn.js` |
| Add new LP page | Create `src/app/lp/{slug}/page.jsx`, use `LpLeadForm` + `LpCTAButtons` |

---

## SEO Schema Coverage

| Page | Schemas |
|---|---|
| All pages | `Organization` (root layout) |
| Home `/` | `LocalBusiness` + `FAQPage` |
| `/{service}` | `LocalBusiness` + `FAQPage` |
| `/{city}` | `LocalBusiness` |
| `/{city}/{service}` | `LocalBusiness` + `Service` + `FAQPage` + `BreadcrumbList` |
| `/{city}/{service}/{area}` | `BreadcrumbList` + `FAQPage` |
| `/blog/{slug}` | `BlogPosting` + `FAQPage` |

---

## Admin Dashboard (`/admin`)

- Password protected (layout.jsx checks `ADMIN_PASSWORD` env)
- Shows: leads list + filter chips (All/Today/This Week/Paid Ads) + search
- Click lead row → full detail view (back button to return)
- Overview tab: latest 10 leads + stats
- SOURCE_LABELS: form, lp_fridge_form, lp_wm_form, lp_fridge_whatsapp, lp_wm_whatsapp, etc.

---

## GTM DataLayer Events

```js
// Form submit
window.dataLayer.push({ event: 'lead_submit', service, city, phone, source_component })

// Call click
window.dataLayer.push({ event: 'call_click', source_component, page_url })

// WhatsApp click
window.dataLayer.push({ event: 'whatsapp_click', source_component, page_url })
```

---

## Pending / Future Work

- [ ] Add more blog posts (target: AC Gas Filling, Fridge Compressor, WM Drum)
- [ ] Add `areaIntros` for Ujjain to activate it (currently `served: false`)
- [ ] Add real social profile URLs to `schema.js → organizationSchema().sameAs[]`
- [ ] Create Google Business Profile for Bhopal separately (currently only Indore)
- [ ] Brand pages (`/{brand}-{service}`) don't have schema yet — add `Product`/`Service` schema
- [ ] More LP pages for other services (geyser, AC)
