/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          100: "#0B0C10",
          200: "#1F2833",
          300: "rgba(69, 162, 158, 0.25)",
          400: "rgb(31, 40, 51, 0.5)",
        },
        bgGradient: {
          "gradient-custom": "linear-gradient(to bottom, #0B0C10, #45A29E)",
        },
        mainColors: {
          100: "#C5C6C7",
          200: "#66FCF1",
          300: "#45A29E",
          400: "#ffef08",
          500: "rgb(46, 99, 96)",
        },
        screens: {
          sm: { max: "319px" },
          "min-sm": { min: "319px" },
          md: { min: "419px" },
          lg: { min: "767px" },
          xl: { min: "1281px" },
          "2xl": { min: "1541px" },
        },
      },
    },
    boxShadow: {
      "main-200-shadow":
        "rgba(69, 162, 158, 0.25) 0px 54px 55px, rgba(69, 162, 158, 0.12) 0px -12px 30px, rgba(69, 162, 158, 0.12) 0px 4px 6px, rgba(69, 162, 158, 0.17) 0px 12px 13px, rgba(69, 162, 158, 0.09) 0px -3px 5px;",
    },
  },
  plugins: [],
};

/**
        #0B0C10: rgba(11, 12, 16, 1)
        #1F2833: rgba(31, 40, 51, 1)
        #C5C6C7: rgba(197, 198, 199, 1)
        #66FCF1: rgba(102, 252, 241, 1)
        #45A29E: rgba(69, 162, 158, 1)
 */
