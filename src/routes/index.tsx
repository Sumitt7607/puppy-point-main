import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  Heart,
  Shield,
  Stethoscope,
  Award,
  HandHeart,
  Truck,
  Star,
  ArrowUp,
  PawPrint,
  Sparkles,
  CheckCircle2,
  MapPin,
  Mail,
} from "lucide-react";
import heroPuppy from "@/assets/hero-puppy.jpg";
import logoImg from "@/assets/logo.png";
import aboutImg from "@/assets/about-collage.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import testimonial5 from "@/assets/testimonial-5.jpg";

import goldenRetrieverImg from "@/assets/golden-retriever.png";
import labradorImg from "@/assets/labrador.png";
import shihTzuImg from "@/assets/shih-tzu.png";
import pomeranianImg from "@/assets/pomeranian.png";
import germanShepherdImg from "@/assets/german-shepherd.png";

import beagleImg from "@/assets/beagle.png";
import siberianHuskyImg from "@/assets/siberian-husky.png";
import pugImg from "@/assets/pug.png";
import frenchBulldogImg from "@/assets/french-bulldog.jpg";
import malteseImg from "@/assets/maltese.jpg";

import dachshundImg from "@/assets/dachshund.png";
import cockerSpanielImg from "@/assets/cocker-spaniel.png";
import maltipooImg from "@/assets/maltipoo.jpg";
import tibetanMastiffImg from "@/assets/tibetan-mastiff.png";

import bichonFriseImg from "@/assets/bichon-frise.png";
import toyPoodleImg from "@/assets/toy-poodle.png";
import cavalierKingCharlesImg from "@/assets/cavalier-king-charles.png";
import rottweilerImg from "@/assets/rottweiler.png";
import blackGermanShepherdImg from "@/assets/black-german-shepherd.png";

export const Route = createFileRoute("/")({
  head: () => ({
    title: "Buy Puppies in Delhi NCR | Puppy Palace — 19+ Premium Breeds | Call +91 95555 44416",
    meta: [
      {
        name: "description",
        content:
          "🐾 Buy healthy, vaccinated & ethically raised puppies in Delhi NCR. 19+ premium breeds — Golden Retriever, Labrador, Pomeranian, Shih Tzu, Husky, German Shepherd & more. Home delivery in Delhi, Gurgaon, Noida, Faridabad & Ghaziabad. Call +91 95555 44416.",
      },
      {
        name: "keywords",
        content:
          "buy puppies Delhi NCR, puppies for sale Delhi, dog for sale Delhi, puppy shop near me Delhi, Golden Retriever puppy Delhi price, Labrador puppy Noida, Pomeranian puppy Gurgaon, Shih Tzu puppy Delhi, German Shepherd puppy Delhi NCR, Siberian Husky puppy Delhi, Beagle puppy Delhi, French Bulldog puppy Delhi, Rottweiler puppy Delhi, Pug puppy Delhi, Toy Poodle puppy Delhi, Maltese puppy Delhi, Cocker Spaniel puppy Delhi, Dachshund puppy Delhi, Tibetan Mastiff puppy Delhi, Cavalier King Charles puppy Delhi, puppy home delivery Delhi NCR, KCI registered puppies Delhi, certified puppy breeder Delhi, healthy vaccinated puppies Delhi, Puppy Palace Delhi, best puppy seller Delhi NCR, puppy delivery Gurgaon, puppy delivery Noida, puppy delivery Faridabad, puppy delivery Ghaziabad",
      },
      { property: "og:title", content: "Buy Puppies in Delhi NCR | Puppy Palace — 19+ Premium Breeds" },
      {
        property: "og:description",
        content:
          "Healthy, vaccinated, ethically raised puppies from trusted breeders across Delhi NCR. 19+ premium breeds. Home delivery available. Call +91 95555 44416.",
      },
      { property: "og:url", content: "https://thepuppypalace.store/" },
      { property: "og:image", content: "https://thepuppypalace.store/og-image.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://thepuppypalace.store/" },
    ],
  }),
  component: Index,
});

const PHONE = "+919555544416";
const PHONE_DISPLAY = "+91 95555 44416";
const WA = "https://wa.me/919555544416";

