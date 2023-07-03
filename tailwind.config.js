/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage:{
        'cover': "url('images/bg.jpg')"
      },
      screens: {
        "sm": "480px",

      },
      fontFamily: {
        nunito: ['Nunito', sans-serif],
      }
    },
  },
  plugins: [],
}

