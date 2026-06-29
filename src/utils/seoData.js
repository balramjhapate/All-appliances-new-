// SEO data for Service × City programmatic pages
// Source: SEO_Site_Architecture.csv + SEO_Implementation_Roadmap.md

export const SEO_SERVICES = {
  'ac-repair': {
    name: 'AC Repair',
    fullName: 'AC Repair & Service',
    mainProblem: 'AC not cooling',
    emoji: '❄️',
    dataSlug: 'ac-repair',
    brands: ['LG', 'Samsung', 'Voltas', 'Daikin', 'Hitachi', 'Carrier', 'Blue Star', 'Whirlpool', 'Panasonic', 'Godrej', 'Lloyd', 'O General'],
    problems: [
      { icon: '🌡️', title: 'AC not cooling', desc: 'Cooling bilkul band ya bahut kam ho gayi' },
      { icon: '💨', title: 'Gas refill / leak', desc: 'Refrigerant khatam ya leakage' },
      { icon: '💧', title: 'Water leakage', desc: 'Indoor unit se paani tapakna' },
      { icon: '⚡', title: 'Not turning on', desc: 'PCB fault ya power issue' },
      { icon: '🔊', title: 'Noisy AC', desc: 'Fan motor ya compressor noise' },
      { icon: '🔧', title: 'Compressor fault', desc: 'Compressor start nahi ho raha' },
    ],
    pricing: [
      { service: 'AC Basic Service', price: '₹350', note: 'Filter cleaning + water wash' },
      { service: 'Jet Wash (Indoor+Outdoor)', price: '₹699', note: 'Deep foam wash — most popular' },
      { service: 'Gas Refill (R-22/R-32)', price: '₹999', note: 'Leakage check + pure gas' },
      { service: 'PCB / Compressor Repair', price: '₹800–₹2,500', note: 'Parts cost extra' },
    ],
  },
  'washing-machine-repair': {
    name: 'Washing Machine Repair',
    fullName: 'Washing Machine Repair & Service',
    mainProblem: 'Washing machine not spinning',
    emoji: '🫧',
    dataSlug: 'washing-machine-repair',
    brands: ['LG', 'Samsung', 'IFB', 'Whirlpool', 'Bosch', 'Haier', 'Godrej', 'Panasonic', 'Siemens', 'Electrolux'],
    problems: [
      { icon: '🔄', title: 'Not spinning', desc: 'Drum rotate nahi kar raha' },
      { icon: '💧', title: 'Not draining', desc: 'Paani nahi nikal raha' },
      { icon: '🔊', title: 'Making noise', desc: 'Drum se khadak-khadak awaaz' },
      { icon: '⚡', title: 'Not starting', desc: 'Power on nahi ho raha' },
      { icon: '🚿', title: 'Water leakage', desc: 'Neeche se paani tapakna' },
      { icon: '🔧', title: 'Motor fault', desc: 'Motor burn ya jam gayi' },
    ],
    pricing: [
      { service: 'Basic Inspection & Repair', price: '₹350', note: 'Minor repair included' },
      { service: 'Belt / Pump Replacement', price: '₹500–₹800', note: 'Parts cost extra' },
      { service: 'Motor Repair', price: '₹800–₹1,500', note: 'Most common issue' },
      { service: 'PCB / Control Board', price: '₹900–₹2,000', note: 'Parts cost extra' },
    ],
  },
  'refrigerator-repair': {
    name: 'Refrigerator Repair',
    fullName: 'Refrigerator Repair & Service',
    mainProblem: 'Fridge not cooling',
    emoji: '🧊',
    dataSlug: 'refrigerator-repair',
    brands: ['LG', 'Samsung', 'Whirlpool', 'Godrej', 'Haier', 'Panasonic', 'Bosch', 'Hitachi', 'Electrolux', 'BPL'],
    problems: [
      { icon: '🌡️', title: 'Not cooling', desc: 'Fridge thanda nahi kar raha' },
      { icon: '💨', title: 'Gas leak / refill', desc: 'Cooling gas khatam ya leakage' },
      { icon: '🔧', title: 'Compressor fault', desc: 'Compressor start nahi ho raha' },
      { icon: '💧', title: 'Water leakage', desc: 'Andar ya neeche se paani' },
      { icon: '❄️', title: 'Excess icing', desc: 'Freezer mein zyada baraf' },
      { icon: '🔊', title: 'Noise problem', desc: 'Fridge se zyada awaaz' },
    ],
    pricing: [
      { service: 'Inspection & Minor Fix', price: '₹350', note: 'Thermostat, door seal etc.' },
      { service: 'Gas Refill (R-134a)', price: '₹700–₹1,200', note: 'Leakage fix + refill' },
      { service: 'Compressor Repair', price: '₹1,500–₹3,000', note: 'Depends on model' },
      { service: 'PCB / Control Board', price: '₹800–₹2,000', note: 'Parts cost extra' },
    ],
  },
  'chimney-repair': {
    name: 'Chimney Cleaning & Repair',
    fullName: 'Chimney Cleaning & Repair',
    mainProblem: 'Chimney not sucking smoke',
    emoji: '🔧',
    dataSlug: 'chimney-cleaning',
    brands: ['Elica', 'Faber', 'Bosch', 'Glen', 'Hindware', 'Prestige', 'Inalsa', 'Sunflame', 'Hafele', 'Franke'],
    problems: [
      { icon: '💨', title: 'Not sucking smoke', desc: 'Suction power kam ya zero' },
      { icon: '🛢️', title: 'Oil leakage', desc: 'Neeche se tel tapakna' },
      { icon: '🔧', title: 'Auto-clean fault', desc: 'Auto-clean function kaam nahi' },
      { icon: '⚙️', title: 'Motor failure', desc: 'Motor kharab ya jam gayi' },
      { icon: '🔊', title: 'Noisy operation', desc: 'Zyada awaaz aa rahi hai' },
      { icon: '🪟', title: 'Filter clogged', desc: 'Filter zyada chikna ho gaya' },
    ],
    pricing: [
      { service: 'Deep Cleaning', price: '₹350–₹600', note: 'Filter + baffle + duct' },
      { service: 'Motor Repair / Replacement', price: '₹700–₹1,500', note: 'Depends on brand' },
      { service: 'Auto-Clean Module Fix', price: '₹500–₹1,000', note: 'PCB + solenoid' },
      { service: 'Baffle Filter Replacement', price: '₹400–₹800', note: 'Genuine parts' },
    ],
  },
  'geyser-repair': {
    name: 'Geyser Repair',
    fullName: 'Geyser Repair & Service',
    mainProblem: 'Geyser not heating',
    emoji: '🔥',
    dataSlug: 'geyser-repair',
    brands: ['Racold', 'AO Smith', 'Bajaj', 'Havells', 'V-Guard', 'Crompton', 'Orient', 'Usha', 'Rinnai', 'Jaquar'],
    problems: [
      { icon: '🌡️', title: 'Not heating', desc: 'Geyser thanda paani de raha' },
      { icon: '💧', title: 'Water leakage', desc: 'Geyser se paani tapakna' },
      { icon: '⚡', title: 'No power / trip', desc: 'MCB trip ya fuse blow' },
      { icon: '🔧', title: 'Thermostat fault', desc: 'Temperature control kharab' },
      { icon: '🔩', title: 'Heating element', desc: 'Element fuse ho gaya' },
      { icon: '🦠', title: 'Rust / sediment', desc: 'Tank andar se rust lagna' },
    ],
    pricing: [
      { service: 'Inspection & Repair', price: '₹350', note: 'Thermostat, wiring etc.' },
      { service: 'Heating Element Replacement', price: '₹500–₹900', note: 'Parts included' },
      { service: 'Thermostat Replacement', price: '₹400–₹700', note: 'All brands' },
      { service: 'Full Descaling & Service', price: '₹600–₹1,000', note: 'Annual recommended' },
    ],
  },
  'microwave-repair': {
    name: 'Microwave Repair',
    fullName: 'Microwave Repair & Service',
    mainProblem: 'Microwave not heating',
    emoji: '📻',
    dataSlug: 'microwave-repair',
    brands: ['LG', 'Samsung', 'IFB', 'Panasonic', 'Whirlpool', 'Bajaj', 'Godrej', 'Morphy Richards', 'Haier', 'Siemens'],
    problems: [
      { icon: '🌡️', title: 'Not heating', desc: 'Magnetron ya diode fault' },
      { icon: '🔄', title: 'Turntable stuck', desc: 'Plate rotate nahi kar rahi' },
      { icon: '⚡', title: 'Sparking inside', desc: 'Dangerous — immediately stop use' },
      { icon: '🚪', title: 'Door fault', desc: 'Door latch ya switch broken' },
      { icon: '🔊', title: 'Noise problem', desc: 'Fan ya magnetron noise' },
      { icon: '🔲', title: 'Button / display', desc: 'Control panel ya LED faulty' },
    ],
    pricing: [
      { service: 'Inspection & Minor Fix', price: '₹350', note: 'Fuse, wiring, switch' },
      { service: 'Magnetron Replacement', price: '₹800–₹1,800', note: 'Most common fix' },
      { service: 'Turntable Motor Fix', price: '₹400–₹700', note: 'Motor or coupler' },
      { service: 'PCB / Control Panel', price: '₹700–₹1,500', note: 'Parts cost extra' },
    ],
  },
  'ro-repair': {
    name: 'RO Water Purifier Repair',
    fullName: 'RO Water Purifier Repair & Service',
    mainProblem: 'RO not working',
    emoji: '💧',
    dataSlug: 'ro-repair',
    brands: ['Kent', 'Aquaguard', 'Livpure', 'Pureit', 'AO Smith', 'Havells', 'Zero B', 'Nasaka', 'Tata Swach', 'Blue Star'],
    problems: [
      { icon: '💧', title: 'Not working', desc: 'RO band hai ya paani nahi aa raha' },
      { icon: '🐌', title: 'Low water flow', desc: 'Paani bahut dheere aa raha' },
      { icon: '📊', title: 'TDS too high', desc: 'Filter ya membrane worn out' },
      { icon: '🔄', title: 'Membrane change', desc: 'RO membrane change needed' },
      { icon: '💡', title: 'UV lamp fault', desc: 'UV lamp fused ya kharab' },
      { icon: '🚿', title: 'Water leakage', desc: 'Connection se paani tapakna' },
    ],
    pricing: [
      { service: 'Inspection & Basic Fix', price: '₹350', note: 'Flushing + system check' },
      { service: 'Filter Set Change (3 filters)', price: '₹600–₹1,000', note: 'Annual recommended' },
      { service: 'RO Membrane Replacement', price: '₹800–₹1,400', note: 'Genuine membrane' },
      { service: 'UV Lamp + Pump Repair', price: '₹500–₹1,000', note: 'Parts included' },
    ],
  },
};

