import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/shared/WhatsAppButton';
import { PromoPopup } from './components/shared/PromoPopup';
import { ScrollToTop } from './components/shared/ScrollToTop';
import { MapIntroPreloader } from './components/shared/MapIntroPreloader';
import { LiveActivityToast } from './components/shared/LiveActivityToast';

import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { USStatesComparisonPage } from './pages/USStatesComparisonPage';
import { AllServicesPage } from './pages/AllServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WebsiteReadinessCheckerPage } from './pages/WebsiteReadinessCheckerPage';
import { ContactPage } from './pages/ContactPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';
import { AdminPage } from './pages/AdminPage';

export function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      {/* Full-screen Opening Animated Map Preloader */}
      <MapIntroPreloader forceShow={false} onFinish={() => setShowPreloader(false)} />

      <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/us-states-comparison" element={<USStatesComparisonPage />} />
            <Route path="/all-services" element={<AllServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/website-readiness-checker" element={<WebsiteReadinessCheckerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <PromoPopup />
        <LiveActivityToast />
      </div>
    </BrowserRouter>
  );
}

export default App;
