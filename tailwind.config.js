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
