/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D9488',
          dark: '#0F766E',
        },
        accent: '#F59E0B',
        ink: token('ink'),
        muted: token('muted'),
        page: token('page'),
        card: token('card'),
        soft: token('soft'),
        mint: token('mint'),
        cream: token('cream'),
        line: token('line'),
        brand: token('brand'),
        hero: token('hero'),
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
