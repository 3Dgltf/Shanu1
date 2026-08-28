import { BUSINESS_DETAILS } from "@/data/salonData";

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": BUSINESS_DETAILS.name,
    "description": "Professional beauty parlour in Meerut offering hair services, skincare facials, makeup, draping, and bridal transformations.",
    "telephone": BUSINESS_DETAILS.phoneRaw,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Building No-191, Western Kutchery Rd, Opp. HIRA TIMES, Near HOPE HOSPITAL, Nandan Garden 2",
      "addressLocality": "Meerut",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "250001",
      "addressCountry": "IN"
    },
    "hasMap": BUSINESS_DETAILS.googleMapsUrl,
    "sameAs": [
      BUSINESS_DETAILS.facebookUrl,
      BUSINESS_DETAILS.googleMapsUrl
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "₹₹",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
