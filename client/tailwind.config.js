/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
   "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        primary: '#B0E0E6',
      },
    },
  },
  plugins: [],
}

