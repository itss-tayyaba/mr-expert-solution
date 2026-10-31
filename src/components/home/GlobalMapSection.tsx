import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { USMapVector } from '../shared/USMapVector';
import { 
  Building2, Globe, Shield, Sparkles, ArrowRight, 
  CheckCircle2, Star, Zap, DollarSign, Clock 
} from 'lucide-react';

export const GlobalMapSection: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<'WY' | 'DE' | 'NM' | 'FL' | 'UK'>('WY');

  const hubDetails = {
    WY: {
      name: "Wyoming LLC",
      flag: "🤠",
      tagline: "Top Choice for Non-US Founders",
      filingFee: "$100",
      annualFee: "$60 / yr",
      incomeTax: "0% (Zero State Income Tax)",
      privacy: "100% Anonymous Allowed",
      bankApproval: "2-3 Days (Mercury / Wise)",
      bestFor: "E-Commerce, Amazon FBA, Dropshipping & Consulting",
      highlight: "Lowest ongoing maintenance cost in the United States."
    },
    DE: {
      name: "Delaware LLC",
      flag: "⚖️",
      tagline: "Preferred by US Venture Capital & Tech",
      filingFee: "$90",
      annualFee: "$300 flat / yr",
      incomeTax: "0% on out-of-state revenue",
      privacy: "Anonymous Allowed",
      bankApproval: "2-3 Days (Mercury / Brex)",
      bestFor: "SaaS Platforms, Tech Startups, Venture-Backed Firms",
      highlight: "Protected by the world-famous Court of Chancery corporate case law."
    },
    NM: {
      name: "New Mexico LLC",
      flag: "🏜️",
      tagline: "Ultimate Budget & Privacy Choice",
      filingFee: "$50",
      annualFee: "$0 / yr (No Annual Report)",
      incomeTax: "0% on out-of-state income",
      privacy: "Strict Anonymous Protection",
      bankApproval: "3-4 Days (Relay / Wise)",
      bestFor: "Bootstrapped Agencies, Digital Freelancers, Holding",
      highlight: "$0 annual report fee — the most economical recurring cost."
    },
    FL: {
      name: "Florida LLC",
      flag: "🌴",
      tagline: "Global Trade, Tourism & Media Hub",
      filingFee: "$125",
      annualFee: "$138.75 / yr",
      incomeTax: "0% Personal State Income Tax",
      privacy: "Public Officers Required",
      bankApproval: "3-5 Days (Mercury / Chase)",
      bestFor: "Import/Export, Latin American Trade, Tourism, Media",
      highlight: "Major banking center for Latin American and transatlantic merchants."
    },
    UK: {
      name: "United Kingdom LTD",
      flag: "🇬🇧",
      tagline: "London Companies House Incorporation",
      filingFee: "From £20",
      annualFee: "£34 Confirmation Stmt",
      incomeTax: "Standard UK Corp Tax (19-25%)",
      privacy: "Public Registry",
      bankApproval: "24-48 Hours (Wise UK / Tide)",
      bestFor: "Stripe UK, European Clients, London Prestige",
      highlight: "Super-fast 24h formation with instant UTR and digital company registry."
    }
  };

  const currentHub = hubDetails[selectedHub];

  const liveEvents = [
    { text: "Wyoming LLC & EIN issued for founder in Dubai", time: "2m ago" },
    { text: "Mercury US Bank account approved for Berlin agency", time: "5m ago" },
    { text: "UK LTD incorporated at Companies House London", time: "11m ago" },
    { text: "Delaware Tech LLC registered for SaaS founder in Singapore", time: "18m ago" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-background relative overflow-hidden border-t border-emerald-950/5">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="section-badge">
            <Globe className="h-3.5 w-3.5" />
            Interactive Global Formation Hub
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Activating Global Presence Across <span className="text-gradient">The USA & UK</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Click on key formation hubs below to inspect real state filing fees, tax laws, and banking timelines before launching your company.
          </p>

          {/* Hub Switcher Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {(Object.keys(hubDetails) as Array<keyof typeof hubDetails>).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedHub(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedHub === key
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/25 scale-105'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200/80'
                }`}
              >
                <span>{hubDetails[key].flag}</span>
                <span>{hubDetails[key].name.split(' ')[0]}</span>
                {key === 'WY' && (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-900 font-bold hidden sm:inline">
                    Top
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Map & Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Interactive Map Canvas (Left 7 Cols) */}
          <div className="lg:col-span-7 relative rounded-3xl bg-gradient-to-b from-[#0a4e34] via-[#073c27] to-[#04281a] p-6 sm:p-10 shadow-2xl border border-emerald-800 text-white overflow-hidden">
            
            {/* Grid coordinate overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px'
              }}
            />

            {/* Ambient lighting */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-400/20 blur-3xl" />

            <div className="relative">
              
              {/* Map Title / Status Pill */}
              <div className="flex items-center justify-between mb-4 text-xs font-mono">
                <span className="flex items-center gap-2 text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ACTIVE FORMATION NODES</span>
                </span>
                <span className="text-[11px] text-emerald-200/60 uppercase">
                  50 States Covered
                </span>
              </div>

              {/* The Glowing Vector Map */}
              <div className="relative drop-shadow-[0_0_25px_rgba(255,255,255,0.45)]">
                <USMapVector className="w-full h-auto max-h-[44vh] object-contain" />

                {/* Wyoming Pulsing Pin */}
                <button
                  onClick={() => setSelectedHub('WY')}
                  className={`absolute top-[28%] left-[28%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform ${selectedHub === 'WY' ? 'scale-125' : 'hover:scale-110'}`}
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white shadow-lg"></span>
                  </span>
                  <span className="absolute left-5 top-0 text-[10px] font-bold font-mono text-emerald-950 bg-white/95 px-2 py-0.5 rounded shadow-md whitespace-nowrap">
                    Wyoming (0% Tax)
                  </span>
                </button>

                {/* New Mexico Pulsing Pin */}
                <button
                  onClick={() => setSelectedHub('NM')}
                  className={`absolute top-[48%] left-[29%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform ${selectedHub === 'NM' ? 'scale-125' : 'hover:scale-110'}`}
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white shadow-lg"></span>
                  </span>
                  <span className="absolute left-5 top-0 text-[10px] font-bold font-mono text-emerald-950 bg-white/95 px-2 py-0.5 rounded shadow-md whitespace-nowrap">
                    Albuquerque HQ
                  </span>
                </button>

                {/* Delaware Pulsing Pin */}
                <button
                  onClick={() => setSelectedHub('DE')}
                  className={`absolute top-[34%] left-[84%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform ${selectedHub === 'DE' ? 'scale-125' : 'hover:scale-110'}`}
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white shadow-lg"></span>
                  </span>
                  <span className="absolute right-5 top-0 text-[10px] font-bold font-mono text-emerald-950 bg-white/95 px-2 py-0.5 rounded shadow-md whitespace-nowrap">
                    Delaware VC
                  </span>
                </button>

                {/* Florida Pulsing Pin */}
                <button
                  onClick={() => setSelectedHub('FL')}
                  className={`absolute top-[78%] left-[78%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform ${selectedHub === 'FL' ? 'scale-125' : 'hover:scale-110'}`}
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white shadow-lg"></span>
                  </span>
                </button>
              </div>

              {/* Live Ticker bar below map */}
              <div className="mt-6 pt-4 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-200/80">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  Live Activity: {liveEvents[0].text}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {liveEvents[0].time}
                </span>
              </div>

            </div>
          </div>

          {/* Inspector Panel (Right 5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-emerald-200 p-6 sm:p-7 shadow-xl space-y-5">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{currentHub.flag}</span>
                <div>
                  <h3 className="text-xl font-bold font-display text-gray-900">
                    {currentHub.name}
                  </h3>
                  <div className="text-xs text-emerald-700 font-semibold">
                    {currentHub.tagline}
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  State Filing Fee
                </div>
                <div className="text-xl font-black text-gray-900 mt-0.5">
                  {currentHub.filingFee}
                </div>
                <div className="text-[10px] text-emerald-600 font-semibold">One-time state cost</div>
              </div>

              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Annual Report Fee
                </div>
                <div className="text-xl font-black text-emerald-800 mt-0.5">
                  {currentHub.annualFee}
                </div>
                <div className="text-[10px] text-gray-500">Government renewal</div>
              </div>

              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  State Income Tax
                </div>
                <div className="text-xs font-bold text-emerald-800 mt-1">
                  {currentHub.incomeTax}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
                  Bank Account SLA
                </div>
                <div className="text-xs font-bold text-gray-900 mt-1">
                  {currentHub.bankApproval}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-gray-700">
                <div className="font-bold text-emerald-900 mb-0.5">Best Suited For:</div>
                <div>{currentHub.bestFor}</div>
              </div>

              <div className="text-[11px] text-gray-500 italic">
                "{currentHub.highlight}"
              </div>
            </div>

            {/* Direct Formation Button */}
            <div className="pt-2">
              <Link
                to={
                  selectedHub === 'UK'
                    ? '/pricing?tab=uk'
                    : `/pricing?tab=usa&state=${selectedHub}`
                }
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <span>Launch {currentHub.name} Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
