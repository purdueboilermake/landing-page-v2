/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Arvo', 'serif'], // For titles
        subtitle: ['Delicious Handrawn', 'cursive'], // For subtitles
        body: ['Dosis', 'sans-serif'], // For paragraphs
      },
    },
  },
  plugins: [],
}

