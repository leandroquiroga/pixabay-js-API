module.exports = {
  purge: [
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans', 'sans-serif']
      },
      width: {
        '120': '38rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