const breeds = [
  {
    name: "Golden Retriever",
    desc: "Affectionate, intelligent, and loyal — the perfect family companion.",
    img: goldenRetrieverImg,
    imgPosition: "object-top",
  },
  {
    name: "Labrador",
    desc: "Outgoing, playful, and gentle — excellent with children.",
    img: labradorImg,
    imgPosition: "object-top",
  },
  {
    name: "Shih Tzu",
    desc: "Charming, lively, and affectionate — perfect lap dog for apartments.",
    img: shihTzuImg,
    imgPosition: "object-top",
  },
  {
    name: "Pomeranian",
    desc: "Tiny, fluffy, and full of personality — a lively companion.",
    img: pomeranianImg,
    imgPosition: "object-center",
  },
  {
    name: "German Shepherd",
    desc: "Confident, courageous, and highly trainable loyal protectors.",
    img: germanShepherdImg,
    imgPosition: "object-center",
  },
  {
    name: "Beagle",
    desc: "Curious, friendly, and merry — a great active family pet.",
    img: beagleImg,
    imgPosition: "object-center",
  },
  {
    name: "Siberian Husky",
    desc: "Stunningly beautiful, social, and energetic adventure companion.",
    img: siberianHuskyImg,
    imgPosition: "object-center",
  },
  {
    name: "Pug",
    desc: "Charming, mischievous, and loving small companion.",
    img: pugImg,
    imgPosition: "object-center",
  },
  {
    name: "French Bulldog",
    desc: "Playful, adaptable, and low-maintenance — ideal for city living.",
    img: frenchBulldogImg,
    imgPosition: "object-center",
  },
  {
    name: "Maltese",
    desc: "Gentle, trusting, and devoted — a glamorous yet friendly companion.",
    img: malteseImg,
    imgPosition: "object-center",
  },
  {
    name: "Dachshund",
    desc: "Clever, curious, and spunky — a bold little dog with a big heart.",
    img: dachshundImg,
    imgPosition: "object-center",
  },
  {
    name: "Cocker Spaniel",
    desc: "Sweet, gentle, and eager to please — wonderful with families.",
    img: cockerSpanielImg,
    imgPosition: "object-center",
  },
  {
    name: "Maltipoo",
    desc: "Hypoallergenic, loving, and super intelligent — a joyful companion.",
    img: maltipooImg,
    imgPosition: "object-center",
  },
  {
    name: "Tibetan Mastiff",
    desc: "Majestic, loyal, and powerful — a noble guardian breed with a lion-like mane.",
    img: tibetanMastiffImg,
    imgPosition: "object-center",
  },
  {
    name: "Bichon Frisé",
    desc: "Cheerful, gentle, and hypoallergenic — a fluffy cloud of joy and affection.",
    img: bichonFriseImg,
    imgPosition: "object-top",
  },
  {
    name: "Toy Poodle",
    desc: "Brilliant, elegant, and hypoallergenic — one of the most intelligent breeds.",
    img: toyPoodleImg,
    imgPosition: "object-center",
  },
  {
    name: "Cavalier King Charles Spaniel",
    desc: "Gentle, graceful, and sweet-tempered — the ultimate companion lap dog.",
    img: cavalierKingCharlesImg,
    imgPosition: "object-center",
  },
  {
    name: "Rottweiler",
    desc: "Loyal, loving, and confident guardian — a devoted family protector.",
    img: rottweilerImg,
    imgPosition: "object-center",
  },
  {
    name: "Black German Shepherd",
    desc: "Strikingly beautiful, intelligent, and alert — a rare and loyal companion.",
    img: blackGermanShepherdImg,
    imgPosition: "object-center",
  },
];



const trustBadges = [
  { icon: Heart, label: "Healthy Puppies" },
  { icon: Shield, label: "Vaccinated" },
  { icon: Stethoscope, label: "Vet Checked" },
  { icon: Truck, label: "Delhi NCR Delivery" },
];

const whyUs = [
  { icon: Heart, title: "Healthy Puppies", desc: "Every puppy is raised in clean, loving environments with attentive care." },
  { icon: Shield, title: "Vaccinated & Dewormed", desc: "Up-to-date on vaccinations and deworming protocols before going home." },
  { icon: Stethoscope, title: "Vet Checked", desc: "Thorough health checks by certified veterinarians for total peace of mind." },
  { icon: Award, title: "Trusted Breeders", desc: "Partnered only with ethical, transparent breeders across India." },
  { icon: HandHeart, title: "Lifetime Guidance", desc: "Free expert support for your puppy's care, training, and well-being." },
  { icon: Truck, title: "Delhi NCR Delivery", desc: "Safe, fast, hand-delivered to your doorstep anywhere in Delhi NCR." },
];

const testimonials = [
  {
    name: "Rohit Sharma",
    city: "Delhi",
    puppy: "White Husky",
    text: "Got this gorgeous white Husky pup from Puppy Palace and it was love at first sight! Super healthy, full of energy, and the team made the whole process so smooth. Couldn't be happier!",
    rating: 5,
    img: testimonial1,
    imgPosition: "object-center",
  },
  {
    name: "Deepak Verma",
    city: "Dwarka, Delhi",
    puppy: "Rottweiler",
    text: "Brought home two Rottweiler pups from Puppy Palace and both are absolutely perfect. Well-vaccinated, strong, and so playful. The team's after-sale support has been exceptional.",
    rating: 5,
    img: testimonial2,
    imgPosition: "object-top",
  },
  {
    name: "Aryan & Simran",
    city: "Gurgaon",
    puppy: "Dachshund",
    text: "We found our dream Dachshund pup here! The entire process was transparent and hassle-free. The puppy came with all health records and the team guided us on every step of the journey.",
    rating: 5,
    img: testimonial3,
    imgPosition: "object-top",
  },
  {
    name: "Priya Kapoor",
    city: "Noida",
    puppy: "Cocker Spaniel",
    text: "My Cocker Spaniel is the most beautiful and loving pup! Puppy Palace team helped me choose the right breed for my lifestyle. Super responsive, caring, and truly passionate about dogs!",
    rating: 5,
    img: testimonial4,
    imgPosition: "object-top",
  },
  {
    name: "Suresh & Isha",
    city: "Delhi",
    puppy: "Labrador",
    text: "Got two Labrador puppies for our family and they've been an absolute blessing. Both arrived healthy, vaccinated, and full of life. Puppy Palace is genuinely the best in Delhi NCR!",
    rating: 5,
    img: testimonial5,
    imgPosition: "object-top",
  },
];

