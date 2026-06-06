/** @type {import('tailwindcss').Config} */
const animate = require('tailwindcss-animate');

module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Satoshi', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Satoshi', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.5rem',
      },
      boxShadow: {
        editorial: '0 30px 90px -46px rgb(107 47 184 / 0.78)',
        glow: '0 0 0 1px rgb(255 255 255 / 0.12), 0 20px 80px -35px rgb(157 78 221 / 0.75)',
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 9rem)',
      },
      keyframes: {
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-1.5%, 1%)' },
          '50%': { transform: 'translate(1%, -1.5%)' },
          '75%': { transform: 'translate(1.5%, 1.5%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(18px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(18px) rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 60px -18px rgb(181 126 255 / 0.3)' },
          '50%': { boxShadow: '0 0 80px -12px rgb(181 126 255 / 0.6)' },
        },
        energyFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        nodePulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgb(157 78 221 / 0)' },
          '50%': { boxShadow: '0 0 0 4px rgb(157 78 221 / 0.15)' },
        },
      },
      animation: {
        grain: 'grain 9s steps(6) infinite',
        orbit: 'orbit 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        energyFlow: 'energyFlow 2.5s ease-in-out infinite',
        nodePulse: 'nodePulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [animate],
};
