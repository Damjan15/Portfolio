module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#5FB4A2",
        darkBlue: "#203A4C",
        grayDarkBlue: "#33323D",
        veryLightGrey: "#FAFAFA",
        lightGrey: "#EAEAEB",
        brightRed: "#F43030"
      },
      fontFamily: {
        sans: ['Ibarra Real Nova', 'sans-serif'],
        public: ['Public Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
};
