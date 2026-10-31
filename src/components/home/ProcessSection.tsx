import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, FileText, CreditCard, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Choose Package & State",
      desc: "Fill our simple 5-minute online questionnaire. Pick Wyoming, Delaware, or New Mexico with real transparent state fees.",
      icon: FileText
    },
    {
      num: "02",
      title: "We File With Government",
      desc: "Our registered agent submits your Articles of Organization directly to the Secretary of State within 24 to 48 hours.",
      icon: ShieldCheck
    },
    {
      num: "03",
      title: "Receive IRS EIN & Pack",
      desc: "We obtain your official IRS Employer Identification Number (EIN) and draft custom Operating Agreements and Banking Resolutions.",
      icon: Sparkles
    },
    {
      num: "04",
      title: "Launch Bank & Stripe",
      desc: "We assist your remote application for Mercury, Wise, Relay, and Stripe US so you can start taking credit cards and wires globally.",
      icon: CreditCard
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="section-badge">
            Simple 4-Step Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            How We Take You From <span className="text-gradient">Zero To Global</span>
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            No embassy visits, no US travel, and zero paperwork headaches. Our streamlined process gets you fully operational in days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-white border border-gray-200/80 p-6 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-emerald-700/80">
                      {step.num}
                    </span>
                    <div className="h-10 w-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-display text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>100% Guaranteed Filing</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
