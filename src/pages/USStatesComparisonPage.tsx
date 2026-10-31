import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Filter, Check, Star, Shield, ArrowUpDown, 
  ArrowRight, Sparkles, Building2, HelpCircle 
} from 'lucide-react';
import { usStates, USState } from '../data/usStatesData';
import { OrderModal } from '../components/shared/OrderModal';

export const USStatesComparisonPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNiche, setSelectedNiche] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'score' | 'filingFee' | 'annualFee' | 'name'>('score');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [targetStateCode, setTargetStateCode] = useState('WY');

  const niches = [
    { id: 'all', label: 'All Businesses' },
    { id: 'ecommerce', label: 'E-commerce & Amazon' },
    { id: 'saas', label: 'SaaS & Tech' },
    { id: 'dropshipping', label: 'Dropshipping' },
    { id: 'consulting', label: 'Agencies & Consulting' },
    { id: 'holding', label: 'Holding & Asset Protection' },
    { id: 'crypto', label: 'Crypto & Web3' }
  ];

  const filteredStates = useMemo(() => {
    return usStates
      .filter((st) => {
        const matchesSearch =
          st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          st.code.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesNiche =
          selectedNiche === 'all' || st.niches.includes(selectedNiche);
        return matchesSearch && matchesNiche;
      })
      .sort((a, b) => {
        if (sortBy === 'score') return b.nonResidentScore - a.nonResidentScore;
        if (sortBy === 'filingFee') return a.filingFee - b.filingFee;
        if (sortBy === 'annualFee') return a.annualFee - b.annualFee;
        return a.name.localeCompare(b.name);
      });
  }, [searchQuery, selectedNiche, sortBy]);

  const handleStartLLC = (code: string) => {
    setTargetStateCode(code);
    setOrderModalOpen(true);
  };

  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="section-badge">
            Comprehensive Data Matrix
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Compare All 50 <span className="text-gradient">US States For LLC</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Real government fee data, annual franchise tax obligations, privacy protections, and non-resident suitability ratings. Filter by your exact business model.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 sm:p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm space-y-4 mb-8">
          
          {/* Top Search & Sort Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search state name or code (e.g. Wyoming, DE)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              />
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs text-gray-500 font-semibold whitespace-nowrap">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              >
                <option value="score">Non-Resident Rating (Highest)</option>
                <option value="filingFee">Lowest Filing Fee</option>
                <option value="annualFee">Lowest Annual Fee</option>
                <option value="name">Alphabetical</option>
              </select>
            </div>

          </div>

          {/* Niche Pills Filter */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            <span className="text-xs font-bold text-gray-400 mr-2 flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" />
              Filter By Model:
            </span>
            {niches.map((niche) => (
              <button
                key={niche.id}
                onClick={() => setSelectedNiche(niche.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedNiche === niche.id
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {niche.label}
              </button>
            ))}
          </div>

        </div>

        {/* States Comparison Table */}
        <div className="rounded-3xl bg-white border border-gray-200/80 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-emerald-950 text-white font-bold text-xs uppercase tracking-wider">
                  <th className="py-4 px-5">State & Recommendation</th>
                  <th className="py-4 px-4 text-center">Non-Resident Rating</th>
                  <th className="py-4 px-4">State Filing Fee</th>
                  <th className="py-4 px-4">Annual Fee / Franchise Tax</th>
                  <th className="py-4 px-4">State Income Tax</th>
                  <th className="py-4 px-4">Anonymous Privacy</th>
                  <th className="py-4 px-5 text-right">Form LLC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredStates.map((st) => (
                  <tr
                    key={st.code}
                    className="hover:bg-emerald-50/40 transition-colors group"
                  >
                    {/* State & Name */}
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{st.flag}</span>
                        <div>
                          <div className="font-extrabold text-gray-900 group-hover:text-emerald-800 transition-colors">
                            {st.name} <span className="font-mono text-xs text-gray-400">({st.code})</span>
                          </div>
                          {st.highlight && (
                            <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                              {st.highlight}
                            </span>
                          )}
                          <div className="text-[11px] text-gray-500 mt-1 line-clamp-1 max-w-xs">
                            {st.pros[0]}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Rating */}
                    <td className="py-4 px-4 text-center">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span>{st.nonResidentScore}/5</span>
                      </div>
                    </td>

                    {/* Filing Fee */}
                    <td className="py-4 px-4 font-bold text-gray-900 font-mono">
                      ${st.filingFee}
                      <span className="block text-[10px] font-normal text-gray-400">One-time</span>
                    </td>

                    {/* Annual Fee */}
                    <td className="py-4 px-4 font-bold text-gray-900 font-mono">
                      ${st.annualFee}
                      <span className="block text-[10px] font-normal text-gray-400">{st.annualFeeLabel}</span>
                    </td>

                    {/* Income Tax */}
                    <td className="py-4 px-4">
                      {st.hasIncomeTax ? (
                        <span className="text-gray-700 font-medium">Standard State Tax</span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-xs">
                          0% State Tax
                        </span>
                      )}
                    </td>

                    {/* Privacy */}
                    <td className="py-4 px-4">
                      {st.allowsAnonymous ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold text-xs">
                          <Shield className="h-3.5 w-3.5 text-emerald-600" />
                          Anonymous
                        </span>
                      ) : (
                        <span className="text-gray-500 text-xs">Public Members</span>
                      )}
                    </td>

                    {/* Action */}
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleStartLLC(st.code)}
                        className="py-2 px-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-sm transition-all hover:-translate-y-0.5"
                      >
                        Form in {st.code}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* State Selection Guide Info Box */}
        <div className="mt-16 p-8 rounded-3xl bg-emerald-50 border border-emerald-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="font-bold text-emerald-950 text-base">
              Why Non-Residents Pick Wyoming
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Wyoming is the #1 recommended jurisdiction for international founders. It has 0% state income tax, low $60 annual reports, anonymous member protection, and zero state business licensing requirements.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-emerald-950 text-base">
              Why Tech Founders Pick Delaware
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Delaware is world-renowned for its specialized Court of Chancery. US venture capital firms and institutional investors strongly prefer or require Delaware legal entities before issuing checks.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-emerald-950 text-base">
              Why New Mexico Is Budget-Friendly
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              New Mexico offers the lowest recurring maintenance cost with $0 annual report fees and strong ownership privacy, making it an excellent choice for bootstrapped online businesses.
            </p>
          </div>
        </div>

      </div>

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialJurisdiction="usa"
        initialStateCode={targetStateCode}
      />
    </div>
  );
};
