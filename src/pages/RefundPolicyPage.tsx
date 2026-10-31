import React from 'react';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="mb-8 space-y-2">
          <span className="section-badge">Policy</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs text-gray-500">
            Last Updated: January 2026 · MR EXPERT SOLUTION
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-gray-200/80 p-8 shadow-sm space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">1. Pre-Filing Cancellations</h2>
            <p>
              If you request a cancellation before we have submitted your filing to the Secretary of State, Companies House, or the IRS, you are entitled to a full refund minus a standard $25 administrative processing charge.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">2. Post-Filing Non-Refundable Government Fees</h2>
            <p>
              Once your formation documents have been submitted to the Secretary of State, Companies House, or third-party registrars, official government fees paid on your behalf cannot be refunded, as state filing fees are non-refundable by law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-gray-900">3. Resolution & Support Guarantee</h2>
            <p>
              In the rare event that a state rejects a company name due to a naming conflict, we will file your alternative approved company name at zero extra service charge to guarantee your company is successfully incorporated.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
