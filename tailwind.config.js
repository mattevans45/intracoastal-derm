import typography from "@tailwindcss/typography"
import aspectRatio from "@tailwindcss/aspect-ratio"

/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      boxShadow: {
        'lg': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        brown: 'hsl(39, 53%, 24%)',
        darkbrown: 'hsl(34, 75%, 9%)',
        lightgrey: 'hsl(36, 15%, 87%)',
        beige: 'hsl(39, 26%, 58%)',
        black: 'hsl(0, 0%, 0%)',
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900,
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        Playfair: ['Playfair Display', 'serif'],
        display: ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
      fontDisplay: {
        auto: 'auto',
        swap: 'swap',
        block: 'block',
        fallback: 'fallback',
        optional: 'optional',
      },
      utilities: {
        '.preload': {
          'content-visibility': 'auto',
        },
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    typography,
    aspectRatio
    
  ],
};
