// =============================================================
//  SITE CONFIG — edit the values in this file only.
//
//  👉 TWO THINGS TO REPLACE before going live:
//     1. whatsappNumber  — your real WhatsApp number (country code, no +)
//     2. url             — your real domain (used for SEO + sitemap)
//  (price/currency are also here — change or hide as you like)
// =============================================================

export const site = {
  name: "Digital Dream",
  productName: "Gift a Friend or Yourself a Digital Photo Album",
  shortName: "Digital Photo Album",
  description:
    "Gift a friend or yourself a digital photo album preloaded with your favourite photos and videos. The best gift for a friend, child, family, or birthday — order easily on WhatsApp.",

  whatsappNumber: "254707506362",
  url: "https://digitaldream.example.com",

  email: "digitalconsults31@gmail.com",

  showPrice: true,
  price: { amount: 4999, currency: "KES", display: "KES 4,999" },

  keywords: [
    "digital photo album",
    "gift for a friend",
    "best gift for a friend",
    "best gift for a child",
    "best gift for family",
    "best birthday gift",
    "digital photo frame gift",
    "personalised gift",
    "memory gift",
    "photo gift",
  ],
};

// Build a WhatsApp deep link with a pre-filled message.
export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultOrderMessage = `Hi! I'd like to order the ${site.productName}. Please help me choose between the Classic and Premium (scrolling text) versions and place my order.`;

export type Variant = {
  id: string;
  name: string;
  badge?: string;
  highlight?: boolean;
  price: { amount: number; currency: string; display: string };
  description: string;
  features: string[];
  media: { type: "video" | "image"; src: string };
};

export const variants: Variant[] = [
  {
    id: "classic",
    name: "Classic Album",
    price: { amount: 4999, currency: "KES", display: "KES 4,999" },
    description:
      "Our crystal acrylic frame that plays your favourite photos and videos in beautiful clarity.",
    features: [
      'Crystal acrylic 5" IPS screen',
      "Plays your photos and video clips",
      "Preloaded with your chosen memories",
      "Ready to gift — no setup needed",
    ],
    media: { type: "video", src: "/media/primary.mp4" },
  },
  {
    id: "premium",
    name: "Premium with Scrolling Text",
    badge: "Most loved",
    highlight: true,
    price: { amount: 7500, currency: "KES", display: "KES 7,500" },
    description:
      "Everything in the Classic, plus elegant scrolling text that adds names, dates and heartfelt messages over your memories.",
    features: [
      "Everything in the Classic album",
      "Personalised scrolling text captions",
      "Add names, dates and special messages",
      "An extra-special, premium gift",
    ],
    media: { type: "video", src: "/media/premium-graduation.mp4" },
  },
];

// ---------------- Showcase gallery (real photos & videos) ----------------
export const galleryMedia: {
  type: "video" | "image";
  src: string;
  label: string;
}[] = [
  { type: "video", src: "/media/premium-home.mp4", label: "Scrolling text — home setup" },
  { type: "video", src: "/media/premium-home-2.mp4", label: "Scrolling text in the living room" },
  { type: "video", src: "/media/premium-scrolling.mp4", label: "Close-up of the scrolling text" },
  { type: "image", src: "/media/additional-1.jpg", label: "The digital photo album" },
  { type: "image", src: "/media/additional-2.jpg", label: "Crystal acrylic display" },
  { type: "image", src: "/media/additional-3.jpg", label: "A thoughtful gift" },
  { type: "image", src: "/media/additional-4.jpg", label: "Your memories in crystal clarity" },
  { type: "image", src: "/media/classic-family.jpg", label: "Family setup — no scrolling text" },
  { type: "image", src: "/media/classic-setup.jpg", label: "Classic display — no scrolling text" },
];

// ---------------- SEO landing pages (gift occasions) ----------------
export type Occasion = {
  slug: string;
  keyword: string; // used as the H1
  metaTitle: string;
  metaDescription: string;
  cardText: string; // short blurb on the homepage card
  intro: string;
  bullets: string[];
  image: string; // hero image shown on the gift page
};

