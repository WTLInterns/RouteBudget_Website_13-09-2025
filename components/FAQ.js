'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the expense tracking system work?",
    answer: "Our system has two main components: a web dashboard for administrators and a mobile app for drivers. Drivers record expenses through the app, which are then synced to the central system. Administrators can review, approve/reject, and analyze expenses through the web dashboard."
  },
  {
    question: "Is the system suitable for different types of fleets?",
    answer: "Yes, our system is designed to be flexible and can accommodate various fleet types including taxi services, courier companies, corporate fleets, and more. The system can be customized based on your specific requirements."
  },
  {
    question: "How secure is the data in your system?",
    answer: "We implement industry-standard security protocols including end-to-end encryption, secure authentication, and regular security audits. All data is stored in secure, redundant servers with regular backups to ensure your information is safe and accessible."
  },
  {
    question: "Can the system integrate with our existing accounting software?",
    answer: "Yes, our system offers integration capabilities with popular accounting software like Tally, QuickBooks, and Xero. We also provide API access for custom integrations with your existing systems."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial with full access to all features. This allows you to evaluate the system thoroughly before making a decision. No credit card is required to start the trial."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide comprehensive support including detailed documentation, video tutorials, email support, and phone support for Professional and Enterprise plans. Enterprise clients also receive a dedicated account manager."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactSupport = () => {
    // Create WhatsApp message for FAQ support
    const message = `Hello! I have some questions about RouteBudget fleet management software that weren't covered in your FAQ section.

I would appreciate if you could provide more information and support to help me understand your system better.

Thank you!`;

    // WhatsApp number (WebUtsav)
    const whatsappNumber = '918766922792';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    if (typeof window !== 'undefined') {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="faq" className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto mb-20 animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200">
              ❓ Frequently Asked Questions
            </span>
          </div>

          <h2 className="typography-h2 font-black text-gray-900 mb-6 tracking-tight">
            Got Questions?
            <span className="block text-gradient">We Have Answers</span>
          </h2>

          <p className="typography-body-lg text-gray-600 leading-relaxed">
            Get answers to common questions about our Route Budget management system and discover how we can help transform your fleet operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 animate-fade-up delay-200">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-purple-50/30 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]"></div>

              <button
                onClick={() => toggleFAQ(index)}
                className="relative w-full flex justify-between items-center px-8 py-6 lg:py-8 text-left focus:outline-none group-hover:bg-transparent transition-all duration-300"
              >
                <span className="typography-h4 font-bold text-gray-900 pr-8 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-gradient-to-r from-indigo-500 to-purple-500 rotate-180' : 'bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-indigo-100 group-hover:to-purple-100'}`}>
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-white transition-transform duration-300" />
                  ) : (
                    <ChevronDown className={`h-6 w-6 transition-all duration-300 ${openIndex === index ? 'text-white' : 'text-gray-500 group-hover:text-indigo-600'}`} />
                  )}
                </div>
              </button>
              
              {/* Enhanced Answer Section */}
              <div
                className={`relative px-8 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-gray-100 pt-6">
                  <p className="typography-body text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 transform transition-all duration-500 ${openIndex === index ? 'scale-x-100' : 'scale-x-0'} rounded-b-3xl`}></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-up delay-500">
          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 rounded-3xl p-10 border border-indigo-100/50 shadow-xl">
            <h3 className="typography-h3 font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Our support team is ready to help you get started with Route Budget and answer any questions you might have.
            </p>
            <button
              onClick={handleContactSupport}
              className="relative px-10 py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 hover:-translate-y-1 text-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">Contact Support Team</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;