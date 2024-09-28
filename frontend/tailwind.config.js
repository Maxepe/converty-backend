/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      primary: {
        100: "#003f47",
        200: "#255259",
        300: "#40666c",
        400: "#5a7a80",
        500: "#748f94",
        600: "#8fa5a8",
      },
      surface: {
        100: "#1f0024",
        200: "#331c39",
        300: "#4a344f",
        400: "#624e65",
        500: "#7a697d",
        600: "#938596",
      },
    },
    fontFamily: {
      noto: ["Noto Sans Mono", 'monospace']
    },
    extend: {},
  },
  plugins: [],
};
