import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': {
          DEFAULT: '#0f1419',
          50: '#1a1f26',
          100: '#252b33',
          200: '#2f3740',
        },
        'stone': {
          DEFAULT: '#e8e4df',
          50: '#f5f3f0',
          100: '#cec9c1',
          200: '#a8a29a',
        },
        'terracotta': {
          DEFAULT: '#c66b54',
          light: '#d88975',
          dark: '#a55544',
        },
        'sage': {
          DEFAULT: '#8a9a8e',
          light: '#a8b5ab',
          dark: '#6d7d71',
        },
        'sand': {
          DEFAULT: '#d4c5b0',
          light: '#e5d9c9',
          dark: '#b8a78f',
        },
      },
      fontFamily: {
        'serif': ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        reveal: {
          '0%': { transform: 'translateY(30px) scale(0.95)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
