/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}" // 👈 Add this if your files are in /components
  ],
  theme: {
    extend: {
      colors:{
        "rabbit-red":"#ea2e0e"
      }
    },
  },
  plugins: [],
};
