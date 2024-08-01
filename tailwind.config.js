/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'skeleton': 'skeleton 1s ease-in-out infinite',
        'auto-show': 'autoShowAnimations 1s both',
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
        primary: 'hsl(198, 43%, 20% / <alpha-value>)',
        beige: 'hsl(39, 26%, 58%)',
        black: 'hsl(0, 0%, 0%)',
      },
      fontWeight: {
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
        800: '800',
        900: '900',
      },
      fontFamily: {
        mono: ['var(--font-roboto-mono)'],
        playfair: ['var(--font-playfair)'],
        playfairSC: ['var(--font-playfairSC)'],
        display: ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}