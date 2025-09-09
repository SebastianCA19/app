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
        playfair: ["var(--font-playfair)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
        source: ["var(--font-source-sans)", "sans-serif"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
