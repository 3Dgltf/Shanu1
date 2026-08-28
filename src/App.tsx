import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickContactBar from "@/components/QuickContactBar";
import AboutSection from "@/components/AboutSection";
import FeaturedCategories from "@/components/FeaturedCategories";
import ServicesSection from "@/components/ServicesSection";
import BridalSection from "@/components/BridalSection";
import PricingNoteSection from "@/components/PricingNoteSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import AppointmentSection from "@/components/AppointmentSection";
import ContactAndLocation from "@/components/ContactAndLocation";
import StickyMobileBar from "@/components/StickyMobileBar";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import EnquiryModal from "@/components/EnquiryModal";
import StaffAppointmentsModal from "@/components/StaffAppointmentsModal";

export default function App() {
  const [prefilledService, setPrefilledService] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryServiceType, setEnquiryServiceType] = useState("bridal");

  const [staffModalOpen, setStaffModalOpen] = useState(false);

  const handleOpenBooking = () => {
    const elem = document.getElementById("appointment");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenBookingForService = (serviceName: string) => {
    setPrefilledService(serviceName);
    const elem = document.getElementById("appointment");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenEnquiryModal = (type: string) => {
    setEnquiryServiceType(type);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] selection:bg-[#C5A059] selection:text-white">
      <SchemaMarkup />

      {/* Navigation Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenStaffView={() => setStaffModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Quick Contact Bar Immediately Below Hero */}
        <QuickContactBar onOpenBooking={handleOpenBooking} />

        {/* About Loreat Beauty Parlour */}
        <AboutSection />

        {/* 4 Featured Categories */}
        <FeaturedCategories onSelectCategory={(catId) => setSelectedCategory(catId)} />

        {/* Full Services Section */}
        <ServicesSection
          onOpenBookingForService={handleOpenBookingForService}
          selectedCategoryFromParent={selectedCategory}
        />

        {/* Bridal Makeup Focus Section */}
        <BridalSection
          onOpenBookingForService={handleOpenBookingForService}
          onOpenEnquiryModal={handleOpenEnquiryModal}
        />

        {/* Package & Pricing Information Note */}
        <PricingNoteSection onOpenEnquiryModal={handleOpenEnquiryModal} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Reviews & Social Proof */}
        <ReviewsSection />

        {/* Interactive Beauty Gallery */}
        <GallerySection />

        {/* Database-backed Appointment Request Section */}
        <AppointmentSection prefilledService={prefilledService} />

        {/* Contact Details & Google Maps */}
        <ContactAndLocation onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenStaffView={() => setStaffModalOpen(true)}
      />

      {/* Sticky Bottom Bar for Mobile Devices */}
      <StickyMobileBar onOpenBooking={handleOpenBooking} />

      {/* Quick Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        serviceType={enquiryServiceType}
      />

      {/* Salon Staff Portal Drawer */}
      <StaffAppointmentsModal
        isOpen={staffModalOpen}
        onClose={() => setStaffModalOpen(false)}
      />
    </div>
  );
}
