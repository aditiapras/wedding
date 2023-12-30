/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        garet: ["Garet", "sans-serif"],
        elagern: ["Elagern", "sans-serif"],
        altha: ["Althafia Display", "sans-serif"],
        samudera: ["Samudera", "sans-serif"],
        sharpe: ["Sharpe PERSONAL", "sans-serif"],
        gloock: ["Gloock", "sans-serif"],
        danviska: ["Danviska", "sans-serif"],
        navitism: ["Navitism", "sans-serif"],
        hilsfiger: ["Hilsfiger", "sans-serif"],
        helvetica: ["Helvetica Neue", "sans-serif"],
      },
      colors: {
        wedding: {
          25: "#9D9B94",
          50: "#F3F2F1",
          75: "#284135",
          100: "#034A44",
          200: "#041E1B",
          300: "#9B5050",
          400: "#DD855F",
          500: "#E4C2B9",
          600: "#D59F35",
          700: "#E2B96A",
          800: "#F4EADC",
          900: "#FAF5EF",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
