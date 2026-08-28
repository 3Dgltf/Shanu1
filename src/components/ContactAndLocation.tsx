import { MapPin, Phone, Clock, Navigation, Calendar, Building, Sparkles, ExternalLink } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";

interface ContactAndLocationProps {
  onOpenBooking: () => void;
}

export default function ContactAndLocation({ onOpenBooking }: ContactAndLocationProps) {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E5D5C3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#F4ECE1] px-3 py-1 rounded-full border border-[#C5A059]/30">
            Visit Us in Meerut
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Contact & Location
          </h2>
          <p className="text-sm sm:text-base text-[#44403C]">
            We are conveniently located on Western Kutchery Road, Meerut, right opposite Hira Times and near Hope Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5D5C3] shadow-lg flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div className="border-b border-[#E5D5C3] pb-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                  Verified Business Information
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1917] mt-1">
                  Loreat Beauty Parlour
                </h3>
                <p className="text-xs text-[#44403C]">Beauty Parlour & Salon in Meerut</p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAF6F0] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-[#1C1917] block">Salon Address</span>
                  <p className="text-[#44403C] leading-relaxed">
                    Building No-191, Western Kutchery Rd, Opp. HIRA TIMES, Near HOPE HOSPITAL, Nandan Garden 2, Meerut, Uttar Pradesh 250001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAF6F0] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-[#1C1917] block">Phone Contact</span>
                  <a
                    href={BUSINESS_DETAILS.phoneTel}
                    className="text-[#C5A059] font-bold text-sm hover:underline block"
                  >
                    {BUSINESS_DETAILS.phoneDisplay}
                  </a>
                  <p className="text-stone-400 text-[11px]">Click to make a call</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAF6F0] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-[#1C1917] block">Daily Business Hours</span>
                  <p className="text-[#44403C] font-semibold">{BUSINESS_DETAILS.dailyHours}</p>
                  <p className="text-stone-400 text-[11px]">Reported schedule</p>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-6 border-t border-[#E5D5C3] space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BUSINESS_DETAILS.phoneTel}
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#C5A059] hover:bg-[#B38E46] rounded-md transition-all text-center shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call Now
                </a>

                <a
                  href={BUSINESS_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#FAF6F0] border border-[#C5A059] hover:bg-[#F4ECE1] rounded-md transition-all text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                  Get Directions
                </a>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#292524] rounded-md transition-all text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                Book an Appointment
              </button>
            </div>

          </div>

          {/* Map Preview & Location Landmarks Card */}
          <div className="lg:col-span-7 bg-[#1C1917] rounded-2xl p-6 sm:p-8 text-[#FAF6F0] border border-[#C5A059]/40 shadow-lg flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#C5A059]/30 pb-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                    Interactive Directions
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1">
                    Google Maps Location
                  </h3>
                </div>
                <Navigation className="w-6 h-6 text-[#C5A059]" />
              </div>

              {/* Map Visual Preview Frame */}
              <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/40 bg-[#292524] h-64 sm:h-72 flex flex-col items-center justify-center text-center p-6 space-y-3 group">
                {/* Background decorative styling */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="w-14 h-14 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059] relative z-10 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>

                <div className="relative z-10 space-y-1 max-w-md">
                  <p className="font-serif-luxury text-xl font-bold text-white">
                    Loreat Beauty Parlour
                  </p>
                  <p className="text-xs text-[#E5D5C3]">
                    Building No-191, Western Kutchery Rd, Opp. HIRA TIMES, Near HOPE HOSPITAL, Nandan Garden 2, Meerut
                  </p>
                </div>

                <a
                  href={BUSINESS_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#C5A059] hover:bg-white rounded-md shadow-lg transition-all"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Landmark Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-300">
                <div className="p-3 rounded-lg bg-[#292524] border border-[#C5A059]/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Landmark: Opposite HIRA TIMES</span>
                </div>
                <div className="p-3 rounded-lg bg-[#292524] border border-[#C5A059]/20 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Nearby: HOPE HOSPITAL</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#C5A059]/30 flex items-center justify-between text-xs text-stone-400">
              <span>Postal Code: 250001</span>
              <span>Western Kutchery Rd, Meerut</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
