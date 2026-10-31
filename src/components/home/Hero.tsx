import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Phone, MessageCircle, Star, ShieldCheck, CheckCircle2, 
  Sparkles, Play, Award 
} from 'lucide-react';
import { OrderModal } from '../shared/OrderModal';
import { MapIntroPreloader } from '../shared/MapIntroPreloader';
import { USMapVector } from '../shared/USMapVector';
import { UKMapVector } from '../shared/UKMapVector';

export const Hero: React.FC = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [showMapAnimation, setShowMapAnimation] = useState(false);
  
  // Slide state: 0 = USA LLC / US Map, 1 = UK LTD / UK Map
  const [activeSlide, setActiveSlide] = useState<0 | 1>(0);

  // Mouse spotlight tracking for the dark edge glow on cursor hover (Matching Image 2)
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 500, y: 350 });
  const [isHovering, setIsHovering] = useState(false);

  // 6-Second automatic map & headline replacement (User requested: "after 6 sec it will replace with 3rd image")
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Mouse move handler for interactive edge glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // Rotating search prompts with typewriter effect
  const searchPrompts = [
    "How to file an LLC?",
    "How to open a business bank account?",
    "How to register a UK LTD?",
    "How to get Stripe for non-US residents?"
  ];
  const [currentPromptIdx, setCurrentPromptIdx] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = activeSlide === 0 ? "How to file an LLC?" : "How to open a business in UK?";
    let typingTimer: NodeJS.Timeout;

    if (!isDeleting && typedText.length < target.length) {
      typingTimer = setTimeout(() => {
        setTypedText(target.substring(0, typedText.length + 1));
      }, 70);
    } else if (isDeleting && typedText.length > 0) {
      typingTimer = setTimeout(() => {
        setTypedText(target.substring(0, typedText.length - 1));
      }, 40);
    }
    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, activeSlide]);

  useEffect(() => {
    // Reset typing when slide changes
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      setTypedText("");
    }, 300);
  }, [activeSlide]);

  const partnerLogos = [
    { name: "Stripe", category: "Payments" },
    { name: "Mercury", category: "US Banking" },
    { name: "Wise", category: "Multi-currency" },
    { name: "Payoneer", category: "Global Payouts" },
    { name: "Brex", category: "Corporate Cards" },
    { name: "Relay", category: "Online Banking" },
    { name: "Shopify", category: "E-Commerce" },
    { name: "Amazon", category: "Marketplace" },
    { name: "PayPal", category: "Merchant" },
    { name: "Tide", category: "UK Banking" },
    { name: "Airwallex", category: "Cross-Border" },
  ];

  return (
    <>
      {/* Dynamic Map Animation Modal if replayed */}
      {showMapAnimation && (
        <MapIntroPreloader forceShow={true} onFinish={() => setShowMapAnimation(false)} />
      )}

      <section
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
        className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 overflow-hidden bg-[#f9fbfa] select-none"
      >
        {/* ========================================================================= */}
        {/* BACKGROUND LAYER 1: Subtle Coordinate Grid (Matches User Images 1, 2, 3) */}
        {/* ========================================================================= */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15, 83, 58, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15, 83, 58, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '54px 54px'
          }}
        />

        {/* ========================================================================= */}
        {/* BACKGROUND LAYER 2: Base Geographical Map (US Map <-> UK Map transition)  */}
        {/* ========================================================================= */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden z-0">
          
          {/* US Map (Slide 0 - Visible in Image 1 & 2) */}
          <div
            className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-[1150px] transition-opacity duration-1000 ease-in-out ${
              activeSlide === 0 ? 'opacity-25' : 'opacity-0'
            }`}
          >
            <USMapVector className="w-full h-auto text-emerald-900 fill-emerald-800/15 stroke-emerald-900/40 stroke-[0.7]" />
          </div>

          {/* UK Map (Slide 1 - Visible in Image 3) */}
          <div
            className={`absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[720px] transition-opacity duration-1000 ease-in-out ${
              activeSlide === 1 ? 'opacity-25' : 'opacity-0'
            }`}
          >
            <UKMapVector className="w-full h-auto text-emerald-900 fill-emerald-800/15 stroke-emerald-900/40 stroke-[0.7]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BACKGROUND LAYER 3: INTERACTIVE SPOTLIGHT (Exact Match to User Image 2)   */}
        {/* When cursor moves near edge, that edge becomes bold dark green & glowing! */}
        {/* ========================================================================= */}
        <div
          className={`pointer-events-none absolute inset-0 hidden lg:block z-[1] transition-opacity duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            WebkitMaskImage: `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 30%, rgba(0,0,0,0.65) 55%, transparent 85%)`,
            maskImage: `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 30%, rgba(0,0,0,0.65) 55%, transparent 85%)`
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center drop-shadow-[0_0_8px_rgba(15,83,58,0.7)] drop-shadow-[0_0_18px_rgba(16,185,129,0.4)]">
            {/* Dark green edge highlight for US Map */}
            <div
              className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-[1150px] transition-opacity duration-1000 ${
                activeSlide === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <USMapVector className="w-full h-auto text-[#0a4831] fill-emerald-700/25 stroke-[#083d29] stroke-[2.8]" />
            </div>

            {/* Dark green edge highlight for UK Map */}
            <div
              className={`absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[720px] transition-opacity duration-1000 ${
                activeSlide === 1 ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <UKMapVector className="w-full h-auto text-[#0a4831] fill-emerald-700/25 stroke-[#083d29] stroke-[2.8]" />
            </div>
          </div>
        </div>

        {/* Ambient fade-out vignette at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#f9fbfa] via-[#f9fbfa]/80 to-transparent z-[2]" />

        {/* ========================================================================= */}
        {/* FOREGROUND CONTENT (Matches User Images 1, 2, 3 Exactly)                   */}
        {/* ========================================================================= */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* 1. Expert.ai Pill Search Bar (Exact Match to User Images 1, 2, 3) */}
            <div className="inline-flex items-center">
              <Link
                to="/website-readiness-checker"
                className="group flex items-center gap-3 bg-white hover:bg-gray-50 border border-gray-200/90 shadow-md shadow-gray-200/50 rounded-2xl sm:rounded-full px-3 py-1.5 sm:px-3 sm:py-2 transition-all hover:scale-[1.01]"
              >
                {/* Green Expert.ai Tag */}
                <span className="px-3.5 py-1 rounded-xl sm:rounded-full bg-[#0f533a] text-white font-bold text-xs sm:text-sm tracking-tight flex items-center gap-1 shadow-xs">
                  <span>Expert.ai</span>
                </span>

                {/* Animated Typewriter Search Text */}
                <div className="text-xs sm:text-base font-normal text-gray-700 px-2 min-w-[180px] sm:min-w-[240px] text-left flex items-center">
                  <span>{typedText}</span>
                  <span className="inline-block w-[1.5px] h-4 bg-emerald-800 ml-0.5 animate-pulse" />
                </div>

                {/* Arrow Icon */}
                <span className="p-1 rounded-full text-emerald-800 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* 2. Main Headline (Matches User Images 1, 2, 3) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-gray-900 leading-[1.06] font-display">
              <span>Start Your </span>
              <span className="text-[#0f533a]">Business</span>
              <br />
              <span>The </span>
              <span className="text-[#0f533a]">Right Way</span>
              <br />
              {/* Dynamic rotating 3rd line with smooth animation */}
              <span className="inline-block text-[#0f533a] transition-all duration-500 ease-out">
                {activeSlide === 0 ? "Payment Gateways" : "UK LTD"}
              </span>
            </h1>

            {/* 3. Subtitle (Exact Match to User Images 1, 2, 3) */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stop guessing. Stop stalling. We file, register, and bank your business — so you launch fast and focus on revenue, not paperwork.
            </p>

            {/* 4. Action Buttons (Exact Match to User Image 1) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => setOrderModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0f533a] hover:bg-[#0a3e2b] text-white font-bold text-base shadow-xl shadow-emerald-950/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Build My Business Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="https://wa.me/923291666671?text=Hi%20Mr.%20Expert%20Solution,%20I'd%20like%20to%20consult%20with%20a%20specialist."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base border border-[#0f533a]/30 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-[#0f533a]"
              >
                <Phone className="h-4 w-4 text-[#0f533a]" />
                <span>Talk to a Specialist</span>
              </a>
            </div>

            {/* Mini carousel slide indicator dots (6 seconds switch indicator) */}
            <div className="pt-2 flex items-center justify-center gap-2">
              <button
                onClick={() => setActiveSlide(0)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === 0 ? 'w-7 bg-[#0f533a]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                title="USA LLC (Slide 1)"
              />
              <button
                onClick={() => setActiveSlide(1)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === 1 ? 'w-7 bg-[#0f533a]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                title="UK LTD (Slide 2)"
              />
            </div>

          </div>

          {/* Panoramic Team / Corporate Conference Video Poster Banner */}
          <div className="mt-14 sm:mt-16 max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-emerald-200/80 shadow-2xl bg-white p-2 sm:p-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] sm:aspect-[2.4/1] bg-gray-900">
              <img
                src="/assets/brand-video-poster-BJYJCKo1.jpg"
                alt="Mr. Expert Solution Legal Headquarters"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex items-end justify-between p-4 sm:p-6 text-white">
                <div>
                  <div className="font-bold text-sm sm:text-base text-white">
                    Mr. Expert Solution Team & Legal Operations
                  </div>
                  <div className="text-[11px] sm:text-xs text-emerald-300">
                    Albuquerque, New Mexico · London, United Kingdom
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f533a] text-white text-[10px] font-bold shadow-md">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified Corporate Agent
                </span>
              </div>
            </div>
          </div>

          {/* Partner Ribbon Strip */}
          <div className="mt-14 rounded-2xl bg-[#0f533a] text-white py-4 px-6 shadow-xl border border-emerald-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-3 border-b border-emerald-800/60 pb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 font-mono flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                Official Banking & Gateway Integration Network
              </span>
              <span className="text-[11px] text-emerald-200/70">
                100% Online Pre-Approved Verification
              </span>
            </div>

            <div className="relative overflow-hidden w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
              <div className="flex w-max animate-marquee gap-8 sm:gap-12 items-center">
                {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-white font-semibold text-sm whitespace-nowrap"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="font-bold text-white">{partner.name}</span>
                    <span className="text-[10px] text-emerald-300/60 uppercase font-mono">{partner.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
};
