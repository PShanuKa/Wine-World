/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#13382B',
        secondary: '#42866E',
        black: '#111',
        lightGray:'#B1B1B1',
        orange:'#DA813D',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        newsreader: ['Newsreader', 'serif'],
      }, 
    },
  },
  plugins: [],
}