const tips = [
  { title: "Feeding Guide", desc: "Age-appropriate nutrition for a thriving puppy — meal frequency, portions, and premium foods.", emoji: "🍽️" },
  { title: "Vaccination Schedule", desc: "Complete timeline from 6 weeks to 16 weeks for full protection and lifelong immunity.", emoji: "💉" },
  { title: "Grooming Tips", desc: "Coat care, bathing, brushing and nail trimming routines tailored to each breed.", emoji: "✂️" },
  { title: "Training Basics", desc: "Positive-reinforcement methods for potty training, leash walking and gentle obedience.", emoji: "🎓" },
];

/* ---- FAQ data ---- */
const faqs = [
  {
    q: "Which puppy breeds are available in Delhi NCR?",
    a: "We have 19+ premium breeds including Golden Retriever, Labrador, Shih Tzu, Pomeranian, German Shepherd, Siberian Husky, Beagle, Pug, French Bulldog, Maltese, Dachshund, Cocker Spaniel, Rottweiler, Toy Poodle, Bichon Frisé, Maltipoo, Tibetan Mastiff, Cavalier King Charles Spaniel, and Black German Shepherd — all available for home delivery across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.",
  },
  {
    q: "Are the puppies vaccinated and health certified?",
    a: "Yes, every puppy from Puppy Palace is fully vaccinated as per their age schedule, dewormed, and vet-checked by certified veterinarians before being handed over. You receive a complete vaccination booklet and health certificate with your puppy.",
  },
  {
    q: "Do you deliver puppies at home in Delhi NCR?",
    a: "Absolutely! We offer safe, hand-delivered home delivery across the entire Delhi NCR region — Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad. Our team ensures the puppy is comfortable and stress-free throughout the journey.",
  },
  {
    q: "What is the price of puppies in Delhi NCR?",
    a: "Puppy prices vary by breed, bloodline, and availability. We offer competitive, transparent pricing with no hidden charges. WhatsApp or call us at +91 95555 44416 for the latest pricing on any specific breed.",
  },
  {
    q: "Do you provide after-adoption support?",
    a: "Yes! We provide lifetime free expert support for your puppy's diet, grooming, training, and healthcare. Our team is available on WhatsApp 7 days a week to answer all your puppy-parenting queries.",
  },
  {
    q: "Are your breeders KCI registered or certified?",
    a: "We partner exclusively with ethical, transparent, and certified breeders across India. Many of our breeds come from KCI-registered lineages. We are fully committed to ethical breeding — no puppy mills, no compromises on health or welfare.",
  },
  {
    q: "How do I enquire about a specific breed?",
    a: "Simply WhatsApp us at +91 95555 44416 or call us directly. You can also fill out the enquiry form on this page and we'll respond within minutes. Mention your preferred breed and we'll guide you through availability and pricing instantly.",
  },
  {
    q: "What areas in Delhi NCR do you serve?",
    a: "We serve all areas across Delhi NCR including South Delhi, North Delhi, East Delhi, West Delhi, Gurgaon (Gurugram), Noida, Greater Noida, Ghaziabad, Faridabad, and surrounding areas.",
  },
];

