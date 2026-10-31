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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Everything You Need To Build A{" "}
            <span className="text-gradient">Compliant Global Entity</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            From initial state registration to high-limit payment processing and corporate banking, we provide the complete legal stack for international entrepreneurs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Price */}
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-100">
                    {service.badge}
                  </span>
                  <span className="text-xs font-bold text-gray-900 font-mono bg-gray-50 px-2.5 py-1 rounded-lg">
                    {service.price}
                  </span>
                </div>

                {/* Service Illustration if available */}
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

                {/* Title & Desc */}
                <h3 className="text-xl font-bold font-display text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Feature Highlights */}
                <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-600">
                  {service.whatIsIncluded.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">
                  Timeline: {service.timeline}
                </span>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-1 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="mt-12 text-center">
          <Link
            to="/all-services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 font-semibold text-sm shadow-sm transition-all hover:border-emerald-300"
          >
            <span>View All Formation & Banking Services</span>
            <ArrowRight className="h-4 w-4 text-emerald-600" />
          </Link>
        </div>

      </div>
    </section>
  );
};
