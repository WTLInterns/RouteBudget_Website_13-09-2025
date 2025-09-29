'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (item) => {
    if (typeof window !== 'undefined') {
      if (item === 'Blog') {
        window.location.href = '/blog';
      } else {
        const sectionId = item.toLowerCase();
        if (window.location.pathname === '/') {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.location.href = `/#${sectionId}`;
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100/50'
          : 'bg-gradient-to-r from-gray-900/95 via-slate-900/95 to-gray-900/95 backdrop-blur-md'
      }`}
      style={{
        fontFamily:
          "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Animated gradient line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform origin-left transition-all duration-700 ${
          scrolled ? 'scale-x-100' : 'scale-x-0'
        }`}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center group cursor-pointer">
            <div className="relative transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-3">
              <Logo />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="ml-4">
              <span
                className={`typography-h3 font-black tracking-tight transition-all duration-500 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                } group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent`}
              >
                Route Budget
              </span>
              <div
                className={`text-xs font-medium transition-all duration-500 ${
                  scrolled ? 'text-gray-500' : 'text-gray-300'
                }`}
              >
                Fleet Management Pro
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {['Features', 'Solutions', 'Pricing', 'Blog', 'Testimonials', 'FAQ'].map(
              (item, index) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item)}
                  className={`relative font-semibold px-5 py-3 rounded-2xl transition-all duration-500 hover:scale-105 group overflow-hidden ${
                    scrolled
                      ? 'text-gray-700 hover:text-white hover:shadow-xl'
                      : 'text-white/90 hover:text-white hover:shadow-2xl'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl transform scale-x-0 group-hover:scale-x-100"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] rounded-2xl"></div>

                  <span className="relative z-10">{item}</span>

                  {/* Bottom indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </button>
              )
            )}

            {/* CTA Button */}
            <button
              onClick={() => handleNavigation('contact')}
              className="ml-4 px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </nav>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`relative p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                scrolled
                  ? 'text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'translate-y-2.5'
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100/50 shadow-2xl animate-slide-down">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-2">
              {['Features', 'Solutions', 'Pricing', 'Blog', 'Testimonials', 'FAQ'].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => handleNavigation(item)}
                    className="block w-full text-left px-6 py-4 text-lg font-semibold text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item}</span>
                      <svg
                        className="w-5 h-5 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                )
              )}

              <div className="pt-6 mt-6 border-t border-gray-200/50">
                <button
                  onClick={() => handleNavigation('contact')}
                  className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                >
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;