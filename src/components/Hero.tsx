import { Phone, Calendar, Navigation, Sparkles, Star, ShieldCheck, Heart } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative bg-[#FAF6F0] overflow-hidden pt-6 pb-12 lg:pt-12 lg:pb-20 border-b border-[#E5D5C3]/50">
      {/* Subtle Background Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F5EBE6] rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4ECE1] border border-[#C5A059]/40 text-[#1C1917] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Premier Beauty Parlour & Makeover Studio in Meerut</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.15]">
              Beauty That Brings Out <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C5A059] relative inline-block">
                Your Best.
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#C5A059]/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#44403C] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover professional beauty, hair, skincare and makeup services at Loreat Beauty Parlour, Meerut. Personalized care designed to help you look and feel radiant for every occasion.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#C5A059] to-[#9C7933] hover:from-[#B38E46] hover:to-[#866627] rounded-md shadow-lg hover:shadow-xl transition-all active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>

              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#1C1917] bg-white border border-[#C5A059] hover:bg-[#F4ECE1] rounded-md shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                Call Now
              </a>

              <a
                href={BUSINESS_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#44403C] hover:text-[#1C1917] hover:bg-[#F4ECE1]/60 rounded-md transition-all border border-[#E5D5C3]"
              >
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                Get Directions
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-6 border-t border-[#E5D5C3]/60 grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#C5A059]">
                  <Star className="w-4 h-4 fill-[#C5A059]" />
                  <span className="font-bold text-[#1C1917] text-base sm:text-lg">4.3★</span>
                </div>
                <p className="text-xs text-[#44403C]">Google Rated</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#C5A059]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-bold text-[#1C1917] text-base sm:text-lg">Hygiene</span>
                </div>
                <p className="text-xs text-[#44403C]">Sanitized Salon</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#C5A059]">
                  <Heart className="w-4 h-4" />
                  <span className="font-bold text-[#1C1917] text-base sm:text-lg">Bridal</span>
                </div>
                <p className="text-xs text-[#44403C]">Makeover Experts</p>
              </div>
            </div>

          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-[#C5A059]/30 transform rotate-2 pointer-events-none" />
              
              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white border border-[#E5D5C3]">
                <img
                  src="https://images.pexels.com/photos/17548721/pexels-photo-17548721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Loreat Beauty Parlour Bridal & Makeover Studio Meerut"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay for bottom text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Overlay Text Card */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-lg bg-black/40 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif-luxury text-lg font-semibold text-[#F4ECE1]">
                        Bridal & Occasion Makeover
                      </p>
                      <p className="text-xs text-stone-300">
                        Western Kutchery Rd, Meerut
                      </p>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-1 bg-[#C5A059] text-white rounded">
                      Book Today
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-xl shadow-xl border border-[#C5A059]/40 flex items-center gap-3 animate-pulse-glow">
                <div className="w-9 h-9 rounded-full bg-[#F4ECE1] flex items-center justify-center text-[#C5A059]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1917]">Personalized Care</p>
                  <p className="text-[11px] text-[#44403C]">Hair • Skin • Bridal</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
