/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      primary: {
        light: "#ab7ac1",
        DEFAULT: "#8846a8",
        dark: "#62008f",
      },
      secondary: {
        light: "#858AE3",
        DEFAULT: "#7348A0",
        dark: "#4a2574",
      },
      surface: {
        light: "#8d8792",
        DEFAULT: "#292033",
        dark: "#0f0529",
      },
      mixed: {
        light: "#928898",
        DEFAULT: "#605369",
        dark: "#1c0b28",
      },
      accent: {
        light: "#59d9d9",
        DEFAULT: "#48c4c4",
        dark: "#399c9c",
        extraDark: "#2a7272"
      },
      transparent: 'transparent',
    },
    fontFamily: {
      noto: ["Noto Sans Mono", 'monospace']
    },
    extend: {},
  },
  plugins: [],
};
