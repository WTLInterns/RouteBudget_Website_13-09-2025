'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    fleetSize: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here in a real implementation
    alert('Thanks for your interest! Our team will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      company: '',
      fleetSize: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Optimized Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-twinkle gpu-accelerated"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30">
                🚀 Get Started Today
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight blog-hero-title" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
              Ready to Transform
              <span className="block text-gradient">Your Fleet?</span>
            </h2>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
              Contact us today for a personalized demo or to learn more about how our system can revolutionize your Route Budget management operations.
            </p>
            
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl mb-10 border border-white/20 shadow-luxury animate-fade-in-up animation-delay-200">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
                Why Choose RouteBudget?
              </h3>
              <ul className="space-y-4">
                {[
                  'Comprehensive expense tracking in one platform',
                  'Dual interfaces for admins and drivers',
                  'Real-time expense monitoring and approvals',
                  'Detailed analytics for cost optimization',
                  'Secure, cloud-based solution',
                  'Dedicated support team'
                ].map((point, index) => (
                  <li key={index} className="flex items-center text-gray-200 group">
                    <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-4 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                    <span className="text-lg" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">1000+</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">50k+</p>
                <p className="text-gray-400 text-sm">Vehicles Managed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gradient">99.9%</p>
                <p className="text-gray-400 text-sm">Uptime</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Demo</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Business Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    placeholder="johndoe@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    placeholder="Acme Transporation Ltd."
                  />
                </div>
                
                <div>
                  <label htmlFor="fleetSize" className="block text-sm font-medium text-gray-700 mb-1">
                    Fleet Size*
                  </label>
                  <select
                    id="fleetSize"
                    name="fleetSize"
                    value={formData.fleetSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                  >
                    <option value="">Select your fleet size</option>
                    <option value="1-10">1-10 vehicles</option>
                    <option value="11-50">11-50 vehicles</option>
                    <option value="51-100">51-100 vehicles</option>
                    <option value="100+">100+ vehicles</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200"
                    placeholder="Tell us about your specific needs..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Schedule Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;