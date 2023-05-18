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
        'btn-color2': '#FF8938',
        'btn-color1': '#FF0000',
        'description-color': '#737373',
        'service-title': '#444444',
        'title-color': '#FF3811',
        'color-bg': '#E0E0E0'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}