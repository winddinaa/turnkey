const withMT = require("@material-tailwind/react/utils/withMT");
const { theme } = require("./src/core/theme/theme");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: theme,
  plugins: [require("tailwind-scrollbar")],
});
