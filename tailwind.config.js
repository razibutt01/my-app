/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "derm-hero": "url('/derm-hero.jpg')",
        detection: "url('/detection.png')",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
