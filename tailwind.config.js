/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-yellow': '#FEB135'
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}

