/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: '#072146',
        blue2: '#192645',
        lightDarkBlue: '#004481',
        appBarHighlighted: '#043263',
        indicativeYellow: '#f8cd51',
        infoBlue: '#1973B8',
        currency:"#8E7022"
        
      }
    },
  },
  plugins: [],
}