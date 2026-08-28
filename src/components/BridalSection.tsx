import { Sparkles, Calendar, CheckCircle2, Phone, HeartHandshake } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";

interface BridalSectionProps {
  onOpenBookingForService: (serviceName: string) => void;
  onOpenEnquiryModal: (serviceType: string) => void;
}

export default function BridalSection({
  onOpenBookingForService,
  onOpenEnquiryModal,
}: BridalSectionProps) {
  const bridalServicesList = [
    { title: "Bridal Makeup", desc: "Complete wedding day look customized to your skin undertone, attire & preferences." },
    { title: "Engagement Makeup", desc: "Radiant, glamorous makeup crafted specifically for ring ceremonies." },
    { title: "Party Makeup", desc: "Subtle to bold makeover looks for sangeet, reception, and family functions." },
    { title: "Hair Styling", desc: "Bridal buns, intricate braids, soft curls, and saree/lehenga hair setting." },
    { title: "Draping", desc: "Flawless saree, lehenga, and chunni draping for comfort & photos." },
    { title: "Nail Polish Change", desc: "Fresh high-shine bridal nail shade polish application." },
    { title: "Extensions", desc: "Hair extension volume and eyelash enhancement for photo-ready perfection." },
  ];

  return (
    <section id="bridal" className="py-16 sm:py-24 bg-[#1C1917] text-[#FAF6F0] relative overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C5A059]/5 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Features Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#E5D5C3] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Bridal & Special Occasion Studio</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Your Big Day Deserves <br />
              <span className="italic font-normal text-[#C5A059]">Your Best Look.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#E5D5C3] leading-relaxed">
              From bridal makeup and engagement looks to hair styling and draping, create a complete wedding-day look tailored to your style and occasion at Loreat Beauty Parlour, Meerut.
            </p>

            {/* Product Detail Note */}
            <div className="p-4 rounded-xl bg-[#292524] border border-[#C5A059]/30 text-xs text-stone-300 space-y-1">
              <span className="font-semibold text-[#C5A059] block flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#C5A059]" /> Product Details & Quality
              </span>
              <p className="leading-relaxed">
                External wedding-services listings mention cosmetic brands such as <strong className="text-white">MAC</strong> and <strong className="text-white">Kryolan</strong> among products used for bridal and occasion transformations.
              </p>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {bridalServicesList.map((item, idx) => (
                <div key={idx} className="bg-[#292524]/80 p-3.5 rounded-lg border border-[#C5A059]/20 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">{item.title}</span>
                    <span className="text-stone-400 text-[11px] leading-snug">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => onOpenEnquiryModal("bridal")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#C5A059] hover:bg-[#B38E46] rounded-md shadow-lg transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Enquire About Bridal Makeup
              </button>

              <button
                onClick={() => onOpenBookingForService("Bridal Makeup")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#292524] border border-[#C5A059]/50 hover:bg-[#383330] rounded-md transition-all"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                Book Bridal Date
              </button>

              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#E5D5C3] hover:text-white transition-all text-center"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" />
                Call Salon Directly
              </a>
            </div>

          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 group">
              <img
                src="https://images.pexels.com/photos/2498430/pexels-photo-2498430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Bridal Makeup Meerut Loreat Beauty Parlour"
                className="w-full h-[450px] sm:h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-black/60 backdrop-blur-md border border-[#C5A059]/40 space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A059]">
                  Bridal Transformation
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  Crafted for Your Special Moments
                </h3>
                <p className="text-xs text-stone-300">
                  Loreat Beauty Parlour • Western Kutchery Rd, Meerut
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
