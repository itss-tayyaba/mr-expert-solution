import React from 'react';
import { Building2, Globe2, Award, Clock } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      value: "10,000+",
      label: "Businesses Formed",
      desc: "Across all 50 US states and the UK"
    },
    {
      icon: Globe2,
      value: "150+",
      label: "Countries Supported",
      desc: "Founders from Asia, Europe, Africa & Americas"
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      desc: "First-time approval on banking & state filing"
    },
    {
      icon: Clock,
      value: "24-48h",
      label: "Rapid Turnaround",
      desc: "Fast expedited processing & immediate response"
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-emerald-950/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-display tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-emerald-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
