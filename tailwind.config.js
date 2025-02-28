const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        localWhite: "#FFFF",
        localLightGrey: "#eeeeee",
        localLightGreen: "#2B8A8A",
        localGreen: "#018578",
        localError: "#DC2626",
        primary: "#4F46E5",
        textPrimary: "#262C4D",
        textPrimary: "#262C4D",
      },
      width: {
        "button-default": "150px", // กำหนดความกว้างปกติของปุ่ม
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
});
