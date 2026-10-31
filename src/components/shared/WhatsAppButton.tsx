import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "923291666671";
  const defaultMessage = encodeURIComponent("Hi MR EXPERT SOLUTION! I would like to get more information about forming a US LLC / UK LTD.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end transition-all duration-300 ${hasScrolled ? 'opacity-100 translate-y-0' : 'opacity-90'}`}>
      {/* Tooltip speech bubble */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-white p-4 shadow-2xl border border-emerald-100 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-semibold text-emerald-800">Support Online</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-0.5 rounded-full"
              aria-label="Close message"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-600 leading-relaxed">
            Need fast help with LLC state selection, EIN, or US bank accounts? Message us directly on WhatsApp!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md transition-all"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Start Chat Now
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsOpen(true)}
          className="flex items-center justify-center h-14 w-14 rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-600/35 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
        </a>
      </div>
    </div>
  );
};
