/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffffff', // putih
          100: '#ffffff',
          500: '#ffffff',
          600: '#f5f5f5', // abu putih
        },
        secondary: {
          300: '#d6bfa7',
          500: '#a97c50',
          600: '#8b5e34',
          700: '#6f4e37',
          800: '#4e342e',
        },
        krem: {
          300: '#f5f5dc',
          400: '#ede5b8',
        }
      }
    },
  },
  plugins: [],
}