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
        background: '#FAF8F3',
        foreground: '#2E2D2D',
        'muted-foreground': '#F1F1F1',

        primary: {
          DEFAULT: '#C84C31',
          dark: '#A7441C',
          hover: '#A73A26',
        },
        secondary: '#E2B63D',
        tertiary: {
          DEFAULT: '#A7B77F',
          dark: '#8a9a5b',
        },

        'ieee-blue': '#00629B',
        'chapter-blue': '#3d8499',
        'heart-red': '#EF4444',

        'chatbot-bg': '#0b0a0a',
      },
    },
  },
  plugins: [],
};