/* ---- JsonLdSchemas Component ---- */
function JsonLdSchemas() {
  const petStoreSchema = {
    "@context": "https://schema.org",
    "@type": ["PetStore", "LocalBusiness"],
    name: "Puppy Palace",
    alternateName: "Puppy Palace Delhi NCR",
    url: "https://thepuppypalace.store",
    logo: {
      "@type": "ImageObject",
      url: "https://thepuppypalace.store/og-image.jpg",
      width: 1200,
      height: 630,
    },
    image: "https://thepuppypalace.store/og-image.jpg",
    description:
      "Premium puppy boutique in Delhi NCR offering 19+ breeds of healthy, vaccinated, ethically raised puppies. Home delivery across Delhi, Gurgaon, Noida, Faridabad and Ghaziabad.",
    telephone: "+91-95555-44416",
    email: "contact@thepuppypoint.co.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sector 12",
      addressLocality: "Dwarka",
      addressRegion: "Delhi",
      postalCode: "110075",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.6139,
      longitude: 77.2090,
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Gurgaon" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Faridabad" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "City", name: "Greater Noida" },
    ],
    openingHours: "Mo-Su 09:00-21:00",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
    sameAs: [
      "https://wa.me/919555544416",
      "https://thepuppypalace.store/",
    ],
    priceRange: "₹₹-₹₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "2000",
      bestRating: "5",
      worstRating: "1",
    },
    hasMap: "https://maps.google.com/?q=Dwarka+Sector+12+Delhi",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Puppy Palace",
    alternateName: "Puppy Palace Delhi NCR",
    url: "https://thepuppypalace.store",
    logo: "https://thepuppypalace.store/og-image.jpg",
    description: "Premium puppy boutique in Delhi NCR. 19+ ethically raised, vaccinated breeds with home delivery.",
    telephone: "+91-95555-44416",
    email: "contact@thepuppypoint.co.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: "Delhi NCR",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-95555-44416",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-95555-44416",
        contactType: "sales",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
    sameAs: [
      "https://wa.me/919555544416",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Puppy Palace",
    alternateName: "Puppy Palace Delhi NCR — Premium Puppies for Sale",
    url: "https://thepuppypalace.store",
    description: "Buy healthy, vaccinated puppies in Delhi NCR. 19+ premium breeds with home delivery.",
    inLanguage: "en-IN",
    publisher: {
      "@type": "Organization",
      name: "Puppy Palace",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://thepuppypalace.store/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thepuppypalace.store/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Puppies for Sale Delhi NCR",
        item: "https://thepuppypalace.store/#breeds",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Contact Us",
        item: "https://thepuppypalace.store/#contact",
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Premium Puppy Breeds Available in Delhi NCR",
    description: "19+ premium puppy breeds for sale in Delhi NCR with home delivery.",
    numberOfItems: breeds.length,
    itemListElement: breeds.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${b.name} Puppy for Sale in Delhi NCR`,
      description: b.desc,
      url: "https://thepuppypalace.store/#breeds",
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(petStoreSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

/* ---- FAQ Section ---- */
function FaqItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:border-[#4789b2]/40"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-800 transition hover:bg-slate-50"
      >
        <span className="text-sm md:text-base leading-snug">{item.q}</span>
        <span
          className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#4789b2] text-white shadow-sm transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
          aria-hidden
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
        >
          {item.a}
        </motion.div>
      )}
    </motion.div>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative py-20 bg-slate-50">
      <SectionHeader
        eyebrow="Frequently Asked Questions"
        title={<>Everything You Need to Know About <span className="text-[#4789b2]">Buying a Puppy</span></>}
        sub="Common questions from puppy buyers across Delhi, Gurgaon, Noida and the NCR region."
      />
      <div className="mx-auto mt-12 max-w-4xl space-y-3 px-4">
        {faqs.map((item, i) => (
          <FaqItem key={i} item={item} index={i} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mt-12 max-w-2xl px-4 text-center"
      >
        <p className="text-slate-600 text-sm mb-4">Still have questions? We're here 7 days a week.</p>
        <a
          href={WA}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#20ba59] hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" />
          Ask on WhatsApp
        </a>
      </motion.div>
    </section>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-800">
      <JsonLdSchemas />
      <TopHeader />
      <Nav />
      <Hero />
      <Breeds />
      <WhyUs />
      <About />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <Contact />
      <Footer />
      <FloatingActions />
      <BackToTop />
    </div>
  );
}

/* ---------------- Top Header Bar (The Barking Babies Style) ---------------- */

function TopHeader() {
  return (
    <div className="bg-[#4789b2] text-white py-2 px-4 text-xs font-semibold">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <PawPrint className="h-3.5 w-3.5 text-[#ffc107]" />
          <span>TRUSTED BY OVER 15,000+ FAMILIES IN DELHI NCR • CALL: <a href={`tel:${PHONE}`} className="underline text-[#ffc107] font-bold">{PHONE_DISPLAY}</a></span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs">
          <span className="text-white/90">Delhi • Gurgaon • Noida • Faridabad • Ghaziabad</span>
          <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-[#ffc107] hover:underline font-bold">
            <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Support
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const close = () => setMenuOpen(false);

  return (
    <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-slate-100 ${scrolled ? "shadow-md py-2.5" : "py-3.5"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <a href="#top" onClick={close} className="flex items-center gap-2.5 group">
            <img src={logoImg} alt="Puppy Palace logo" className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover shadow-sm ring-2 ring-[#4789b2]/30 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                Puppy <span className="text-[#4789b2]">Palace</span>
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500 mt-0.5">Pet Shop Delhi NCR</span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
            <a href="#top" className="hover:text-[#4789b2] transition-colors">Home</a>
            <a href="#breeds" className="hover:text-[#4789b2] transition-colors">Puppies</a>
            <a href="#why" className="hover:text-[#4789b2] transition-colors">Why Us</a>
            <a href="#about" className="hover:text-[#4789b2] transition-colors">About Us</a>
            <a href="#testimonials" className="hover:text-[#4789b2] transition-colors">Happy Families</a>
            <a href="#faq" className="hover:text-[#4789b2] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#4789b2] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#4789b2] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#376f92] hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#20ba59]"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 md:hidden"
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-2xl bg-white border border-slate-200 p-5 shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-3.5 text-base font-semibold">
              <a href="#top" onClick={close} className="hover:text-[#4789b2]">Home</a>
              <a href="#breeds" onClick={close} className="hover:text-[#4789b2]">Puppies for Sale</a>
              <a href="#why" onClick={close} className="hover:text-[#4789b2]">Why Us</a>
              <a href="#about" onClick={close} className="hover:text-[#4789b2]">About Us</a>
              <a href="#testimonials" onClick={close} className="hover:text-[#4789b2]">Happy Families</a>
              <a href="#faq" onClick={close} className="hover:text-[#4789b2]">FAQ</a>
              <a href="#contact" onClick={close} className="hover:text-[#4789b2]">Contact</a>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4789b2] px-5 py-3 text-sm font-bold text-white shadow-sm"
                >
                  <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-sm"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Chat
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}

/* ---------------- Hero (Referencing thebarkingbabies.com & User Image) ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-barking-hero pt-8 pb-16 md:pt-14 md:pb-20 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="badge-bb-blue inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold shadow-sm mb-4"
            >
              <PawPrint className="h-3.5 w-3.5 text-[#4789b2]" />
              BEST PUPPY PET SHOP IN DELHI NCR
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              Best Puppy Pet Shop in <span className="text-[#4789b2]">Delhi NCR</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Looking for a trusted puppy pet shop in Delhi? Puppy Palace offers healthy puppies for sale in Delhi NCR, including popular breeds like Golden Retriever, Pug, Shih Tzu, French Bulldog, Beagle, Labrador, and more. 100% vaccinated, vet-checked with home delivery.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-3 sm:gap-3.5"
            >
              <a
                href="#breeds"
                className="inline-flex items-center gap-2 rounded-full bg-[#4789b2] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#376f92] hover:scale-105"
              >
                <PawPrint className="h-4 w-4 text-[#ffc107]" />
                All Puppies for Sale
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#20ba59] hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#ffc107] px-6 py-3.5 text-sm font-bold text-slate-900 shadow-md transition-all hover:bg-[#ffd54f] hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </motion.div>

            {/* Trust Factor Pills Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl bg-white border border-slate-200/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                  <Icon className="h-4 w-4 flex-shrink-0 text-[#4789b2]" />
                  <span className="truncate">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Polaroid Collage (Matching user reference image!) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-sky-100/60 via-amber-50/50 to-emerald-200/80 p-6 sm:p-8 min-h-[460px] sm:min-h-[520px] flex items-center justify-center border border-emerald-100 shadow-xl"
            >
              {/* Natural Meadow Grass & Sunlight Ambient Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.7),transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-emerald-600/25 via-emerald-500/10 to-transparent pointer-events-none" />

              {/* Polaroid Photo 1: Top Left - Sister & brother with fluffy Shih Tzu pup (Tilted -6deg) */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: -6 }}
                whileHover={{ rotate: -2, scale: 1.05, zIndex: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-4 left-3 sm:left-6 w-44 sm:w-56 polaroid-card cursor-pointer z-10"
              >
                <div className="relative h-32 sm:h-40 overflow-hidden rounded-sm bg-slate-100">
                  <img
                    src={testimonial4}
                    alt="Happy family with Shih Tzu puppy in Delhi NCR"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute top-1.5 right-1.5 badge-bb-gold rounded-full px-2 py-0.5 text-[9px] font-bold shadow-sm">
                    🐾 Shih Tzu
                  </div>
                </div>
                <div className="mt-2 text-center text-[11px] font-bold text-slate-700 tracking-tight">
                  Happy Kids with Puppy ❤️
                </div>
              </motion.div>

              {/* Polaroid Photo 2: Top Right - Youth group with cute puppy (Tilted +4deg) */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                whileHover={{ rotate: 1, scale: 1.05, zIndex: 30 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="absolute top-6 right-3 sm:right-6 w-48 sm:w-60 polaroid-card cursor-pointer z-10"
              >
                <div className="relative h-36 sm:h-44 overflow-hidden rounded-sm bg-slate-100">
                  <img
                    src={testimonial1}
                    alt="Happy young pet parents with white puppy in Gurgaon"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute top-1.5 right-1.5 badge-bb-blue rounded-full px-2 py-0.5 text-[9px] font-bold shadow-sm bg-white/90">
                    ✨ Delhi NCR
                  </div>
                </div>
                <div className="mt-2 text-center text-[11px] font-bold text-slate-700 tracking-tight">
                  Loving Family in Delhi 🏡
                </div>
              </motion.div>

              {/* Polaroid Photo 3: Bottom Center - Pet parent with two puppies (Tilted -2deg) */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                whileHover={{ rotate: 0, scale: 1.06, zIndex: 30 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-5 left-1/2 -translate-x-1/2 w-52 sm:w-64 polaroid-card cursor-pointer z-20"
              >
                <div className="relative h-36 sm:h-48 overflow-hidden rounded-sm bg-slate-100">
                  <img
                    src={testimonial5}
                    alt="Pet parent holding healthy puppies"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute top-1.5 left-1.5 bg-[#4789b2] text-white rounded-full px-2 py-0.5 text-[9px] font-bold shadow-sm">
                    🏆 Verified Home
                  </div>
                </div>
                <div className="mt-2 text-center text-[11px] font-bold text-slate-700 tracking-tight">
                  Two Adorable Pups Delivered 🐾
                </div>
              </motion.div>

              {/* Floating verified 4.9 rating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 left-1/2 -translate-x-1/2 z-30 rounded-full bg-white/95 backdrop-blur-md px-4 py-1.5 shadow-lg border border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-slate-800"
              >
                <Star className="h-4 w-4 fill-[#ffc107] text-[#ffc107]" />
                <span>4.9 / 5 Rating</span>
                <span className="text-slate-400">•</span>
                <span className="text-[#4789b2]">15,000+ Happy Homes</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- Breeds (The Barking Babies Featured Puppies Grid) ---------------- */

function Breeds() {
  return (
    <section id="breeds" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Puppies for Sale in Delhi NCR"
          title={<>Featured <span className="text-[#4789b2]">Puppies for Sale</span></>}
          sub="19+ premium breeds for sale in Delhi NCR — Golden Retriever, Shih Tzu, Labrador, Husky, French Bulldog, Beagle & more. Healthy, vaccinated & safe home delivery."
        />

        <div className="mx-auto mt-12 grid grid-cols-2 gap-3.5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {breeds.map((b, i) => (
            <FeaturedPuppyCard key={b.name} breed={b} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#4789b2] px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#376f92] hover:scale-105 transition"
          >
            <Phone className="h-4 w-4 text-[#ffc107]" />
            Looking for Another Breed? Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

/* Featured Puppy Box in The Barking Babies Layout */
function FeaturedPuppyCard({ breed, index }: { breed: (typeof breeds)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#4789b2]/50 flex flex-col"
    >
      {/* Image container */}
      <div className="relative h-40 sm:h-52 overflow-hidden bg-slate-100">
        <img
          src={breed.img}
          alt={`${breed.name} puppy available in Delhi NCR`}
          loading="lazy"
          width={600}
          height={600}
          className={`h-full w-full object-cover ${"imgPosition" in breed ? breed.imgPosition : "object-center"} transition-transform duration-500 group-hover:scale-110`}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = heroPuppy;
          }}
        />

        {/* The Barking Babies style "User Choice / Available" badge */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-md bg-[#4789b2] text-white px-2 py-0.5 text-[10px] font-bold shadow-sm">
          <Award className="h-3 w-3 text-[#ffc107]" />
          <span>Top Breed</span>
        </div>

        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-md bg-white/90 text-slate-800 px-2 py-0.5 text-[10px] font-bold shadow-sm backdrop-blur-sm">
          <CheckCircle2 className="h-3 w-3 text-[#25D366]" />
          <span>Available</span>
        </div>

        {/* Hover Quick Action Button */}
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
          <a
            href={`tel:${PHONE}`}
            className="w-full max-w-[150px] inline-flex items-center justify-center gap-2 rounded-lg bg-[#ffc107] text-slate-900 font-bold py-2.5 text-xs shadow-md hover:bg-[#ffd54f] transition"
          >
            <Phone className="h-3.5 w-3.5" />
            Call Now
          </a>
        </div>
      </div>

      {/* Info content */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#4789b2] transition-colors">
            {breed.name}
          </h3>
          <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed hidden xs:block">
            {breed.desc}
          </p>
        </div>

        <div className="mt-3.5 pt-3 border-t border-slate-100">
          <a
            href={`tel:${PHONE}`}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#4789b2] text-white text-xs sm:text-sm font-bold py-2.5 hover:bg-[#376f92] transition shadow-sm"
          >
            <Phone className="h-3.5 w-3.5 text-[#ffc107]" /> Call Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Why Us ---------------- */

function WhyUs() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Why Choose Us"
          title={<>Why Buy From <span className="text-[#4789b2]">Puppy Palace</span> Delhi NCR?</>}
          sub="Every puppy for sale in Delhi NCR is vet-checked, vaccinated & dewormed. KCI registered breeders. Safe home delivery across Delhi, Gurgaon & Noida."
        />

        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-slate-50 border border-slate-200/80 p-6 transition-all duration-300 hover:border-[#4789b2]/50 hover:shadow-lg hover:bg-white"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#4789b2] text-white shadow-sm transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6 text-[#ffc107]" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About Us ---------------- */

function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-xl border border-slate-200/80">
            <img
              src={aboutImg}
              alt="Puppy Palace — ethically raised puppies for sale in Delhi NCR, happy families with their new puppies"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute -bottom-4 right-4 rounded-xl bg-white border border-slate-200/80 px-4 py-3 shadow-xl flex items-center gap-2 text-sm font-bold text-slate-900">
            <CheckCircle2 className="h-5 w-5 text-[#25D366]" />
            <span>Ethical Breeders Only</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#4789b2]">About Us</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Welcome to <span className="text-[#4789b2]">Puppy Palace</span> Delhi NCR
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Puppy Palace is Delhi NCR's premier destination for families looking to adopt or buy healthy, playful puppies. We connect pet lovers with ethical, certified breeders who raise their litters with attentive care, nutrition, and early socialization.
          </p>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            With safe hand-delivery across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad, we ensure your new puppy arrives happy, vaccinated, and ready to become a treasured family member.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-sm">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#4789b2]">15,000+</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Happy Families</div>
            </div>
            <div className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-sm">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#4789b2]">19+</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Dog Breeds</div>
            </div>
            <div className="rounded-xl bg-white border border-slate-200/80 p-4 text-center shadow-sm">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#4789b2]">100%</div>
              <div className="text-xs font-semibold text-slate-500 mt-1">Health Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;
  const maxIndex = total - 1;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((v) => (v >= maxIndex ? 0 : v + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex]);

  const prev = () => setCurrent((v) => (v <= 0 ? maxIndex : v - 1));
  const next = () => setCurrent((v) => (v >= maxIndex ? 0 : v + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          eyebrow="Client Stories"
          title={<>Loved by Over <span className="text-[#4789b2]">15,000+ Pet Parents</span></>}
          sub="Real stories from real homes across Delhi, Gurgaon, Noida, and NCR."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col md:flex-row overflow-hidden rounded-3xl bg-slate-50 border border-slate-200/80 shadow-lg"
          >
            <div className="md:w-5/12 h-64 md:h-auto relative overflow-hidden bg-slate-200">
              <img
                src={t.img}
                alt={`${t.name} with puppy`}
                className="h-full w-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#4789b2] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                🐾 {t.puppy}
              </div>
            </div>
            <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-5 w-5 fill-[#ffc107] text-[#ffc107]" />
                ))}
              </div>
              <p className="text-slate-700 text-base italic leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="h-10 w-10 rounded-full bg-[#4789b2] text-white flex items-center justify-center font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">📍 {t.city}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="h-10 w-10 rounded-full bg-slate-100 hover:bg-[#4789b2] hover:text-white transition flex items-center justify-center text-slate-700 font-bold"
            >
              ‹
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 rounded-full transition-all ${idx === current ? "w-7 bg-[#4789b2]" : "w-2.5 bg-slate-300"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="h-10 w-10 rounded-full bg-slate-100 hover:bg-[#4789b2] hover:text-white transition flex items-center justify-center text-slate-700 font-bold"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- The Barking Babies Signature CTA Box ---------------- */

function CtaBanner() {
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-[#3f556d] p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Ready to Welcome Your New Puppy Home?
            </h2>
            <p className="mt-4 text-slate-200 text-base sm:text-lg leading-relaxed">
              We hand-deliver healthy, vaccinated, ethically raised puppies across Delhi, Gurgaon, Noida, Faridabad & Ghaziabad. Contact our experts today for available puppies and instant home delivery!
            </p>

            <div className="mt-6 text-xl sm:text-2xl font-bold text-white">
              Call us: <a href={`tel:${PHONE}`} className="text-[#ffc107] hover:underline">{PHONE_DISPLAY}</a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#20ba59] transition hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#ffc107] px-8 py-3.5 text-base font-bold text-slate-900 shadow-lg hover:bg-[#ffd54f] transition hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                Call +91 95555 44416
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact Form ---------------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#4789b2]">Contact Puppy Palace</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Get in Touch with Our <span className="text-[#4789b2]">Puppy Experts</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Looking to buy a puppy or dog for sale in Delhi NCR? Call or WhatsApp us for breed availability, price & same-day home delivery.
          </p>

          <div className="mt-8 space-y-3.5">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-between rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-sm transition hover:border-[#4789b2] hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4789b2] text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Phone</div>
                  <div className="font-display text-base sm:text-lg font-bold text-slate-900">{PHONE_DISPLAY}</div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#4789b2]">Tap to call →</span>
            </a>

            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between rounded-2xl bg-white border border-slate-200 p-4 sm:p-5 shadow-sm transition hover:border-[#25D366] hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp</div>
                  <div className="font-display text-base sm:text-lg font-bold text-slate-900">Instant Chat (24/7)</div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#25D366]">Open WhatsApp →</span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-white border border-slate-200 p-4 sm:p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <MapPin className="h-5 w-5 text-[#4789b2]" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</div>
                <div className="font-semibold text-slate-800 text-sm">Dwarka, Sector 12, Delhi NCR</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name    = (fd.get("name")    as string).trim();
            const phone   = (fd.get("phone")   as string).trim();
            const email   = (fd.get("email")   as string).trim();
            const breed   = (fd.get("breed")   as string).trim();
            const message = (fd.get("message") as string).trim();

            const lines = [
              `🐾 *New Puppy Enquiry - Puppy Palace*`,
              ``,
              `👤 *Name:* ${name}`,
              `📞 *Phone:* ${phone}`,
              email   ? `📧 *Email:* ${email}`            : null,
              breed   ? `🐶 *Preferred Breed:* ${breed}`  : null,
              message ? `💬 *Message:* ${message}`        : null,
              ``,
              `_Sent via thepuppypalace.store contact form_`,
            ]
              .filter((l) => l !== null)
              .join("\n");

            const waUrl = `https://wa.me/919555544416?text=${encodeURIComponent(lines)}`;
            setSent(true);
            setTimeout(() => {
              window.open(waUrl, "_blank", "noopener,noreferrer");
              setSent(false);
            }, 800);
          }}
          className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-lg space-y-4"
        >
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">Send an Enquiry</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Your Name" type="text" name="name" placeholder="Aarav Sharma" required />
            <Field label="Phone Number" type="tel" name="phone" placeholder="+91 ..." required />
          </div>
          <Field label="Email Address" type="email" name="email" placeholder="you@email.com" />
          <Field label="Preferred Breed" type="text" name="breed" placeholder="e.g. Golden Retriever, Shih Tzu" />
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Message
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us what kind of puppy you're looking for..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#4789b2] focus:bg-white"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#20ba59] hover:scale-[1.01]"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" /> Opening WhatsApp…
              </>
            ) : (
              <>
                <MessageCircle className="h-4 w-4" /> Send Enquiry via WhatsApp
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-[#4789b2] focus:bg-white"
      />
    </div>
  );
}

