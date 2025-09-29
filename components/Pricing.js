'use client';

import { Check } from 'lucide-react';

const plans = [
  {
    name: "1 Month Plan",
    bestFor: "Individual Drivers",
    price: "₹100 per cab",
    period: "per month",
    description: "Flexible pay-as-you-go option. Example: 5 cabs × ₹100 = ₹500 per month",
    features: [
      "Pay per cab used",
      "Basic expense tracking",
      "Fuel and FastTag management",
      "Monthly reports",
      "Email support",
      "1 admin user",
      "Toll and image upload"
    ],
    isPopular: false,
    buttonText: "Get Started",
    buttonClass: "bg-white text-blue-900 hover:bg-gray-100"
  },
  {
    name: "3 Month Plan",
    bestFor: "Small Fleets",
    price: "₹5,999",
    period: "per 3 months",
    description: "Ideal for small fleets requiring short-term solutions.",
    features: [
      "Includes 50 cabs",
      "Core features included",
      "Email support",
      "Basic reporting",
      "Regular updates",
      "Cloud backup"
    ],
    isPopular: false,
    buttonText: "Get Started",
    buttonClass: "bg-white text-blue-900 hover:bg-gray-100"
  },
  {
    name: "6 Month Plan",
    bestFor: "Growing Businesses",
    price: "₹7,999",
    period: "per 6 months",
    description: "Great for growing businesses with medium-term needs.",
    features: [
      "Includes 50 cabs",
      "All essential features included",
      "Email & chat support",
      "Standard reporting",
      "API access",
      "Priority updates"
    ],
    isPopular: true,
    buttonText: "Most Popular",
    buttonClass: "bg-teal-500 text-white hover:bg-teal-600"
  },
  {
    name: "1 Year Plan",
    bestFor: "Large Fleets",
    price: "₹14,999",
    period: "per year",
    description: "Best value for large fleets with long-term commitment.",
    features: [
      "Includes 50 cabs",
      "All premium features included",
      "Priority support",
      "Dedicated account manager",
      "Custom reporting",
      "API access",
      "White-labeling available"
    ],
    isPopular: false,
    buttonText: "Get Started",
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

  const handleGetStartedYear = () => {
    // Create WhatsApp message for 1 Year Plan
    const message = `Hello! I'm interested in the 1 Year Plan (₹15,000/year) for RouteBudget fleet management software.

This plan includes 50 cabs and offers the best value for large fleets with long-term commitment.

Please help me get started with the 1 Year Plan.

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
    // Create WhatsApp message for 6 Month Plan
    const message = `Hello! I'm interested in the 6 Month Plan (₹8,000/6 months) - your Most Popular plan for RouteBudget fleet management software.

This plan includes 50 cabs and is great for growing businesses with medium-term needs.

Please help me get started with the 6 Month Plan.

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

  const handleGetStartedThreeMonth = () => {
    // Create WhatsApp message for 3 Month Plan
    const message = `Hello! I'm interested in the 3 Month Plan (₹6,000/3 months) for RouteBudget fleet management software.

This plan includes 50 cabs and is ideal for small fleets requiring short-term solutions.

Please help me get started with the 3 Month Plan.

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

  const handleGetStartedMonthly = () => {
    // Create WhatsApp message for 1 Month Plan
    const message = `Hello! I'm interested in the 1 Month Plan (₹100 per cab) for RouteBudget fleet management software.

This flexible pay-as-you-go option works as: number of cabs × ₹100 = total monthly cost. For example, 5 cabs × ₹100 = ₹500 per month.

Please help me get started with the 1 Month Plan.

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
    <section id="pricing" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-5xl mx-auto mb-16 animate-fade-in-up">
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold border border-indigo-200">
              💰 Transparent Pricing
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            Affordable Fleet Management
            <span className="block text-gradient">Plans for Everyone</span>
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Explore flexible and budget-friendly plans tailored for every size fleet in India.
            <span className="block mt-2">Whether you're a solo driver or manage hundreds, Route Budget has you covered.</span>
          </p>
        </div>

        {/* Enhanced Pricing Cards - 4-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 group ${
                plan.isPopular 
                  ? 'bg-gradient-to-br from-indigo-50 via-white to-purple-50 border-2 border-indigo-200 shadow-xl hover:shadow-indigo-500/30' 
                  : 'bg-white/95 backdrop-blur-sm border border-gray-200/60 shadow-lg hover:shadow-2xl'
              } animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-pulse whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Glow effect for popular plan */}
              {plan.isPopular && (
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}

              <div className="relative flex flex-col h-full pt-8">
                {/* Plan Header */}
                <div className="text-center mb-4">
                  <h3 className={`text-xl font-black mb-2 ${plan.isPopular ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm mb-3">{plan.bestFor}</p>
                  
                  {/* Enhanced Price Display */}
                  <div className="mb-3">
                    <div className={`text-3xl font-black mb-1 ${plan.isPopular ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>
                      {plan.price}
                    </div>
                    <div className="text-gray-500 text-sm">{plan.period}</div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Enhanced Features List */}
                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start group/item">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-2 mt-0.5 ${plan.isPopular ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-emerald-400 to-teal-500'} shadow`}>
                        <Check size={10} className="text-white" />
                      </div>
                      <span className="text-gray-700 text-sm group-hover/item:text-gray-900 transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Enhanced CTA Button */}
                <button 
                  onClick={plan.name === '1 Year Plan' ? handleGetStartedYear : plan.name === '6 Month Plan' ? handleMostPopular : plan.name === '3 Month Plan' ? handleGetStartedThreeMonth : handleGetStartedMonthly}
                  className={`relative w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 mt-auto transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group/btn ${
                    plan.isPopular 
                      ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700' 
                      : 'bg-white text-gray-900 border border-gray-200 hover:border-indigo-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{plan.buttonText}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center animate-fade-up delay-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4">All Plans Include</h3>

          {/* Rounded Box for "All Plans Include" */}
          <div className="p-6 bg-white shadow-md rounded-xl mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center">
                <Check size={16} className="text-teal-500 mr-2" />
                24/7 Customer Support
              </div>
              <div className="flex items-center">
                <Check size={16} className="text-teal-500 mr-2" />
                Mobile & Desktop Access
              </div>
              <div className="flex items-center">
                <Check size={16} className="text-teal-500 mr-2" />
                Cloud Sync & Backups
              </div>
              <div className="flex items-center">
                <Check size={16} className="text-teal-500 mr-2" />
                Unlimited Uploads
              </div>
              <div className="flex items-center">
                <Check size={16} className="text-teal-500 mr-2" />
                Multi-language Support
              </div>
            </div>
          </div>

          <p className="mt-6 text-gray-600">Need a custom solution? Let's talk.</p>
          <button 
            onClick={handleContactSales}
            className="mt-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm"
          >
            Contact Our Sales Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;