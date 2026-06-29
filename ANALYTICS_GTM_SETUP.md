# HomeRepairPro — Analytics, GTM & Ads Setup Guide

> **Purpose:** Complete reference for Claude Code sessions and manual platform setup.
> Contains: full page directory · GTM workspace plan · GA4 · Search Console · Google Ads · Bing · Sitemap submission.

---

## SECTION 1 — COMPLETE PAGE DIRECTORY

### Base URL: `https://homerepairpro.in`

---

### 1A. Static Pages (9 pages — all INDEXED)

| URL | Title | Canonical | Notes |
|-----|-------|-----------|-------|
| `/` | HomeRepairPro — Ghar Ki Har Repair, Ek Call Mein | ✅ set | LocalBusiness + FAQ schema |
| `/services` | Home Appliance Repair Services | ✅ set | Services hub |
| `/about` | About Us — HomeRepairPro | ✅ set | LocalBusiness schema |
| `/contact` | Contact Us — HomeRepairPro | ✅ set | WhatsApp group CTA |
| `/careers` | Join as Technician – Jobs in Indore & Bhopal | ✅ set | JobPosting schema; /join-as-technician 301→here |
| `/blog` | Blog — Appliance Repair Tips & Guides | ✅ set | Blog hub |
| `/government-contracts` | Government & Corporate Contracts | ✅ set | B2B page |
| `/privacy` | Privacy Policy | ✅ set | |
| `/terms` | Terms of Service | ✅ set | |

---

### 1B. City Landing Pages (`/[slug]`)

| URL | Indexed | Title Pattern |
|-----|---------|---------------|
| `/indore` | ✅ YES | Home Appliance Repair in Indore — Same Day Service |
| `/bhopal` | ✅ YES | Home Appliance Repair in Bhopal — Same Day Service |
| `/ujjain` | ❌ noindex | (served:false — placeholder only) |
| `/mhow` | ❌ noindex | (served:false) |
| `/dewas` | ❌ noindex | (served:false) |
| `/sehore` | ❌ noindex | (served:false) |
| `/jabalpur` | ❌ noindex | (served:false) |
| `/jaipur` | ❌ noindex | (served:false) |
| `/pritampur` | ❌ noindex | (served:false) |
| `/mumbai` | ❌ noindex | (served:false) |

---

### 1C. Service Hub Pages (`/[serviceSlug]`) — 7 pages, all INDEXED

| URL | Service |
|-----|---------|
| `/ac-repair` | AC Repair & Service |
| `/washing-machine-repair` | Washing Machine Repair |
| `/refrigerator-repair` | Refrigerator Repair |
| `/chimney-cleaning` | Chimney Cleaning |
| `/geyser-repair` | Geyser Repair |
| `/microwave-repair` | Microwave Repair |
| `/ro-repair` | RO Water Purifier Repair |

---

### 1D. Service × City Silo Pages (`/[city]/[service]`) — 14 INDEXED + 56 noindex

**Pattern:** `/{citySlug}/{serviceSlug}`
**Indexed:** Indore + Bhopal only (2 cities × 7 services = **14 pages**)
**Noindex:** All other 8 cities × 7 services = 56 pages

**Indore (INDEXED):**
- `/indore/ac-repair`
- `/indore/washing-machine-repair`
- `/indore/refrigerator-repair`
- `/indore/chimney-repair`
- `/indore/geyser-repair`
- `/indore/microwave-repair`
- `/indore/ro-repair`

**Bhopal (INDEXED):**
- `/bhopal/ac-repair`
- `/bhopal/washing-machine-repair`
- `/bhopal/refrigerator-repair`
- `/bhopal/chimney-repair`
- `/bhopal/geyser-repair`
- `/bhopal/microwave-repair`
- `/bhopal/ro-repair`

---

### 1E. Area Deep-Silo Pages (`/[city]/[service]/[area]`) — ~338 INDEXED pages

**Pattern:** `/{citySlug}/{serviceSlug}/{areaSlug}`
**Condition:** Only generated when `areaIntros[areaSlug]` content exists in `seoData.js`

