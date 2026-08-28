import { WHY_CHOOSE_US } from "@/data/salonData";
import { Award, Sparkles, HeartHandshake, UserCheck, Layers, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-6 h-6 text-[#C5A059]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#C5A059]" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-[#C5A059]" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-[#C5A059]" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-[#E5D5C3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#F4ECE1] px-3 py-1 rounded-full border border-[#C5A059]/30">
            Why Loreat Beauty Parlour
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Dedicated to Your Elegance
          </h2>
          <p className="text-sm sm:text-base text-[#44403C]">
            Combining personalized beauty care, skilled grooming services, and a welcoming environment in the heart of Meerut.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#E5D5C3] shadow-xs hover:shadow-lg transition-all duration-300 space-y-3 group hover:border-[#C5A059]/60"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#C5A059]/30 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {getIcon(item.icon)}
                </div>
              </div>

              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917] group-hover:text-[#C5A059] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
