import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { usaPackages } from '../../data/pricingData';
import { OrderModal } from '../shared/OrderModal';

export const PricingSectionWithTable: React.FC = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('usa-gold');

  const handleOrder = (planId: string) => {
    setSelectedPlan(planId);
    setOrderModalOpen(true);
  };

  const comparisonRows = [
    { feature: "Complete LLC Formation Filing", standard: true, gold: true, premium: true, elite: true },
    { feature: "Registered Agent Service (1 Full Year)", standard: true, gold: true, premium: true, elite: true },
    { feature: "Physical US Business Address (1 Full Year)", standard: true, gold: true, premium: true, elite: true },
    { feature: "Official IRS EIN (Form CP575 / 147C)", standard: true, gold: true, premium: true, elite: true },
    { feature: "FinCEN BOI (Beneficial Ownership) Filing", standard: true, gold: true, premium: true, elite: true },
    { feature: "Custom Operating Agreement & Resolutions", standard: true, gold: true, premium: true, elite: true },
    { feature: "Unique Non-Shared Physical Suite Address", standard: false, gold: true, premium: true, elite: true },
    { feature: "US Business Bank Account Assistance", standard: false, gold: "1 Bank (Mercury/Wise)", premium: "2 Banks (Mercury + Wise)", elite: "2 Banks Guaranteed" },
    { feature: "Merchant Gateway Setup (Stripe / PayPal)", standard: false, gold: "1 Gateway", premium: "2 Gateways", elite: "2-3 Gateways" },
    { feature: "Dedicated US Phone Number", standard: false, gold: "1 Month Included", premium: "1 Full Year", elite: "1 Full Year + SMS" },
    { feature: "Full ITIN Application & Certification", standard: false, gold: false, premium: false, elite: "Included ($99 Value)" },
    { feature: "1st Year Annual Tax Consultation (Form 5472)", standard: false, gold: false, premium: false, elite: true },
    { feature: "Dedicated WhatsApp VIP Concierge", standard: "Standard Support", gold: "Priority Support", premium: "Dedicated Manager", elite: "Unlimited 1-on-1 Calls" }
  ];

  return (
    <>
      <section className="py-20 bg-background relative overflow-hidden border-t border-emerald-950/5">
        <div className="container mx-auto px-4 sm:px-6">
          
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

          {/* 4 Cards Grid (Gold card in solid rich emerald matching screenshot) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-6xl mx-auto">
            {usaPackages.map((pkg) => {
              const isGold = pkg.id === 'usa-gold';

              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                    isGold
                      ? 'bg-emerald-900 text-white shadow-2xl ring-4 ring-emerald-500/30 scale-105 z-10'
                      : 'bg-white text-gray-900 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-emerald-200'
                  }`}
                >
                  {/* Ribbon */}
                  {pkg.ribbon && (
                    <div
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md ${
                        isGold ? 'bg-amber-400 text-emerald-950' : 'bg-emerald-700 text-white'
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
                      <p className={`text-xs mt-1 ${isGold ? 'text-emerald-200/80' : 'text-gray-500'}`}>
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className={`pb-5 border-b ${isGold ? 'border-emerald-800' : 'border-gray-100'}`}>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-3xl sm:text-4xl font-black font-display ${isGold ? 'text-white' : 'text-gray-900'}`}>
                          ${pkg.price}
                        </span>
                        <span className={`text-xs font-semibold ${isGold ? 'text-emerald-200' : 'text-gray-500'}`}>
                          {pkg.priceLabel}
                        </span>
                      </div>
                      <div className={`mt-1.5 text-[11px] ${isGold ? 'text-emerald-300' : 'text-emerald-700 font-medium'}`}>
                        Zero hidden markups on state government fees
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className={`py-5 space-y-2.5 text-xs ${isGold ? 'text-emerald-100' : 'text-gray-700'}`}>
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 stroke-[2.5] ${isGold ? 'text-emerald-300' : 'text-emerald-600'}`} />
                          <span className="line-clamp-2">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div className={`pt-4 border-t ${isGold ? 'border-emerald-800' : 'border-gray-100'}`}>
                    <button
                      onClick={() => handleOrder(pkg.id)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                        isGold
                          ? 'bg-emerald-400 hover:bg-emerald-300 text-emerald-950 shadow-lg shadow-emerald-400/25 hover:-translate-y-0.5'
                          : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      }`}
                    >
                      <span>Choose {pkg.name}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Full Package Comparison Table (Matching Screenshot) */}
          <div className="mt-16 max-w-6xl mx-auto rounded-3xl bg-white border border-gray-200/90 shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-display text-gray-900">
                  Compare All Features Side-by-Side
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Detailed comparison across Standard, Gold, Premium and Elite Pro tiers.
                </p>
              </div>
              <Link
                to="/pricing"
                className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
              >
                <span>View Full Pricing Engine</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-800 font-bold border-b border-gray-200">
                    <th className="py-4 px-6 w-2/5">Feature / Service</th>
                    <th className="py-4 px-4 text-center">Standard ($99)</th>
                    <th className="py-4 px-4 text-center bg-emerald-50 text-emerald-950 font-black">
                      Gold ($199) ★
                    </th>
                    <th className="py-4 px-4 text-center">Premium ($250)</th>
                    <th className="py-4 px-4 text-center">Elite Pro ($350)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-3.5 px-6 font-semibold text-gray-800">
                        {row.feature}
                      </td>

                      {/* Standard */}
                      <td className="py-3.5 px-4 text-center">
                        {typeof row.standard === 'boolean' ? (
                          row.standard ? (
                            <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                          ) : (
                            <X className="h-4 w-4 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-medium text-gray-700">{row.standard}</span>
                        )}
                      </td>

                      {/* Gold (Highlighted Column) */}
                      <td className="py-3.5 px-4 text-center bg-emerald-50/40 font-semibold text-emerald-950">
                        {typeof row.gold === 'boolean' ? (
                          row.gold ? (
                            <Check className="h-4 w-4 text-emerald-700 mx-auto stroke-[3]" />
                          ) : (
                            <X className="h-4 w-4 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-bold text-emerald-900">{row.gold}</span>
                        )}
                      </td>

                      {/* Premium */}
                      <td className="py-3.5 px-4 text-center">
                        {typeof row.premium === 'boolean' ? (
                          row.premium ? (
                            <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                          ) : (
                            <X className="h-4 w-4 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-medium text-gray-700">{row.premium}</span>
                        )}
                      </td>

                      {/* Elite Pro */}
                      <td className="py-3.5 px-4 text-center">
                        {typeof row.elite === 'boolean' ? (
                          row.elite ? (
                            <Check className="h-4 w-4 text-emerald-600 mx-auto stroke-[3]" />
                          ) : (
                            <X className="h-4 w-4 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="font-bold text-emerald-800">{row.elite}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialJurisdiction="usa"
        initialPackageId={selectedPlan}
      />
    </>
  );
};
