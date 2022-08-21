/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        15: "60px",
      },
      height: {
        15: "60px",
        19: "76px",
      },
    },
  },
  plugins: [],
};
