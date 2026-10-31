export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  currency: 'USD' | 'GBP' | 'CAD';
  priceLabel: string;
  popular?: boolean;
  ribbon?: string;
  renewalPrice?: number;
  breakdown?: { label: string; amount: number }[];
  features: string[];
}

export const usaPackages: PricingPlan[] = [
  {
    id: "usa-standard",
    name: "Standard",
    tagline: "Start Compliant",
    price: 99,
    currency: "USD",
    priceLabel: "+ State Fee",
    ribbon: "Recommended",
    features: [
      "Complete LLC Setup (Articles of Organization)",
      "Registered Agent Service (1 Full Year)",
      "Business Address (1 Full Year with mail handling)",
      "Official IRS EIN (Tax Identification Number)",
      "BOI Report (FinCEN Beneficial Ownership Filing)",
      "Operating Agreement Template",
      "Certificate of Good Standing Guidance",
      "Lifetime Customer Support via WhatsApp"
    ]
  },
  {
    id: "usa-gold",
    name: "Gold",
    tagline: "Grow with Support",
    price: 199,
    currency: "USD",
    priceLabel: "+ State Fee",
    popular: true,
    ribbon: "Most Popular",
    features: [
      "Everything in Standard",
      "Unique Physical Business Address (Non-shared suite)",
      "1 US Business Bank Account Assistance (Mercury / Wise)",
      "1 US Payment Gateway Setup (Stripe / PayPal)",
      "US Phone Number (1 Month included)",
      "Expedited IRS EIN Processing",
      "Resolution to Open Bank Account",
      "Direct WhatsApp Concierge"
    ]
  },
  {
    id: "usa-premium",
    name: "Premium",
    tagline: "Run It Like a Pro",
    price: 250,
    currency: "USD",
    priceLabel: "+ State Fee",
    ribbon: "Best Value",
    features: [
      "Everything in Gold",
      "2 Business Bank Accounts (Mercury + Relay / Wise)",
      "2 Merchant Account Setups (Stripe + PayPal Business)",
      "US Phone Number (1 Full Year included)",
      "Priority Same-Day State Filing Submission",
      "Custom Operating Agreement & Corporate Resolution",
      "Amazon US & Shopify Payments Eligibility Review",
      "VIP Dedicated Account Manager"
    ]
  },
  {
    id: "usa-elite",
    name: "Elite Pro",
    tagline: "Ultimate Package",
    price: 350,
    currency: "USD",
    priceLabel: "+ State Fee",
    ribbon: "Pro Elite",
    features: [
      "Everything in Premium",
      "Full ITIN Application & Document Certification Assistance",
      "2 Business Bank Accounts Guaranteed Guidance",
      "2 Merchant Accounts + E-commerce Pre-check",
      "US Phone Number (1 Full Year with SMS & Call Forwarding)",
      "Free 1st Year Annual Report Compliance Reminder",
      "First Tax Consultation Guidance (Form 5472 & 1120)",
      "Unlimited 1-on-1 Consultation via Video / Audio Call"
    ]
  }
];

export const ukPackages: PricingPlan[] = [
  {
    id: "uk-standard",
    name: "Standard",
    tagline: "Filing Service Only",
    price: 20,
    currency: "GBP",
    priceLabel: "Only",
    ribbon: "Filing Only",
    features: [
      "Companies House Filing Service (We File for You)",
      "£20 Service Charge Only",
      "Companies House Fee Paid Separately (Direct on Card)",
      "Formation Documents (Certificate of Incorporation, MemArts)",
      "Digital Share Certificates",
      "For Clients Who Already Have ID Verification & UK Address",
      "Note: ID Verification, Unique Address & £100 Company Fee NOT Included"
    ]
  },
  {
    id: "uk-gold",
    name: "Gold",
    tagline: "Complete Setup",
    price: 170,
    currency: "GBP",
    priceLabel: "Only",
    popular: true,
    ribbon: "Most Popular",
    features: [
      "Company ID Verification Handled",
      "Unique Physical UK Address (1 Full Year)",
      "HMRC UTR & Companies House Authentication Code",
      "£100 Official Company Fee Included",
      "Company Login Portal Access",
      "Digital Address Portal for Mail Scanning",
      "UK Phone Number (1 Month)",
      "1 Business Bank Account (Wise / Tide / Payoneer)",
      "1 Merchant Account Setup (Stripe UK)"
    ]
  },
  {
    id: "uk-premium",
    name: "Premium",
    tagline: "Professional Solution",
    price: 199,
    currency: "GBP",
    priceLabel: "Only",
    ribbon: "Best Value",
    features: [
      "Everything in Gold",
      "UK Phone Number (1 Full Year with call forwarding)",
      "2 Business Bank Accounts (Wise + Tide / Revolut)",
      "2 Merchant Accounts Setup (Stripe UK + PayPal Business UK)",
      "Priority Companies House Submission (Within 24 Hours)",
      "Director Service Address Included",
      "HMRC Corporation Tax Registration Assistance"
    ]
  },
  {
    id: "uk-elite",
    name: "Elite Pro",
    tagline: "Ultimate UK Package",
    price: 350,
    currency: "GBP",
    priceLabel: "Only",
    ribbon: "Pro Elite",
    features: [
      "Everything in Premium",
      "3 Business Bank Accounts Setup Support",
      "Complete E-commerce Gateway Setup (Stripe + PayPal + Amazon UK)",
      "Full Year Mail Forwarding & High-Res Scanning",
      "VAT Registration Guidance",
      "1st Year Confirmation Statement Filing Assistance",
      "Dedicated Senior UK Consultant"
    ]
  }
];

