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
      maxHeight: {
        '3/4': '85vh' 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
