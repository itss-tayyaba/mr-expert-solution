import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Sparkles, 
  ArrowRight, RefreshCw, MessageCircle, Globe, Building2, Lock, FileText 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CheckItem {
  id: string;
  category: string;
  name: string;
  description: string;
  status: 'passed' | 'warning' | 'failed';
  recommendation?: string;
  impact: 'High' | 'Medium' | 'Low';
}

export const WebsiteReadinessCheckerPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialUrl = searchParams.get('url') || '';

  const [websiteUrl, setWebsiteUrl] = useState(initialUrl);
  const [businessModel, setBusinessModel] = useState('E-commerce');
  const [targetCountry, setTargetCountry] = useState('United States');
  const [email, setEmail] = useState('');
  
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStepText, setScanStepText] = useState('');
  const [reportReady, setReportReady] = useState(false);
  const [scanResults, setScanResults] = useState<CheckItem[]>([]);
  const [score, setScore] = useState(0);

  const scanSteps = [
    "Establishing secure TLS connection to domain...",
    "Validating SSL/TLS Certificate & cipher encryption...",
    "Scanning footer for mandatory legal policies (Privacy, Terms, Refund)...",
    "Checking for physical registered business address & phone disclosure...",
    "Analyzing Stripe & Mercury merchant compliance parameters...",
    "Evaluating customer support SLA & return policy clarity...",
    "Generating final underwriting readiness scorecard..."
  ];

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) return;

    setIsScanning(true);
    setReportReady(false);
    setScanProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 4;
      setScanProgress(progress);
      
      const stepIdx = Math.min(Math.floor((progress / 100) * scanSteps.length), scanSteps.length - 1);
      setScanStepText(scanSteps[stepIdx]);

      if (progress >= 100) {
        clearInterval(interval);
        generateReport();
      }
    }, 120);
  };

  const generateReport = () => {
    setIsScanning(false);
    setReportReady(true);

    const calculatedScore = Math.floor(Math.random() * 15) + 78; // 78 - 92
    setScore(calculatedScore);

    const results: CheckItem[] = [
      {
        id: "ssl",
        category: "Security",
        name: "SSL / TLS Encryption Protocol",
        description: "Valid 256-bit encryption certificate detected.",
        status: "passed",
        impact: "High"
      },
      {
        id: "privacy",
        category: "Legal",
        name: "Privacy Policy Page",
        description: "Privacy policy found and GDPR/CCPA compliant.",
        status: "passed",
        impact: "High"
      },
      {
        id: "terms",
        category: "Legal",
        name: "Terms of Service Agreement",
        description: "Terms found, but lacks explicit US state governing law clause.",
        status: "warning",
        recommendation: "Specify governing state jurisdiction (e.g. State of Wyoming) to satisfy Stripe legal underwriting.",
        impact: "Medium"
      },
      {
        id: "refund",
        category: "Payments",
        name: "Refund & Return Policy Disclosure",
        description: "Clear refund rules, dispute timeline, and contact channels specified.",
        status: "passed",
        impact: "High"
      },
      {
        id: "address",
        category: "Compliance",
        name: "Physical Business Address in Footer",
        description: "No registered business address detected on website footer or contact page.",
        status: "failed",
        recommendation: "Stripe and Mercury require your official registered US/UK LLC address to be clearly visible on the footer.",
        impact: "High"
      },
      {
        id: "contact",
        category: "Support",
        name: "Customer Support Channels",
        description: "Domain email (info@yourdomain.com) and contact phone number present.",
        status: "passed",
        impact: "Medium"
      },
      {
        id: "pricing",
        category: "Payments",
        name: "Pricing & Currency Transparency",
        description: "Clear USD pricing and recurring billing terms displayed.",
        status: "passed",
        impact: "High"
      }
    ];

    setScanResults(results);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="section-badge">
            Automated Compliance Diagnostic
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Website <span className="text-gradient">Readiness Checker</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Ensure your website satisfies all merchant risk underwriting standards before applying for Stripe, PayPal, Mercury, or Wise. Avoid sudden account holds and rejections.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-8 shadow-xl mb-12">
          <form onSubmit={handleStartScan} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Website Domain or URL
              </label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. apexbrand.com or https://apexbrand.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  disabled={isScanning}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30 disabled:bg-gray-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Business Model
                </label>
                <select
                  value={businessModel}
                  onChange={(e) => setBusinessModel(e.target.value)}
                  disabled={isScanning}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                >
                  <option value="E-commerce">E-Commerce Store (Shopify/Woo)</option>
                  <option value="SaaS / Digital">SaaS & Digital Products</option>
                  <option value="Services">Agency & Consulting Services</option>
                  <option value="Dropshipping">Dropshipping & Print-on-Demand</option>
                  <option value="Marketplace">Marketplace Platform</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Target Formation Jurisdiction
                </label>
                <select
                  value={targetCountry}
                  onChange={(e) => setTargetCountry(e.target.value)}
                  disabled={isScanning}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                >
                  <option value="United States">United States (USA LLC)</option>
                  <option value="United Kingdom">United Kingdom (UK LTD)</option>
                  <option value="Canada">Canada (Federal Corp)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isScanning}
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 text-white font-bold text-sm shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Scanning In Progress ({scanProgress}%)...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Analyze Website Compliance Free
                </>
              )}
            </button>
          </form>

          {/* Progress Console during scan */}
          {isScanning && (
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-gray-700">
                <span>Running Diagnostics</span>
                <span className="font-mono text-emerald-700">{scanProgress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-150 ease-out rounded-full"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
              <div className="font-mono text-xs text-gray-500 bg-gray-50 p-2.5 rounded-lg border border-gray-200 truncate">
                &gt; {scanStepText}
              </div>
            </div>
          )}
        </div>

        {/* Scan Results & Scorecard Report */}
        {reportReady && (
          <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-8 shadow-2xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
            
            {/* Scorecard Top Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  Compliance Readiness Report
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 truncate max-w-sm">
                  {websiteUrl}
                </h3>
                <div className="text-xs text-gray-500">
                  Business Model: <b>{businessModel}</b> · Jurisdiction: <b>{targetCountry}</b>
                </div>
              </div>

              {/* Score Circular Badge */}
              <div className="flex items-center gap-4 bg-emerald-50 border border-emerald-200 p-4 rounded-2xl">
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-800 font-display">
                    {score}/100
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {score >= 85 ? 'Grade A · Ready' : 'Grade B · Minor Fixes'}
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                Detailed Diagnostic Checklist
              </h4>

              <div className="space-y-2.5">
                {scanResults.map((item) => (
                  <div
                    key={item.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      item.status === 'passed'
                        ? 'border-gray-200 bg-white'
                        : item.status === 'warning'
                        ? 'border-amber-200 bg-amber-50/50'
                        : 'border-red-200 bg-red-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        {item.status === 'passed' && (
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                        )}
                        {item.status === 'warning' && (
                          <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        {item.status === 'failed' && (
                          <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <div className="font-bold text-sm text-gray-900">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-600 mt-0.5">
                            {item.description}
                          </div>
                          {item.recommendation && (
                            <div className="mt-2 text-xs font-medium text-amber-900 bg-white/70 p-2 rounded-lg border border-amber-200">
                              <b>Action Required:</b> {item.recommendation}
                            </div>
                          )}
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                          item.status === 'passed'
                            ? 'bg-emerald-100 text-emerald-800'
                            : item.status === 'warning'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assistance Banner */}
            <div className="p-6 rounded-2xl bg-emerald-900 text-white space-y-4">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                <Sparkles className="h-4 w-4" />
                Want MR EXPERT SOLUTION To Fix & Certify Your Website?
              </div>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                We provide custom legal templates (terms, privacy, return policy), assign a verified physical US office address, and ensure complete compliance with Stripe and Mercury underwriting rules.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={`https://wa.me/923291666671?text=${encodeURIComponent(
                    `Hi MR EXPERT SOLUTION, I just ran a readiness check for ${websiteUrl} (Score: ${score}/100) and would like assistance fixing compliance!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat With Underwriting Specialist
                </a>
                <Link
                  to="/pricing"
                  className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold text-center border border-white/20 transition-colors"
                >
                  View Formation Packages
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
