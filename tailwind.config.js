const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jit",
  processCssUrls: true,
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      // backgroundImage: {
      //   Home: "url('./src/assets/images/Home.png')",
      //   Tour1: "url('./src/assets/images/Tour1.png')",
      // },
      colors: {
        // 主題藍色
        blue: {
          main: "#08A6BB",
        },
        // 字體灰色
        gray: {
          h1: "#525151",
          content: "#6F7789",
          content_light: "#AEAEAE",
        },
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
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
