export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const homeFAQs: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Do I need to be a US or UK citizen to form a company?",
    answer: "No! Any non-resident citizen or foreign company can establish their business in the US or UK from anywhere in the world. Our entire process is 100% online and does not require you to travel, obtain a visa, or hold a Social Security Number (SSN)."
  },
  {
    id: "faq-2",
    category: "Pricing & Fees",
    question: "How much does it cost to form an LLC?",
    answer: "Our formation service starts from $99 plus state filing fees. State fees vary depending on the state you select (Wyoming is $100, Delaware is $90, New Mexico is $50). We have zero hidden markup on government fees."
  },
  {
    id: "faq-3",
    category: "State Selection",
    question: "In which US state should I form my company?",
    answer: "Wyoming and New Mexico are universally favored for non-resident e-commerce, dropshipping, agencies, and consultants because they feature 0% state income tax, low annual report fees, and strong privacy laws. Delaware is best if you plan to seek venture capital or outside angel investors."
  },
  {
    id: "faq-4",
    category: "Post-Formation",
    question: "What will be my next step after forming a company?",
    answer: "After your Articles of Organization are stamped by the state, we obtain your official IRS EIN, configure your registered agent, and prepare your bank-ready corporate resolution to set up business banking (Mercury, Wise) and payment processors (Stripe, PayPal)."
  },
  {
    id: "faq-5",
    category: "Banking & Payments",
    question: "Can I really open a US bank account and Stripe without visiting the US?",
    answer: "Yes. Modern fintech banks like Mercury, Relay, and Wise Business allow 100% remote online account opening for foreign-owned US LLCs. We prepare all the bank-required corporate documentation to guarantee a smooth verification."
  },
  {
    id: "faq-6",
    category: "Taxes & Compliance",
    question: "Do I have to pay US taxes if I live outside the United States?",
    answer: "If your LLC has no physical US presence (no US offices or US employees) and you are not a US resident, you generally have $0 US federal income tax on active business income. However, the IRS requires all foreign-owned LLCs to submit an informational return (Form 5472 and 1120 pro-forma) annually to maintain good standing."
  },
  {
    id: "faq-7",
    category: "Timeline",
    question: "How long does the entire formation process take?",
    answer: "State filing typically takes 3 to 5 business days (or 24 hours with expedited state filing). IRS EIN issuance takes between 24 hours to 7 business days depending on IRS queue times."
  },
  {
    id: "faq-8",
    category: "UK LTD",
    question: "What is included with the UK LTD formation?",
    answer: "Your Companies House registration, Certificate of Incorporation, Memorandum & Articles of Association, official registered office address in London, and HMRC UTR number are all handled completely."
  }
];
