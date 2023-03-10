/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
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
