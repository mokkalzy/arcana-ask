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
        ink: {
          DEFAULT: '#1a1625',
          light: '#2d2838',
          lighter: '#443f4f',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#e4c76b',
          dark: '#b8941f',
        },
        mystic: {
          purple: '#6b4f9e',
          blue: '#4a5f8a',
        }
      },
      animation: {
        'flip': 'flip 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        'shuffle': 'shuffle 0.3s ease-in-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        shuffle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
