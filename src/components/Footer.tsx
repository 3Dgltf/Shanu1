import { MapPin, Phone, Clock, Navigation, Calendar, Sparkles, ExternalLink } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";

interface FooterProps {
  onOpenBooking: () => void;
  onOpenStaffView: () => void;
}

export default function Footer({ onOpenBooking, onOpenStaffView }: FooterProps) {
  return (
    <footer className="bg-[#1C1917] text-[#FAF6F0] border-t border-[#C5A059]/40 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C5A059]/20">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C5A059] to-[#8C6B28] flex items-center justify-center text-white font-serif-luxury font-bold text-xl">
                L
              </div>
              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-tight text-white block leading-none">
                  Loreat
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-medium block mt-0.5">
                  Beauty Parlour • Meerut
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Premier beauty and makeover destination in Meerut providing professional hair care, facial treatments, skin refinement, and customized bridal transformations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_DETAILS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#292524] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-colors"
                title="Official Loreat Beauty Parlour Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={BUSINESS_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#292524] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-colors"
                title="Loreat Beauty Parlour Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-[#E5D5C3] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a></li>
              <li><a href="#bridal" className="hover:text-[#C5A059] transition-colors">Bridal Studio</a></li>
              <li><a href="#gallery" className="hover:text-[#C5A059] transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-[#C5A059] transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Useful Actions Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-[#E5D5C3] uppercase tracking-wider">
              Salon Actions
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href={BUSINESS_DETAILS.phoneTel} className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#C5A059]" /> Call Salon Now
                </a>
              </li>
              <li>
                <a href={BUSINESS_DETAILS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                  <Navigation className="w-3 h-3 text-[#C5A059]" /> Google Directions
                </a>
              </li>
              <li>
                <button onClick={onOpenBooking} className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 text-left">
                  <Calendar className="w-3 h-3 text-[#C5A059]" /> Book Appointment
                </button>
              </li>
              <li>
                <button onClick={onOpenStaffView} className="text-stone-400 hover:text-[#C5A059] transition-colors flex items-center gap-1.5 text-left">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" /> Salon Staff Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Address & Hours Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-luxury text-base font-bold text-[#E5D5C3] uppercase tracking-wider">
              Verified Location
            </h4>
            <div className="text-xs text-stone-300 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Building No-191, Western Kutchery Rd, Opp. HIRA TIMES, Near HOPE HOSPITAL, Nandan Garden 2, Meerut, Uttar Pradesh 250001</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={BUSINESS_DETAILS.phoneTel} className="text-[#C5A059] font-bold hover:underline">
                  {BUSINESS_DETAILS.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Reported Daily Hours: {BUSINESS_DETAILS.dailyHours}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 Loreat Beauty Parlour. All rights reserved.</p>
          <p className="text-[11px] text-stone-500">
            Western Kutchery Rd, Opp. HIRA TIMES, Meerut, UP 250001
          </p>
        </div>

      </div>
    </footer>
  );
}
