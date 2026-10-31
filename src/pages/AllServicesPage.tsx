import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Building2, Globe, Shield, CreditCard, Zap, FileText } from 'lucide-react';
import { servicesList } from '../data/servicesData';

export const AllServicesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="section-badge">
            Comprehensive Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            All Company Formation & <span className="text-gradient">Banking Services</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Everything foreign founders need to form entities, obtain IRS tax IDs, open corporate bank accounts, register trademarks, and accept global payments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-100">
                    {service.badge}
                  </span>
                  <span className="text-xs font-bold text-gray-900 font-mono bg-gray-50 px-2.5 py-1 rounded-lg">
                    {service.price}
                  </span>
                </div>

                {service.image && (
                  <div className="mb-4 h-36 rounded-2xl overflow-hidden bg-emerald-50/50 flex items-center justify-center p-2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                <h3 className="text-xl font-bold font-display text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-600">
                  {service.whatIsIncluded.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">
                  Timeline: {service.timeline}
                </span>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all"
                >
                  View Details
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
