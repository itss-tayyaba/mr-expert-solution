import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Star, AlertCircle } from 'lucide-react';
import { usStates } from '../../data/usStatesData';

export const StatesPreview: React.FC = () => {
  const topStates = usStates.filter(s => ['WY', 'DE', 'NM', 'FL', 'TX'].includes(s.code));
  const [activeCode, setActiveCode] = useState<string>('WY');

  const activeState = topStates.find(s => s.code === activeCode) || topStates[0];

  return (
    <section className="py-20 bg-white border-y border-emerald-950/5">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="section-badge">
              State Comparison Tool
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Which US State Is <span className="text-gradient">Right For Your LLC?</span>
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Filing fees, annual franchise taxes, and privacy protections differ drastically across US states. Compare key facts below before choosing where to incorporate.
            </p>
          </div>

          <Link
            to="/us-states-comparison"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs border border-emerald-200 transition-colors self-start md:self-end"
          >
            <span>Compare All 50 States</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* State Tabs */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-gray-100">
          {topStates.map((st) => (
            <button
              key={st.code}
              onClick={() => setActiveCode(st.code)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeCode === st.code
                  ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <span>{st.flag}</span>
              <span>{st.name}</span>
              {st.highlight && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeCode === st.code ? 'bg-emerald-800 text-emerald-100' : 'bg-emerald-100 text-emerald-800'}`}>
                  {st.code === 'WY' ? 'Top Pick' : 'Popular'}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active State Deep-dive Card */}
        <div className="mt-8 rounded-3xl bg-gradient-to-br from-emerald-50/40 via-white to-background border border-emerald-100 p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left summary */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{activeState.flag}</span>
                <div>
                  <h3 className="text-2xl font-extrabold font-display text-gray-900">
                    {activeState.name} LLC
                  </h3>
                  <span className="text-xs text-emerald-700 font-semibold">
                    {activeState.highlight || "High Popularity for Non-US Founders"}
                  </span>
                </div>
              </div>

              {/* Key numbers grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-[11px] text-gray-500 font-medium">State Filing Fee</div>
                  <div className="text-2xl font-black text-gray-900 mt-1">
                    ${activeState.filingFee}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-semibold">One-time state charge</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-[11px] text-gray-500 font-medium">Annual Maintenance</div>
                  <div className="text-2xl font-black text-emerald-800 mt-1">
                    ${activeState.annualFee}
                  </div>
                  <div className="text-[10px] text-gray-500">{activeState.annualFeeLabel}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-[11px] text-gray-500 font-medium">State Income Tax</div>
                  <div className="text-xl font-bold text-gray-900 mt-1">
                    {activeState.hasIncomeTax ? "Standard" : "0% (None)"}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-semibold">Keep 100% of profits</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-[11px] text-gray-500 font-medium">Anonymous LLC</div>
                  <div className="text-xl font-bold text-gray-900 mt-1">
                    {activeState.allowsAnonymous ? "Yes (Protected)" : "Public Record"}
                  </div>
                  <div className="text-[10px] text-gray-500">Member privacy</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to={`/pricing?tab=usa&state=${activeState.code}`}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  Form LLC in {activeState.name} Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Pros & Cons */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pros */}
              <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  <Check className="h-4 w-4 text-emerald-600" />
                  Key Advantages
                </div>
                <ul className="space-y-2 text-xs text-gray-600">
                  {activeState.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-800 uppercase tracking-wider">
                  <Star className="h-4 w-4 text-amber-500" />
                  Best Suited For
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeState.bestFor.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="pt-2 border-t border-gray-100 text-[11px] text-gray-500">
                  <b>Watch Out For:</b> {activeState.watchOutFor[0]}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
