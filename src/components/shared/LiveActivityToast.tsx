import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, X, Building2, CreditCard, Sparkles } from 'lucide-react';

interface ActivityItem {
  id: number;
  client: string;
  location: string;
  action: string;
  flag: string;
  timeAgo: string;
}

export const LiveActivityToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const activities: ActivityItem[] = [
    { id: 1, client: "Markus S.", location: "Berlin, Germany", action: "Wyoming LLC formation filed with Secretary of State", flag: "🇩🇪", timeAgo: "2 mins ago" },
    { id: 2, client: "Amina R.", location: "Dubai, UAE", action: "Mercury Business Bank Account approved & funded", flag: "🇦🇪", timeAgo: "5 mins ago" },
    { id: 3, client: "James H.", location: "London, UK", action: "Delaware C-Corp registered with Registered Agent", flag: "🇬🇧", timeAgo: "8 mins ago" },
    { id: 4, client: "Hamza K.", location: "Lahore, Pakistan", action: "IRS EIN CP575 Notice delivered to client portal", flag: "🇵🇰", timeAgo: "12 mins ago" },
    { id: 5, client: "Carlos M.", location: "Mexico City", action: "US Stripe Business Gateway successfully verified", flag: "🇲🇽", timeAgo: "17 mins ago" },
    { id: 6, client: "Elena P.", location: "Toronto, Canada", action: "New Mexico Anonymous LLC approved ($0 annual tax)", flag: "🇨🇦", timeAgo: "23 mins ago" },
  ];

  useEffect(() => {
    if (isDismissed) return;

    // Show first toast after 3.5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    // Rotate every 9 seconds (show for 5s, hide for 4s)
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % activities.length);
        setIsVisible(true);
      }, 1200);
    }, 9000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = activities[currentIndex];

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-sm pointer-events-auto">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl text-gray-900 text-xs"
          >
            {/* Live radar status indicator */}
            <div className="relative mt-0.5">
              <span className="text-xl">{current.flag}</span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="font-bold text-gray-900 flex items-center gap-1.5">
                  <span>{current.client}</span>
                  <span className="text-[10px] font-normal text-gray-500">({current.location})</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">{current.timeAgo}</span>
              </div>

              <div className="text-[11px] text-gray-600 line-clamp-2 leading-snug">
                {current.action}
              </div>

              <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-semibold pt-0.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                <span>Verified Legal Filing</span>
              </div>
            </div>

            {/* Dismiss */}
            <button
              onClick={() => setIsDismissed(true)}
              className="text-gray-400 hover:text-gray-600 p-0.5 rounded-md hover:bg-gray-100 transition-colors"
              title="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
