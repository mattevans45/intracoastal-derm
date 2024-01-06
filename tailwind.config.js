/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ["'Roboto', 'sans-serif'"],
      'serif': ["'Roboto', 'serif'"],
    },
    fontWeight: {
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'black': 900,
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}