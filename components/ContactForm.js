'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.mobile || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    // Create WhatsApp message
    const message = `Hello! I'm interested in RouteBudget fleet management software.

*Contact Details:*
Name: ${formData.name}
Mobile: ${formData.mobile}
Email: ${formData.email}

*Message:*
${formData.message || 'I would like to schedule a demo and learn more about your fleet management solutions.'}

Please contact me to schedule a demo. Thank you!`;

    // WhatsApp number (WebUtsav)
    const whatsappNumber = '918766922792';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      mobile: '',
      email: '',
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

      {/* Ultra-optimized Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle gpu-accelerated"
            style={{
              left: `${25 + i * 25}%`,
              top: `${20 + i * 30}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: '10s'
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
          


          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-luxury animate-fade-in-up animation-delay-800">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>Request a Demo</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-200 text-white placeholder-gray-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-200 mb-2">
                      Mobile Number*
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-200 text-white placeholder-gray-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-200 text-white placeholder-gray-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors duration-200 resize-none text-white placeholder-gray-300"
                    placeholder="Tell us about your fleet management needs or any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                >
                  Schedule Demo via WhatsApp
                </button>

                <p className="text-center text-gray-300 text-sm mt-4">
                  Clicking "Schedule Demo" will open WhatsApp with your details pre-filled
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;