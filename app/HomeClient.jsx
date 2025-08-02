// app/HomeClient.jsx
'use client';

import Features from '../components/Features';
import ContactForm from '../components/ContactForm';
import Pricing from '../components/Pricing';
import Solutions from '../components/Solutions';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';
import Header from '../components/Header';
import ProfessionalFooter from '../components/ProfessionalFooter';
import FAQ from '../components/FAQ';
import PerformanceOptimizer from '../components/PerformanceOptimizer';

export default function HomeClient() {
  return (
    <main style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <PerformanceOptimizer />
      <Header />
      <Hero />
      <Features />
      <Solutions />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <ProfessionalFooter />
    </main>
  );
}
