import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Building2, Globe, CreditCard, Zap, FileText, Award, Shield } from 'lucide-react';
import { servicesList } from '../../data/servicesData';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="section-badge">
            <Sparkles className="h-3.5 w-3.5" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Everything You Need To Run <span className="text-gradient">Your Business</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            From initial state registration to high-limit payment processing and corporate banking, we provide the complete legal stack for international entrepreneurs.
          </p>
        </div>

        {/* Wide Horizontal Alternating Service Cards (Exact Match to Screenshot) */}
        <div className="max-w-5xl mx-auto space-y-6">
          {servicesList.slice(0, 6).map((service, index) => (
            <div
              key={service.id}
              className="group rounded-3xl bg-white border border-gray-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Text Left (7 Cols) */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200/60">
                    {service.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-lg">
                    {service.price}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-gray-700">
                  {service.whatIsIncluded.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-gray-100">
                  <span className="text-[11px] text-gray-400 font-medium">
                    Estimated Time: <b>{service.timeline}</b>
                  </span>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Illustration Right (5 Cols) */}
              <div className="md:col-span-5 flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-teal-50/20 border border-emerald-100/60">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-40 w-full flex items-center justify-center text-emerald-600">
                    <Building2 className="h-16 w-16 opacity-40" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-12 text-center">
          <Link
            to="/all-services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-lg shadow-emerald-700/25 transition-all hover:-translate-y-0.5"
          >
            <span>View All Formation Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
