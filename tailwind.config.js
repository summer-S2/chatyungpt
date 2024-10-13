/** @type {import('tailwindcss').Config} */

const {
  colors,
  zindex,
  fontSize,
  keyframes,
  animation,
  width,
} = require("./src/styles");

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: colors, // 커스텀 컬러는 대문자로 정의하였음
      fontSize: fontSize,
      zIndex: zindex,
      keyframes: keyframes,
      animation: animation,
      width: width,
      boxShadow: {
        BASIC: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  plugins: [],
};
