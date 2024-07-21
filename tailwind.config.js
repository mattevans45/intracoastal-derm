const postcss = require('postcss');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'skeleton': 'skeleton 1s ease-in-out infinite',
        'auto-show': 'autoShowAnimations 1s both', // Ensure duration and fill mode are set
      },
      keyframes: {
        autoShowAnimations: {
          '0%': { opacity: 0, transform: 'translateY(100px) scale(0.8)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        skeleton: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
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
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    postcss({
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
          content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
      ],
    }),
  ],
};
