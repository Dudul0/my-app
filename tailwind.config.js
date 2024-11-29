/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'skyblue': '#40BFFF',
      'lightgray':{
        100:'#EBF0FF',
        200:'#9098B1',
      },
      'white':'#ffffff',
      'discount':'#FB7181',
      'textblue':'#223263'
    },
    screens:{
      'md':'768px',
      'xl':'1280px',
      '2xl':'1500px'

    },

    container:{
      center: true,
      padding:{
        DEFAULT:'1rem',
        'md':'2rem',
        '2xl':'3rem'
      }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Добавляем кастомный шрифт
      },
    },
  },
  plugins: [],
}

