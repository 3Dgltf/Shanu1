import { Phone, Calendar, Navigation } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export default function StickyMobileBar({ onOpenBooking }: StickyMobileBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C1917]/95 backdrop-blur-md border-t border-[#C5A059]/40 p-2.5 px-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={BUSINESS_DETAILS.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-[#FAF6F0] text-[#1C1917] hover:bg-white active:scale-95 transition-all text-center border border-[#C5A059]"
        >
          <Phone className="w-4 h-4 text-[#C5A059]" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Call Now</span>
        </a>

        {/* Book Appointment */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#9C7933] text-white active:scale-95 transition-all text-center shadow-md font-bold"
        >
          <Calendar className="w-4 h-4 text-amber-100" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Book Appt</span>
        </button>

        {/* Directions */}
        <a
          href={BUSINESS_DETAILS.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-[#292524] text-[#E5D5C3] hover:text-white active:scale-95 transition-all text-center border border-[#C5A059]/30"
        >
          <Navigation className="w-4 h-4 text-[#C5A059]" />
          <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">Directions</span>
        </a>
      </div>
    </div>
  );
}
