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

            <h2 className="typography-h1 font-black text-white mb-6 tracking-tight blog-hero-title">
              Ready to Transform
              <span className="block text-gradient">Your Fleet?</span>
            </h2>

            <p className="typography-body-lg text-gray-200 mb-8 leading-relaxed">
              Contact us today for a personalized demo or to learn more about how our system can revolutionize your Route Budget management operations.
            </p>
            
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl mb-10 border border-white/20 shadow-luxury animate-fade-in-up animation-delay-200">
              <h3 className="typography-h3 font-bold text-white mb-6">
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
                    <span className="typography-body">{point}</span>
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
          


          <div className="relative bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl animate-fade-in-up animation-delay-800 group overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="typography-h3 font-black text-white mb-4">
                  Request a Demo
                </h3>
                <p className="text-gray-300 text-lg">
                  Get started with Route Budget in just 2 minutes
                </p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group/field">
                      <label htmlFor="name" className="block text-sm font-bold text-gray-200 mb-3 group-focus-within/field:text-indigo-300 transition-colors duration-200">
                        Full Name*
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all duration-300 text-white placeholder-gray-400 hover:border-white/30 text-lg"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    <div className="group/field">
                      <label htmlFor="mobile" className="block text-sm font-bold text-gray-200 mb-3 group-focus-within/field:text-indigo-300 transition-colors duration-200">
                        Mobile Number*
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all duration-300 text-white placeholder-gray-400 hover:border-white/30 text-lg"
                          placeholder="+91 98765 43210"
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  <div className="group/field">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-200 mb-3 group-focus-within/field:text-indigo-300 transition-colors duration-200">
                      Email Address*
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all duration-300 text-white placeholder-gray-400 hover:border-white/30 text-lg"
                        placeholder="your@email.com"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="group/field">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-200 mb-3 group-focus-within/field:text-indigo-300 transition-colors duration-200">
                      Message (Optional)
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/20 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition-all duration-300 resize-none text-white placeholder-gray-400 hover:border-white/30 text-lg"
                        placeholder="Tell us about your fleet management needs or any specific questions..."
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-5 px-8 rounded-2xl font-bold hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-indigo-500/50 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 hover:-translate-y-1 text-lg overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%]"></div>
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690z"/>
                      </svg>
                      Schedule Demo via WhatsApp
                    </span>
                  </button>

                  <div className="text-center">
                    <p className="text-gray-300 text-sm">
                      🔒 Secure & Private • No spam • Instant response
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      Clicking "Schedule Demo" will open WhatsApp with your details pre-filled
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;