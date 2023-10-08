/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'back': '#e3e9ff', 
        'first': '#07071c',
        'footer':'#07071b',
        
      },
      colors: {
        'foohead': '#5967e7',
      },
    },
  },
  plugins: [],
}