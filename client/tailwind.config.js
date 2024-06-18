/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens:{
        xs:'390px',
        s:'640px',
        sm:'570px',
        m:'900px',
        l:'1200px'
      },
      colors:{
        'font':'white',
        'header':'#5e344d',
        'success':'#5aa0a1',
        'error':'#841237',
        'message':'#a4d4cc',
        'black':'black'
      },
      backgroundImage:{
        'image':'url("bg.jpg")',
      },
      fontSize:{
        base:'1rem'
      }

    },
  },
  plugins: [],
  }

