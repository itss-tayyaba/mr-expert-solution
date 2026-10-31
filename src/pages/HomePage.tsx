import React from 'react';
import { Hero } from '../components/home/Hero';
import { StatsSection } from '../components/home/StatsSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { StatesPreview } from '../components/home/StatesPreview';
import { ProcessSection } from '../components/home/ProcessSection';
import { ReadinessTeaser } from '../components/home/ReadinessTeaser';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FaqSection } from '../components/home/FaqSection';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <ServicesSection />
      <StatesPreview />
      <ProcessSection />
      <ReadinessTeaser />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </div>
  );
};
