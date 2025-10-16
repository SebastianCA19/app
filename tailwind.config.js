module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        raleway: ["var(--font-raleway)"],
        source: ["var(--font-source-sans)"],
        roboto: ["var(--font-roboto)"],
        sansationBold: ["var(--font-sansation-bold)"],
        sansationLight: ["var(--font-sansation-light)"] 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
