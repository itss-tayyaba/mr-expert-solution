import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-emerald-100/80 pt-16 pb-12 border-t border-emerald-900/60">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/50">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="MR EXPERT SOLUTION"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-emerald-200/70 leading-relaxed max-w-sm">
              Professional USA LLC & UK Company formation services for international entrepreneurs. Form your company, get your EIN, open US bank accounts, and accept global payments 100% remotely.
            </p>
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>1209 Mountain Road NW, Albuquerque, NM 87102, United States</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="tel:+923291666671" className="hover:text-white transition-colors">
                  +92 329 166 6671
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@mrexpertsolution.com" className="hover:text-white transition-colors">
                  info@mrexpertsolution.com
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/923291666671"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-300" />
                Chat with Specialist
              </a>
              <div className="flex items-center gap-1 text-[11px] text-emerald-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Verified Registered Agent</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-display">
              Company Formations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services/usa-llc-formation" className="hover:text-white transition-colors">
                  USA LLC Formation ($99)
                </Link>
              </li>
              <li>
                <Link to="/services/uk-ltd-formation" className="hover:text-white transition-colors">
                  UK LTD Formation (£20)
                </Link>
              </li>
              <li>
                <Link to="/services/canada-company-formation" className="hover:text-white transition-colors">
                  Canadian Company Incorporation
                </Link>
              </li>
              <li>
                <Link to="/us-states-comparison" className="hover:text-white transition-colors">
                  Compare US States
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Pricing & Packages
                </Link>
              </li>
              <li>
                <Link to="/website-readiness-checker" className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-300 font-medium">
                  Website Readiness Checker
                  <span className="text-[9px] px-1 py-0.2 rounded bg-emerald-800 text-white">Free</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Tax */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-display">
              Banking & Gateways
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services/business-banking" className="hover:text-white transition-colors">
                  Mercury & Wise Banking
                </Link>
              </li>
              <li>
                <Link to="/services/payment-gateways" className="hover:text-white transition-colors">
                  Stripe & PayPal Gateways
                </Link>
              </li>
              <li>
                <Link to="/services/ein" className="hover:text-white transition-colors">
                  Official IRS EIN Tax ID
                </Link>
              </li>
              <li>
                <Link to="/services/itin-service" className="hover:text-white transition-colors">
                  ITIN Service ($99 Offer)
                </Link>
              </li>
              <li>
                <Link to="/services/trademark-registration" className="hover:text-white transition-colors">
                  US Trademark Registration
                </Link>
              </li>
              <li>
                <Link to="/services/tax-filing" className="hover:text-white transition-colors">
                  Form 5472 / 1120 Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* State Comparison Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-display">
              Popular US States
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/us-states-comparison" className="hover:text-white transition-colors">
                  Wyoming LLC (0% State Tax)
                </Link>
              </li>
              <li>
                <Link to="/us-states-comparison" className="hover:text-white transition-colors">
                  Delaware LLC (VC & Tech)
                </Link>
              </li>
              <li>
                <Link to="/us-states-comparison" className="hover:text-white transition-colors">
                  New Mexico LLC ($0 Annual Fee)
                </Link>
              </li>
              <li>
                <Link to="/us-states-comparison" className="hover:text-white transition-colors">
                  Florida LLC (Tourism & Trade)
                </Link>
              </li>
              <li>
                <Link to="/us-states-comparison" className="hover:text-white transition-colors">
                  Texas LLC (Energy & Tech)
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-white transition-colors">
                  Customer Testimonials
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Disclaimers */}
        <div className="pt-8 pb-4 text-[11px] text-emerald-300/60 leading-relaxed space-y-3">
          <p>
            <b>Disclaimer:</b> MR EXPERT SOLUTION is a registered business formation and document filing technology service provider. We are not a law firm or certified public accountant (CPA) firm and do not provide legal, financial, or tax advisory services. If you require legal or tax advice for specific circumstances, please consult with an independent licensed professional attorney or CPA.
          </p>
          <p>
            Bank and merchant account approvals (including Mercury, Wise, Relay, Stripe, PayPal, and Amazon) are subject to each financial institution’s independent underwriting, customer due diligence (KYC/AML), and regulatory terms. MR EXPERT SOLUTION assists with compliance documentation, entity structuring, and application preparation.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <div>
            © {new Date().getFullYear()} MR EXPERT SOLUTION. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <span className="text-emerald-500 font-mono text-[10px]">256-Bit SSL Encrypted</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
