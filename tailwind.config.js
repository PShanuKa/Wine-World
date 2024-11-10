/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
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
  			lightGray: '#B1B1B1',
  			orange: '#DA813D',
			bgSecondary: '#0B161A'
  		},
  		fontFamily: {
  			mulish: ['Mulish', 'sans-serif'],
  			newsreader: ['Newsreader', 'serif'],
  			arimo: ['Arimo', 'sans-serif'],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}