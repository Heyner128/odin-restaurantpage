/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}', './src/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'accueil': "url('/src/imageAccueil.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
