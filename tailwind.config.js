/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // или 'media'
  content: ["./public/**/*.{html,js}"], // Обновите путь к вашим файлам
  theme: {
    extend: {
      fontFamily: {
        'russo': ['"Russo One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}




