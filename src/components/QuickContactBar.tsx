import { MapPin, Phone, Clock, Navigation, Calendar } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";

interface QuickContactBarProps {
  onOpenBooking: () => void;
}

export default function QuickContactBar({ onOpenBooking }: QuickContactBarProps) {
  return (
    <section className="bg-[#1C1917] text-[#FAF6F0] py-6 px-4 sm:px-6 shadow-xl border-y border-[#C5A059]/40 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Business Info Column */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Address */}
            <div className="flex items-start gap-3 bg-[#292524] p-3 rounded-lg border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
              <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold text-white">Loreat Beauty Parlour</p>
                <p className="text-[#E5D5C3] leading-relaxed mt-0.5">
                  Building No-191, Western Kutchery Rd, Opp. HIRA TIMES, Near HOPE HOSPITAL, Nandan Garden 2, Meerut 250001
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 bg-[#292524] p-3 rounded-lg border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
              <Phone className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold text-white">Direct Phone Contact</p>
                <a
                  href={BUSINESS_DETAILS.phoneTel}
                  className="text-[#C5A059] font-bold hover:underline block mt-0.5 text-sm"
                >
                  {BUSINESS_DETAILS.phoneDisplay}
                </a>
                <p className="text-[11px] text-stone-400">Click to call salon</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3 bg-[#292524] p-3 rounded-lg border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors">
              <Clock className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold text-white">Reported Daily Hours</p>
                <p className="text-[#E5D5C3] font-medium mt-0.5">
                  {BUSINESS_DETAILS.dailyHours}
                </p>
                <p className="text-[11px] text-stone-400">Walk-ins & appointments</p>
              </div>
            </div>

          </div>

          {/* Direct CTA Buttons Column */}
          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C5A059] hover:bg-[#B38E46] rounded-md transition-all shadow text-center"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>

            <a
              href={BUSINESS_DETAILS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] bg-[#292524] border border-[#C5A059]/40 hover:bg-[#383330] rounded-md transition-all text-center"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
              Get Directions
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#F4ECE1] hover:bg-white rounded-md transition-all shadow text-center font-bold"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
              Book Appointment
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
