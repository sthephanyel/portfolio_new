/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./screens/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Indie Flower, sans-serif',
        iceberg:['"Iceberg"', 'cursive']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      colors:{
        mainColors:{
          100: '#0D0B27',
          200: '#66FF33',
          300:'#370EAB',
          400: '#8257E5'
        },
        yellow:{
          50:'#DDD51E'
        },
        green: {
          50: '#44C3A0',
          100: '#CFE100',
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
          1000: '#327430',
          1100:'#53DB61'

        },
        blue: {
          100: '#81D8F7',
          200: '#0DE7F4',
          500: '#1E253C',
          1000: '#1F2021'
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        },
        black:{
          100: '#191b1c',
          200: '#353535',
        },
        whiteText:{
          100: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}