// Unique city-specific intro content per service (anti-thin-content)
export const SEO_CITIES = {
  indore: {
    name: 'Indore',
    state: 'Madhya Pradesh',
    served: true,
    topAreas: 'Vijay Nagar, Palasia',
    areas: ['Vijay Nagar', 'Scheme 54', 'AB Road', 'Rau', 'Palasia', 'Rajwada', 'LIG Colony', 'MIG Colony', 'HIG Colony', 'Mahalakshmi Nagar', 'Bhawarkuan', 'Nipania', 'Super Corridor', 'Silicon City', 'Scheme 78', 'Annapurna', 'Tilak Nagar', 'Bengali Square', 'Geeta Bhawan', 'Sukhliya', 'Sudama Nagar', 'Saket Nagar', 'Pardesipura', 'New Palasia', 'Rajendra Nagar'],
    intros: {
      'ac-repair': 'Indore ki tez garmi mein — May-June mein 43°C tak temperature jaata hai — AC band ho jaana ek emergency ban jaata hai. Vijay Nagar se Silicon City, AB Road se Palasia tak, hazaaron ghaaron mein hum daily AC service karte hain. Ek call karo, 60 minute mein certified technician aapke darwaaze pe — pehle price batayenge, phir kaam shuru.',
      'washing-machine-repair': 'Indore ki busy life mein washing machine ka band ho jaana kapde sukhne ki routine tod deta hai — khaas kar garmi mein jab kapde jaldi kharab hote hain. LIG Colony, MIG Colony aur Mahalakshmi Nagar ke customers ke ghar hum regularly repair karte hain. Drum nahi spin ho raha, paani nahi nikal raha ya motor kharab — same day fix, 30-day warranty.',
      'refrigerator-repair': 'Indore ki bheeshan garmi (45°C tak!) mein fridge ka kaam nahi karna matlab ghar ka saara khaana kharab ho sakta hai. Scheme 54, Bhawarkuan aur Nipania mein hum fridge repair karte hain — compressor se gas refill tak. Pehle free estimate, phir kaam — koi hidden charge nahi.',
      'chimney-repair': 'Indore ke modern kitchens mein chimney ab ek zaroorat hai — khaas kar Annapurna, Bengali Square aur Geeta Bhawan area ke busy kitchens mein. Chimney smoke nahi kheench rahi, auto-clean kaam nahi kar raha ya motor jam gayi — hum 60 minute mein technician bhejte hain, pehle estimate phir kaam.',
      'geyser-repair': 'Indore ki sardi (December-January) mein geyser band ho jaana subah ki nahaane ki routine tod deta hai. Rajwada, Tilak Nagar aur Sudama Nagar area ke customers ke liye hum same-day geyser repair karte hain. Heating element, thermostat ya leakage — sab theek, 30-day warranty.',
      'microwave-repair': 'Indore mein students aur office-goers ke liye microwave ab daily kitchen ka hissa hai. Saket Nagar, Pardesipura aur New Palasia ke customers ke liye hum microwave repair karte hain. Garam nahi ho raha, turntable nahi chal raha ya sparking — 60 minute mein certified technician.',
      'ro-repair': 'Indore ke kai areas — Super Corridor, IIM Area aur Scheme 140 — mein groundwater TDS level 400+ hota hai. RO purifier ka sahi kaam karna family health ke liye zaroor hai. Hum RO service, membrane change aur leakage repair karte hain — 60 minute mein doorstep service.',
    },
    reviews: [
      // GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam (original had 'GST invoice bhi mili.' before 'Highly recommend!')
      { name: 'Rahul Sharma', area: 'Vijay Nagar', service: 'AC Repair', text: 'Voltas AC bilkul thanda nahi kar raha tha, 43°C ki garmi mein bahut takleef thi. Call kiya aur exactly 45 minute mein technician aa gaya. Gas refill + full service, ₹799 liya — fair price. Highly recommend!' },
      { name: 'Meena Joshi', area: 'Palasia', service: 'Refrigerator Repair', text: 'Samsung fridge ka compressor kharab tha. Pehle estimate diya phir kaam kiya — koi hidden charge nahi. Ab perfectly chal rahi hai. Indore mein best appliance repair service.' },
    ],
    faqs: {
      'ac-repair': [
        { q: 'Indore mein AC repair ki starting price kya hai?', a: 'Indore mein AC basic service ₹350 se shuru hoti hai. Gas refill ₹999 tak. Pehle free estimate dete hain — koi obligation nahi.' },
        { q: 'Kya aap Vijay Nagar, Scheme 54 aur AB Road mein AC repair karte hain?', a: 'Haan, Vijay Nagar, Scheme 54, AB Road, Palasia, Rajwada, LIG Colony aur Indore ke 36+ areas mein same-day service.' },
        { q: 'Indore ki garmi mein urgent AC repair mein kitna time lagega?', a: 'Normal hours (8am–8pm) mein 30–60 minute mein technician. Peak summer season mein bhi same day service guarantee.' },
        { q: 'Kya Indore mein sab brands ki AC repair hoti hai?', a: 'Haan — LG, Samsung, Voltas, Daikin, Hitachi, Carrier, Blue Star, O General, Lloyd, Panasonic sab brands.' },
        { q: 'AC repair ke baad warranty milti hai?', a: '30-day repair warranty. Same problem dobara aaye toh free fix — hamari guarantee.' },
      ],
      'washing-machine-repair': [
        { q: 'Indore mein washing machine repair kitne mein hoti hai?', a: 'Basic repair ₹350 se shuru. Belt/pump change ₹500–₹800. Motor repair ₹800–₹1,500. Pehle diagnosis free.' },
        { q: 'Indore mein front load aur top load dono washing machine repair hoti hai?', a: 'Haan, fully automatic, semi-automatic, front load, top load — sab types ki repair Indore mein available.' },
        { q: 'LIG Colony ya Silicon City area mein washing machine service hai?', a: 'Haan, LIG Colony, MIG Colony, HIG Colony, Silicon City, Mahalakshmi Nagar sab areas covered.' },
        { q: 'Kya ek din mein washing machine theek ho jaayegi?', a: 'Zyada tar problems same day fix hoti hain. PCB ya rare parts ke cases mein 1-2 din lag sakte hain.' },
        { q: 'Repair ke baad warranty milti hai?', a: '30-day warranty on all repairs. Parts replacement pe alag manufacturer warranty bhi.' },
      ],
      'refrigerator-repair': [
        { q: 'Indore mein fridge repair ki cost kya hai?', a: 'Basic repair ₹350. Gas refill ₹700–₹1,200. Compressor repair ₹1,500–₹3,000. Pehle free diagnosis.' },
        { q: 'Indore mein single door aur double door dono fridge repair hoti hai?', a: 'Haan, single door, double door, side-by-side, French door — sab types.' },
        { q: 'Fridge gas refill Indore mein ghar pe hoti hai?', a: 'Haan, ghar pe hi karte hain — 60 minute mein technician aata hai, gas refill + leakage check.' },
        { q: 'Bhawarkuan ya Nipania mein fridge repair service hai?', a: 'Haan, Bhawarkuan, Nipania, Scheme 54, Palasia, New Palasia sab jagah service.' },
        { q: 'Refrigerator repair ke baad warranty hai?', a: '30-day repair warranty on labour. Parts ki manufacturer warranty alag.' },
      ],
      'chimney-repair': [
        { q: 'Indore mein kitchen chimney cleaning ka charge kya hai?', a: 'Deep cleaning ₹350–₹600. Motor repair ₹700–₹1,500. Auto-clean fix ₹500–₹1,000.' },
        { q: 'Chimney service mein kitna time lagta hai?', a: '1–2 ghante mein puri chimney cleaning aur service ho jaati hai.' },
        { q: 'Elica aur Faber chimney repair Indore mein hoti hai?', a: 'Haan, Elica, Faber, Bosch, Glen, Hindware, Prestige — sab brands ki chimney repair.' },
        { q: 'Annapurna ya Bengali Square mein chimney service hai?', a: 'Haan, Annapurna, Bengali Square, Geeta Bhawan, Sukhliya, Tilak Nagar sab areas covered.' },
        { q: 'Kitne time baad chimney cleaning karni chahiye?', a: 'Regular use pe har 3–6 mahine mein cleaning recommend karte hain. Motor ki life badh jaati hai.' },
      ],
      'geyser-repair': [
        { q: 'Indore mein geyser repair ka charge kya hai?', a: 'Basic repair ₹350 se. Heating element ₹500–₹900. Thermostat ₹400–₹700.' },
        { q: 'Indore mein kaunse geyser brands repair karte hain?', a: 'Racold, AO Smith, Bajaj, Havells, V-Guard, Crompton, Rinnai — sab brands.' },
        { q: 'Geyser leakage ghar pe fix hoti hai?', a: 'Haan, hamara technician ghar pe aata hai — leakage spot karta hai, gasket/valve/tank theek karta hai.' },
        { q: 'Rajwada ya Tilak Nagar mein geyser service hai?', a: 'Haan, Rajwada, Tilak Nagar, Sudama Nagar, Saket Nagar, Bengali Square sab areas.' },
        { q: 'Geyser repair ke baad warranty hai?', a: '30-day repair warranty. Heating element replacement pe extra warranty bhi.' },
      ],
      'microwave-repair': [
        { q: 'Indore mein microwave repair ki starting price?', a: 'Basic repair ₹350. Magnetron replacement ₹800–₹1,800. Turntable motor ₹400–₹700.' },
        { q: 'Convection aur solo dono microwave repair hote hain Indore mein?', a: 'Haan, solo, grill, convection — sab types ki repair available.' },
        { q: 'Microwave spark kar raha hai — kya karna chahiye?', a: 'Immediately band karo aur use mat karo. Sparking dangerous hai. 60 minute mein technician bhejte hain.' },
        { q: 'LG aur Samsung microwave repair Indore mein hoti hai?', a: 'Haan, LG, Samsung, IFB, Panasonic, Bajaj, Godrej — sab brands.' },
        { q: 'Saket Nagar ya Pardesipura mein microwave service hai?', a: 'Haan, Saket Nagar, Pardesipura, Sudama Nagar, New Palasia, Super Corridor sab areas covered.' },
      ],
      'ro-repair': [
        { q: 'Indore mein RO service ka kharcha kya hai?', a: 'Basic fix ₹350. Filter set change ₹600–₹1,000. Membrane change ₹800–₹1,400.' },
        { q: 'RO membrane kitne time mein change karni chahiye Indore mein?', a: 'Generally 12–18 mahine mein ya jab TDS again high ho jaaye. Annual service recommend.' },
        { q: 'Kent aur Aquaguard RO repair Indore mein hoti hai?', a: 'Haan, Kent, Aquaguard, Livpure, Pureit, AO Smith, Havells — sab brands.' },
        { q: 'Super Corridor ya IIM Area mein RO service hai?', a: 'Haan, Super Corridor, IIM Area, Silicon City, Scheme 140 sab areas covered.' },
        { q: 'RO repair ke baad paani safe hai peene ke liye?', a: 'Haan. Hum service ke baad TDS level check karte hain aur confirm karte hain ki purification sahi hai.' },
      ],
    },
    areaIntros: {
      'vijay-nagar': 'Vijay Nagar — Indore ka sabse busy commercial-residential hub, Sapna Sangeeta Road aur Palasia ke bilkul paas — mein hamare technician 20–30 minute mein pohonchte hain. Scheme 54 aur AB Road bhi adjacent hain. Same-day service, ₹350 se shuru.',
      'scheme-54': 'Scheme 54 — Vijay Nagar ke north mein ek quiet residential pocket — Mahalakshmi Nagar aur Silicon City ke beech located hai. Hamare Indore base se 25–35 minute mein doorstep service. Pehle estimate, phir kaam — koi hidden charge nahi.',
      'ab-road': 'AB Road (Agra-Bombay Highway) — Indore ka sabse lamba commercial corridor, Annapurna se Lasudia Mori tak — pe hamare technician 20–30 minute mein pohonchte hain. Bhawarkuan aur Pardesipura aas-paas hain. 30-day warranty.',
      'rau': 'Rau — Indore ke Dewas Road pe growing suburban area, Pithampur industrial zone ke gate pe — mein hamare base se 30–40 minute mein service milti hai. Hum pehle phone pe estimate confirm karte hain phir technician bhejte hain. ₹350 se shuru.',
      'palasia': 'Palasia — MG Road ke paas Indore ka established commercial-residential hub, Rajwada aur New Palasia ke beech — mein hum 20–30 minute mein service dete hain. Upmarket area, sab major brands ki repair, fair transparent pricing.',
      'rajwada': 'Rajwada — Indore ka historic Holkar market area, MG Road ke bilkul centre pe — dense residential aur commercial mix hai. Palasia aur Sudama Nagar aas-paas hain. Hum 20–25 minute mein doorstep service dete hain, ₹350 se shuru.',
      'lig-colony': 'LIG Colony — Indore Municipal Corporation ki planned township, MIG Colony aur Vijay Nagar ke beech — mein hum 25–30 minute mein technician bhejte hain. Well-connected residential area, same-day service, 30-day warranty guarantee.',
      'mig-colony': 'MIG Colony — LIG Colony ke adjacent medium-income residential township, Bengali Square aur Geeta Bhawan ke paas — mein hamare Indore team 25–35 minute mein service dete hain. ₹350 se shuru, pehle transparent estimate.',
      'hig-colony': 'HIG Colony — Indore ke HIG Square ke aas-paas ka upscale residential zone, Sukhliya aur Annapurna ke adjacent — mein hum 25–35 minute mein certified technician bhejte hain. 30-day warranty guaranteed.',
      'mahalakshmi-nagar': 'Mahalakshmi Nagar — Scheme 54 aur Vijay Nagar Extension ke paas growing residential area — mein same-day repair available hai. Hamare Indore base se 25–35 minute mein service. ₹350 starting price, pehle free estimate.',
      'bhawarkuan': 'Bhawarkuan — Indore ki Bypass Road ke paas, RTO office ke adjacent — AB Road aur Rajendra Nagar bilkul karib hain. Hum 25–30 minute mein service dete hain. 30-day warranty guaranteed.',
      'nipania': 'Nipania — Super Corridor ke paas growing residential township, Vijay Nagar Extension aur Scheme 78 ke adjacent — mein hum 25–35 minute mein technician bhejte hain. Modern area, same-day service, ₹350 se shuru.',
      'super-corridor': 'Super Corridor — Indore ka IT hub, TCS aur Infosys campus jahan hain — mein modern housing societies Aerocity aur Vijay Nagar Extension hain. Hamare base se 35–45 minute mein service, weekdays aur weekends dono.',
      'silicon-city': 'Silicon City — Super Corridor ke adjacent growing IT-residential hub, Nipania aur Scheme 78 nearby — mein hum 30–40 minute mein technician bhejte hain. Modern apartments, sab major brands ki repair, ₹350 se shuru.',
      'scheme-78': 'Scheme 78 — Devguradia ke paas Indore ka large planned residential scheme, Vijay Nagar aur Rau ke beech — mein hum 30–40 minute mein service dete hain. Pehle estimate confirm, phir kaam — koi surprise charge nahi.',
      'annapurna': 'Annapurna — AB Road pe Indore ki established residential area, Bengali Square aur Geeta Bhawan ke bilkul adjacent — Mandir ki wajah se mashoor iss locality mein hum 20–30 minute mein doorstep service dete hain.',
      'tilak-nagar': 'Tilak Nagar — Sudama Nagar ke paas established residential locality, Bengali Square aur Rajwada ke adjacent — mein hum 25–30 minute mein certified technician bhejte hain. 30-day repair warranty guaranteed.',
      'bengali-square': 'Bengali Square — Indore ka prominent chauraha, MG Road aur AB Road corridor ke beech — Geeta Bhawan aur Annapurna bilkul aas-paas hain. Hamare base se 20–25 minute mein service. 30-day warranty.',
      'geeta-bhawan': 'Geeta Bhawan — Bengali Square aur Rajwada ke beech established residential colony, Tilak Nagar aur Sukhliya nearby — mein hum 20–30 minute mein certified technician bhejte hain. ₹350 se shuru, transparent pricing.',
      'sukhliya': 'Sukhliya — HIG Colony aur Annapurna ke beech residential area, AB Road corridor se well-connected — mein hum 25–35 minute mein service dete hain. Same-day repair, 30-day warranty.',
      'sudama-nagar': 'Sudama Nagar — Rajwada ke paas purana aur established area, Tilak Nagar aur Bengali Square ke adjacent — mein hamare Indore base se 20–30 minute mein service. ₹350 se shuru, fair transparent pricing.',
      'saket-nagar': 'Saket Nagar — Pardesipura aur AB Road ke beech established residential area, commercial corridor se well-connected — mein hum 20–30 minute mein doorstep service dete hain. 30-day warranty.',
      'pardesipura': 'Pardesipura — AB Road pe industrial-residential mix, National Highway connectivity ke wajah se important area, Saket Nagar aur Rajendra Nagar adjacent — mein hum 20–30 minute mein doorstep service dete hain.',
      'new-palasia': 'New Palasia — Old Palasia ka extended residential zone, Vijay Nagar aur MR 9 ke adjacent — mein hum 20–30 minute mein service dete hain. Upmarket area, sab major brands, ₹350 se shuru, pehle estimate.',
      'rajendra-nagar': 'Rajendra Nagar — Bhawarkuan ke paas quiet residential area, AB Road aur Bypass Road ke beech, Pardesipura aur Saket Nagar adjacent — mein hum 25–35 minute mein certified technician bhejte hain. 30-day warranty.',
    },
  },

  bhopal: {
    name: 'Bhopal',
    state: 'Madhya Pradesh',
    served: true,
    topAreas: 'Kolar, Arera Colony',
    areas: ['Kolar', 'Kolar Road', 'Arera Colony', 'MP Nagar Zone 1', 'MP Nagar Zone 2', 'Awadhpuri', 'Katara Hills', 'Bairagarh', 'Habibganj', 'Shahpura', 'Govindpura', 'Piplani', 'BHEL', 'Char Imli', 'TT Nagar', 'Misrod', 'Lalghati', 'Shyamla Hills', 'New Market', 'Indrapuri', 'Hoshangabad Road', 'Minal Residency', 'Arera Hills', 'Chunabhatti', 'Roshanpura'],
    intros: {
      'ac-repair': 'Bhopal ki umar-bhar garmi mein — jithe jheelon ki taazgi bhi garmi ko roka nahi kar sakti — jab AC thanda nahi karta, tab har minute count karta hai. Kolar, MP Nagar aur Arera Colony ke hazaaron ghaaron mein hum AC repair karte hain. Ek call karo, 60 minute mein certified technician aapke ghar pe — pehle estimate, phir kaam.',
      'washing-machine-repair': 'Bhopal mein Kolar Road, Awadhpuri aur Shahpura ke busy ghaaron mein washing machine ka kharab hona ek badi pareshani hai. Hum same-day service dete hain — drum jam ho, motor kharab ho ya paani nahi nikal raha — 60 minute mein technician, pehle price batate hain phir kaam karte hain.',
      'refrigerator-repair': "Bhopal ki garmi mein — MP ki rajdhani ki khuli sadkon pe temperature 44°C tak pohonchta hai — fridge ka thanda nahi karna ghar ka routine bigad deta hai. Arera Hills, Govindpura aur Piplani mein hum fridge repair karte hain. Compressor, gas refill ya thermostat — 60 minute mein.",
      'chimney-repair': "Bhopal ke modern ghaaron ki kitchen chimney agar smoke nahi kheench rahi — khaas kar Char Imli, BHEL aur TT Nagar area mein — toh khana pakana mushkil ho jaata hai. Hum chimney cleaning se motor repair tak sab karte hain — 60 minute mein technician, fair price.",
      'geyser-repair': "Bhopal ki sardi mein — November se February tak kaafi thand padti hai — geyser band ho jaana subah ki routine tod deta hai. Lalghati, Bairagarh aur Misrod ke customers ke liye hum same-day geyser repair karte hain. Heating element ya thermostat — guaranteed fix, 30-day warranty.",
      'microwave-repair': "Bhopal mein Habibganj, Shyamla Hills aur New Market ke busy households mein microwave ka band hona daily routine ko affect karta hai. Hum magnetron, turntable, door fault aur PCB repair karte hain — 60 minute mein, koi hidden charge nahi.",
      'ro-repair': "Bhopal ke kai areas mein — khaas kar Katara Hills, Hoshangabad Road aur Indrapuri — RO purifier ka sahi kaam karna peeye ke paani ki quality ke liye zaroor hai. Hum filter change, membrane replacement aur leakage repair karte hain — 60 minute mein doorstep service.",
    },
    reviews: [
      { name: 'Priya Verma', area: 'Kolar, Bhopal', service: 'Washing Machine Repair', text: 'LG washing machine spin nahi ho rahi thi aur paani nahi nikal raha tha. Same day service mili, technician ne drum belt change kiya. Ab perfectly chal rahi hai. Pehle price bataya phir kaam kiya — bahut honest service.' },
      { name: 'Sanjay Tiwari', area: 'Arera Colony, Bhopal', service: 'AC Repair', text: 'Samsung AC gas khatam ho gayi thi, garmi mein room hot box ban gaya tha. Bhopal mein itni fast service expect nahi thi — 50 minute mein technician aaya, gas refill kiya, ₹999 liya. Fair price, warranty bhi mili.' },
    ],
    faqs: {
      'ac-repair': [
        { q: 'Bhopal mein AC repair ki starting price kya hai?', a: 'Bhopal mein AC basic service ₹350 se shuru. Gas refill ₹999 tak. Pehle free estimate — koi obligation nahi.' },
        { q: 'Kolar, MP Nagar aur Arera Colony mein AC repair service hai?', a: 'Haan, Kolar, MP Nagar Zone 1 & 2, Arera Colony, Awadhpuri, Katara Hills aur Bhopal ke 35+ areas mein same-day service.' },
        { q: 'Bhopal mein AC technician kitne time mein aata hai?', a: 'Call ke baad 30–60 minute mein. Bhopal ke sabhi major areas mein hamare certified technicians available hain.' },
        { q: 'Bhopal mein kaunse AC brands service hote hain?', a: 'LG, Samsung, Voltas, Daikin, Hitachi, Carrier, Godrej, Panasonic — sab brands ki AC repair.' },
        { q: 'Repair ke baad warranty milti hai?', a: '30-day repair warranty. Same problem dobara aaye toh free fix guaranteed.' },
      ],
      'washing-machine-repair': [
        { q: 'Bhopal mein washing machine repair ka kharcha kya hai?', a: 'Basic repair ₹350 se shuru. Belt/pump ₹500–₹800. Motor repair ₹800–₹1,500.' },
        { q: 'Bhopal mein IFB aur Bosch washing machine repair hoti hai?', a: 'Haan, LG, Samsung, IFB, Bosch, Whirlpool, Godrej, Haier — sab brands ki repair Bhopal mein.' },
        { q: 'Awadhpuri ya Shahpura mein washing machine service hai?', a: 'Haan, Awadhpuri, Shahpura, Kolar Road, Govindpura, Piplani sab areas covered.' },
        { q: 'Same day repair guarantee hai Bhopal mein?', a: 'Haan, 98% cases same day fix. Rare parts ke cases mein 1-2 din lag sakte hain.' },
        { q: 'Repair ke baad warranty milti hai?', a: '30-day warranty on all repairs. Parts replacement pe additional warranty.' },
      ],
      'refrigerator-repair': [
        { q: 'Bhopal mein fridge repair ki cost kya hai?', a: 'Basic ₹350. Gas refill ₹700–₹1,200. Compressor ₹1,500–₹3,000. Pehle free diagnosis.' },
        { q: 'Bhopal mein sab brands ki fridge repair hoti hai?', a: 'Haan, LG, Samsung, Whirlpool, Godrej, Haier, Panasonic, Bosch — sab brands.' },
        { q: 'BHEL ya Piplani area mein fridge repair service hai?', a: 'Haan, BHEL, Piplani, Govindpura, Char Imli, Misrod sab jagah service.' },
        { q: 'Fridge compressor repair Bhopal mein ghar pe hoti hai?', a: 'Haan, technician ghar pe aata hai — compressor check karta hai, repair ya replace karta hai.' },
        { q: 'Warranty milti hai fridge repair pe?', a: '30-day repair warranty on labour. Parts ki manufacturer warranty alag.' },
      ],
      'chimney-repair': [
        { q: 'Bhopal mein chimney cleaning ka charge kya hai?', a: 'Deep cleaning ₹350–₹600. Motor repair ₹700–₹1,500. Auto-clean fix ₹500–₹1,000.' },
        { q: 'Bhopal mein kaunse chimney brands service hote hain?', a: 'Elica, Faber, Bosch, Glen, Hindware, Prestige — sab brands ki chimney repair Bhopal mein.' },
        { q: 'Char Imli ya TT Nagar mein chimney service hai?', a: 'Haan, Char Imli, TT Nagar, BHEL, Govindpura, Shahpura sab areas covered.' },
        { q: 'Chimney service mein kitna time lagta hai?', a: '1–2 ghante mein puri cleaning aur repair ho jaati hai.' },
        { q: 'Kitne time mein ek baar chimney service karni chahiye?', a: 'Har 3–6 mahine mein cleaning aur annual motor service recommend karte hain.' },
      ],
      'geyser-repair': [
        { q: 'Bhopal mein geyser repair ka charge kya hai?', a: 'Basic repair ₹350. Element replacement ₹500–₹900. Thermostat ₹400–₹700.' },
        { q: 'Bhopal mein Racold aur AO Smith geyser repair hoti hai?', a: 'Haan, Racold, AO Smith, Bajaj, Havells, V-Guard, Crompton — sab brands Bhopal mein.' },
        { q: 'Lalghati ya Bairagarh mein geyser service hai?', a: 'Haan, Lalghati, Bairagarh, Misrod, Katara Hills, Awadhpuri sab areas covered.' },
        { q: 'Geyser MCB trip kar raha hai — kya karna chahiye?', a: 'Use band raho aur call karo. MCB trip usually element short ya earthing fault — hamara technician diagnose karega.' },
        { q: 'Geyser repair ke baad warranty hai?', a: '30-day repair warranty. Heating element pe extra warranty bhi.' },
      ],
      'microwave-repair': [
        { q: 'Bhopal mein microwave repair ki starting price?', a: 'Basic ₹350. Magnetron ₹800–₹1,800. Turntable motor ₹400–₹700.' },
        { q: 'Habibganj ya Shyamla Hills mein microwave service hai?', a: 'Haan, Habibganj, Shyamla Hills, New Market, Arera Colony, MP Nagar sab areas covered.' },
        { q: 'Samsung aur LG microwave Bhopal mein repair hoti hai?', a: 'Haan, LG, Samsung, IFB, Panasonic, Bajaj, Godrej, Whirlpool — sab brands.' },
        { q: 'Convection oven bhi repair karte hain?', a: 'Haan, solo, grill, convection — sab types ki repair.' },
        { q: 'Repair warranty milti hai?', a: '30-day warranty on all microwave repairs.' },
      ],
      'ro-repair': [
        { q: 'Bhopal mein RO service ka charge kya hai?', a: 'Basic fix ₹350. Filter set change ₹600–₹1,000. Membrane ₹800–₹1,400.' },
        { q: 'Katara Hills ya Hoshangabad Road mein RO service hai?', a: 'Haan, Katara Hills, Hoshangabad Road, Indrapuri, MP Nagar, Awadhpuri sab jagah.' },
        { q: 'Kent aur Aquaguard RO Bhopal mein repair hota hai?', a: 'Haan, Kent, Aquaguard, Livpure, Pureit, AO Smith, Havells — sab brands Bhopal mein.' },
        { q: 'RO ka paani TDS high aa raha hai — kya karna chahiye?', a: 'Membrane change ki zaroorat hai. Hamara technician TDS meter se check karega aur recommend karega.' },
        { q: 'RO repair ke baad paani quality check karte hain?', a: 'Haan, service ke baad TDS check karke confirm karte hain ki purification sahi hai.' },
      ],
    },
    areaIntros: {
      'kolar': 'Kolar — Bhopal ka southern suburb, Katara Hills aur Awadhpuri ke beech ka growing residential hub — mein hum 25–35 minute mein service dete hain. Kolar Road se well-connected, same-day service, ₹350 se shuru.',
      'kolar-road': 'Kolar Road — Kolar se Bairagarh tak Bhopal ka southern arterial road, Kolar aur Misrod ke adjacent — pe kai residential pockets hain. Hum 25–35 minute mein doorstep service dete hain. 30-day warranty.',
      'arera-colony': 'Arera Colony — Bhopal ka prestigious residential area, Shyamla Hills aur Arera Hills ke paas, doctors aur IAS officers ka popular zone — mein hamare base se 20–30 minute mein service. Fair price, 30-day warranty.',
      'mp-nagar-zone-1': 'MP Nagar Zone 1 — Bhopal ka central commercial hub, Zone 2 aur Habibganj ke adjacent, offices aur dense residential mix — mein hum 20–25 minute mein doorstep service dete hain. Same-day, ₹350 se shuru.',
      'mp-nagar-zone-2': 'MP Nagar Zone 2 — Zone 1 ke extension, Char Imli aur TT Nagar ke paas commercial-residential mix — mein hum 20–25 minute mein certified technician bhejte hain. ₹350 se shuru, transparent pricing.',
      'awadhpuri': 'Awadhpuri — Kolar ke adjacent Bhopal ka growing residential township, Hoshangabad Road aur Minal Residency ke paas — mein hum 25–35 minute mein service dete hain. Same-day, 30-day warranty guarantee.',
      'katara-hills': 'Katara Hills — Kolar ke paas Bhopal ka scenic hilltop residential area, Kolar Road se connected quiet green locality — mein hum 30–40 minute mein doorstep service dete hain. ₹350 se shuru.',
      'bairagarh': 'Bairagarh — Bhopal ka western suburb, railway station aur Airport Road ke adjacent, Indore Highway se connected — mein hum 30–40 minute mein service dete hain. Lalghati nearby. Same-day guaranteed.',
      'habibganj': 'Habibganj (Rani Kamlapati) — Bhopal ka newly-developed upmarket area, Shyamla Hills aur MP Nagar ke paas, world-class railway station yahan — mein hum 20–30 minute mein service dete hain. Premium service, fair price.',
      'shahpura': 'Shahpura — Govindpura ke adjacent Bhopal ka residential area, Piplani aur BHEL ke paas — mein hum 25–35 minute mein certified technician bhejte hain. ₹350 se shuru, 30-day repair warranty.',
      'govindpura': 'Govindpura — Bhopal ka industrial-residential mix, Piplani aur BHEL ke adjacent — mein hum 25–35 minute mein service dete hain. Shahpura aur Char Imli nearby. Same-day, transparent estimate pehle.',
      'piplani': 'Piplani — BHEL ke bilkul paas residential area, Govindpura aur Shahpura ke adjacent — mein hum 25–35 minute mein doorstep service dete hain. BHEL township ke saath connected, 30-day warranty.',
      'bhel': 'BHEL — Heavy Electricals ka planned township, Piplani aur Govindpura se connected well-maintained residential colony — mein hum 30–40 minute mein certified technician bhejte hain. 30-day warranty.',
      'char-imli': 'Char Imli — MP Secretariat ke paas Bhopal ka administrative hub, TT Nagar aur MP Nagar Zone 2 ke beech — mein hum 20–25 minute mein service dete hain. ₹350 se shuru, same-day repair guaranteed.',
      'tt-nagar': 'TT Nagar — Bhopal ka purana established commercial area, New Market aur Char Imli ke paas — mein hum 20–25 minute mein certified technician bhejte hain. Fair pricing, 30-day warranty.',
      'misrod': 'Misrod — Bhopal ka eastern suburb, Hoshangabad Road pe, Chunabhatti aur Kolar Road ke adjacent growing residential area — mein hum 30–40 minute mein service dete hain. ₹350 se shuru.',
      'lalghati': 'Lalghati — Sultania Road pe Bhopal ka old established area, Bairagarh aur MP Nagar ke beech — mein hum 25–30 minute mein doorstep service dete hain. Same-day, transparent pricing, 30-day warranty.',
      'shyamla-hills': 'Shyamla Hills — Bhopal ka green hilltop residential area, Arera Colony aur Habibganj ke adjacent, CM residence bhi yahan — mein hum 20–30 minute mein service dete hain. 30-day warranty guaranteed.',
      'new-market': 'New Market — Bhopal ka central shopping hub, TT Nagar aur MP Nagar ke adjacent, dense commercial-residential mix — mein hum 20–25 minute mein doorstep service dete hain. ₹350 se shuru, pehle estimate.',
      'indrapuri': 'Indrapuri — Hoshangabad Road pe Bhopal ka residential colony, Awadhpuri aur Minal Residency ke paas — mein hum 30–40 minute mein doorstep service dete hain. Same-day repair, 30-day warranty guarantee.',
      'hoshangabad-road': 'Hoshangabad Road — Bhopal se Hoshangabad ka major arterial corridor, Misrod aur Indrapuri ke saath connected — pe hum 30–40 minute mein service dete hain. Minal Residency bhi covered. ₹350 se shuru.',
      'minal-residency': 'Minal Residency — Hoshangabad Road pe modern gated colony, Indrapuri aur Awadhpuri ke paas well-planned residential complex — mein hum 30–40 minute mein certified technician bhejte hain. 30-day warranty.',
      'arera-hills': 'Arera Hills — Arera Colony ke extension mein hilltop residential area, Shyamla Hills aur Habibganj ke paas premium locality — mein hum 20–30 minute mein service dete hain. 30-day warranty.',
      'chunabhatti': 'Chunabhatti — Hoshangabad Road ke paas Bhopal ka growing suburb, Misrod aur Kolar Road ke adjacent — mein hum 30–40 minute mein service dete hain. ₹350 se shuru, pehle free estimate, phir kaam.',
      'roshanpura': 'Roshanpura — New Market ke paas Bhopal ka established residential colony, TT Nagar aur Char Imli ke adjacent — mein hum 20–25 minute mein doorstep service dete hain. Same-day, transparent pricing.',
    },
  },

  ujjain: {
    name: 'Ujjain',
    state: 'Madhya Pradesh',
    served: false,
    areas: ['Freeganj', 'Madhav Nagar', 'Dewas Road', 'Indore Road', 'Mahakal Area', 'Vikram Nagar', 'Nanakheda', 'Tower Chowk', 'Dwarkapuri', 'Neelganga', 'Subhash Nagar', 'Maksi Road'],
    intros: {
      'ac-repair': 'Ujjain — Mahakal ki nagri — mein bhi garmi utni hi padti hai jitni bade shehron mein. Freeganj, Madhav Nagar aur Dewas Road ke households mein hum AC repair karte hain — same-day service, 60 minute mein technician, ₹350 se shuru.',
      'washing-machine-repair': 'Ujjain mein Vikram Nagar, Nanakheda aur Dwarkapuri area ke ghaaron mein washing machine repair ke liye hum 60 minute mein technician bhejte hain. Drum nahi chal raha, paani nahi nikal raha — same day fix, 30-day warranty.',
      'refrigerator-repair': 'Ujjain ki garmi mein fridge ka sahi kaam karna bahut zaroor hai. Mahakal Area, Tower Chowk aur Indore Road ke customers ke liye hum same-day fridge repair karte hain — gas refill se compressor repair tak.',
      'chimney-repair': 'Ujjain ke modern kitchens mein chimney cleaning aur repair ke liye hamari team available hai. Freeganj, Madhav Nagar aur Vikram Nagar area mein 60 minute mein technician — motor repair se deep cleaning tak.',
      'geyser-repair': 'Ujjain ki sardi mein geyser ka kharab hona ek badi problem hai. Nanakheda, Neelganga aur Subhash Nagar ke customers ke liye hum same-day geyser repair karte hain — heating element se thermostat fault tak.',
      'microwave-repair': 'Ujjain mein Dwarkapuri, Tower Chowk aur Madhav Nagar area ke liye hum microwave repair service dete hain — magnetron, turntable, door fault — 60 minute mein certified technician.',
      'ro-repair': 'Ujjain mein RO purifier ki service ke liye hum ready hain — Mahakal Area, Dewas Road aur Indore Road area mein filter change se membrane replacement tak, same-day service.',
    },
    reviews: [
      { name: 'Amit Patel', area: 'Ujjain', service: 'Refrigerator Repair', text: 'Samsung fridge 3 din se thanda nahi kar rahi thi. HomeRepairPro ko call kiya, 1 ghante mein technician aaya, thermostat fix kiya. Ab ekdum sahi chal rahi hai. Best service!' },
    ],
    faqs: {
      'ac-repair': [
        { q: 'Ujjain mein AC repair ki starting price kya hai?', a: 'AC basic service ₹350 se shuru. Gas refill ₹999. Pehle free estimate — koi obligation nahi.' },
        { q: 'Ujjain mein technician kitne time mein aata hai?', a: '60 minute mein. Freeganj, Madhav Nagar, Nanakheda sab areas covered.' },
        { q: 'Ujjain mein kaunse AC brands repair hote hain?', a: 'LG, Samsung, Voltas, Daikin, Hitachi — sab major brands.' },
        { q: 'Mahakal Area mein AC service hai?', a: 'Haan, Mahakal Area, Freeganj, Dewas Road, Indore Road sab jagah service.' },
        { q: 'Repair ke baad warranty milti hai?', a: '30-day warranty guaranteed.' },
      ],
    },
  },

  mhow: {
    name: 'Mhow',
    state: 'Madhya Pradesh',
    served: false,
    areas: ['Mhow Cantonment', 'Old Mhow', 'New Mhow', 'Station Road', 'Military Area', 'Pithampur Road', 'Sanawad Road'],
    intros: {
      'ac-repair': 'Mhow — Indore ke paas ka cantonment town — mein AC repair ke liye hum ready hain. Military Area, Cantonment aur New Mhow ke residential areas mein 60 minute mein certified technician, ₹350 se shuru.',
      'washing-machine-repair': 'Mhow Cantonment, Old Mhow aur Station Road area ke ghaaron mein washing machine repair ke liye hum same-day service dete hain. Drum nahi chal raha ya motor kharab — 60 minute mein fix.',
      'refrigerator-repair': 'Mhow mein fridge repair ke liye — Cantonment area se New Mhow tak — hum same-day technician bhejte hain. Gas refill se compressor fault tak, fair price.',
      'chimney-repair': 'Mhow ke modern households mein chimney cleaning aur repair ke liye hum available hain. 60 minute mein technician — motor repair se deep cleaning tak.',
      'geyser-repair': 'Mhow ki sardi mein geyser repair ke liye hum Military Area, Cantonment aur Pithampur Road area mein same-day service dete hain — heating element se thermostat fault tak.',
      'microwave-repair': 'Mhow mein microwave repair ke liye hum 60 minute mein technician bhejte hain — Cantonment area se Old Mhow tak, magnetron se door fault sab fix karte hain.',
      'ro-repair': 'Mhow mein RO service ke liye hum ready hain — filter change, membrane replacement, leakage fix — 60 minute mein doorstep service.',
    },
    reviews: [],
    faqs: {
      'ac-repair': [
        { q: 'Mhow mein AC repair ki starting price kya hai?', a: 'AC basic service ₹350 se shuru. Gas refill ₹999. Pehle free estimate.' },
        { q: 'Mhow Cantonment area mein AC service hai?', a: 'Haan, Cantonment, Military Area, Old Mhow, New Mhow, Station Road sab jagah service.' },
        { q: 'Mhow mein technician kitne time mein aata hai?', a: '60 minute mein. Indore base se Mhow same-day service.' },
        { q: 'Sab AC brands repair hote hain Mhow mein?', a: 'LG, Samsung, Voltas, Daikin — sab major brands.' },
        { q: 'Repair warranty milti hai?', a: '30-day repair warranty guaranteed.' },
      ],
    },
  },

  dewas: {
    name: 'Dewas',
    state: 'Madhya Pradesh',
    served: false,
    areas: ['Dewas City', 'Industrial Area', 'Sai Nagar', 'Patel Colony', 'Kshipra Road', 'Ujjain Road', 'Tonk Colony', 'Manavar Road'],
    intros: {
      'ac-repair': 'Dewas — Indore ke paas ka industrial city — mein garmi khub padti hai aur AC repair ki zaroorat common hai. Sai Nagar, Patel Colony aur Kshipra Road ke ghaaron mein hum same-day AC repair dete hain — ₹350 se shuru, 60 minute mein technician.',
      'washing-machine-repair': 'Dewas ke Industrial Area, Tonk Colony aur Ujjain Road area ke households mein washing machine repair ke liye hum same-day service dete hain. Drum se motor fault tak — 60 minute mein fix.',
      'refrigerator-repair': 'Dewas mein fridge repair ke liye — Sai Nagar se Manavar Road tak — hum same-day technician bhejte hain. Compressor, gas refill ya thermostat — fair price.',
      'chimney-repair': 'Dewas ke ghaaron mein chimney cleaning aur repair ke liye hum available hain. Kshipra Road, Patel Colony aur Tonk Colony area mein 60 minute mein technician.',
      'geyser-repair': 'Dewas ki sardi mein geyser repair ke liye hum Industrial Area, Sai Nagar aur Ujjain Road area mein same-day service dete hain.',
      'microwave-repair': 'Dewas mein microwave repair ke liye hum 60 minute mein technician bhejte hain — magnetron se door fault sab fix.',
      'ro-repair': 'Dewas mein RO service ke liye hum ready hain — Dewas ka paani quality kaafi jagah TDS high hai. Filter change, membrane — 60 minute mein doorstep.',
    },
    reviews: [],
    faqs: {
      'ac-repair': [
        { q: 'Dewas mein AC repair ki starting price kya hai?', a: 'AC basic service ₹350 se shuru. Gas refill ₹999. Pehle free estimate.' },
        { q: 'Dewas ke kaunse areas mein service hai?', a: 'Dewas City, Sai Nagar, Patel Colony, Industrial Area, Kshipra Road, Tonk Colony sab covered.' },
        { q: 'Technician kitne time mein aata hai?', a: '60 minute mein. Dewas ke liye same-day service available.' },
        { q: 'AC repair warranty milti hai?', a: '30-day repair warranty guaranteed.' },
        { q: 'Sab brands AC repair hoti hai?', a: 'LG, Samsung, Voltas, Daikin — sab major brands.' },
      ],
    },
  },

  sehore: {
    name: 'Sehore',
    state: 'Madhya Pradesh',
    served: false,
    areas: ['Sehore City', 'Ashta', 'Kotwali Area', 'Bus Stand Area', 'Hospital Road', 'Bhopal Road', 'Industrial Colony'],
    intros: {
      'ac-repair': 'Sehore — Bhopal ke paas ka district headquarters — mein AC repair ke liye hum ready hain. Kotwali Area, Bhopal Road aur Hospital Road ke households mein 60 minute mein certified technician, ₹350 se shuru.',
      'washing-machine-repair': 'Sehore City, Bus Stand Area aur Industrial Colony ke ghaaron mein washing machine repair ke liye hum same-day service dete hain — drum se motor fault tak fix.',
      'refrigerator-repair': 'Sehore mein fridge repair ke liye hum Kotwali Area, Bhopal Road aur Ashta area mein same-day technician bhejte hain. Gas refill se compressor — fair price.',
      'chimney-repair': 'Sehore ke modern ghaaron mein chimney cleaning aur repair ke liye hum available hain — 60 minute mein technician, motor repair se deep cleaning tak.',
      'geyser-repair': 'Sehore ki sardi mein geyser repair ke liye hum Sehore City, Ashta aur Hospital Road area mein same-day service dete hain.',
      'microwave-repair': 'Sehore mein microwave repair ke liye hum 60 minute mein doorstep service dete hain — magnetron, turntable, door fault sab fix.',
      'ro-repair': 'Sehore mein RO purifier service ke liye hum ready hain — filter change se membrane replacement tak, same-day doorstep.',
    },
    reviews: [],
    faqs: {
      'ac-repair': [
        { q: 'Sehore mein AC repair ki starting price?', a: '₹350 se shuru. Pehle free estimate.' },
        { q: 'Sehore mein kaunse areas covered hain?', a: 'Sehore City, Ashta, Kotwali, Bus Stand, Hospital Road, Bhopal Road sab.' },
        { q: 'Technician kitne time mein aata hai?', a: '60 minute mein. Same-day service.' },
        { q: 'Repair warranty milti hai?', a: '30-day warranty guaranteed.' },
        { q: 'Sab AC brands repair hote hain?', a: 'LG, Samsung, Voltas, Daikin — sab brands.' },
      ],
    },
  },

  jabalpur: {
    name: 'Jabalpur',
    state: 'Madhya Pradesh',
    served: false,
    areas: ['Napier Town', 'Wright Town', 'Vijay Nagar', 'Gorakhpur', 'Medical College Area', 'Sadar', 'Adhartal', 'Madan Mahal', 'Civil Lines', 'Ranjhi', 'Mandla Road'],
    intros: {
      'ac-repair': 'Jabalpur — Narmada ke kinare ka shahar — mein garmi aur humidity dono hoti hai, jo AC ko aur zaroor banati hai. Napier Town, Wright Town aur Vijay Nagar ke ghaaron mein hum AC repair karte hain — 60 minute mein technician, ₹350 se shuru.',
      'washing-machine-repair': 'Jabalpur ke Napier Town, Gorakhpur aur Medical College Area ke ghaaron mein washing machine repair ke liye hum same-day service dete hain — drum se PCB fault tak.',
      'refrigerator-repair': 'Jabalpur mein fridge repair ke liye — Civil Lines se Madan Mahal tak — hum 60 minute mein technician bhejte hain. Gas refill se compressor fault tak, fair price.',
      'chimney-repair': 'Jabalpur ke modern households mein chimney cleaning aur repair ke liye hum available hain — Sadar, Adhartal aur Ranjhi area mein 60 minute mein service.',
      'geyser-repair': 'Jabalpur ki sardi mein geyser repair ke liye hum Wright Town, Napier Town aur Civil Lines area mein same-day service dete hain.',
      'microwave-repair': 'Jabalpur mein microwave repair ke liye hum 60 minute mein technician bhejte hain — Vijay Nagar se Mandla Road tak sab areas covered.',
      'ro-repair': 'Jabalpur mein RO service ke liye hum ready hain — Narmada belt mein RO maintenance important hai. Filter change, membrane — 60 minute mein doorstep.',
    },
    reviews: [],
    faqs: {
      'ac-repair': [
        { q: 'Jabalpur mein AC repair ki price?', a: '₹350 se shuru. Gas refill ₹999. Pehle free estimate.' },
        { q: 'Napier Town ya Wright Town mein service hai?', a: 'Haan, Napier Town, Wright Town, Vijay Nagar, Gorakhpur, Civil Lines sab covered.' },
        { q: 'Technician kitne time mein aata hai?', a: '60 minute mein. Same-day service.' },
        { q: 'Repair warranty milti hai?', a: '30-day warranty guaranteed.' },
        { q: 'Sab brands AC repair?', a: 'LG, Samsung, Voltas, Daikin — sab brands.' },
      ],
    },
  },

  jaipur: {
    name: 'Jaipur',
    state: 'Rajasthan',
    served: false,
    areas: ['Vaishali Nagar', 'Mansarovar', 'Malviya Nagar', 'C-Scheme', 'Tonk Road', 'Jagatpura', 'Sanganer', 'Sitapura', 'Raja Park', 'Bani Park', 'Nirman Nagar', 'Vidhyadhar Nagar', 'Sodala', 'Jhotwara'],
    intros: {
      'ac-repair': 'Jaipur — Pink City — mein Rajasthan ki tez dhoop mein 46°C tak temperature jaata hai, aur AC ka kharab hona ek real emergency hai. Vaishali Nagar, Mansarovar aur Malviya Nagar ke hazaaron ghaaron mein hum AC repair karte hain — 60 minute mein technician, ₹350 se shuru.',
      'washing-machine-repair': "Jaipur ke C-Scheme, Tonk Road aur Raja Park ke busy households mein washing machine repair ke liye hum same-day service dete hain — Jaipur ki hard water se bhi drum aur pump issues zyada hote hain, jo hum expert tarike se fix karte hain.",
      'refrigerator-repair': 'Jaipur ki extreme garmi mein fridge ka kaam nahi karna literally ghar ka khaana barbad kar sakta hai. Vaishali Nagar, Bani Park aur Sanganer mein hum same-day fridge repair karte hain — gas refill se compressor repair tak.',
      'chimney-repair': 'Jaipur ke modern ghaaron mein chimney cleaning aur repair ke liye hum available hain — Mansarovar, Malviya Nagar aur Jagatpura area mein 60 minute mein technician.',
      'geyser-repair': 'Jaipur mein — desert climate mein sardi bhi padti hai — geyser repair ke liye hum Nirman Nagar, Sodala aur Jhotwara area mein same-day service dete hain.',
      'microwave-repair': 'Jaipur mein microwave repair ke liye hum 60 minute mein doorstep service dete hain — C-Scheme, Vaishali Nagar aur Tonk Road area covered.',
      'ro-repair': 'Jaipur mein hard water aur TDS level high hota hai — RO purifier ka sahi kaam karna bahut zaroor hai. Mansarovar, Malviya Nagar aur Sitapura area mein hum RO service dete hain.',
    },
    reviews: [],
    faqs: {
      'ac-repair': [
        { q: 'Jaipur mein AC repair ki starting price kya hai?', a: 'AC basic service ₹350 se shuru. Gas refill ₹999. Pehle free estimate.' },
        { q: 'Vaishali Nagar ya Mansarovar mein AC repair service hai?', a: 'Haan, Vaishali Nagar, Mansarovar, Malviya Nagar, C-Scheme, Tonk Road, Jagatpura sab covered.' },
        { q: 'Jaipur ki garmi mein urgent AC repair?', a: '60 minute mein technician. Same-day service guarantee.' },
        { q: 'Jaipur mein kaunse brands service hote hain?', a: 'LG, Samsung, Voltas, Daikin, Hitachi, Carrier — sab brands.' },
        { q: 'Repair warranty milti hai?', a: '30-day warranty guaranteed.' },
      ],
    },
  },

  pritampur: {
    name: 'Pritampur',
    state: 'Madhya Pradesh',
    served: false,
    areas: ['Sector 1', 'Sector 2', 'Sector 3', 'Industrial Area Phase 1', 'Industrial Area Phase 2', 'Township Area', 'Mhow Road', 'Dhar Road', 'AKVN Colony'],
    intros: {
      'ac-repair': 'Pritampur — Indore ke paas ka growing industrial township — mein AC repair ke liye hum ready hain. Sector 1, Sector 2 aur Township Area ke residential ghaaron mein 60 minute mein certified technician, ₹350 se shuru.',
      'washing-machine-repair': 'Pritampur ke Township Area, AKVN Colony aur Sector 3 ke ghaaron mein washing machine repair ke liye hum same-day service dete hain — drum se PCB fault tak fix.',
      'refrigerator-repair': 'Pritampur mein fridge repair ke liye hum Industrial Area, Township Area aur Mhow Road ke households mein same-day technician bhejte hain.',
      'chimney-repair': 'Pritampur ke residential areas mein chimney cleaning aur repair ke liye hum available hain — 60 minute mein technician, sab brands covered.',
      'geyser-repair': 'Pritampur ki sardi mein geyser repair ke liye hum Sector 1, Sector 2 aur AKVN Colony area mein same-day service dete hain.',
      'microwave-repair': 'Pritampur mein microwave repair ke liye hum 60 minute mein doorstep service dete hain — Township Area se Industrial Area tak sab covered.',
      'ro-repair': 'Pritampur mein RO service ke liye hum ready hain — filter change se membrane replacement tak, same-day doorstep service.',
    },
    reviews: [],
    faqs: {
      'ac-repair': [
        { q: 'Pritampur mein AC repair ki price?', a: '₹350 se shuru. Gas refill ₹999. Free estimate.' },
        { q: 'Pritampur ke kaunse areas covered hain?', a: 'Sector 1, 2, 3, Township Area, AKVN Colony, Industrial Area, Mhow Road, Dhar Road.' },
        { q: 'Technician kitne time mein aata hai?', a: '60 minute mein. Indore se Pritampur same-day.' },
        { q: 'Repair warranty milti hai?', a: '30-day warranty.' },
        { q: 'Sab AC brands repair?', a: 'LG, Samsung, Voltas — sab brands.' },
      ],
    },
  },

  mumbai: {
    name: 'Mumbai',
    state: 'Maharashtra',
    served: false,
    areas: ['Andheri East', 'Andheri West', 'Bandra', 'Thane', 'Navi Mumbai', 'Borivali', 'Malad', 'Kandivali', 'Goregaon', 'Jogeshwari', 'Kurla', 'Ghatkopar', 'Powai', 'Mulund', 'Dadar', 'Chembur', 'Mira Road', 'Vasai', 'Vashi', 'Kharghar'],
    intros: {
      'ac-repair': 'Mumbai — financial capital of India — mein humid heat aur tight schedules mein AC ka kharab hona ek real problem hai. Andheri, Bandra aur Thane ke busy households mein hum AC repair karte hain — 60 minute mein technician, ₹350 se shuru.',
      'washing-machine-repair': 'Mumbai mein — jahan space tight hai aur time aur bhi tight — washing machine ka kharab hona routine bigad deta hai. Andheri, Goregaon aur Mulund ke ghaaron mein hum same-day washing machine repair dete hain.',
      'refrigerator-repair': 'Mumbai ki humidity aur heat mein fridge ka sahi kaam karna bahut zaroor hai. Powai, Kurla aur Ghatkopar ke customers ke liye hum same-day fridge repair karte hain — gas refill se compressor fault tak.',
      'chimney-repair': 'Mumbai ke compact kitchens mein chimney aur bhi important hai — Bandra, Dadar aur Chembur area mein hum chimney cleaning aur repair karte hain, 60 minute mein technician.',
      'geyser-repair': 'Mumbai mein monsoon aur sardi mein geyser repair ke liye hum Andheri, Borivali aur Thane area mein same-day service dete hain — heating element se thermostat tak.',
      'microwave-repair': 'Mumbai mein — jahan har koi hectic schedule mein rehta hai — microwave repair ke liye hum 60 minute mein doorstep service dete hain, Andheri se Navi Mumbai tak.',
      'ro-repair': 'Mumbai ka municipal water quality improve hui hai lekin building-level TDS vary karta hai. Andheri, Mira Road aur Vasai ke customers ke liye hum RO service dete hain — filter change, membrane replacement, same-day.',
    },
    reviews: [],
    faqs: {
      'ac-repair': [
        { q: 'Mumbai mein AC repair ki starting price kya hai?', a: 'AC basic service ₹350 se shuru. Gas refill ₹999. Pehle free estimate.' },
        { q: 'Andheri ya Bandra mein AC repair service hai?', a: 'Haan, Andheri East/West, Bandra, Thane, Navi Mumbai, Borivali, Malad, Goregaon sab covered.' },
        { q: 'Mumbai mein technician kitne time mein aata hai?', a: '60 minute mein. Mumbai ke major areas mein same-day service.' },
        { q: 'Mumbai mein kaunse brands service hote hain?', a: 'LG, Samsung, Voltas, Daikin, Hitachi, Carrier, Blue Star, O General — sab brands.' },
        { q: 'Repair ke baad warranty?', a: '30-day repair warranty guaranteed.' },
      ],
    },
  },
};

