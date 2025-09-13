'use client';

import { useEffect } from 'react';

const Hero = () => {
  const handleStartFreeTrial = () => {
    // Scroll to contact form section
    if (typeof window !== 'undefined') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleWatchDemo = () => {
    // Scroll to contact form section
    if (typeof window !== 'undefined') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Ultra-optimized Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle gpu-accelerated"
            style={{
              left: `${20 + i * 20}%`,
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '6s'
            }}
          />
        ))}
      </div>
      

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-screen py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30 animate-pulse-slow">
                🚀 Next-Gen Fleet Management
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight blog-hero-title animate-fade-in-up animation-delay-200" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
              Simplify Your
              <span className="block text-gradient">Fleet Expense</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl text-gray-200">Management</span>
            </h1>

            <p className="text-2xl md:text-3xl mb-10 text-gray-200 leading-relaxed animate-fade-in-up animation-delay-400" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
              A complete solution to manage and track all your Route Budget including fuel payments, FastTag recharges, servicing costs, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in-up animation-delay-600">
              <button 
                onClick={handleStartFreeTrial}
                className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-luxury hover:shadow-luxury-hover transform hover:scale-105 text-lg"
              >
                <span>Start Free Trial</span>
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>   

              <button 
                onClick={handleWatchDemo}
                className="group inline-flex items-center justify-center px-10 py-5 border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-lg"
              >
                <svg className="mr-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex items-center gap-8 text-gray-300 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-xl">★★★★★</span>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="font-semibold">500+ Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block relative">
            <img
              src="https://images.klipfolio.com/website/public/43d1163c-613a-4709-b29f-c9e48a2dd27e/supply-chain-dashboard-example.png"
              alt="Dashboard Example"
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;     