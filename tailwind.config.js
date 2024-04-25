/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "rgba(var(--blue))",
        red: "rgba(var(--red))",
        yellow: "rgba(var(--yellow))",
        grey: "#ededed",
        "light-violet": "#FC59FF",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainbow-blue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        pacifico: ["Pacifico", "serif"],
        oooh_baby: ["Oooh Baby", "serif"],
        bangers: ["Bangers", "serif"],
        bebas_neue: ["Bebas Neue", "serif"],
        anton: ["Anton", "serif"],
      },
      content: {
        brush: "url('/public/assets/brush.png')",
        brush_2: "url('/public/assets/brush_2.png')",
        person1: "url('/public/assets/person-1.png')",
        person2: "url('/public/assets/person-2.png')",
        person3: "url('/public/assets/person-3.png')",
      },
    },
    screens: {
      xxs: "380px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
