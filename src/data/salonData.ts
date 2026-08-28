export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'skin' | 'beauty' | 'bridal' | 'grooming';
  description: string;
  badge?: string;
  popular?: boolean;
}

export interface CategoryInfo {
  id: 'hair' | 'skin' | 'beauty' | 'bridal' | 'grooming';
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  image: string;
}

export const BUSINESS_DETAILS = {
  name: "Loreat Beauty Parlour",
  tagline: "Your Beauty. Your Style. Your Moment.",
  subTagline: "Professional beauty, hair, skincare and makeup services designed to help you look and feel your best.",
  address: "Building No-191, Western Kutchery Rd, Opp. HIRA TIMES, Near HOPE HOSPITAL, Nandan Garden 2, Meerut, Uttar Pradesh 250001",
  shortAddress: "Building No-191, Western Kutchery Rd, Opp. HIRA TIMES, Meerut",
  city: "Meerut",
  state: "Uttar Pradesh",
  pincode: "250001",
  phoneDisplay: "+91 93593 11298",
  phoneRaw: "09359311298",
  phoneTel: "tel:+919359311298",
  googleMapsUrl: "https://maps.app.goo.gl/FAXsfce6LSKcr1VM",
  googleRating: "4.3",
  googleReviewCountText: "Rated around 4.3★ by hundreds of Google reviewers",
  dailyHours: "10:00 AM – 7:00 PM",
  facebookHandle: "loreatmeerut",
  facebookUrl: "https://www.facebook.com/loreatmeerut",
};

