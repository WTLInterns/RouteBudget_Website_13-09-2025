'use client';

import { Truck, Mail, Phone, MapPin, Globe, Star, ArrowRight } from 'lucide-react';

const Footer = () => {
  const handleGetFreeDemo = () => {
    // Create WhatsApp message for free demo
    const message = `Hello! I'm interested in getting a free demo of RouteBudget fleet management software.

Please contact me to schedule a demo and learn more about your fleet management solutions.

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
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full top-1/2 left-1/4 blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + i * 25}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: '8s'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="flex items-center mb-8 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Truck className="h-8 w-8 text-white" />
                </div>
              </div>
              <span className="ml-6 typography-h2 font-black tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Route Budget
              </span>
            </div>
            
            <p className="typography-body-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              India's most trusted fleet management solution. Simplify your fleet expense management with our comprehensive tracking and reporting platform built for modern transportation businesses.
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div className="text-center group">
                <div className="relative">
                  <p className="text-3xl font-black text-gradient group-hover:scale-110 transition-transform duration-300">1000+</p>
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-gray-400 text-sm font-medium mt-2">Happy Clients</p>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <p className="text-3xl font-black text-gradient group-hover:scale-110 transition-transform duration-300">50k+</p>
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-gray-400 text-sm font-medium mt-2">Vehicles Managed</p>
              </div>
              <div className="text-center group">
                <div className="relative">
                  <p className="text-3xl font-black text-gradient group-hover:scale-110 transition-transform duration-300">99.9%</p>
                  <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p className="text-gray-400 text-sm font-medium mt-2">Uptime</p>
              </div>
            </div>
            
            {/* Enhanced Rating */}
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <span className="text-white font-bold text-lg">4.9/5 Customer Rating</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in-up animation-delay-200">
            <h3 className="typography-h3 font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-5">
              {['Features', 'Solutions','Pricing', 'Blog', 'Testimonials', 'FAQ'].map((item, index) => (
                <li key={item} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                  <a
                    href={item === 'Blog' ? '/blog' : `/#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-3 group relative p-2 rounded-xl hover:bg-white/5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300">
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300 text-gray-400 group-hover:text-white" />
                    </div>
                    <span className="typography-body font-medium group-hover:font-semibold transition-all duration-300">{item}</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="animate-fade-in-up animation-delay-400">
            <h3 className="typography-h3 font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="typography-body font-bold text-white mb-1">Email Us</p>
                  <p className="typography-body text-gray-300">info@webutsav.com</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="typography-body font-bold text-white mb-1">Call Us</p>
                  <p className="typography-body text-gray-300">+91 8766922792</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="typography-body font-bold text-white mb-2">Visit Us</p>
                  <p className="text-gray-300 leading-relaxed">
                    WebUtsav Pvt. Ltd.<br />
                    Office No. 016, Wing-A, Downtown Rd,<br />
                    CityVista, Kharadi, Pune, Maharashtra 411014
                  </p>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="mt-10">
              <button 
                onClick={handleGetFreeDemo}
                className="relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-5 px-8 rounded-2xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 hover:-translate-y-1 text-lg overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]"></div>
                <span className="relative z-10">Get Free Demo</span>
              </button>
            </div>
          </div>
        </div>   
        
        {/* Enhanced Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
          <div className="relative border-t border-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 pt-10 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Globe size={18} className="text-white" />
                </div>
                <span className="typography-body font-medium">© 2025 Route Budget. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-8 text-gray-400">
                <a href="#" className="hover:text-white transition-all duration-300 typography-body font-medium hover:bg-white/5 px-4 py-2 rounded-xl">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-all duration-300 typography-body font-medium hover:bg-white/5 px-4 py-2 rounded-xl">Terms of Service</a>
                <a href="#" className="hover:text-white transition-all duration-300 typography-body font-medium hover:bg-white/5 px-4 py-2 rounded-xl">Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
