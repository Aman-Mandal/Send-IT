/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        svg: './src/assets/lines.svg',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
