/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [ 'sans-serif', 'DM Sans'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        green: {
          50:  '#edf7f0',
          100: '#c6e8ce',
          200: '#9dd4aa',
          400: '#3fa85a',
          600: '#1a7a3a',
          700: '#155f2d',
          800: '#0f4c23',
          900: '#0a3318',
        },
      },
    },
  },
  plugins: [],
}
