module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          100: "#d9e2ef",
          200: "#a0aec0", // Added for dark mode contrast
          300: "#718096", // Added for dark mode contrast
          600: "#2c5282",
          800: "#1a365d",
          900: "#0f2042",
        },
        gold: {
          100: "rgb(243 244 246)",
          300: "rgb(243 244 246)",
          500: "rgb(243 244 246)",
          600: "rgb(243 244 246)",
        },
      },
      backgroundColor: {
        dark: {
          primary: "#0f2042",
          secondary: "#1a365d",
        },
      },
    },
  },
  plugins: [],
};
