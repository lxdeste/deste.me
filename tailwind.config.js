module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translate(-2px, 0)" },
          "50%": { transform: "translate(2px, 0)" },
        },
      },
      animation: {
        shake: "shake 0.1s linear 1",
      },
    },
  },
  plugins: [],
};
