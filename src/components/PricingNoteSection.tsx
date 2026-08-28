import { Sparkles, Phone, HelpCircle, MessageSquare } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";

interface PricingNoteSectionProps {
  onOpenEnquiryModal: (serviceType: string) => void;
}

export default function PricingNoteSection({ onOpenEnquiryModal }: PricingNoteSectionProps) {
  return (
    <section className="py-14 bg-[#FAF6F0] border-b border-[#E5D5C3]/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5D5C3] shadow-lg relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4ECE1] text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparent Package Information</span>
            </div>

            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1917]">
              Bridal & Makeup Packages
            </h3>

            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
              Pricing varies by service, occasion and requirements. Contact us for the latest package details and availability.
            </p>

            <div className="text-xs text-stone-500 bg-[#FAF6F0] p-3 rounded-lg border border-[#E5D5C3]/60 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <p>
                Because third-party directory figures may be outdated, we provide accurate, upfront package estimates directly when you call or enquire online.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenEnquiryModal("pricing")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#C5A059] to-[#9C7933] hover:from-[#B38E46] hover:to-[#866627] rounded-md shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Get Makeup Pricing
            </button>

            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#FAF6F0] border border-[#C5A059] hover:bg-[#F4ECE1] rounded-md transition-all text-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              Call {BUSINESS_DETAILS.phoneDisplay}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