export const canadaPackages: PricingPlan[] = [
  {
    id: "canada-starter",
    name: "Starter",
    tagline: "A simple start for your limited company",
    price: 445,
    renewalPrice: 195,
    currency: "CAD",
    priceLabel: "All Included",
    ribbon: "Recommended",
    breakdown: [
      { label: "Government registration fee", amount: 250 },
      { label: "Virtual address + mail (10 items/mo)", amount: 120 },
      { label: "MES service & support", amount: 75 }
    ],
    features: [
      "Federal incorporation and business name search (NUANS)",
      "Articles of incorporation and bylaws template",
      "Virtual office address in downtown Toronto",
      "Mail receiving and handling (up to 10 items/month)",
      "Business registration number (BN automatically assigned)",
      "GST/HST registration guidance document",
      "Annual compliance reminder emails",
      "Direct email & WhatsApp support"
    ]
  },
  {
    id: "canada-professional",
    name: "Professional",
    tagline: "Growing businesses and founders",
    price: 550,
    renewalPrice: 370,
    currency: "CAD",
    priceLabel: "All Included",
    popular: true,
    ribbon: "Popular",
    breakdown: [
      { label: "Government registration fee", amount: 250 },
      { label: "Premium address + mail (20 items/mo)", amount: 150 },
      { label: "Business phone + call forwarding", amount: 70 },
      { label: "MES professional support", amount: 80 }
    ],
    features: [
      "Everything in Starter",
      "Premium downtown Toronto business address",
      "Enhanced mail handling (up to 20 items/month)",
      "Canadian Business phone number (local or toll-free)",
      "Call forwarding during business hours",
      "Advanced corporate documents (shareholder agreements, resolutions)",
      "Monthly tax & compliance tips",
      "Live chat & phone support"
    ]
  },
  {
    id: "canada-growth",
    name: "Business Growth",
    tagline: "Active businesses scaling operations",
    price: 695,
    renewalPrice: 450,
    currency: "CAD",
    priceLabel: "All Included",
    ribbon: "Growth",
    breakdown: [
      { label: "Government registration fee", amount: 250 },
      { label: "Premium address + unlimited mail", amount: 200 },
      { label: "Business phone + enhanced routing", amount: 90 },
      { label: "MES growth support & coaching", amount: 155 }
    ],
    features: [
      "Everything in Professional",
      "Executive Toronto address with unlimited mail scanning",
      "Business phone with 500 minutes included",
      "Priority 24-hour response target",
      "Quarterly Canadian tax planning guidance",
      "Stripe Canada & Canadian payment processor setup guidance"
    ]
  },
  {
    id: "canada-enterprise",
    name: "Enterprise Pro",
    tagline: "Established businesses and bigger operations",
    price: 895,
    renewalPrice: 680,
    currency: "CAD",
    priceLabel: "All Included",
    ribbon: "Enterprise",
    breakdown: [
      { label: "Government registration fee", amount: 250 },
      { label: "Executive suite address + concierge", amount: 280 },
      { label: "Business phone + 24/7 answering", amount: 150 },
      { label: "Registered agent service", amount: 100 },
      { label: "MES executive-level support", amount: 115 }
    ],
    features: [
      "Everything in Business Growth",
      "Enterprise downtown Toronto executive office address",
      "Unlimited mail scanning and digital delivery",
      "24/7 professional call answering in your company name",
      "Registered agent service included",
      "Banking relationship introductions",
      "Personal business concierge"
    ]
  }
];

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  recommendedFor?: string;
}

export const availableAddOns: AddOnOption[] = [
  {
    id: "itin",
    name: "ITIN Service (IRS Certified Agent)",
    description: "Get your Individual Taxpayer Identification Number without mailing original passport",
    price: 99,
    currency: "USD",
    recommendedFor: "Non-US residents without SSN needing Stripe/PayPal verification"
  },
  {
    id: "us-phone",
    name: "Dedicated US Phone & SMS (1 Year)",
    description: "Real US phone number for OTPs, bank verifications, and customer support",
    price: 50,
    currency: "USD"
  },
  {
    id: "expedited-ein",
    name: "Rush Expedited EIN Service",
    description: "Expedited IRS submission within 24-48 business hours",
    price: 49,
    currency: "USD"
  },
  {
    id: "trademark",
    name: "US Trademark Search & Registration",
    description: "USPTO brand name filing & brand registry defense for Amazon/eCommerce",
    price: 199,
    currency: "USD"
  },
  {
    id: "stripe-fix",
    name: "Payment Gateway Health & Compliance Fix",
    description: "Website compliance review, terms & conditions, and Stripe approval guarantee support",
    price: 79,
    currency: "USD"
  }
];
