/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wmp-blue': {
          light: '#0078D7',
          DEFAULT: '#0055E5',
          dark: '#003C9E',
        },
        'wmp-gray': {
          light: '#ECE9D8',
          DEFAULT: '#D4D0C8',
          dark: '#808080',
        },
        'wmp-green': '#00FF00',
      },
      fontFamily: {
        'galmuri': ['Galmuri11', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
