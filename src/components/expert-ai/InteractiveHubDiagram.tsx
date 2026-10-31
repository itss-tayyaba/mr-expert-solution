import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Search, FileCheck2, ArrowRight, Shield, Check, 
  Sparkles, ExternalLink, ShieldCheck, Zap, Globe, CreditCard
} from 'lucide-react';

export const InteractiveHubDiagram: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // SVG Circuit Path Definitions (ViewBox: 0 0 1100 680)
  const paths = {
    topLeft: "M 425 330 H 380 Q 365 330 365 315 V 205 Q 365 190 350 190 H 340",
    bottomLeft: "M 425 350 H 380 Q 365 350 365 365 V 455 Q 365 470 350 470 H 340",
    topCenter: "M 550 300 V 260",
    bottomCenter: "M 550 380 V 420",
    topRight: "M 675 330 H 720 Q 735 330 735 315 V 205 Q 735 190 750 190 H 760",
    bottomRight: "M 675 350 H 720 Q 735 350 735 365 V 455 Q 735 470 750 470 H 760",
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-12 select-none">
      
      {/* Circuit Animation Styles */}
      <style>{`
        @keyframes circuitDashFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -120;
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.6;
            filter: drop-shadow(0 0 12px rgba(16, 185, 129, 0.8));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 25px rgba(52, 211, 153, 1));
          }
        }
        .circuit-line-moving {
          stroke-dasharray: 20 80;
          animation: circuitDashFlow 2.4s linear infinite;
        }
        .circuit-pulse-beacon {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW: Unified Interactive Board with SVG Moving Lines (>= 1024px) */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-full h-[680px] rounded-3xl bg-[#04110a] border border-emerald-950/80 p-5 shadow-2xl overflow-hidden">
        
        {/* Coordinate Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Ambient Center Glow behind Mr. Expert Solution hub */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[300px] rounded-full bg-emerald-500/15 blur-[90px]" />

        {/* ========================================================================= */}
        {/* SVG CIRCUIT BUS NETWORK & MOVING LINES                                    */}
        {/* ========================================================================= */}
        <svg
          viewBox="0 0 1100 680"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <defs>
            {/* Emerald Laser Gradient */}
            <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#6ee7b7" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>

            {/* Glowing filter */}
            <filter id="neonGreenGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="hubGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="8" result="blur" />
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
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* 2. Soft Ambient Halo */}
                <path
                  d={d}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="6"
                  strokeOpacity={isHovered ? "0.45" : "0.15"}
                  strokeLinecap="round"
                  filter="url(#neonGreenGlow)"
                />

                {/* 3. The Moving Circuit Line (Dash-Flow animation) */}
                <path
                  d={d}
                  fill="none"
                  stroke="url(#laserGrad)"
                  strokeWidth={isHovered ? "3.2" : "2.4"}
                  strokeLinecap="round"
                  className="circuit-line-moving"
                  filter="url(#neonGreenGlow)"
                />

                {/* 4. Traveling Photon Light Beams Moving Along the Path */}
                <circle r="3.5" fill="#ffffff" filter="url(#neonGreenGlow)">
                  <animateMotion
                    path={d}
                    dur={isHovered ? "1.4s" : "2.6s"}
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>

                <circle r="2" fill="#34d399">
                  <animateMotion
                    path={d}
                    dur={isHovered ? "1.4s" : "2.6s"}
                    begin="0.8s"
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>
              </g>
            );
          })}

          {/* Connection Terminal Pins at Card Entry Points (Matches Screenshot) */}
          {/* Top-Left Terminal */}
          <rect x="336" y="186" width="10" height="8" rx="2" fill="#34d399" filter="url(#neonGreenGlow)" />
          {/* Top-Center Terminal */}
          <rect x="545" y="256" width="10" height="7" rx="2" fill="#34d399" filter="url(#neonGreenGlow)" />
          {/* Top-Right Terminal */}
          <rect x="754" y="186" width="10" height="8" rx="2" fill="#34d399" filter="url(#neonGreenGlow)" />
          {/* Bottom-Left Terminal */}
          <rect x="336" y="466" width="10" height="8" rx="2" fill="#34d399" filter="url(#neonGreenGlow)" />
          {/* Bottom-Center Terminal */}
          <rect x="545" y="417" width="10" height="7" rx="2" fill="#34d399" filter="url(#neonGreenGlow)" />
          {/* Bottom-Right Terminal */}
          <rect x="754" y="466" width="10" height="8" rx="2" fill="#34d399" filter="url(#neonGreenGlow)" />

        </svg>

        {/* ========================================================================= */}
        {/* CENTER HUB: "Mr. Expert Solution" (Exact Match to Screenshot Center)      */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 left-[425px] top-[300px] w-[250px] h-[80px] flex items-center justify-center pointer-events-auto"
        >
          {/* Radiant Pulsing Backglow */}
          <div className="absolute inset-0 rounded-2xl bg-emerald-500/25 blur-xl animate-pulse" />

          {/* Center Pill / Box */}
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#0a2318] to-[#04130c] border-2 border-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.7)] flex items-center justify-center px-4 py-2 group cursor-pointer transition-transform duration-300 hover:scale-105">
            <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight font-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Mr. Expert Solution
            </span>

            {/* Glowing Corner Accents */}
            <span className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399]" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399]" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6 SURROUNDING CARDS (Coordinates Synchronized with Circuit Path Anchors)   */}
        {/* ========================================================================= */}

        {/* 1. TOP-LEFT: Tell Us Your Plan */}
        <div
          onMouseEnter={() => setHoveredCard('topLeft')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[20px] top-[30px] w-[320px] h-[230px] rounded-3xl bg-[#081f15]/90 border transition-all duration-300 p-5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'topLeft' 
              ? 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              Tell Us Your Plan
            </h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              One free call. We tell you exactly which company, state and setup fits what you want to build.
            </p>
          </div>

          {/* Visual: US Map with WY & DE glowing beacons + flight arc */}
          <div className="relative w-full h-24 mt-2 rounded-xl bg-black/40 border border-emerald-950 p-2 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 200 110" className="w-full h-full text-emerald-800/40 stroke-emerald-600/40 stroke-[0.8] fill-emerald-950/50">
              {/* Simplified US Continental Path */}
              <path d="M 25 25 L 55 25 L 85 28 L 120 28 L 140 35 L 170 30 L 175 45 L 165 70 L 140 75 L 120 95 L 90 90 L 60 70 L 30 70 L 20 40 Z" />
              {/* WY Dot */}
              <circle cx="65" cy="42" r="3.5" fill="#34d399" className="animate-pulse shadow-[0_0_8px_#34d399]" />
              <text x="58" y="55" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">WY</text>
              {/* DE Dot */}
              <circle cx="155" cy="50" r="3" fill="#34d399" className="shadow-[0_0_8px_#34d399]" />
              <text x="160" y="54" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">DE</text>
              {/* Arc between WY and DE */}
              <path d="M 68 42 Q 110 20 152 48" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>

        {/* 2. TOP-CENTER: Send Your Details */}
        <div
          onMouseEnter={() => setHoveredCard('topCenter')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[390px] top-[30px] w-[320px] h-[230px] rounded-3xl bg-[#081f15]/90 border transition-all duration-300 p-5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'topCenter' 
              ? 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              Send Your Details
            </h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Upload your basics in our secure portal. No mountain of paperwork, no office visits.
            </p>
          </div>

          {/* Visual: Masked EIN badge container matching screenshot */}
          <div className="w-full rounded-2xl bg-black/50 border border-emerald-950 p-3 text-center space-y-1.5 mt-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[9px] font-semibold text-gray-400 bg-white/5 border border-white/10 uppercase tracking-wider">
              Non-US founder
            </span>

            <div className="py-1 px-3 rounded-xl bg-gradient-to-r from-emerald-950/80 via-black to-emerald-950/80 border border-emerald-500/30">
              <span className="font-mono text-base font-extrabold text-white tracking-[0.25em] drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
                93••••••4271
              </span>
            </div>

            <div className="text-[9px] font-mono text-emerald-400">
              CP-575 • IRS confirmation
            </div>
          </div>
        </div>

        {/* 3. TOP-RIGHT: Registered */}
        <div
          onMouseEnter={() => setHoveredCard('topRight')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[760px] top-[30px] w-[320px] h-[230px] rounded-3xl bg-[#081f15]/90 border transition-all duration-300 p-5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'topRight' 
              ? 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              Registered
            </h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Included in every formation. All 50 states.
            </p>
          </div>

          {/* Visual: Shield with Document -> Search -> Verified Document Flow */}
          <div className="relative w-full h-24 mt-2 rounded-2xl bg-black/40 border border-emerald-950 flex items-center justify-center overflow-hidden">
            <div className="relative flex items-center justify-center gap-3 z-10">
              <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                <FileText className="h-4 w-4" />
              </div>
              <span className="text-xs text-emerald-500 font-bold">→</span>
              <div className="p-2.5 rounded-xl bg-emerald-500 text-slate-950 shadow-[0_0_12px_#34d399]">
                <Search className="h-4 w-4 stroke-[2.5]" />
              </div>
              <span className="text-xs text-emerald-500 font-bold">→</span>
              <div className="p-2 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                <FileCheck2 className="h-4 w-4" />
              </div>
            </div>

            {/* Subtle background shield outline */}
            <Shield className="absolute inset-0 m-auto h-20 w-20 text-emerald-900/20 stroke-[1]" />
          </div>
        </div>

        {/* 4. BOTTOM-LEFT: Go Live */}
        <div
          onMouseEnter={() => setHoveredCard('bottomLeft')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[20px] top-[420px] w-[320px] h-[230px] rounded-3xl bg-[#081f15]/90 border transition-all duration-300 p-5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'bottomLeft' 
              ? 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold flex items-center gap-1">
                <span className="text-[9px]">↗</span> Go
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                Go Live
              </h3>
            </div>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              Documents, EIN, bank and payments in your hands — everything you need to take your first order.
            </p>
          </div>

          {/* Visual: Ready status pills */}
          <div className="space-y-1.5 mt-2">
            <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/40 border border-emerald-900/50 text-[11px]">
              <span className="text-gray-300 font-medium">Mercury Checking</span>
              <span className="text-emerald-400 font-bold font-mono">✓ Ready</span>
            </div>
            <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/40 border border-emerald-900/50 text-[11px]">
              <span className="text-gray-300 font-medium">Stripe Merchant API</span>
              <span className="text-emerald-400 font-bold font-mono">✓ Active</span>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM-CENTER: We Do the Filing */}
        <div
          onMouseEnter={() => setHoveredCard('bottomCenter')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[390px] top-[420px] w-[320px] h-[230px] rounded-3xl bg-[#081f15]/90 border transition-all duration-300 p-5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'bottomCenter' 
              ? 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              We Do the Filing
            </h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Articles of Organization prepared, state fees cleared, stamped and filed with expedited dispatch.
            </p>
          </div>

          {/* Visual: Seal + 100% Expedited Bar */}
          <div className="p-3 rounded-2xl bg-black/40 border border-emerald-950 space-y-2 mt-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-400">Filing Status</span>
              <span className="text-emerald-400 font-mono font-bold">100% Expedited</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-emerald-950 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_8px_#34d399]" />
            </div>
            <div className="text-[10px] text-gray-400 flex items-center justify-between font-mono">
              <span>Secretary of State</span>
              <span className="text-emerald-400">Certified</span>
            </div>
          </div>
        </div>

        {/* 6. BOTTOM-RIGHT: Annual Reports */}
        <div
          onMouseEnter={() => setHoveredCard('bottomRight')}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[760px] top-[420px] w-[320px] h-[230px] rounded-3xl bg-[#081f15]/90 border transition-all duration-300 p-5 flex flex-col justify-between z-20 group ${
            hoveredCard === 'bottomRight' 
              ? 'border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] bg-[#0c2a1d]' 
              : 'border-emerald-500/20 hover:border-emerald-500/40'
          }`}
        >
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
              Annual Reports
            </h3>
            <p className="text-xs text-gray-400 mt-1 leading-relaxed">
              Automated annual reports filling across every state.
            </p>
          </div>

          {/* Visual: Compliance status and FinCEN monitor */}
          <div className="p-3 rounded-2xl bg-black/40 border border-emerald-950 space-y-1.5 mt-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-300 font-medium">FinCEN BOI Registry</span>
              <span className="text-emerald-400 font-bold font-mono">✓ Compliant</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-300 font-medium">Franchise Tax Alerts</span>
              <span className="text-emerald-400 font-bold font-mono">0 Penalties</span>
            </div>
            <div className="text-[9px] text-gray-500 font-mono text-center pt-1 border-t border-emerald-950">
              Perpetual Good Standing Guarantee
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET RESPONSIVE VIEW (< 1024px)                                */}
      {/* ========================================================================= */}
      <div className="lg:hidden space-y-4">
        
        {/* Center Radiant Hub on Mobile */}
        <div className="relative p-6 rounded-3xl bg-gradient-to-b from-[#0a2318] to-[#04130c] border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] text-center my-6">
          <div className="font-extrabold text-xl text-white font-display">
            Mr. Expert Solution
          </div>
          <div className="text-xs text-emerald-400 font-medium mt-1">
            Automated Global Formation Core
          </div>
        </div>

        {/* 6 Responsive Stack Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-[#081f15] border border-emerald-500/25 space-y-2">
            <h3 className="text-base font-bold text-white">Tell Us Your Plan</h3>
            <p className="text-xs text-gray-400">
              One free call. We tell you exactly which company, state and setup fits what you want to build.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400">
              ✓ WY & DE State Routing
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-[#081f15] border border-emerald-500/25 space-y-2">
            <h3 className="text-base font-bold text-white">Send Your Details</h3>
            <p className="text-xs text-gray-400">
              Upload your basics in our secure portal. No mountain of paperwork, no office visits.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400">
              ✓ 93••••••4271 CP-575 EIN
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-[#081f15] border border-emerald-500/25 space-y-2">
            <h3 className="text-base font-bold text-white">Registered</h3>
            <p className="text-xs text-gray-400">
              Included in every formation. All 50 states.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400">
              ✓ Full 50-State Registered Agent
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-5 rounded-2xl bg-[#081f15] border border-emerald-500/25 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold">
                ↗ Go
              </span>
              <h3 className="text-base font-bold text-white">Go Live</h3>
            </div>
            <p className="text-xs text-gray-400">
              Documents, EIN, bank and payments in your hands — everything you need to take your first order.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400">
              ✓ Mercury + Stripe Active
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-5 rounded-2xl bg-[#081f15] border border-emerald-500/25 space-y-2">
            <h3 className="text-base font-bold text-white">We Do the Filing</h3>
            <p className="text-xs text-gray-400">
              Articles of Organization prepared, state fees cleared, stamped and filed with expedited dispatch.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400">
              ✓ Secretary of State Certified
            </div>
          </div>

          {/* Card 6 */}
          <div className="p-5 rounded-2xl bg-[#081f15] border border-emerald-500/25 space-y-2">
            <h3 className="text-base font-bold text-white">Annual Reports</h3>
            <p className="text-xs text-gray-400">
              Automated annual reports filling across every state.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400">
              ✓ FinCEN BOI Compliant
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
