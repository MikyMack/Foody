/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'smd': '940px',

      'md': '1050px',
      // => @media (min-width: 960px) { ... }

      'lg': '1240px',
      // => @media (min-width: 1440px) { ... }
    },
    container: {
      center: true,
      
    },
    extend: {},
  },
  plugins: [],
}

