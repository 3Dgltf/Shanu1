import { useState } from "react";
import { ALL_SERVICES, ServiceItem, BUSINESS_DETAILS } from "@/data/salonData";
import { Search, Sparkles, Phone, Calendar, Check, Info } from "lucide-react";

interface ServicesSectionProps {
  onOpenBookingForService: (serviceName: string) => void;
  selectedCategoryFromParent?: string;
}

export default function ServicesSection({
  onOpenBookingForService,
  selectedCategoryFromParent = "all",
}: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>(selectedCategoryFromParent || "all");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { id: "all", name: "All Services" },
    { id: "bridal", name: "Makeup & Bridal" },
    { id: "hair", name: "Hair Services" },
    { id: "skin", name: "Skin & Facials" },
    { id: "beauty", name: "Beauty & Grooming" },
    { id: "grooming", name: "Beard & Grooming" },
  ];

  const filteredServices = ALL_SERVICES.filter((item) => {
    const matchesCategory = activeTab === "all" || item.category === activeTab;
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#FDFBF7] border-b border-[#E5D5C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] bg-[#F4ECE1] px-3 py-1 rounded-full border border-[#C5A059]/30">
            Professional Care
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917]">
            Our Beauty & Salon Services
          </h2>
          <p className="text-sm sm:text-base text-[#44403C]">
            Explore our comprehensive list of hair, skincare, facial, makeup and grooming treatments available at Loreat Beauty Parlour, Meerut.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 space-y-4">
          
          {/* Search Box */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#C5A059] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g., Facial, Hair Spa, Bridal, Polish)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5D5C3] rounded-full text-xs text-[#1C1917] placeholder:text-stone-400 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all border ${
                  activeTab === tab.id
                    ? "bg-[#1C1917] text-[#FAF6F0] border-[#1C1917] shadow-sm"
                    : "bg-white text-[#44403C] border-[#E5D5C3] hover:bg-[#FAF6F0] hover:border-[#C5A059]"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-5 border border-[#E5D5C3] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:border-[#C5A059]/60"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917] group-hover:text-[#C5A059] transition-colors">
                      {service.name}
                    </h3>
                    {service.popular && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#F4ECE1] text-[#C5A059] border border-[#C5A059]/30 shrink-0">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {service.description}
                  </p>
                  {service.name === "Lotus Skin Whitening" && (
                    <p className="text-[11px] text-stone-500 italic bg-[#FAF6F0] p-2 rounded border border-[#E5D5C3]/40">
                      Standard cosmetic cleanup formulation designed for gentle skin brightening and refreshment.
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5D5C3]/40 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-[#C5A059] font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Personalized Care
                  </span>
                  <button
                    onClick={() => onOpenBookingForService(service.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#C5A059] to-[#9C7933] hover:from-[#B38E46] rounded shadow-xs transition-all"
                  >
                    <Calendar className="w-3 h-3" />
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-[#E5D5C3] p-8 max-w-md mx-auto">
            <Info className="w-8 h-8 text-[#C5A059] mx-auto mb-2" />
            <p className="font-serif-luxury text-xl font-bold text-[#1C1917]">No matching services found</p>
            <p className="text-xs text-[#44403C] mt-1 mb-4">
              Try adjusting your search terms or browse all categories.
            </p>
            <button
              onClick={() => {
                setActiveTab("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 text-xs font-semibold uppercase text-white bg-[#C5A059] rounded"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Pricing Notice */}
        <div className="mt-12 bg-[#FAF6F0] border border-[#C5A059]/40 rounded-xl p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-luxury text-lg font-bold text-[#1C1917]">
              Need package pricing or customized options?
            </h4>
            <p className="text-xs text-[#44403C]">
              Service pricing varies based on length, requirements, and special occasions. Contact our salon team directly for current details.
            </p>
          </div>
          <a
            href={BUSINESS_DETAILS.phoneTel}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-white border border-[#C5A059] hover:bg-[#F4ECE1] rounded-md shadow-xs transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
            Call +91 93593 11298
          </a>
        </div>

      </div>
    </section>
  );
}
