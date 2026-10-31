import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Sparkles, Building2, Globe, Shield, 
  CreditCard, Zap, FileCheck2, ArrowRight, MessageCircle, Lock,
  Mail, Phone, Linkedin, Facebook, Instagram
} from 'lucide-react';
import { OrderModal } from '../shared/OrderModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setResourcesDropdownOpen(false);
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
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Top Dark Green Info Bar (Exact Match to User Image 1) */}
        <div className="bg-[#0f533a] text-white text-[11px] sm:text-xs py-2 px-4 sm:px-8 border-b border-[#0d4530]">
          <div className="container mx-auto flex items-center justify-between">
            {/* Left: Email & Phone */}
            <div className="flex items-center gap-4 sm:gap-6 font-medium">
              <a 
                href="mailto:Info@mrexpertsolution.com" 
                className="inline-flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-emerald-300" />
                <span>Info@mrexpertsolution.com</span>
              </a>

              <a 
                href="tel:+923291666671" 
                className="inline-flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-emerald-300" />
                <span>+92 329 166 6671</span>
              </a>
            </div>

            {/* Right: Social Icons & Admin */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>

              <Link 
                to="/admin" 
                className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-200 hover:text-white transition-colors bg-emerald-900/60 hover:bg-emerald-900 px-2 py-0.5 rounded-full border border-emerald-700/40 ml-2"
                title="Management Dashboard"
              >
                <Lock className="h-2.5 w-2.5" />
                <span>Admin</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating White Pill Navbar (Exact Match to User Image 1) */}
        <div className="px-3 sm:px-6 pt-2.5 sm:pt-3">
          <div className="max-w-6xl mx-auto rounded-3xl lg:rounded-full bg-white shadow-xl shadow-gray-200/60 border border-gray-100/90 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300">
            
            {/* Logo: Round Brand Icon + Mr. Expert Solution (Private) Limited */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <img
                src="/logo.png"
                alt="Mr. Expert Solution"
                className="h-10 w-10 rounded-full object-contain bg-emerald-950 p-1 border border-emerald-800 shadow-sm transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight font-display">
                  Mr. Expert Solution
                </span>
                <span className="text-[10px] text-gray-400 font-medium leading-none mt-0.5">
                  (Private) Limited
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-gray-700">
              
              {/* Expert AI Link */}
              <Link
                to="/expert-ai"
                className={`hover:text-emerald-700 transition-colors font-medium flex items-center gap-1 ${
                  location.pathname === '/expert-ai' ? 'text-emerald-700 font-bold' : 'text-gray-700'
                }`}
              >
                <span>Expert AI</span>
              </Link>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-emerald-700 py-1.5 transition-colors font-medium text-gray-700"
                >
                  Services
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-emerald-700' : ''}`} />
                </button>

                {/* Mega Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full -left-20 w-[720px] rounded-3xl bg-white p-6 shadow-2xl border border-emerald-100 animate-in fade-in slide-in-from-top-2 duration-200 grid grid-cols-3 gap-6 z-50">
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

              {/* Website */}
              <Link
                to="/website-readiness-checker"
                className={`hover:text-emerald-700 transition-colors ${location.pathname === '/website-readiness-checker' ? 'text-emerald-700 font-semibold' : ''}`}
              >
                Website
              </Link>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setResourcesDropdownOpen(true)}
                onMouseLeave={() => setResourcesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 hover:text-emerald-700 py-1.5 transition-colors font-medium text-gray-700"
                >
                  Resources
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${resourcesDropdownOpen ? 'rotate-180 text-emerald-700' : ''}`} />
                </button>

                {resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 w-60 rounded-2xl bg-white p-3 shadow-xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1 z-50">
                    <Link to="/us-states-comparison" className="block p-2 rounded-xl hover:bg-emerald-50 text-xs font-semibold text-gray-800">
                      🇺🇸 Compare All 50 US States
                    </Link>
                    <Link to="/all-services" className="block p-2 rounded-xl hover:bg-emerald-50 text-xs font-semibold text-gray-800">
                      📄 Full Corporate Services Directory
                    </Link>
                    <Link to="/testimonials" className="block p-2 rounded-xl hover:bg-emerald-50 text-xs font-semibold text-gray-800">
                      ⭐ Verified Video Testimonials
                    </Link>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <Link
                to="/pricing"
                className={`hover:text-emerald-700 transition-colors ${location.pathname === '/pricing' ? 'text-emerald-700 font-semibold' : ''}`}
              >
                Pricing
              </Link>

              {/* Testimonials */}
              <Link
                to="/testimonials"
                className={`hover:text-emerald-700 transition-colors ${location.pathname === '/testimonials' ? 'text-emerald-700 font-semibold' : ''}`}
              >
                Testimonials
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`hover:text-emerald-700 transition-colors ${location.pathname === '/contact' ? 'text-emerald-700 font-semibold' : ''}`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Client Portal Button (Matches User Image 1) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOrderModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0f533a] hover:bg-[#0a3e2b] shadow-md shadow-emerald-950/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Client Portal
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-xl transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mx-4 mt-2 px-4 pt-4 pb-6 bg-white rounded-3xl border border-gray-200 shadow-2xl space-y-4 animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-xl font-medium text-gray-800 hover:bg-emerald-50">
                Home
              </Link>
              <Link to="/expert-ai" className="block px-3 py-2 rounded-xl font-medium text-gray-800 hover:bg-emerald-50">
                Expert AI (B2B Platform API)
              </Link>
              <Link to="/website-readiness-checker" className="block px-3 py-2 rounded-xl font-medium text-gray-800 hover:bg-emerald-50">
                Website Readiness Scanner
              </Link>
              <Link to="/pricing" className="block px-3 py-2 rounded-xl font-medium text-gray-800 hover:bg-emerald-50">
                Pricing Plans
              </Link>
              <Link to="/us-states-comparison" className="block px-3 py-2 rounded-xl font-medium text-gray-800 hover:bg-emerald-50">
                Compare US States
              </Link>
              <Link to="/testimonials" className="block px-3 py-2 rounded-xl font-medium text-gray-800 hover:bg-emerald-50">
                Client Reviews
              </Link>
              <Link to="/contact" className="block px-3 py-2 rounded-xl font-medium text-gray-800 hover:bg-emerald-50">
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
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOrderModalOpen(true);
                }}
                className="w-full py-3 rounded-full bg-[#0f533a] text-white font-bold text-center text-sm shadow-md"
              >
                Client Portal
              </button>
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
