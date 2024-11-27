/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
    extend: {},
  },
  plugins: [],
}

