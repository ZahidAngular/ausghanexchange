// All copy below is carried over verbatim from the previous ausghanexchange.com.au site.

export const img = (name: string) => `/images/${name}`;

/**
 * Content that exists on the old site but was hidden on every device there.
 * It is all carried over; flip a switch to show it.
 */
export const features = {
  // Melbourne (Dandenong) branch: hidden in the old footer, Branches and Contact pages.
  melbourneBranch: true,
  // Old template blocks hidden on the live site: "Download The Coinage Mobile App" badges, destination fee
  // amounts, partner logo strip, Wallet App / Statistic phones, home "Why Choose Us" with stats, Blog & News,
  // app-store ratings, the Contact page support blurb and the Get a Quote page's extra contact form.
  legacyHiddenSections: true,
};

export const site = {
  name: "Ausghan Exchange",
  shortName: "Ausghan",
  legalName: "Ausghan Express Pty Ltd trading as Ausghan Exchange",
  austrac: "AUSTRAC Registration No: IND100821839-003",
  email: "info@ausghanexchange.com.au",
  complaintsEmail: "complaints@ausghanexchange.com.au",
  website: "www.ausghanexchange.com.au",
  hours: "Monday - Sunday 10AM - 6PM",
  copyright: "2025. All Rights Reserved",
  googleReviews: "https://share.google/FWk442mVHN93313NX",
  logo: img("ausghan-logo-trimmed.webp"),
  logoFull: img("AE-LOGO-1-outline-HOR-HR-scaled.webp"),
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Send Money", href: "/send-money" },
  { label: "Branches", href: "/location" },
  { label: "Contact", href: "/contact-us" },
];

export const allBranches = [
  {
    city: "Adelaide",
    phone: "0481 370 595",
    tel: "0481370595",
    address: "Shop 6, 73 John Street, Salisbury SA 5108",
    hours: "Monday - Sunday 10AM - 6PM",
    map: "https://maps.google.com/maps?q=Shop%206%2C%2073-75%20John%20Street%2C%20Salisbury%2C%20SA&t=m&z=10&output=embed&iwloc=near",
  },
  {
    city: "Melbourne",
    phone: "0437 247 029",
    tel: "0437247029",
    address: "Shop 1, 305–307 Thomas Street, Dandenong VIC 3175",
    hours: "Monday - Sunday 10AM - 6PM",
    map: "https://maps.google.com/maps?q=Shop%201%2C%20305%E2%80%93307%20Thomas%20Street%2C%20Dandenong%20VIC%203175&t=m&z=10&output=embed&iwloc=near",
  },
] as const;

export const branches = allBranches.filter((b) => b.city !== "Melbourne" || features.melbourneBranch);

export const contactIcons = {
  call: img("icon26-HJJSYS8.png"),
  hours: img("icon34-AVP2DHA.png"),
  meet: img("icon21-HJJSYS8.png"),
};

export const socials = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Linkedin", href: "#" },
];

// Countries offered on the quote form (fee shown on the old homepage / quote form)
export const quoteCountries = [
  { label: "Pakistan", fee: 10, flag: img("3-1-2.png") },
  { label: "UAE", fee: 50, flag: img("6-1-1.png") },
  { label: "USA", fee: 0, flag: img("us.jpg") },
  { label: "CHN", fee: 0, flag: img("china-1.png") },
];

export const serviceAreaFlags = [
  { name: "Pakistan", src: img("3-1.png") },
  { name: "UAE", src: img("6.png") },
  { name: "USA", src: img("USA.jpg") },
  { name: "China", src: img("china.png") },
];

export const faqs = [
  {
    q: "What currencies do you exchange?",
    a: "We exchange a wide range of major and exotic currencies, including USD, AUD, EUR, GBP, and AFN. Please contact us to confirm availability for your specific currency needs.",
  },
  {
    q: "Do I need to bring any ID for currency exchange?",
    a: "Yes, for compliance with Australian regulations, you must bring a valid form of government-issued ID such as a driver’s license or passport for all transactions.",
  },
  {
    q: "What are your exchange rates?",
    a: "Our exchange rates are updated daily and vary depending on the currency and market conditions. Please contact us or visit our office to get the most accurate and competitive rates.",
  },
  {
    q: "Do you charge any commission or service fees?",
    a: "No, we offer commission-free currency exchange. The rate you see is the rate you get — no hidden charges.",
  },
  {
    q: "Can I pre-order currency online or over the phone?",
    a: "Yes, we offer currency pre-order services. You can call us or fill out the contact form on our website to reserve your currency for pick-up at your preferred time.",
  },
];

export const reviews = [
  {
    name: "Latifa Jami",
    text: "“Amazing service, and amazing customer service, loved my experience especially customer service, thank you Ausghan Exchange”",
  },
  {
    name: "Zakaria Sultani",
    text: "“I have been using Ausghan Exchange for a few years. Aside from the great exchange rate they offer, the service has always been smooth, quick and safe. Staff are friendly, helpful and professional.”",
  },
  {
    name: "Farzana Temori",
    text: "“Ausghan Exchange provides exceptional service with competitive rates, quick transactions, and friendly staff, making it a hassle-free experience.”",
  },
];

// Exchange rates published in the site's "Hello world!" post (23 July 2025)
export const exchangeRates = [
  { flag: "🇵🇰", flagImg: img("flags/pk.png"), country: "Pakistan", code: "PKR", rate: "187" },
  { flag: "🇦🇫", flagImg: img("flags/af.png"), country: "Afghanistan", code: "ANF", rate: "44.5" },
  { flag: "🇮🇷", flagImg: img("flags/ir.png"), country: "Iran", code: "IRR", rate: "41000" },
  { flag: "🇦🇪", flagImg: img("flags/ae.png"), country: "UAE", code: "AED", rate: "2.43" },
  { flag: "🇦🇺", flagImg: img("flags/au.png"), country: "Australia", code: "AUD", rate: "1.00" },
  { flag: "🇺🇸", flagImg: img("flags/us.png"), country: "United States", code: "USD", rate: "0.66" },
];