// Get metadata from CSV values (exact match)
export function getServiceCityMeta(citySlug, serviceSlug) {
  const city = SEO_CITIES[citySlug];
  const svc = SEO_SERVICES[serviceSlug];
  if (!city || !svc) return null;

  const areasSuffix = city.topAreas ? ` Serving ${city.topAreas} & all ${city.name}.` : '';

  return {
    title: `${svc.name} in ${city.name} – 60 Min Doorstep Service | HomeRepairPro`,
    description: `${svc.mainProblem} in ${city.name}? Same-day ${svc.name} at ₹350, 60-min response, 30-day warranty. All brands. Call +91 8889539174.${areasSuffix}`,
    h1: `${svc.name} in ${city.name} – Same Day Doorstep Service`,
    canonical: `https://homerepairpro.in/${citySlug}/${serviceSlug}`,
  };
}

export function getAreaFaqs(citySlug, areaSlug, serviceSlug) {
  const city = SEO_CITIES[citySlug];
  const svc = SEO_SERVICES[serviceSlug];
  if (!city || !svc) return [];
  const areaName = areaSlug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return [
    {
      q: `${areaName} ${city.name} mein ${svc.name} service available hai?`,
      a: `Haan, ${areaName} ${city.name} mein ${svc.name} ke liye same-day doorstep service available hai. Call +91 8889539174 ya WhatsApp karo — 60 minute mein certified technician aapke ghar pe.`,
    },
    {
      q: `${areaName} mein ${svc.name} ki starting price kya hai?`,
      a: `${areaName}, ${city.name} mein ${svc.name} ₹350 se shuru hoti hai. Pehle free estimate — koi obligation nahi. Confirm karne ke baad kaam shuru.`,
    },
    {
      q: `${areaName} mein kaunse brands ki ${svc.name} repair hoti hai?`,
      a: `${areaName} mein hum ${svc.brands.slice(0, 5).join(', ')} aur sab major brands ki ${svc.name} repair karte hain.`,
    },
    {
      q: `${areaName} mein repair ke baad warranty milti hai?`,
      a: `Haan — ${areaName} mein har repair pe 30-day warranty. Same problem dobara aaye toh free fix — hamari guarantee.`,
    },
  ];
}

