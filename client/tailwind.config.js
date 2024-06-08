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
      backgroundImage:{
        'image':'url("bg.jpg")'
      },
      fontSize:{
        base:'1rem'
      }

    },
  },
  plugins: [],
}

