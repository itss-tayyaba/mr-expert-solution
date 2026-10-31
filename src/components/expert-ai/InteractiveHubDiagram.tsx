import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Search, FileCheck2, Shield, Check, 
  Sparkles, ExternalLink, ShieldCheck, Zap, Globe, CreditCard,
  Play, Pause, RefreshCw, X, ArrowRight, Lock, Server, Cpu
} from 'lucide-react';

interface StageDetail {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  desc: string;
  apiEndpoint: string;
  specs: string[];
  deliverables: string[];
}

export const InteractiveHubDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedDetail, setSelectedDetail] = useState<StageDetail | null>(null);

  // 6 Stages Data
  const stages: StageDetail[] = [
    {
      id: 'topLeft',
      stepNumber: '01',
      title: 'Tell Us Your Plan',
      subtitle: 'State & Structure Routing',
      desc: 'AI evaluates your business model, non-resident founder nationality, and target market to recommend the optimal US state (Wyoming, Delaware, New Mexico) or UK LTD.',
      apiEndpoint: 'POST /v1/structure/evaluate',
      specs: ['0% State Income Tax (WY/NM)', 'Chancery Court Precedent (DE)', 'Zero Public Member Listing'],
      deliverables: ['Custom Entity Recommendation', 'State Fee Breakdown', 'Articles Blueprints']
    },
    {
      id: 'topCenter',
      stepNumber: '02',
      title: 'Send Your Details',
      subtitle: 'Zero-Paperwork Ingestion',
      desc: 'Seamless identity verification without visiting the US or mailing physical passports. Automated IRS Form SS-4 and CP-575 preparation.',
      apiEndpoint: 'POST /v1/identity/ingest',
      specs: ['Bank-Grade 256-Bit Vault', 'IRS Form SS-4 Generation', 'Non-Resident Exception Protocol'],
      deliverables: ['Encrypted Founder Dossier', 'CP-575 Pre-Validation', 'Name Clearance Check']
    },
    {
      id: 'topRight',
      stepNumber: '03',
      title: 'Registered Agent',
      subtitle: '50-State Legal Coverage',
      desc: 'Commercial registered agent service in Wyoming, Delaware, New Mexico, Florida, and London. Real-time document scanning and legal notice alerts.',
      apiEndpoint: 'POST /v1/agent/assign',
      specs: ['Physical Commercial Address', 'Same-Day Legal Notice Scanning', '100% Privacy Protection'],
      deliverables: ['1-Year Registered Agent Coverage', 'Virtual Office Mailroom', 'Secretary of State Filing Address']
    },
    {
      id: 'bottomLeft',
      stepNumber: '04',
      title: 'Go Live & Banking',
      subtitle: 'Fintech & Payment Stack',
      desc: 'Guaranteed introduction and fast-track approval with US business banking partners (Mercury, Wise Business, Relay) and Stripe payment gateway verification.',
      apiEndpoint: 'POST /v1/banking/provision',
      specs: ['Mercury US Checking & Savings', 'Wise Multi-Currency Borderless Account', 'Stripe & PayPal Merchant Gateways'],
      deliverables: ['US Checking Account Details', 'Virtual Debit Cards', 'Production Payment Webhooks']
    },
    {
      id: 'bottomCenter',
      stepNumber: '05',
      title: 'We Do the Filing',
      subtitle: 'Secretary of State Dispatch',
      desc: 'Articles of Organization drafted by licensed corporate specialists and transmitted directly via state electronic filing channels with expedited dispatch.',
      apiEndpoint: 'POST /v1/sos/filing/submit',
      specs: ['Direct State Electronic Integration', 'Expedited 24-48 Hour Clearance', 'Certified State Seal & Barcode'],
      deliverables: ['Stamped Articles of Organization', 'Official Certificate of Good Standing', 'Corporate Bylaws & Resolution']
    },
    {
      id: 'bottomRight',
      stepNumber: '06',
      title: 'Annual Reports & BOI',
      subtitle: 'Perpetual Compliance Shield',
      desc: 'Automated Beneficial Ownership Information (BOI) filing with FinCEN under the Corporate Transparency Act, state franchise tax tracking, and annual reporting.',
      apiEndpoint: 'POST /v1/compliance/boi/sync',
      specs: ['FinCEN Corporate Transparency Act (BOI)', 'State Annual Report Automation', 'Franchise Tax Alerts & Reminders'],
      deliverables: ['FinCEN BOIR Filing Transcript', 'State Good Standing Renewal', 'Perpetual Audit Immunity']
    }
  ];

  // Auto-play timeline simulation
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Scaled SVG Circuit Paths (ViewBox 940 x 520)
  const paths: Record<string, string> = {
    topLeft: "M 370 250 H 335 Q 320 250 320 235 V 160 Q 320 145 305 145 H 285",
    bottomLeft: "M 370 270 H 335 Q 320 270 320 285 V 360 Q 320 375 305 375 H 285",
    topCenter: "M 470 230 V 195",
    bottomCenter: "M 470 290 V 325",
    topRight: "M 570 250 H 605 Q 620 250 620 235 V 160 Q 620 145 635 145 H 655",
    bottomRight: "M 570 270 H 605 Q 620 270 620 285 V 360 Q 620 375 635 375 H 655",
  };

  const currentStage = stages[activeStep];

  return (
    <div className="relative w-full max-w-[980px] mx-auto my-6 sm:my-10 select-none">
      
      {/* Dynamic Ambient Laser Styles */}
      <style>{`
        @keyframes cyberStream {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -120;
          }
        }
        @keyframes corePulseHalo {
          0%, 100% {
            transform: scale(1);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.18);
            opacity: 0.85;
          }
        }
        @keyframes rippleRing {
          0% {
            transform: scale(0.85);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .circuit-laser-active {
          stroke-dasharray: 24 72;
          animation: cyberStream 1.6s linear infinite;
        }
        .circuit-laser-idle {
          stroke-dasharray: 14 60;
          animation: cyberStream 2.6s linear infinite;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. TOP INTERACTIVE CONTROL BAR                                            */}
      {/* ========================================================================= */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-300 uppercase">
            Formation Architecture Model
          </span>
          <span className="hidden sm:inline text-xs text-gray-500">•</span>
          <span className="hidden sm:inline text-[11px] font-mono text-gray-400">
            Active: <span className="text-white font-bold">{currentStage.title}</span> ({currentStage.stepNumber}/06)
          </span>
        </div>

        {/* Play / Pause / Reset Interactive Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5 transition-all shadow-sm"
            title={isAutoPlaying ? "Pause simulation" : "Play auto simulation"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="h-3 w-3 text-emerald-400 fill-emerald-400" />
                <span>Simulation Active</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3 text-emerald-400 fill-emerald-400" />
                <span>Resume Flow</span>
              </>
            )}
          </button>

          <button
            onClick={() => setActiveStep((prev) => (prev + 1) % stages.length)}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
            title="Next Step"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN INTERACTIVE MODEL CANVAS (Desktop & Laptop Viewport >= 1024px)     */}
      {/* ========================================================================= */}
      <div className="hidden lg:block relative w-full h-[530px] rounded-3xl bg-gradient-to-b from-[#061810]/95 via-[#030f08]/98 to-[#020b06] border border-emerald-500/30 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        
        {/* Subtle Cyber Grid Matrix */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Ambient Radial Core Light Glow */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[240px] rounded-full bg-emerald-500/15 blur-[90px]" />

        {/* ========================================================================= */}
        {/* SVG CIRCUIT BUS NETWORK & MULTI-LAYER MOVING LASER BEAMS                  */}
        {/* ========================================================================= */}
        <svg
          viewBox="0 0 940 520"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <defs>
            {/* Active Surge Gradient */}
            <linearGradient id="activeSurge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6ee7b7" stopOpacity="1" />
              <stop offset="100%" stopColor="#a7f3d0" stopOpacity="1" />
            </linearGradient>

            {/* Idle Laser Gradient */}
            <linearGradient id="idleLaser" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#047857" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0.6" />
            </linearGradient>

            <filter id="laserGlowHigh" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render All 6 Circuit Lines with Synchronized Stage Highlight */}
          {Object.entries(paths).map(([key, d], idx) => {
            const isCurrentActive = activeStep === idx;
            const isHovered = hoveredCard === key;
            const isEmphasized = isCurrentActive || isHovered;

            return (
              <g key={key} className="transition-all duration-300">
                {/* 1. Base Circuit Metallic Trace */}
                <path
                  d={d}
                  fill="none"
                  stroke={isEmphasized ? "#0b4d2e" : "#062919"}
                  strokeWidth={isEmphasized ? "3" : "2"}
                  strokeLinecap="round"
                />

                {/* 2. Soft Ambient Neon Halo */}
                <path
                  d={d}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth={isEmphasized ? "8" : "4"}
                  strokeOpacity={isEmphasized ? "0.6" : "0.12"}
                  strokeLinecap="round"
                  filter="url(#laserGlowHigh)"
                />

                {/* 3. Moving Laser Dash Stream */}
                <path
                  d={d}
                  fill="none"
                  stroke={isEmphasized ? "url(#activeSurge)" : "url(#idleLaser)"}
                  strokeWidth={isEmphasized ? "3.2" : "2"}
                  strokeLinecap="round"
                  className={isEmphasized ? "circuit-laser-active" : "circuit-laser-idle"}
                  filter="url(#laserGlowHigh)"
                />

                {/* 4. Traveling Photon Head */}
                <circle 
                  r={isEmphasized ? "4" : "2.5"} 
                  fill={isEmphasized ? "#ffffff" : "#a7f3d0"} 
                  filter="url(#laserGlowHigh)"
                >
                  <animateMotion
                    path={d}
                    dur={isEmphasized ? "1.2s" : "2.4s"}
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>

                {/* Trailing Secondary Photon */}
                <circle 
                  r="2" 
                  fill="#34d399"
                >
                  <animateMotion
                    path={d}
                    dur={isEmphasized ? "1.2s" : "2.4s"}
                    begin="0.6s"
                    repeatCount="indefinite"
                    rotate="auto"
                  />
                </circle>
              </g>
            );
          })}

          {/* Connection Terminal Pins with Glow */}
          <rect x="281" y="142" width="8" height="6" rx="1.5" fill={activeStep === 0 ? "#6ee7b7" : "#10b981"} filter="url(#laserGlowHigh)" />
          <rect x="466" y="192" width="8" height="5" rx="1.5" fill={activeStep === 1 ? "#6ee7b7" : "#10b981"} filter="url(#laserGlowHigh)" />
          <rect x="651" y="142" width="8" height="6" rx="1.5" fill={activeStep === 2 ? "#6ee7b7" : "#10b981"} filter="url(#laserGlowHigh)" />
          <rect x="281" y="372" width="8" height="6" rx="1.5" fill={activeStep === 3 ? "#6ee7b7" : "#10b981"} filter="url(#laserGlowHigh)" />
          <rect x="466" y="323" width="8" height="5" rx="1.5" fill={activeStep === 4 ? "#6ee7b7" : "#10b981"} filter="url(#laserGlowHigh)" />
          <rect x="651" y="372" width="8" height="6" rx="1.5" fill={activeStep === 5 ? "#6ee7b7" : "#10b981"} filter="url(#laserGlowHigh)" />
        </svg>

        {/* ========================================================================= */}
        {/* CENTER HUB: Holographic Core Engine ("Mr. Expert Solution")               */}
        {/* ========================================================================= */}
        <div 
          className="absolute z-20 left-[360px] top-[225px] w-[220px] h-[70px] flex items-center justify-center pointer-events-auto"
        >
          {/* Animated Sonar Radar Rings */}
          <div className="absolute inset-0 rounded-2xl border border-emerald-400/40 animate-ping opacity-30 pointer-events-none" />
          <div className="absolute -inset-2 rounded-2xl bg-emerald-500/20 blur-xl animate-pulse pointer-events-none" />

          {/* Central Glassmorphism Control Core */}
          <div 
            onClick={() => setActiveStep((prev) => (prev + 1) % stages.length)}
            className="relative w-full h-full rounded-2xl bg-gradient-to-b from-[#0b3321] via-[#051c11] to-[#03130b] border-2 border-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.7)] flex flex-col items-center justify-center px-3 py-1 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-300 tracking-wider uppercase mb-0.5">
              <Cpu className="h-3 w-3 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Core Engine</span>
            </div>

            <span className="font-extrabold text-sm sm:text-base text-white tracking-tight font-display drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:text-emerald-200 transition-colors">
              Mr. Expert Solution
            </span>

            <div className="text-[9px] font-mono text-emerald-400/80 mt-0.5 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Multi-State Pipeline Active</span>
            </div>

            {/* Glowing Corner Terminals */}
            <span className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399]" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399]" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-emerald-300 shadow-[0_0_6px_#34d399]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6 SURROUNDING CARDS (Interactive Model Nodes)                             */}
        {/* ========================================================================= */}

        {/* 1. TOP-LEFT: Tell Us Your Plan (Step 01) */}
        <div
          onClick={() => setSelectedDetail(stages[0])}
          onMouseEnter={() => { setHoveredCard('topLeft'); setActiveStep(0); }}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[25px] top-[25px] w-[260px] h-[170px] rounded-2xl border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 cursor-pointer group backdrop-blur-md ${
            activeStep === 0
              ? 'bg-[#0e3523]/95 border-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.4)] scale-[1.02]' 
              : 'bg-[#071d13]/90 border-emerald-500/25 hover:border-emerald-500/50 hover:bg-[#0a2519]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                STAGE 01
              </span>
              <span className="text-[10px] text-emerald-400/80 group-hover:text-emerald-300 flex items-center gap-0.5 font-medium">
                Inspect <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mt-1.5">
              Tell Us Your Plan
            </h3>
            <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
              One free call. We tell you exactly which company, state and setup fits what you want to build.
            </p>
          </div>

          {/* Mini US Map Graphics */}
          <div className="relative w-full h-14 rounded-xl bg-black/50 border border-emerald-900/60 p-1 flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 200 110" className="w-full h-full text-emerald-800/40 stroke-emerald-500/40 stroke-[0.8] fill-emerald-950/60">
              <path d="M 25 25 L 55 25 L 85 28 L 120 28 L 140 35 L 170 30 L 175 45 L 165 70 L 140 75 L 120 95 L 90 90 L 60 70 L 30 70 L 20 40 Z" />
              <circle cx="65" cy="42" r="3.5" fill="#34d399" className="animate-pulse shadow-[0_0_8px_#34d399]" />
              <text x="58" y="55" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">WY</text>
              <circle cx="155" cy="50" r="3" fill="#34d399" className="shadow-[0_0_8px_#34d399]" />
              <text x="160" y="54" fill="#34d399" fontSize="8" fontWeight="bold" fontFamily="monospace">DE</text>
              <path d="M 68 42 Q 110 20 152 48" fill="none" stroke="#34d399" strokeWidth="1" strokeDasharray="3 3" />
            </svg>
          </div>
        </div>

        {/* 2. TOP-CENTER: Send Your Details (Step 02) */}
        <div
          onClick={() => setSelectedDetail(stages[1])}
          onMouseEnter={() => { setHoveredCard('topCenter'); setActiveStep(1); }}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[340px] top-[25px] w-[260px] h-[170px] rounded-2xl border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 cursor-pointer group backdrop-blur-md ${
            activeStep === 1
              ? 'bg-[#0e3523]/95 border-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.4)] scale-[1.02]' 
              : 'bg-[#071d13]/90 border-emerald-500/25 hover:border-emerald-500/50 hover:bg-[#0a2519]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                STAGE 02
              </span>
              <span className="text-[10px] text-emerald-400/80 group-hover:text-emerald-300 flex items-center gap-0.5 font-medium">
                Inspect <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mt-1.5">
              Send Your Details
            </h3>
            <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
              Upload your basics in our secure portal. No mountain of paperwork, no office visits.
            </p>
          </div>

          {/* Masked EIN Badge Container */}
          <div className="w-full rounded-xl bg-black/60 border border-emerald-900/60 p-1.5 text-center space-y-1">
            <span className="inline-block px-2 py-0.5 rounded-full text-[8px] font-semibold text-gray-300 bg-white/5 border border-white/10 uppercase tracking-wider">
              Non-US founder
            </span>
            <div className="py-0.5 px-2 rounded-lg bg-gradient-to-r from-emerald-950 via-black to-emerald-950 border border-emerald-500/40">
              <span className="font-mono text-xs sm:text-sm font-extrabold text-white tracking-[0.2em] drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]">
                93••••••4271
              </span>
            </div>
            <div className="text-[8px] font-mono text-emerald-400">
              CP-575 • IRS confirmation
            </div>
          </div>
        </div>

        {/* 3. TOP-RIGHT: Registered (Step 03) */}
        <div
          onClick={() => setSelectedDetail(stages[2])}
          onMouseEnter={() => { setHoveredCard('topRight'); setActiveStep(2); }}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[655px] top-[25px] w-[260px] h-[170px] rounded-2xl border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 cursor-pointer group backdrop-blur-md ${
            activeStep === 2
              ? 'bg-[#0e3523]/95 border-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.4)] scale-[1.02]' 
              : 'bg-[#071d13]/90 border-emerald-500/25 hover:border-emerald-500/50 hover:bg-[#0a2519]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                STAGE 03
              </span>
              <span className="text-[10px] text-emerald-400/80 group-hover:text-emerald-300 flex items-center gap-0.5 font-medium">
                Inspect <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mt-1.5">
              Registered
            </h3>
            <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
              Included in every formation. All 50 states.
            </p>
          </div>

          {/* Verification Shield Flow */}
          <div className="relative w-full h-14 rounded-xl bg-black/50 border border-emerald-900/60 flex items-center justify-center overflow-hidden">
            <div className="relative flex items-center justify-center gap-2 z-10">
              <div className="p-1 rounded-lg bg-emerald-950/90 border border-emerald-500/30 text-emerald-300">
                <FileText className="h-3 w-3" />
              </div>
              <span className="text-[9px] text-emerald-400 font-bold">→</span>
              <div className="p-1.5 rounded-lg bg-emerald-500 text-slate-950 shadow-[0_0_10px_#34d399]">
                <Search className="h-3 w-3 stroke-[2.5]" />
              </div>
              <span className="text-[9px] text-emerald-400 font-bold">→</span>
              <div className="p-1 rounded-lg bg-emerald-950/90 border border-emerald-500/30 text-emerald-300">
                <FileCheck2 className="h-3 w-3" />
              </div>
            </div>
            <Shield className="absolute inset-0 m-auto h-12 w-12 text-emerald-900/25 stroke-[1]" />
          </div>
        </div>

        {/* 4. BOTTOM-LEFT: Go Live (Step 04) */}
        <div
          onClick={() => setSelectedDetail(stages[3])}
          onMouseEnter={() => { setHoveredCard('bottomLeft'); setActiveStep(3); }}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[25px] top-[325px] w-[260px] h-[170px] rounded-2xl border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 cursor-pointer group backdrop-blur-md ${
            activeStep === 3
              ? 'bg-[#0e3523]/95 border-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.4)] scale-[1.02]' 
              : 'bg-[#071d13]/90 border-emerald-500/25 hover:border-emerald-500/50 hover:bg-[#0a2519]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[9px] font-bold">
                  ↗ Go
                </span>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                  STAGE 04
                </span>
              </div>
              <span className="text-[10px] text-emerald-400/80 group-hover:text-emerald-300 flex items-center gap-0.5 font-medium">
                Inspect <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mt-1.5">
              Go Live & Banking
            </h3>
            <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
              Documents, EIN, bank and payments in your hands — everything you need to take your first order.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/50 border border-emerald-900/60 text-[10px]">
              <span className="text-gray-300">Mercury Checking</span>
              <span className="text-emerald-400 font-bold font-mono">✓ Ready</span>
            </div>
            <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-black/50 border border-emerald-900/60 text-[10px]">
              <span className="text-gray-300">Stripe Payments</span>
              <span className="text-emerald-400 font-bold font-mono">✓ Active</span>
            </div>
          </div>
        </div>

        {/* 5. BOTTOM-CENTER: We Do the Filing (Step 05) */}
        <div
          onClick={() => setSelectedDetail(stages[4])}
          onMouseEnter={() => { setHoveredCard('bottomCenter'); setActiveStep(4); }}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[340px] top-[325px] w-[260px] h-[170px] rounded-2xl border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 cursor-pointer group backdrop-blur-md ${
            activeStep === 4
              ? 'bg-[#0e3523]/95 border-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.4)] scale-[1.02]' 
              : 'bg-[#071d13]/90 border-emerald-500/25 hover:border-emerald-500/50 hover:bg-[#0a2519]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                STAGE 05
              </span>
              <span className="text-[10px] text-emerald-400/80 group-hover:text-emerald-300 flex items-center gap-0.5 font-medium">
                Inspect <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mt-1.5">
              We Do the Filing
            </h3>
            <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
              Articles of Organization prepared, state fees cleared, stamped and filed with expedited dispatch.
            </p>
          </div>

          <div className="p-2 rounded-xl bg-black/50 border border-emerald-900/60 space-y-1">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-gray-400">Filing Status</span>
              <span className="text-emerald-400 font-mono font-bold">100% Expedited</span>
            </div>
            <div className="w-full h-1 rounded-full bg-emerald-950 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_8px_#34d399]" />
            </div>
            <div className="text-[9px] text-gray-400 flex items-center justify-between font-mono">
              <span>Secretary of State</span>
              <span className="text-emerald-400">Certified</span>
            </div>
          </div>
        </div>

        {/* 6. BOTTOM-RIGHT: Annual Reports (Step 06) */}
        <div
          onClick={() => setSelectedDetail(stages[5])}
          onMouseEnter={() => { setHoveredCard('bottomRight'); setActiveStep(5); }}
          onMouseLeave={() => setHoveredCard(null)}
          className={`absolute left-[655px] top-[325px] w-[260px] h-[170px] rounded-2xl border transition-all duration-300 p-3.5 flex flex-col justify-between z-20 cursor-pointer group backdrop-blur-md ${
            activeStep === 5
              ? 'bg-[#0e3523]/95 border-emerald-400 shadow-[0_0_28px_rgba(16,185,129,0.4)] scale-[1.02]' 
              : 'bg-[#071d13]/90 border-emerald-500/25 hover:border-emerald-500/50 hover:bg-[#0a2519]'
          }`}
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                STAGE 06
              </span>
              <span className="text-[10px] text-emerald-400/80 group-hover:text-emerald-300 flex items-center gap-0.5 font-medium">
                Inspect <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mt-1.5">
              Annual Reports & BOI
            </h3>
            <p className="text-[10px] text-gray-300 mt-0.5 leading-snug">
              Automated annual reports filling across every state.
            </p>
          </div>

          <div className="p-2 rounded-xl bg-black/50 border border-emerald-900/60 space-y-1">
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
      {/* 3. MOBILE & TABLET COMPACT MODEL VIEW (< 1024px)                          */}
      {/* ========================================================================= */}
      <div className="lg:hidden space-y-3">
        
        {/* Core Mobile Engine Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0b3321] to-[#04130b] border-2 border-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.35)] text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 text-[10px] font-mono border border-emerald-500/40 mb-1">
            <Cpu className="h-2.5 w-2.5 animate-spin" />
            <span>Autonomous Kernel</span>
          </div>
          <div className="font-extrabold text-lg text-white font-display">
            Mr. Expert Solution
          </div>
          <div className="text-[11px] text-emerald-300 font-mono mt-0.5">
            Active: {currentStage.title} ({currentStage.stepNumber}/06)
          </div>
        </div>

        {/* 6 Responsive Tap-to-Inspect Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {stages.map((stg, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={stg.id}
                onClick={() => setSelectedDetail(stg)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0d3322] border-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.3)]'
                    : 'bg-[#071c12] border-emerald-500/25 hover:border-emerald-500/40'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="text-emerald-400 font-bold">STAGE {stg.stepNumber}</span>
                  <span className="text-gray-400 flex items-center gap-0.5">View Specs ↗</span>
                </div>
                <h4 className="text-sm font-bold text-white">{stg.title}</h4>
                <p className="text-[11px] text-gray-300 mt-0.5 leading-snug">{stg.desc}</p>
              </div>
            );
          })}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE STAGE INSPECTION MODAL (The "Model" Deep Dive)              */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl rounded-3xl bg-[#072016] border border-emerald-500/50 p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.9)] text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDetail(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-full bg-white/5 border border-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500 text-slate-950">
                    STAGE {selectedDetail.stepNumber}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">
                    {selectedDetail.subtitle}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {selectedDetail.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                    {selectedDetail.desc}
                  </p>
                </div>

                {/* API Endpoint Preview */}
                <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/30 font-mono text-xs flex items-center justify-between text-emerald-300">
                  <span>{selectedDetail.apiEndpoint}</span>
                  <span className="text-[10px] text-gray-400">REST API • Webhook</span>
                </div>

                {/* Architecture Specifications */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Architecture Specifications
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedDetail.specs.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-200 bg-white/5 p-2 rounded-lg border border-white/5">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Guaranteed Deliverables
                  </h4>
                  <div className="space-y-1 text-xs">
                    {selectedDetail.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-2 flex items-center justify-between border-t border-emerald-950">
                  <span className="text-xs text-gray-400 font-mono">
                    Instant sync with Core Engine
                  </span>
                  <button
                    onClick={() => setSelectedDetail(null)}
                    className="px-5 py-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all"
                  >
                    Close Inspector
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
