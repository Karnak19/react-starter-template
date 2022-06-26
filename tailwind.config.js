/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ed6c6d',
          darker: '#1d0900',
        },
      },
    },
  },
  plugins: [],
};
