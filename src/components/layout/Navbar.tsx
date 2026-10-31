import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Sparkles, Building2, Globe, Shield, 
  CreditCard, Zap, FileCheck2, ArrowRight, MessageCircle 
} from 'lucide-react';
import { OrderModal } from '../shared/OrderModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const serviceCategories = [
    {
      title: "USA Formations",
      items: [
        { name: "USA LLC Formation", href: "/services/usa-llc-formation", desc: "State filing in 3-5 days", tag: "$99" },
        { name: "Compare US States", href: "/us-states-comparison", desc: "WY, DE, NM fee & tax comparison", tag: "Guide" },
        { name: "IRS EIN Registration", href: "/services/ein", desc: "Official federal tax ID for bank", tag: "CP575" },
        { name: "ITIN Service", href: "/services/itin-service", desc: "IRS Certified Agent without passport mail", tag: "$99" },
        { name: "US Trademark Registration", href: "/services/trademark-registration", desc: "USPTO protection & Amazon Brand Registry", tag: "USPTO" },
      ]
    },
    {
      title: "UK & Canada",
      items: [
        { name: "UK LTD Formation", href: "/services/uk-ltd-formation", desc: "Companies House filing in 24h", tag: "£20" },
        { name: "Canadian Company", href: "/services/canada-company-formation", desc: "Federal incorporation in Toronto", tag: "CAD 445" },
        { name: "UK Unique Address", href: "/services/uk-unique-address", desc: "Premium London registered office", tag: "1 Year" },
      ]
    },
    {
      title: "Fintech & Compliance",
      items: [
        { name: "Business Banking", href: "/services/business-banking", desc: "Mercury, Wise, Relay & Tide accounts", tag: "98% Appr." },
        { name: "Payment Gateways", href: "/services/payment-gateways", desc: "Stripe US/UK & PayPal Business", tag: "Verified" },
        { name: "Tax Filing & BOI", href: "/services/tax-filing", desc: "Form 5472, 1120 & FinCEN compliance", tag: "Automated" },
        { name: "Website Readiness Checker", href: "/website-readiness-checker", desc: "Scan website for Stripe & Banking compliance", tag: "Free Tool" },
      ]
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-950/5 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="MR EXPERT SOLUTION"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 hover:text-emerald-700 py-2 transition-colors font-medium text-gray-700"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-emerald-700' : ''}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-20 w-[720px] rounded-3xl bg-white p-6 shadow-2xl border border-emerald-100 animate-in fade-in slide-in-from-top-2 duration-200 grid grid-cols-3 gap-6">
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 border-b border-gray-100 pb-1.5">
                        {cat.title}
                      </div>
                      <div className="space-y-1.5">
                        {cat.items.map((item, i) => (
                          <Link
                            key={i}
                            to={item.href}
                            className="group block p-2 rounded-xl hover:bg-emerald-50/70 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-xs text-gray-900 group-hover:text-emerald-700 transition-colors">
                                {item.name}
                              </span>
                              {item.tag && (
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="col-span-3 pt-3 border-t border-gray-100 flex items-center justify-between bg-emerald-50/40 -mx-6 -mb-6 p-4 rounded-b-3xl">
                    <span className="text-xs text-gray-600">
                      Need custom corporate structuring or B2B volume pricing?
                    </span>
                    <Link
                      to="/contact"
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                    >
                      Talk to our corporate lawyer <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/us-states-comparison"
              className={`hover:text-emerald-700 transition-colors ${location.pathname === '/us-states-comparison' ? 'text-emerald-700 font-semibold' : ''}`}
            >
              Compare States
            </Link>

            <Link
              to="/pricing"
              className={`hover:text-emerald-700 transition-colors ${location.pathname === '/pricing' ? 'text-emerald-700 font-semibold' : ''}`}
            >
              Pricing
            </Link>

            <Link
              to="/website-readiness-checker"
              className={`flex items-center gap-1.5 hover:text-emerald-700 transition-colors ${location.pathname === '/website-readiness-checker' ? 'text-emerald-700 font-semibold' : ''}`}
            >
              Readiness Checker
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </Link>

            <Link
              to="/testimonials"
              className={`hover:text-emerald-700 transition-colors ${location.pathname === '/testimonials' ? 'text-emerald-700 font-semibold' : ''}`}
            >
              Testimonials
            </Link>

            <Link
              to="/contact"
              className={`hover:text-emerald-700 transition-colors ${location.pathname === '/contact' ? 'text-emerald-700 font-semibold' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/923291666671?text=Hi%20MR%20EXPERT%20SOLUTION,%20I'd%20like%20to%20consult%20about%20forming%20a%20company."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600" />
              WhatsApp
            </a>

            <button
              onClick={() => setOrderModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="h-4 w-4" />
              Start Company
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-4 pb-6 bg-white border-b border-gray-200 shadow-xl space-y-4 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-lg font-medium text-gray-800 hover:bg-emerald-50"
              >
                Home
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 rounded-lg font-medium text-gray-800 hover:bg-emerald-50"
              >
                Pricing Plans
              </Link>
              <Link
                to="/us-states-comparison"
                className="block px-3 py-2 rounded-lg font-medium text-gray-800 hover:bg-emerald-50"
              >
                Compare US States
              </Link>
              <Link
                to="/website-readiness-checker"
                className="flex items-center justify-between px-3 py-2 rounded-lg font-medium text-gray-800 hover:bg-emerald-50"
              >
                <span>Website Readiness Checker</span>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">
                  Free Scan
                </span>
              </Link>
              <Link
                to="/testimonials"
                className="block px-3 py-2 rounded-lg font-medium text-gray-800 hover:bg-emerald-50"
              >
                Client Reviews
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-lg font-medium text-gray-800 hover:bg-emerald-50"
              >
                Contact & Support
              </Link>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 mb-2">
                All Formation Services
              </div>
              <div className="grid grid-cols-1 gap-1 text-xs text-gray-600 px-3">
                <Link to="/services/usa-llc-formation" className="py-1 hover:text-emerald-700">🇺🇸 USA LLC Formation</Link>
                <Link to="/services/uk-ltd-formation" className="py-1 hover:text-emerald-700">🇬🇧 UK LTD Formation</Link>
                <Link to="/services/business-banking" className="py-1 hover:text-emerald-700">💳 US & UK Business Banking</Link>
                <Link to="/services/payment-gateways" className="py-1 hover:text-emerald-700">⚡ Stripe & PayPal Gateway</Link>
                <Link to="/services/ein" className="py-1 hover:text-emerald-700">📄 IRS EIN Registration</Link>
                <Link to="/services/itin-service" className="py-1 hover:text-emerald-700">🆔 ITIN Service ($99 Offer)</Link>
                <Link to="/services/trademark-registration" className="py-1 hover:text-emerald-700">🛡️ US Trademark Registration</Link>
                <Link to="/services/tax-filing" className="py-1 hover:text-emerald-700">📊 Tax Filing & BOI Compliance</Link>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOrderModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-emerald-700 text-white font-semibold text-center text-sm shadow-md"
              >
                Start Your Company Now
              </button>
              <a
                href="https://wa.me/923291666671"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-emerald-300 text-emerald-800 font-semibold text-center text-xs flex items-center justify-center gap-2 bg-emerald-50"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp (+92 329 166 6671)
              </a>
            </div>
          </div>
        )}
      </header>

      {/* LLC Order Application Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
};
