import React, { useState } from 'react';
import { X, Check, Shield, Sparkles, Building2, CreditCard, ChevronRight, ArrowRight } from 'lucide-react';
import { usaPackages, ukPackages, canadaPackages, availableAddOns } from '../../data/pricingData';
import { usStates } from '../../data/usStatesData';
import { submitOrderApi } from '../../utils/api';
import confetti from 'canvas-confetti';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialJurisdiction?: 'usa' | 'uk' | 'canada';
  initialPackageId?: string;
  initialStateCode?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialJurisdiction = 'usa',
  initialPackageId,
  initialStateCode = 'WY'
}) => {
  const [jurisdiction, setJurisdiction] = useState<'usa' | 'uk' | 'canada'>(initialJurisdiction);
  const [selectedStateCode, setSelectedStateCode] = useState<string>(initialStateCode);
  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    initialPackageId || (jurisdiction === 'usa' ? 'usa-gold' : jurisdiction === 'uk' ? 'uk-gold' : 'canada-professional')
  );
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const currentPackages = jurisdiction === 'usa' ? usaPackages : jurisdiction === 'uk' ? ukPackages : canadaPackages;
  const currentPackage = currentPackages.find(p => p.id === selectedPackageId) || currentPackages[0];
  const currentState = usStates.find(s => s.code === selectedStateCode) || usStates[0];

  // Calculate pricing
  const basePrice = currentPackage.price;
  const stateFee = jurisdiction === 'usa' ? currentState.filingFee : 0;
  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const item = availableAddOns.find(a => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);
  const totalPrice = basePrice + stateFee + addOnsTotal;
  const currencySymbol = jurisdiction === 'usa' ? '$' : jurisdiction === 'uk' ? '£' : 'CAD $';

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCompleted(true);
    
    // Dispatch to real backend API
    await submitOrderApi({
      companyName: companyName || 'Company Name Pending',
      fullName,
      email,
      phone,
      jurisdiction,
      packageName: currentPackage.name,
      stateCode: selectedStateCode,
      addOns: selectedAddOns,
      totalPrice,
      currency: currencySymbol.replace('$', '').trim() || 'USD'
    });

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleWhatsAppRedirect = () => {
    const summary = `*New LLC Order - MR EXPERT SOLUTION*
• Company Name: ${companyName || 'Not decided yet'}
• Founder: ${fullName} (${email})
• Phone: ${phone}
• Jurisdiction: ${jurisdiction.toUpperCase()}
• Plan: ${currentPackage.name} (${currencySymbol}${currentPackage.price})
${jurisdiction === 'usa' ? `• Selected State: ${currentState.name} (Fee: $${currentState.filingFee})\n` : ''}• Add-ons: ${selectedAddOns.join(', ') || 'None'}
• Total Estimated: ${currencySymbol}${totalPrice}
Please confirm my order details!`;

    const encoded = encodeURIComponent(summary);
    window.open(`https://wa.me/923291666671?text=${encoded}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-emerald-100 overflow-hidden my-8 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-emerald-900 text-white">
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-emerald-400" />
            <h2 className="text-lg font-bold font-display">
              {isCompleted ? 'Order Application Received' : 'Configure Your Company Formation'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {!isCompleted ? (
          <div className="overflow-y-auto p-6 space-y-6 flex-1">
            {/* Step 1: Jurisdiction Selector */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                1. Select Formation Jurisdiction
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setJurisdiction('usa');
                    setSelectedPackageId('usa-gold');
                  }}
                  className={`py-3 px-3 rounded-xl border text-center transition-all font-medium text-xs sm:text-sm ${
                    jurisdiction === 'usa'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/20 font-bold'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  🇺🇸 United States (LLC)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setJurisdiction('uk');
                    setSelectedPackageId('uk-gold');
                  }}
                  className={`py-3 px-3 rounded-xl border text-center transition-all font-medium text-xs sm:text-sm ${
                    jurisdiction === 'uk'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/20 font-bold'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  🇬🇧 United Kingdom (LTD)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setJurisdiction('canada');
                    setSelectedPackageId('canada-professional');
                  }}
                  className={`py-3 px-3 rounded-xl border text-center transition-all font-medium text-xs sm:text-sm ${
                    jurisdiction === 'canada'
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/20 font-bold'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  🇨🇦 Canada (Federal Corp)
                </button>
              </div>
            </div>

            {/* Step 2: US State Selector (if USA) */}
            {jurisdiction === 'usa' && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    2. Choose US State (Includes State Filing Fee)
                  </label>
                  <span className="text-xs text-emerald-700 font-medium">
                    Wyoming & New Mexico: 0% State Tax
                  </span>
                </div>
                <select
                  value={selectedStateCode}
                  onChange={(e) => setSelectedStateCode(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-600/30 font-medium text-sm text-gray-800"
                >
                  {usStates.map((st) => (
                    <option key={st.code} value={st.code}>
                      {st.name} {st.flag} — State Fee: ${st.filingFee} {st.highlight ? `(${st.highlight})` : ''}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Step 3: Choose Package */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                3. Choose Service Tier
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {currentPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`relative p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      selectedPackageId === pkg.id
                        ? 'border-emerald-600 bg-emerald-50/70 ring-2 ring-emerald-600/20 shadow-sm'
                        : 'border-gray-200 hover:border-emerald-200 hover:bg-gray-50'
                    }`}
                  >
                    {pkg.ribbon && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md inline-block mb-1 w-max">
                        {pkg.ribbon}
                      </span>
                    )}
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{pkg.name}</div>
                      <div className="text-[11px] text-gray-500 line-clamp-1">{pkg.tagline}</div>
                    </div>
                    <div className="mt-3">
                      <span className="text-lg font-black text-emerald-800">
                        {currencySymbol}{pkg.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                4. Recommended Add-On Services
              </label>
              <div className="space-y-2">
                {availableAddOns.map((addon) => {
                  const isSelected = selectedAddOns.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-emerald-600 bg-emerald-50/50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-5 w-5 rounded-md flex items-center justify-center border transition-colors ${
                            isSelected
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'border-gray-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-800">{addon.name}</div>
                          <div className="text-[11px] text-gray-500">{addon.description}</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-emerald-800 whitespace-nowrap pl-2">
                        +${addon.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 5: User & Company Info */}
            <form id="order-form" onSubmit={handleSubmit} className="space-y-3 pt-2 border-t border-gray-100">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                5. Applicant Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Proposed Company Name (e.g. Apex Global LLC)"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                />
                <input
                  type="text"
                  required
                  placeholder="Your Full Legal Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Phone (with country code)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-4 my-auto">
            <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-8 w-8 stroke-[3]" />
            </div>
            <h3 className="text-2xl font-bold font-display text-gray-900">
              Application Ready to Finalize!
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              We’ve prepared your configuration for <b>{companyName || 'Your Company'}</b> under the <b>{currentPackage.name}</b> package.
            </p>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 max-w-md mx-auto text-left text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-gray-500">Applicant:</span>
                <span className="font-semibold text-gray-900">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Package Base:</span>
                <span className="font-semibold text-gray-900">{currencySymbol}{basePrice}</span>
              </div>
              {jurisdiction === 'usa' && (
                <div className="flex justify-between">
                  <span className="text-gray-500">State Filing ({currentState.name}):</span>
                  <span className="font-semibold text-gray-900">${stateFee}</span>
                </div>
              )}
              {selectedAddOns.length > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Selected Add-ons ({selectedAddOns.length}):</span>
                  <span className="font-semibold text-gray-900">+${addOnsTotal}</span>
                </div>
              )}
              <div className="pt-2 border-t border-emerald-200 flex justify-between text-sm font-bold text-emerald-900">
                <span>Total Estimated:</span>
                <span>{currencySymbol}{totalPrice}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="py-3 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
              >
                Send Order & Chat on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Footer Summary Bar */}
        {!isCompleted && (
          <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-gray-500">Estimated Total:</div>
              <div className="text-xl font-black text-emerald-800">
                {currencySymbol}{totalPrice}
                {jurisdiction === 'usa' && (
                  <span className="text-xs font-normal text-gray-500 ml-1">
                    (Plan + {currentState.name} State Fee)
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              form="order-form"
              className="py-3 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-lg shadow-emerald-700/25 flex items-center gap-2 transition-all hover:-translate-y-0.5"
            >
              Continue Application
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