**Indore — 25 areas × 7 services** (where areaIntros exist):
Key areas: vijay-nagar, palasia, rajwada, saket, lig-colony, mig-colony, hig-colony, nipania, bicholi-mardana, airport-road, rau, bengali-square, geeta-bhawan, annapurna, sukhliya, silicon-city, kanadiya, bhawarkuan, scheme-54, scheme-78, navlakha, malviya-nagar, lasudia, pardeshipura, mhow-road

**Bhopal — 25 areas × 7 services** (where areaIntros exist):
Key areas: kolar, arera-colony, mp-nagar, bhopal-old-city, hoshangabad-road, ayodhya-bypass, shahpura, awadhpuri, govindpura, piplani, bairagarh, habibganj, ashoka-garden, katara-hills, khajuri-kalan, lalghati, karond, misrod, berasia-road, danish-hills, trilanga, nishatpura, new-market, kotra, malviya-nagar

**URL example:** `/indore/ac-repair/vijay-nagar`

---

### 1F. Blog Posts (`/blog/[slug]`) — 6 posts, all INDEXED

| URL | Post Title |
|-----|-----------|
| `/blog/ac-ki-cooling-kam-kyu-hoti-hai` | AC Ki Cooling Kam Ho Gayi? 7 Main Reasons Aur Ghar Pe Solution |
| `/blog/washing-machine-pani-nahi-nikal-rahi` | Washing Machine Paani Nahi Nikal Rahi — Fix Karo 5 Steps Mein |
| `/blog/fridge-thanda-nahi-kar-raha` | Fridge Thanda Nahi Kar Raha — Kab Repair Zaroori Hai |
| `/blog/ac-service-cost-indore-bhopal-2025` | AC Service Cost Indore & Bhopal 2025 — Complete Price Guide |
| `/blog/geyser-garam-pani-nahi-de-raha` | Geyser Garam Paani Nahi De Raha — 6 Reasons & Solution |
| `/blog/ro-water-purifier-service-repair-indore-bhopal` | RO Water Purifier Repair & Service — Complete Guide 2026 |

---

### 1G. Landing Pages (Paid Ads — `noindex`)

| URL | Campaign | robots |
|-----|----------|--------|
| `/lp/fridge-repair-bhopal` | Fridge Repair Bhopal Ads | noindex, follow |
| `/lp/washing-machine-repair-bhopal` | WM Repair Bhopal Ads | noindex |

---

### 1H. Redirects (301 Permanent)

| From | To | Reason |
|------|----|--------|
| `/join-as-technician` | `/careers` | Canonical consolidation |
| `/ac-repair-indore` | `/indore/ac-repair` | Flat → silo |
| `/ac-repair-bhopal` | `/bhopal/ac-repair` | Flat → silo |
| `/washing-machine-repair-indore` | `/indore/washing-machine-repair` | Flat → silo |
| `/washing-machine-repair-bhopal` | `/bhopal/washing-machine-repair` | Flat → silo |
| `/chimney-cleaning-indore` | `/indore/chimney-repair` | Slug change |
| *(70 total flat → silo redirects)* | | |

---

### 1I. Noindex / Private Routes

| Route | Status |
|-------|--------|
| `/admin` | Live but noindex (password protected) |
| `/api/*` | API routes — no HTML |
| `/ld/*` | Generic LP template — noindex, nofollow |
| `/lp/*` | Paid ad LPs — noindex |

---

### 1J. System Routes

| Route | Type | Purpose |
|-------|------|---------|
| `/sitemap.xml` | Dynamic | Generated by `src/app/sitemap.js` |
| `/robots.txt` | Dynamic | Generated by `src/app/robots.js` |
| `/llms.txt` | Route handler | LLM site overview |
| `/llms-full.txt` | Route handler | Full LLM details |

---

## SECTION 2 — WHAT IS ALREADY LIVE IN CODE

