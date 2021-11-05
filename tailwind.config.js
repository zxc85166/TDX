const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        Home: "url('@/assets/images/Home.png')",
        Tour1: "url('@/assets/images/Tour1.png')",
      },
      colors: {
        // 主題色
        // green: colors.trueGreen,
        green: {
          left: "#B6BFA1",
          right: "#C6BC64",
        },
        gray: {
          DEFAULT: "#888888",
        },
        blue: {
          DEFAULT: "#0C3255",
        },
        red: {
          DEFAULT: "#A0251D",
        },
        skin: {
          DEFAULT: "#F0874C",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};
