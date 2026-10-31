import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { homeFAQs } from '../../data/faqsData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(homeFAQs[0].id);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-white border-t border-emerald-950/5">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="section-badge">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Everything You Need <span className="text-gradient">To Know</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Clear answers to common questions about foreign ownership, IRS compliance, banking, and timelines.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {homeFAQs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-gray-200/80 overflow-hidden transition-all duration-200 bg-white hover:border-emerald-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-gray-900 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-emerald-700 font-bold">•</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-emerald-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-50 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            Have a specific scenario or complex question?{' '}
            <a
              href="https://wa.me/923291666671"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
            >
              Ask our specialists directly on WhatsApp <MessageCircle className="h-4 w-4" />
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
