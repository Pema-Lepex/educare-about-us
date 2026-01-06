/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      screens: {
        // Custom TV-specific targets (Ultra-wide or 8K readiness)
        "8k": "7680px",      // 8K Ultra HD TVs
        "tv-wide": "4096px", // DCI 4K (Cinema Standard)
        "6xl": "3840px", // 4K monitors & TVs
        "5xl": "3200px", // Large high-end displays
        "4xl": "2560px", // 2K / QHD monitors
        "3xl": "1920px", // Full HD (most laptops & monitors)
        "2xl": "1536px", // Large laptops / scaled desktops
        xl: "1280px", // Small laptops & desktops
        lg: "1024px", // Tablets (landscape)
        md: "768px", // Tablets (portrait)
        sm: "640px", // Large phones
        xs: "480px", // Small phones
      },
      animation: {
        spin: "spin 1s linear infinite",
        fadeIn: "fade-in 0.5s ease forwards",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
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
        customOriange: {
          100: "#FFA202",
          200: "#F34800",
        },
        "light-brown": "#C4A484",
      },
      fontFamily: {
        "sf-pro": ["SF Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
