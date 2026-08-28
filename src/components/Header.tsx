import { useState, useEffect } from "react";
import { Phone, MapPin, Calendar, Menu, X, Clock, Sparkles, ClipboardList } from "lucide-react";
import { BUSINESS_DETAILS } from "@/data/salonData";

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenStaffView: () => void;
}

export default function Header({ onOpenBooking, onOpenStaffView }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Bridal", href: "#bridal" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#1C1917] text-[#FAF6F0] text-xs py-2 px-4 border-b border-[#C5A059]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-[#E5D5C3]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">Western Kutchery Rd, Opp. HIRA TIMES,</span> Meerut
            </span>
            <span className="hidden md:inline text-[#C5A059]">|</span>
            <span className="flex items-center gap-1.5 text-[#E5D5C3]">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              Daily Hours: {BUSINESS_DETAILS.dailyHours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="flex items-center gap-1.5 font-medium text-[#C5A059] hover:text-[#FAF6F0] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_DETAILS.phoneDisplay}</span>
            </a>
            <button
              onClick={onOpenStaffView}
              className="hidden lg:flex items-center gap-1 text-[11px] bg-[#C5A059]/20 hover:bg-[#C5A059]/30 text-[#E5D5C3] px-2 py-0.5 rounded transition-colors"
              title="View Salon Appointments List"
            >
              <ClipboardList className="w-3 h-3 text-[#C5A059]" />
              <span>Staff Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF6F0]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E5D5C3]"
            : "bg-[#FAF6F0] py-4 border-b border-[#E5D5C3]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C5A059] to-[#8C6B28] flex items-center justify-center text-white shadow-sm font-serif-luxury font-bold text-xl group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <span className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] block leading-none">
                Loreat
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-medium block mt-0.5">
                Beauty Parlour • Meerut
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#44403C] hover:text-[#C5A059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#FAF6F0] border border-[#C5A059] hover:bg-[#F4ECE1] rounded-md transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              Call Now
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#C5A059] to-[#9C7933] hover:from-[#B38E46] hover:to-[#866627] rounded-md transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS_DETAILS.phoneTel}
              className="p-2 text-[#C5A059] bg-[#FAF6F0] border border-[#C5A059]/40 rounded-md hover:bg-[#F4ECE1]"
              aria-label="Call Loreat Beauty Parlour"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#1C1917] hover:bg-[#FAF5EF] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A059]" /> : <Menu className="w-6 h-6 text-[#1C1917]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF6F0] border-t border-[#E5D5C3] px-4 pt-3 pb-6 shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-3 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif-luxury font-medium text-[#1C1917] hover:text-[#C5A059] py-1 border-b border-[#E5D5C3]/40"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={BUSINESS_DETAILS.phoneTel}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#1C1917] bg-[#FAF6F0] border border-[#C5A059] rounded-md text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                Call Now
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#C5A059] to-[#9C7933] rounded-md text-center"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Appt
              </button>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E5D5C3]/50 flex justify-between items-center text-xs text-[#44403C]">
              <span>📍 Meerut, Uttar Pradesh</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStaffView();
                }}
                className="text-[#C5A059] font-medium underline flex items-center gap-1"
              >
                <ClipboardList className="w-3.5 h-3.5" /> Staff View
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
