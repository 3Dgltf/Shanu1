import { useState } from "react";
import { GALLERY_ITEMS } from "@/data/salonData";
import { Sparkles, X, ZoomIn, Info } from "lucide-react";

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filterTabs = [
    { id: "all", name: "All Looks" },
    { id: "bridal", name: "Bridal Makeup" },
    { id: "hair", name: "Hair Care & Styling" },
    { id: "skin", name: "Skincare & Facials" },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === "all" || item.category === activeFilter
  );

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E5D5C3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#F4ECE1] px-3 py-1 rounded-full border border-[#C5A059]/30">
            Visual Showcase
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Beauty & Transformation Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#44403C]">
            Explore inspirational bridal makeovers, hair styling, and skincare treatments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all border ${
                activeFilter === tab.id
                  ? "bg-[#C5A059] text-white border-[#C5A059] shadow-sm"
                  : "bg-white text-[#44403C] border-[#E5D5C3] hover:bg-[#FAF6F0]"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-xl overflow-hidden border border-[#E5D5C3] shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer relative"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Zoom Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                  <h3 className="font-serif-luxury text-base font-bold text-[#F4ECE1]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-stone-300 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-center text-stone-400 mt-8 flex items-center justify-center gap-1">
          <Info className="w-3.5 h-3.5 text-[#C5A059]" />
          Images represent beauty & makeover aesthetics. Direct photography rights reserved.
        </p>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-stone-800 text-white hover:bg-stone-700 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-[#1C1917] rounded-2xl overflow-hidden border border-[#C5A059]/40 shadow-2xl">
            <div className="relative max-h-[70vh] bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full max-h-[70vh] object-contain mx-auto"
              />
            </div>
            <div className="p-6 text-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-widest text-[#C5A059]">
                  {selectedImage.category} Showcase
                </span>
                <span className="text-xs text-stone-400">Loreat Beauty Parlour • Meerut</span>
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold text-[#FAF6F0]">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-stone-300">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
