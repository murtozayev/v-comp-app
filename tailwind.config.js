/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": "Poppins, sans-serif"
      },
      backgroundColor: {
        buy: "#06A56C",
        new: "red",
        icons:"blue",
        changeIcon: "gold"
      },
      screens: {
        "phone": {
          "max": "500px"
        }
      }
    },
  },
  plugins: [],
}

