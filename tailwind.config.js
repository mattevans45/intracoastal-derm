/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    animation: {
      'pulse-slow': 'pulse 4s ease-in-out infinite',
    },
    
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Roboto', 'serif'],
     display:['ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'],
      poppins: ["Poppins", "sans-serif"],
      title: ["Amatic SC", "sans-serif"],
      title2: ["Poiret One", "sans-serif"],
      cursive: ["Grandiflora One", "cursive"]
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
    extend: {

      
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
  ],
}