'use client';

import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Aggressive performance optimizations
    const optimizePerformance = () => {
      // Reduce animations on low-end devices
      if (navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4) {
        document.documentElement.style.setProperty('--animation-duration', '0.2s');
        document.documentElement.style.setProperty('--transition-duration', '0.1s');

        // Disable complex animations
        const style = document.createElement('style');
        style.textContent = `
          .animate-float, .animate-float-delayed, .animate-twinkle {
            animation: none !important;
          }
          .animate-fade-in-up {
            animation-duration: 0.2s !important;
          }
        `;
        document.head.appendChild(style);
      }

      // Remove will-change after animations complete
      setTimeout(() => {
        const animatedElements = document.querySelectorAll('[class*="animate-"]');
        animatedElements.forEach(el => {
          el.style.willChange = 'auto';
          el.classList.add('animation-complete');
        });
      }, 2000);
    };

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        img.decoding = 'async';
      });
    };

    // Debounce scroll events
    let scrollTimeout;
    const optimizeScrolling = () => {
      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // Scroll handling logic here
        }, 16); // ~60fps
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Run optimizations
    optimizePerformance();
    optimizeImages();
    const cleanupScroll = optimizeScrolling();

    // Cleanup
    return () => {
      cleanupScroll();
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
