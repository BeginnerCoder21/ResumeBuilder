/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
      'inter': ['Inter'],
      'poppins': ['Poppins'],
      'lexend': ['Lexend']
    },
    fontSize: {
      sm: '15px',
      base: '20px',
      xl: '25px',
      '2xl': '30px',
      '3xl': '35px',
      '4xl': '50px',
      '5xl': '65px',
      '6xl': '85px'
    }
    },
    maxWidth: {
      'max-w-2xl': '800px',
      'max-h-md': '437px'
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      'bold-light': 700,
      'extra-bold': 900,
    },
  },
  plugins: [],
}
