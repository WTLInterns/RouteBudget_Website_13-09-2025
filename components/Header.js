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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (item) => {
    if (item === 'Blog') {
      window.location.href = '/blog';
    } else {
      const sectionId = item.toLowerCase();
      // Check if we're already on the home page
      if (window.location.pathname === '/') {
        // We're on home page, just scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We're on another page, navigate to home page with hash
        window.location.href = `/#${sectionId}`;
      }
    }
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' : 'bg-gray-900/90 backdrop-blur-sm'}`} style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="flex justify-between items-center py-5" suppressHydrationWarning>
          <div className="flex items-center group" suppressHydrationWarning>
            <div className="transform group-hover:scale-110 transition-transform duration-300" suppressHydrationWarning>
              <Logo />
            </div>
            <span className={`ml-3 font-black text-2xl tracking-tight transition-all duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: "'SF Pro Display', sans-serif" }} suppressHydrationWarning>
              Route Budget
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-2">
            {['Features', 'Solutions', 'Pricing', 'Blog', 'Testimonials', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className={`font-semibold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
                  scrolled
                    ? 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg'
                    : 'text-white hover:text-gray-900 hover:bg-white/20 backdrop-blur-sm'
                }`}
                style={{ fontFamily: "'SF Pro Text', sans-serif" }}
              >
                {item}
              </button>
            ))}
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${scrolled ? 'text-blue-900' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Features', 'Solutions', 'Pricing', 'Blog', 'Testimonials', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-800 hover:bg-gray-50 rounded-md"
              >
                {item}
              </button>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <button className="block w-full px-4 py-2 text-center text-blue-800 hover:text-blue-900">
                  Login
                </button>
              </div>
              <div className="mt-3 px-2">
                <button className="block w-full px-4 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Request Demo
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