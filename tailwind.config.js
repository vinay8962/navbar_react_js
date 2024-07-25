/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: 'rgba(255, 99, 71, 0.5)', // Example RGB color with opacity
      },
    },
  },
  plugins: [],
}

