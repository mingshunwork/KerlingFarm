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
            50: '#f0f9f4',
            100: '#daf2e4',
            200: '#b8e5cc',
            300: '#88d1ab',
            400: '#54b585',
            500: '#2d9a66',
            600: '#1f7d51',
            700: '#1a6443',
            800: '#175037',
            900: '#14422f',
          },
          earth: {
            50: '#faf6f2',
            100: '#f2e9df',
            200: '#e4d1bd',
            300: '#d2b294',
            400: '#c1926b',
            500: '#b37851',
            600: '#a66446',
            700: '#8b4f3c',
            800: '#724236',
            900: '#5f382e',
          },
          cream: {
            50: '#fdfdf9',
            100: '#faf9f0',
            200: '#f5f5dc',
            300: '#efedc4',
            400: '#e7e3a9',
            500: '#ddd68b',
            600: '#cdc061',
            700: '#b5a64d',
            800: '#948842',
            900: '#7a703a',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [],
};

export default config;
