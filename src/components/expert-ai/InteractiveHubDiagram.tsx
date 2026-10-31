import React, { useState } from 'react';
import { 
  FileText, Search, FileCheck2, Shield, Check, 
  Sparkles, ExternalLink, ShieldCheck, Zap, Globe, CreditCard
} from 'lucide-react';

export const InteractiveHubDiagram: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // SVG Circuit Path Definitions (Scaled ViewBox: 0 0 940 520)
  const paths = {
    topLeft: "M 370 250 H 335 Q 320 250 320 235 V 160 Q 320 145 305 145 H 285",
    bottomLeft: "M 370 270 H 335 Q 320 270 320 285 V 360 Q 320 375 305 375 H 285",
    topCenter: "M 470 230 V 195",
    bottomCenter: "M 470 290 V 325",
    topRight: "M 570 250 H 605 Q 620 250 620 235 V 160 Q 620 145 635 145 H 655",
    bottomRight: "M 570 270 H 605 Q 620 270 620 285 V 360 Q 620 375 635 375 H 655",
  };

  return (
    <div className="relative w-full max-w-[960px] mx-auto my-6 sm:my-8 select-none">
      
      {/* Circuit Animation Styles */}
      <style>{`
        @keyframes circuitDashFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -90;
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.6;
            filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.7));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 20px rgba(52, 211, 153, 0.95));
          }
        }
        .circuit-line-moving {
          stroke-dasharray: 16 64;
          animation: circuitDashFlow 2.2s linear infinite;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* COMPACT DESKTOP VIEW: SVG Moving Lines (>= 1024px)                       */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-full h-[520px] rounded-3xl bg-[#04110a] border border-emerald-950/80 p-4 shadow-2xl overflow-hidden">
        
        {/* Coordinate Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />

        {/* Ambient Center Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[220px] rounded-full bg-emerald-500/15 blur-[80px]" />

        {/* ========================================================================= */}
        {/* SVG CIRCUIT BUS NETWORK & MOVING LINES (ViewBox 940 x 520)                */}
        {/* ========================================================================= */}
        <svg
          viewBox="0 0 940 520"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <defs>
            <linearGradient id="laserGradCompact" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#6ee7b7" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>

            <filter id="neonGreenGlowCompact" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render All 6 Circuit Lines */}
          {Object.entries(paths).map(([key, d]) => {
            const isHovered = hoveredCard === key;

            return (
              <g key={key} className="transition-opacity duration-300">
                {/* 1. Underlying Base Circuit Track */}
                <path
                  d={d}
                  fill="none"
                  stroke="#07331e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* 2. Soft Ambient Halo */}
                <path
                  d={d}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="5"
                  strokeOpacity={isHovered ? "0.45" : "0.15"}
                  strokeLinecap="round"
                  filter="url(#neonGreenGlowCompact)"
                />

                {/* 3. The Moving Circuit Line (Dash-Flow animation) */}
                <path
                  d={d}
                  fill="none"
                  stroke="url(#laserGradCompact)"
                  strokeWidth={isHovered ? "2.8" : "2"}
                  strokeLinecap="round"
                  className="circuit-line-moving"
                  filter="url(#neonGreenGlowCompact)"
                />

                {/* 4. Traveling Photon Light Beams Moving Along the Path */}
                <circle r="3" fill="#ffffff" filter="url(#neonGreenGlowCompact)">
                  <animateMotion
                    path={d}
                    dur={isHovered ? "1.2s" : "2.2s"}
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>

                <circle r="1.8" fill="#34d399">
                  <animateMotion
                    path={d}
                    dur={isHovered ? "1.2s" : "2.2s"}
                    begin="0.7s"
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>
              </g>
            );
          })}

          {/* Connection Terminal Pins at Card Entry Points */}
          <rect x="281" y="142" width="8" height="6" rx="1.5" fill="#34d399" filter="url(#neonGreenGlowCompact)" />
          <rect x="466" y="192" width="8" height="5" rx="1.5" fill="#34d399" filter="url(#neonGreenGlowCompact)" />
          <rect x="651" y="142" width="8" height="6" rx="1.5" fill="#34d399" filter="url(#neonGreenGlowCompact)" />
          <rect x="281" y="372" width="8" height="6" rx="1.5" fill="#34d399" filter="url(#neonGreenGlowCompact)" />
          <rect x="466" y="323" width="8" height="5" rx="1.5" fill="#34d399" filter="url(#neonGreenGlowCompact)" />
          <rect x="651" y="372" width="8" height="6" rx="1.5" fill="#34d399" filter="url(#neonGreenGlowCompact)" />

        </svg>

        {/* ========================================================================= */}
        {/* COMPACT CENTER HUB: "Mr. Expert Solution"                                 */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 left-[370px] top-[230px] w-[200px] h-[60px] flex items-center justify-center pointer-events-auto"
        >
          {/* Radiant Pulsing Backglow */}
          <div className="absolute inset-0 rounded-2xl bg-emerald-500/25 blur-lg animate-pulse" />

          {/* Center Pill / Box */}
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#0a2318] to-[#04130c] border-2 border-emerald-400 shadow-[0_0_22px_rgba(16,185,129,0.7)] flex items-center justify-center px-3 py-1.5 group cursor-pointer transition-transform duration-300 hover:scale-105">
            <span className="font-extrabold text-sm sm:text-base text-white tracking-tight font-display drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Mr. Expert Solution
            </span>

            {/* Glowing Corner Accents */}
            <span className="absolute -top-1 -left-1 w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_5px_#34d399]" />
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_5px_#34d399]" />
            <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_5px_#34d399]" />
            <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_5px_#34d399]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6 SURROUNDING CARDS (Compact Dimensions: 260px x 170px)                   */}
        {/* ========================================================================= */}

        {/* 1. TOP-LEFT: Tell Us Your Plan */}
        <div
          onMouseEnter={() => setHoveredCard('topLeft')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[25px] top-[25px] w-[260px] h-[170px] rounded-2xl bg-[#081f15]/95 border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'topLeft' 
              ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              Tell Us Your Plan
            </h3>
            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 leading-snug">
              One free call. We tell you exactly which company, state and setup fits what you want to build.
            </p>
          </div>

          {/* Visual: US Map with WY & DE glowing beacons + flight arc */}
          <div className="relative w-full h-16 rounded-xl bg-black/40 border border-emerald-950 p-1 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 200 110" className="w-full h-full text-emerald-800/40 stroke-emerald-600/40 stroke-[0.8] fill-emerald-950/50">
              <path d="M 25 25 L 55 25 L 85 28 L 120 28 L 140 35 L 170 30 L 175 45 L 165 70 L 140 75 L 120 95 L 90 90 L 60 70 L 30 70 L 20 40 Z" />
              <circle cx="65" cy="42" r="3.5" fill="#34d399" className="animate-pulse shadow-[0_0_6px_#34d399]" />
              <text x="58" y="55" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">WY</text>
              <circle cx="155" cy="50" r="3" fill="#34d399" className="shadow-[0_0_6px_#34d399]" />
              <text x="160" y="54" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">DE</text>
              <path d="M 68 42 Q 110 20 152 48" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>

        {/* 2. TOP-CENTER: Send Your Details */}
        <div
          onMouseEnter={() => setHoveredCard('topCenter')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[340px] top-[25px] w-[260px] h-[170px] rounded-2xl bg-[#081f15]/95 border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'topCenter' 
              ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              Send Your Details
            </h3>
            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 leading-snug">
              Upload your basics in our secure portal. No mountain of paperwork, no office visits.
            </p>
          </div>

          {/* Visual: Masked EIN badge */}
          <div className="w-full rounded-xl bg-black/50 border border-emerald-950 p-2 text-center space-y-1">
            <span className="inline-block px-2 py-0.5 rounded-full text-[8px] font-semibold text-gray-400 bg-white/5 border border-white/10 uppercase tracking-wider">
              Non-US founder
            </span>
            <div className="py-0.5 px-2 rounded-lg bg-gradient-to-r from-emerald-950/80 via-black to-emerald-950/80 border border-emerald-500/30">
              <span className="font-mono text-xs sm:text-sm font-extrabold text-white tracking-[0.2em] drop-shadow-[0_0_6px_rgba(52,211,153,0.5)]">
                93••••••4271
              </span>
            </div>
            <div className="text-[8px] font-mono text-emerald-400">
              CP-575 • IRS confirmation
            </div>
          </div>
        </div>

        {/* 3. TOP-RIGHT: Registered */}
        <div
          onMouseEnter={() => setHoveredCard('topRight')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[655px] top-[25px] w-[260px] h-[170px] rounded-2xl bg-[#081f15]/95 border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'topRight' 
              ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              Registered
            </h3>
            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 leading-snug">
              Included in every formation. All 50 states.
            </p>
          </div>

          {/* Visual: Shield with Document -> Search -> Verified Document Flow */}
          <div className="relative w-full h-16 rounded-xl bg-black/40 border border-emerald-950 flex items-center justify-center overflow-hidden">
            <div className="relative flex items-center justify-center gap-2 z-10">
              <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                <FileText className="h-3 w-3" />
              </div>
              <span className="text-[10px] text-emerald-500 font-bold">→</span>
              <div className="p-1.5 rounded-lg bg-emerald-500 text-slate-950 shadow-[0_0_10px_#34d399]">
                <Search className="h-3 w-3 stroke-[2.5]" />
              </div>
              <span className="text-[10px] text-emerald-500 font-bold">→</span>
              <div className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                <FileCheck2 className="h-3 w-3" />
              </div>
            </div>
            <Shield className="absolute inset-0 m-auto h-14 w-14 text-emerald-900/20 stroke-[1]" />
          </div>
        </div>

        {/* 4. BOTTOM-LEFT: Go Live */}
        <div
          onMouseEnter={() => setHoveredCard('bottomLeft')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[25px] top-[325px] w-[260px] h-[170px] rounded-2xl bg-[#081f15]/95 border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'bottomLeft' 
              ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[9px] font-bold flex items-center gap-0.5">
                <span>↗</span> Go
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                Go Live
              </h3>
            </div>
            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-1 leading-snug">
              Documents, EIN, bank and payments in your hands — everything you need to take your first order.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/40 border border-emerald-900/50 text-[10px]">
              <span className="text-gray-300">Mercury Checking</span>
              <span className="text-emerald-400 font-bold font-mono">✓ Ready</span>
            </div>
            <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/40 border border-emerald-900/50 text-[10px]">
              <span className="text-gray-300">Stripe Payments</span>
              <span className="text-emerald-400 font-bold font-mono">✓ Active</span>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM-CENTER: We Do the Filing */}
        <div
          onMouseEnter={() => setHoveredCard('bottomCenter')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[340px] top-[325px] w-[260px] h-[170px] rounded-2xl bg-[#081f15]/95 border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'bottomCenter' 
              ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              We Do the Filing
            </h3>
            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 leading-snug">
              Articles of Organization prepared, state fees cleared, stamped and filed with expedited dispatch.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-950 space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-gray-400">Filing Status</span>
              <span className="text-emerald-400 font-mono font-bold">100% Expedited</span>
            </div>
            <div className="w-full h-1 rounded-full bg-emerald-950 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_6px_#34d399]" />
            </div>
            <div className="text-[9px] text-gray-400 flex items-center justify-between font-mono">
              <span>Secretary of State</span>
              <span className="text-emerald-400">Certified</span>
            </div>
          </div>
        </div>

        {/* 6. BOTTOM-RIGHT: Annual Reports */}
        <div
          onMouseEnter={() => setHoveredCard('bottomRight')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[655px] top-[325px] w-[260px] h-[170px] rounded-2xl bg-[#081f15]/95 border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'bottomRight' 
              ? 'border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              Annual Reports
            </h3>
            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-0.5 leading-snug">
              Automated annual reports filling across every state.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-950 space-y-1">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-gray-300">FinCEN BOI Registry</span>
              <span className="text-emerald-400 font-bold font-mono">✓ Compliant</span>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-gray-300">Franchise Tax Alerts</span>
              <span className="text-emerald-400 font-bold font-mono">0 Penalties</span>
            </div>
            <div className="text-[8px] text-gray-500 font-mono text-center pt-0.5 border-t border-emerald-950">
              Perpetual Good Standing Guarantee
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET COMPACT VIEW (< 1024px)                                   */}
      {/* ========================================================================= */}
      <div className="lg:hidden space-y-3.5">
        
        {/* Center Radiant Hub on Mobile */}
        <div className="relative p-5 rounded-2xl bg-gradient-to-b from-[#0a2318] to-[#04130c] border-2 border-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.4)] text-center my-4">
          <div className="font-extrabold text-lg text-white font-display">
            Mr. Expert Solution
          </div>
          <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
            Automated Global Formation Core
          </div>
        </div>

        {/* 6 Responsive Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          <div className="p-4 rounded-xl bg-[#081f15] border border-emerald-500/25 space-y-1.5">
            <h3 className="text-sm font-bold text-white">Tell Us Your Plan</h3>
            <p className="text-[11px] text-gray-400">
              One free call. We tell you exactly which company, state and setup fits what you want to build.
            </p>
            <div className="pt-1 text-[11px] font-mono text-emerald-400">
              ✓ WY & DE State Routing
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#081f15] border border-emerald-500/25 space-y-1.5">
            <h3 className="text-sm font-bold text-white">Send Your Details</h3>
            <p className="text-[11px] text-gray-400">
              Upload your basics in our secure portal. No mountain of paperwork, no office visits.
            </p>
            <div className="pt-1 text-[11px] font-mono text-emerald-400">
              ✓ 93••••••4271 CP-575 EIN
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#081f15] border border-emerald-500/25 space-y-1.5">
            <h3 className="text-sm font-bold text-white">Registered</h3>
            <p className="text-[11px] text-gray-400">
              Included in every formation. All 50 states.
            </p>
            <div className="pt-1 text-[11px] font-mono text-emerald-400">
              ✓ Full 50-State Registered Agent
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#081f15] border border-emerald-500/25 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[9px] font-bold">
                ↗ Go
              </span>
              <h3 className="text-sm font-bold text-white">Go Live</h3>
            </div>
            <p className="text-[11px] text-gray-400">
              Documents, EIN, bank and payments in your hands — everything you need to take your first order.
            </p>
            <div className="pt-1 text-[11px] font-mono text-emerald-400">
              ✓ Mercury + Stripe Active
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#081f15] border border-emerald-500/25 space-y-1.5">
            <h3 className="text-sm font-bold text-white">We Do the Filing</h3>
            <p className="text-[11px] text-gray-400">
              Articles of Organization prepared, state fees cleared, stamped and filed with expedited dispatch.
            </p>
            <div className="pt-1 text-[11px] font-mono text-emerald-400">
              ✓ Secretary of State Certified
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#081f15] border border-emerald-500/25 space-y-1.5">
            <h3 className="text-sm font-bold text-white">Annual Reports</h3>
            <p className="text-[11px] text-gray-400">
              Automated annual reports filling across every state.
            </p>
            <div className="pt-1 text-[11px] font-mono text-emerald-400">
              ✓ FinCEN BOI Compliant
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