/* ---------------- Section Header ---------------- */

function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl px-4 text-center"
    >
      <span className="text-xs font-bold uppercase tracking-widest text-[#4789b2]">{eyebrow}</span>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{title}</h2>
      <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">{sub}</p>
    </motion.div>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logoImg} alt="Puppy Palace logo" className="h-10 w-10 rounded-full object-cover ring-2 ring-[#4789b2]" />
            <span className="font-display text-xl font-extrabold text-white">Puppy <span className="text-[#4789b2]">Palace</span></span>
          </div>
          <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">
            Delhi NCR's trusted puppy boutique. Healthy, vaccinated puppies with safe home delivery in Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-[#4789b2] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#376f92]">
              <Phone className="h-3.5 w-3.5" /> {PHONE_DISPLAY}
            </a>
            <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#20ba59]">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Us
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#top" className="hover:text-white transition">Home</a></li>
            <li><a href="#breeds" className="hover:text-white transition">Puppies for Sale</a></li>
            <li><a href="#why" className="hover:text-white transition">Why Choose Us</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Happy Clients</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-sm mb-4">Popular Breeds</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {["Golden Retriever", "Shih Tzu", "Labrador", "Siberian Husky", "Beagle", "Pug", "French Bulldog", "Cocker Spaniel"].map((b) => (
              <li key={b}><a href="#breeds" className="hover:text-white transition">{b} in Delhi</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Puppy Palace Delhi NCR. All rights reserved. Vaccinated puppies & safe doorstep delivery across Delhi NCR.
      </div>
    </footer>
  );
}

