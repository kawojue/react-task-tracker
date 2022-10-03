/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'san-serif']
      },
      screen: {
        sm: "640px",
        md: "800px",
        lg: "1200px",
      }
    },
  },
  plugins: [],
}