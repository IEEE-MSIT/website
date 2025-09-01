/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F0F5F9',
        foreground: '#1B2A41',
        'muted-foreground': '#627D98',
        'dark-background': '#0D131D',
        'dark-foreground': '#E2E8F0',
        'dark-muted-foreground': '#94A3B8',

        primary: {
          DEFAULT: '#00629B',
          dark: '#004A77',
          hover: '#1776B6',
        },
        secondary: '#FF6B6B',
        tertiary: {
          DEFAULT: '#FFC300',
          dark: '#E8A500',
        },

        'ieee-blue': '#00629B',
        'chapter-blue': '#3d8499',
        'heart-red': '#EF4444',
        'chatbot-bg': '#101B2E',
      },
    },
  },
  plugins: [],
};
