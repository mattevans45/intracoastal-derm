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
      cursive: ["Grandiflora One", "cursive"],
      captain: ["capitana", "sans-serif"]

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
      colors: {
        primary: 'lch(52.2345% 70.0687 264.7059)',
        secondary: 'lch(67.2475% 83.1374 146.7059)',
        accent: 'lch(58.2345% 90.0687 264.7059)',
        neutral: 'lch(20.2345% 20.0687 54.7059)',
        info: 'lch(60.2345% 50.0687 194.7059)',
        success: 'lch(70.2345% 60.0687 120.7059)',
        warning: 'lch(60.2345% 90.0687 84.7059)',
        error: 'lch(50.2345% 70.0687 14.7059)',
      },

      
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
  ],
}