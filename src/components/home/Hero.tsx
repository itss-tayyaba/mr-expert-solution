import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MessageCircle, Star, ShieldCheck, CheckCircle2, 
  Building2, Globe, CreditCard, Sparkles, Play, Award 
} from 'lucide-react';
import { OrderModal } from '../shared/OrderModal';
import { MapIntroPreloader } from '../shared/MapIntroPreloader';
import { USMapVector } from '../shared/USMapVector';

export const Hero: React.FC = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [showMapAnimation, setShowMapAnimation] = useState(false);
  const rotatingWords = ["US LLC", "UK LTD", "Global Brand", "Stripe Setup"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

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

      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-background to-background">
        
        {/* US Map Watermark in Background behind Hero (Matches Screenshot) */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] opacity-[0.16] -z-10">
          <USMapVector className="w-full h-auto text-emerald-800" />
        </div>

        {/* Ambient radial lighting circles */}
        <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-tr from-emerald-400/20 via-teal-300/15 to-transparent blur-3xl -z-10 rounded-full" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          
          {/* Main Hero Header Stack */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            
            {/* Top Pill Badges Row */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setShowMapAnimation(true)}
                className="section-badge hover:bg-emerald-100/70 transition-colors cursor-pointer group"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>Start Your Business The Right Way</span>
                <span className="text-[10px] text-emerald-800 font-bold ml-1 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform bg-emerald-100 px-2 py-0.5 rounded-full">
                  <Play className="h-2.5 w-2.5 fill-current" /> Map Intro
                </span>
              </button>

              {/* Trustpilot Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200/90 shadow-sm text-xs">
                <span className="font-bold text-[#00b67a]">★ Trustpilot</span>
                <div className="flex text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-gray-900">4.8</span>
                <span className="text-gray-400 text-[11px]">· 50+ reviews</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-gray-900 tracking-tight leading-[1.12]">
              Start Your Business The Right Way<br />
              <span className="text-gradient font-black">
                From Anywhere in the World.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Form your US LLC or UK LTD without leaving home. EIN, ITIN, business bank accounts and payment gateways handled end to end — <b>you build, we handle the paperwork.</b>
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => setOrderModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-xl shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="h-5 w-5 text-amber-300" />
                Build My Business Now
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="https://wa.me/923291666671?text=Hi%20MR%20EXPERT%20SOLUTION,%20I'd%20like%20a%20free%20consultation%20regarding%20my%20LLC."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base border border-gray-200 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-emerald-300"
              >
                <MessageCircle className="h-5 w-5 text-emerald-600" />
                Talk to a Specialist
              </a>
            </div>

            {/* Guarantees row */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-gray-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>100% Online & Remote</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Zero SSN or US Visa Required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Guaranteed Bank Guidance</span>
              </div>
            </div>

          </div>

          {/* Panoramic Team / Corporate Conference Video Poster (Matching Screenshot) */}
          <div className="mt-12 sm:mt-14 max-w-4xl mx-auto relative rounded-3xl overflow-hidden border border-emerald-200/80 shadow-2xl bg-white p-2 sm:p-3">
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] sm:aspect-[2.4/1] bg-gray-900">
              <img
                src="/assets/brand-video-poster-BJYJCKo1.jpg"
                alt="MR EXPERT SOLUTION Corporate Headquarters & Team"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex items-end justify-between p-4 sm:p-6 text-white">
                <div>
                  <div className="font-bold text-sm sm:text-base text-white">
                    MR EXPERT SOLUTION Team & Legal Operations
                  </div>
                  <div className="text-[11px] sm:text-xs text-emerald-300">
                    Albuquerque, New Mexico · London, United Kingdom
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/90 text-white text-[10px] font-bold shadow-md">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified Corporate Agent
                </span>
              </div>
            </div>
          </div>

          {/* Partner Integrations Strip (Solid Green Ribbon Matching Screenshot) */}
          <div className="mt-14 rounded-2xl bg-emerald-900 text-white py-4 px-6 shadow-xl border border-emerald-800">
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
