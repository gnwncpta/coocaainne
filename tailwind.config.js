module.exports = {
  purge: ['./src/**/*.{js,tsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '900': '900px',
        '1000': '1000px',
      },
      backgroundColor: {
        'cco': '#BAFF00',
        'darkcco': '#1f1f1f'
      },
      zIndex: {
        '1': 1,
      }
    },
    fontFamily: {
      'sans': 'Poppins, sans-serif'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
