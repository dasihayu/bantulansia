/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#FFEE63',
        secondary: '#FACC15',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
