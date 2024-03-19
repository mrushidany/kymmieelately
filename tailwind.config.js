/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white': {
        default: '#FFFFFF',
        100: '#F8F7F5',
      },
      'black': {
        default: '#151515'
      },
      'brown': {
        default: '#B19777'
      },
      'gray': {
        default: '#888',
        100: '#B7B095',
        200: '#888888'
      },

    }
  },
  plugins: [],
};
