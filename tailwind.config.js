/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      ls: { max: "896px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "475px" },
      "2xs": { max: "375px" },
    },
  },
  plugins: [],
}
