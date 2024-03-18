/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-white": "#ffffff",
        "primary-orange": "#F7673B",
        "primary-blue": "#0F3D51",
        "secondary-orange-dark": "#FFA572",
        "secondary-orange-mid": "#FFE2D6",
        "secondary-orange-light": "#FAF1EF",
        "secondary-pink-dark": "#FF73A4",
        "secondary-pink-mid": "#FFC6DA",
        "secondary-pink-light": "#FFEFF5",
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

