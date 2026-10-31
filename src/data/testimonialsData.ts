export interface Testimonial {
  id: string;
  name: string;
  role: string;
  initials: string;
  avatar?: string;
  country: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Malik Azan",
    role: "E-Commerce Founder",
    initials: "MZ",
    avatar: "/assets/client-1-BRhP6Hce.jpg",
    country: "United Kingdom",
    rating: 5,
    date: "August 2024",
    service: "USA LLC & UK Ltd Formation",
    verified: true,
    content: "Muhammad Awais and Mr. Expert Solution provided outstanding support for forming LLCs in the USA and Ltds in the UK, including setting up bank accounts. Their professionalism and attention to detail ensured a smooth, stress-free process. Highly recommended."
  },
  {
    id: "2",
    name: "Talha Bhalli",
    role: "Digital Agency Owner",
    initials: "TB",
    avatar: "/assets/client-2-rSdM2uUt.jpg",
    country: "Pakistan",
    rating: 5,
    date: "June 2024",
    service: "Wyoming LLC & Stripe",
    verified: true,
    content: "I highly recommend this. Their customer service is dedicated and responsive. The product quality is consistently outstanding, exceeding my expectations every time. I was completely impressed with their professionalism."
  },
  {
    id: "3",
    name: "Mohsin Ali",
    role: "Amazon Wholesale Seller",
    initials: "MA",
    avatar: "/assets/client-3-jy82LSv9.jpg",
    country: "United Arab Emirates",
    rating: 5,
    date: "July 2024",
    service: "USA LLC + EIN + Mercury Bank",
    verified: true,
    content: "Highly recommend 👌 His service is very fast & he's trusted & experienced. He has given me the best work of all the people I have worked with so far. So that's why I give them 10 out of 10 ✨💯"
  },
  {
    id: "4",
    name: "Asif Mughal",
    role: "Cross-border Merchant",
    initials: "AM",
    avatar: "/assets/client-4-CQ72cwvv.jpg",
    country: "United Kingdom",
    rating: 5,
    date: "June 2024",
    service: "UK Wise Business & Companies House",
    verified: true,
    content: "Awais created UK business Wise verified account for me successfully at very low cost. I am very satisfied with services. RECOMMENDED and Trusty. 👌👌"
  },
  {
    id: "5",
    name: "Mudassir Kamal",
    role: "Shopify Store Owner",
    initials: "MK",
    avatar: "/assets/client-1-BRhP6Hce.jpg",
    country: "Germany",
    rating: 5,
    date: "June 2024",
    service: "Delaware LLC + Stripe US",
    verified: true,
    content: "Very Awesome 😎 I love the way he did my work 100 percent recommended. Bank accounts and Stripe were approved on the first attempt without any verification issues."
  },
  {
    id: "6",
    name: "Muhammad Usama",
    role: "SaaS Founder",
    initials: "MU",
    avatar: "/assets/client-2-rSdM2uUt.jpg",
    country: "Canada",
    rating: 5,
    date: "June 2024",
    service: "EIN & ITIN Registration",
    verified: true,
    content: "Highly recommend good work! The ITIN was certified and processed smoothly without needing to mail my physical passport overseas."
  }
];
