/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      },
      colors: {
        // 'navber': '#4285F4',
        // 'text': '#333333',
        // 'title': '#FF5722',
        // 'color-bg': '#E0E0E0'
      },
    },
  },
  plugins: [require("daisyui")],
}