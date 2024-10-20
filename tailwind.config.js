/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        dark : 'rgb(17, 17, 17)',
        light : 'rgb(171, 59, 21)'
      },
      colors : {        
        light : 'rgb(171, 59, 21)'
      }
    },
  },
  plugins: [],
}