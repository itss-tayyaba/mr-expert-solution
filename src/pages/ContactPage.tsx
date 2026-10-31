import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('USA LLC Formation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*New Inquiry - MR EXPERT SOLUTION*\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nService: ${serviceNeeded}\nMessage: ${message || 'I would like a consultation.'}`
    );
    window.open(`https://wa.me/923291666671?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="section-badge">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-900 tracking-tight">
            Talk to an LLC & Banking <span className="text-gradient">Specialist</span>
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            Have questions about foreign LLC formation, state selection, ITINs, or Stripe approval? Our team answers within 1 hour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-emerald-950 text-white p-7 sm:p-8 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-white">Contact Information</h3>
                <p className="text-xs text-emerald-200/70 mt-1">
                  Reach out directly via phone, WhatsApp, or email.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-emerald-900 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Corporate Registered Office</div>
                    <div className="text-emerald-200/80 leading-relaxed mt-0.5">
                      1209 Mountain Road NW<br />
                      Albuquerque, NM 87102, United States
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-emerald-900 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Direct Phone & WhatsApp</div>
                    <a href="tel:+923291666671" className="text-emerald-300 hover:underline block mt-0.5">
                      +92 329 166 6671
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-emerald-900 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Official Support Email</div>
                    <a href="mailto:info@mrexpertsolution.com" className="text-emerald-300 hover:underline block mt-0.5">
                      info@mrexpertsolution.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-xl bg-emerald-900 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Working Hours & SLA</div>
                    <div className="text-emerald-200/80 mt-0.5">
                      Mon - Sat: 9:00 AM - 10:00 PM EST<br />
                      Response time: under 60 minutes
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/923291666671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  Instant WhatsApp Live Chat
                </a>
              </div>

            </div>

            {/* Trust badge card */}
            <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-emerald-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-gray-900">100% Confidential Consultation</div>
                <div className="text-gray-500 mt-0.5">
                  Your details and corporate structuring plans are protected by strict NDA privacy standards.
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-gray-200/80 p-6 sm:p-8 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-2">
                  Send Us A Message
                </h3>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                  >
                    <option value="USA LLC Formation">USA LLC Formation ($99 + State fee)</option>
                    <option value="UK LTD Formation">UK LTD Formation (From £20)</option>
                    <option value="Business Banking Setup">US / UK Business Banking (Mercury, Wise)</option>
                    <option value="Payment Gateway (Stripe/PayPal)">Stripe / PayPal Gateway Setup</option>
                    <option value="ITIN Service">ITIN Application Service ($99 Offer)</option>
                    <option value="US Trademark Registration">US Trademark Registration</option>
                    <option value="Tax Filing & BOI">Tax Filing & Annual Reports (5472/1120)</option>
                    <option value="Custom Consultation">Other / Custom Enterprise Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Project Details or Question
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business, intended bank account, target launch date..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <Sparkles className="h-4 w-4" />
                  Submit Consultation Request
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <b>{fullName}</b>. Our senior LLC specialist has received your inquiry for <b>{serviceNeeded}</b> and will reply to <b>{email}</b> within 1 hour.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs inline-flex items-center gap-2 shadow-md"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Open Chat Instantly on WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
