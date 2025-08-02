/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  // Compression
  compress: true,

  // Reduce JavaScript bundle size
  swcMinify: true,

  // Enable static optimization
  trailingSlash: false,

  // Optimize fonts
  optimizeFonts: true,

  // Power optimizations
  poweredByHeader: false,

  // React strict mode for better performance
  reactStrictMode: true,
};

module.exports = nextConfig;