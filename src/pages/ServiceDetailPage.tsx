import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Check, ArrowRight, ShieldCheck, Clock, DollarSign, 
  Sparkles, CheckCircle2, ChevronDown, MessageCircle, FileText 
} from 'lucide-react';
import { servicesList } from '../data/servicesData';
import { OrderModal } from '../components/shared/OrderModal';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Normalize slug in case of alias (e.g. 'ein-service' -> 'ein')
  const actualSlug = slug === 'ein-service' ? 'ein' : slug;
  const service = servicesList.find((s) => s.slug === actualSlug);

  if (!service) {
    return <Navigate to="/all-services" replace />;
  }

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <Link to="/all-services" className="hover:text-emerald-700">Services</Link>
          <span>/</span>
          <span className="font-semibold text-gray-800">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-950 to-gray-950 text-white p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800 border border-emerald-700 text-emerald-300 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                {service.badge}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-2xl">
                {service.heroSubhead}
              </p>

              {/* Price & Timeline pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold">
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-emerald-300">
                  <DollarSign className="h-4 w-4" />
                  <span>Price: {service.price}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-emerald-300">
                  <Clock className="h-4 w-4" />
                  <span>Timeline: {service.timeline}</span>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={() => setOrderModalOpen(true)}
                  className="py-3.5 px-7 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-sm shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4" />
                  Order {service.title}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={`https://wa.me/923291666671?text=${encodeURIComponent(
                    `Hi MR EXPERT SOLUTION, I have a question about ${service.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Service Illustration */}
            {service.image && (
              <div className="lg:col-span-4 flex justify-center">
                <div className="p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-h-64 w-auto object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* What is Included */}
            <div className="rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                What Is Included In This Service
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.whatIsIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                Why Founders Choose MR EXPERT SOLUTION
              </h2>
              <ul className="space-y-3 pt-1">
                {service.whyChooseUs.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-sm text-gray-700 font-medium leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements / Prerequisites */}
            <div className="rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-8 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                Required Information From You
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                No complex paperwork. You only need to provide basic digital documents to get started:
              </p>
              <div className="space-y-2 pt-1">
                {service.prerequisites.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm text-gray-800">
                    <FileText className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service FAQs */}
            {service.faqs.length > 0 && (
              <div className="rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-gray-900">
                  Questions About {service.title}
                </h2>
                <div className="space-y-3 pt-2">
                  {service.faqs.map((faq, idx) => {
                    const isOpen = openFaqIdx === idx;
                    return (
                      <div key={idx} className="rounded-2xl border border-gray-100 overflow-hidden">
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full p-4 text-left font-bold text-sm text-gray-900 flex items-center justify-between gap-4 bg-gray-50/60 hover:bg-gray-50"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown className={`h-4 w-4 text-emerald-700 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="p-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-3xl bg-white border border-emerald-200 p-6 shadow-xl space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Service Order Summary
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                <div className="text-3xl font-black text-emerald-800 font-display mt-2">
                  {service.price}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Estimated turnaround: <b>{service.timeline}</b>
                </div>
              </div>

              <div className="space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>100% Online process</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Official government certified documents</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Direct WhatsApp support included</span>
                </div>
              </div>

              <button
                onClick={() => setOrderModalOpen(true)}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
              >
                <span>Get Started Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="pt-2 text-center">
                <a
                  href="https://wa.me/923291666671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Ask question via WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialJurisdiction={service.id === 'uk-ltd' ? 'uk' : service.id === 'canada' ? 'canada' : 'usa'}
      />
    </div>
  );
};
