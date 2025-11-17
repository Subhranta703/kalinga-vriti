/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b5cff',
        accent: '#ff5a5f',
      },
    },
  },
  plugins: [],
};
