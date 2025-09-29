/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['SF Pro Display', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'body': ['SF Pro Text', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Mobile-first responsive typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
        // Professional heading hierarchy
        'h1-mobile': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.025em', fontWeight: '800' }],
        'h1-tablet': ['3rem', { lineHeight: '3.25rem', letterSpacing: '-0.025em', fontWeight: '800' }],
        'h1-desktop': ['4rem', { lineHeight: '4.25rem', letterSpacing: '-0.025em', fontWeight: '900' }],
        'h2-mobile': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2-tablet': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2-desktop': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h3-mobile': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3-tablet': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3-desktop': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h4-mobile': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4-tablet': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4-desktop': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h5-mobile': ['1.125rem', { lineHeight: '1.5rem', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h5-tablet': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h5-desktop': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.005em', fontWeight: '600' }],
        'h6-mobile': ['1rem', { lineHeight: '1.5rem', letterSpacing: '0', fontWeight: '600' }],
        'h6-tablet': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0', fontWeight: '600' }],
        'h6-desktop': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '0', fontWeight: '600' }],
        // Body text hierarchy
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'body-base': ['1rem', { lineHeight: '1.625rem', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.25rem', fontWeight: '400' }],
        'overline': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.1em', fontWeight: '600', textTransform: 'uppercase' }],
      },
      letterSpacing: {
        'tightest': '-0.075em',
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
};