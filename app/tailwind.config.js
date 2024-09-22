/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Arvo', 'system-ui'], // For titles
        subtitle: ['Averia Libre', 'system-ui'], // For subtitles
        body: ['Dosis', 'sans-serif'], // For paragraphs
      },
    },
  },
  plugins: [],
}
