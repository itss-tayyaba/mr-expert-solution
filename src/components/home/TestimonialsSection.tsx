import React from 'react';
import { Star, CheckCircle2, Quote, ExternalLink } from 'lucide-react';
import { testimonials } from '../../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="section-badge">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Hear From Our Global <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            See how international entrepreneurs launched their US LLCs and UK LTDs with seamless bank approvals and 5-star support.
          </p>

          {/* Trustpilot summary bar */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white border border-gray-200/80 shadow-sm text-xs mt-2">
            <span className="font-bold text-[#00b67a] text-sm">★ Trustpilot</span>
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-extrabold text-gray-900 text-sm">4.8 / 5.0</span>
            <span className="text-gray-400">· Over 50+ Verified Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Service */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-100">
                    {review.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-10 w-10 rounded-full object-cover border border-emerald-200"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                      {review.initials}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-gray-900 flex items-center gap-1">
                      {review.name}
                      {review.verified && (
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                      )}
                    </div>
                    <div className="text-[11px] text-gray-500">
                      {review.role} · {review.country}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] text-gray-400 font-medium">
                  {review.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
