/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-blue": "hsl(221, 100%, 96%)",
        white: "hsl(0, 0%, 100%)",
        lavender: "hsl(241, 100%, 89%)",
        violet: "hsla(256, 72%, 46%, 1)",

        orange: {
          default: "hsl(39, 100%, 56%)",
          light: "hsla(39, 100%, 56%, .1)",
        },
        green: {
          default: "hsl(166, 100%, 37%)",
          light: "hsla(166, 100%, 37%, .1)",
        },

        blue: "hsl(234, 85%, 45%)",

        gray: {
          "dark-gray": "hsl(224, 30%, 27%)",
          light: "hsla(224, 30%, 27%, .5)",
        },

        "slate-blue": {
          light: "hsl(252, 100%, 67%)",
          dark: "hsl(241, 81%, 54%)",
          "very-light": "hsla(241, 81%, 54%, .1)",
        },

        red: {
          default: "hsl(0, 100%, 67%)",
          light: "hsla(0, 100%, 67%, .1)",
        },
      },

      fontFamily: {
        Hanken: "'Hanken Grotesk', sans-serif",
      },
    },
  },
  plugins: [],
};