/* ---------------- Floating actions + back to top ---------------- */

function FloatingActions() {
  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <motion.a
        href={WA}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl sm:h-14 sm:w-14 hover:scale-110 transition"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <svg className="relative h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.826.736 5.484 2.027 7.796L0 32l8.425-2.01A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.766-1.847l-.486-.29-4.999 1.193 1.21-4.862-.315-.5A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.279-9.875c-.398-.2-2.355-1.162-2.72-1.295-.366-.133-.632-.2-.898.2-.266.399-1.031 1.295-1.264 1.561-.232.266-.465.3-.863.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.055-1.981-2.358-2.213-2.757-.232-.399-.025-.615.174-.814.179-.178.398-.465.598-.698.2-.232.266-.399.399-.665.132-.266.066-.499-.033-.698-.1-.2-.898-2.163-1.23-2.961-.324-.778-.653-.673-.898-.686l-.765-.013c-.266 0-.699.1-1.065.499-.366.399-1.397 1.365-1.397 3.328s1.43 3.86 1.629 4.126c.2.266 2.814 4.295 6.818 6.025.953.412 1.696.658 2.275.842.956.305 1.826.262 2.515.159.767-.115 2.355-.963 2.688-1.893.333-.93.333-1.727.232-1.893-.1-.166-.366-.266-.765-.465z"/>
        </svg>
      </motion.a>
      <motion.a
        href={`tel:${PHONE}`}
        aria-label="Call now"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffc107] text-slate-900 shadow-xl sm:h-14 sm:w-14 hover:scale-110 transition"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.a>
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 shadow-lg transition hover:scale-110 hover:bg-[#4789b2] hover:text-white cursor-pointer"
    >
      <ArrowUp className="h-5 w-5" />
    </motion.button>
  );
}


