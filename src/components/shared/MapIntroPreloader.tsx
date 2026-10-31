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
    // Check if user has already seen it during this session
    const seen = sessionStorage.getItem('mes_seen_intro_map');
    if (seen && !forceShow) {
      setIsVisible(false);
      return;
    }

    // Percentage counter animation (0 to 100%)
    let current = 0;
    const interval = setInterval(() => {
      // Accelerate smoothly as it reaches 99%
      const step = current < 60 ? 3 : current < 90 ? 2 : 1;
      current += step;

      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(interval);

        // Hold at 100% briefly, then smoothly exit
        setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem('mes_seen_intro_map', 'true');
          if (onFinish) onFinish();
        }, 650);
      } else {
        setPercent(current);
      }
    }, 36);

    return () => clearInterval(interval);
  }, [forceShow, onFinish]);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem('mes_seen_intro_map', 'true');
    if (onFinish) onFinish();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#090D1A] via-[#0c1326] to-[#040814] text-white p-6 sm:p-10 select-none"
      >
        {/* Subtle grid background pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Ambient radial lighting behind map */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[450px] sm:h-[600px] rounded-full bg-gradient-to-r from-indigo-500/25 via-cyan-500/20 to-teal-500/15 blur-[110px]" />

        {/* Top Header / Skip Control */}
        <div className="relative w-full max-w-5xl flex items-center justify-between z-10">
          <div className="flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-cyan-300 font-mono">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Global Gateway Initialization</span>
          </div>

          <button
            onClick={handleSkip}
            className="text-xs tracking-wider uppercase font-semibold text-cyan-200 hover:text-white px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center gap-1.5 backdrop-blur-md"
          >
            <span>Skip Intro</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Center: US Map with Animated Counter & Glow */}
        <div className="relative w-full max-w-4xl my-auto flex items-center justify-center">
          
          {/* Map Vector Component */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="w-full relative"
          >
            <div className="relative drop-shadow-[0_0_35px_rgba(255,255,255,0.45)] drop-shadow-[0_0_70px_rgba(79,70,229,0.4)]">
              <USMapVector className="w-full h-auto max-h-[58vh] object-contain text-white" />
            </div>

            {/* Glowing Hub Beacons on Key States (Wyoming, Delaware, New Mexico, Florida) */}
            <div className="absolute top-[28%] left-[28%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 border border-white"></span>
              </span>
              <span className="absolute left-4 top-0 text-[10px] font-mono text-slate-900 bg-white/95 px-1.5 py-0.5 rounded shadow-lg font-bold hidden sm:inline">
                WY · 0% Tax
              </span>
            </div>

            <div className="absolute top-[37%] left-[78%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500 border border-white"></span>
              </span>
              <span className="absolute left-4 top-0 text-[10px] font-mono text-slate-900 bg-white/95 px-1.5 py-0.5 rounded shadow-lg font-bold hidden sm:inline">
                DE · VC Precedent
              </span>
            </div>

            <div className="absolute top-[62%] left-[32%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500 border border-white"></span>
              </span>
              <span className="absolute left-4 top-0 text-[10px] font-mono text-slate-900 bg-white/95 px-1.5 py-0.5 rounded shadow-lg font-bold hidden sm:inline">
                NM · Anonymous
              </span>
            </div>

            <div className="absolute top-[78%] left-[73%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 border border-white"></span>
              </span>
              <span className="absolute left-4 top-0 text-[10px] font-mono text-slate-900 bg-white/95 px-1.5 py-0.5 rounded shadow-lg font-bold hidden sm:inline">
                FL · Global Trade
              </span>
            </div>

            {/* In Center: Animated Percentage Counter (Matches Screenshot Exactly) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
              <div className="flex items-baseline">
                <span className="text-6xl sm:text-7xl md:text-8xl font-black font-mono tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-indigo-200 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                  {percent}
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 ml-1">
                  %
                </span>
              </div>

              <div className="mt-2 text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase text-cyan-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                ACTIVATING YOUR U.S. PRESENCE
              </div>

              {/* Mini progress line indicator */}
              <div className="w-32 sm:w-44 h-1 bg-white/20 rounded-full mt-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-300 transition-all duration-75"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>

          </motion.div>
        </div>

        {/* Bottom Branding (Exact match to screenshot bottom) */}
        <div className="relative text-center z-10 w-full max-w-md pb-2">
          <div className="text-xs sm:text-sm font-extrabold tracking-[0.3em] uppercase text-white/90">
            MR EXPERT SOLUTION
          </div>
          <div className="w-48 mx-auto h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2" />
          <div className="text-[10px] text-cyan-300/70 font-mono tracking-wider mt-1">
            Global Corporate Formations & Fintech Infrastructure
          </div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
