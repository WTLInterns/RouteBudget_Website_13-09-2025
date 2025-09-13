'use client';

import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    bestFor: "Individual Drivers",
    price: "₹299",
    period: "per month",
    description: "Perfect for small fleets with basic expense tracking needs.",
    features: [
      "Up to 1-3 vehicles",
      "Basic expense tracking",
      "Fuel and FastTag management",
      "Monthly reports",
      "Email support",
      "1 admin user",
      "Toll and image upload",
    ],
    isPopular: false,
    buttonText: "Get Started",
    buttonClass: "bg-white text-blue-900 hover:bg-gray-100"
  },
  {
    name: "Professional",
    bestFor: "Small Fleet Managers",
    price: "₹799",
    period: "per month",
    description: "Ideal for growing fleets requiring advanced features.",
    features: [
      "4-15 vehicles",
      "Advanced expense categories",
      "Comprehensive analytics",
      "Approval workflows",
      "Priority support",
      "5 admin users",
      "Driver performance metrics",
      "Live alerts"
    ],
    isPopular: true,
    buttonText: "Most Popular",
    buttonClass: "bg-teal-500 text-white hover:bg-teal-600"
  },
  {
    name: "Enterprise",
    bestFor: "Large Travel Agencies",
    price: "₹1499",
    period: "tailored pricing",
    description: "For large fleets with complex requirements and custom needs.",
    features: [
      "16+ vehicles",
      "Custom expense categories",
      "Advanced reporting & API access",
      "Multi-level approval workflows",
      "Dedicated account manager",
      "Unlimited admin users",
      "Custom integration options",
      "White-labeling available",
      "Reports, support and cloud backup",
    ],
    isPopular: false,
    buttonText: "Contact Sales",
    buttonClass: "bg-white text-blue-900 hover:bg-gray-100"
  }
];

const Pricing = () => {
  const handleContactSales = () => {
    // Create WhatsApp message for contact sales
    const message = `Hello! I'm interested in discussing RouteBudget fleet management software pricing and solutions.

I would like to speak with your sales team to understand the best plan for my business needs.

Please contact me at your earliest convenience.

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

  const handleGetStarted = () => {
    // Create WhatsApp message for Starter plan
    const message = `Hello! I'm interested in the Starter plan (₹299/month) for RouteBudget fleet management software.

This plan is perfect for my individual driver needs with up to 1-3 vehicles. I would like to get started with basic expense tracking and fuel management.

Please help me get started with the Starter plan.

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

  const handleMostPopular = () => {
    // Create WhatsApp message for Professional plan
    const message = `Hello! I'm interested in the Professional plan (₹799/month) - your Most Popular plan for RouteBudget fleet management software.

This plan is ideal for my small fleet management needs with 4-15 vehicles. I'm particularly interested in the advanced analytics and approval workflows.

Please help me get started with the Professional plan.

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

  const handleContactSalesEnterprise = () => {
    // Create WhatsApp message for Enterprise plan
    const message = `Hello! I'm interested in the Enterprise plan (₹1499/month) for RouteBudget fleet management software.

I manage a large travel agency with 16+ vehicles and need custom expense categories, advanced reporting, and dedicated account management.

Please contact me to discuss the Enterprise plan and custom solutions.

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
    <section id="pricing" className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-5xl mx-auto mb-20 animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200">
              💰 Transparent Pricing
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
            Affordable Fleet Management
            <span className="block text-gradient">Plans for Everyone</span>
          </h2>

          <p className="text-2xl text-gray-600 leading-relaxed" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
            Explore flexible and budget-friendly plans tailored for every size fleet in India.
            <span className="block mt-2">Whether you're a solo driver or manage hundreds, Route Budget has you covered.</span>
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl bg-white border ${plan.isPopular ? 'ring-2 ring-teal-500 shadow-lg' : 'border-gray-200 shadow-sm'} animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-teal-500 text-white py-2 text-center text-sm font-semibold rounded-t-3xl">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.bestFor}</p>
                <div className="mb-6">
                  <span className="text-4xl font-semibold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-700 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={plan.name === 'Starter' ? handleGetStarted : plan.name === 'Professional' ? handleMostPopular : handleContactSalesEnterprise}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 mt-auto hover:scale-105 transform shadow-lg hover:shadow-xl ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-20 text-center animate-fade-up delay-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">All Plans Include</h3>

          {/* Rounded Box for "All Plans Include" */}
          <div className="p-8 bg-white shadow-lg rounded-2xl mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-center">
                <Check size={20} className="text-teal-500 mr-2" />
                24/7 Customer Support
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-teal-500 mr-2" />
                Mobile & Desktop Access
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-teal-500 mr-2" />
                Cloud Sync & Backups
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-teal-500 mr-2" />
                Unlimited Uploads
              </div>
            </div>
          </div>

          <p className="mt-8 text-gray-600">Need a custom solution? Let's talk.</p>
          <button 
            onClick={handleContactSales}
            className="mt-4 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;