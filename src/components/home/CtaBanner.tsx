import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { OrderModal } from '../shared/OrderModal';

export const CtaBanner: React.FC = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/60 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl bg-emerald-900 text-white p-8 sm:p-14 overflow-hidden shadow-2xl border border-emerald-800">
            
            {/* Background glowing gradients */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />

            <div className="relative max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-300 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                Ready To Launch
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                Your business is one decision away from{" "}
                <span className="text-emerald-300">going global.</span>
              </h2>

              <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-2xl mx-auto">
                250+ founders have already launched with Mr Expert Solution — with a 98% success rate and a team that answers when you need it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <Sparkles className="h-5 w-5 text-emerald-600" />
                  Build My Business Now
                  <ArrowRight className="h-4 w-4 text-emerald-600" />
                </button>

                <a
                  href="https://wa.me/923291666671?text=Hi%20MR%20EXPERT%20SOLUTION,%20I'd%20like%20to%20get%20started%20now!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-800/80 hover:bg-emerald-700/80 text-white font-semibold text-base border border-emerald-600/40 flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-300" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  No Hidden State Filing Fees
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Fast 3-5 Business Days
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Full Banking Assistance
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
};