// Get FAQs for a city+service combo
export function getServiceCityFaqs(citySlug, serviceSlug) {
  const city = SEO_CITIES[citySlug];
  if (!city) return [];
  const cityFaqs = city.faqs?.[serviceSlug];
  if (cityFaqs?.length) return cityFaqs;

  // Fallback: generic FAQs with city name
  const svc = SEO_SERVICES[serviceSlug];
  if (!svc) return [];
  return [
    { q: `${city.name} mein ${svc.name} ki starting price kya hai?`, a: `${svc.name} basic repair ₹350 se shuru. Pehle free estimate dete hain — koi obligation nahi.` },
    { q: `${city.name} mein technician kitne time mein aata hai?`, a: `Call ke baad 60 minute mein. ${city.name} ke major areas mein same-day service.` },
    { q: `${city.name} mein kaunse brands repair hote hain?`, a: `${svc.brands.slice(0, 5).join(', ')} — sab major brands ki repair ${city.name} mein available.` },
    { q: 'Repair ke baad warranty milti hai?', a: '30-day repair warranty. Same problem dobara aaye toh free fix.' },
    // GST_MSME_DISABLED — re-enable only after HomeRepairPro has its OWN valid GST/Udyam
    // { q: 'Kya GST invoice milti hai?', a: 'Haan, hum GSTIN 23DNCPG4775E14H registered hain. Har service pe GST invoice.' },
    { q: 'Kya proper bill/receipt milti hai?', a: 'Haan, har service ke baad proper bill/receipt milti hai.' },
  ];
}

// All 70 city×service combos for generateStaticParams
export const ALL_SERVICE_CITY_PARAMS = Object.keys(SEO_CITIES).flatMap((city) =>
  Object.keys(SEO_SERVICES).map((service) => ({ city, service }))
);
