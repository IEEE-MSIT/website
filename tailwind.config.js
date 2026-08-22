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
        background: '#F0F5F9', // Subtle Grey
        foreground: '#1B2A41', // Midnight Slate
        'muted-foreground': '#526176',

        primary: {
          DEFAULT: '#00508F', // IEEE Royal Blue
          dark: '#003E70',
          hover: '#0062AB',
        },
        secondary: {
          DEFAULT: '#4DB6AC', // Tech Teal
          dark: '#3A9D92',
          hover: '#64C3B9',
        },
        accent: {
          DEFAULT: '#C0A062', // Rich Gold
          dark: '#A78B51',
        },

        'ieee-blue': '#00508F', // Alias for consistency
        'heart-red': '#EF4444', // Kept for the "Made with" heart
        'chatbot-bg': '#101B2E',
      },
    },
  },
  plugins: [],
};
