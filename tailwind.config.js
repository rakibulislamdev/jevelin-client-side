/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#7D1EFF",
        secondary: "#6D21D5",
        hover: "#AA6DFF",
        link: "#919191",
        dark: "#2B2B2B",
        darkLight: "#363636",
        white: "#fff",
        grayLight: "#A9A9A9"
      },
    },
  },
  plugins: [],
};