| Item | Status | Value / Location |
|------|--------|-----------------|
| **GTM Container** | ✅ LIVE | `GTM-5STRL8HQ` — `src/layouts/MainLayout.jsx` |
| **Google Search Console Verification** | ✅ LIVE | `wDU1PYBMM1c37aQRWhUSDCUA8AtrSge9MJlEpZ2Xhtk` — `src/app/layout.jsx` |
| **Sitemap** | ✅ LIVE | `https://homerepairpro.in/sitemap.xml` |
| **Robots.txt** | ✅ LIVE | `https://homerepairpro.in/robots.txt` |
| **Microsoft Clarity** | ✅ LIVE | `wa2qlbh4a6` — `src/layouts/MainLayout.jsx` |
| **GA4 Measurement ID** | ❌ NOT SET | Need to add via GTM |
| **Google Ads Conversion ID** | ❌ NOT SET | Need to add via GTM |
| **Bing UET Tag** | ❌ NOT SET | Need to add via GTM or code |

---

## SECTION 3 — EXISTING dataLayer EVENTS (already firing)

All these events are already pushed to `window.dataLayer` in the code. GTM just needs triggers mapped to them.

| Event Name | Where Fired | Data Sent |
|------------|-------------|-----------|
| `lead_submit` | Main LeadForm + LP LpLeadForm | `{event, city, service}` |
| `call_click` | LP CTAButtons + LpLeadForm | `{event, service, city}` |
| `whatsapp_click` | LP CTAButtons + LpLeadForm | `{event, service, city}` |
| `phone_click` | CallButton (main site) | `{event}` |
| `technician_apply` | TechnicianForm (/careers) | `{event}` |
| `whatsapp_group_join` | WhatsAppGroupCTA | `{event, page_url}` |

---

## SECTION 4 — GTM WORKSPACE SETUP PLAN

**GTM Container:** `GTM-5STRL8HQ`
**GTM URL:** https://tagmanager.google.com → Container GTM-5STRL8HQ

### 4A. Variables to Create in GTM

