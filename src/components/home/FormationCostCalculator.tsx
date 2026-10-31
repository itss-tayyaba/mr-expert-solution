import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, Check, Sparkles, Shield, DollarSign, Clock, 
  HelpCircle, ArrowRight, Zap, Info 
} from 'lucide-react';
import { usStates } from '../../data/usStatesData';
import { OrderModal } from '../shared/OrderModal';

interface AddonOption {
  id: string;
  name: string;
  price: number;
  desc: string;
  includedInBase?: boolean;
}

export const FormationCostCalculator: React.FC = () => {
  const [selectedStateCode, setSelectedStateCode] = useState<string>('WY');
  const [selectedTier, setSelectedTier] = useState<'standard' | 'gold' | 'platinum'>('gold');
  const [rushProcessing, setRushProcessing] = useState<boolean>(false);
  const [needsItin, setNeedsItin] = useState<boolean>(false);
  const [needsAddress, setNeedsAddress] = useState<boolean>(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const selectedState = usStates.find(s => s.code === selectedStateCode) || usStates[0];

  // Pricing calculations
  const tierPrices = {
    standard: 149,
    gold: 249,
    platinum: 349
  };

  const basePrice = tierPrices[selectedTier];
  const stateFilingFee = selectedState.filingFee;
  const rushFee = rushProcessing ? 49 : 0;
  const itinFee = needsItin ? 99 : 0;
  const addressFee = needsAddress ? 99 : 0;

  const totalCost = basePrice + stateFilingFee + rushFee + itinFee + addressFee;
  const estimatedSavings = 180 + (needsItin ? 100 : 0);

  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-b from-background via-slate-50/80 to-background relative overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <div className="section-badge">
              <Calculator className="h-3.5 w-3.5" />
              <span>Real-Time Pricing Engine</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 font-display">
              Transparent Formation <span className="text-gradient">Cost Calculator</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Zero hidden surcharges. Configure your legal entity, state jurisdiction, and optional fintech add-ons to see an exact, itemized invoice in real time.
            </p>
          </div>

          {/* Calculator Layout */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Options Form (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: State Selection */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">1</span>
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">Select Formation State</h3>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    State Fee: <b className="text-gray-900">${selectedState.filingFee}</b>
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {usStates.slice(0, 8).map((st) => (
                    <button
                      key={st.code}
                      type="button"
                      onClick={() => setSelectedStateCode(st.code)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        selectedStateCode === st.code
                          ? 'border-indigo-600 bg-indigo-50/80 text-indigo-900 shadow-sm font-semibold'
                          : 'border-slate-200 hover:border-slate-300 text-gray-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold">{st.name}</div>
                      <div className="text-[11px] text-gray-500 font-mono mt-0.5">${st.filingFee} fee</div>
                    </button>
                  ))}
                </div>
                
                <div className="text-[11px] text-gray-500 flex items-center gap-1.5 bg-slate-50 p-2.5 rounded-xl">
                  <Info className="h-3.5 w-3.5 text-indigo-600 shrink-0" />
                  <span>
                    <b>{selectedState.name} Advantage:</b> {selectedState.highlight || selectedState.pros[0]}
                  </span>
                </div>
              </div>

              {/* Step 2: Package Tier */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">2</span>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Choose Service Tier</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'standard', name: 'Standard', price: 149, tag: 'Essential' },
                    { id: 'gold', name: 'Gold VIP', price: 249, tag: 'Most Popular', highlight: true },
                    { id: 'platinum', name: 'Platinum All-in-One', price: 349, tag: 'Full Stack' },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier.id as any)}
                      className={`p-4 rounded-2xl border text-left transition-all relative ${
                        selectedTier === tier.id
                          ? 'border-indigo-600 bg-indigo-50/70 shadow-md ring-2 ring-indigo-600/20'
                          : 'border-slate-200 hover:border-slate-300 text-gray-700'
                      }`}
                    >
                      {tier.highlight && (
                        <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-600 text-white shadow-xs">
                          {tier.tag}
                        </span>
                      )}
                      <div className="font-bold text-xs sm:text-sm text-gray-900">{tier.name}</div>
                      <div className="text-lg font-extrabold text-indigo-700 font-mono mt-1">${tier.price}</div>
                      <div className="text-[10px] text-gray-500 mt-1">
                        {tier.id === 'standard' ? 'LLC + EIN + Agent' : tier.id === 'gold' ? 'LLC + Banking + Fast EIN' : 'Full Concierge + IP'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-ons & Speed */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">3</span>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Optional Add-ons & Expedited Speed</h3>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={rushProcessing}
                        onChange={(e) => setRushProcessing(e.target.checked)}
                        className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                          <span>⚡ 24-48 Hour Priority Rush Filing</span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded">Expedited</span>
                        </div>
                        <div className="text-[11px] text-gray-500">Skips standard queue for urgent business deadlines</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-900">+$49</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={needsItin}
                        onChange={(e) => setNeedsItin(e.target.checked)}
                        className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                          <span>🆔 IRS Certified ITIN Service</span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded">Special Offer</span>
                        </div>
                        <div className="text-[11px] text-gray-500">Individual Tax Identification Number without mailing physical passport</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-900">+$99</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={needsAddress}
                        onChange={(e) => setNeedsAddress(e.target.checked)}
                        className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-gray-900">🏢 Commercial US Business Address (1 Full Year)</div>
                        <div className="text-[11px] text-gray-500">Physical street suite address for Stripe, Amazon and bank statements</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-900">+$99</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Invoice & Summary Card (5 Cols) */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-bold">Itemized Estimate</span>
                    <h4 className="text-lg font-bold text-white mt-0.5">Custom Formation Bundle</h4>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-slate-800 text-emerald-400">
                    Verified Pricing
                  </span>
                </div>

                {/* Line Items */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>{selectedState.name} LLC Base ({selectedTier.toUpperCase()})</span>
                    <span className="font-mono font-bold text-white">${basePrice}</span>
                  </div>

                  <div className="flex justify-between items-center text-slate-300">
                    <span>Official State Filing Fee ({selectedState.name})</span>
                    <span className="font-mono font-bold text-white">${stateFilingFee}</span>
                  </div>

                  <div className="flex justify-between items-center text-slate-300">
                    <span>Registered Agent (1 Full Year)</span>
                    <span className="font-mono font-bold text-emerald-400">FREE ($0)</span>
                  </div>

                  <div className="flex justify-between items-center text-slate-300">
                    <span>IRS Official EIN Registration</span>
                    <span className="font-mono font-bold text-emerald-400">FREE ($0)</span>
                  </div>

                  {rushProcessing && (
                    <div className="flex justify-between items-center text-slate-300">
                      <span>24-48 Hour Priority Rush</span>
                      <span className="font-mono font-bold text-white">+$49</span>
                    </div>
                  )}

                  {needsItin && (
                    <div className="flex justify-between items-center text-slate-300">
                      <span>IRS ITIN Service Package</span>
                      <span className="font-mono font-bold text-white">+$99</span>
                    </div>
                  )}

                  {needsAddress && (
                    <div className="flex justify-between items-center text-slate-300">
                      <span>1-Year Commercial US Address</span>
                      <span className="font-mono font-bold text-white">+$99</span>
                    </div>
                  )}
                </div>

                {/* Bundle Savings pill */}
                <div className="p-3 rounded-2xl bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-between text-xs">
                  <span className="text-indigo-300 font-medium">Bundle Savings Included:</span>
                  <span className="font-mono font-bold text-emerald-400">-${estimatedSavings} OFF</span>
                </div>

                {/* Grand Total */}
                <div className="border-t border-slate-800 pt-4 space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Total Amount</span>
                    <div className="text-right">
                      <div className="text-3xl font-extrabold font-mono text-white">${totalCost}</div>
                      <div className="text-[10px] text-slate-400">One-time payment · Zero hidden fees</div>
                    </div>
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  type="button"
                  onClick={() => setOrderModalOpen(true)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles className="h-4 w-4" />
                  Lock In This Bundle & Form Company
                </button>

                <div className="grid grid-cols-2 gap-2 text-center text-[10px] text-slate-400 pt-1">
                  <div className="flex items-center justify-center gap-1">
                    <Shield className="h-3 w-3 text-cyan-400" />
                    <span>100% Approval Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Clock className="h-3 w-3 text-emerald-400" />
                    <span>{rushProcessing ? '24-48h Expedited' : '3-5 Business Days'}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LLC Order Application Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialStateCode={selectedStateCode}
      />
    </>
  );
};
