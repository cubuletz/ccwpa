module.exports = {
  /*
   ** CONTENT
   ** https://tailwindcss.com/docs/content-configuration
   */
  content: [
    "./components/**/*.{js,vue,ts}",
    // './modules/**/*.{js,vue,ts}',
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    // './nuxt.config.{js,ts}', // Moved to nuxt.config.js ?!
  ],

  /*
   ** DARK MODE
   */
  darkMode: "class", // or 'media'

  //

  /*
   ** THEME
   */
  theme: {
    // COLORS
    // Remove default Tailwind colors
    // If neccessary use arbitrary color values (eg. text-[#282d4d])
    // colors: {},

    //

    // SCREENS
    screens: {
      xs: "398px",
      // => @media (min-width: 398px) { ... }
      sm: "524px",
      // => @media (min-width: 640px) { ... }
      md: "776px",
      // => @media (min-width: 768px) { ... }
      lg: "1028px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1532px",
      // => @media (min-width: 1536px) { ... }
    },

    //

    // Z-INDEX
    // zIndex: {},

    //

    // EXTEND THEME
    extend: {
      // Font family
      fontFamily: {
        // sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },

      //

      // Grid template columns
      gridTemplateColumns: {
        // Ref: https://medium.muz.li/responsive-grid-design-ultimate-guide-7aa41ca7892
        // FLUID Grid
        // '2xl-fluid': 'repeat(12, minmax(0, 1fr))', // > 1532px
        "xl-fluid": "repeat(10, minmax(0, 1fr))", // > 1280px < 1532px
        "lg-fluid": "repeat(8, minmax(0, 1fr))", // > 1028px < 1280px
        "md-fluid": "repeat(6, minmax(0, 1fr))", // > 776px < 1028px
        "sm-fluid": "repeat(4, minmax(0, 1fr))", // > 524px < 776px
        "xs-fluid": "repeat(2, minmax(0, 1fr))", // > 378px < 524px
      },
    },
  },

  //

  // Disable hover on mobile
  // https://github.com/tailwindlabs/tailwindcss/discussions/1739
  future: {
    hoverOnlyWhenSupported: true,
  },

  //

  /*
   ** PLUGINS
   */
  plugins: [
    // Tailwindcss plugins
    // require("@tailwindcss/forms"),
    // require('@tailwindcss/aspect-ratio'),
  ],
}
