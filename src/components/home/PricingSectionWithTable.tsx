import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Sparkles, Shield, ArrowRight, Star, HelpCircle } from 'lucide-react';
import { usaPackages } from '../../data/pricingData';
import { OrderModal } from '../shared/OrderModal';

interface MatrixRow {
  feature: string;
  basic: boolean | string;
  standard: boolean | string;
  gold: boolean | string;
  platinum: boolean | string;
}

const comparisonMatrix: MatrixRow[] = [
  { feature: "Articles of Organization Filing", basic: true, standard: true, gold: true, platinum: true },
  { feature: "Official State Filing Fees Included", basic: false, standard: false, gold: false, platinum: false },
  { feature: "Registered Agent Service (1st Year)", basic: "Optional", standard: true, gold: true, platinum: true },
  { feature: "Physical US Business Address", basic: false, standard: true, gold: true, platinum: true },
  { feature: "IRS Official Form CP575 EIN", basic: "Optional", standard: true, gold: true, platinum: true },
  { feature: "FinCEN BOI Compliance Filing", basic: false, standard: true, gold: true, platinum: true },
  { feature: "Operating Agreement & Resolutions", basic: "Template", standard: true, gold: true, platinum: true },
  { feature: "US Business Bank Account Setup", basic: false, standard: "Guidance", gold: "Pre-Approved", platinum: "VIP Concierge" },
  { feature: "Stripe & PayPal Merchant Gateway", basic: false, standard: false, gold: true, platinum: true },
  { feature: "Dedicated US Phone & SMS (1 Month)", basic: false, standard: false, gold: true, platinum: "1 Year" },
  { feature: "Expedited 24-48h State Processing", basic: false, standard: false, gold: true, platinum: true },
  { feature: "USPTO Trademark Clearance Search", basic: false, standard: false, gold: false, platinum: true },
  { feature: "1-on-1 Attorney Consultation Call", basic: false, standard: false, gold: false, platinum: "30 Mins" },
  { feature: "Turnaround Time", basic: "5-7 Days", standard: "3-5 Days", gold: "2-3 Days", platinum: "24-48 Hours" },
];

export const PricingSectionWithTable: React.FC = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPkgId, setSelectedPkgId] = useState<string>('usa-gold');

  const handleSelectPackage = (pkgId: string) => {
    setSelectedPkgId(pkgId);
    setOrderModalOpen(true);
  };

  return (
    <>
      <section className="py-20 sm:py-28 bg-gradient-to-b from-background via-slate-50/50 to-background relative overflow-hidden" id="pricing-plans">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="section-badge">
              <Sparkles className="h-3.5 w-3.5" />
              Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
              Simple, All-Inclusive <span className="text-gradient">Formation Packages</span>
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Transparent upfront pricing with zero recurring surprises. Choose the plan that fits your growth stage.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-6xl mx-auto">
            {usaPackages.map((pkg) => {
              const isGold = pkg.id === 'usa-gold';

              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                    isGold
                      ? 'bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white shadow-2xl ring-4 ring-indigo-500/30 scale-105 z-10 border border-indigo-500/40'
                      : 'bg-white text-gray-900 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300'
                  }`}
                >
                  {/* Ribbon */}
                  {pkg.ribbon && (
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md ${
                        isGold ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-indigo-600 text-white'
                      }`}
                    >
                      {pkg.ribbon}
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold font-display ${isGold ? 'text-white' : 'text-gray-900'}`}>
                        {pkg.name}
                      </h3>
                      <p className={`text-xs mt-1 ${isGold ? 'text-cyan-200/80' : 'text-gray-500'}`}>
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className={`pb-5 border-b ${isGold ? 'border-indigo-800/80' : 'border-slate-100'}`}>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-3xl sm:text-4xl font-black font-display ${isGold ? 'text-white' : 'text-gray-900'}`}>
                          ${pkg.price}
                        </span>
                        <span className={`text-xs font-semibold ${isGold ? 'text-cyan-200' : 'text-gray-500'}`}>
                          {pkg.priceLabel}
                        </span>
                      </div>
                      <div className={`mt-1.5 text-[11px] ${isGold ? 'text-cyan-300' : 'text-indigo-600 font-medium'}`}>
                        Zero hidden markups on state government fees
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="py-5 space-y-2.5 text-xs">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${isGold ? 'text-cyan-400' : 'text-indigo-600'}`} />
                          <span className={isGold ? 'text-slate-200' : 'text-gray-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleSelectPackage(pkg.id)}
                      className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md ${
                        isGold
                          ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white shadow-indigo-500/25'
                          : 'bg-slate-900 hover:bg-slate-800 text-white hover:shadow-lg'
                      }`}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Comparison Table */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-display text-gray-900">
                Detailed Feature Comparison
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                See exactly what each tier includes before making your decision
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="p-4 font-bold text-gray-900">Feature</th>
                    <th className="p-4 font-bold text-center text-gray-700">Standard ($99)</th>
                    <th className="p-4 font-bold text-center text-indigo-700 bg-indigo-50/50">Gold ($199)</th>
                    <th className="p-4 font-bold text-center text-gray-700">Platinum ($349)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonMatrix.map((row: MatrixRow, idx: number) => (
                    <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 font-medium text-gray-900">
                        {row.feature}
                      </td>
                      <td className="p-4 text-center">
                        {renderCell(row.basic)}
                      </td>
                      <td className="p-4 text-center bg-indigo-50/30">
                        {renderCell(row.gold)}
                      </td>
                      <td className="p-4 text-center">
                        {renderCell(row.platinum)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
              * Official Secretary of State filing fees vary by state and are passed through at exact cost with zero agency markup.
            </div>
          </div>

        </div>
      </section>

      {/* Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialPackageId={selectedPkgId}
      />
    </>
  );
};

function renderCell(val: boolean | string) {
  if (typeof val === 'boolean') {
    return val ? (
      <Check className="h-4 w-4 text-indigo-600 mx-auto" />
    ) : (
      <X className="h-4 w-4 text-gray-300 mx-auto" />
    );
  }
  return <span className="font-semibold text-gray-800 text-[11px]">{val}</span>;
}
