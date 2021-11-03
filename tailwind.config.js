module.exports = {
  purge: ["./src/*.{js,ts,jsx,tsx}", "./src/components/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      boxShadow: ["disabled"],
      borderColor: ["disabled"],
      textColor: ["disabled"],
      backgroundColor: ['disabled'],
    },
  },
  plugins: [],
};
