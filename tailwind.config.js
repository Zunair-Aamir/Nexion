/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}",  "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      'xxs': '320px',
      // => @media (min-width: 320px) { ... }

      'xs': '390px',
      // => @media (min-width: 390px) { ... }

      'sm': '576px',
      // => @media (min-width: 575px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... } 

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1366px',
      // => @media (min-width: 1440px) { ... }

      '3xl': '1600px',
      // => @media (min-width: 1600px) { ... }
      '4xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: { 
        'whitee' : '#FFF',
        'blackk' : '#000',
       'dark-blue': '#0B0623E5',
       'dark-purple': '#763BFF',
        'light-purple': '#8643FF',
        'dark-orange': '#FFF500',
        'mine-craft' : '#241407',
        'light-cream' : '#D9D9D9',
        'dark-cream' : '#AEAEAE',
        'medium-cream' : '#DBDBDB',
        'light-yellow' : '#FFF136',
        'purple2' : '#180052',
        'graypur' : '#535353'
       
        },
      boxShadow: {
        neon: '0px 5px 20px 0px rgba(255, 255, 255, 0.30)',
        neon2: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        Poppins : ['Poppins', 'sans-serif'],
        Montserrat : ['Montserrat', 'sans-serif'],
        Mondo : ['Mondo', 'sans-serif'],
        Inter : ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}