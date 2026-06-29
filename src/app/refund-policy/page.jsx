export const metadata = {
  title: 'Refund & Cancellation Policy — HomeRepairPro',
  description: 'HomeRepairPro refund and cancellation policy — visit charges, warranty repairs, and cancellation terms.',
  alternates: { canonical: 'https://homerepairpro.in/refund-policy' },
};

export default function RefundPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-gray-900 mb-2">Refund & Cancellation Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

      <div className="space-y-8 text-gray-700 text-sm leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Visit / Inspection Charge</h2>
          <p>A non-refundable visit and diagnosis charge of <strong>₹99–₹350</strong> applies once a technician arrives at your location and performs a diagnosis, regardless of whether you proceed with the repair. This charge covers the technician's travel and time.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Repair Payments</h2>
          <p>Payment is collected after the repair is completed and you are satisfied. We do not take advance payment for standard repairs. The final amount will match the estimate given before work begins — no hidden charges.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Cancellation Before Technician Arrives</h2>
          <p>You may cancel your booking at any time before the technician departs for your location at no charge. Please call or WhatsApp us on <strong>+91 88895 39174</strong> to cancel.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Cancellation After Technician Arrives</h2>
          <p>If you cancel after the technician has arrived and performed a diagnosis, the visit charge of <strong>₹99</strong> is applicable and non-refundable.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. 30-Day Warranty Repairs</h2>
          <p>If the same fault recurs within 30 days of the original repair, we will fix it at no additional charge. This warranty applies to the specific fault that was repaired and does not cover new or unrelated faults, physical damage, or damage from power surges.</p>
          <p className="mt-2">To claim a warranty repair, contact us with your original booking reference or GST invoice number.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">6. Refunds for Paid Services</h2>
          <p>If you have paid and the repair did not resolve the stated issue, contact us within <strong>48 hours</strong>. We will either re-attempt the repair or, at our discretion, refund the labour charge. Spare parts purchased and installed are not refundable once fitted.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">7. How to Raise a Complaint or Refund Request</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>📞 Call: <strong>+91 88895 39174</strong> (8 AM – 8 PM, Mon–Sun)</li>
            <li>📧 Email: <strong>bhopalservice998@gmail.com</strong></li>
            <li>💬 WhatsApp: <a href="https://wa.me/918889539174" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">wa.me/918889539174</a></li>
          </ul>
          <p className="mt-2">We aim to resolve all complaints within <strong>48 hours</strong> of receiving them.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">8. GST Invoices</h2>
          <p>A GST invoice (GSTIN: 23DNCPG4775E14H) is issued for every completed repair. Please retain your invoice for warranty claims.</p>
        </section>

      </div>
    </div>
  );
}
