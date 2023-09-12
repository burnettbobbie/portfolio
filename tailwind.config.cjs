/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {

      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xxs: "280px",
        xs: "350px",
        sm1: "500px"
      },
      backgroundImage: {
        "paper-pattern": "url('/src/assets/paper-bg.jpg')",
      },
    },
  },
  plugins: [],
};
