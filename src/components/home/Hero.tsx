import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MessageCircle, Star, ShieldCheck, CheckCircle2, 
  Building2, Globe, CreditCard, Sparkles, FileText, Check, Play 
} from 'lucide-react';
import { OrderModal } from '../shared/OrderModal';
import { MapIntroPreloader } from '../shared/MapIntroPreloader';

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

      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-background to-background">
        {/* Background glow ambient circles */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-tr from-emerald-400/15 via-teal-400/10 to-transparent blur-3xl -z-10 rounded-full" />
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Trustpilot & Announcement Pill */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setShowMapAnimation(true)}
                  className="section-badge hover:bg-emerald-100/70 transition-colors cursor-pointer group"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Start Your Business The Right Way</span>
                  <span className="text-[10px] text-emerald-700 font-bold ml-1 flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                    <Play className="h-2.5 w-2.5 fill-current" /> Map Intro
                  </span>
                </button>

                {/* Trustpilot Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-gray-200/80 shadow-sm text-xs">
                  <span className="font-bold text-[#00b67a]">★ Trustpilot</span>
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-800">4.8</span>
                  <span className="text-gray-400 text-[11px]">· 50+ reviews</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-gray-900 tracking-tight leading-[1.12]">
                Start Your{" "}
                <span className="relative inline-block text-emerald-800">
                  <span className="text-gradient">
                    {rotatingWords[currentWordIdx]}
                  </span>
                </span>
                <br />
                From Anywhere In The World.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Form your US LLC or UK LTD without leaving home. EIN, ITIN, business bank accounts and payment gateways handled end to end — <b>you build, we handle the paperwork.</b>
              </p>

              {/* CTA Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-xl shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Sparkles className="h-5 w-5" />
                  Build My Business Now
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="https://wa.me/923291666671?text=Hi%20MR%20EXPERT%20SOLUTION,%20I'd%20like%20a%20free%20consultation%20regarding%20my%20LLC."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 text-gray-800 font-semibold text-base border border-gray-200 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-emerald-300"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                  Talk to a Specialist
                </a>
              </div>

              {/* Bullet Guarantees */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-gray-500 font-medium">
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
                  <span>Bank Approval Assistance</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Dashboard Preview Card */}
            <div className="lg:col-span-5 relative">
              
              {/* Decorative Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-400 opacity-20 blur-xl"></div>
              
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl border border-emerald-100 p-6 sm:p-7 shadow-2xl space-y-5">
                
                {/* Dashboard Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-gray-900">Apex Global Ventures LLC</div>
                      <div className="text-[11px] text-gray-500 flex items-center gap-1">
                        <span>Wyoming, United States</span>
                        <span className="text-gray-300">•</span>
                        <span className="font-mono text-emerald-700 font-semibold">EIN: 32-0948***</span>
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Good Standing
                  </span>
                </div>

                {/* Status Box */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-emerald-800">
                      Company Status
                    </div>
                    <div className="text-xs font-bold text-gray-900 mt-1">
                      Active & Compliant
                    </div>
                    <div className="text-[10px] text-emerald-700 mt-0.5">
                      Valid until Mar 7, 2027
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-500">
                      Registered Address
                    </div>
                    <div className="text-xs font-bold text-gray-900 mt-1 truncate">
                      1209 Mountain Rd NW
                    </div>
                    <div className="text-[10px] text-gray-500 mt-0.5">
                      Albuquerque, NM 87102
                    </div>
                  </div>
                </div>

                {/* Add-ons & Compliance Tracker */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                    <span>Active Services & Filings (4)</span>
                    <span className="text-emerald-700 text-[11px]">Syncing live</span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600 stroke-[3]" />
                        <span className="font-medium text-gray-800">Articles of Organization</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Filed
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600 stroke-[3]" />
                        <span className="font-medium text-gray-800">IRS Form CP575 (EIN)</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Delivered
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600 stroke-[3]" />
                        <span className="font-medium text-gray-800">Mercury US Business Account</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Approved
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-white shadow-sm">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-emerald-600 stroke-[3]" />
                        <span className="font-medium text-gray-800">Stripe Payment Gateway</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        Connected
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom interactive button on dashboard */}
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="w-full py-2.5 px-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  Launch Your Workspace Like This
                </button>

              </div>
            </div>

          </div>

          {/* Partner Integrations Strip */}
          <div className="mt-16 sm:mt-20 pt-8 border-t border-emerald-950/5">
            <div className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
              Official Integration & Banking Setup Partners
            </div>

            <div className="relative overflow-hidden w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="flex w-max animate-marquee gap-8 sm:gap-12 items-center">
                {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-gray-200/80 shadow-sm whitespace-nowrap"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-bold text-sm text-gray-800">{partner.name}</span>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">{partner.category}</span>
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
