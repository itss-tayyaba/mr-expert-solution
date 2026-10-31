export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  price: string;
  timeline: string;
  iconName: string;
  image?: string;
  heroHeadline: string;
  heroSubhead: string;
  whatIsIncluded: string[];
  whyChooseUs: string[];
  prerequisites: string[];
  faqs: { q: string; a: string }[];
}

export const servicesList: ServiceItem[] = [
  {
    id: "usa-llc",
    slug: "usa-llc-formation",
    title: "USA LLC Formation",
    shortDesc: "Complete LLC formation in Wyoming, Delaware, New Mexico or any US state for non-residents.",
    badge: "Core Service",
    price: "$99 + State Fee",
    timeline: "3 to 5 Business Days",
    iconName: "Building2",
    image: "/assets/service-usa-llc.png",
    heroHeadline: "Form Your US LLC From Anywhere In The World",
    heroSubhead: "100% remote company formation. No SSN, US visit, or citizenship required. Receive official Articles of Organization, Registered Agent, and IRS EIN.",
    whatIsIncluded: [
      "Filing Articles of Organization with Secretary of State",
      "Official State Filing Certificate & Stamp",
      "Registered Agent Service (1 Full Year)",
      "Physical Business Address with Mail Scanning (1 Year)",
      "IRS EIN (Employer Identification Number) Official Form CP575",
      "FinCEN BOI (Beneficial Ownership Information) Compliance Report",
      "Custom Operating Agreement & Banking Resolutions",
      "Lifetime Dedicated WhatsApp & Email Support"
    ],
    whyChooseUs: [
      "Over 10,000+ businesses formed across 150+ countries",
      "Guaranteed US bank account opening support (Mercury, Relay, Wise)",
      "Zero hidden state filing markups — you pay exact state fees",
      "100% remote online processing with no physical presence required"
    ],
    prerequisites: [
      "Valid international passport copy (colored scan)",
      "Preferred company name (plus 2 backup options)",
      "Basic contact information and business activity description"
    ],
    faqs: [
      {
        q: "Can I form a US LLC if I am not a US citizen or resident?",
        a: "Yes! Any foreign citizen from anywhere in the world can 100% legally own and operate a US LLC. You do not need a US visa, SSN, or physical presence."
      },
      {
        q: "Which state is best for foreign founders?",
        a: "Wyoming and New Mexico are top choices for non-residents due to 0% state income tax, low annual fees ($60 in WY, $0 in NM), and strong privacy protections. Delaware is preferred if you plan to raise institutional VC funding."
      },
      {
        q: "Do I need a US Social Security Number (SSN)?",
        a: "No. As a non-resident, we obtain an IRS EIN for your LLC via Form SS-4 using our authorized registered agent channel without requiring an SSN."
      }
    ]
  },
  {
    id: "uk-ltd",
    slug: "uk-ltd-formation",
    title: "UK LTD Formation",
    shortDesc: "Fast Companies House company registration with registered office address, UTR, and banking.",
    badge: "Fast Track",
    price: "From £20",
    timeline: "24 to 48 Hours",
    iconName: "Globe",
    image: "/assets/service-uk-ltd.png",
    heroHeadline: "Register Your UK Private Limited Company Remotely",
    heroSubhead: "Official incorporation at Companies House. Get your Certificate of Incorporation, UTR number, London address, and UK business bank account.",
    whatIsIncluded: [
      "Official Companies House Electronic Filing & Certification",
      "Certificate of Incorporation (IN01)",
      "Memorandum and Articles of Association",
      "Official Company Authentication Code for online filing",
      "HMRC Corporation Tax UTR (Unique Taxpayer Reference)",
      "Registered London / UK Office Address (1 Year)",
      "Digital Mail Scanning & Forwarding Portal",
      "UK Business Banking Setup Guidance (Wise UK, Tide)"
    ],
    whyChooseUs: [
      "Ultra-fast same-day or 24-hour Companies House filing",
      "Genuine unique physical London business addresses",
      "Help through strict UK ID verification rules",
      "Full ongoing compliance & annual confirmation statement support"
    ],
    prerequisites: [
      "Valid passport or national ID card",
      "Proof of residential address (utility bill or bank statement within 3 months)",
      "Proposed company name"
    ],
    faqs: [
      {
        q: "How fast is a UK company formed?",
        a: "Typically within 24 to 48 hours once identity verification is completed."
      },
      {
        q: "Do I need a UK address?",
        a: "Yes, every UK company must maintain a registered office in the UK. We provide a premium London registered address with digital mail forwarding."
      }
    ]
  },
  {
    id: "banking",
    slug: "business-banking",
    title: "Business Banking Setup",
    shortDesc: "Open USD, GBP & EUR multi-currency business accounts with Mercury, Wise, Relay & Tide.",
    badge: "High Demand",
    price: "Included in Gold / Elite",
    timeline: "2 to 4 Business Days",
    iconName: "CreditCard",
    image: "/assets/service-banking.png",
    heroHeadline: "Open US & UK Business Bank Accounts Without Visiting",
    heroSubhead: "We prepare your corporate documents, operating resolutions, and website compliance to maximize instant approval on Mercury, Wise, Relay, and Tide.",
    whatIsIncluded: [
      "Preparation of Bank-Ready Corporate Documents Pack",
      "Operating Agreement with explicit banking clauses",
      "Corporate Resolution Authorizing Bank Account Opening",
      "Website & Business Model Compliance Pre-check",
      "Priority Application Submission to Mercury & Wise Business",
      "Direct guidance for identity verification (KYC/AML)",
      "Virtual and physical debit card ordering assistance",
      "ACH, Wire, and International SWIFT transfer guidance"
    ],
    whyChooseUs: [
      "98% first-time approval rate for non-resident clients",
      "Direct relationships and familiarity with compliance parameters",
      "Backup options configured if a specific platform requests clarification"
    ],
    prerequisites: [
      "Approved LLC / LTD documents (Articles of Organization)",
      "Official IRS EIN letter (CP575 or 147C)",
      "Functioning website or business domain showcasing products/services",
      "Owner passport copy"
    ],
    faqs: [
      {
        q: "Can I open Mercury Bank as a non-US resident?",
        a: "Yes! Mercury is designed specifically for US companies owned by global founders. You only need an official US LLC and EIN, along with your passport."
      },
      {
        q: "Is an in-person branch visit required?",
        a: "No! 100% of the banking setup is completed online via secure verification."
      }
    ]
  },
  {
    id: "payments",
    slug: "payment-gateways",
    title: "Payment Gateways & Stripe Setup",
    shortDesc: "Accept global credit card payments via verified Stripe, PayPal Business, and Shopify Payments.",
    badge: "Essential",
    price: "From $79",
    timeline: "1 to 3 Business Days",
    iconName: "Zap",
    image: "/assets/service-payments.png",
    heroHeadline: "Accept Global Payments With Stripe & PayPal Business",
    heroSubhead: "Stop worrying about payment processor account suspensions. We ensure your website, company papers, and tax details strictly adhere to gateway guidelines.",
    whatIsIncluded: [
      "Full Stripe US or Stripe UK merchant account creation",
      "PayPal Business account configuration with US bank linking",
      "Website readiness audit: terms, privacy, refund policy, and contact info",
      "IRS EIN matching with IRS database to prevent tax TIN mismatches",
      "Integration of US phone number and address for billing compliance",
      "Assistance with 2FA and multi-currency payout routing",
      "Appeal and documentation assistance if additional verification is requested"
    ],
    whyChooseUs: [
      "Comprehensive compliance pre-audit before submitting to Stripe",
      "Eliminates common causes of instant account bans",
      "Tested across 500+ eCommerce and SaaS setups"
    ],
    prerequisites: [
      "Active US LLC or UK LTD with EIN/UTR",
      "US or UK business bank account (Mercury, Wise, Relay)",
      "Live website with clear pricing, refund policy, and contact information"
    ],
    faqs: [
      {
        q: "Why do so many non-US founders get banned on Stripe?",
        a: "Most rejections occur due to mismatched EIN data, non-compliant website legal pages, lack of physical address disclosure, or improper bank account linking. We audit and correct these before opening the account."
      }
    ]
  },
  {
    id: "ein",
    slug: "ein",
    title: "IRS EIN Registration",
    shortDesc: "Official Employer Identification Number directly issued by the IRS for banking and tax compliance.",
    badge: "Official IRS",
    price: "$49 Standalone / Included in Packages",
    timeline: "Expedited: 24-48h / Standard: 5-7 days",
    iconName: "FileCheck2",
    heroHeadline: "Get Your Official IRS EIN (Form CP575 / 147C)",
    heroSubhead: "The Employer Identification Number is your company's federal tax ID. Required to open a bank account, hire employees, and receive merchant payouts.",
    whatIsIncluded: [
      "Direct preparation and submission of IRS Form SS-4",
      "Official IRS Form CP575 confirmation letter delivered digitally",
      "Registered Agent third-party designee representation",
      "Verification against IRS records for immediate Stripe / Mercury validation"
    ],
    whyChooseUs: [
      "We obtain EINs for non-residents who do NOT possess a US SSN",
      "Direct line to IRS agent representatives for fast turnaround",
      "Zero paperwork hassle for you"
    ],
    prerequisites: [
      "Approved Articles of Organization of your LLC",
      "Full legal name and passport number of company manager"
    ],
    faqs: [
      {
        q: "What is an EIN?",
        a: "An EIN (Employer Identification Number) is a 9-digit federal tax number issued by the IRS to identify your business entity."
      }
    ]
  },
  {
    id: "itin",
    slug: "itin-service",
    title: "ITIN Application Service",
    shortDesc: "Obtain an Individual Taxpayer Identification Number as a foreign national without mailing your passport.",
    badge: "Special $99 Offer",
    price: "$99 (Save 50%)",
    timeline: "6 to 8 Weeks (IRS Processing)",
    iconName: "Award",
    heroHeadline: "Get Your US ITIN Without Surrendering Your Passport",
    heroSubhead: "An ITIN is an individual US tax number for non-residents. Required for PayPal US, Stripe advanced verification, US credit cards, and federal tax returns.",
    whatIsIncluded: [
      "Preparation of IRS Form W-7",
      "Certified Acceptance Agent (CAA) document certification",
      "Preparation of US tax return exemption documentation",
      "Direct submission to IRS ITIN Operations in Austin, Texas",
      "IRS tracking and progress updates until letter is received",
      "High-resolution digital scan of official ITIN notice upon delivery"
    ],
    whyChooseUs: [
      "No need to mail your original passport to the United States",
      "IRS Certified Acceptance Agent (CAA) review prevents common rejections",
      "Best price guarantee in the industry at only $99"
    ],
    prerequisites: [
      "High quality colored scan of your international passport",
      "US LLC documents and EIN letter",
      "Proof of foreign residency"
    ],
    faqs: [
      {
        q: "Do I need an ITIN to own an LLC?",
        a: "An LLC only requires an EIN to start. However, an ITIN is strongly recommended for personal US banking, PayPal personal verification, building US personal credit, and filing federal tax returns."
      }
    ]
  },
  {
    id: "trademark",
    slug: "trademark-registration",
    title: "US Trademark Registration",
    shortDesc: "Protect your brand name, logo and Amazon Brand Registry eligibility with the USPTO.",
    badge: "Brand Protection",
    price: "$199 + USPTO Fee",
    timeline: "Filing within 48 Hours",
    iconName: "Shield",
    heroHeadline: "Protect Your Brand Name & Logo with a US Trademark",
    heroSubhead: "Secure federal protection across all 50 states. Essential for Amazon Brand Registry, defending against copycats, and brand equity.",
    whatIsIncluded: [
      "Comprehensive USPTO trademark database knockout search",
      "Filing under appropriate Nice Trademark Classes",
      "Preparation of Specimen of Use according to USPTO standards",
      "Direct electronic submission to the United States Patent and Trademark Office",
      "USPTO Serial Number issued for instant Amazon Brand Registry application",
      "Docketing and monitoring of your application status"
    ],
    whyChooseUs: [
      "Experienced trademark specialists ensuring correct class selection",
      "Fast 48-hour submission turnaround",
      "Direct support for Amazon Brand Registry enrollment"
    ],
    prerequisites: [
      "Brand name or logo graphic file",
      "Description of goods or services offered",
      "Proof/specimen showing the mark in commerce (website, product photo, or label)"
    ],
    faqs: [
      {
        q: "Can I enroll in Amazon Brand Registry with a pending trademark?",
        a: "Yes! Amazon Brand Registry accepts USPTO pending application serial numbers."
      }
    ]
  },
  {
    id: "tax-compliance",
    slug: "tax-filing",
    title: "Tax Filing & Annual Compliance",
    shortDesc: "Annual reports, Form 5472 / 1120 pro-forma, and FinCEN BOI filings kept 100% compliant.",
    badge: "Compliance",
    price: "From $120/yr",
    timeline: "Before Filing Deadlines",
    iconName: "FileText",
    heroHeadline: "Automate Your US LLC & UK LTD Tax Compliance",
    heroSubhead: "Avoid hefty $25,000 IRS penalties for foreign-owned single-member LLCs. We prepare and file Form 5472, Form 1120, state annual reports, and BOI updates.",
    whatIsIncluded: [
      "Annual State Report filing (Wyoming, Delaware, Florida, etc.)",
      "IRS Form 5472 & Form 1120 Preparation for Foreign-Owned US LLCs",
      "FinCEN Beneficial Ownership Information (BOI) initial filing & updates",
      "Franchise tax payment handling and receipt archival",
      "Audit assistance and IRS correspondence support"
    ],
    whyChooseUs: [
      "Zero missed deadlines guarantee",
      "Protects your company from administrative dissolution or IRS penalties",
      "Clear upfront pricing with no surprise accounting fees"
    ],
    prerequisites: [
      "LLC legal name and EIN",
      "Summary of transaction volumes or capital contributions for the year"
    ],
    faqs: [
      {
        q: "Do I owe US income tax if I don't live in the US?",
        a: "Most foreign-owned single-member LLCs selling services or drop-shipping without physical US presence or employees have no Effectively Connected Income (ECI), meaning $0 US federal income tax is owed. However, an informational Form 5472 & 1120 must still be filed annually with the IRS to avoid a $25,000 penalty."
      }
    ]
  },
  {
    id: "ecommerce",
    slug: "ecommerce-accounts",
    title: "E-Commerce Accounts Management",
    shortDesc: "Amazon US/UK Seller Central, Walmart Marketplace, TikTok Shop, and eBay approval support.",
    badge: "Scale Selling",
    price: "From $149",
    timeline: "3 to 7 Business Days",
    iconName: "ShoppingBag",
    image: "/assets/service-ecommerce.png",
    heroHeadline: "Launch On Amazon US, Walmart, and TikTok Shop",
    heroSubhead: "We configure your verified corporate identity, utility bills, business banking, and brand registry to gain quick approval on global selling platforms.",
    whatIsIncluded: [
      "Amazon Seller Central US / UK Account Setup & Verification",
      "Matching utility statement and bank document pack for KYC",
      "Walmart Marketplace seller application assistance",
      "TikTok Shop US seller verification assistance",
      "Payment gateway integration with Shopify, WooCommerce, or custom site"
    ],
    whyChooseUs: [
      "Proven framework for Amazon video verification interviews",
      "Correct address matching to prevent identity mismatch flags"
    ],
    prerequisites: [
      "US LLC or UK LTD with EIN / UTR",
      "Clean business bank account statement",
      "Government photo ID matching LLC manager name"
    ],
    faqs: [
      {
        q: "Can I open an Amazon US Seller account from outside the USA?",
        a: "Yes! Using your US LLC, EIN, and US business bank account, you can sell on Amazon US from any supported country."
      }
    ]
  }
];
