/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        teko: ['var(--font-teko)'],
        poppins: ['var(--font-poppins)'],
        playFairDisplay: ['var(--font-play-fair-display)'],
      }
    },
    colors: {
      transparent: 'transparent',
      'white': {
        default: '#FFFFFF',
      },
      'black': {
        default: '#1D1D1D'
      },
      'brown': {
        default: '#9D6F4D',
        100: '#E9D9C9',
        200: '#F6F3EC',
        300: '#F8F7F5',
        400: '#ADACAB'
      },
      'gray': {
        default: '#7B7A76',
      },
    }
  },
  plugins: [],
};
