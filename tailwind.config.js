/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/{pages,app,core}/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
