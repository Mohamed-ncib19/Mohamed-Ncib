/** @type {import('tailwindcss').Config} */
import animate from "tailwindcss-animate";
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
  animation: {
  fadeIn: 'fadeIn 1s ease-out forwards',
  gradient: 'gradient 6s ease infinite',
  float: 'float 3s ease-in-out infinite'
  },
  keyframes: {
  fadeIn: {
  '0%': {
  opacity: '0',
  transform: 'translateY(20px)'
  },
  '100%': {
  opacity: '1',
  transform: 'translateY(0)'
  }
  },
  gradient: {
  '0%, 100%': {
  'background-size': '200% 200%',
  'background-position': 'left center'
  },
  '50%': {
  'background-size': '200% 200%',
  'background-position': 'right center'
  }
  },
  float: {
  '0%, 100%': {
  transform: 'translateY(0px)'
  },
  '50%': {
  transform: 'translateY(-20px)'
  }
  }
  },
  colors: {
  border: 'hsl(var(--border))',
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: {
  DEFAULT: 'hsl(var(--card))',
  foreground: 'hsl(var(--card-foreground))'
  },
  popover: {
  DEFAULT: 'hsl(var(--popover))',
  foreground: 'hsl(var(--popover-foreground))'
  },
  primary: {
  DEFAULT: 'hsl(var(--primary))',
  foreground: 'hsl(var(--primary-foreground))'
  },
  secondary: {
  DEFAULT: 'hsl(var(--secondary))',
  foreground: 'hsl(var(--secondary-foreground))'
  },
  muted: {
  DEFAULT: 'hsl(var(--muted))',
  foreground: 'hsl(var(--muted-foreground))'
  },
  accent: {
  DEFAULT: 'hsl(var(--accent))',
  foreground: 'hsl(var(--accent-foreground))'
  },
  destructive: {
  DEFAULT: 'hsl(var(--destructive))',
  foreground: 'hsl(var(--destructive-foreground))'
  },
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  chart: {
  '1': 'hsl(var(--chart-1))',
  '2': 'hsl(var(--chart-2))',
  '3': 'hsl(var(--chart-3))',
  '4': 'hsl(var(--chart-4))',
  '5': 'hsl(var(--chart-5))'
  }
  },
  backdropBlur: {
  xs: '2px'
  },
  borderRadius: {
  lg: 'var(--radius)',
  md: 'calc(var(--radius) - 2px)',
  sm: 'calc(var(--radius) - 4px)'
  }
  }
  },
  plugins: [animate],
}
