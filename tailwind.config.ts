import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        farm: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
            950: '#052e16',
          },
          earth: {
            50: '#faf7f3',
            100: '#f4ede3',
            200: '#e8d9c5',
            300: '#d7bfa1',
            400: '#c5a277',
            500: '#b68a5c',
            600: '#a97650',
            700: '#8d5f43',
            800: '#734f3a',
            900: '#5e4231',
            950: '#322118',
          },
          cream: {
            50: '#fefdfb',
            100: '#fdfbf7',
            200: '#faf6ee',
            300: '#f5f0e3',
            400: '#ebe3d0',
            500: '#ddd2b8',
            600: '#c9b99a',
            700: '#b09a79',
            800: '#8f7d63',
            900: '#756752',
            950: '#3d3429',
          },
          sage: {
            50: '#f6f7f6',
            100: '#e3e7e3',
            200: '#c7cfc7',
            300: '#a3afa3',
            400: '#7d8d7d',
            500: '#627362',
            600: '#4d5c4d',
            700: '#404a40',
            800: '#363d36',
            900: '#2e342e',
            950: '#171b17',
          },
        },
        // Dark theme colors
        dark: {
          bg: {
            primary: '#0a0a0a',
            secondary: '#111111',
            tertiary: '#1a1a1a',
            card: '#151515',
          },
          border: {
            primary: '#2a2a2a',
            secondary: '#3a3a3a',
            accent: '#d4af37',
          },
          text: {
            primary: '#ffffff',
            secondary: '#a3a3a3',
            muted: '#6b6b6b',
          },
        },
        // Golden accent colors
        golden: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#d4af37', // Primary golden
          700: '#b8860b',
          800: '#92721f',
          900: '#78601c',
          950: '#453819',
        },
        accent: {
          warm: '#d97706',
          cool: '#0891b2',
          nature: '#059669',
          gold: '#d4af37',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
        display: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(34, 197, 94, 0.3)',
        'glow-lg': '0 0 30px rgba(34, 197, 94, 0.4)',
        'golden': '0 0 20px rgba(212, 175, 55, 0.3)',
        'golden-lg': '0 0 30px rgba(212, 175, 55, 0.4)',
        'dark-card': '0 4px 20px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        'gradient-nature': 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
