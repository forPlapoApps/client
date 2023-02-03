/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/{pages,app,core}/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
}
