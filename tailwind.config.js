/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-bg': '#0f1821',
        'blue-2' : '#26ffcb',
      },
      height: {
        '6': '600px',
      },
      width: {
        '6': '564px',
      }
    },
  },
  plugins: [],
}

