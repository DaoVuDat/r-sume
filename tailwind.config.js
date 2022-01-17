module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#262E3F',
        secondary: '#6A69F5',
        secondary_hover: '#7676fc',
        primary_text: '#fdfdfd',
        secondary_text: '#a1a1a1',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        nautigal: ['The Nautigal', 'cursive'],
      },
    },
  },
  plugins: [],
};
