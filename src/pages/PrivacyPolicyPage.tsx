import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        
        <div className="mb-8 space-y-2">
          <span className="section-badge">Legal</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-500">
            Last Updated: January 2026 · MR EXPERT SOLUTION
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-gray-200/80 p-8 shadow-sm space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">1. Information We Collect</h2>
            <p>
              When you use MR EXPERT SOLUTION (mrexpertsolution.com) to form an LLC, LTD, obtain an EIN, or register a trademark, we collect necessary identification details including your legal name, residential address, email, telephone number, and government-issued passport or national ID scan solely to prepare statutory filings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">2. How We Use Your Information</h2>
            <p>
              Your personal information is used strictly to submit incorporation documents to the relevant Secretary of State or Companies House, file Form SS-4 with the IRS, provide registered agent services, and configure banking introduction documents. We do not sell, rent, or trade your personal data to any third-party marketing companies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">3. Data Security & Storage</h2>
            <p>
              All customer transmissions are encrypted using standard 256-bit TLS/SSL encryption protocols. Digital identification scans and tax documentation are stored in secure, access-controlled vaults and permanently deleted following statutory record retention periods.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">4. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any time by contacting our privacy compliance desk at <b>info@mrexpertsolution.com</b>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