export const occasions: Occasion[] = [
  {
    slug: "best-gift-for-a-friend",
    image: "/media/additional-1.jpg",
    keyword: "The Best Gift for a Friend",
    metaTitle: "Best Gift for a Friend — A Digital Photo Album of Your Memories",
    metaDescription:
      "Looking for the best gift for a friend who has everything? Surprise them with a digital photo album preloaded with your favourite memories. Order on WhatsApp.",
    cardText: "For the friend who has everything — give them your shared memories.",
    intro:
      "Struggling to find the best gift for a friend who already has everything? A digital photo album turns the moments you've shared into a gift they'll keep forever — far more personal than another gadget or gift card.",
    bullets: [
      "Preloaded with your favourite photos and videos",
      "A heartfelt, personal gift that truly stands out",
      "Ready to unwrap and enjoy — no setup needed",
      "Perfect for birthdays, anniversaries, or 'just because'",
    ],
  },
  {
    slug: "best-gift-for-a-child",
    image: "/media/additional-2.jpg",
    keyword: "The Best Gift for a Child",
    metaTitle: "Best Gift for a Child — A Digital Photo Album They'll Love",
    metaDescription:
      "The best gift for a child or grandchild: a digital photo album full of family photos and videos. A safe, screen-lit keepsake of happy memories. Order on WhatsApp.",
    cardText: "Delight a child or grandchild with a screen full of happy memories.",
    intro:
      "Looking for the best gift for a child or grandchild? A digital photo album fills their room with cherished family moments — birthdays, holidays and everyday smiles — in a bright, easy-to-love display.",
    bullets: [
      "Loaded with family photos and fun video clips",
      "Simple and safe — nothing to download or sign into",
      "A keepsake that grows more precious every year",
      "Great for birthdays, christenings and graduations",
    ],
  },
  {
    slug: "best-gift-for-family",
    image: "/media/additional-3.jpg",
    keyword: "The Best Gift for the Whole Family",
    metaTitle: "Best Gift for Family — A Digital Photo Album of Shared Memories",
    metaDescription:
      "The best gift for family: a digital photo album that brings everyone's favourite photos and videos together in one beautiful display. Order easily on WhatsApp.",
    cardText: "Bring the whole family's memories together in one beautiful display.",
    intro:
      "Searching for the best gift for family — for parents, grandparents or your whole clan? A digital photo album gathers everyone's favourite moments into one warm, ever-changing display that lives at the heart of the home.",
    bullets: [
      "Combines memories from across the whole family",
      "A meaningful gift for parents and grandparents",
      "Beautiful on a shelf, mantel or side table",
      "Perfect for holidays, reunions and anniversaries",
    ],
  },
  {
    slug: "best-birthday-gift",
    image: "/media/additional-4.jpg",
    keyword: "The Best Birthday Gift",
    metaTitle: "Best Birthday Gift — A Personalised Digital Photo Album",
    metaDescription:
      "Need the best birthday gift idea? A personalised digital photo album preloaded with their favourite memories makes an unforgettable birthday surprise. Order on WhatsApp.",
    cardText: "Make their birthday unforgettable with a personalised memory album.",
    intro:
      "Want the best birthday gift that actually surprises them? Instead of another generic present, give a digital photo album personalised with their happiest moments — a birthday gift they'll talk about long after the candles are out.",
    bullets: [
      "Personalised with their favourite photos and videos",
      "An unforgettable, emotional birthday surprise",
      "Suits any age — from kids to grandparents",
      "Arrives ready to gift, beautifully simple",
    ],
  },
];

export function getOccasion(slug: string): Occasion | undefined {
  return occasions.find((o) => o.slug === slug);
}

// ---------------- Trust signals (shown under the hero) ----------------
// 👉 Edit these to match what you actually offer (e.g. delivery, payment).
export const trustSignals = [
  { icon: "💬", label: "Order in minutes on WhatsApp" },
  { icon: "🚚", label: "Fast, reliable delivery" },
  { icon: "🔒", label: "Secure & easy ordering" },
  { icon: "⭐", label: "Loved by happy customers" },
];

// ---------------- FAQ (shown on page + used for JSON-LD) ----------------
export const faqs = [
  {
    q: "Is the digital photo album a good gift for a friend?",
    a: "Absolutely. It's one of the most personal gifts you can give — preloaded with the photos and videos you've shared, it's far more meaningful than a typical present.",
  },
  {
    q: "Can I gift it to a child or the whole family?",
    a: "Yes. It's perfect for children, grandchildren, parents and grandparents. You simply choose the memories to include and we set it up ready to gift.",
  },
  {
    q: "Is it a good birthday gift?",
    a: "It's one of the most loved birthday gifts around — a personalised surprise that suits any age and any relationship.",
  },
  {
    q: "How do I place an order?",
    a: "Tap any Buy button and you'll be taken straight to our WhatsApp, where we'll confirm your order, the memories you want included, and delivery.",
  },
  {
    q: "Do I need any technical setup?",
    a: "None at all. Your digital photo album arrives ready to switch on and enjoy — no apps, downloads or accounts needed.",
  },
];

// ---------------- Structured data (SEO rich results) ----------------
export function productJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.productName,
    description: site.description,
    image: [`${site.url}/og.jpg`],
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "KES",
      lowPrice: Math.min(...variants.map((v) => v.price.amount)),
      highPrice: Math.max(...variants.map((v) => v.price.amount)),
      offerCount: variants.length,
      availability: "https://schema.org/InStock",
      url: site.url,
    },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
