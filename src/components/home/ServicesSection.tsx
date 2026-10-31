import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Sparkles, Building2, Globe, CreditCard, 
  Zap, FileText, Award, Shield, LayoutGrid, ListFilter, Clock, Check
} from 'lucide-react';
import { servicesList, ServiceItem } from '../../data/servicesData';
import { OrderModal } from '../shared/OrderModal';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('usa-llc-formation');

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'us', label: '🇺🇸 US Formations', matchIds: ['usa-llc', 'ein', 'itin', 'trademark'] },
    { id: 'uk_global', label: '🇬🇧 UK & Canada', matchIds: ['uk-ltd', 'canada-co'] },
    { id: 'fintech', label: '💳 Banking & Gateways', matchIds: ['banking', 'payment-gateways'] },
    { id: 'compliance', label: '📊 Tax & Trademark', matchIds: ['tax-filing', 'trademark', 'itin'] },
  ];

  const filteredServices = servicesList.filter((s) => {
    if (activeCategory === 'all') return true;
    const cat = categories.find((c) => c.id === activeCategory);
    if (!cat?.matchIds) return true;
    return cat.matchIds.some((id) => s.id.includes(id) || s.slug.includes(id));
  });

  const handleQuickApply = (slug: string) => {
    setSelectedServiceSlug(slug);
    setOrderModalOpen(true);
  };

  return (
    <>
      <section className="py-20 sm:py-28 bg-gradient-to-b from-background via-slate-50/50 to-background relative overflow-hidden">
        
        {/* Ambient background aura */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
            <div className="section-badge">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Full-Stack Corporate Suite</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-gray-900">
              Modern Solutions for <br />
              <span className="text-gradient">Borderline-Free Global Business</span>
            </h2>
            
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Everything required to launch, capitalize, and operate an American or British entity — engineered specifically for non-resident international entrepreneurs.
            </p>

            {/* Filter Pills & View Mode Switcher */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-slate-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* View Switcher Button */}
              <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg flex items-center gap-1 transition-all ${
                    viewMode === 'grid' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-gray-500'
                  }`}
                  title="Interactive Grid View"
                >
                  <LayoutGrid className="h-3.5 w-3.5" />
                  <span>Cards</span>
                </button>
                <button
                  onClick={() => setViewMode('detailed')}
                  className={`p-1.5 rounded-lg flex items-center gap-1 transition-all ${
                    viewMode === 'detailed' ? 'bg-white text-indigo-700 shadow-xs font-bold' : 'text-gray-500'
                  }`}
                  title="Detailed Showcase View"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span>Showcase</span>
                </button>
              </div>
            </div>
          </div>

          {/* VIEW MODE 1: Interactive Modern Bento Grid Cards */}
          {viewMode === 'grid' && (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="group rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-500/50 p-6 sm:p-7 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Top Accent Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Badge and Price */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                          {service.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-gray-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                          {service.price}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold font-display text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-gray-600 leading-relaxed mb-5 line-clamp-2">
                        {service.shortDesc}
                      </p>

                      {/* Key Features Bullet List */}
                      <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                        {service.whatIsIncluded.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                            <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-slate-100/80 space-y-3">
                      <div className="flex items-center justify-between text-[11px] text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-indigo-500" />
                          <span>Turnaround: <b>{service.timeline}</b></span>
                        </span>
                        <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                          <Check className="h-3 w-3" /> Guaranteed
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleQuickApply(service.slug)}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-1"
                        >
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>Apply Now</span>
                        </button>
                        
                        <Link
                          to={`/services/${service.slug}`}
                          className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-indigo-300 bg-slate-50 hover:bg-indigo-50/50 text-gray-800 hover:text-indigo-700 font-semibold text-xs text-center transition-all flex items-center justify-center gap-1"
                        >
                          <span>Details</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {/* VIEW MODE 2: Detailed Alternating Showcase */}
          {viewMode === 'detailed' && (
            <div className="max-w-5xl mx-auto space-y-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  {/* Text Left (7 Cols) */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-bold border border-indigo-200/60">
                        {service.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-gray-900 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {service.price}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-gray-700">
                      {service.whatIsIncluded.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-indigo-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 flex items-center justify-between border-t border-slate-100">
                      <span className="text-[11px] text-gray-400 font-medium">
                        Estimated Turnaround: <b>{service.timeline}</b>
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleQuickApply(service.slug)}
                          className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors"
                        >
                          Quick Apply
                        </button>
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 group-hover:translate-x-1 transition-all"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Illustration Right (5 Cols) */}
                  <div className="md:col-span-5 flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-indigo-50/60 to-cyan-50/30 border border-indigo-100/60">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full max-h-48 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="h-44 w-full flex items-center justify-center">
                        <Building2 className="h-16 w-16 text-indigo-400" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Trust Action */}
          <div className="text-center mt-12 pt-8 border-t border-slate-200/80">
            <Link
              to="/all-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-lg transition-all hover:scale-105"
            >
              <span>Explore All 12 Corporate Services & Add-Ons</span>
              <ArrowRight className="h-4 w-4 text-cyan-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* LLC Order Application Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
};
