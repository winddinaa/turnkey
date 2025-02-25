const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        localWhite: "#FFFF",
        localLightGrey: "#eeeeee",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
});
