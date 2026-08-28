import { VERIFIED_REVIEWS, BUSINESS_DETAILS } from "@/data/salonData";
import { Star, ExternalLink, Quote, ThumbsUp, ShieldCheck } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-[#FAF6F0] border-b border-[#E5D5C3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#F4ECE1] px-3 py-1 rounded-full border border-[#C5A059]/30">
            Client Appreciation
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Loved by Clients in Meerut
          </h2>
          <p className="text-sm sm:text-base text-[#44403C]">
            {BUSINESS_DETAILS.googleReviewCountText}
          </p>
        </div>

        {/* Rating Banner Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#E5D5C3] shadow-md mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C5A059] to-[#9C7933] text-white flex flex-col items-center justify-center font-bold shadow-md shrink-0">
              <span className="text-2xl leading-none">4.3</span>
              <div className="flex text-amber-200 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-current" />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
                  Google Business Profile
                </h3>
                <span className="text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Verified Listing
                </span>
              </div>
              <p className="text-xs text-[#44403C] mt-0.5">
                Building No-191, Western Kutchery Rd, Opp. HIRA TIMES, Meerut
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1C1917] hover:bg-[#292524] rounded-md transition-all shadow-sm shrink-0"
          >
            <span>Read Our Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
          </a>
        </div>

        {/* Verified Review Excerpt */}
        <div className="max-w-3xl mx-auto">
          {VERIFIED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/40 shadow-sm relative"
            >
              <Quote className="w-10 h-10 text-[#C5A059]/20 absolute top-4 right-4" />
              
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="font-serif-luxury text-lg sm:text-xl text-[#1C1917] italic leading-relaxed mb-4">
                &ldquo;{rev.excerpt}&rdquo;
              </p>

              <div className="flex items-center justify-between text-xs pt-3 border-t border-[#E5D5C3]/40">
                <span className="font-bold text-[#1C1917] flex items-center gap-1.5">
                  <ThumbsUp className="w-3.5 h-3.5 text-[#C5A059]" /> {rev.author}
                </span>
                <span className="text-stone-400">{rev.date} • {rev.source}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
