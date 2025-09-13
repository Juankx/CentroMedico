/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-oscuro': '#184360',
        'azul-medio': '#255d87',
        'rojo-cta': '#c62828',
        'verde': '#3cab3d',
        'azul-claro': '#53afd7',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

