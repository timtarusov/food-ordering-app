/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      animation: {
        bump: "bump 300ms ease-out",
        "meals-appear": "meals-appear 1s ease-out forwards",
        "slide-down": "slide-down 300ms ease-out forwards",
      },
      keyframes: {
        bump: {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(0.9)",
          },
          "30%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(1.15)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        mealsAppear: {
          from: {
            opacity: 0,
            transform: "translateY(-3rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideDown: {
          from: {
            opacity: 0,
            transform: "translateY(-3rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      plugins: [],
    },
  },
};
