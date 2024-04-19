/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'white-shadow': '#ffffff',
      },
      boxShadow: {
        'white': '0 0 10px theme("colors.white-shadow")',
      },
    },
  },
  plugins: [],
}