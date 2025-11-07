/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
         fadeIn: 'fade-in 0.5s ease forwards',
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
         fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        primary: {
          50: "#F2F5F6",
          100: "#E6EBEE",
          200: "#C0CED4",
          300: "#99B0BB",
          400: "#4D7487",
          500: "#013954",
          600: "#01334C",
          700: "#012232",
          800: "#001A26",
          900: "#001119",
        },
        custom: {},
        "light-brown": "#66b9a0d762d56f1e200b113c",
      },
      fontFamily: {
        "sf-pro": ["SF Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
