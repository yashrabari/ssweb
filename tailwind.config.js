module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {

    fontFamily: {
      sans: ['apple-system', 'sans-serif'],
      serif: ['apple-system', 'serif'],
    },
    extend: {
      colors: {
        'primary': {
          '50': '#f2fbf6',
          '100': '#e6f6ee',
          '200': '#bfe9d4',
          '300': '#99dbba',
          '400': '#4dc186',
          '500': '#00a652',
          '600': '#00954a',
          '700': '#007d3e',
          '800': '#006431',
          '900': '#005128'
        }
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};