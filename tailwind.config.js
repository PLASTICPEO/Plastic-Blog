/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Letters: ["Hedvig Letters Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/img/HeroCover.jpg')",
      },
      colors: {
        "regal-green": "#0B5D1E",
      },
    },
  },
  plugins: [],
};
