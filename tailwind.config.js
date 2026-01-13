/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F2A44',
        secondary: '#2F80ED',
        success: '#27AE60',
        light: '#F7F9FC'
      }
    },
  },
  plugins: [],
};
