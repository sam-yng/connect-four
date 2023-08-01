/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": "#7945FF",
        "red": "#FD6687",
        "yellow": "#FFCE67"
      }
    },
  },
  plugins: [],
}

