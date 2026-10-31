import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Sparkles, CheckCircle2, AlertTriangle } from 'lucide-react';

export const ReadinessTeaser: React.FC = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    const cleanUrl = url.replace(/^https?:\/\//i, '').trim();
    navigate(`/website-readiness-checker?url=${encodeURIComponent(cleanUrl)}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-950 to-gray-950 text-white relative overflow-hidden">
      {/* Background circles */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 border border-emerald-600/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Exclusive Free Tool
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              Is Your Website Ready For{" "}
              <span className="text-emerald-400">Stripe & US Banking?</span>
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed max-w-xl">
              Over 65% of international founders face instant Stripe and Mercury rejections due to missing legal policies, non-compliant address disclosures, or terms mismatches. Run our automated scan to verify compliance in 30 seconds.
            </p>

            <form onSubmit={handleScan} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-lg">
              <input
                type="text"
                placeholder="yourwebsite.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-4 py-3.5 rounded-xl bg-white/10 border border-emerald-500/30 text-white placeholder-emerald-200/50 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 backdrop-blur-md"
              />
              <button
                type="submit"
                className="py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                Scan My Website Free
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-emerald-300/80">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                SSL & Domain Check
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Privacy & Refund Policy Audit
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Stripe Underwriting Check
              </span>
            </div>
          </div>

          {/* Interactive Inspection Card Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-emerald-300">Live Compliance Audit</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Stripe & Mercury AI
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-emerald-100">Merchant Legal Pages (Refund/Terms)</span>
                  <span className="text-emerald-400 font-bold">98% Required</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-emerald-100">Physical US Business Address Disclosure</span>
                  <span className="text-emerald-400 font-bold">Mandatory</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-emerald-100">Customer Support Email & Phone Routing</span>
                  <span className="text-emerald-400 font-bold">Checked</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-emerald-100">SSL Encryption & Payment Form Sandbox</span>
                  <span className="text-emerald-400 font-bold">Passed</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-[11px] text-center text-emerald-200/60">
                  Run a free diagnostic test before you apply to avoid payment processor suspensions.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
