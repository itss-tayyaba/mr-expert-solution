import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { USMapVector } from './USMapVector';
import { Sparkles, Globe, ArrowRight } from 'lucide-react';

interface MapIntroPreloaderProps {
  forceShow?: boolean;
  onFinish?: () => void;
}

export const MapIntroPreloader: React.FC<MapIntroPreloaderProps> = ({ forceShow = false, onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Smooth cinematic percentage counter (takes ~3.0s total)
    let current = 0;
    
    const interval = setInterval(() => {
      // Pacing curve:
      // 0% -> 60%: steady progression
      // 60% -> 95%: smooth acceleration
      // 95% -> 99%: pauses slightly so the iconic 99% is clearly visible (as in screenshot)
      let increment = 1;
      if (current < 50) {
        increment = 2;
      } else if (current < 85) {
        increment = 2;
      } else if (current < 99) {
        increment = 1;
      } else {
        increment = 1;
      }

      current += increment;

      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(interval);

        // Hold at 100% for 800ms so the complete state is admired
        setTimeout(() => {
          setIsVisible(false);
          if (onFinish) onFinish();
        }, 800);
      } else {
        setPercent(current);
      }
    }, 45); // 45ms * ~65 ticks = ~3.0 seconds

    return () => clearInterval(interval);
  }, [onFinish]);

  const handleSkip = () => {
    setIsVisible(false);
    if (onFinish) onFinish();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#0a5236] via-[#08452c] to-[#042d1c] text-white p-6 sm:p-10 select-none"
      >
        {/* Subtle grid background pattern (Exact match to screenshot) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Ambient radial lighting behind map */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[920px] h-[450px] sm:h-[620px] rounded-full bg-emerald-400/20 blur-[110px]" />

        {/* Top Header / Skip Control */}
        <div className="relative w-full max-w-5xl flex items-center justify-between z-10">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-emerald-200/80 font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Global Gateway Initialization</span>
          </div>

          <button
            onClick={handleSkip}
            className="text-xs tracking-wider uppercase font-semibold text-emerald-200 hover:text-white px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center gap-1.5 backdrop-blur-sm"
          >
            <span>Skip Intro</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Center: US Map with Animated Counter & Glow (Exact match to screenshot) */}
        <div className="relative w-full max-w-4xl my-auto flex items-center justify-center">
          
          {/* Map Vector Component */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full relative"
          >
            <div className="relative drop-shadow-[0_0_35px_rgba(255,255,255,0.45)] drop-shadow-[0_0_65px_rgba(16,185,129,0.35)]">
              <USMapVector className="w-full h-auto max-h-[58vh] object-contain" />
            </div>

            {/* Glowing Hub Beacons on Key States (Wyoming, Delaware, New Mexico, Florida) */}
            <div className="absolute top-[28%] left-[28%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow"></span>
              </span>
              <span className="absolute left-4 top-0 text-[10px] font-mono text-emerald-900 bg-white/95 px-2 py-0.5 rounded shadow-md font-bold hidden sm:inline">
                WY · 0% Tax
              </span>
            </div>

            <div className="absolute top-[48%] left-[29%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow"></span>
              </span>
              <span className="absolute left-4 top-0 text-[10px] font-mono text-emerald-900 bg-white/95 px-2 py-0.5 rounded shadow-md font-bold hidden sm:inline">
                NM · Anonymous
              </span>
            </div>

            <div className="absolute top-[34%] left-[84%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow"></span>
              </span>
              <span className="absolute left-4 top-0 text-[10px] font-mono text-emerald-900 bg-white/95 px-2 py-0.5 rounded shadow-md font-bold hidden sm:inline">
                DE · VC Precedent
              </span>
            </div>

            <div className="absolute top-[78%] left-[78%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white shadow"></span>
              </span>
              <span className="absolute left-4 top-0 text-[10px] font-mono text-emerald-900 bg-white/95 px-2 py-0.5 rounded shadow-md font-bold hidden sm:inline">
                FL · Stripe
              </span>
            </div>
          </motion.div>

          {/* Centered Overlay inside the Map (Exact match to screenshot decfd595) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-20">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Bold Percentage Number */}
              <div className="flex items-baseline justify-center font-display font-black text-emerald-900 text-6xl sm:text-7xl lg:text-8xl tracking-tight filter drop-shadow-[0_2px_14px_rgba(255,255,255,0.75)]">
                <span>{percent}</span>
                <span className="text-2xl sm:text-3xl font-extrabold ml-1 text-emerald-800">%</span>
              </div>

              {/* Subtitle Line */}
              <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs lg:text-sm font-extrabold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-emerald-900/90 font-mono filter drop-shadow-[0_1px_5px_rgba(255,255,255,0.8)]">
                ACTIVATING YOUR U.S. PRESENCE
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Logo & Progress Bar (Exact match to screenshot bottom) */}
        <div className="relative w-full max-w-sm flex flex-col items-center text-center space-y-3 z-10 pb-3">
          <div className="text-sm sm:text-base font-extrabold uppercase tracking-[0.3em] text-white/95 font-display">
            MR EXPERT SOLUTION
          </div>

          {/* Glowing Animated Progress Bar */}
          <div className="w-full h-1 sm:h-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 overflow-hidden relative shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-emerald-300 via-white to-emerald-400 shadow-[0_0_12px_#34d399] transition-all duration-75"
              style={{ width: `${percent}%` }}
            />
          </div>

          <div className="flex items-center justify-between w-full text-[10px] text-emerald-300/70 font-mono">
            <span>Wyoming · Delaware · UK LTD</span>
            <span>Secured 256-Bit</span>
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
