import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="mb-8 space-y-2">
          <span className="section-badge">Terms of Service</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900">
            Terms & Conditions
          </h1>
          <p className="text-xs text-gray-500">
            Last Updated: January 2026 · MR EXPERT SOLUTION
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-gray-200/80 p-8 shadow-sm space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing and using MR EXPERT SOLUTION services, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, you must not use our website or services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">2. Nature of Services (No Legal or Tax Advice)</h2>
            <p>
              MR EXPERT SOLUTION provides registered agent, document filing, and corporate formation assistance. MR EXPERT SOLUTION is not a law firm or CPA firm, and our representatives do not provide legal or tax advice. The information provided on this website is for informational purposes only.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">3. Customer Responsibilities</h2>
            <p>
              You warrant that all information, passport scans, and declarations provided for filing are authentic, accurate, and lawful. You agree to use the formed company exclusively for legal commercial activities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">4. Third-Party Banking & Gateways</h2>
            <p>
              While we prepare your company documentation and provide direct guidance according to best practices, final account approval remains exclusively at the discretion of the respective financial institutions (e.g. Mercury, Wise, Relay, Stripe, PayPal).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
