
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'Soft_blue' : 'hsl(215, 51%, 70%)',
        'Cyan' : 'hsl(178, 100%, 50%)',
        'Very_dark_blue1' : 'hsl(217, 54%, 11%)',
        'Very_dark_blue2': 'hsl(216, 50%, 16%)',
        'Very_dark_blue' : 'hsl(215, 32%, 27%)',
        'White' : 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

