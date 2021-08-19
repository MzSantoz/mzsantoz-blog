module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'gruppo': ['Gruppo', 'sans-serif'],
      'montserrat':['Montserrat'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
