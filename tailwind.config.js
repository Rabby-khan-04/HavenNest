/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ["Open Sans", "serif"],
        old_standard: ["Old Standard TT", "serif"],
      },
      colors: {
        dark_charcoal: "#333333",
      },
    },
  },
  plugins: [],
};
