/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('components/asets/coffe.jpg')",
      },
      spacing: {
        128: ["50rem", "80rem"],
      },
    },
  },
  plugins: [],
};
