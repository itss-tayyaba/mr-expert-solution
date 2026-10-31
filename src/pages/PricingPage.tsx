import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Check, Sparkles, Building2, Globe, Shield, ArrowRight, 
  MessageCircle, HelpCircle, AlertCircle, ChevronRight 
} from 'lucide-react';
import { usaPackages, ukPackages, canadaPackages, availableAddOns } from '../data/pricingData';
import { usStates } from '../data/usStatesData';
import { OrderModal } from '../components/shared/OrderModal';

export const PricingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') === 'uk' ? 'uk' : searchParams.get('tab') === 'canada' ? 'canada' : 'usa';
  const initialState = searchParams.get('state') || 'WY';

  const [activeTab, setActiveTab] = useState<'usa' | 'uk' | 'canada'>(initialTab);
  const [selectedStateCode, setSelectedStateCode] = useState<string>(initialState);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlanForOrder, setSelectedPlanForOrder] = useState<string>('');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'usa' || tab === 'uk' || tab === 'canada') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const currentState = usStates.find(s => s.code === selectedStateCode) || usStates[0];
  const currentPackages = activeTab === 'usa' ? usaPackages : activeTab === 'uk' ? ukPackages : canadaPackages;
  const currencySymbol = activeTab === 'usa' ? '$' : activeTab === 'uk' ? '£' : 'CAD $';

  const handleOpenOrder = (planId: string) => {
    setSelectedPlanForOrder(planId);
    setOrderModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="section-badge">
            Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Company Formation <span className="text-gradient">Pricing & Packages</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Form your US LLC, UK LTD, or Canadian Federal Corporation with zero hidden fees. State filings, EIN, registered agent, and business banking handled end-to-end.
          </p>

          {/* Jurisdiction Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-gray-200/80 shadow-sm mt-4">
            <button
              onClick={() => {
                setActiveTab('usa');
                setSearchParams({ tab: 'usa' });
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'usa'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>🇺🇸</span>
              <span>USA LLC Formation</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('uk');
                setSearchParams({ tab: 'uk' });
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'uk'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>🇬🇧</span>
              <span>UK LTD Formation</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('canada');
                setSearchParams({ tab: 'canada' });
              }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'canada'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>🇨🇦</span>
              <span>Canadian Company</span>
            </button>
          </div>

          {/* USA State Selector Bar */}
          {activeTab === 'usa' && (
            <div className="max-w-xl mx-auto pt-4">
              <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                <div>
                  <div className="text-xs font-bold text-emerald-950">
                    Selected State: {currentState.name} {currentState.flag}
                  </div>
                  <div className="text-[11px] text-emerald-800">
                    State filing fee: <b>${currentState.filingFee}</b> · Annual fee: <b>${currentState.annualFee}</b>
                  </div>
                </div>

                <div className="w-full sm:w-auto">
                  <select
                    value={selectedStateCode}
                    onChange={(e) => setSelectedStateCode(e.target.value)}
                    className="w-full sm:w-auto px-3 py-1.5 rounded-xl bg-white border border-emerald-300 text-xs font-bold text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                  >
                    {usStates.map((st) => (
                      <option key={st.code} value={st.code}>
                        {st.name} (${st.filingFee} state fee)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {currentPackages.map((pkg) => {
            const isPopular = pkg.popular;
            const finalPrice = activeTab === 'usa' ? pkg.price + currentState.filingFee : pkg.price;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl bg-white border transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between ${
                  isPopular
                    ? 'border-emerald-600 shadow-xl ring-2 ring-emerald-600/20'
                    : 'border-gray-200/80 shadow-sm hover:shadow-lg hover:border-emerald-200'
                }`}
              >
                {/* Popular / Ribbon Tag */}
                {pkg.ribbon && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-700 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    {pkg.ribbon}
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-display text-gray-900">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 min-h-[32px]">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pb-5 border-b border-gray-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-gray-900 font-display">
                        {currencySymbol}{pkg.price}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {pkg.priceLabel}
                      </span>
                    </div>

                    {activeTab === 'usa' && (
                      <div className="mt-2 text-[11px] text-emerald-800 bg-emerald-50 px-2 py-1 rounded-md font-semibold">
                        Total with {currentState.name} (${currentState.filingFee} fee): <b>${finalPrice}</b>
                      </div>
                    )}

                    {pkg.renewalPrice && (
                      <div className="mt-1 text-[11px] text-gray-400">
                        Renewal from {currencySymbol}{pkg.renewalPrice}/yr
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="py-5 space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      What's Included
                    </div>
                    <ul className="space-y-2 text-xs text-gray-700">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Canada Breakdown View if available */}
                  {pkg.breakdown && (
                    <div className="pt-2 pb-4 text-[11px] text-gray-500 border-t border-gray-100 space-y-1">
                      <div className="font-bold text-gray-700">Cost Breakdown:</div>
                      {pkg.breakdown.map((item, i) => (
                        <div key={i} className="flex justify-between">
                          <span>{item.label}</span>
                          <span className="font-mono">${item.amount}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={() => handleOpenOrder(pkg.id)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-700/25 hover:-translate-y-0.5'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    <span>Get {pkg.name}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Add On Services Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-bold font-display text-gray-900">
              Optional Add-On Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Enhance your formation package with specialized tax filings, phone numbers, and trademark registrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {availableAddOns.map((addon) => (
              <div
                key={addon.id}
                className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-gray-900">{addon.name}</span>
                    <span className="text-xs font-black text-emerald-800 font-mono">${addon.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {addon.description}
                  </p>
                </div>
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="w-full py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs transition-colors"
                >
                  Add to Order
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Solution / Consultation Banner */}
        <div className="mt-16 text-center max-w-xl mx-auto p-6 rounded-3xl bg-emerald-50 border border-emerald-200 space-y-3">
          <h4 className="font-bold text-gray-900 text-base">
            Need a custom corporate structure or multi-state entity?
          </h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Our corporate setup consultants can structure custom operating agreements, holding company models, or B2B enterprise volume accounts.
          </p>
          <div className="pt-1 flex items-center justify-center gap-3">
            <Link
              to="/contact"
              className="py-2.5 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-md transition-all"
            >
              Book a Free Consultation
            </Link>
            <a
              href="https://wa.me/923291666671"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl bg-white border border-gray-200 text-gray-800 font-semibold text-xs hover:bg-gray-50 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              WhatsApp Specialist
            </a>
          </div>
        </div>

      </div>

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialJurisdiction={activeTab}
        initialPackageId={selectedPlanForOrder}
        initialStateCode={selectedStateCode}
      />
    </div>
  );
};
