import React from 'react';
import { Star, CheckCircle2, ShieldCheck, Quote, Sparkles, Building2 } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="section-badge">
            Client Reviews & Trust
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Trusted By Global <span className="text-gradient">Entrepreneurs</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Read verified reviews from founders who formed their US LLCs, opened business bank accounts, and scaled their eCommerce stores with MR EXPERT SOLUTION.
          </p>

          {/* Rating Summary Card */}
          <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm max-w-xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
            <div>
              <div className="text-4xl font-black text-gray-900 font-display">4.8 / 5.0</div>
              <div className="flex text-amber-400 mt-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">Based on 50+ customer reviews</div>
            </div>

            <div className="h-12 w-px bg-gray-200 hidden sm:block" />

            <div>
              <div className="text-4xl font-black text-emerald-800 font-display">98%</div>
              <div className="text-xs font-bold text-gray-800 mt-1">Recommended Rate</div>
              <div className="text-xs text-gray-500 mt-0.5">First-time approval guarantee</div>
            </div>
          </div>
        </div>

        {/* Video Testimonials Feature */}
        <div className="mb-16 rounded-3xl bg-emerald-950 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-800 text-emerald-300 text-xs font-semibold">
                Brand Film & Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                How Founders Launch From Pakistan, UAE & Europe
              </h2>
              <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed">
                Watch how Muhammad Awais and the MR EXPERT SOLUTION team guide clients through IRS filings, US bank accounts on Mercury, and payment processors.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-emerald-300">
                <span>✓ Real client interviews</span>
                <span>✓ Remote proof of approval</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-emerald-900/50 border border-emerald-800/80 flex items-center justify-center shadow-lg">
                <img
                  src="/assets/brand-video-poster-BJYJCKo1.jpg"
                  alt="Brand Film Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
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

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

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
    </div>
  );
};
