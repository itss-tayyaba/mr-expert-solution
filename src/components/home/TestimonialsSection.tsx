import React from 'react';
import { Star, CheckCircle2, Play, ShieldCheck, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonialsData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-emerald-950/5">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="section-badge">
            <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Hear From Our Global <span className="text-gradient">Founders</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            See how international entrepreneurs launched their US LLCs and UK LTDs with seamless bank approvals and 5-star dedicated support.
          </p>

          {/* Trustpilot summary bar */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white border border-gray-200/90 shadow-sm text-xs mt-2">
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

        {/* 4 Client Video / Story Cards Grid (Exact Match to Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 4).map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-white border border-gray-200/90 p-5 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header with Play Indicator */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-900 mb-4 group cursor-pointer">
                  {review.avatar && (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                    <span className="font-semibold">{review.country}</span>
                    <span className="text-emerald-300 font-mono">Verified Founder</span>
                  </div>
                </div>

                {/* Rating & Service */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800">
                    5.0
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs text-gray-700 leading-relaxed italic line-clamp-4">
                  "{review.content}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-gray-900 flex items-center gap-1">
                    {review.name}
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  </div>
                  <div className="text-[10px] text-gray-500">
                    {review.role}
                  </div>
                </div>
                <span className="text-[10px] text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