Create these **User-Defined Variables** in GTM first (they'll be used in tags/triggers):

| Variable Name | Type | Value |
|---------------|------|-------|
| `DL - event` | Data Layer Variable | `event` |
| `DL - city` | Data Layer Variable | `city` |
| `DL - service` | Data Layer Variable | `service` |
| `DL - page_url` | Data Layer Variable | `page_url` |
| `GA4 Measurement ID` | Constant | `G-XXXXXXXXXX` ← fill in after Step 5A |
| `Google Ads Conversion ID` | Constant | `AW-XXXXXXXXX` ← fill in after Step 6B |
| `Bing UET Tag ID` | Constant | `XXXXXXXX` ← fill in after Step 7A |

---

### 4B. Triggers to Create in GTM

| Trigger Name | Type | Fires When |
|--------------|------|-----------|
| `Event - lead_submit` | Custom Event | Event name = `lead_submit` |
| `Event - call_click` | Custom Event | Event name = `call_click` |
| `Event - whatsapp_click` | Custom Event | Event name = `whatsapp_click` |
| `Event - phone_click` | Custom Event | Event name = `phone_click` |
| `Event - technician_apply` | Custom Event | Event name = `technician_apply` |
| `Event - whatsapp_group_join` | Custom Event | Event name = `whatsapp_group_join` |
| `All Pages` | Page View | All pages |
| `LP Pages Only` | Page View | Page Path matches RegEx `^/lp/` |
| `Main Site (not LP)` | Page View | Page Path does NOT match `^/lp/` |

---

### 4C. Tags to Create in GTM

#### TAG 1 — GA4 Configuration (base tag)
- **Type:** Google Analytics: GA4 Configuration
- **Measurement ID:** `{{GA4 Measurement ID}}`
- **Trigger:** All Pages
- **Note:** This sends page_view to GA4 automatically

#### TAG 2 — GA4 Event: lead_submit
- **Type:** Google Analytics: GA4 Event
- **Configuration Tag:** TAG 1 (above)
- **Event Name:** `generate_lead`
- **Parameters:**
  - `city` → `{{DL - city}}`
  - `service` → `{{DL - service}}`
  - `value` → `500` (INR estimated value per lead)
  - `currency` → `INR`
- **Trigger:** `Event - lead_submit`

#### TAG 3 — GA4 Event: call_click
- **Type:** GA4 Event
- **Event Name:** `phone_call`
- **Parameters:** `city`, `service`
- **Trigger:** `Event - call_click` OR `Event - phone_click`

#### TAG 4 — GA4 Event: whatsapp_click
- **Type:** GA4 Event
- **Event Name:** `whatsapp_contact`
- **Parameters:** `city`, `service`
- **Trigger:** `Event - whatsapp_click`

#### TAG 5 — GA4 Event: technician_apply
- **Type:** GA4 Event
- **Event Name:** `technician_application`
- **Trigger:** `Event - technician_apply`

#### TAG 6 — Google Ads Conversion: lead_submit
- **Type:** Google Ads Conversion Tracking
- **Conversion ID:** `{{Google Ads Conversion ID}}`
- **Conversion Label:** ← get from Google Ads (Step 6C)
- **Conversion Value:** `500`
- **Currency:** `INR`
- **Trigger:** `Event - lead_submit`

#### TAG 7 — Google Ads Conversion: call_click
- **Type:** Google Ads Conversion Tracking
- **Conversion ID:** same as above
- **Conversion Label:** ← get from Google Ads (separate conversion action)
- **Trigger:** `Event - call_click`

#### TAG 8 — Google Ads Remarketing (all pages)
- **Type:** Google Ads Remarketing
- **Conversion ID:** `{{Google Ads Conversion ID}}`
- **Trigger:** All Pages

#### TAG 9 — Bing UET (all pages)
- **Type:** Custom HTML
- **HTML:**
```html
<script>
(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'projectId':'10000','properties':{'pagePostAuthor':''}});
var s=d.createElement(t);s.src=r;s.async=!0;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}try{y=BOOMR.init({beacon_url:'https://bing.com/bat.js',site_id:'{{Bing UET Tag ID}}',beacon_type:'2'})}catch(e){}};var n=d.querySelectorAll('script')[0];n.parentNode.insertBefore(s,n)})(window,document,'script','//bat.bing.com/bat.js','uetq');
</script>
<noscript><img src="//bat.bing.com/action/0?ti={{Bing UET Tag ID}}&Ver=2" height="0" width="0" style="display:none; visibility: hidden;" /></noscript>
```
- **Trigger:** All Pages

#### TAG 10 — Bing UET Conversion: lead_submit
- **Type:** Custom HTML
```html
<script>window.uetq = window.uetq || []; window.uetq.push('event', 'submit_lead_form', {"event_category":"Lead","event_label":"Lead Form Submitted","event_value":"500"});</script>
```
- **Trigger:** `Event - lead_submit`

---

## SECTION 5 — GOOGLE ANALYTICS 4 (GA4) SETUP

### 5A. Create GA4 Property (if not done yet)

1. Go to: https://analytics.google.com
2. Admin → **Create Property**
3. Property name: `HomeRepairPro`
4. Timezone: `India Standard Time (IST)`
5. Currency: `Indian Rupee (INR)`
6. Business details: Home Services / Small Business
7. Click **Next** → Select "Get baseline reports"
8. Create a **Web Data Stream**
   - URL: `homerepairpro.in`
   - Stream name: `HomeRepairPro Web`
9. Copy the **Measurement ID** → format: `G-XXXXXXXXXX`
10. **Do NOT install gtag.js** — use GTM instead (already installed)

### 5B. Connect GA4 to GTM

- Take the `G-XXXXXXXXXX` ID
- In GTM: Variables → `GA4 Measurement ID` constant → paste it
- Create TAG 1 (GA4 Configuration) from Section 4C
- Publish GTM container

### 5C. GA4 Conversion Events to Mark

In GA4 → Admin → Events → mark these as **Conversions**:

| GA4 Event | Why |
|-----------|-----|
| `generate_lead` | Primary conversion (form submit) |
| `phone_call` | Secondary conversion |
| `whatsapp_contact` | Secondary conversion |
| `technician_application` | Recruitment conversion |

### 5D. GA4 Audiences to Create (for Google Ads remarketing)

In GA4 → Admin → Audiences:

| Audience Name | Condition |
|---------------|-----------|
| `Lead Submitted` | Event = `generate_lead` |
| `Visited Service Page` | Page path contains `/indore/` OR `/bhopal/` |
| `Visited LP Page` | Page path starts with `/lp/` |
| `High Intent — Visited 3+ Pages` | Session count ≥ 3 |
| `Did NOT Submit Lead` | Visited site but NOT `generate_lead` |

### 5E. GA4 Custom Reports to Create

In GA4 → Reports → Library → Create:

1. **Lead Performance Report**
   - Dimensions: City, Service, Source/Medium
   - Metrics: Conversions (generate_lead), Sessions
   
2. **LP Conversion Report**
   - Filter: Page path starts with `/lp/`
   - Metrics: lead_submit count, call_click, whatsapp_click

3. **SEO Landing Report**
   - Dimensions: Page path, City
   - Filter: Page path matches `/indore/.*` OR `/bhopal/.*`
   - Metrics: Organic sessions, Bounce rate

---

## SECTION 6 — GOOGLE ADS SETUP

### 6A. Account Structure Recommendation

```
Account: HomeRepairPro (homerepairpro.in)
├── Campaign 1: AC Repair — Indore [Search]
├── Campaign 2: AC Repair — Bhopal [Search]
├── Campaign 3: Fridge Repair — Indore [Search]
├── Campaign 4: Fridge Repair — Bhopal [Search]
├── Campaign 5: Washing Machine — Indore [Search]
├── Campaign 6: Washing Machine — Bhopal [Search]
├── Campaign 7: Geyser + Chimney + RO — Indore [Search]
├── Campaign 8: Geyser + Chimney + RO — Bhopal [Search]
├── Campaign 9: Remarketing — LP Visitors [Display/PMax]
└── Campaign 10: Technician Recruitment [Search]
```

### 6B. Get Conversion ID

1. Google Ads → Tools → Conversions → **+ New Conversion**
2. Create conversion: `Lead Form Submit`
   - Category: Lead
   - Value: `500 INR` (fixed)
   - Count: One per click
3. Choose **Google Tag Manager** as installation method
4. Copy the **Conversion ID** (`AW-XXXXXXXXX`) and **Label**
5. Add to GTM Variables (Section 4A)

### 6C. Create Conversion Actions in Google Ads

| Conversion Name | Trigger | Value |
|----------------|---------|-------|
| `Lead Form Submit` | `lead_submit` event | ₹500 |
| `Call Click` | `call_click` event | ₹300 |
| `WhatsApp Click` | `whatsapp_click` event | ₹200 |

### 6D. LP Pages for Google Ads

Existing LPs (already built):
- `/lp/fridge-repair-bhopal` → use for Fridge Repair Bhopal campaigns
- `/lp/washing-machine-repair-bhopal` → use for WM Bhopal campaigns

**LPs still needed (ask Claude Code to build):**
- `/lp/ac-repair-indore`
- `/lp/ac-repair-bhopal`
- `/lp/fridge-repair-indore`
- `/lp/washing-machine-repair-indore`
- `/lp/geyser-repair-indore`
- `/lp/geyser-repair-bhopal`

### 6E. Ad Extensions to Set Up

- **Call Extension:** +91 88895 39174
- **Sitelinks:** AC Repair | Fridge Repair | Washing Machine | Contact Us
- **Callout Extensions:** Same Day Service · 30-Day Warranty · Starting ₹350 · GST Invoice
- **Structured Snippets:** Services: AC, Fridge, Washing Machine, Geyser, Chimney, RO
- **Location Extension:** Link Google My Business

### 6F. Google Ads Audience Targeting

Import GA4 audiences (after Step 5D) into Google Ads:
- Google Ads → Tools → Audience Manager → Link GA4 property
- Use `Did NOT Submit Lead` for RLSA bid boost
- Use `Lead Submitted` to exclude from lead gen campaigns

### 6G. Keywords Strategy (High Priority)

**Indore (Exact/Phrase match):**
```
[ac repair indore], [ac service indore], "ac repair near me" +indore
[fridge repair indore], [refrigerator repair indore]
[washing machine repair indore]
[geyser repair indore]
[ro repair indore]
```

**Bhopal:**
```
[ac repair bhopal], [ac service bhopal]
[fridge repair bhopal], [refrigerator repair bhopal]
[washing machine repair bhopal]
```

**Negative Keywords (global):**
```
free, diy, youtube, how to, second hand, buy, new, price list jobs vacancy, salary
```

---

## SECTION 7 — GOOGLE SEARCH CONSOLE SETUP

### 7A. Verification Status

Verification meta tag is **already in the code** at `src/app/layout.jsx`:
```
google: 'wDU1PYBMM1c37aQRWhUSDCUA8AtrSge9MJlEpZ2Xhtk'
```
This means the site is **already verified** (or ready to verify) in Search Console.

### 7B. Steps in Search Console

1. Go to: https://search.google.com/search-console
2. Add property: `https://homerepairpro.in` (URL prefix)
3. Select **HTML tag** verification → already in code → click Verify
4. **Submit Sitemaps:**
   - `https://homerepairpro.in/sitemap.xml`
5. Check **Coverage** tab — should show all indexed pages
6. Request indexing for key pages if not indexed yet:
   - `/`, `/indore`, `/bhopal`, `/indore/ac-repair`, `/bhopal/ac-repair`

### 7C. Key Search Console Reports to Monitor

| Report | What to Check |
|--------|--------------|
| Coverage → Valid | All ~89 sitemap URLs indexed |
| Coverage → Excluded | Confirm /lp/* and non-served cities are "noindex" excluded |
| Performance → Queries | Top search queries bringing traffic |
| Performance → Pages | Which pages get most impressions/clicks |
| Core Web Vitals | LCP, CLS, FID scores for mobile |
| Links | Internal + external links pointing to key pages |

### 7D. Index Request Priority Order

Request manual indexing in this order (after launch/changes):
1. `/` (home)
2. `/indore` and `/bhopal`
3. `/indore/ac-repair` and `/bhopal/ac-repair`
4. All other `/indore/*` and `/bhopal/*` pages
5. `/blog/*` posts
6. `/careers`

---

## SECTION 8 — BING WEBMASTER TOOLS SETUP

### 8A. Steps

1. Go to: https://www.bing.com/webmasters
2. Add site: `https://homerepairpro.in`
3. **Verification methods available:**
   - **Option A (Recommended):** Import from Google Search Console (fastest if GSC is verified)
   - **Option B:** XML file → download → place in `/public/` folder
   - **Option C:** Meta tag → Claude Code adds to `src/app/layout.jsx`

#### If using Option C (meta tag) — tell Claude Code:
```
Add this to metadata.verification in src/app/layout.jsx:
verification: {
  google: 'wDU1PYBMM1c37aQRWhUSDCUA8AtrSge9MJlEpZ2Xhtk',
  other: { 'msvalidate.01': 'BING_VERIFICATION_CODE_HERE' }
}
```

4. After verification → submit sitemap:
   - `https://homerepairpro.in/sitemap.xml`

### 8B. Bing UET Tag (for Bing Ads)

1. Bing Ads → Conversion Tracking → UET Tags → **Create UET Tag**
2. Tag name: `HomeRepairPro UET`
3. Copy the Tag ID (format: `XXXXXXXX`)
4. Add to GTM as TAG 9 (Section 4C)

### 8C. Bing Ads Campaigns

If running Bing/Microsoft Ads:
- Import campaigns directly from Google Ads (Bing has an import feature)
- Same LP pages work for Bing traffic
- Bing typically has lower CPC than Google — good ROI for Indore/Bhopal searches

---

## SECTION 9 — SITEMAP STATUS & SUBMISSION

### 9A. Current Sitemap Coverage

File: `src/app/sitemap.js` → served at `https://homerepairpro.in/sitemap.xml`

**Pages in sitemap (current):**

| Group | Count | Details |
|-------|-------|---------|
| Static pages | 9 | /, /services, /about, /contact, /blog, /careers, /government-contracts, /privacy, /terms |
| City landings | 2 | /indore, /bhopal (only served:true) |
| Service hubs | 7 | /ac-repair, /washing-machine-repair, etc. |
| Brand pages | ~20 | /voltas-ac-repair, /daikin-ac-repair, etc. |
| Blog posts | 6 | All 6 blog slugs |
| Service×City | 14 | 2 cities × 7 services |
| Area pages | ~338 | Indore + Bhopal areas with areaIntros |
| **TOTAL** | **~396** | |

### 9B. Sitemap Submission Steps

1. **Google:** Search Console → Sitemaps → Add: `https://homerepairpro.in/sitemap.xml`
2. **Bing:** Webmaster Tools → Sitemaps → Submit same URL
3. **Verify** at: `https://homerepairpro.in/sitemap.xml` (should return valid XML)
4. **Ping Google manually:**
   - `https://www.google.com/ping?sitemap=https://homerepairpro.in/sitemap.xml`

---

## SECTION 10 — IMPLEMENTATION CHECKLIST

### Platform Setup (do manually in browser)

- [ ] GA4: Create property → get `G-XXXXXXXXXX` Measurement ID
- [ ] GA4: Mark `generate_lead`, `phone_call`, `whatsapp_contact` as conversions
- [ ] GA4: Create 5 audiences (Section 5D)
- [ ] GA4: Link to Google Ads account
- [ ] Google Ads: Create conversion actions → get Conversion ID `AW-XXXXXXXXX` + Labels
- [ ] Google Ads: Link to GA4 property
- [ ] Google Ads: Import GA4 audiences
- [ ] Search Console: Verify property (meta tag already in code)
- [ ] Search Console: Submit sitemap
- [ ] Search Console: Request indexing for key pages
- [ ] Bing: Verify site (import from GSC or add meta tag)
- [ ] Bing: Submit sitemap
- [ ] Bing UET: Create tag → get Tag ID

### GTM Workspace (do in GTM dashboard)

- [ ] Create all 7 Variables (Section 4A)
- [ ] Create all 9 Triggers (Section 4B)
- [ ] Create all 10 Tags (Section 4C) — fill in IDs from above
- [ ] Preview mode → test all events fire correctly
- [ ] Publish GTM container with version note

### Claude Code Tasks (code changes needed)

- [ ] Add Bing meta tag to `src/app/layout.jsx` (once Bing code is received)
- [ ] Build missing LP pages: ac-repair-indore, ac-repair-bhopal, fridge-repair-indore, washing-machine-repair-indore, geyser-repair-indore, geyser-repair-bhopal
- [ ] Add `page_view` dataLayer push with route info (for GA4 SPA routing if needed)

---

## SECTION 11 — QUICK REFERENCE: IDs NEEDED

Fill this in as you get each ID:

```
GTM Container ID:           GTM-5STRL8HQ          ← ALREADY IN CODE
Microsoft Clarity ID:       wa2qlbh4a6             ← ALREADY IN CODE
GSC Verification Tag:       wDU1PYBMM1c37aQRWhUSDCUA8AtrSge9MJlEpZ2Xhtk  ← ALREADY IN CODE

GA4 Measurement ID:         G-___________          ← ADD TO GTM
Google Ads Conversion ID:   AW-___________         ← ADD TO GTM
Google Ads Conv Label (Lead): ___________          ← ADD TO GTM
Google Ads Conv Label (Call): ___________          ← ADD TO GTM
Bing UET Tag ID:            ___________            ← ADD TO GTM
Bing Verification Code:     ___________            ← ADD TO layout.jsx
```

---

## SECTION 12 — TELLING CLAUDE CODE WHAT TO DO

When you have the IDs, give Claude Code this prompt:

```
Read ANALYTICS_GTM_SETUP.md Section 11.
I now have:
- GA4 Measurement ID: G-XXXXXXXXXX
- Google Ads Conversion ID: AW-XXXXXXXXX
- Bing Verification Code: XXXXXXXXXXXXXXX

Do the following:
1. Add Bing meta verification to src/app/layout.jsx
2. [any other code tasks from Section 10]
```

---

*Last updated: 2026-06-20 | Project: homerepairpro.in | GTM: GTM-5STRL8HQ*
