module.exports = {
  purge: [
    './src/**/*.html'
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        open: ['Open Sans', 'sans-serif']
      },
      width: {
        '120': '38rem',
        '87' : '87%'
      },
      maxHeight: {
        'content': '90vh',
      },
      gridTemplateRows: {
       'layout': 'repeat(auto-fit, minmax(250px, auto))',
      },
      gridTemplateColumns: {
        'layout-1': 'repeat(4, minmax(275px, auto))',
        'layout-2': 'repeat(2, minmax(400px, auto))',
        'layout-3': 'repeat(1, minmax(75%, auto))',
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
