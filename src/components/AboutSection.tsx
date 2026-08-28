import { Sparkles, CheckCircle2, Heart, ShieldCheck, MapPin } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#FDFBF7] relative overflow-hidden border-b border-[#E5D5C3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Decorative Image Collage */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E5D5C3] bg-white">
                <img
                  src="https://images.pexels.com/photos/5659018/pexels-photo-5659018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Loreat Beauty Parlour Salon Experience Meerut"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
              </div>

              {/* Smaller Overlay Image */}
              <div className="absolute -bottom-6 -right-6 w-48 sm:w-56 h-36 sm:h-44 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="https://images.pexels.com/photos/14615061/pexels-photo-14615061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Hair Spa and Styling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gold Quote Badge */}
              <div className="absolute -top-6 -left-4 bg-[#1C1917] text-[#FAF6F0] p-4 rounded-xl shadow-lg border border-[#C5A059]/40 max-w-[220px]">
                <Sparkles className="w-5 h-5 text-[#C5A059] mb-1" />
                <p className="font-serif-luxury text-sm font-semibold italic text-[#E5D5C3]">
                  &ldquo;Personalized service focused on your confidence and beauty.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4ECE1] text-[#C5A059] text-xs font-semibold uppercase tracking-wider">
              <span>About Loreat Beauty Parlour</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-tight">
              A Place to Feel Beautiful
            </h2>

            <p className="text-base sm:text-lg text-[#44403C] leading-relaxed">
              Loreat Beauty Parlour is a beauty and grooming destination in Meerut offering a range of professional beauty, hair, skincare and makeup services. From everyday grooming and hair care to bridal and special-occasion makeup, the focus is on personalized service and helping every client feel confident and beautiful.
            </p>

            <p className="text-sm text-[#44403C] leading-relaxed">
              Conveniently situated on Western Kutchery Road in Meerut (opposite HIRA TIMES and near HOPE HOSPITAL), the salon provides a broad selection of hair styling, soothing facials, nail care, and occasion makeover services in a comfortable, hygienic environment.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E5D5C3]/60 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-[#1C1917] block">Personalized Attention</span>
                  <span className="text-[#44403C]">Customized for individual skin & hair requirements.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E5D5C3]/60 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-[#1C1917] block">Bridal & Occasion Care</span>
                  <span className="text-[#44403C]">Complete wedding day draping, makeup, & styling.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E5D5C3]/60 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-[#1C1917] block">Comprehensive Treatments</span>
                  <span className="text-[#44403C]">Facials, hair spa, manicure, pedicure & polish.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E5D5C3]/60 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-semibold text-[#1C1917] block">Prime Meerut Location</span>
                  <span className="text-[#44403C]">Near Hope Hospital on Western Kutchery Rd.</span>
                </div>
              </div>
            </div>

            {/* Address callout */}
            <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#C5A059]/40 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
              <p className="text-xs text-[#1C1917] font-medium">
                <span className="font-bold block">Current Verified Location:</span>
                {BUSINESS_DETAILS.address}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
