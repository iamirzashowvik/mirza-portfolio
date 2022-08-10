/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Add more here
  ],
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      'custom-light': ' 0 0 10x #313131',
      'custom-dark': '5x 5x 10px #0a0c0e , -5px -5px -10px #14161c',
    },
    fontFamily: {
      kausan: ['Kaushan Script'],
    },
    extend: {
      colors: {
        green: {
          DEFAULT: '#00f260',
        },
        dark: {
          DEFAULT: '#010101',
          100: '#0a0b0e',
          200: '#16181d',
          300: '#16181d',
          500: '#0f1115',
          700: '#202125',
        },
      },
    },
  },
  plugins: [],
  variants: {
    extends: {
      boxShadow: ['dark'],
    },
  },
}
