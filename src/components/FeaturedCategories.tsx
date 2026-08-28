import { FEATURED_CATEGORIES } from "@/data/salonData";
import { Sparkles, Scissors, Heart, ArrowRight } from "lucide-react";

interface FeaturedCategoriesProps {
  onSelectCategory: (catId: string) => void;
}

export default function FeaturedCategories({ onSelectCategory }: FeaturedCategoriesProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
      case "Scissors":
        return <Scissors className="w-5 h-5 text-[#C5A059]" />;
      case "Heart":
        return <Heart className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section className="py-16 bg-[#FAF6F0] border-b border-[#E5D5C3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#F4ECE1] px-3 py-1 rounded-full border border-[#C5A059]/30">
            Specialized Beauty Care
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Featured Service Categories
          </h2>
          <p className="text-sm sm:text-base text-[#44403C]">
            Explore our main offerings tailored to bring out your elegance and personal radiance.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl overflow-hidden border border-[#E5D5C3] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Pill Overlay */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A059]/30 flex items-center gap-1.5 shadow-sm">
                    {getIcon(cat.iconName)}
                    <span className="text-[11px] font-bold text-[#1C1917] tracking-wider uppercase">
                      {cat.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917] group-hover:text-[#C5A059] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => {
                    onSelectCategory(cat.id);
                    const elem = document.getElementById("services");
                    if (elem) elem.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#FAF6F0] hover:bg-[#C5A059] hover:text-white rounded-md border border-[#C5A059]/40 transition-colors flex items-center justify-center gap-2 group-hover:border-[#C5A059]"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
