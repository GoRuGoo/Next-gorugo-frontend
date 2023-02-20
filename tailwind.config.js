/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,tsx}", "./components/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kawaii: ["Nico Moji"],
        namemyotyo: ["Noto Serif JP", "serif"],
        sawarabi: ["Sawarabi Mincho"],
      },
      fontWeight: {
        "extra-light": 100,
      },
    },
  },
  plugins: [],
};
