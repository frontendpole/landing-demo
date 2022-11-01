/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      lime: "#2BCC6A",
      darkGreen: "#156635",
      dark: {
        "01": "#797A7C",
        "02": "#2C2D26",
        "03": "#2B2D26",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    screens: {
      tablet: "640px",

      laptop: "1024px",

      desktop: "1280px",
    },
  },
  plugins: [],
};
