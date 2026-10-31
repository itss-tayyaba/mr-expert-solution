import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface PromoPopupProps {
  isOpenOverride?: boolean;
  onCloseOverride?: () => void;
}

export const PromoPopup: React.FC<PromoPopupProps> = ({ isOpenOverride, onCloseOverride }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpenOverride !== undefined) {
      setIsVisible(isOpenOverride);
      return;
    }

    const hasSeenPopup = sessionStorage.getItem('mes_seen_promo');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('mes_seen_promo', 'true');
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [isOpenOverride]);

  const handleClose = () => {
    setIsVisible(false);
    if (onCloseOverride) onCloseOverride();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-emerald-100 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Glow ambient */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-teal-500/15 blur-3xl" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close promotion"
        >
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold mb-4">
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              Limited-Time Offer
            </div>

            <h3 className="text-2xl font-bold font-display text-gray-900 tracking-tight">
              Get <span className="text-emerald-700">10% OFF</span> + Free B2B Formation Guide
            </h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Join 10,000+ foreign entrepreneurs. Enter your email to instantly unlock our 2026 Non-Resident Formation Checklist & exclusive package voucher code.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div>
                <input
                  type="email"
                  required
                  placeholder="Enter your best work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 focus:border-emerald-600 text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
              >
                Claim My 10% Discount Code
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-gray-400">
              <span>✓ Instant delivery</span>
              <span>✓ No spam guarantee</span>
              <span>✓ WhatsApp support</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Discount Code Unlocked!</h3>
            <p className="mt-2 text-xs text-gray-600">
              Use code below during checkout or mention it to our WhatsApp specialist:
            </p>
            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-dashed border-emerald-300 font-mono text-emerald-800 font-bold text-lg tracking-wider">
              GLOBALLLC10
            </div>
            <p className="mt-3 text-xs text-gray-500">
              We also sent the complete B2B rate card & compliance checklist to <b>{email}</b>.
            </p>
            <button
              onClick={handleClose}
              className="mt-5 w-full py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold"
            >
              Start My Formation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
