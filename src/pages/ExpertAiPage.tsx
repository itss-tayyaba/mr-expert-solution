import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, CheckCircle2, ChevronDown, ExternalLink, 
  ShieldCheck, Zap, Building2, Globe, CreditCard, Laptop, ShoppingBag, 
  Users, Check, FileText, Send, X, Lock, Code2, Layers, DollarSign, MessageCircle
} from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export const ExpertAiPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    platformType: 'SaaS Platform',
    estimatedVolume: '10 - 50 companies / month',
    message: ''
  });

  const faqs: FaqItem[] = [
    {
      q: "What is the Mr Expert Solution Expert AI Partner Program?",
      a: "It is an enterprise B2B partner system that lets SaaS platforms, marketplaces, and agencies offer instant US and UK company formation, US business banking, and federal EIN registration directly to their customers without building legal, compliance, or back-office teams."
    },
    {
      q: "What are the different ways to partner with you?",
      a: "We support 3 flexible integration tiers: (1) Headless REST API & Webhooks for seamless in-product native flows, (2) White-Label Co-Branded Client Portals requiring zero developer code, and (3) Partner Referral with dedicated high-converting tracking links and recurring revenue share."
    },
    {
      q: "What services can I offer my clients?",
      a: "You can offer complete US LLC formations across all 50 states (Wyoming, Delaware, New Mexico, Florida, etc.), UK LTD formations, IRS official EIN registration, certified ITIN applications, US Business Bank Account approvals (Mercury, Wise, Relay), and FinCEN Beneficial Ownership (BOI) automated compliance."
    },
    {
      q: "How are partner commissions and payouts processed?",
      a: "Partner payouts are processed automatically on the 1st of every month via Wise, direct ACH, or international wire. You receive an executive partner dashboard displaying real-time customer onboarding status, conversion volume, and earned revenue."
    },
    {
      q: "Does my company retain client ownership?",
      a: "100% yes. Your clients remain strictly your clients. We operate either as an invisible infrastructure provider behind your brand or as an authorized corporate formation partner, respecting full non-compete and non-solicitation guarantees."
    },
    {
      q: "Do you have an existing client portal / API?",
      a: "Yes! Our platform provides fully documented OpenAPI endpoints, sandboxes, and pre-built React components, allowing your engineering team to launch in as little as 48 hours."
    }
  ];

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
    setTimeout(() => {
      setPartnerSubmitted(false);
      setPartnerModalOpen(false);
      setFormData({
        companyName: '',
        fullName: '',
        email: '',
        phone: '',
        platformType: 'SaaS Platform',
        estimatedVolume: '10 - 50 companies / month',
        message: ''
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#04140c] text-white selection:bg-emerald-500 selection:text-black">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Exact Match to User Screenshot media_1793433054384)       */}
      {/* ========================================================================= */}
      <section className="relative pt-36 sm:pt-44 pb-20 overflow-hidden bg-gradient-to-b from-[#061810] via-[#04140c] to-[#04140c]">
        
        {/* Subtle coordinate grid lines in background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />

        {/* Ambient radial green glows */}
        <div className="pointer-events-none absolute top-20 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px]" />
        <div className="pointer-events-none absolute top-40 right-10 w-[550px] h-[400px] bg-teal-500/10 rounded-full blur-[130px]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Partner Tag Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AI-POWERED FORMATION API</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] text-white leading-[1.08] font-display">
                Launch AI-Powered <br />
                Business Setup on <br />
                Your Platform <span className="text-emerald-400">in Days.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
                One API-enabled partnership for UK and US formation, banking setup, and lifetime compliance with full white-label — built for platforms, marketplaces, and agencies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => setPartnerModalOpen(true)}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Schedule a Demo</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="https://wa.me/923291666671?text=Hi%20Mr.%20Expert%20Solution,%20I'd%20like%20to%20review%20the%20Expert%20AI%20API%20Documentation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/25 flex items-center justify-center gap-2 transition-all hover:border-emerald-400"
                >
                  <span>Explore the API Docs</span>
                  <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
                </a>
              </div>

              {/* Bullet Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Zero integration fees</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>48-hour go-live</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Dedicated partner rep</span>
                </div>
              </div>

            </div>

            {/* Right Column Graphic (5 Cols) (Matches User Screenshot Right Showcase) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl p-6 bg-gradient-to-b from-[#08281a]/80 to-[#04160e]/90 border border-emerald-500/30 shadow-2xl backdrop-blur-md overflow-hidden group">
                
                {/* Glowing World Map Backdrop */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 1000 500" className="w-full h-full object-cover">
                    <circle cx="500" cy="250" r="220" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="500" cy="250" r="140" fill="none" stroke="#10b981" strokeWidth="1" />
                  </svg>
                </div>

                {/* Central Formation Certificate Card Mockup */}
                <div className="relative z-10 space-y-4">
                  <div className="bg-white text-gray-900 rounded-2xl p-5 shadow-2xl border border-gray-100 max-w-sm mx-auto transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-emerald-800 text-white font-black text-xs flex items-center justify-center">
                          US
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-900">Official LLC Certificate</div>
                          <div className="text-[10px] text-gray-500">Secretary of State Stamp</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Active
                      </span>
                    </div>

                    <div className="py-3 space-y-2 text-xs">
                      <div className="flex justify-between text-gray-600 text-[11px]">
                        <span>Entity Name:</span>
                        <span className="font-bold text-gray-900">Apex Global LLC</span>
                      </div>
                      <div className="flex justify-between text-gray-600 text-[11px]">
                        <span>State Filing:</span>
                        <span className="font-bold text-gray-900">Wyoming (0% Tax)</span>
                      </div>
                      <div className="flex justify-between text-gray-600 text-[11px]">
                        <span>IRS Tax ID:</span>
                        <span className="font-mono font-bold text-emerald-700">EIN-CP575 VERIFIED</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400">
                      <span>API Sync: Instant</span>
                      <span className="text-emerald-700 font-bold">100% Approved</span>
                    </div>
                  </div>

                  {/* Corporate Banking Cards Row (Mercury, Wise, Relay) */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-center">
                      <div className="text-[11px] font-bold text-white">Mercury</div>
                      <div className="text-[9px] text-emerald-400">US Checking</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-center">
                      <div className="text-[11px] font-bold text-white">Wise Business</div>
                      <div className="text-[9px] text-emerald-400">Multi-Currency</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-center">
                      <div className="text-[11px] font-bold text-white">Stripe</div>
                      <div className="text-[9px] text-emerald-400">Merchant API</div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Partner Category Pills Ribbon (Exact Match to Screenshot) */}
          <div className="mt-16 pt-8 border-t border-emerald-900/40 text-center space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Built to scale with modern online businesses and B2B software platforms
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "SaaS Platforms", icon: "🏷️" },
                { label: "Marketplaces", icon: "🛒" },
                { label: "Fintech Products", icon: "💳" },
                { label: "Agencies", icon: "👥" },
                { label: "Creator Communities", icon: "⚖️" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-full bg-[#082216] border border-emerald-500/30 text-xs font-semibold text-gray-200 flex items-center gap-2 hover:border-emerald-400 transition-colors shadow-xs"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REVENUE LINE / CARDS SECTION (Exact Match to Screenshot)               */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#031009] relative overflow-hidden border-t border-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
              Add a new revenue line. <br />
              <span className="text-gray-400">Not a new operations team.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              You focus on acquiring customers. We handle everything else under your brand or behind the scenes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#082619] to-[#04150d] border border-emerald-500/25 shadow-xl space-y-4 group hover:border-emerald-400/50 transition-all">
              <div className="h-12 w-12 rounded-2xl bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                No Additional Headcount, Direct Revenue
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Earn lucrative recurring commissions on every company formed, bank account approved, and annual report completed. Zero legal risk and zero compliance overhead for your engineering team.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#082619] to-[#04150d] border border-emerald-500/25 shadow-xl space-y-4 group hover:border-emerald-400/50 transition-all">
              <div className="h-12 w-12 rounded-2xl bg-emerald-900/60 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                Full White-Label or Co-Branded
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Embed formation steps inside your existing onboarding flow via our drop-in SDK components, or let your users register through a secure portal branded entirely with your corporate logo.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. AI-GUIDED FORMATION BENTO SECTION (Exact Match to Screenshot)           */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#04140c] relative overflow-hidden border-t border-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="h-3 w-3" />
              <span>COMPREHENSIVE STACK</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
              AI-Guided Formation through <br />
              <span className="text-emerald-400">Federal Taxes</span> for Your Users.
            </h2>
            
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
              Every step from initial filing to federal tax IDs — structured under your brand with automated validation and status tracking.
            </p>
          </div>

          {/* 3 Architecture Stack Cards (Matches Screenshot Architecture Bento) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-[#082015] border border-emerald-500/25 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 font-mono">01 · STATE FILING</span>
                <Globe className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Articles of Organization</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct integration with state corporate registries across Wyoming, Delaware, New Mexico, Florida, and UK Companies House with automated name checks.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-300 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/20">
                ✓ Secretary of State Certified
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#082015] border border-emerald-500/25 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 font-mono">02 · IRS & FINTECH</span>
                <CreditCard className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white">EIN & Banking Underwriting</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct IRS CP575 dispatch and API handshakes with Mercury, Wise Business, and Relay for frictionless non-resident account setup.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-300 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/20">
                ✓ 98.4% Banking Acceptance Rate
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#082015] border border-emerald-500/25 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 font-mono">03 · COMPLIANCE</span>
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white">FinCEN BOI & Annual Reports</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Automated Beneficial Ownership Information filing under the Corporate Transparency Act, state franchise tax alerts, and registered agent coverage.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-300 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-500/20">
                ✓ 100% Legal Immunity Protection
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CUSTOM PRICING / VOLUME DISCOUNTS (Exact Match to Screenshot)          */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#031009] border-t border-emerald-950 text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
            PARTNER PRICING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Custom Pricing, with Volume Discounts
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Whether your platform launches 10 or 500 companies a month, our wholesale tier pricing and revenue share models maximize your platform margins.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setPartnerModalOpen(true)}
              className="px-8 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-105"
            >
              Request Partner Rate Card →
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE DETAILS YOUR TEAM NEEDS TO KNOW (FAQ Accordion - Screenshot Match)  */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#04140c] border-t border-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                PARTNER FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
                The details your team <br />
                <span className="text-emerald-400">needs to know</span>
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Straight answers about integration delivery, licensing, commissions, and customer ownership.
              </p>
            </div>

            {/* Right Column Accordion (7 Cols) */}
            <div className="lg:col-span-7 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;

                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-[#082216] border border-emerald-500/20 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-emerald-300 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-emerald-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-0 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-emerald-900/30">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BOTTOM CTA BANNER (Exact Match to Screenshot)                          */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#031009] border-t border-emerald-950">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          <div className="rounded-3xl bg-gradient-to-r from-[#082619] via-[#0b3825] to-[#082619] border border-emerald-500/40 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="h-3 w-3" />
              <span>GET STARTED</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display">
              Add AI-powered formation to your <br />
              platform. <span className="text-emerald-400">Unlock new revenue.</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
              Talk to our enterprise partnerships team and go live in as little as 48 hours.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setPartnerModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-105"
              >
                Schedule Partner Call →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. PARTNER APPLICATION / DEMO MODAL                                       */}
      {/* ========================================================================= */}
      {partnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#082216] border border-emerald-500/40 p-6 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setPartnerModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-full bg-white/5"
            >
              <X className="h-5 w-5" />
            </button>

            {partnerSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="h-16 w-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Partner Application Received!</h3>
                <p className="text-xs text-gray-300">
                  Our B2B Partnerships Director will contact you within 4 business hours to share API credentials and our wholesale rate card.
                </p>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div className="border-b border-emerald-900 pb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    B2B PARTNERSHIP PROGRAM
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">Schedule Partner Call & Demo</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Company / Platform</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme SaaS"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/40 border border-emerald-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/40 border border-emerald-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/40 border border-emerald-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-1 font-semibold">WhatsApp / Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-black/40 border border-emerald-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="text-xs">
                  <label className="block text-gray-300 mb-1 font-semibold">Expected Monthly Volume</label>
                  <select
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-black/40 border border-emerald-500/30 text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="1 - 10 companies / month">1 - 10 companies / month</option>
                    <option value="10 - 50 companies / month">10 - 50 companies / month</option>
                    <option value="50 - 200 companies / month">50 - 200 companies / month</option>
                    <option value="200+ companies / month">200+ companies / month (Enterprise API)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Partnership Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
