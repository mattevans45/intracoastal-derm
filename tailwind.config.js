/** @type {import('tailwindcss').Config} */
const postcss = require('postcss');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    animation: {
      'pulse-slow': 'pulse 4s ease-in-out infinite',
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
        'amaranth_purple': { DEFAULT: '#a63a50', 100: '#210c10', 200: '#421720', 300: '#642330', 400: '#852f40', 500: '#a63a50', 600: '#c4566c', 700: '#d28091', 800: '#e1aab5', 900: '#f0d5da' }, 'antique_white': { DEFAULT: '#f0e7d8', 100: '#413319', 200: '#836533', 300: '#bc9654', 400: '#d6be95', 500: '#f0e7d8', 600: '#f2ebdf', 700: '#f6f0e7', 800: '#f9f5ef', 900: '#fcfaf7' }, 'cinereous': { DEFAULT: '#ab9b96', 100: '#241e1d', 200: '#473c39', 300: '#6b5b56', 400: '#8e7973', 500: '#ab9b96', 600: '#bcafab', 700: '#cdc3c0', 800: '#ddd7d5', 900: '#eeebea' }, 'brown_sugar': { DEFAULT: '#a1674a', 100: '#20150f', 200: '#40291e', 300: '#603e2c', 400: '#81523b', 500: '#a1674a', 600: '#ba8368', 700: '#cba28e', 800: '#dcc1b4', 900: '#eee0d9' }, 'old_rose': { DEFAULT: '#ba6e6e', 100: '#281313', 200: '#502626', 300: '#793939', 400: '#a14c4c', 500: '#ba6e6e', 600: '#c88a8a', 700: '#d6a8a8', 800: '#e4c5c5', 900: '#f1e2e2' } 
      },
      fontWeight: {
        100:100,
        200:200,
        300:300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto', 'serif'],
        display:['ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'],
        poppins: ["Poppins", "sans-serif"],
        title: ["Amatic SC", "sans-serif"],
        title2: ["Poiret One", "sans-serif"],
        cursive: ["Grandiflora One", "cursive"],
        captain: ["capitana", "sans-serif"],
        lato: ['Lato', 'sans-serif'],
        Playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/typography'),
    postcss({
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
          content: ['./index.html', './src/**/*.jsx', './src/*.js','./src/*.jsx'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
      ],
    }),
  ],
};

