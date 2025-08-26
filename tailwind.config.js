/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: '#FAF8F3',
        'accent-red': '#C84C31',
        'accent-yellow': '#E2B63D',
        'accent-green': '#A7B77F',
        'footer-bg': '#2E2D2D',
        'footer-text': '#F1F1F1',
      },
    },
  },
  plugins: [],
};