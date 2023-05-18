/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open': ['Open Sans', 'sans-serif'],
        'Lobster': ['Lobster', 'cursive'],
      },
      colors: {
        'linear': '#FF0000, #FF8938',
        'text': 'rgba(87, 118, 57, 0.1)',
        'title': '#FF3811',
        'color-bg': '#E0E0E0'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}