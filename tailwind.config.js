/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-color': '#fff2ec',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'lg': '5rem',
        'md': '3rem',
        'sm': '2rem',
      }
    },
    fontFamily: {
      'Playfair': "'Playfair Display', serif",

    }
  },
  plugins: [],
}