export const FEATURED_CATEGORIES: CategoryInfo[] = [
  {
    id: "bridal",
    title: "Bridal & Wedding",
    subtitle: "Occasion Transformation",
    iconName: "Sparkles",
    description: "Make your special day unforgettable with professional bridal and occasion makeup.",
    image: "https://images.pexels.com/photos/17548721/pexels-photo-17548721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    id: "hair",
    title: "Hair Care",
    subtitle: "Style & Rejuvenation",
    iconName: "Scissors",
    description: "From colour and spa treatments to smoothing and styling, give your hair the care it deserves.",
    image: "https://images.pexels.com/photos/14615061/pexels-photo-14615061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    id: "skin",
    title: "Skin & Facials",
    subtitle: "Radiant & Fresh Glow",
    iconName: "Sparkle",
    description: "Refresh and rejuvenate with professional facial, cleanup and skincare services.",
    image: "https://images.pexels.com/photos/5659018/pexels-photo-5659018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    id: "beauty",
    title: "Everyday Beauty",
    subtitle: "Pampering & Grooming",
    iconName: "Heart",
    description: "Manicure, pedicure, grooming and beauty treatments for your regular self-care routine.",
    image: "https://images.pexels.com/photos/3985312/pexels-photo-3985312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

export const ALL_SERVICES: ServiceItem[] = [
  // Hair
  { id: "h1", name: "Hair Wash", category: "hair", description: "Deep cleansing scalp and hair wash with premium conditioning.", popular: true },
  { id: "h2", name: "Hair Colour", category: "hair", description: "Global hair colouring, root touch-ups, and custom subtle highlights.", popular: true },
  { id: "h3", name: "Hair Spa", category: "hair", description: "Nourishing deep conditioning hair spa treatment for silky, revitalized locks.", popular: true },
  { id: "h4", name: "Hair Straightening", category: "hair", description: "Professional hair straightening for smooth, sleek, manageable hair." },
  { id: "h5", name: "Hair Smoothening", category: "hair", description: "Smoothing treatment to eliminate frizz and add natural shine." },
  { id: "h6", name: "Hair Extensions", category: "hair", description: "Seamless hair extension attachment and volume enhancement." },
  { id: "h7", name: "Hair Styling", category: "hair", description: "Blowouts, curls, waves, up-dos, and custom event styling." },
  { id: "h8", name: "Deep Conditioning", category: "hair", description: "Intense moisture repair treatment for dry or damaged hair strands." },
  { id: "h9", name: "Hair Care", category: "hair", description: "Custom hair maintenance treatments for health and gloss." },

  // Skin & Facials
  { id: "s1", name: "Facial Treatments", category: "skin", description: "Tailored luxury facials suited to your individual skin type.", popular: true },
  { id: "s2", name: "Instant Glow Facial", category: "skin", description: "Quick revitalizing facial designed for immediate luminosity before events.", popular: true },
  { id: "s3", name: "Ozone & Fresh Fruit Clean Up", category: "skin", description: "Purifying skin cleanup with fresh fruit extracts and ozone treatment." },
  { id: "s4", name: "Basic Clean Up", category: "skin", description: "Essential pore cleansing, exfoliation, and gentle hydration." },
  { id: "s5", name: "Anti-Tan Clean Up", category: "skin", description: "Specialized cleanup to soothe skin and reduce sun-tanning effect." },
  { id: "s6", name: "Lotus Skin Whitening", category: "skin", description: "Lotus-infused brightening cleanup treatment for an even skin tone." },
  { id: "s7", name: "Shahnaz Diamond Facial", category: "skin", description: "Luxury diamond facial formulation for firming and youthful radiant skin." },
  { id: "s8", name: "Skin Care", category: "skin", description: "Personalized skin health maintenance and pore refinement." },
  { id: "s9", name: "Bleach", category: "skin", description: "Gentle facial and neck bleaching for fine hair lightening." },

  // Beauty & Grooming
  { id: "b1", name: "Manicure", category: "beauty", description: "Nail shaping, cuticle care, hand massage, and polish.", popular: true },
  { id: "b2", name: "Pedicure", category: "beauty", description: "Relaxing foot soak, exfoliation, nail grooming, and moisture treatment.", popular: true },
  { id: "b3", name: "Nail Polish Change", category: "beauty", description: "Quick nail polish removal and fresh application of high-shine shades." },
  { id: "b4", name: "Back Polish", category: "beauty", description: "Deep cleansing exfoliation and polishing for a glowing back area." },
  { id: "b5", name: "Body & Back Wrap", category: "beauty", description: "Detoxifying and hydrating body wraps for smooth skin texture." },
  { id: "b6", name: "Massages", category: "beauty", description: "Relaxing head, shoulder, and back massages for stress relief." },

  // Makeup & Bridal
  { id: "m1", name: "Bridal Makeup", category: "bridal", description: "Complete bridal makeover customized for traditional or modern brides.", popular: true },
  { id: "m2", name: "Engagement Makeup", category: "bridal", description: "Sophisticated makeup look crafted for ring ceremony & engagement events.", popular: true },
  { id: "m3", name: "Party Makeup", category: "bridal", description: "Elegant makeup styling for wedding guests, sangeet, and reception parties.", popular: true },
  { id: "m4", name: "Makeup", category: "bridal", description: "Occasion makeup with high-grade cosmetics for long-lasting wear." },
  { id: "m5", name: "Hair Styling", category: "bridal", description: "Bridal buns, intricate braids, soft curls, and hair accessory placement." },
  { id: "m6", name: "Draping", category: "bridal", description: "Professional saree, lehenga, and dupatta draping for perfect drape & fit." },
  { id: "m7", name: "Extensions", category: "bridal", description: "Bridal hair extensions & eyelash volume for photo-ready perfection." },

  // Grooming (Secondary list)
  { id: "g1", name: "Beard Colouring", category: "grooming", description: "Natural grey coverage and color toning for beards." },
  { id: "g2", name: "Beard Styling", category: "grooming", description: "Sharp beard lining and custom beard shape design." },
  { id: "g3", name: "Beard Trimming", category: "grooming", description: "Precision beard trim and length maintenance." },
  { id: "g4", name: "Shave", category: "grooming", description: "Clean shave with soothing post-shave balm treatment." },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Indian Bridal Makeover",
    category: "bridal",
    image: "https://images.pexels.com/photos/17548721/pexels-photo-17548721.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Elegant bridal makeup with rich traditional hues & jewelry styling."
  },
  {
    id: 2,
    title: "Bridal Eye Makeup Detail",
    category: "bridal",
    image: "https://images.pexels.com/photos/2498430/pexels-photo-2498430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Intricate eye makeup precision crafted for special wedding occasions."
  },
  {
    id: 3,
    title: "Professional Hair Styling & Blowout",
    category: "hair",
    image: "https://images.pexels.com/photos/14615061/pexels-photo-14615061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Silky smooth finish with high-grade thermal blow-dry styling."
  },
  {
    id: 4,
    title: "Rejuvenating Facial Treatment",
    category: "skin",
    image: "https://images.pexels.com/photos/5659018/pexels-photo-5659018.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Soothing deep-cleansing facial and nourishment treatment."
  },
  {
    id: 5,
    title: "Traditional Bride Dupatta Draping",
    category: "bridal",
    image: "https://images.pexels.com/photos/28941551/pexels-photo-28941551.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Complete bridal draping and ornament placement."
  },
  {
    id: 6,
    title: "Relaxing Spa & Facial Care",
    category: "skin",
    image: "https://images.pexels.com/photos/3985312/pexels-photo-3985312.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Calming skin care session to revitalize natural glow."
  },
  {
    id: 7,
    title: "Royal Indian Attire & Makeup",
    category: "bridal",
    image: "https://images.pexels.com/photos/20695691/pexels-photo-20695691.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Timeless makeover look crafted for grand wedding receptions."
  },
  {
    id: 8,
    title: "Occasion Hair Styling",
    category: "hair",
    image: "https://images.pexels.com/photos/6435273/pexels-photo-6435273.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Specialized occasion hair setting and up-do styling."
  }
];

export const VERIFIED_REVIEWS = [
  {
    id: "r1",
    author: "Verified Client",
    date: "November 2025",
    rating: 5,
    excerpt: "Superb bridal makeup service! Navita mam did an amazing job with the makeup and hair styling. Everyone complimented the look. Highly recommended parlour in Meerut!",
    source: "Google Maps Review",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Professional Beauty Services",
    description: "Skilled beauticians dedicated to high standards of hygiene, precision, and personalized service.",
    icon: "Award"
  },
  {
    title: "Hair & Skincare Expertise",
    description: "Tailored treatments using gentle, quality products suited specifically to your skin and hair type.",
    icon: "Sparkles"
  },
  {
    title: "Bridal & Occasion Makeup",
    description: "Customized makeover packages for brides, engagement ceremonies, and wedding family functions.",
    icon: "HeartHandshake"
  },
  {
    title: "Personalized Beauty Care",
    description: "We listen to your preferences to craft styles and treatments that highlight your natural grace.",
    icon: "UserCheck"
  },
  {
    title: "Wide Range of Treatments",
    description: "From quick cleanups and threadings to comprehensive facial spas, hair smoothening, and draping.",
    icon: "Layers"
  },
  {
    title: "Convenient Meerut Location",
    description: "Located on Western Kutchery Rd, opposite HIRA TIMES & near HOPE HOSPITAL with easy accessibility.",
    icon: "MapPin"
  }
];

export const FAQS = [
  {
    question: "Where is Loreat Beauty Parlour located in Meerut?",
    answer: "Loreat Beauty Parlour is located at Building No-191, Western Kutchery Rd, Opp. HIRA TIMES, Near HOPE HOSPITAL, Nandan Garden 2, Meerut, Uttar Pradesh 250001."
  },
  {
    question: "What are the salon operating hours?",
    answer: "The reported business hours are 10:00 AM to 7:00 PM daily. We recommend calling +91 93593 11298 before visiting or booking an appointment."
  },
  {
    question: "How can I enquire about Bridal Makeup packages?",
    answer: "You can click on the 'Enquire About Bridal Makeup' or 'Book Appointment' button on our website, fill out your event details, or directly call us at +91 93593 11298 for custom bridal package details and date availability."
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer: "While walk-ins are welcome based on salon availability, advance booking is strongly recommended for bridal makeovers, hair spa, facials, and peak weekend timings."
  },
  {
    question: "What products are used for makeup and skincare?",
    answer: "Loreat Beauty Parlour uses high-quality beauty and cosmetic brands. External wedding service listings note brands like MAC and Kryolan among products used for bridal and occasion transformations."
  }
];
