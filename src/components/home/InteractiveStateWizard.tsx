import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Check, ArrowRight, ShieldCheck, DollarSign, Building2, 
  HelpCircle, RefreshCw, Zap, Award, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { OrderModal } from '../shared/OrderModal';

interface QuizOption {
  id: string;
  label: string;
  desc: string;
  icon: string;
}

interface StateRecommendation {
  name: string;
  code: 'WY' | 'DE' | 'NM' | 'FL';
  matchScore: number;
  badge: string;
  tagline: string;
  filingFee: string;
  annualFee: string;
  franchiseTax: string;
  privacy: string;
  bestFor: string;
  reasons: string[];
}

export const InteractiveStateWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [businessType, setBusinessType] = useState<string>('ecommerce');
  const [residency, setResidency] = useState<string>('non_us');
  const [priority, setPriority] = useState<string>('privacy_tax');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedStateCode, setSelectedStateCode] = useState<string>('WY');

  const businessTypes: QuizOption[] = [
    { id: 'ecommerce', label: 'E-commerce & Amazon', desc: 'Shopify, Amazon FBA, dropshipping, Stripe payments', icon: '🛍️' },
    { id: 'saas_tech', label: 'SaaS, AI & Tech', desc: 'Software platforms, venture capital, apps & digital products', icon: '💻' },
    { id: 'consulting', label: 'Agency & Consulting', desc: 'Remote freelancing, marketing, B2B services, global clients', icon: '💼' },
    { id: 'crypto_holding', label: 'Holding & Assets', desc: 'IP holding, investments, privacy & asset protection', icon: '🏛️' },
  ];

  const residencyOptions: QuizOption[] = [
    { id: 'non_us', label: 'Non-US Resident', desc: 'No US Social Security Number (SSN), live outside the United States', icon: '🌍' },
    { id: 'us_resident', label: 'US Citizen / Resident', desc: 'Have a valid SSN or ITIN, resident in one of the 50 US states', icon: '🇺🇸' },
  ];

  const priorities: QuizOption[] = [
    { id: 'privacy_tax', label: '0% State Tax & Maximum Privacy', desc: 'Keep owners anonymous and pay $0 state corporate income tax', icon: '🛡️' },
    { id: 'lowest_maintenance', label: 'Lowest Ongoing Annual Costs', desc: 'Minimal yearly filing hassle and cheapest renewal fees', icon: '💰' },
    { id: 'vc_investor', label: 'Venture Capital & Investor Appeal', desc: 'Prestigious corporate law system for raising American funding', icon: '🚀' },
  ];

  // Dynamic recommendation logic
  const getRecommendation = (): StateRecommendation => {
    if (priority === 'vc_investor' || businessType === 'saas_tech') {
      return {
        name: 'Delaware LLC / C-Corp',
        code: 'DE',
        matchScore: 98,
        badge: 'Top Pick for Tech & Investors',
        tagline: 'The global gold standard for American venture capital, tech startups & Fortune 500 companies.',
        filingFee: '$140',
        annualFee: '$300/yr (Flat Franchise Tax)',
        franchiseTax: 'Flat rate',
        privacy: 'Public Registry',
        bestFor: 'SaaS, tech platforms, angel investment, international prestige',
        reasons: [
          'Prestige recognized by 68% of Fortune 500 corporations',
          'Dedicated Court of Chancery specializing exclusively in business disputes',
          'Preferred by US venture capitalists and institutional angel investors',
          'Instant corporate banking approval with Mercury, Brex and Stripe Atlas'
        ]
      };
    } else if (priority === 'lowest_maintenance') {
      return {
        name: 'New Mexico LLC',
        code: 'NM',
        matchScore: 97,
        badge: 'Lowest Lifetime Maintenance',
        tagline: 'The absolute lowest ongoing annual cost with complete 100% legal privacy.',
        filingFee: '$50',
        annualFee: '$0 / Year (No Annual Report!)',
        franchiseTax: 'None ($0)',
        privacy: '100% Anonymous (No public records)',
        bestFor: 'Budget-conscious founders, e-commerce, maximum ongoing savings',
        reasons: [
          'Zero ($0) annual franchise tax or annual state report fees for life',
          'State filing fee is only $50 (cheapest state in the USA)',
          'Complete anonymous ownership protection: your name is never made public',
          'Standard US banking and Stripe account acceptance'
        ]
      };
    } else {
      // Default: Wyoming LLC
      return {
        name: 'Wyoming LLC',
        code: 'WY',
        matchScore: 99,
        badge: '#1 Recommended for Non-Residents',
        tagline: 'The undisputed champion for international founders: zero state taxes, strong privacy & low fees.',
        filingFee: '$102',
        annualFee: '$60 / Year',
        franchiseTax: '0% State Corporate Tax',
        privacy: 'Full Anonymity (Nominee / Registered Agent)',
        bestFor: 'Non-US residents, Amazon sellers, Stripe merchants, digital agencies',
        reasons: [
          '0% state income tax, 0% corporate tax, 0% personal income tax',
          'Strict privacy laws: owner details are not published in public state databases',
          'Very low annual state maintenance fee ($60/year)',
          'World-class protection for foreign founders holding US bank accounts'
        ]
      };
    }
  };

  const recommendation = getRecommendation();

  const handleStartWithState = (code: string) => {
    setSelectedStateCode(code);
    setOrderModalOpen(true);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setBusinessType('ecommerce');
    setResidency('non_us');
    setPriority('privacy_tax');
  };

  return (
    <>
      <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white">
        {/* Ambient neon radial glows */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 border border-indigo-400/30 text-indigo-300">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>Interactive AI State Matcher</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Unsure Where to Form? <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-300 to-teal-200">
                Find Your Ideal US State in 30 Seconds
              </span>
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Answer 3 fast questions to calculate the perfect state jurisdiction based on annual taxes, privacy, Stripe compatibility, and ongoing compliance costs.
            </p>
          </div>

          {/* Interactive Card Container */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl p-6 sm:p-10 relative overflow-hidden">
            
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2 sm:gap-3">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    onClick={() => step < currentStep && setCurrentStep(step)}
                    className={`flex items-center gap-2 text-xs font-semibold cursor-pointer transition-colors ${
                      currentStep === step 
                        ? 'text-cyan-400' 
                        : currentStep > step 
                        ? 'text-slate-400 hover:text-white' 
                        : 'text-slate-600'
                    }`}
                  >
                    <div className={`h-7 w-7 rounded-full flex items-center justify-center font-bold text-xs ${
                      currentStep === step 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/40' 
                        : currentStep > step 
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-800' 
                        : 'bg-slate-800 text-slate-500'
                    }`}>
                      {currentStep > step ? <Check className="h-3.5 w-3.5" /> : step}
                    </div>
                    <span className="hidden sm:inline">
                      {step === 1 ? 'Business Type' : step === 2 ? 'Residency' : 'Priority'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-xs font-medium text-slate-400">
                {currentStep <= 3 ? `Step ${currentStep} of 3` : 'Result Ready'}
              </div>
            </div>

            {/* Quiz Content with Animations */}
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">What is your primary business activity?</h3>
                    <p className="text-xs text-slate-400">This helps determine tax liabilities and banking underwriting criteria.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {businessTypes.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setBusinessType(item.id)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-start gap-3.5 group ${
                          businessType === item.id
                            ? 'bg-indigo-950/70 border-indigo-500 shadow-lg shadow-indigo-500/20'
                            : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/70'
                        }`}
                      >
                        <span className="text-2xl p-2 rounded-xl bg-slate-800 shrink-0 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <div>
                          <div className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center gap-2 hover:opacity-95 transition-opacity"
                    >
                      Next Step <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">What is your residency status?</h3>
                    <p className="text-xs text-slate-400">Non-US residents have special exemptions that make certain states drastically cheaper.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {residencyOptions.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setResidency(item.id)}
                        className={`p-5 rounded-2xl text-left border transition-all duration-200 flex items-start gap-3.5 group ${
                          residency === item.id
                            ? 'bg-indigo-950/70 border-indigo-500 shadow-lg shadow-indigo-500/20'
                            : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/70'
                        }`}
                      >
                        <span className="text-2xl p-2 rounded-xl bg-slate-800 shrink-0 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <div>
                          <div className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-slate-400 mt-1">
                            {item.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 flex items-center gap-2 hover:opacity-95 transition-opacity"
                    >
                      Next Step <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">What is your #1 corporate priority?</h3>
                    <p className="text-xs text-slate-400">Choose the factor that matters most to your long-term success.</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5">
                    {priorities.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setPriority(item.id)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-center gap-4 group ${
                          priority === item.id
                            ? 'bg-indigo-950/70 border-indigo-500 shadow-lg shadow-indigo-500/20'
                            : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/70'
                        }`}
                      >
                        <span className="text-2xl p-2 rounded-xl bg-slate-800 shrink-0 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </span>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {item.desc}
                          </div>
                        </div>
                        <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${
                          priority === item.id ? 'border-cyan-400 bg-cyan-400 text-slate-900' : 'border-slate-600'
                        }`}>
                          {priority === item.id && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 flex items-center gap-2 hover:opacity-95 transition-opacity"
                    >
                      <Sparkles className="h-4 w-4" /> Calculate My Best State
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Final Recommendation Screen */}
              {currentStep === 4 && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-indigo-900/60 via-slate-800/80 to-cyan-950/60 border border-indigo-500/40">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 mb-2">
                        <Award className="h-3 w-3" />
                        {recommendation.badge}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                        <span>{recommendation.name}</span>
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {recommendation.matchScore}% Optimal Match
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                        {recommendation.tagline}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="self-start sm:self-center inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <RefreshCw className="h-3.5 w-3.5" /> Re-take Quiz
                    </button>
                  </div>

                  {/* Stat Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider">State Filing Fee</div>
                      <div className="text-base sm:text-lg font-bold text-white mt-1">{recommendation.filingFee}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider">Annual State Fee</div>
                      <div className="text-base sm:text-lg font-bold text-cyan-300 mt-1">{recommendation.annualFee}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider">Franchise Tax</div>
                      <div className="text-base sm:text-lg font-bold text-emerald-300 mt-1">{recommendation.franchiseTax}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60">
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider">Ownership Privacy</div>
                      <div className="text-base sm:text-lg font-bold text-indigo-300 mt-1">{recommendation.privacy}</div>
                    </div>
                  </div>

                  {/* Why this is your best match */}
                  <div className="p-5 rounded-2xl bg-slate-800/30 border border-slate-800 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Why {recommendation.name} is Your Optimal Choice:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                      {recommendation.reasons.map((reason, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-400">
                      Includes official Articles of Organization, Registered Agent & EIN package.
                    </div>
                    <button
                      type="button"
                      onClick={() => handleStartWithState(recommendation.code)}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Sparkles className="h-4 w-4" />
                      Form My {recommendation.name} Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* LLC Order Application Modal preloaded */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialStateCode={selectedStateCode}
      />
    </>
  );
};
