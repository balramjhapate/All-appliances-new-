export const dynamic = 'force-static';

const CONTENT = `# HomeRepairPro

> HomeRepairPro is a doorstep home-appliance repair company serving Indore and
> Bhopal, Madhya Pradesh, India. Experienced technicians, 60-minute response,
> ₹350 starting price, 30-day repair warranty, GST & MSME registered,
> verified technicians. Phone: +91 8889539174.

## Services
- AC Repair & Service: /ac-repair
- Washing Machine Repair: /washing-machine-repair
- Refrigerator Repair: /refrigerator-repair
- Chimney Cleaning & Repair: /chimney-cleaning
- Geyser Repair: /geyser-repair
- Microwave Repair: /microwave-repair
- RO Water Purifier Repair: /ro-repair

## Cities served
- Indore: /indore
- Bhopal: /bhopal

## Key facts
- Starting price: ₹350 (visit + diagnosis)
- Response time: 60 minutes (same-day)
- Warranty: 30 days on repairs
- Brands: LG, Samsung, Whirlpool, IFB, Voltas, Daikin, Godrej, Bosch, Haier, and all major brands
- Contact: +91 8889539174 | bhopalservice998@gmail.com
- Booking: WhatsApp or call, 8 AM – 8 PM

## Popular pages
- AC Repair in Indore: /indore/ac-repair
- AC Repair in Bhopal: /bhopal/ac-repair
- Washing Machine Repair in Indore: /indore/washing-machine-repair
- Washing Machine Repair in Bhopal: /bhopal/washing-machine-repair
- Refrigerator Repair in Indore: /indore/refrigerator-repair
- Refrigerator Repair in Bhopal: /bhopal/refrigerator-repair
- Blog (repair guides): /blog
`;

export function GET() {
  return new Response(CONTENT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
