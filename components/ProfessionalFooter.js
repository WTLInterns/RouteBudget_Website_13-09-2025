import { Truck, Mail, Phone, MapPin, Globe, Star, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white relative overflow-hidden" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full top-0 -left-24 blur-3xl animate-float"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full bottom-0 -right-20 blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8 group">
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-12 w-12 text-indigo-400" />
              </div>
              <span className="ml-4 text-3xl font-black tracking-tight" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
                Route Budget
              </span>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-lg text-lg leading-relaxed" style={{ fontFamily: "'SF Pro Text', sans-serif" }}>
              India's most trusted fleet management solution. Simplify your fleet expense management with our comprehensive tracking and reporting platform built for modern transportation businesses.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient">1000+</p>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient">50k+</p>
                <p className="text-gray-400 text-sm">Vehicles Managed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gradient">99.9%</p>
                <p className="text-gray-400 text-sm">Uptime</p>
              </div>
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300 font-semibold">4.9/5 Customer Rating</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Features', 'Solutions','Pricing', 'Blog', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={item === 'Blog' ? '/blog' : `/#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: "'SF Pro Display', sans-serif" }}>
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email Us</p>
                  <p className="text-gray-400">support@routebudget.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Call Us</p>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Visit Us</p>
                  <p className="text-gray-400">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Free Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Globe size={16} />
              <span>© 2025 Route Budget. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
