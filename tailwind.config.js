/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'themeBlue': '#00308F',
        'lightBlue': '#7CB9E8',
        'textColor': '#252b36',
        'customGrey': '#f1f4f8', 
      }
    },
  },
  plugins: [],
}

