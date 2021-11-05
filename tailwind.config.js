const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
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
        "about-img":
          "url('https://w.namu.la/s/5db369ce38cc9091102630d36b59d132110bf7ff6fd11f8287d7622b0968e20ac5d9b8cb3ad3c95e10783512c7e74aa8a95972b386c21e7722a90400706ab2e540679d262a4fd54fc088020ae34bbc3b4cbaecaa0ab65bc27b57522b1ecc29e9c2731c3ca93ba9540efb31ea72c95e25')",
        "footer-img":
          "url('https://images.pexels.com/photos/5865/healthy-spring-young-green-5865.jpg?auto=compress&cs=tinysrgb&dpr=2&w=1920')",
        "contact-img":
          "url('https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1920')",
      },
      colors: {
        // Play Game綠
        green: colors.trueGreen,
        green: {
          100: "#A4D05D",
        },
        // 主題藍
        blue: colors.trueBlue,
        blue: {
          100: "#4F5FAC",
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
