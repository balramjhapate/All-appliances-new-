import LeadForm from '@/components/LeadForm/LeadForm';
import WhatsAppIcon from '@/components/common/WhatsAppIcon';
import TrackableCallLink from '@/components/common/TrackableCallLink';
import TrackableWhatsAppLink from '@/components/common/TrackableWhatsAppLink';
import TrackableGroupJoinLink from '@/components/common/TrackableGroupJoinLink';

export const metadata = {
  title: 'Contact Us — HomeRepairPro | +91 88895 39174',
  description: 'Contact HomeRepairPro for appliance repair in Indore, Bhopal & 8 cities. Call +91 88895 39174 or WhatsApp for same day service.',
  alternates: { canonical: 'https://homerepairpro.in/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1B4FD8] py-8 sm:py-12 px-3 sm:px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-3">Contact Us</h1>
        <p className="text-white/80 text-sm sm:text-base">Same day response — Call, WhatsApp, ya form fill karo</p>
      </section>

      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 grid md:grid-cols-2 gap-5 sm:gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Direct Contact</h2>
            <div className="space-y-4">
              <TrackableCallLink
                sourceComponent="contact_call"
                className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-900 hover:shadow-sm transition-all"
              >
                <span className="text-3xl">📞</span>
                <div>
                  <p className="font-bold text-gray-900">Phone / Call</p>
                  <p className="text-[#F97316] font-semibold">+91 88895 39174</p>
                  <p className="text-gray-500 text-xs">Available 24×7</p>
                </div>
              </TrackableCallLink>
              <TrackableWhatsAppLink
                href="https://wa.me/918889539174"
                sourceComponent="contact_wa"
                className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#25D366] hover:shadow-sm transition-all"
              >
                <WhatsAppIcon className="w-8 h-8 text-[#25D366] flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900">WhatsApp</p>
                  <p className="text-[#25D366] font-semibold">+91 88895 39174</p>
                  <p className="text-gray-500 text-xs">Instant response</p>
                </div>
              </TrackableWhatsAppLink>
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <span className="text-3xl">📍</span>
                <div>
                  <p className="font-bold text-gray-900">Service Areas</p>
                  <p className="text-gray-500 text-sm">Indore • Bhopal • Ujjain • Mhow • Dewas • Sehore • Jabalpur • Jaipur • Pritampur • Mumbai</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <span className="text-3xl">🕐</span>
                <div>
                  <p className="font-bold text-gray-900">Working Hours</p>
                  <p className="text-gray-500 text-sm">Monday – Sunday: 24×7 Available</p>
                </div>
              </div>

              <TrackableGroupJoinLink className="flex items-center gap-4 p-4 bg-[#075E54] border border-[#075E54] rounded-xl hover:bg-[#064d45] transition-all group">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-white">Join WhatsApp Community Group</p>
                  <p className="text-green-300 text-xs">200+ Members · Discounts · Appliance Tips · Free</p>
                </div>
                <span className="flex-shrink-0 text-xs font-bold bg-[#25D366] text-white px-3 py-1.5 rounded-full group-hover:bg-green-400 transition-colors">
                  Join →
                </span>
              </TrackableGroupJoinLink>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Book Service</h2>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
